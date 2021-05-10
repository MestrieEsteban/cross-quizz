export default {
  name: 'navBar',
  data()
  {
    return{
      token: "dd",
      id: 0
    }
  },
  mounted() {
    this.getlocalStorage()
  },
  methods:{
    getlocalStorage()
    {
      if(this.$q.localStorage.getItem('token') === null)
      {
        this.token = ""
      }
      else {
        this.token = this.$q.localStorage.getItem('token')
      }
      if(this.$q.localStorage.getItem('id') === null)
      {
        this.id = 0
      }
      else {
        this.id = this.$q.localStorage.getItem('token')
      }
    },
    clearStorage()
    {
      if(this.$q.localStorage.getItem('token') !== null && this.$q.localStorage.getItem('id') !== null)
      {
        this.$q.localStorage.clear()
        this.getlocalStorage()
        if(this.token === "" && this.id === 0)
        {
          if(this.$router.currentRoute.name !== 'accueil')
          {
            this.$router.push('/')
          }
        }
      }
    }
  }
}
