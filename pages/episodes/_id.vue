<template>
  <div>
    <bar :should-check-stickyness="true"/>
    <div class="content flex-1">
      <section class="container mx-auto mt-32 mb-16 p-4">
        <div class="box sm:p-8">
          <Episode :episode="item" :showDivider="false" />
        </div>
      </section>
    </div>
    <footer-bar/>
  </div>
</template>

<script>
import FeedApi from "~/services/api/Feed";
import Bar from "~/components/Bar.vue";
import Episode from "~/components/Episode.vue";
import FooterBar from "~/components/Footer.vue";

export default {
  components: {
    Bar,
    Episode,
    FooterBar
  },
  head() {
    return {
      meta: [
        {
          hid: "description",
          name: "description",
          content: `Beim Wein-Podcast Ausbaufähig von Ben und Vanessa werden 
            verschiedenste Weine aus der ganzen Welt getrunken und 
            besprochen. Weder Ben noch Vanessa sind ausgebildete 
            Sommeliers, sie trinken einfach nur gern Wein! Und wie 
            Wein erstmal im Fass ausgebaut werden muss, bevor er gut wird, 
            ist ihr Wissen daher auch eher "ausbaufähig", 
            aber sie trinken trotzdem gerne!`
        }
      ]
    };
  },
  validate ({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
  },
  data() {
    return {
      item: {},
    }
  },
  async created() {
    // save in store
    const feed = await FeedApi.getFeed();
    this.item = feed.item && feed.item.find(item => item.number._text === this.$route.params.id);
  }
};
</script>
