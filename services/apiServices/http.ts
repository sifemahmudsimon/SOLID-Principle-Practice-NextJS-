import axios from 'axios';
import {EnvService} from "@/services/envServices";

export const httpPublic = axios.create({
    baseURL: EnvService.getBaseUrl(),
    withCredentials: false,
    timeout: 15000,
});

export const httpBasicAuth = axios.create({
    baseURL: EnvService.getBaseUrl(),
    withCredentials: false,
    timeout: 15000,
    auth: EnvService.basicAuthCredential(),
});
