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
        <q-img :src="path" />
      </q-avatar>
      <a>{{ champion }}</a>
    </q-btn>
  </div>

  <div v-else>
    <q-btn @click="select" :color="btnColor" :text-color="textColor">
      <q-avatar size="42px">
        <q-img :src="path" />
      </q-avatar>
    </q-btn>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, toRefs } from "vue";
const btnColor = ref("white");
const textColor = ref("black");
// const state = ref(-1);
const props = defineProps({
  num: Number,
  champion: String,
  showName: Boolean,
  state: Number,
});
const isDevelopment = process.env.NODE_ENV !== "production";

const path = ref();
const { state } = toRefs(props);

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
  console.log(state.value);
};

const filename = props.champion
  .replaceAll(" ", "")
  .replaceAll("'", "")
  .replaceAll("&", "")
  .replaceAll(".", "");

if (isDevelopment) {
  path.value = `src/assets/champion/${filename}.png`;
} else {
  // path.value = `${exe_path}/resources/src/assets/champion/${filename}.png`;

  path.value = new URL(
    `../assets/champion/${filename}.png`,
    import.meta.url
  ).href;
}

// onMounted(() => {
//   state.value = props.state;
// });

watch(state, (newVal) => {
  // console.log("newVal =", newVal);
  changeColor();
});
</script>
