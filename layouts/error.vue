<template>
  <div>
    <bar :should-check-stickyness="false" />
    <div class="content flex-1">
      <section class="container h-48">
        Nothing to drink here
      </section>
      <counter />
    </div>
    <footer-bar />
  </div>
</template>

<script>
import Bar from "~/components/Bar.vue";
import Hero from "~/components/Hero.vue";
import FooterBar from "~/components/Footer.vue";

export default {
  layout: "default",
  components: {
    Bar,
    Hero,
    FooterBar
  }
};
</script>
