<template>
    <div class="m-2 relative shadow-xl rounded" @mouseenter="hover = true" @mouseleave="hover = false">
      <router-link :to="'/release/single/' + singleData.name">
        <img class="w-96 rounded" :src="'img/' + singleData.artcover" v-on:click="show = true" />
      </router-link>
      <transition name="fade">
        <div v-if="hover" class="absolute top-0 left-0 p-2 w-full h-full bg-green-400 bg-opacity-90 text-white rounded hidden lg:block">
          <p class="tracking-wider text-xl text-white">{{ singleData.name }}</p>
          <div class="relative top-16 text-3xl ">
            <a :href="singleData.link" target="_blank">
              <i class="fas fa-headphones-alt mr-8 cursor-pointer"></i>
            </a>
            <router-link :to="'/release/single/' + singleData.name">
              <i class="fas fa-info-circle cursor-pointer"></i>
            </router-link>
          </div>
        </div>
      </transition>
    </div>

</template>
<script>
export default {
  name: 'Single',
  props: ['singleData'],
  data: function() {
    return { hover: false }
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