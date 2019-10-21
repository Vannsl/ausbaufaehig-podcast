<template>
  <div class="mb-8">
    <div v-editable="blok" v-html="markedBlok" />
    <br />Für News folge gerne unserem
    <a
      href="https://twitter.com/ausbaufahig"
      class="text-primary no-underline hover:underline"
      target="_blank"
      rel="noopener"
    >Twitter-Account</a> oder schaue dir Bilder auf
    <a
      href="https://www.instagram.com/ausbaufaehig_podcast/"
      class="text-primary no-underline hover:underline"
      target="_blank"
      rel="noopener"
    >Instagram</a> an.
    <br />
    <br />Hast du Fragen oder Wünsche (wie einen bestimmten Wein)? Dann schreibe uns an
    <a
      href="mailto:ausbaufaehig@vannsl.io"
      class="text-primary no-underline hover:underline"
    >ausbaufaehig@vannsl.io</a>.
  </div>
</template>

<script>
import marked from "marked";

export default {
  name: "Teaser",
  props: ["blok"],
  computed: {
    markedBlok() {
      return marked(this.blok.text);
    }
  }
};
</script>
