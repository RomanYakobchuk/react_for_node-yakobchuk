import {axiosService} from "./axios.service";
import {urls} from "../constants";

const authService = {
    login: (user) => axiosService.post(urls.login, user),
    refreshToken: () => axiosService.post(urls.refreshToken)
}

export {
    authService
}