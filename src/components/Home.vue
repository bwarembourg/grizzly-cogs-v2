<template>
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
  <router-view></router-view>
</template>

<script>
import SectionTitle from './SectionTitle'
import AlbumList from './AlbumList'
import SubTitle from './SubTitle'
import SingleList from './SingleList'
import Hello from './Hello'
import GameList from './GameList'
import ShowList from './ShowList'
import RunRunJumpPunch from './RunRunJumpPunch'
import Contact from './Contact'

export default {
  name: 'App',
  components: {
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
