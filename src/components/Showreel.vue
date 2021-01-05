<template>
  <div class="fixed bg-black bg-opacity-80 w-full h-full top-0 left-0">
    <!-- MOBILE -->
    <div class="py-48 md:hidden">
      <center>
        <iframe width="300" height="200" src="https://www.youtube.com/embed/XweMDEQLIhw" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>
      </center>
    </div>
    <!-- MEDIUM -->
    <div class="py-48 md:block hidden lg:hidden">
      <center>
        <iframe width="500" height="300" src="https://www.youtube.com/embed/XweMDEQLIhw" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>
      </center>
    </div>
    <!-- LARGE -->
    <div class="py-48 lg:block hidden">
      <center>
        <iframe width="900" height="500" src="https://www.youtube.com/embed/XweMDEQLIhw" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>
      </center>
    </div>
  </div>
</template>