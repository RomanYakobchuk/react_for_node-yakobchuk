import axios from "axios";
import {createBrowserHistory} from 'history';

import {baseURL} from "../constants";
import {authService} from "./auth.service";

const history = createBrowserHistory();
const axiosService = axios.create({
    withCredentials: true,
    baseURL
});

let isRefreshing = false;

axiosService.interceptors.request.use((config) => {
    const access_token = localStorage.getItem('access_token');
    if (access_token) {
        config.headers.Authorization = `${access_token}`;
    }
    return config
});

axiosService.interceptors.response.use(
    (config: { withCredentials: true }) => {
        return config
    },
    async (error) => {
        console.log(error)
        if (error.response?.status === 401 && error.config && !isRefreshing) {
            isRefreshing = true;
            // const refresh = localStorage.getItem('refresh_token');
            try {
                const {data} = await authService.refreshToken();
                const {user, access_token, refresh_token} = data;
                localStorage.setItem('user', JSON.stringify(user));
                localStorage.setItem('access_token', access_token);
                localStorage.setItem('refresh_token', refresh_token);
                isRefreshing = false;
            } catch (e) {
                // console.log(e)
                localStorage.removeItem('user')
                localStorage.removeItem('access_token')
                localStorage.removeItem('refresh_token')
                history.replace(`/login?expSession=true`)
            }
            return axiosService.request(error.config)
        }
    })

export {
    axiosService
}