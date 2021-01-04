<template>
  <div class="lg:flex">
    <div class="lg:w-1/2 lg:text-justify p-4">
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
      <h2 class="text-center text-yellow-800 tracking-wider font-bold">PRESS KITS :</h2>
      <span class="text-green-400 font-bold">
        <a href="https://drive.google.com/drive/folders/1EWHRfKFl4NDhwsy90erEs_gJPcdvcYVn?usp=sharing">
          <i class="fas fa-folder"></i> Grizzly Cogs Press kit
        </a>
        <br />
        <a href="https://drive.google.com/drive/folders/1scnuwHejPHDdmjZDNZOYeobVgqyr6fqK?usp=sharing">
          <i class="fas fa-folder"></i> Run! Run! Jump! Punch! Press kit
        </a>
      </span>
      <h2 class="text-center text-yellow-800 tracking-wider font-bold">CREDITS :</h2>
      <div>
        <strong class="text-green-400">Logo, Clouds and colors :</strong> 
        <a href="https://twitter.com/NoNameNoSocks" target="_blank">NoNameNoSocks</a>
        <br />
        <strong class="text-green-400">Web design and dev :</strong> Grizzly Cogs
        <br />
        <strong class="text-green-400">Photographs :</strong>
        <a href="https://www.loisedoyen.com" target="_blank">Loïse Doyen</a> &
        <a href="https://www.chiptography.com" target="_blank">Chiptography</a>
        <br />
        <i>Website made with Netlify, FaunaDB, VueJS, tailwindcss.</i>
      </div>
    </div>
    <div class="py-4 bg-green-100 rounded lg:w-1/2">
      <h2 class="text-2xl text-green-400 font-bold">👋 Say hello, book me, hire me or whatever :</h2>
      <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <div class="m-4">
          <input type="text" name="subject" class="lg:w-96 w-64 h-8 rounded p-2" placeholder="Subject"/>
        </div>
        <div class="m-4">
          <input type="mail" name="mail" class="lg:w-96 w-64 h-8 rounded p-2" placeholder="Your e-mail" />
        </div>
        <div class="m-4">
          <textarea name="body" class="lg:w-96 w-64 h-36 rounded p-2" placeholder="Your message"></textarea>
        </div>
        <button type="submit" class="rounded-full bg-green-400 px-12 py-2 text-xl text-white font-bold">Send !</button>
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