import axios from 'axios';
import { Loading } from 'quasar';

const API = axios.create({
	baseURL: process.env.PROD
		? 'https://loteria-api.herokuapp.com'
		: 'https://loteria-api.herokuapp.com',
	timeout: 3000
});

API.interceptors.request.use(
	function(config) {
		Loading.show();
		return config;
	},
	function(error) {
		Loading.hide();
		return Promise.reject(error);
	}
);

API.interceptors.response.use(
	function(response) {
		Loading.hide();
		return response;
	},
	function(error) {
		Loading.hide();
		return Promise.reject(error);
	}
);

export default API;
