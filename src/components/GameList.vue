<template>
  <Loader :loaded="loaded" />
  <div class="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mx-8 my-1">
    <Game :game="game" v-for="game in games" :key="game.name" />
  </div>
</template>
<script>
import Loader from './Loader'
import Game from './Game'
import axios from 'axios'

export default {
  components: { Loader, Game },
  name: "GameList",
  data: function() {
    return { games: [], loaded: false }
  },
  mounted: function() {
    axios
      .get('/.netlify/functions/games')
      .then(response => { 
        this.games = response.data
        this.loaded = true
      })
  }
}
</script>