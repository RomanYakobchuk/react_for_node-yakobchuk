import {axiosService} from "./axios.service";

import {urls} from "../constants";

const userService = {
    register: (user) => axiosService.post(urls.register, user),
    getAll: () => axiosService.get(urls.allUsers)
}

export {
    userService
}