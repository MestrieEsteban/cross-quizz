<template>
  <q-page>
    <navBar/>
    <div class="container is-max-desktop">
      <section>
        <h1 class="titleHome"> Historique </h1>
        <div v-for='(quiz, index) in historyQuiz' :key="index">
          <div class="border">
            <br>
            <b-field class="titleQuiz"> Quiz n°{{quiz.quizId}} - {{name}}</b-field>
            <b-field class="contentQuiz"> Temps effectué pour faire le quiz : {{quiz.time}} secondes</b-field>
            <b-field class="contentQuiz"> Nombre de réponse correct : {{quiz.correctResponse}} </b-field>
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
import {getProfilById, ALL_GETQUIZ_QUERY}from 'src/apollo/queries'
export default {
  name: "historique",
  components: {navBar},
  data(){
    return{
      id: this.$q.localStorage.getItem('id'),
      historyQuiz:[],
      name: '',
      question: [],
    }
  },
  mounted() {
      this.getHistory()
      this.getQuiz()
  },
  methods: {
    async getHistory() {
      this.$apollo.query({
        query: getProfilById,
        variables: {
          id: this.id,
        },
      }).then(result => {
       if(result.data.getUserById.userQuiz.length > 0)
       {
        this.historyQuiz = result.data.getUserById.userQuiz
       }
      })
      .catch(error => {
        if(error !== undefined)
        {
          alert("Impossible de récupérer votre historique")
        }
      })
    },
    async getQuiz() {
      console.log(this.id)
      this.$apollo.query({
        query: ALL_GETQUIZ_QUERY,
        loadingKey: 'loading',
        variables: {
          id: this.id,
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
  }
}
</script>
