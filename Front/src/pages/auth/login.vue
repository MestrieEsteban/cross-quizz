<template>
  <q-page>
    <navBar/>
    <div class="container">
      <section>
        <h1 class="titleHome"> Se connecter </h1>
        <b-field label="Email">
          <b-input type="email"
                   aria-placeholder="email"
                   maxlength="30"
                   v-model="email">
          </b-input>
        </b-field>
        <b-field label="Password">
          <b-input type="password"
                   aria-placeholder="password"
                   password-reveal
                   v-model="password">>
          </b-input>
        </b-field>
        <b-button type="is-info" v-on:click="LoginIn">Envoyer</b-button>
      </section>
    </div>
  </q-page>
</template>

<script>
import {siginUser} from 'src/apollo/queries'
import navBar from 'components/navBar'
export default {
  name: "Login",
  components: {navBar},
  data() {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    async LoginIn() {
      this.$apollo.query({
        query: siginUser,
        variables: {
          email: this.email,
          password: this.password,
        },
      }).then(result => {
        if (result.data.signinUser.token !== "" && result.data.signinUser.user.id !== 0) {
          try {
            this.$q.localStorage.set('token', result.data.signinUser.token)
          } catch (e) {
            console.log(e)
          }
          try {
            this.$q.localStorage.set('id', result.data.signinUser.user.id)
          } catch (e) {
            console.log(e)
          }
          this.$q.sessionStorage.set('token', result.data.signinUser.token)
          this.$q.sessionStorage.set('id', result.data.signinUser.user.id)
          if (this.$q.sessionStorage.getItem('token') !== "" && this.$q.sessionStorage.getItem('id') !== 0) {
            this.$router.push({name: 'profil'})
          }
        }
      })
    }
  }
}
</script>

