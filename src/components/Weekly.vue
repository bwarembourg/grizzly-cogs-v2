<template>
  <div class="relative m-1" @mouseenter="hover = true" @mouseleave="hover = false">
    <img class="w-full rounded" :src="weekly.art" v-on:click="playPause()"/>
    <transition name="fade" class="hidden lg:block">
      <div v-if="hover" class="absolute top-0 left-0 w-full bg-green-400 h-full rounded opacity-80 xl:text-lg lg:text-md text-white">
        <p class="overflow-ellipsis overflow-hidden whitespace-nowrap">{{ weekly.name }}</p>
        <br /><br />
        <i class="fas fa-play cursor-pointer text-5xl" v-if="noPlaying != weekly.no || !playing" v-on:click="play()"></i>
        <i class="fas fa-pause cursor-pointer text-5xl" v-if="noPlaying == weekly.no && playing" v-on:click="pause()"></i>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "Weekly",
  props: ['weekly', 'noPlaying', 'playing'],
  data: function() {
    return { hover: false}
  },
  methods: {
    play: function() {
      this.$emit('play', this.weekly.no)
    },
    pause: function() {
      this.$emit('pause', this.weekly.no)
    },
    playPause: function() {
      if (!this.playing) 
        this.play();
      else if(this.noPlaying == this.weekly.no)
        this.pause();
      else
        this.play();
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