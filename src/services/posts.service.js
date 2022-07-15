import {axiosService} from "./axios.service";
import {urls} from "../constants";

export const postsService = {
    getPosts: (userId) => axiosService.get(`${urls.posts}?userId=${userId}`)
}