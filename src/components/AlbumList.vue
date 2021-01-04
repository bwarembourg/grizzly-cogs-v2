<template>
  <Loader :loaded="loaded" />
  <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 lg:mx-8 my-1">
    <Album  v-for="album in albums" :key="album.name" :albumData="album" :isRRJP="false" />
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
</script>