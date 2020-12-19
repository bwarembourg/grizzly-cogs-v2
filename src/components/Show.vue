<template>
  <div>
    <hr />
    <div class="flex flex-row">
      <div class="text-right p-1 w-24 text-green-400">
        {{ showData.date }}
      </div>
      <div class="w-5/6 text-left px-8 py-1">
        <p>
          {{ showData.city }}, {{ showData.country }}
          <br />
          <img v-if="showData.country == 'Poland'" src="img/flag-pl.png" class="w-6 inline p-1" >
          <img v-if="showData.country == 'France'" src="img/flag-fr.png" class="w-6 inline p-1" >
          <span class="text-xs text-green-400">{{ showData.place}}</span>
        </p>
        
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Show',
  props: [ 'showData' ]
}
</script>