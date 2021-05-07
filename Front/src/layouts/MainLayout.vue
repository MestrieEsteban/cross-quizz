<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
		<nav class="navbar" role="navigation" aria-label="main navigation">
			<div class="navbar-brand">
				<a class="navbar-item" href="/">
				<span style="font-size:23px;"><b>Cross-quiz</b></span>
				</a>

				<a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				</a>
			</div>

			<div id="navbarBasicExample" class="navbar-menu">
				<div class="navbar-start">
				<a class="navbar-item" href="#/quiz/les_quiz">
					Les Quiz
				</a>
				</div>
				<div class="navbar-end">
				<div class="navbar-item">
					<div class="buttons">
					<a class="button is-primary" href="#/inscription">
						<strong>Sign up</strong>
					</a>
					<a class="button is-light" href="#/connexion">
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
export default {
  name: 'MainLayout',
}
</script>
