<template>
  <div v-editable="blok" class="mb-8 markdown">
    <vue-markdown class="mb-8">{{ blok.main }}</vue-markdown>
    <vue-markdown class="mb-8">{{ blok.social }}</vue-markdown>
    <vue-markdown>{{ blok.contact }}</vue-markdown>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";

export default {
  props: ["blok"],
  components: {
    "vue-markdown": VueMarkdown
  }
};
</script>

<style lang="scss" scoped>
.markdown {
  a {
    font-size: 30px;
    color: "#ff8ca3";

    &:hover {
      color: white;
    }
  }
}
</style>
