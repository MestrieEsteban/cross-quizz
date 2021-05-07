<template>
<q-page>
  <div class="container">
  <section>
    <h1 class="titleHome"> S'inscrire </h1>
    <b-field label="Name">
      <b-input aria-placeholder="name"></b-input>
    </b-field>
    <b-field label="Email">
      <b-input type="email"
               aria-placeholder="email"
               maxlength="30">
      </b-input>
    </b-field>
    <b-field label="Password">
      <b-input type="password"
               aria-placeholder="password"
               password-reveal>
      </b-input>
    </b-field>
    <b-button type="is-info">Envoyer</b-button>

  </section>
  </div>
</q-page>
</template>

<script>
export default {
  name: "Inscription",
}
</script>

