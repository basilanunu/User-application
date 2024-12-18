import axios from 'axios';

const BASE_URL = 'https://dummyjson.com/users';

export const fetchUsers = (limit = 30) => axios.get(`${BASE_URL}?limit=${limit}`);
export const fetchUserById = (id) => axios.get(`${BASE_URL}/${id}`);
