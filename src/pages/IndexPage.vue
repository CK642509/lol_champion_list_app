<template>
  <q-page class="flex flex-center">
    <div class="column">
      <div class="col">
        <q-toggle v-model="showname" label="Show name" />
      </div>
      <div class="col">
        <div class="q-pa-md row items-start q-gutter-md" style="width: 80vw">
          <!-- <div class="row items-start" style="width: 80vw"> -->
          <ChampionBtn
            v-for="(item, index) in champion_list"
            :key="index"
            :num="index"
            :champion="item.name"
            :showname="showname"
            @update="updateList"
          ></ChampionBtn>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import ChampionBtn from "src/components/ChampionBtn.vue";
import { champion_list } from "src/assets/champion_list";
import { ref } from "vue";

const showname = ref(false);
let record = Array(161).fill(-1);

const updateList = (num) => {
  console.log("qqq", num);
  record[num] = record[num] * -1;
};
</script>
