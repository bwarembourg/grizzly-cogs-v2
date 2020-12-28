<template>
  <div class="fixed top-0 left-0 w-full h-full z-40 bg-no-repeat bg-cover bg-green-400">
    <!-- BG -->
    <img class="w-full transform scale-150 bg" :src="'img/'+ release.artcover" />
    <div class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>

    <div class="overflow-y-auto fixed top-0 h-full w-full">
    <!-- HEADER CONTENT -->
      <div class="lg:my-20 w-full lg:flex lg:flex-row my-4 justify-center">
        <div>
          <img class="lg:mr-8 shadow-lg w-64 m-auto" :src="'img/'+ release.artcover">
        </div>
        <div class="lg:w-5/12 lg:text-left">
          <p>
            <span class="text-sm text-gray-100 font-bold tracking-wider lg:inline hidden" v-if="type == 'album'">STUDIO ALBUM<br /></span>
            <span class="text-sm text-gray-100 font-bold tracking-wider" v-if="type == 'single'">SINGLE<br /></span>
            <span class="text-2xl text-white font-black tracking-wider">{{ release.name }}</span>
            <span class="text-lg text-green-400 font-bolder tracking-wider p-0"><br />{{ release.year }}</span>
            <span class="text-md text-white">
              <br /><br />
              <span v-if="release.recordLabel" v-html="release.recordLabel"></span>
            </span>
          </p>
          <a :href="release.link" v-if="release.link">
            <button class="w-3/4 lg:w-auto shadow-lg bg-blue-400 rounded-full py-2 px-4 text-white text-sm font-semibold mr-1 mt-2 my-2 lg:my-0 hover:bg-blue-300">
              <i class="fas fa-headphones-alt m-1"></i>
              LISTEN
            </button>
          </a>
          <a :href="release.bandcampLink" v-if="release.bandcampLink">
            <button class="w-3/4 lg:w-auto shadow-lg bg-blue-400 rounded-full py-2 px-4 text-white text-sm font-semibold mr-1 mt-2 my-2 lg:my-0 hover:bg-blue-300">
              <i class="fab fa-bandcamp m-1"></i>
              BANDCAMP
            </button>
          </a>
          <a :href="release.spotifyLink" v-if="release.spotifyLink">
            <button class="w-3/4 lg:w-auto shadow-lg bg-green-500 rounded-full py-2 px-4 text-white text-sm font-semibold mx-1 my-2 lg:my-0 hover:bg-green-400">
              <i class="fab fa-spotify m-1"></i>
              SPOTIFY
            </button>
          </a>
          <a :href="release.youtubeLink" v-if="release.youtubeLink">
            <button class="w-3/4 lg:w-auto shadow-lg bg-red-500 rounded-full py-2 px-4 text-white text-sm font-semibold mx-1 my-2 lg:my-0 hover:bg-red-400">
              <i class="fab fa-youtube m-1"></i>
              YOUTUBE
            </button>
          </a>
        </div>
      </div>
      <!-- INFOS -->
      <div class="mx-0 lg:mx-0 2xl:mx-96 rounded-lg shadow opacity-90 text-lg" v-bind:style="{ backgroundColor: release.backgroundColor || 'black', color: release.color || 'white'}">
        <div class="flex-1 lg:w-2/4 text-left p-8">
          <span v-if="release.infos">
            <h1 class="text-2xl font-semibold"><i class="fas fa-info-circle"></i> Infos</h1>
            <span v-html="release.infos"></span>
            <br v-if="release.recordLabel" />
            <span v-if="release.recordLabel" v-html="release.recordLabel"></span>
            <br /><br />
          </span>
          <span v-if="release.youtubeEmbed" class="lg:inline hidden">
            <h1 class="text-2xl font-semibold"><i class="fab fa-youtube"></i> Video</h1>
            <div class="m-auto" v-html="release.youtubeEmbed"></div>
            <br /><br />
          </span>
          <span v-if="release.bandcampEmbed" class="lg:inline hidden">
            <h1 class="text-2xl font-semibold"><i class="fas fa-headphones-alt"></i> Original Soundtrack</h1>
            <span v-html="release.bandcampEmbed"></span>
            <br /><br />
          </span>
          <h1 class="text-2xl font-semibold" v-if="release.credits">★ Credit</h1>
          <span v-html="release.credits" v-if="release.credits"></span>
          <br /><br />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ReleasePage',
  props: ['release', 'type', ],
}
</script>
<style scoped>
  .bg {
    filter: blur(8px);
    -webkit-filter: blur(8px);
  }
</style>