<template>
  <q-page>
    <marginIos/>
    <navBar/>
    <div class="container is-max-desktop">
      <section>
        <h1 class="titleHome"> Historique </h1>
        <div v-for="(quiz, index) in historyQuiz" :key="index">
          <div class="border">
            <br>
            <b-field class="titleQuiz"> <strong>{{quiz.message}}</strong> </b-field>
            <b-field class="titleQuiz"> Quiz n°{{quiz.quizId}} - {{quiz.name}} </b-field>
            <b-field class="contentQuiz"> Temps effectué pour faire le quiz : {{quiz.time}} secondes</b-field>
            <b-field class="contentQuiz"> Nombre de réponse correct : {{quiz.correctResponse}} </b-field>
            <b-field class="contentQuiz"> {{new Date(quiz.createdAt *1).getDate()}}/{{new Date(quiz.createdAt *1).getMonth()+1}}/{{new Date(quiz.createdAt *1).getFullYear()}} {{new Date(quiz.createdAt *1).getHours()}}:{{new Date(quiz.createdAt *1).getMinutes()}}</b-field>
            <br>
          </div>
          <br>
        </div>
      </section>
    </div>
  </q-page>
</template>

<script>
import navBar from 'components/navBar'
import marginIos from 'components/marginIos'
import {getProfilById, ALL_GETQUIZ_QUERY}from 'src/apollo/queries'
export default {
  name: "historique",
  components: {navBar, marginIos},
  data(){
    return{
      id: this.$q.localStorage.getItem('id'),
      historyQuiz: [],
      name: '',
      nbQuestion: 0,
      message: '',
    }
  },
  mounted() {
    this.getHistory()
	this.$forceUpdate();
  },
  methods: {
    async getHistory() {
      this.$forceUpdate();
      await this.$apollo.query({
        query: getProfilById,
        loadingKey: 'loading',
        variables: {
          id: this.id,
        },
      }).then(result => {
        if(result.data.getUserById.userQuiz.length > 0)
        {
          this.addElementInHistory(result.data.getUserById.userQuiz)
        }
      })
        .catch(error => {
          if(error !== undefined)
          {
            alert("Impossible de récupérer votre historique")
          }
        })
    },
    addElementInHistory(data)
    {
      data.forEach((history) => {
        this.historyElements = history
        this.getQuiz(history.quizId, history)
      })
      if(data[data.length-1].name !== undefined && data[data.length-1].message !== undefined ) {
        try {
          this.$q.localStorage.set('quiz', data)
        } catch (e) {
          console.log(e)
        }
      }
      this.historyQuiz = this.$q.localStorage.getItem('quiz')
	  this.historyQuiz.reverse()
    },
    async getQuiz(id, data) {
      await this.$apollo.query({
        query: ALL_GETQUIZ_QUERY,
        loadingKey: 'loading',
        variables: {
          id: id,
        },
      }).then(result => {
        if(result.data.quizById.name !== "" && result.data.quizById.question.length > 0)
        {
          data.name = result.data.quizById.name
          if( data.correctResponse !== result.data.quizById.question.length)
          {
            data.message = "Quiz échoué"
          }
          else {
            data.message = "Quiz réussit"
          }
        }
      })
        .catch(error => {
          if(error !== undefined)
          {
            alert("Impossible de récupérer les info du quiz")
          }
        })
    },
  }
}
</script>
