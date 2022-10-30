<template>
  <div v-if="showname" style="width: 150px">
    <q-btn
      @click="test"
      stack
      :color="btnColor"
      :text-color="textColor"
      style="width: 150px"
    >
      <q-avatar>
        <img :src="path" />
      </q-avatar>
      <a>{{ champion }}</a>
    </q-btn>
  </div>

  <div v-else>
    <q-btn @click="test" :color="btnColor" :text-color="textColor">
      <q-avatar size="42px">
        <img :src="path" />
      </q-avatar>
    </q-btn>
  </div>
  <!-- </div> -->
</template>

<script setup>
import { ref } from "vue";
const btnColor = ref("white");
const textColor = ref("black");
const props = defineProps({
  num: Number,
  champion: String,
  showname: Boolean,
});

const emit = defineEmits(["update"]);
const changeColor = () => {
  if (btnColor.value === "white") {
    btnColor.value = "purple";
    textColor.value = "white";
  } else {
    btnColor.value = "white";
    textColor.value = "black";
  }
};

const test = () => {
  console.log(props.champion);
  console.log(props.num);
  emit("update", props.num);
  changeColor();
};

const filename = props.champion
  .replaceAll(" ", "")
  .replaceAll("'", "")
  .replaceAll("&", "")
  .replaceAll(".", "");

const path = `src/assets/champion/${filename}.png`;
</script>
