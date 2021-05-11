<template>
  <q-page>
    <navBar/>
    <div class="container">
      <section>
        <h1 class="titleHome"> S'inscrire </h1>
        <b-field label="Name">
          <b-input aria-placeholder="name"
                   v-model="name"></b-input>
        </b-field>
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
                   v-model="password">
          </b-input>
        </b-field>
        <b-button type="is-link" v-on:click="signupUser">Envoyer</b-button>

      </section>
    </div>
  </q-page>
</template>

<script>
import {signUpUser} from 'src/apollo/mutation'
import navBar from 'components/navBar'
export default {
  name: "Inscription",
  components: {navBar},
  data() {
    return {
      name: "",
      email: "",
      password: ""
    }
  },
  methods: {
    async signupUser() {
      await this.$apollo.mutate({
        mutation: signUpUser,
        variables: {
          name: this.name,
          email: this.email,
          password: this.password,
        },
      }).then(result => {
        if (result.data.signupUser.token != "" && result.data.signupUser.user.name == this.name) {
          this.$router.push('/auth/connexion')
        }
      })
      .catch(error => {
        if (error !== undefined)
        {
          alert("Votre compte existe déjà")
        }
      })
    }
  },
}
</script>

