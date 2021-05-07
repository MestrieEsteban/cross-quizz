<template>
  <q-page>
    <div class="container">
      <br>
      <div class="columns">
        <div class="column">
          <div class="card">
            <div class="card-image">
              <figure class="image is-6by1">
                <img
                  src="https://dl.img-news.com/dl/img/s2/dl/2020/07/harry-potter-movies-leaving-hbo-max.jpg"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">Harry potter</p>
                </div>
              </div>

              <div class="content">
				  <a href="#/quiz/Harry Potter/1">
                	<button class="button">Faire le quiz</button>
				  </a>
              </div>
            </div>
          </div>
        </div>
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
}
</script>
