<template>
  <div class="lg:flex">
    <div class="flex-1 overflow-y-auto shows">
      <Loader :loaded="loaded" />
      <Show :showData="show" v-for="show in shows" :key="show.date" />
    </div>
    <div class="lg:w-1/2 hidden lg:block">
      <Carousel timer="3000" :gallery="gallery()" />
    </div>
  </div>
  
</template>
<script>
  import Show from './Show'
  import Loader from './Loader'
  import Carousel from './Carousel'
  import axios from 'axios'

  export default {
    components: { Loader, Show, Carousel },
    name: 'ShowList',
    data: function() {
      return { shows: [], loaded: false }
    },
    methods: {
      gallery: function() {
        return [
          { id: 0, src: "img/hello2.jpeg", credit: "Loïse Doyen", link: "https://loisedoyen.com/" },
          { id: 1, src: "img/hello.jpg", credit: "Loïse Doyen", link: "https://loisedoyen.com/" },
          { id: 2, src: "img/hello3.jpg", credit: "Chiptography", link: "https://chiptography.com/" },
        ]
      }
    },
    mounted: function() {
      axios
        .get('/.netlify/functions/shows')
        .then(response => {
          response.data.forEach(show => show.date = show.date.replaceAll('-', '.'))
          this.shows = response.data
          this.loaded = true
        })
    }
  }
</script>
<style scoped>
  .shows {
    height: 800px;
  }
</style>