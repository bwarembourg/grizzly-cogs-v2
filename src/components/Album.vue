<template>
    <div class="m-2 relative shadow-lg rounded border-green-400" @mouseenter="hover = true" @mouseleave="hover = false">
      <router-link :to="getUrl()">
      <img class="rounded w-full h-full" :src="'img/' + albumData.artcover" v-on:click="show = true"/>
      </router-link>
      <transition name="fade">
        <div v-if="hover" class="absolute top-0 left-0 w-full h-full bg-green-400 bg-opacity-90 text-white rounded hidden lg:block">
          <p class="tracking-wider text-xl text-white">{{ albumData.name }}</p>
          <div class="relative top-24 text-3xl ">
            <a :href="albumData.bandcampLink" target="_blank">
              <i class="fas fa-headphones-alt mr-8 cursor-pointer"></i>
            </a>
            <router-link :to="getUrl()">
              <i class="fas fa-info-circle cursor-pointer"></i>
            </router-link>
          </div>
        </div>
      </transition>
    </div>    
</template>
<script>

export default {
  name: 'Album',
  props: ['albumData', 'isRRJP'],
  methods: {
    getUrl: function() {
      if(this.isRRJP)
        return '/release/rrjp/' + this.albumData.name;
      return '/release/album/' + this.albumData.name;
    }
  },
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