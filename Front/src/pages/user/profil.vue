<template>
  <q-page>
    <marginIos/>
    <navBar/>
    <div class="container is-max-desktop">
      <section>
        <h1 class="titleHome"> Profil </h1>
        <b-field label="Name">
          <b-field> {{ this.name}}</b-field>
        </b-field>
        <br>
        <b-field label="Email">
          <b-field> {{ this.email}}</b-field>
        </b-field>
      </section>
    </div>
  </q-page>
</template>

<script>
import navBar from 'components/navBar'
import marginIos from 'components/marginIos'
import {getProfilById}from 'src/apollo/queries'
export default {
  name: "profil",
  components: {navBar, marginIos},
  data(){
    return{
      id: this.$q.localStorage.getItem('id'),
      name: "",
      email: "",
    }
  },
  mounted() {
    this.getInfoProfil()
  },
  methods: {
    async getInfoProfil() {
      await this.$apollo.query({
        query: getProfilById,
        variables: {
          id: this.id,
        },
      }).then(result => {
       if(result.data.getUserById.name !== "" && result.data.getUserById.email !== "")
       {
         this.name = result.data.getUserById.name
         this.email = result.data.getUserById.email
       }
      })
      .catch(error =>{
        if(error !== undefined)
        {
          alert("Impossible de récupérer les information du profil")
        }
      })
    }
  }
}
</script>
