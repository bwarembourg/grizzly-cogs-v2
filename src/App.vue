<template>
  <Menu />
  <Hello />
  <SectionTitle id="releases" name="RELEASES" />
  <SubTitle name="ALBUMS" />
  <AlbumList />
  <SubTitle name="SINGLES & EPS" />
  <SingleList />
  <SectionTitle id="game-soundtracks" name="GAME SOUNDTRACKS" />
  <GameList />
  <SectionTitle id="shows" name="PAST SHOWS" />
  <ShowList />
</template>

<script>
import Menu from './components/Menu'
import SectionTitle from './components/SectionTitle'
import AlbumList from './components/AlbumList'
import SubTitle from './components/SubTitle'
import SingleList from './components/SingleList'
import Hello from './components/Hello'
import GameList from './components/GameList'
import ShowList from './components/ShowList'

export default {
  name: 'App',
  components: {
    Menu,
    SectionTitle,
    AlbumList,
    SubTitle,
    SingleList,
    Hello,
    GameList,
    ShowList,
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
  background-color: whitesmoke;
}
</style>
