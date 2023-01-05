<template>
  <div v-if="showName" style="width: 150px">
    <q-btn
      @click="select"
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
    <q-btn @click="select" :color="btnColor" :text-color="textColor">
      <q-avatar size="42px">
        <img :src="path" />
      </q-avatar>
    </q-btn>
  </div>
  <!-- </div> -->
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
const btnColor = ref("white");
const textColor = ref("black");
const state = ref(-1);
const props = defineProps({
  num: Number,
  champion: String,
  showName: Boolean,
  state: Number,
});
const isDevelopment = process.env.NODE_ENV !== "production";
let path;

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

const select = () => {
  console.log(props.champion, props.num);
  emit("update", props.num);
  // changeColor();
  state.value *= -1;
  console.log(state.value);
};

const filename = props.champion
  .replaceAll(" ", "")
  .replaceAll("'", "")
  .replaceAll("&", "")
  .replaceAll(".", "");

if (isDevelopment) {
  path = `src/assets/champion/${filename}.png`;
} else {
  path = `resources/src/assets/champion/${filename}.png`;
}

onMounted(() => {
  state.value = props.state;
});

watch(state, (newVal) => {
  // console.log("newVal =", newVal);
  changeColor();
});
</script>
