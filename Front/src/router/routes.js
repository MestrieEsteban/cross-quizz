
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '', component: () => import('src/pages')},
    ]
  },
  {
    path: '/auth',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'inscription', component: () => import('pages/auth/inscription.vue') },
      { path: 'connexion', component: () => import('pages/auth/login.vue')},
    ]
  },
  {
    path: '/user',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'profil', component: () => import('pages/user/profil.vue')},
    ]
  },
  {
    path: '/quiz',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'lesQuiz', component: () => import('pages/quiz/lesQuiz.vue')},
      { path: ':name/:id', props: true, component: () => import('pages/quiz/quiz.vue')},
    ]
  },

	// Always leave this as last one,
	// but you can also remove it
	{
		path: '*',
		component: () => import('pages/Error404.vue')
	}
]

export default routes
