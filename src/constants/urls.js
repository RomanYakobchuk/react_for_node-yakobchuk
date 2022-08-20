const baseURL = process.env.REACT_APP_API;

const urls = {
    login: '/auth/login',
    register: '/auth/register',
    allUsers: '/users',
    refreshToken: '/auth/refreshToken'

}

export {
    baseURL,
    urls
}