<template>
  <div>
    <bar />
    <div class="content flex-1">
      <section class="container mx-auto my-16 p-4">
        <div v-if="isLoaded" class="box px-4 sm:p-8">
          <div class="my-2 w-full">
            <Episode v-if="item" :episode="item" :showDivider="false" />
            <div v-else>
              <p class="my-4">Wir sind noch am Trinken für Episode {{$route.params.id}}.</p>
              <p class="my-2">
                <nuxt-link
                  class="text-primary no-underline hover:underline"
                  to="/episodes/"
                >&larr; Zur Episodenliste</nuxt-link>
              </p>
              <p class="my-2">
                <nuxt-link
                  class="text-primary no-underline hover:underline"
                  to="/"
                >&larr; Zur Startseite</nuxt-link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <footer-bar />
  </div>
</template>

<script>
import { feed } from "~/assets/private_feed";
import Bar from "~/components/Bar.vue";
import Episode from "~/components/Episode.vue";
import FooterBar from "~/components/Footer.vue";
import lightModeMixin from "~/mixins/light-mode";

export default {
  name: "Episodes",
  components: {
    Bar,
    Episode,
    FooterBar
  },
  head() {
    return {
      title: `Ausbaufähig Episode #${this.id}`,
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
  mixins: [lightModeMixin],
  validate({ params }) {
    return /^\d+$/.test(params.id);
  },
  asyncData({ params }) {
    return {
      id: params.id
    };
  },
  data() {
    return {
      item: {},
      isLoaded: false
    };
  },
  created() {
    this.item =
      feed.item &&
      feed.item.find(item => item.number._text === this.$route.params.id);
    this.isLoaded = true;
  }
};
</script>
