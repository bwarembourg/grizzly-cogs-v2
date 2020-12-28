<template>
<div class="h-screen py-48 bg w-full">
  <!-- <img src="../assets/cloud1.png" class="w-48 absolute bottom-16 left-20 floatting-reverse z-10 opacity-90 " />
  <img src="../assets/cloud1.png" class="w-48 absolute top-1/2 left-5 floatting z-10 opacity-90" />
  <img src="../assets/cloud1.png" class="w-48 absolute top-1/4 left-1/2 floatting-reverse z-10 opacity-90" />
  <img src="../assets/cloud1.png" class="w-48 absolute top-1/6 left-48 floatting z-10 opacity-90" />
  <img src="../assets/cloud1.png" class="w-48 absolute top-3/4 left-1/4 floatting-reverse z-10 opacity-90" />
  <img src="../assets/cloud1.png" class="w-48 absolute top-3/4 left-1/4 floatting z-10 opacity-90" />
  <img src="../assets/cloud1.png" class="w-48 absolute bottom-1/4 right-1/4 floatting-reverse z-10 opacity-90" />
  <img src="../assets/cloud1.png" class="w-48 absolute bottom-2/4 right-48 floatting z-10 opacity-90" />
  <img src="../assets/cloud1.png" class="w-48 absolute top-24 right-24 floatting-reverse z-10 opacity-90" />
  <img src="../assets/cloud1.png" class="w-48 absolute bottom-36 right-16 floatting z-10 opacity-90" />
  <img src="../assets/cloud1.png" class="w-48 absolute bottom-4 right-1/2 floatting-reverse z-10 opacity-90" />
  <img src="../assets/cloud1.png" class="w-48 absolute top-4 left-1/4 floatting z-10 opacity-90" /> -->
  <div class="w-6/12 absolute top-1/4 left-1/4 z-20">
    <img src="../assets/logo.png" class="w-full" />
    <p class="text-white lg:text-3xl text-md lg:mt-12 mt-1 lg:tracking-wider">Chiptune and electronic music composer</p>
    <p class="text-gray-100 lg:text-lg text-sm lg:mt-2 mt-1">Music & sound design for games, videos, animations.</p>
    <button class="shadow-lg bg-red-500 rounded-full py-2 px-4 text-white text-sm lg:text-2xl font-semibold mt-4 hover:bg-red-400">
      <i class="fab fa-youtube m-1"></i>
      Watch Showreel !
    </button>
  </div>
  <div class="text-white text-6xl absolute bottom-0 p-4">
    <a href="#game-soundtracks"><i class="fas fa-arrow-down animate-pulse"></i></a>
  </div>
</div>
</template>
<script>
export default {
  name: 'Hello'
}
</script>
<style scoped>
  .bg {
    background-color: rgb(93, 195, 174)
  }

	.floatting {
    animation: floatting 3s infinite;
  }

  .floatting-reverse {
    animation: floatting 3s infinite;
    animation-direction: reverse;
  }

  @keyframes floatting {
    0%, 100% {
      transform: translateY(-12%);
      animationTimingFunction: cubic-bezier(0, .7, .5, 1);
    }
    50% {
      transform: translateY(0);
      animationTimingFunction: cubic-bezier(0, .7, .5, 1);
    }
  }
</style>