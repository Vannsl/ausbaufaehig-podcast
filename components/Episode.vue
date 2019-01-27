<template>
  <div>
    <div class="h-px w-max my-8 bg-grey-lighter"/>
    <h2 class="text-xl text-center">{{ title }}</h2>
    <div class="text-center my-4">
      <audio controls class="max-w-full">
        <source :src="src" type="audio/mpeg">Your browser does not support the audio element.
      </audio>
    </div>
    <p v-html="description" class="text-xl w-full leading-tight my-2"/>
    <div v-if="showNotes" @click="toggleNotices" class="flex w-24 group cursor-pointer">
      <h3 class="text-l mb-4 group-hover:text-primary">Show Notes</h3>
      <Arrow :direction="direction"/>
    </div>
    <div v-show="show" v-html="showNotes"/>
  </div>
</template>

<script>
import Arrow from "~/components/Arrow.vue";

export default {
  name: "Episode",
  components: {
    Arrow
  },
  data() {
    return {
      show: false
    };
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    direction() {
      return this.show ? "up" : "down";
    },
    title() {
      return this.item.title && this.item.title._text;
    },
    content() {
      return (
        this.item["content:encoded"] && this.item["content:encoded"]._cdata ||
        this.item.description && this.item.description._cdata
      );
    },
    parsedContent() {
      return (this.content || "").split("<h3>Show Notes</h3>");
    },
    description() {
      return this.parsedContent[0];
    },
    showNotes() {
      return this.parsedContent[1];
    },
    src() {
      return this.item.link && this.item.link._text;
    }
  },
  methods: {
    toggleNotices() {
      this.show = !this.show;
    }
  }
};
</script>

<style lang="scss">
dl {
  margin-bottom: 1rem;
}

dt {
  margin-bottom: 0.25rem;
}
</style>
