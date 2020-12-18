<template>
  <div class="flex ">
    <div class="flex-1">
      <Loader :loaded="loaded" />
      <Show :showData="show" v-for="show in shows" :key="show.date" />
    </div>
    <div class="w-1/2">
      <img src="img/hello2.jpeg" class="w-full"/>
    </div>
  </div>
  
</template>
<script>
  import Show from './Show'
  import Loader from './Loader'
  import axios from 'axios'

  export default {
    components: { Loader, Show },
    name: 'ShowList',
    data: function() {
      return { shows: [], loaded: false }
    },
    mounted: function() {
      axios
        .get('/.netlify/functions/shows')
        .then(response => { 
          this.shows = response.data
          this.loaded = true
        })
    }
  }
</script>