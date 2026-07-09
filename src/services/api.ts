import axios from 'axios';

export const BASE_URL = 'http://127.0.0.1:8000/api';

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }});

    instance.interceptors.request.use((config) => {

    const token = localStorage.getItem('token');

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;

    });

export default instance;