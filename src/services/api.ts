import axios from 'axios';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
const api = axios.create({
    baseURL:"https://cors-anywhere.herokuapp.com/https://www.api-football.com/demo/v2/",
});

export default api;