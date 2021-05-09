<template>
  <q-page>
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

export default {
  name: "Login",
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
          localStorage.setItem('token', result.data.signinUser.token)
          localStorage.setItem('id', result.data.signinUser.user.id)
          this.$router.push('/user/profil')
        }
      })
    }
  }
}
</script>

