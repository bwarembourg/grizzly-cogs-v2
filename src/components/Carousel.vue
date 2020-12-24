<template>
  <div class="relative" v-bind:style="{ height: height || '800px'}" @mouseenter="hover = true" @mouseleave="hover = false">
    <transition name="fade" v-for="image in gallery" :key="image.id">
      <img class="w-full h-full absolute object-cover" :src="image.src" v-show="id==image.id" />
    </transition>
    <div class="absolute left-8 top-64 text-white text-3xl cursor-pointer" >
      <transition name="fade">
        <i class="fas fa-arrow-left" v-on:click="previous()" v-if="hover"></i>
      </transition>
    </div>
    <div class="absolute right-8 top-64 text-white text-3xl cursor-pointer">
      <transition name="fade">
        <i class="fas fa-arrow-right" v-on:click="next()" v-if="hover"></i>
      </transition>
    </div>
    <span v-for="image in gallery" :key="image.id">
      <i class="m-1 far fa-circle absolute bottom-0 text-white text-sm" v-if="id!=image.id" v-bind:style="{ left: getXPos(image.id) }"></i>
      <i class="m-1 fas fa-circle absolute bottom-0 text-white text-sm" v-if="id==image.id" v-bind:style="{ left: getXPos(image.id) }"></i>
    </span>
    <div class="text-green-400 absolute left-2 bottom-0 text-sm" v-if="gallery">
      Credit : <a target="_blank" :href="id ? gallery[id].link : gallery[0].link">{{ id ? gallery[id].credit : gallery[0].credit }}</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "Carousel",
  data: function() {
    return { id: 0, maxId: 0, timeout: null, hover: false }
  },
  props: [ 'gallery', 'timer', 'height' ],
  mounted: function mounted() {
    this.maxId = this.gallery ? this.gallery.length-1 : 0;
    this.initTimer();
  },
  methods: {
    next: function() {
      this.id ++;
      if(this.id > this.maxId) {
        this.id = 0;
      }
      this.initTimer();
    },
    previous: function() {
      this.id --;
      if (this.id < 0) {
        this.id = this.maxId;
      }
      this.initTimer();
    },
    clearTimeout: function() {
      if (this.timeout)
        clearTimeout(this.timeout);
    },
    initTimer: function () {
      this.clearTimeout();
      this.timeout = setTimeout(() => this.changeImg(), this.timer);
    },
    changeImg: function () {
      this.next();
    },
    getXPos: function (id) {
      if (id == 0) {
        return '47%';
      }
      if (id == 1) {
        return '49%'
      }
      if (id == 2) {
        return '51%'
      }
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

  .carousel {
    height: 800px;
  }

</style>