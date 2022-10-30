<template>
  <!-- <div style="background: #000000"> -->
  <div v-if="showname" style="width: 120px">
    <q-btn round @click="test">
      <q-avatar size="42px">
        <!-- <img src="~assets/champion/Aatrox.png" /> -->
        <img :src="path" />
      </q-avatar>
    </q-btn>
    <a>{{ champion }}</a>
  </div>

  <div v-else>
    <q-btn round @click="test">
      <q-avatar size="42px">
        <!-- <img src="~assets/champion/Aatrox.png" /> -->
        <img :src="path" />
      </q-avatar>
    </q-btn>
  </div>
  <!-- </div> -->
</template>

<script setup>
// import { props } from "vue";
const props = defineProps({
  champion: String,
  showname: Boolean,
});

const test = () => {
  console.log(props.champion);
};

const filename = props.champion
  .replaceAll(" ", "")
  .replaceAll("'", "")
  .replaceAll("&", "")
  .replaceAll(".", "");

const path = `src/assets/champion/${filename}.png`;
</script>
