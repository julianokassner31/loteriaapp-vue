import Axios from 'axios';

const url = process.env.PROD
	? 'http://localhost:8080'
	: 'https://loteria-api.herokuapp.com';

const API = {
	get: uri => Axios.get(url.concat(uri)),
	post: uri => Axios.post(url.concat(uri))
};

export default API;
