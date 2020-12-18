<template>
  <div>
    <hr />
    <div class="flex flex-row">
      <div class="text-right p-1 w-24 text-green-400">
        {{ showData.date }}
      </div>
      <div class="w-5/6 text-left px-8 py-1">
        <p>
          <img v-if="showData.country == 'Poland'" src="img/flag-pl.png" class="w-8 inline p-1" >
          <img v-if="showData.country == 'France'" src="img/flag-fr.png" class="w-8 inline p-1" >
          {{ showData.city }}, {{ showData.country }}
          <span class="text-sm">({{ showData.place}})</span>
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