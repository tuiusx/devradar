import axios from 'axios';

const api = axios.create({
    baseURL: 'Seu IP com a porta do backend',
});

export default api;