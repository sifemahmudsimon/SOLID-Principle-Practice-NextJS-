import { httpPublic, httpBasicAuth } from './http';
import { GetServerSidePropsContext } from 'next';

let initialized = false;

export const initApi = (ctx?: GetServerSidePropsContext) => {
    if (typeof window !== 'undefined' && initialized) return;

    // Choose which instances you want to attach interceptors to
    const instances = [httpPublic, httpBasicAuth];

    instances.forEach((instance) => {
        instance.interceptors.request.use((config:any) => {
            // SSR → forward cookies
            if (ctx?.req?.headers?.cookie) {
                config.headers.cookie = ctx.req.headers.cookie;
            }
            return config;
        });

        instance.interceptors.response.use(
            (res: any) => res,
            (err: { response: any; }) => Promise.reject(err?.response || err),
        );
    });

    if (typeof window !== 'undefined') {
        initialized = true;
    }
};
