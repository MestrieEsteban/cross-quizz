<template>
  <nav class="navbar" role="navigation" style="background-color: #EAE8E1" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link :to="{ name: 'accueil' }" class="navbar-item">
        <span style="font-size:23px;"><b>Cross-quiz</b></span>
      </router-link>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navMenu">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" id="navMenu">
      <div class="navbar-start">

        <router-link :to="{ name: 'listQuiz' }" class="navbar-item">
          Les Quiz
        </router-link>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons" v-if='token === "" && id === 0'>
            <router-link :to="{ name: 'inscription' }" class="button is-primary">
              <strong>Sign up</strong>
            </router-link>
            <router-link :to="{ name: 'connexion' }" class="button is-light">
              Log in
            </router-link>
          </div>
          <div class="buttons" v-else>
            <router-link :to="{ name: 'profil' }" class="button is-primary">
              <strong>My profil</strong>
            </router-link>
            <a class="button is-light" v-on:click="clearStorage">
              Logout
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script src="src/components/getLocalStorage.js"	type="module"></script>

