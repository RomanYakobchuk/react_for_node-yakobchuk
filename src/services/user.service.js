import {axiosService} from "./axios.service";
import {urls} from "../constants";

export const userService = {
    getAllUsers: () => axiosService.get(urls.users),
    getUserById: (id) => axiosService.get(`${urls.users}/${id}`),
    createUser: (user) => axiosService.post(urls.users, user),
    updateUserById: (id, newUser) => axiosService.put(`${urls.users}/${id}`, newUser),
    deleteUserById: (id) => axiosService.delete(`${urls.users}/${id}`),
}

// CRUD
// Create
// Read
// Update
// Delete