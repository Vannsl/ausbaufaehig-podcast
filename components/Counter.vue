<template>
  <div class="gradient">
    <div class="container-md flex justify-center flex-wrap py-32">
      <div class="flex justify-around w-400 max-w-full">
        <icon-counter
          :count="episodeCounter"
          title="Episoden"
        >
          <podcast />
        </icon-counter>
        <icon-counter
          :count="countryCounter"
          title="Länder"
        >
          <earth />
        </icon-counter>
      </div>
      <div class="flex justify-around w-400 max-w-full">
        <icon-counter
          :count="wineCounter"
          title="Flaschen"
        >
          <bottle />
        </icon-counter>
        <icon-counter
          :count="glassCounter"
          title="Gläser"
        >
          <glass />
        </icon-counter>
      </div>
    </div>
  </div>
</template>

<script>
import { feed } from "~/assets/private_feed";
import Earth from "~/components/icons/Earth.vue";
import Glass from "~/components/icons/Glass.vue";
import Bottle from "~/components/icons/Bottle.vue";
import Podcast from "~/components/icons/Podcast.vue";
import IconCounter from "~/components/IconCounter.vue";

export default {
  name: "Counter",
  components: {
    Glass,
    Bottle,
    Podcast,
    Earth,
    IconCounter
  },
  data() {
    return {
      wineCounter: 0,
      episodeCounter: 0,
      glassCounter: 0,
      countryCounter: 0
    };
  },
  created() {
    let countries = [];
    let wines = [];
    let glasses = 0;
    feed.item.forEach(item => {
      countries = [...countries, ...this.getFeedValuesFor(item, 'countries')];
      wines = [...wines, ...this.getFeedValuesFor(item, 'wines')];
      glasses += (item.glasses && parseInt(item.glasses._text)) || 0;
    });
    this.glassCounter = glasses;
    this.countryCounter = [...new Set(countries)].length;
    this.wineCounter = [...new Set(wines)].length;
    this.episodeCounter = feed.item.length;
  },
  methods: {
    getFeedValuesFor(item, key) {
      let textArr = [];
      const valueOrValues = item[key] && item[key].value;
      if (valueOrValues) {
        textArr = Array.isArray(valueOrValues) ? valueOrValues.map(value => value._text) : [valueOrValues._text];
      }
      return textArr;
    },
  },
};
</script>

<style lang="scss" scoped>
.gradient {
  background: linear-gradient(20deg, #1a4731, #51d88a 90%);
}
</style>
