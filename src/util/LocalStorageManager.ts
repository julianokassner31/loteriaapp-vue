export default class LocalStorageManager {
	static KEY_TOKEN = 'token';
	static USER_NAME = 'username';

	static setToken(token: string) {
		localStorage.setItem(this.KEY_TOKEN, token);
	}

	static getToken(): string | null {
		return localStorage.getItem(this.KEY_TOKEN);
	}

	static setNomeUsuario(nomeUsuario: string) {
		localStorage.setItem(this.USER_NAME, nomeUsuario);
	}

	static getNomeUsuario(): string | null {
		return localStorage.getItem(this.USER_NAME);
	}

	static removeItem(key: string) {
		localStorage.removeItem(key);
	}
}
