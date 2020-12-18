<template>
    <div class="m-2 relative shadow-xl rounded" @mouseenter="hover = true" @mouseleave="hover = false">
      <img class="w-96 rounded" :src="'img/' + singleData.artcover"/>
      <transition name="fade">
        <div v-if="hover" class="absolute top-0 left-0 p-2 w-full h-full bg-green-400 bg-opacity-90 text-white rounded">
          <p class="tracking-wider text-xl text-white">{{ singleData.name }}</p>
          <div class="relative top-16 text-3xl ">
            <i class="fas fa-headphones-alt mr-8 cursor-pointer"></i>
            <i v-on:click="show = true" class="fas fa-info-circle cursor-pointer"></i>
          </div>
        </div>
      </transition>
    </div>
    <ReleasePage v-show="show" :release="singleData" type="single" />
    <!-- CLOSE ICON -->
    <div v-if="show" class="fixed top-10 right-10 cursor-pointer z-50">
      <i v-on:click="show = false" class="fas fa-times text-white text-5xl"></i>
    </div>
</template>
<script>
import ReleasePage from './ReleasePage'

export default {
  components: { ReleasePage },
  name: 'Single',
  props: ['singleData'],
  data: function() {
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