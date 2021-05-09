<template>
  <q-page>
    <navBar/>
    <div class="container">
      <div class="columns is-centered">
        <h1 class="titleHome"> Bienvenue sur cross-quiz</h1>
      </div>
      <div class="columns is-centered">
        <img src="~assets/img-quiz.png" width="400" height="200"/>
      </div>
    </div>
  </q-page>
</template>

<script>
import navBar from 'components/navBar'

export default {
  name: 'PageIndex',
  components: { navBar },
}
</script>
