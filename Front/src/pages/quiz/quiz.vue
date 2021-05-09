<template>
  <q-page>
    <div class="container">
      <br/>
      <h1 class="title">{{ quizById.name }}</h1>
      <h1 class="subtitle">Nombre de question : {{ quizById.question.length }}</h1>
      <!-- {{quizById.question.length}} -->
      <div v-if="quizStart == 0">
        <b-button type="is-primary" @click="startQuiz">
          Démarrer le quiz
        </b-button>
      </div>
      <div v-if="quizStart == 2">
        Temps : {{ timer }} secondes
        <br/>
        Nombre de bonne réponse : {{ quizEtat.nbCorrectResponse }}
      </div>
      <div v-if="quizStart == 1">
        Question {{ quizEtat.currentQuestion }}/{{ quizById.question.length }}
        <br/>
        <br/>
        <h1 class="subtitle">
          {{ quizById.question[quizEtat.currentQuestion - 1].title }}
        </h1>
        <div class="buttons">
          <b-button type="is-primary"
                    @click="addResponse(1, quizById.question[quizEtat.currentQuestion - 1].response[0].correctResponse)">
            {{
              quizById.question[quizEtat.currentQuestion - 1].response[0].response1
            }}
          </b-button>
          <b-button type="is-primary"
                    @click="addResponse(2, quizById.question[quizEtat.currentQuestion - 1].response[0].correctResponse)">
            {{
              quizById.question[quizEtat.currentQuestion - 1].response[0].response2
            }}
          </b-button>
          <b-button type="is-primary"
                    @click="addResponse(3, quizById.question[quizEtat.currentQuestion - 1].response[0].correctResponse)">
            {{
              quizById.question[quizEtat.currentQuestion - 1].response[0].response3
            }}
          </b-button>
          <b-button type="is-primary"
                    @click="addResponse(4, quizById.question[quizEtat.currentQuestion - 1].response[0].correctResponse)">
            {{
              quizById.question[quizEtat.currentQuestion - 1].response[0].response4
            }}
          </b-button>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style></style>
<script>
import {ALL_GETQUIZ_QUERY} from 'src/apollo/queries'

export default {
  name: 'quiz',
  methods: {
    startQuiz() {
      this.startTimer()
      this.quizStart = 1
    },
    startTimer() {
      this.timerT = setTimeout(() => {
        this.timer += 1
        this.startTimer()
      }, 1000)
    },
    addResponse(response, correctResponse) {
      if (this.quizEtat.currentQuestion != this.quizById.question.length) {
        this.quizEtat.currentQuestion += 1
      } else {
        clearTimeout(this.timerT)
        this.quizStart = 2
      }
      if (response == correctResponse) {
        this.quizEtat.nbCorrectResponse += 1
      }
    },
  },
  data() {
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      routeId: this.$route.params.id,
      timerT: '',
      timer: 0,
      quizStart: 0,
      quizEtat: {
        currentQuestion: 1,
        nbCorrectResponse: 0,
      },
    }
  },
  apollo: {
    quizById: {
      query: ALL_GETQUIZ_QUERY,
      loadingKey: 'loading',
      variables() {
        return {
          id: this.routeId,
        }
      },
    },
  },
}
</script>
