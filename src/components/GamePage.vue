<template>
  <div class="fixed top-0 left-0 w-full h-full z-40 bg-no-repeat bg-cover bg-green-400">
    <!-- BG -->
    <img class="w-full transform scale-150 bg" :src="'img/'+ game.cover" />
    <div class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>
    <!-- HEADER CONTENT -->
    <div class="fixed top-20 w-full flex flex-row justify-center">
      <div>
        <img class="w-64 mr-8 shadow-lg" :src="'img/'+ game.cover">
      </div>
      <div class="w-6/12 text-left">
        <p>
          <span class="text-sm text-gray-100 font-bold tracking-wider">GAME<br /></span>
          <span class="text-2xl text-white font-black tracking-wider">{{ game.name }}</span>
          <span class="text-lg text-green-400 font-bolder tracking-wider p-0"><br />{{ game.year }}</span>
          <span class="text-md text-white">
            <br /><br />
            <span v-html="game.infos"></span><br /><br />
            <span v-if="game.context" v-html="game.context"></span>
          </span>
        </p>
        <a :href="game.bandcampLink" v-if="game.bandcampLink">
          <button class="shadow-lg bg-blue-400 rounded-full py-2 px-4 text-white text-sm font-semibold mr-1 my-2 hover:bg-blue-300">
            <i class="fab fa-bandcamp m-1"></i>
            LISTEN SOUNDTRACK
          </button>
        </a>
        <a :href="game.itchioLink" v-if="game.itchioLink">
          <button class="shadow-lg bg-red-500 rounded-full py-2 px-4 text-white text-sm font-semibold mx-1 my-2 hover:bg-red-400">
            <i class="fab fa-itch-io m-1"></i>
            PLAY ON ITCH.IO
          </button>
        </a>
        <a :href="game.androidLink" v-if="game.androidLink">
          <button class="shadow-lg bg-green-500 rounded-full py-2 px-4 text-white text-sm font-semibold mx-1 my-2 hover:bg-green-400">
            <i class="fab fa-google-play m-1"></i>
            GET IT ON GOOGLE PLAY (ANDROID)
          </button>
        </a>
      </div>
    </div>
    <div class="fixed bottom-64 grid grid-cols-4 left-48 right-48">
      <div class="m-1"><img class="h-64" :src="'img/' + game.cover" /></div>
      <div class="m-1"><img class="h-64" :src="'img/' + game.cover" /></div>
      <div class="m-1"><img class="h-64" :src="'img/' + game.cover" /></div>
      <div class="m-1"><img class="h-64" :src="'img/' + game.cover" /></div>
    </div>

    <div class="sm:hidden md:block absolute bottom-0 w-full h-48 bg-green-400 opacity-80">
      <div class="text-white">
        Credit : <br />
        <span v-html="game.credits"></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'gamePage',
  props: [ 'game' ],
}
</script>
<style scoped>
  .bg {
    filter: blur(8px);
    -webkit-filter: blur(8px);
  }
</style>