import { AxiosInstance } from 'axios';
import { boot } from 'quasar/wrappers';
import API from '../api';

declare module 'vue/types/vue' {
	interface Vue {
		$axios: AxiosInstance;
	}
}

export default boot(({ Vue }) => {
	Vue.prototype.$axios = API;
});
