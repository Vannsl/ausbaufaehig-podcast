<template>
  <div>
    <bar :should-check-stickyness="true"/>
    <div class="content flex-1">
      <hero/>
      <section :class="classList">
        <About/>
      </section>
      <section :class="classList">
        <Episodes/>
      </section>
      <counter/>
    </div>
    <footer-bar/>
  </div>
</template>

<script>
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
  mixins: [lightModeMixin],
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
      classList: "container mx-auto my-16 p-4",
    };
  }
};
</script>
