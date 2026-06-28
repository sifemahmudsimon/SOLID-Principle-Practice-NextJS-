import {TokenService} from "@/services/tokenService";


function basicHeader() {
    return { 'Content-Type': 'application/json' }
}

/**
 * send token using
 * const token = TokenService.getToken()
 */
function authHeader(token?: string) {
    return {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
    };
}
/**
 * HeaderService provides utility functions to generate headers for different api,
 * user authentication states, and channels.
 */
export const HeaderService = {
    basicHeader,
    authHeader
};
