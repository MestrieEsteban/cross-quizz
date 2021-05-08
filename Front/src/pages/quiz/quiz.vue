<template>
  <q-page>
    <div class="container">
      <br />
      <h1 class="title">{{ quiz.name }}</h1>
      <h1 class="subtitle">Nombre de question : {{ quiz.question.length }}</h1>
      <!-- {{quiz.question.length}} -->
      <div v-if="quizStart == 0">
        <b-button type="is-primary" @click="startQuiz">
          Démarrer le quiz
        </b-button>
      </div>
      <div v-if="quizStart == 2">
        Temps : {{ timer }} secondes
		<br />
		Nombre de bonne réponse : {{quizEtat.nbCorrectResponse}}
      </div>
      <div v-if="quizStart == 1">
        Question {{ quizEtat.currentQuestion }}/{{ quiz.question.length }}
        <br />
        <br />
        <h1 class="subtitle">
          {{ quiz.question[quizEtat.currentQuestion - 1].title }}
        </h1>
        <div class="buttons">
          <b-button type="is-primary" @click="addResponse(1, quiz.question[quizEtat.currentQuestion - 1].response[0].correctResponse)">
            {{
              quiz.question[quizEtat.currentQuestion - 1].response[0].response1
            }}
          </b-button>
          <b-button type="is-primary" @click="addResponse(2, quiz.question[quizEtat.currentQuestion - 1].response[0].correctResponse)">
            {{
              quiz.question[quizEtat.currentQuestion - 1].response[0].response2
            }}
          </b-button>
          <b-button type="is-primary" @click="addResponse(3, quiz.question[quizEtat.currentQuestion - 1].response[0].correctResponse)">
            {{
              quiz.question[quizEtat.currentQuestion - 1].response[0].response3
            }}
          </b-button>
          <b-button type="is-primary" @click="addResponse(4, quiz.question[quizEtat.currentQuestion - 1].response[0].correctResponse)">
            {{
              quiz.question[quizEtat.currentQuestion - 1].response[0].response4
            }}
          </b-button>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style></style>
<script>
export default {
  name: 'PageIndex',
  methods: {
    startQuiz() {
      // this.$buefy.notification.open('Clicked!!')
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
		
      if (this.quizEtat.currentQuestion != this.quiz.question.length) {
        this.quizEtat.currentQuestion += 1
      } else {
        clearTimeout(this.timerT)
        this.quizStart = 2
      }
	  if(response == correctResponse){
		  this.quizEtat.nbCorrectResponse += 1
	  }
    },
  },
  data() {
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      //id: this.$router.currentRoute.params.id,
      timerT: '',
      timer: 0,
      quizStart: 0,
      quizEtat: {
        currentQuestion: 1,
		nbCorrectResponse: 0,
      },
      quiz: {
        name: 'Harry potter',
        question: [
          {
            id: 2,
            title: "De quoi la famille Dursley a-t'elle le plus peur?",
            response: [
              {
                response1: 'Des voisins curieux',
                response2: 'Des hiboux',
                response3: 'De Harry',
                response4: 'De tout ce qui peut les faire paraître étranges',
                correctResponse: 4,
              },
            ],
          },
          {
            id: 3,
            title: 'Qui est Gellert Grindelwald ?',
            response: [
              {
                response1: 'Un professeur de Poudlard',
                response2: 'Un mangemort',
                response3: "un ami d'Ariana",
                response4: 'Aucune de ces propositions',
                correctResponse: 3,
              },
            ],
          },
          {
            id: 4,
            title: "Qu'est ce que la S.A.L.E ?",
            response: [
              {
                response1: 'Un surnom donné à Hermione par Ron',
                response2: 'Un association créée par Harmione',
                response3: 'Un nom donné à la cabane de Hagrid',
                response4: 'Une salle secrète dans Poudlard',
                correctResponse: 2,
              },
            ],
          },
          {
            id: 5,
            title:
              "Dans HP6, qu'utilise Harry pour sauver Ron de l'empoisonnement dans le bureau de Slughorn ?",
            response: [
              {
                response1: 'Un Bézoart',
                response2: 'Une potion apprise durant le cours de Potions',
                response3: "Ce n'est pas lui qui l'a sauvé, c'est Slughorn",
                response4: "Du chocolat fourré au filtre d'amour",
                correctResponse: 1,
              },
            ],
          },
          {
            id: 6,
            title:
              "Quel titre porte le livre qu'offrent Fred & Georges à Ron dans le 7eme Tome ?",
            response: [
              {
                response1: 'Le Quidditch à travers les âges',
                response2:
                  "Filtres d'amour à l'usage de jeunes sorciers désesperés",
                response3: 'Douze moyens infaillibles de séduire les sorcières',
                response4: 'Bien vivre sa rousseur',
                correctResponse: 3,
              },
            ],
          },
        ],
      },
    }
  },
}
</script>
