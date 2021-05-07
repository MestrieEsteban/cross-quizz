<template>
<q-page>


  <div class="column is-12-widescreen">
    <div class="field">
    <label class="label">Name</label>
    <div class="control">
      <input class="input" type="text" placeholder="Text input">
    </div>
  </div>
  </div>
  <div class="columns columnCenter">
  <div class="field">
    <label class="label">Email</label>
    <div class="control has-icons-left has-icons-right">
      <input class="input is-danger" type="email" placeholder="Email input" value="hello@">
      <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
      <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
    </div>
    <p class="help is-danger">This email is invalid</p>
  </div>
  </div>
  <div class="columns columnCenter">
  <div class="field">
    <p class="control has-icons-left">
      <input class="input" type="password" placeholder="Password">
      <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
    </p>
  </div>
  </div>
  <div class="columns columnCenter">
  <div class="field is-grouped">
    <div class="control">
      <button class="button is-link">Submit</button>
    </div>
    <div class="control">
      <button class="button is-link is-light">Cancel</button>
    </div>
  </div>
  </div>
</q-page>
</template>

<script>
export default {
  name: "Inscription"
}
</script>

<style scoped>

</style>
