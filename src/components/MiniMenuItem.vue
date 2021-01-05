<template>
  <div class="ml-1 my-1 py-2 px-2 text-white text-lg font-semibold hover:bg-green-300 cursor-pointer rounded">
    <a :href="link" target="_blank"><i :class="icon"></i></a>
  </div>
</template>
<script>
export default {
  name: "MiniMenuItem",
  props: ['icon', 'link']
}
</script>