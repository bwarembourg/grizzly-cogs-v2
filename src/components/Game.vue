<template>
  <div class="m-2 relative shadow-lg rounded border-green-400" @mouseenter="hover = true" @mouseleave="hover = false">
    <img class="rounded w-full h-full object-cover" :src="'img/'+ game.cover" v-on:click="show = true"/>
    <transition name="fade">
      <div v-if="hover" v-on:click="show" class="absolute top-0 left-0 w-full h-full bg-green-400 bg-opacity-90 text-white rounded hidden lg:block">
        <p class="tracking-wider text-xl text-white">{{ game.name }}</p>
        <div class="relative top-24 text-3xl">
          <a :href="game.itchioLink" target="_blank" v-if="game.itchioLink">
            <i class="fas fa-gamepad mr-8 cursor-pointer"></i>
          </a>
          <a :href="game.androidLink" target="_blank" v-if="!game.itchioLink && game.androidLink">
            <i class="fas fa-gamepad mr-8 cursor-pointer"></i>
          </a>
          <i v-on:click="show = true" class="fas fa-info-circle cursor-pointer"></i>
        </div>
      </div>
    </transition>
  </div>  
  <transition name="fade">
    <GamePage v-show="show" :game="game"/>
  </transition>
    <!-- CLOSE ICON -->
    <div v-if="show" class="fixed top-4 right-4 lg:top-10 lg:right-10 cursor-pointer z-50">
      <i v-on:click="show = false" class="fas fa-times text-white lg:text-5xl text-xl"></i>
    </div>
</template>
<script>
import GamePage from './GamePage'

export default {
  components: { GamePage },
  name: 'Game',
  props: ['game'],
  data: function() {
    return { hover: false, show: false }
  }
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