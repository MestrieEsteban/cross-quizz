<template>
  <b-navbar style="background-color: #EAE8E1">
    <template #start>
      <b-navbar-item>
        <router-link :to="{ name: 'accueil' }">
          <span class="navbarItemTitle"><b>Cross-quiz</b></span>
        </router-link>
      </b-navbar-item>
      <b-navbar-item v-if='token !== "" && id !== 0' >
        <router-link :to="{ name: 'listQuiz' }">
          <span class="navbarItemMenu"> Les Quiz </span>
        </router-link>
      </b-navbar-item>
    </template>
    <template #end>
      <b-navbar-item>
        <div class="buttons" v-if='token === "" && id === 0'>
          <router-link class="button is-primary" :to="{ name: 'inscription' }">
            <strong>S'inscrire</strong>
          </router-link>
        </div>
        <div  v-else>
          <router-link class="button is-primary" :to="{ name: 'historique' }">
            <strong>Historique</strong>
          </router-link>
        </div>
      </b-navbar-item>
      <b-navbar-item>
        <div class="buttons" v-if='token === "" && id === 0'>
          <router-link class="button is-primary" :to="{ name: 'connexion' }">
            Se connecter
          </router-link>
        </div>
        <div v-else>
          <router-link class="button is-primary" :to="{ name: 'profil' }">
            <strong>Mon profil</strong>
          </router-link>
        </div>
      </b-navbar-item>
      <b-navbar-item>
        <div class="buttons" v-if='token !== "" && id !== 0'>
          <a class="button is-primary" v-on:click="clearStorage">
            <strong> Logout </strong>
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: 'navBar',
  data()
  {
    return{
      token: "dd",
      id: 0
    }
  },
  mounted() {
    this.getlocalStorage()
  },
  methods:{
    getlocalStorage()
    {
      if(this.$q.localStorage.getItem('token') === null)
      {
        this.token = ""
      }
      else {
        this.token = this.$q.localStorage.getItem('token')
      }
      if(this.$q.localStorage.getItem('id') === null)
      {
        this.id = 0
      }
      else {
        this.id = this.$q.localStorage.getItem('token')
      }
    },
    clearStorage()
    {
      if(this.$q.localStorage.getItem('token') !== null && this.$q.localStorage.getItem('id') !== null)
      {
        this.$q.localStorage.clear()
        this.getlocalStorage()
        if(this.token === "" && this.id === 0)
        {
          alert("Deconnexion au compte")
          if(this.$router.currentRoute.name !== 'accueil')
          {
            this.$router.push('/')
          }
        }
      }
    }
  }
}
</script>

