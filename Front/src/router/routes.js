
const routes = [
  {
    path: '',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '', component: () => import('src/pages')},
      { path: 'user/inscription', component: () => import('pages/user/inscription.vue') },
      { path: 'user/connexion', component: () => import('pages/user/login.vue')},
      { path: 'quiz/lesQuiz', component: () => import('pages/quiz/lesQuiz.vue')},
		  { path: 'quiz/:name/:id', props: true, component: () => import('pages/quiz/quiz.vue')},
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
