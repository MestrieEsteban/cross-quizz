
const routes = [
  {
    path: '',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '', component: () => import('pages/Index.vue')},
      { path: 'Inscription', name: 'Inscription', component: () => import('pages/Inscription.vue') },
      { path: 'Connexion', component: () => import('pages/Login.vue')},
      { path: 'quiz/les_quiz', component: () => import('pages/quiz/les_quiz.vue')},
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
