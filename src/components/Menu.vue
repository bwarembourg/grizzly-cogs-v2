<template>
  <div class="hidden xl:block">
    <nav class="flex flex-row bg-green-400 shadow-xl fixed top-0 z-30 w-full">
      <div class="ml-2 w-28 py-1 mr-4">
        <a href="/#hello"><img alt="Grizzly Cogs" src="../assets/logo.png"></a>
      </div>
      <MenuItem item-title="Releases" link="/#releases" :newtab="false" />
      <MenuItem item-title="Game soundtracks" link="/#game-soundtracks" :newtab="false"/>
      <MenuItem item-title="Listen" link="http://grizzlycogs.bandcamp.com" :newtab="true"/>
      <MenuItem item-title="Shows" link="/#shows" :newtab="false" />
      <MenuItem item-title="Run! Run! Jump! Punch!" link="/#rrjp" :newtab="false" />
      <MenuItem item-title="Contact / About" link="/#contact" :newtab="false" />
      <MenuItem item-title="Weekly Beats 2020-2021" link="weekly-beats" :newtab="false" :isRouterLink="true" />
      <MenuItem item-title="Merch" link="https://grizzlycogs.bandcamp.com/merch" :newtab="true" />
      <MiniMenuItem icon="fab fa-bandcamp" link="http://grizzlycogs.bandcamp.com" />
      <MiniMenuItem icon="fab fa-spotify" link="https://open.spotify.com/artist/6DYBO57C80qqR0VvCWLwCl?si=n13UY0f_T6OFQw-lRJm5Iw" />
      <MiniMenuItem icon="fab fa-instagram" link="https://www.instagram.com/grizzlycogs/" />
      <MiniMenuItem icon="fab fa-twitter" link="https://twitter.com/GrizzlyCogs" />
      <MiniMenuItem icon="fab fa-facebook" link="https://www.facebook.com/GrizzlyCogs/" />
    </nav>
  </div>

  <!-- MOBILE -->
  
  <!-- open button -->
  <div class="xl:hidden fixed top-2 right-2 bg-green-400 px-2 py-1 rounded text-lg text-white z-30 cursor-pointer" v-if="!menuOpened">
    <i class="fas fa-bars" v-on:click="menuOpened = true"></i>
  </div>
  <!-- close button -->
  <div class="xl:hidden fixed top-2 right-2 text-2xl text-green-400 z-50 cursor-pointer" v-if="menuOpened">
    <i class="fas fa-times" v-on:click="menuOpened = false"></i>
  </div>

  <div class="xl:hidden bg-white w-full h-full fixed bg-opacity-90 z-30 text-left pl-8 py-2 leading-10" v-if="menuOpened">
    <div class="text-center text-2xl text-green-400">Menu</div>
    <a href="/#releases" class="text-green-400 text-2xl my-2" v-on:click="menuOpened=false">Releases</a><br />    
    <a href="/#game-soundtracks" class="text-green-400 text-2xl my-2" v-on:click="menuOpened=false">Game soundtracks</a><br />
    <a href="/http://grizzlycogs.bandcamp.com" class="text-green-400 text-2xl my-2" v-on:click="menuOpened=false">Listen</a><br />
    <a href="/#shows" class="text-green-400 text-2xl my-2" v-on:click="menuOpened=false">Shows</a><br />
    <a href="/#contact" class="text-green-400 text-2xl my-2" v-on:click="menuOpened=false">Contact / About</a><br />
    <router-link to="weekly-beats" class="text-green-400 text-2xl my-2" v-on:click="menuOpened=false">Weekly Beats 2020-2021</router-link><br />
    <a href="http://grizzlycogs.bandcamp.com/merch" class="text-green-400 text-2xl my-2" v-on:click="menuOpened=false">Merch</a><br />
    <a href="http://grizzlycogs.bandcamp.com" class="text-green-400 text-2xl my-2 mr-2"><i class="fab fa-bandcamp"></i></a>
    <a href="https://open.spotify.com/artist/6DYBO57C80qqR0VvCWLwCl?si=n13UY0f_T6OFQw-lRJm5Iw" class="text-green-400 text-2xl m-2"><i class="fab fa-spotify"></i></a>
    <a href="https://www.instagram.com/grizzlycogs/" class="text-green-400 text-2xl m-2"><i class="fab fa-instagram"></i></a>
    <a href="https://twitter.com/GrizzlyCogs" class="text-green-400 text-2xl m-2"><i class="fab fa-twitter"></i></a>
    <a href="https://www.facebook.com/GrizzlyCogs/" class="text-green-400  text-2xl m-2"><i class="fab fa-facebook"></i></a>
  </div>
</template>

<script>
import MenuItem from './MenuItem'
import MiniMenuItem from './MiniMenuItem'

export default {
  name: 'Menu',
  components: {
    MenuItem, MiniMenuItem
  },
  data: function() {
    return {menuOpened: false}
  }
}
</script>