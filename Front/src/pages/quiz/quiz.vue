<template>
  <q-page>
    <div class="container">
      <br>
      <div class="columns">
        {{QuizName}}
        {{id}}
      </div>
    </div>
  </q-page>
</template>

<style>
.card {
  max-width: 300px;
}
</style>
<script>
export default {
  name: 'PageIndex',
  props: {
    id: String,
    name: String
  },
  data(){
	  console.log(this.$router.currentRoute.params.name)
	  return{
		  QuizName: this.$router.currentRoute.params.name,
		  id: this.$router.currentRoute.params.id
	  }
  }
  
}
</script>
