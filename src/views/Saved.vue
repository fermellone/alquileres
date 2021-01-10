<template>
  <div class="saved">
    <announce-card class="pb-3 my-2" saved />
    <announce-card class="pb-3 my-2" saved />
  </div>
</template>

<script>
// @ is an alias to /src
import AnnounceCard from "@/components/AnnounceCard.vue";

export default {
  name: "Saved",
  components: {
    AnnounceCard,
  },
};
</script>
