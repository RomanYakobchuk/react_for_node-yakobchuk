// const baseURL = process.env.REACT_APP_API_JSON;
const baseURL = process.env.REACT_APP_API_HEROKU;

const urls = {
    users: '/users',
    posts: '/posts',
    comments: '/comments',
}

export default baseURL;


export {
    urls
}