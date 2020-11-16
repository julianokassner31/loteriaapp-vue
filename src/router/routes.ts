import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
	{
		path: '/',
		component: () => import('layouts/MainLayout.vue'),
		children: [
			{ path: '', component: () => import('pages/Index.vue') },
			{
				path: 'buscarjogos',
				component: () => import('pages/buscarjogos/BuscarConcurso.vue')
			},
			{
				path: 'counterposicoes',
				component: () => import('pages/counterposicoes/CounterPosicoes.vue')
			},
			{
				path: 'allconcursos',
				component: () => import('pages/allconcursos/AllConcursos.vue')
			},
			{
				path: 'login',
				component: () => import('pages/login/Login.vue')
			}
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
