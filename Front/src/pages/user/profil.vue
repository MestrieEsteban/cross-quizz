<template>
  <q-page>
    <div class="container">
      <section>
        <h1 class="titleHome"> Profil </h1>
        <b-field label="Name">
          <b-input disabled="true"></b-input>
        </b-field>
        <br>
        <b-field label="Email">
          <b-input type="email"
                   maxlength="30"
                   disabled="true">
          </b-input>
        </b-field>
      </section>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "profil",
  mounted() {
    console.log(localStorage.getItem('token'))
  }
}
</script>
