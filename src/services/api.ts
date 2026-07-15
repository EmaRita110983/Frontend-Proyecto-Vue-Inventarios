import axios from 'axios';

export const BASE_URL = 'http://127.0.0.1:8000/api';

//LAS LINEAS COMENTADAS SON PARA CONSUMIR BACKEND DESDE UN SERVIDOR, HABRIA QUE COMENTAR LA LINEA 12

//export const BASE_URL = "https://backinventarios.blumbit.net";

//const BASE_URL_API = `${BASE_URL}/api`

const instance = axios.create({
    baseURL: BASE_URL,
    //baseURL: BASE_URL_API,

    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

instance.interceptors.request.use((config) => {

    const token = localStorage.getItem('token');

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;

});

export default instance;