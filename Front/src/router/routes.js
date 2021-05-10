const routes = [
  {
    path: '',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '', name: 'accueil', component: () => import('src/pages')},
    ]
  },
  {
    path: '/auth',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: 'inscription', name: 'inscription', component: () => import('pages/auth/inscription.vue')},
      {path: 'connexion', name: 'connexion', component: () => import('pages/auth/login.vue')},
    ]
  },
  {
    path: '/user',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: 'profil', name: 'profil', component: () => import('pages/user/profil.vue')},
    ]
  },
  {
    path: '/quiz',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: 'lesQuiz', name: 'listQuiz', component: () => import('pages/quiz/lesQuiz.vue')},
      {path: ':id', name: 'quiz', props: true, component: () => import('pages/quiz/quiz.vue')},
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
