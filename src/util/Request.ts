import { AxiosInstance } from 'axios';
import LocalStorageManager from './LocalStorageManager';

export default class Request {
	static headers = {
		Authorization: LocalStorageManager.getToken()
	};

	static comAuth(axios: AxiosInstance) {
		return {
			post: (url: string) =>
				axios.post(url, {
					headers: this.headers
				}),
			get: (url: string) => {
				debugger;
				axios.get(url, {
					headers: this.headers
				});
			}
		};
	}
}
