import Axios from 'axios';

const url = process.env.PROD
	? 'https://loteria-api.herokuapp.com'
	: 'http://localhost:8080';

const API = {
	get: uri => Axios.get(url.concat(uri)),
	post: uri => Axios.post(url.concat(uri))
};

export default API;
