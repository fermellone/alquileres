<template>
  <div class="home">
    <announce-card class="pb-3 my-2" />
    <announce-card class="pb-3 my-2" />
  </div>
</template>

<script>
// @ is an alias to /src
import AnnounceCard from "@/components/AnnounceCard.vue";

export default {
  name: "Home",
  components: {
    AnnounceCard,
  },
};
</script>
