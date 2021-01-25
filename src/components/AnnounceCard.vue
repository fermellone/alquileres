<template>
  <v-card class="mx-auto" max-width="400">
    <v-img
      class="white--text align-end"
      height="200px"
      :src="announce.image_path"
    >
      <v-card-title>Hermosa casa a estrenar</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">
      Precio: {{announce.price}}
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>
        {{announce.description.join()}}
      </div>
    </v-card-text>

    <v-card-actions class="justify-end">
      <v-btn v-if="!saved" color="primary">
        Guardar
      </v-btn>
      <v-btn v-else color="error">
        Descartar
      </v-btn>
      <v-btn color="primary">
        Contactar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "AnnounceCard",

  props: {
    saved: {
      type: Boolean,
      default: false,
    },
    announce: {
      type: Object,
      default: () => {}
    }
  },

  data() {
    return {};
  },
};
</script>
