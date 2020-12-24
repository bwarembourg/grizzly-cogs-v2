<template>
  <nav id="hello" class="flex flex-row bg-green-400 shadow-xl sticky top-0 z-30">
    <div class="ml-2 w-28 py-1 mr-4">
      <a href="#hello"><img alt="Grizzly Cogs" src="../assets/logo.png"></a>
    </div>
    <MenuItem item-title="Releases" link="#releases" :newtab="false" />
    <MenuItem item-title="Game soundtracks" link="#game-soundtracks" :newtab="false"/>
    <MenuItem item-title="Listen" link="http://grizzlycogs.bandcamp.com" :newtab="true"/>
    <MenuItem item-title="Shows" link="#shows" :newtab="false" />
    <MenuItem item-title="Run! Run! Jump! Punch!" link="#rrjp" :newtab="false" />
    <MenuItem item-title="Contact / About" link="#contact" :newtab="false" />
    <MenuItem item-title="Weekly Beats 2020-2021" :newtab="false" />
    <MenuItem item-title="Merch" link="https://grizzlycogs.bandcamp.com/merch" :newtab="true" />
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