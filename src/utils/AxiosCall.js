import axios from "axios";
// Fallback to `window.location.origin` in production
const baseURL = import.meta.env.VITE_APP_API_BASE_URL;

const Axios = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
        },
});

Axios.interceptors.request.use((config) => {
    if (config.data instanceof FormData) {
        config.headers['Content-Type'] = 'multipart/form-data';
    }
    return config;
}, (error) => Promise.reject(error));

export default Axios;