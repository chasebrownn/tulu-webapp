import axios from 'axios';

const url = 'http://localhost:5000/routes';

export const createUser = (newUser) => axios.post(url, newUser);


//export const fetchPosts = () => axios.get(url);
//export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);