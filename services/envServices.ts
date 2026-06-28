/**
 * EnvService
 * Provides environment variables for API URLs and credentials
 */

export const EnvService = {

    getBaseUrl: (): string => {
        const url = process.env.NEXT_PUBLIC_API_BASE_URL;
        if (!url) {
            throw new Error('API base URL is not defined in environment variables');
        }
        return url;
    },

    basicAuthCredential: (): { username: string; password: string } => {
        const username = process.env.NEXT_PUBLIC_BASIC_USERNAME;
        const password = process.env.NEXT_PUBLIC_BASIC_PASSWORD;

        if (!username || !password) {
            throw new Error('Basic Auth credentials are not defined in environment variables');
        }

        return { username, password };
    },

};
