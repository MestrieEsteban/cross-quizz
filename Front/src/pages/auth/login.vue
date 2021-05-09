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
    <b-button type="is-info">Envoyer</b-button>
  </section>
  </div>
</q-page>
</template>

<script>
import { useQuery, useResult } from '@vue/apollo-composable'
import {siginUser}  from 'src/apollo/queries'
export default {
  name: "Login",
  data() {
    return {
      email : "",
      password: ""
    }
  },
  apollo: {
    user() {
      if(this.email !== "" && this.password !== ""){
        return {
          // gql query
          query: siginUser,
          // Static parameters
          variables: {
            email: this.email,
            password: this.password,
          },
        }
      }
      else {
        return ""
      }
    },
  },
  methods: {

    async LoginIn() {
      console.log()
    }

      /*
      const result = await this.$apollo.queries({
        queries: siginUser,
        variables: {
          email: this.email,
          password: this.password,
        },
      })
      if(result.data.signinUser.token != "" )
      {
        localStorage.setItem('token', result.data.signupUser.token)
        this.$router.push('/user/profil')
      }*/
  },
}
</script>

