<template>
<q-page>
  <section>
    <b-field label="Name">
      <b-input v-model="name"></b-input>
    </b-field>

    <b-field label="Email"
             type="is-danger"
             message="This email is invalid">
      <b-input type="email"
               value="john@"
               maxlength="30">
      </b-input>
    </b-field>

    <b-field label="Username"
             type="is-success"
             message="This username is available">
      <b-input value="johnsilver" maxlength="30"></b-input>
    </b-field>

    <b-field label="Password">
      <b-input type="password"
               value="iwantmytreasure"
               password-reveal>
      </b-input>
    </b-field>

    <b-field label="Message">
      <b-input maxlength="200" type="textarea"></b-input>
    </b-field>
  </section>
</q-page>
</template>

<script>
import { Table, Input } from 'buefy';

export default {
  name: "Inscription",
  data() {
    return {
      name: 'John Silver'
    }
  }
}
</script>

