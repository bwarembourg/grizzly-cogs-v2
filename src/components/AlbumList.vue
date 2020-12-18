<template>
  <Loader :loaded="loaded" />
  <div class="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mx-8 my-1">
    <Album  v-for="album in albums" :key="album.name" :albumData="album" />
  </div>
</template>
<script>
/*eslint-disable no-unused-vars*/ 
  import axios from 'axios'
  import Album from './Album'
  import Loader from './Loader'

  export default {
    name: 'AlbumList',
    components: { Album, Loader },
    data: function() {
      return { albums: [], loaded: false }
    },
    mounted: function() {
        axios
          .get('/.netlify/functions/albums')
          .then(response => { 
            this.albums = response.data
            this.loaded = true
          })
    }
  }

  // let infos = ''
  // infos = 'a'
  // axios
  //   .get('/.netlify/functions/music')
  //   .then(response => {
  //     infos = response.data
  // })
</script>
<style scoped>
  .loader {
    -webkit-animation:spin 4s linear infinite;
    -moz-animation:spin 4s linear infinite;
    animation:spin 4s linear infinite;
  }
</style>
