// services/tokenService.ts
import { cookies } from 'next/headers'; // SSR
import Cookies from 'js-cookie';
import CookiesName from "@/constants/CookiesName";        // Client

/**
 * to get tokens use
 * const token = await TokenService.getToken('token-name');
 */
export const TokenService = {
    setToken: (tokenName = CookiesName.TokenNames.AccessToken, token:string, expiresInSeconds:number) => {
        if (typeof window !== 'undefined') {
            // client: store in cookie
            Cookies.set(tokenName, token, {
                expires: expiresInSeconds ? expiresInSeconds / (24 * 60 * 60) : undefined, // seconds → days
            });
        }
    },

    /**
     * Use:
     * const token = await TokenService.getToken();
     */
    getToken: async (tokenName: string = CookiesName.TokenNames.AccessToken): Promise<string | null> => {
        if (typeof window !== 'undefined') {
            // client
            return Cookies.get(tokenName) || null;
        } else {
            // SSR
            const cookieStore = await cookies();
            const token = cookieStore.get(tokenName)?.value ?? null;
            return token;
        }
    },

    removeToken: (tokenName: string = CookiesName.TokenNames.AccessToken) => {
        if (typeof window !== 'undefined') {
            Cookies.remove(tokenName);
        }
    },
};
