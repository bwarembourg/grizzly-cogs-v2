<template>
  <div class="flex">
    <div class="w-1/3 text-justify p-4">
      Hello ! I'm Grizzly Cogs. I make electronic and chiptune music, and original soundtrack for games since 2015. 
      Sometimes it is chill, sometimes it is catchy, sometimes it is melancholic, but it is always about feelings and nostalgia.
      <br /><br />
      I released 4 albums and some singles. I also made soundtracks for some web or mobile indie games. From time to time I like to play my music live. I travelled in 7 countries and play ~30 gigs.
      <br /><br />
      Here is a website where you can find all my work. Have fun 😃
      <br /><br />
      <h2 class="text-center text-yellow-800 tracking-wider font-bold">SOCIAL :</h2>
      <div class="text-center text-3xl text-yellow-800">
        <a href="http://grizzlycogs.bandcamp.com" target="_blank"><i class="fab fa-bandcamp text-green-400"></i></a>
        <a href="https://open.spotify.com/artist/6DYBO57C80qqR0VvCWLwCl?si=n13UY0f_T6OFQw-lRJm5Iw" target="_blank"><i class="fab fa-spotify text-green-400"></i></a>
        <a href="https://www.instagram.com/grizzlycogs/" target="_blank"><i class="fab fa-instagram text-green-400"></i></a>
        <a href="https://twitter.com/GrizzlyCogs" target="_blank"><i class="fab fa-twitter text-green-400"></i></a>
        <a href="https://www.facebook.com/GrizzlyCogs/" target="_blank"><i class="fab fa-facebook text-green-400"></i></a>
        <br /><br />
      </div>
      <h2 class="text-center text-yellow-800 tracking-wider font-bold">CREDITS :</h2>
      <div>
        <strong class="text-green-400">Logo, Clouds and colors :</strong> 
        <a href="https://twitter.com/NoNameNoSocks" target="_blank">NoNameNoSocks</a>
        <br />
        <strong class="text-green-400">Web design and dev :</strong> Grizzly Cogs
        <br />
        <strong class="text-green-400">Photographs</strong>
        <a href="https://www.loisedoyen.com" target="_blank">Loïse Doyen</a> &
        <a href="https://www.chiptography.com" target="_blank">Chiptography</a>
      </div>
    </div>
    <div>
      <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="subject" />
        <input type="mail" name="mail" />
        <textarea name="body"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  </div>
</template>
<script>

export default {
  name: "Contact",
}
</script>
<style scoped>
a {
  margin: 5px;
}
</style>