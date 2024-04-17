import axios from 'axios';

const api="http://localhost:3000/api"

export const regis = async (user) => axios.post(`${api}/register`, user)
export const regisproduc = async (regisproduc) => axios.post(`${api}/product/register`, regisproduc)
export const regisprov = async (regisprov) => axios.post(`${api}/dealer/register`, regisprov)
export const login = async (user) => axios.post(`${api}/login`, user)