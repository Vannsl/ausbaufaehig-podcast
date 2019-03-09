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
      <div
        v-for="(item, index) in items"
        :key="index"
        class="my-2 w-full"
      >
        <Episode :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import FeedApi from "~/services/api/Feed";
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
      items: [],
    }
  },
  async created() {
    // TODO: save in store
    const feed = await FeedApi.getFeed();
    this.description = feed.description && feed.description._text;
    this.items = feed.item;
  }
};
</script>

