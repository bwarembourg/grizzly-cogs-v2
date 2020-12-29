<template>
  <div class="w-full bg-green-400 p-2">
  <a href="/#hello"><img alt="Grizzly Cogs" src="../assets/logo.png" class="w-24"></a>
  </div>
  <div class="">
    <SectionTitle name="WEEKLY BEATS 2020-2021" />
    <div class="xl:mx-96 text-left lg:text-md text-sm">
      <p>
        Weekly Beats is a 52 weeks challenge in which everyone has to make a beat or a song every week. 
        I took part to the challenge in mid-june 2020 and plan to write 52 tracks till june 2021. 
        You can get more information on the <a href="https://weeklybeats.com/" class="text-green-400">Weekly Beats official website</a>.
        <br /><br />
        Use the music player or click on the small animation to listen to the songs I made so far during this challenge :).
      </p>
      <!-- PLAYER LAPTOP -->
      <div class="hidden bg-green-400 h-16 mt-4 rounded-lg lg:flex ">
        <div class="mx-2 my-3 px-6 py-2 bg-green-200 rounded hover:bg-green-100 text-yellow-900 cursor-pointer" v-on:click="previous()">
          <i class="fas fa-step-backward"></i>
        </div>
        <div class="mx-2 my-3 px-6 py-2 bg-green-200 rounded hover:bg-green-100 text-yellow-900 cursor-pointer" v-on:click="stop()">
          <i class="fas fa-stop"></i>
        </div>
        <div class="mx-2 my-3 px-6 py-2 bg-green-200 rounded hover:bg-green-100 text-yellow-900 cursor-pointer" v-on:click="playPause()">
          <i class="fas fa-play" v-if="!playing"></i>
          <i class="fas fa-pause" v-if="playing"></i>
        </div>
        <div class="mx-2 my-3 px-6 py-2 bg-green-200 rounded hover:bg-green-100 text-yellow-900 cursor-pointer" v-on:click="next()">
          <i class="fas fa-step-forward"></i>
        </div>
        <div class="mx-2 my-3 px-2 py-2 w-3/4 bg-green-100 rounded text-yellow-900 overflow-ellipsis overflow-hidden whitespace-nowrap">
          <p>Now Playing : {{ playingName }}</p>
        </div>
        <div class="mx-2 my-3 px-6 py-2 bg-green-200 rounded hover:bg-green-100 text-yellow-900 cursor-pointer relative" v-on:click="playlistShown = !playlistShown">
          <i class="fas fa-stream"></i>
        </div>
      </div>
      <!-- PLAYLIST -->
      <div class="playlist h-48 overflow-y-auto mb-4 rounded" v-if="playlistShown">
        <div class="bg-green-200 text-yellow-900 m-1 rounded pl-2 cursor-pointer" v-for="weekly in weeklies.slice().reverse()" :key="weekly.no" v-on:click="play(weekly.no)">
            <i class="fas fa-play text-md px-2" v-if="weekly.no == noPlaying && playing"></i>
            {{ to2Digit(weekly.no) }}. {{ weekly.name }}
        </div>
      </div>

      <!-- PLAYER MOBILE -->
      <div class="lg:hidden bg-green-400 py-2 rounded">
        <div class="mx-2 px-2 py-2 bg-green-100 rounded text-yellow-900 overflow-ellipsis overflow-hidden">
          Now Playing : {{ playingName }}
        </div>
        <div class="flex justify-center">
          <div class="mx-2 mt-2 px-7 py-2 bg-green-200 rounded hover:bg-green-100 text-yellow-900 cursor-pointer" v-on:click="previous()">
            <i class="fas fa-step-backward"></i>
          </div>
          <div class="mx-2 mt-2 px-7 py-2 bg-green-200 rounded hover:bg-green-100 text-yellow-900 cursor-pointer" v-on:click="stop()">
            <i class="fas fa-stop"></i>
          </div>
          <div class="mx-2 mt-2 px-7 py-2 bg-green-200 rounded hover:bg-green-100 text-yellow-900 cursor-pointer" v-on:click="playPause()">
            <i class="fas fa-play" v-if="!playing"></i>
            <i class="fas fa-pause" v-if="playing"></i>
          </div>
          <div class="mx-2 mt-2 px-7 py-2 bg-green-200 rounded hover:bg-green-100 text-yellow-900 cursor-pointer" v-on:click="next()">
            <i class="fas fa-step-forward"></i>
          </div>
        </div>
      </div>
    </div>
    <div>
      <Loader :loaded="loaded" />
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 my-1" v-if="loaded">
        <div v-for="weekly in weeklies" :key="weekly.no" rounded>
          <Weekly :weekly="weekly" :noPlaying="noPlaying" :playing="playing" @play="play" @pause="pause" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SectionTitle from './SectionTitle'
import Loader from './Loader'
import Weekly from './Weekly'
import axios from 'axios'

export default {
  name: "WeeklyBeats",
  components: { SectionTitle, Loader, Weekly },
  data: function() {
    return { weeklies: [], loaded: false, noPlaying: 1, audio: null, playing: false, playingName: null, playlistShown: false }
  },
  methods: {
    playPause: function () {
      if (!this.playing)
        this.play(this.noPlaying);
      else
        this.pause();
    },
    pause: function () {
      this.audio.pause();
      this.playing = false;
    },
    play: function (no) {
      if (this.audio) {
				this.pause();
      }
      this.playing = true;
      this.noPlaying = no;
      const music = this.weeklies.find(w => w.no == no);
      this.playingName = music.name;
      this.audio = new Audio("audio/" + music.audio);
			this.audio.play();
			this.audio.onended = function () {
				this.next();
			}
    },
    stop: function() {
      this.pause();
      this.noPlaying = 1;
      this.playingName = null;
    },
    next: function() {
			if (this.audio) {
				this.pause();
			}
			this.noPlaying++;
			if(this.noPlaying > this.weeklies.length) {
				this.noPlaying = 1;
			}
			this.play(this.noPlaying);
    },
    previous: function() {
      if (this.audio) {
				this.pause();
			}
			this.noPlaying--;
			if (this.noPlaying <= 0) {
				this.noPlaying = this.weeklies.length;
			}	
			this.play(this.noPlaying);
    },
    to2Digit: function(no) {
      if (no >= 10)
        return no;
      return '0' + no;
    }
  },
  mounted: function() {
  axios
    .get('/.netlify/functions/weeklybeats')
    .then(response => { 
      this.weeklies = response.data
      this.loaded = true
    })
  }
}
</script>