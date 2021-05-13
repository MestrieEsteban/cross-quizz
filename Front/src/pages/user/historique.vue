<template>
  <q-page>
    <navBar/>
    <div class="container is-max-desktop">
      <section>
        <h1 class="titleHome"> Historique </h1>
        <div v-for='(quiz, index) in historyQuiz' :key="index">
          <div class="border">
            <br>
            <b-field class="titleQuiz"> <strong>{{quiz.message}}</strong> </b-field>
            <b-field class="titleQuiz"> Quiz n°{{quiz.quizId}} - {{quiz.name}} </b-field>
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
      nbQuestion: 0,
      message: '',
    }
  },
  mounted() {
      this.getHistory()
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
         this.addElementInHistory()
       }
      })
      .catch(error => {
        if(error !== undefined)
        {
          alert("Impossible de récupérer votre historique")
        }
      })
    },
    async addElementInHistory()
    {
      this.historyQuiz.forEach((history, index) =>
      {
        this.getQuiz(history.quizId, index)
      })
    },
    async getQuiz(id, index) {
      this.$apollo.query({
        query: ALL_GETQUIZ_QUERY,
        loadingKey: 'loading',
        variables: {
          id: id,
        },
      }).then(result => {
        if(result.data.quizById.name !== "" && result.data.quizById.question.length > 0)
        {
            this.historyQuiz[index].name = result.data.quizById.name
          if( this.historyQuiz[index].correctResponse !== result.data.quizById.question.length)
          {
            this.historyQuiz[index].message = "Quiz échoué"
          }
          else {
            this.historyQuiz[index].message = "Quiz réussit"
          }
        }
        console.log(this.historyQuiz)
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
