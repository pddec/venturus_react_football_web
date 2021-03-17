import axios from 'axios';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
const api = axios.create({
    
    baseURL: 'https://football98.p.rapidapi.com/liga/scorers'
});

export default api;