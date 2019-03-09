<template>
  <div>
    <bar/>
    <div class="content flex-1">
      <section class="container mx-auto my-16 p-4">
        <Episodes/>
      </section>
    </div>
    <footer-bar/>
  </div>
</template>

<script>
import Bar from "~/components/Bar.vue";
import Episodes from "~/components/Episodes.vue";
import FooterBar from "~/components/Footer.vue";

export default {
  components: {
    Bar,
    Episodes,
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
  data() {
    return {
      classList: "container mx-auto my-16 p-4"
    };
  }
};
</script>
