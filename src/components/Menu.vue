<template>
  <nav id="hello" class="flex flex-row bg-green-400 shadow-xl sticky top-0 z-30">
    <div class="ml-2 w-24 py-1 mr-4">
      <a href="#hello"><img alt="Vue logo" src="../assets/logo.png"></a>
    </div>
    <MenuItem item-title="Releases" link="#releases" />
    <MenuItem item-title="Game soundtracks" link="#game-soundtracks"/>
    <MenuItem item-title="Listen" link="http://grizzlycogs.bandcamp.com" />
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
  },
}
</script>