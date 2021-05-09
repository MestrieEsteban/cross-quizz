<template>
  <q-page>
    <navBar/>
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
import navBar from 'components/navBar'

export default {
  name: "profil",
  components: {navBar}
}
</script>
