<template>
  <div class="home">
  <template v-for="(announce, index) in announces">
    <announce-card :announce="announce" :key="`announce-${index}`" class="pb-3 my-2" />
  </template>
  </div>
</template>

<script>
// @ is an alias to /src
import AnnounceCard from "@/components/AnnounceCard.vue";

import {mapState, mapMutations, mapAction} from 'vuex'

export default {
name: "Home",

  components: {
    AnnounceCard,
  },

  computed:{
    ...mapState({announcesState: 'announces'}),

    announces() {
      return this.announcesState || []
    }
  },

  methods: {
    ...mapAction({getAnnounces: 'getAnnounces'}),

    fetchAnnounces(){
      console.log('loading on');
      this.getAnnounces().then(() => {
        console.log('success');
      }).catch((err) => {
        throw new Error(err)
      }).finally(() => {
        console.log('loading off');
      })
    }
  },

  mounted() {
    this.fetchAnnounces()
  }
};
</script>
