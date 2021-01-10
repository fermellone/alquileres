<template>
  <v-bottom-navigation
    :v-model="selectedView"
    absolute
    color="primary"
    grow
    @change="changeView"
    mandatory
  >
    <v-btn>
      <span>Inicio</span>

      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn>
      <span>Guardados</span>

      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn>
      <span>Configuración</span>

      <v-icon>mdi-cog</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data() {
    return {
      selectedView: 0,
      views: {
        0: { path: "/", title: "Inicio" },
        1: { path: "/guardados", title: "Guardados" },
        2: { path: "/configuracion", title: "Configuración" },
      },
    };
  },

  methods: {
    changeView(newView) {
      if (typeof newView === "number") {
        if (this.$route.path !== this.views[newView].path) {
          this.changeNavTitle(newView);
          this.goTo(newView);
        }
      }
    },

    goTo(newView) {
      this.$router.push({ path: this.views[newView].path });
    },

    changeNavTitle(newView) {
      this.$store.commit("changeNavTitle", this.views[newView].title);
    },
  },
};
</script>
