<template>
  <v-card class="mx-auto" max-width="400">
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title>Hermosa casa a estrenar</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">
      Precio: Gs. 900.000
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>
        2 habitaciones, 1 baño, cocina amoblada, patio frontal, patio trasero.
      </div>
    </v-card-text>

    <v-card-actions class="justify-end">
      <v-btn color="primary">
        Guardar
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

  data() {
    return {};
  },
};
</script>
