<template>
  <a :href="link">
    <div class="ml-1 my-1 py-1 px-2 font-sans text-white font-semibold hover:bg-green-300 cursor-pointer rounded">
      {{ itemTitle }}
    </div>
  </a>
</template>
<script>
export default {
  name: 'MenuItem',
  props: ['itemTitle', 'link']
}
</script>