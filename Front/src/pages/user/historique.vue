<template>
  <q-page>
    <navBar/>
    <div class="container">
      <section>
        <h1 class="titleHome"> Historique </h1>
        <div v-for='(quiz, index) in historyQuiz' :key="index">
          <div class="border">
            <br>
            <b-field class="titleQuiz"> Quiz n°{{quiz.quizId}} </b-field>
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
import {getProfilById}from 'src/apollo/queries'
export default {
  name: "historique",
  components: {navBar},
  data(){
    return{
      id: this.$q.localStorage.getItem('id'),
      historyQuiz:[],
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
       }
      })
      .catch(error => {
        if(error !== undefined)
        {
          alert("Impossible de récupérer votre historique")
        }
      })
    }
  }
}
</script>
