<template>
  <div class="m-2 relative shadow-lg rounded border-green-400" @mouseenter="hover = true" @mouseleave="hover = false">
    <router-link :to="getInfoUrl()">
      <img class="rounded w-full h-full object-cover" :src="'img/'+ game.cover"/>
    </router-link>
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
          <router-link :to="getInfoUrl()">
            <i class="fas fa-info-circle cursor-pointer"></i>
          </router-link>
        </div>
      </div>
    </transition>
  </div>  
</template>
<script>
export default {
  name: 'Game',
  props: ['game'],
  data: function() {
    return { hover: false }
  },
  methods: {
    getInfoUrl: function () {
      return '/game/' + this.game.name;
    }
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