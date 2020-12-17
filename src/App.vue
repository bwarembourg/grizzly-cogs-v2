<template>
  <Menu />
  <SectionTitle name="RELEASES" />
  <AlbumList />
</template>

<script>
import Menu from './components/Menu'
import SectionTitle from './components/SectionTitle'
import AlbumList from './components/AlbumList'

export default {
  name: 'App',
  components: {
    Menu,
    SectionTitle,
    AlbumList,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
