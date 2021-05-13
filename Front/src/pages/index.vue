<template>
  <q-page>
    <marginIos/>
    <navBar/>
    <div class="container is-max-desktop">
      <div class="columns is-centered">
        <h1 class="titleHome"> Bienvenue sur cross-quiz</h1>
      </div>
      <div class="columns is-centered imgAlign">
        <img src="~assets/img-quiz.png" width="380" height="200"/>
      </div>
    </div>
  </q-page>
</template>

<script>
import navBar from 'components/navBar'
import marginIos from 'components/marginIos'

export default {
  name: 'PageIndex',
  components: { navBar, marginIos },
}
</script>
