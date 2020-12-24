<template>
  <a :href="link" v-if="!newtab">
    <div class="ml-1 my-1 py-1 px-2 font-sans text-white text-lg font-semibold hover:bg-green-300 cursor-pointer rounded">
      {{ itemTitle }}
    </div>
  </a>
  <a :href="link" target="_blank" v-if="newtab">
    <div class="ml-1 my-1 py-1 px-2 font-sans text-white text-lg font-semibold hover:bg-green-300 cursor-pointer rounded">
      {{ itemTitle }}
    </div>
  </a>
</template>
<script>
export default {
  name: 'MenuItem',
  props: ['itemTitle', 'link', 'newtab']
}
</script>