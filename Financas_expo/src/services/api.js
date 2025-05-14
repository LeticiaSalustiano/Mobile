import axios from "axios";

const api = axios.create({
     baseURL: 'http://10.59.47.45:3333',
});

export default api;