import axios from 'axios';

const url = 'http://localhost:5000/posts'; // this is the url pointing to the server

export const fetchPost = () => axios.get(url); // this is the function that will fetch the data from the server