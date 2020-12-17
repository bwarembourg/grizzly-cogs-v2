<template>
  {{ infos }}
</template>
<script>
  import axios from 'axios'

  export default {
    name: 'AlbumList'
  }

  axios
    .get('/.netlify/functions/music')
    .then(response => {
      console.log(response.data);
  })
</script>
