<template>
  <div class="box sm:p-8">
    <div class="flex flex-col items-center px-4">
      <div class="mx-8 my-2">
        <RSS/>
      </div>
      <div>
        <h1 class="mb-4">Ausbaufähig</h1>
        <p
          class="text-xl leading-tight"
          v-text="description"
        />
      </div>
      <div class="my-2 w-full">
        <Episode :episode="currentEpisode"  />
      </div>
      <div
        v-for="(episode, index) in oldEpisodes"
        :key="index"
        class="my-2 w-full"
      >
        <Episode :episode="episode" :preview="true" />
      </div>
    </div>
  </div>
</template>

<script>
import { feed } from "~/assets/private_feed";
import RSS from "~/components/icons/RSS.vue";
import Episode from "~/components/Episode.vue";

export default {
  name: "Episodes",
  components: {
    RSS,
    Episode
  },
  data() {
    return {
      description: '',
      currentEpisode: {},
      oldEpisodes: [],
    }
  },
  created() {
    this.description = feed.description && feed.description._text;
    const [first, ...rest] = feed.item;
    this.currentEpisode = first;
    this.oldEpisodes = rest;
  }
};
</script>
 
