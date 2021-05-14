<template>
  <q-page>
    <marginIos/>
    <navBar/>
    <div class="container is-max-desktop">
      <br/>
      <div v-if="quizStart == 2">
      <b-field class="messageQuiz">{{message}}</b-field>
        <br>
      </div>
      <h1 class="title">{{ name }}</h1>
      <br>
      <h1 class="subtitle">Nombre de question : {{ question.length }}</h1>
      <div v-if="quizStart == 0">
        <b-button type="is-primary" @click="startQuiz">
          Démarrer le quiz
        </b-button>
      </div>
      <div v-if="quizStart == 1">
        Question {{ quizEtat.currentQuestion }}/{{ question.length }}
        <br/>
        <br/>
        <h1 class="subtitle">
          {{ question[quizEtat.currentQuestion - 1].title }}
        </h1>
        <div class="buttons">
          <b-button type="is-primary"
                    @click="addResponse(1, question[quizEtat.currentQuestion - 1].response[0].correctResponse)">
            {{
              question[quizEtat.currentQuestion - 1].response[0].response1
            }}
          </b-button>
          <b-button type="is-primary"
                    @click="addResponse(2, question[quizEtat.currentQuestion - 1].response[0].correctResponse)">
            {{
              question[quizEtat.currentQuestion - 1].response[0].response2
            }}
          </b-button>
          <b-button type="is-primary"
                    @click="addResponse(3, question[quizEtat.currentQuestion - 1].response[0].correctResponse)">
            {{
              question[quizEtat.currentQuestion - 1].response[0].response3
            }}
          </b-button>
          <b-button type="is-primary"
                    @click="addResponse(4, question[quizEtat.currentQuestion - 1].response[0].correctResponse)">
            {{
              question[quizEtat.currentQuestion - 1].response[0].response4
            }}
          </b-button>
        </div>
      </div>
      <div v-if="quizStart == 2">
        <b-field class="subtitle">Temps : {{ timer }} secondes</b-field>
        <b-field class="subtitle">Nombre de bonne réponse : {{ quizEtat.nbCorrectResponse }}</b-field>
      </div>
    </div>
  </q-page>
</template>

<style></style>
<script>
import {ALL_GETQUIZ_QUERY} from 'src/apollo/queries'
import {addStats} from 'src/apollo/mutation'
import navBar from 'components/navBar'
import marginIos from 'components/marginIos'
export default {
  name: 'quiz',
  components: {navBar, marginIos},
  data() {
    return {
      routeId: this.$route.params.id,
      userId: this.$q.localStorage.getItem('id'),
      name: '',
      question: [],
      timerT: '',
      timer: 0,
      quizStart: 0,
      message: '',
      quizEtat: {
        currentQuestion: 1,
        nbCorrectResponse: 0,
      },
    }
  },
  mounted() {
    this.getQuiz()
  },
  methods: {
    async getQuiz() {
      await this.$apollo.query({
        query: ALL_GETQUIZ_QUERY,
        loadingKey: 'loading',
        variables: {
          id: this.routeId,
        },
      }).then(result => {
        if(result.data.quizById.name !== "" && result.data.quizById.question.length > 0)
       {
         this.name = result.data.quizById.name
         this.question = result.data.quizById.question
       }
      })
        .catch(error => {
          if(error !== undefined)
          {
            alert("Impossible de récupérer les info du quiz")
          }
        })
    },
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
		if (response === correctResponse) {
		  this.quizEtat.nbCorrectResponse += 1
		}
      if (this.quizEtat.currentQuestion !== this.question.length) {
        this.quizEtat.currentQuestion += 1
      } else {
        clearTimeout(this.timerT)
        this.quizStart = 2
        if(this.quizStart === 2) {
          if(this.quizEtat.nbCorrectResponse !== this.question.length)
          {
            this.message = "Quiz échoué"
          }
          else {
            this.message = "Quiz réussit"
          }
          this.addScoreByUser()
        }
      }
    },
    async addScoreByUser() {
      await this.$apollo.mutate({
        mutation: addStats,
        variables: {
          userId: this.userId,
          quizId: this.routeId,
          time: String(this.timer),
          correctResponse: this.quizEtat.nbCorrectResponse,
        },
      }).then(result => {
        if (result.data.addStats.time !== "" && result.data.addStats.correctResponse >=0)
        {
          alert("Votre score a été sauvegarder dans l'historique des quiz")
        }
        this.$forceUpdate()
      })
      .catch( error => {
        if(error !== undefined)
        {
          alert("Impossible de sauvegarder votre score dans l'historique des quiz")
        }
      })
    }
  },

}
</script>
