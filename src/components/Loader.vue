<template>
  <div v-if="!loaded">
    <i class="fas fa-spinner loader text-3xl text-green-400"></i>
  </div>
</template>
<script>
export default {
  name: "Loader",
  props: ['loaded']
}
</script>
<style scoped>
  .loader {
    -webkit-animation:spin 4s linear infinite;
    -moz-animation:spin 4s linear infinite;
    animation:spin 4s linear infinite;
  }
</style>