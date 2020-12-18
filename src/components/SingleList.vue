<template>
  <Loader :loaded="loaded" />
  <div class="grid sm:grid-cols-4 lg:grid-cols-8 mx-8 my-1">
    <Single  v-for="single in singles" :key="single.name" :singleData="single" />
  </div>
</template>
<script>
  import axios from 'axios'
  import Single from './Single'
  import Loader from './Loader'

  export default {
    components: { Single, Loader },
    name: 'SingleList',
    data: function() {
      return { singles: [], loaded: false}
    },
    mounted: function() {
        axios
          .get('/.netlify/functions/singles')
          .then(response => { 
            this.singles = response.data
            this.loaded = true
          })
    }
  }
</script>