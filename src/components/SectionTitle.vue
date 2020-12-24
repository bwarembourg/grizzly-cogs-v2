<template>
<div class="m-4">
  <h1 class="font-bold text-green-400 text-2xl tracking-wider"> {{ name }} </h1>
  <div class="text-center m-1">
    <div class="w-12 h-1 bg-green-400 border-green-400 m-auto" />
  </div>
</div>
</template>
<script>
export default {
  name: 'SectionTitle',
  props: ['name'],
}
</script>
