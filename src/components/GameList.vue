<template>
<div class="fadeInUp" v-wow data-wow-delay="0.2s" data-wow-duration="2s">
  <Loader :loaded="loaded" />
  <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 lg:mx-8 my-1 ">
    <Game :game="game" v-for="game in games" :key="game.name" />
  </div>
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
