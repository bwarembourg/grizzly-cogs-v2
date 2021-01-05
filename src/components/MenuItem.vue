<template>
  <a :href="link" v-if="!newtab && !isRouterLink">
    <div class="ml-1 my-1 py-2 px-2 font-sans text-white text-md font-semibold hover:bg-green-300 cursor-pointer rounded">
      {{ itemTitle }}
    </div>
  </a>
  <a :href="link" target="_blank" v-if="newtab && !isRouterLink">
    <div class="ml-1 my-1 py-2 px-2 font-sans text-white text-md font-semibold hover:bg-green-300 cursor-pointer rounded">
      {{ itemTitle }}
    </div>
  </a>
  <router-link :to="link" v-if="isRouterLink">
    <div class="ml-1 my-1 py-2 px-2 font-sans text-white text-md font-semibold hover:bg-green-300 cursor-pointer rounded">
      {{ itemTitle }}
    </div>
  </router-link>
</template>
<script>
export default {
  name: 'MenuItem',
  props: ['itemTitle', 'link', 'newtab', 'isRouterLink']
}
</script>