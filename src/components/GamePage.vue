<template>
  <div class="fixed top-0 left-0 w-full h-full z-40 bg-no-repeat bg-cover bg-green-400">
    <!-- BG -->
    <img class="w-full transform scale-150 bg" :src="'img/'+ game.cover" />
    <div class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>
    <div class="overflow-y-auto fixed top-0 h-full w-full">
      <!-- HEADER CONTENT -->
      <div class="my-20 w-full flex flex-row justify-center">
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
      <!-- INFOS -->
      <div class="lg:mx-48 rounded-lg shadow flex flex-row opacity-90" v-bind:style="{ backgroundColor: game.backgroundColor || 'black', color: game.color || 'white'}">
        <div class="lg:mx-12 py-8 md:w-1/4 lg:w-1/6" v-if="game.galleryImages">
          <div class="m-2 w-full" v-for="image in game.galleryImages" :key="image">
            <img :src="'img/' + game.galleryDir + '/' + image" />
          </div>
        </div>
        <div class="flex-1 w-3/4 text-left py-8 px-4">
          <span v-if="game.infos">
            <h1 class="text-lg font-semibold"><i class="fas fa-info-circle"></i> Infos</h1>
            <span v-html="game.infos"></span>
            <br /><br />
          </span>
          <span v-if="game.achievements">
            <h1 class="text-lg font-semibold">★ Achievements</h1>
            <span v-html="game.achievements"></span>
            <br /><br />
          </span>
          <span v-if="game.youtubeEmbed">
            <h1 class="text-lg font-semibold"><i class="fab fa-youtube"></i> Video</h1>
            <span v-html="game.youtubeEmbed"></span>
            <br /><br />
          </span>
          <span v-if="game.bandcampEmbed">
            <h1 class="text-lg font-semibold"><i class="fas fa-headphones-alt"></i> Original Soundtrack</h1>
            <span v-html="game.bandcampEmbed"></span>
            <br /><br />
          </span>
          <h1 class="text-lg font-semibold">★ Credit</h1>
          <span v-html="game.credits"></span>
          <br /><br />
        </div>
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