import axios from 'axios';

// This is the API endpoint as per mentioned in Crio platform
const url = 'https://xmemetero.herokuapp.com/memes';
//' this is deployed heroku backend

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);

