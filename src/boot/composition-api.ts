import VueCompositionApi from '@vue/composition-api';
import { date } from 'quasar';
import { boot } from 'quasar/wrappers';

export default boot(({ Vue }) => {
	Vue.filter('dateFormat', function(value: number, format: string) {
		return date.formatDate(value, format);
	});

	Vue.use(VueCompositionApi);
});
