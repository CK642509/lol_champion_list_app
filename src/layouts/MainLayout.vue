<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> LOL Champion List APP </q-toolbar-title>

        <!-- <div>Quasar v{{ $q.version }}</div> -->
        <div>v{{ config.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import config from "../../package.json";

const leftDrawerOpen = ref(false);
const essentialLinks = ref([
  {
    title: "Github",
    caption: "source code",
    icon: "code",
    link: "https://github.com/CK642509/lol_champion_list_app",
  },
]);

const linksList = [
  // {
  //   title: "Docs",
  //   caption: "quasar.dev",
  //   icon: "school",
  //   link: "https://quasar.dev",
  // },
  {
    title: "Github",
    caption: "source code",
    icon: "code",
    link: "https://github.com/CK642509/lol_champion_list_app",
  },
];

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
</script>
