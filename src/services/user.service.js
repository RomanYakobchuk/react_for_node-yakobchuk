import {axiosService} from "./axios.service";
import {urls} from "../constants";

export const userService = {
    getAllUsers: () => axiosService.get(urls.users),
    getUserById: (id) => axiosService.get(`${urls.users}/${id}`),

}

// CRUD
// Create
// Read
// Update
// Delete