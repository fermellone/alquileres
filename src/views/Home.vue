<template>
  <div class="home">
    <announce-card />
    <announce-card />
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
