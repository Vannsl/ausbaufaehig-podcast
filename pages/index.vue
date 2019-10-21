<template>
  <div>
    <bar :should-check-stickyness="true" />
    <div class="content flex-1">
      <hero />
      <section :class="classList">
        <About>
          <component
            v-if="story.content.component"
            slot="dynamic"
            :key="story.content._uid"
            :blok="story.content"
            :is="story.content.component"
          ></component>
        </About>
      </section>
      <section :class="classList">
        <Episodes />
      </section>
      <counter />
    </div>
    <footer-bar />
  </div>
</template>

<script>
import storyblokLivePreview from "@/mixins/storyblok-live-preview";

import Bar from "~/components/Bar.vue";
import Hero from "~/components/Hero.vue";
import About from "~/components/About.vue";
import Episodes from "~/components/Episodes.vue";
import Counter from "~/components/Counter.vue";
import FooterBar from "~/components/Footer.vue";
import lightModeMixin from "~/mixins/light-mode";

export default {
  components: {
    Bar,
    Hero,
    About,
    Episodes,
    FooterBar,
    Counter
  },
  mixins: [lightModeMixin, storyblokLivePreview],
  data() {
    return { story: { content: {} } };
  },
  asyncData(context) {
    // Check if we are in the editor mode
    let version =
      context.query._storyblok || context.isDev ? "draft" : "published";

    // Load the JSON from the API
    return context.app.$storyapi
      .get("cdn/stories/home", {
        version: version
      })
      .then(res => {
        return res.data;
      })
      .catch(res => {
        context.error({
          statusCode: res.response.status,
          message: res.response.data
        });
      });
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
  data() {
    return {
      classList: "container mx-auto my-16 p-4"
    };
  }
};
</script>
