<template>
<div class="m-4">
  <h1 class="font-bold text-green-400 text-2xl tracking-wider"> {{ name }} </h1>
  <div class="text-center m-1">
    <hr class="w-12 border-solid border-2 border-green-400 m-auto" />
  </div>
</div>
</template>
<script>
export default {
  name: 'SectionTitle',
  props: ['name'],
}
</script>