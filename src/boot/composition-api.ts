import * as Sentry from '@sentry/browser';
import { Vue as VueIntegration } from '@sentry/integrations';
import VueCompositionApi from '@vue/composition-api';
import { date } from 'quasar';
import { boot } from 'quasar/wrappers';

export default boot(({ Vue }) => {
	Vue.filter('dateFormat', function(value: number, format: string) {
		return date.formatDate(value, format);
	});

	Sentry.init({
		dsn:
			'https://b0f4d0cb21b04870aa27f1ead5e5f2df@o277743.ingest.sentry.io/5253212',
		integrations: [
			new VueIntegration({ Vue, attachProps: true, logErrors: true })
		]
	});

	Vue.use(VueCompositionApi);
});
