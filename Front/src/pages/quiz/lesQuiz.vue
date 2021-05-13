<template>
  <q-page>
    <navBar/>
    <div class="container is-max-desktop">
      <br/>
      <div class="columns">
        <div v-for="quiz in getQuiz" :key="quiz.id">
          <div class="column">
            <div class="card">
              <div class="card-image">
                <figure class="image is-6by1">
                  <img :src="quiz.image" alt="Placeholder image"/>
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">{{ quiz.name }}</p>
                  </div>
                </div>

                <div class="content">
                  <router-link :to="{ name: 'quiz', params: {id: quiz.id } }">
                    <button class="button">Faire le quiz</button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script>
import {ALL_QUIZ_QUERY} from 'src/apollo/queries'
import navBar from 'components/navBar'
export default {
  name: 'PageIndex',
  components: {navBar},
  apollo: {
    getQuiz: {
      query: ALL_QUIZ_QUERY,
    },
  },
}
</script>
