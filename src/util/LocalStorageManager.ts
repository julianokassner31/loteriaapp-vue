export default class LocalStorageManager {
	static KEY_TOKEN = 'token';

	static setToken(token: string) {
		localStorage.setItem(this.KEY_TOKEN, token);
	}

	static getToken(): string | null {
		return localStorage.getItem(this.KEY_TOKEN);
	}
}
