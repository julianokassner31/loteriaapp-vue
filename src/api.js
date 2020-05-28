import axios from 'axios';
import { Loading, QSpinnerFacebook } from 'quasar';

const API = axios.create({
	baseURL: process.env.PROD
		? 'https://loteria-api.herokuapp.com'
		: 'https://loteria-api.herokuapp.com'
});

API.interceptors.request.use(
	function(config) {
		Loading.show({
			spinner: QSpinnerFacebook,
			spinnerColor: 'positive'
		});
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
