<template>
  <div class="saved">
  <template v-for="(announce, index) in announces">
    <announce-card :announce="announce" :key="`saved-announce-${index}`" class="pb-3 my-2" saved />
  </template>
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

  computed: {
    ...mapState({announcesState: 'savedAnnounces'}),

    announces(){
      return this.announcesState.length ? this.announcesState : []
    }
  },
};
</script>
