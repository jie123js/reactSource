import axios from 'axios';
//在跨域的时候携带cookie
axios.defaults.withCredentials=true
const request = axios.create({
    baseURL:'http://localhost:5000'
});
export default request;