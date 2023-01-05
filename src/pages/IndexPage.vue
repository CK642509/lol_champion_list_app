<template>
  <q-page class="flex flex-center">
    <div class="column">
      <div class="col">
        <q-toggle v-model="showName" label="Show name" />
      </div>
      <div class="col">
        <q-btn color="primary" label="Load record" @click="load" />
        <q-btn color="secondary" label="Save record" @click="save" />
      </div>
      <div class="col">
        <div
          v-if="showBtns"
          class="q-pa-md row items-start q-gutter-md"
          style="width: 80vw"
        >
          <!-- <div class="row items-start" style="width: 80vw"> -->
          <ChampionBtn
            v-for="(item, index) in champion_list"
            :key="index"
            :num="index"
            :champion="item.name"
            :state="record[index]"
            :showName="showName"
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
import { ref, nextTick, watch } from "vue";

const { myAPI } = window;

const record = ref(Array(champion_list.length).fill(-1));
const showName = ref(false);
const showBtns = ref(true);

const updateList = (num) => {
  record.value[num] = record.value[num] * -1;
};

const load = async () => {
  myAPI.invoke("load-data", 123);
};

const save = () => {
  console.log(record.value);
  myAPI.invoke("save-data", record.value.toString());
};

myAPI.recieve("response", async (res) => {
  console.log(res);
  if (res != "read file error") {
    const data = res[0].split(",").map(Number);
    record.value = data;

    // refresh btns
    showBtns.value = false;
    await nextTick();
    showBtns.value = true;
  }
});
</script>
