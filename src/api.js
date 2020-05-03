import Axios from 'axios';

const API = {
	get: uri => Axios.get(`https://loteria-api.herokuapp.com/${uri}`),
	post: uri => Axios.post(`https://loteria-api.herokuapp.com/${uri}`)
};

export default API;
