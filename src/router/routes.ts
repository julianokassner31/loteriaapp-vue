import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
	{
		path: '/',
		component: () => import('layouts/MainLayout.vue'),
		children: [
			{ path: '', component: () => import('pages/Index.vue') },
			{ path: 'megasena', component: () => import('pages/MegaSena.vue') }
		]
	}
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
	routes.push({
		path: '*',
		component: () => import('pages/Error404.vue')
	});
}

export default routes;
