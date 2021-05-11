const routes = [
  {
    path: '',
    component: () => import('layouts/MainLayout'),
    children: [
      {path: '', name: 'accueil', component: () => import('src/pages')},
    ]
  },
  {
    path: '/auth',
    component: () => import('layouts/MainLayout'),
    children: [
      {path: 'inscription', name: 'inscription', component: () => import('pages/auth/inscription')},
      {path: 'connexion', name: 'connexion', component: () => import('pages/auth/connexion')},
    ]
  },
  {
    path: '/user',
    component: () => import('layouts/MainLayout'),
    children: [
      {path: 'profil', name: 'profil', component: () => import('pages/user/profil')},
      {path: 'historique', name: 'historique', component: () => import('pages/user/historique')},
    ]
  },
  {
    path: '/quiz',
    component: () => import('layouts/MainLayout'),
    children: [
      {path: 'lesQuiz', name: 'listQuiz', component: () => import('pages/quiz/lesQuiz')},
      {path: ':id', name: 'quiz', props: true, component: () => import('pages/quiz/quiz')},
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404')
  }
]

export default routes
