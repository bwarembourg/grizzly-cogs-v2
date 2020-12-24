<template>
    <div class="flex ">
    <div class="w-1/3">
      <Carousel :gallery="gallery()" timer="3000" height="500px" />
    </div>
    <div class="w-2/3 p-4">
      <p class="text-justify text-lg">
        <strong class="text-green-400">Run! Run! Jump! Punch!</strong> is a Chiptune / Punk rock band from Lille, France in which I play Synth, 
        and drum-programming.
        <br /><br />
        Born from a collision between Punk-rock and lo-fi/chiptune electronic music, Run! Run! Jump! Punch! delivers happiness where soft synth 
        melodies melt with catchy and energetic saturated guitars. Add a pinch of football-like chorus voices, and you will get all the ingredients 
        of their music, to listen to on records or to sweat in live !
        <br /><br />
      </p>
      <SubTitle name="RELEASES" />
      <Loader :loaded="loaded" />
      <div class="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mx-8 my-1">
        <Album  v-for="album in albums" :key="album.name" :albumData="album"/>
      </div>
    </div>

  </div>
</template>
<script>
import SubTitle from './SubTitle'
import Loader from './Loader'
import axios from 'axios'
import Album from './Album'
import Carousel from './Carousel'

export default {
  name: "RunRunJumpPunch",
  components: { SubTitle, Loader, Album, Carousel },
  data: function() {
    return { albums: [], loaded: false }
  },
  methods: {
    gallery: function() {
      return [
        { id: 0, src: "img/rrjp.jpg", credit: "Loïse Doyen", link: "https://loisedoyen.com/" },
        { id: 1, src: "img/rrjp2.jpg", credit: "Loïse Doyen", link: "https://loisedoyen.com/" },
        { id: 2, src: "img/rrjp3.jpg", credit: "Loïse Doyen", link: "https://loisedoyen.com/" },
      ]
    }
  },
  mounted: function() {
      axios
        .get('/.netlify/functions/rrjpalbums')
        .then(response => { 
          this.albums = response.data
          this.loaded = true
        })
  }
}
</script>