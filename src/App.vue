<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center"></div>
    </v-app-bar>

    <v-main>
      <announce-card />
    </v-main>
  </v-app>
</template>

<script>
import AnnounceCard from "./components/AnnounceCard";

export default {
  name: "App",

  components: {
    AnnounceCard,
  },

  data: () => ({
    //
  }),
};
</script>
