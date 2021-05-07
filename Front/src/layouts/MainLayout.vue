<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@5.8.55/css/materialdesignicons.min.css">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css">    </q-header>
    <q-page-container>
		<nav class="navbar" role="navigation" aria-label="main navigation">
			<div class="navbar-brand">
				<a class="navbar-item" href="/">
				<span style="font-size:23px;"><b>Cross-quiz</b></span>
				</a>

				<a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navMenu">
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				</a>
			</div>

      <div class="navbar-menu" id="navMenu">
				<div class="navbar-start">
				<a class="navbar-item" href="#/quiz/lesQuiz">
					Les Quiz
				</a>
				</div>
				<div class="navbar-end">
				<div class="navbar-item">
					<div class="buttons">
					<a class="button is-primary" href="#/user/inscription">
						<strong>Sign up</strong>
					</a>
					<a class="button is-light" href="#/user/connexion">
						Log in
					</a>
					</div>
				</div>
				</div>
			</div>
			</nav>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import 'buefy/dist/buefy.css'
export default {
  name: 'MainLayout',
}
</script>
