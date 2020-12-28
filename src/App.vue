<template>
  <Menu />
  <Hello />
  <SectionTitle id="game-soundtracks" name="GAME SOUNDTRACKS" />
  <GameList />
  <SectionTitle id="releases" name="RELEASES" />
  <SubTitle name="ALBUMS" />
  <AlbumList />
  <SubTitle name="SINGLES & EPS" />
  <SingleList />
  <SectionTitle id="shows" name="PAST SHOWS" />
  <ShowList />
  <SectionTitle id="rrjp" name="RUN! RUN! JUMP! PUNCH!" />
  <RunRunJumpPunch />
  <SectionTitle id="contact" name="CONTACT / ABOUT" />
  <Contact />
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
import RunRunJumpPunch from './components/RunRunJumpPunch'
import Contact from './components/Contact'

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
    RunRunJumpPunch,
    Contact,
  }
}
</script>

<style>
#app {
  overflow-x: hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: whitesmoke;
}
</style>
