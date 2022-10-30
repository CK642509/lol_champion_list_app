<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md row items-start q-gutter-md" style="width: 80vw">
      <!-- <div class="row items-start" style="width: 80vw"> -->
      <ChampionBtn
        v-for="(item, index) in champion_list"
        :key="index"
        :champion="item.name"
        :showname="false"
      ></ChampionBtn>
    </div>
  </q-page>
</template>

<script setup>
import ChampionBtn from "src/components/ChampionBtn.vue";
import { champion_list } from "src/assets/champion_list";

console.log(champion_list[0].name_chinese);
console.log(123);
</script>
