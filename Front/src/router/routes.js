
const routes = [
<<<<<<< HEAD
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

=======
	{
		path: '',
		component: () => import('layouts/MainLayout.vue'),
		children: [
			{ path: '', component: () => import('src/pages') },
			{ path: 'user/inscription', component: () => import('pages/user/inscription.vue') },
			{ path: 'user/connexion', component: () => import('pages/user/login.vue') },
			{ path: 'quiz/lesQuiz', component: () => import('pages/quiz/lesQuiz.vue') },
			{ path: 'quiz/:id', name: 'quiz', props: true, component: () => import('pages/quiz/quiz.vue') },
		]
	},
>>>>>>> 36ef57d78d2e6c40ee6a92c9749ab9c7a9028ce4

	// Always leave this as last one,
	// but you can also remove it
	{
		path: '*',
		component: () => import('pages/Error404.vue')
	}
]

export default routes
