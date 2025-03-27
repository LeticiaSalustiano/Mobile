//https://economia.awesomeapi.com.br/json/all
//Rota para Bitcoin > Real all/BTC-BRL

import axios from "axios";

export const api = axios.create({
 baseURL: 'https://economia.awesomeapi.com.br/json/'
});

export default api;
