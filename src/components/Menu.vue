<template>
  <nav class="flex flex-row bg-green-300">
    <div class="ml-2 w-24 py-1 mr-4">
      <img alt="Vue logo" src="../assets/logo.png">
    </div>
    <MenuItem item-title="Releases" />
    <MenuItem item-title="Game soundtracks" />
    <MenuItem item-title="Listen" />
    <MenuItem item-title="Shows" />
    <MenuItem item-title="Run! Run! Jump! Punch!" />
    <MenuItem item-title="Contact / About" />
  </nav>
</template>

<script>
import MenuItem from './MenuItem'

export default {
  name: 'Menu',
  components: {
    MenuItem,
  }
}
</script>