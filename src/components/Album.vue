<template>
    <div class="m-2 relative shadow-lg rounded border-green-400" @mouseenter="hover = true" @mouseleave="hover = false">
      <img class="rounded w-full h-full" :src="'img/' + albumData.artcover"/>
      <transition name="fade">
        <div v-if="hover" v-on:click="show" class="absolute top-0 left-0 w-full h-full bg-green-400 bg-opacity-90 text-white rounded">
          <p class="tracking-wider text-xl text-white">{{ albumData.name }}</p>
          <div class="relative top-24 text-3xl ">
            <i class="fas fa-headphones-alt mr-8 cursor-pointer"></i>
            <i v-on:click="show = true" class="fas fa-info-circle cursor-pointer"></i>
          </div>
        </div>
      </transition>
    </div>    
    <transition name="fade">
      <ReleasePage v-show="show" :release="albumData" type="album" />
    </transition>
    <!-- CLOSE ICON -->
    <div v-if="show" class="fixed top-10 right-10 cursor-pointer z-50">
      <i v-on:click="show = false" class="fas fa-times text-white text-5xl"></i>
    </div>
</template>
<script>
import ReleasePage from './ReleasePage'

export default {
  name: 'Album',
  props: ['albumData'],
  components: { ReleasePage },
  data: function
    MusicPlayer() {
    return { hover: false, show: false }
  },
}
</script>
<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }

</style>