import axios from 'axios';
const request = (req) => axios.create({
  baseURL: 'http://localhost:5000/',
  headers: {
    cookie: req.get('cookie') || ''
  }
});
export default request;
//request.get('/api/users');
//request.get('http://localhost:5000/api/users');