<template>
  <v-app>
    <div id="app">
      <!-- <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> -->
      <nav-bar :title="title">
        <router-view />
      </nav-bar>
      <bottom-nav-bar />
    </div>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar";
import BottomNavBar from "@/components/BottomNavBar";

export default {
  components: {
    NavBar,
    BottomNavBar,
  },

  computed: {
    title() {
      return this.$store.state.navTitle;
    },
  },
};
</script>

<style lang="scss"></style>
