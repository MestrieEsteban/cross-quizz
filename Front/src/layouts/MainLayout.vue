<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@5.8.55/css/materialdesignicons.min.css">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css">
    </q-header>
    <q-page-container>
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
              <div class="buttons" v-if='token === ""'>
                <router-link :to="{ name: 'inscription' }" class="button is-primary">
                    <strong>Sign up</strong>
                </router-link>
                <router-link :to="{ name: 'connexion' }" class="button is-light">
                    Log in
                </router-link>
              </div>
              <div class="buttons" v-else>
                <router-link :to="{ name: 'profil' }" class="button is-primary">
                  <strong>Mon Profile</strong>
                </router-link>
                <a class="button is-light" v-on:click="clearStorage">
                 Se deconnecter
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import 'buefy/dist/buefy.css'

export default {
  name: 'MainLayout',
  data()
  {
    return{
      token: "",
    }
  },
  mounted() {
    this.getToken()
  },
  methods:{
    getToken()
    {
      if(localStorage.getItem('token') === null)
      {
        this.token = ""
      }
      else {
        this.token = localStorage.getItem('token')
      }
    },
    clearStorage()
    {
      if(localStorage.getItem('token') !== null && localStorage.getItem('id') !== null)
      {
        localStorage.removeItem('token')
        localStorage.removeItem('id')
        this.getToken()
        if(this.token === "")
        {
          this.$router.push('/')
        }
      }
    }
  }
}
</script>
