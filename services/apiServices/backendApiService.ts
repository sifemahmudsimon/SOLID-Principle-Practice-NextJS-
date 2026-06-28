import {httpBasicAuth, httpPublic} from './http';
import {exampleEndPoints} from "@/services/apiServices/endPoints";
import {TokenService} from "@/services/tokenService";
import CookiesName from "@/constants/CookiesName";


/**
 * Backend API service providing all endpoints for APIs.
 *
 * @returns {object} Object containing all backend API functions.
 *
 * // Example GET with optional headers
 * getExampleData: (locale: string = 'en', headers: any) => {
 *     const path = `${locale === 'en' ? '' : '/bn'}${exampleEndPoints}`;
 *     return httpPublic.get(path, { headers }); // caller provides headers
 * },
 *     // Example POST (Basic Auth) with optional headers
 *     postExampleData: (data: any, headers: any) => {
 *     return httpBasicAuth.post(exampleEndPoints, data, { headers });
 * },
 *     // Example GET with JWT or custom headers
 *     getUsers: (headers: any) => {
 *     return httpPublic.get(exampleEndPoints, { headers }); // headers come from caller
 * },
 *     // Example POST with JWT or custom headers
 *     createUser: (data: any, headers: any) => {
 *     return httpPublic.post(exampleEndPoints, data, { headers }); // headers come from caller
 * },
 */
export const BackendApiService = () => {
    return {
        // Example GET with optional headers
        getExampleData: async (locale: string = 'en', headers: any) => {
            const path = `${locale === 'en' ? '' : '/bn'}${exampleEndPoints}`;
            return httpPublic.get(path, { headers }); // caller provides headers
        },

        // Example POST (Basic Auth) with optional headers
        postExampleData: async (data: any, headers: any) => {
            return httpBasicAuth.post(exampleEndPoints, data, { headers });
        },

        // Example GET with JWT or custom headers
        getUsers: async  (headers: any) => {
            return httpPublic.get(exampleEndPoints, { headers }); // headers come from caller
        },

        // Example POST with JWT or custom headers
        createUser: async (data: any, headers: any) => {
            return httpPublic.post(exampleEndPoints, data, { headers }); // headers come from caller
        },
    };
};

// Use when Token is required
export const fetchTokenIfNeeded = async (): Promise<string | null> => {
    let token = await TokenService.getToken();
    // TODO : need token expiry logic
    if (token) return token;

    try {
        const response = await httpBasicAuth.post(exampleEndPoints);

        const tokenData = response.data?.token;
        const expiresIn = response.data?.expires_in;

        if (tokenData) {
            TokenService.setToken(CookiesName.TokenNames.AccessToken, tokenData, expiresIn);
            token = tokenData;
        }

        return token;
    } catch (err) {
        console.error('Error fetching token:', err);
        return null;
    }
};
