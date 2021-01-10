<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="primary"
      dark
      scroll-target="#scrolling-techniques-8"
    >
      <v-toolbar-title>{{ title }}</v-toolbar-title>

      <v-spacer />

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-avatar color="primary" :size="avatarSize">
        <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          :max-height="avatarSize"
          :max-width="avatarSize"
          src="https://picsum.photos/id/11/500/300"
        />
      </v-avatar>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-8"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 83vh;" class="mt-14">
        <slot />
      </v-container>
    </v-sheet>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      avatarSize: "35",
    };
  },
};
</script>
