<template>
  <div>
    <div v-if="showDivider" class="h-px w-max my-8 bg-grey-lighter" />
    <h2 class="text-2xl py-4 text-center">
      <nuxt-link class="text-primary no-underline hover:underline" :to="path">{{ title }}</nuxt-link>
    </h2>
    <p v-html="description" class="text-xl w-full leading-tight my-2 break-words" />
    <template v-if="!preview">
      <div class="text-center mb-8 mt-6">
        <audio controls v-show="src" class="max-w-full">
          <source :src="src | trim" type="audio/mpeg" />Your browser does not support the audio element.
        </audio>
      </div>
      <div v-if="showNotes" @click="toggleNotices" class="flex w-32 group cursor-pointer">
        <h3 class="text-l mb-4 group-hover:text-primary">Show Notes</h3>
        <Arrow :direction="direction" />
      </div>
      <div v-show="show" v-html="showNotes" />
    </template>
    <div v-if="!preview" class="comments mt-2">
      <vue-disqus
        v-if="showComments"
        shortname="https-www-ausbaufaehig-podcast-de"
        :identifier="episode.number"
        url="https://www.ausbaufaehig-podcast.de"
      ></vue-disqus>
      <button
        v-else
        @click="showComments = !showComments"
        class="bg-white hover:bg-primary hover:text-white font-bold py-2 px-4 rounded"
      >Kommentare anzeigen</button>
    </div>
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
      show: false,
      showComments: false
    };
  },
  props: {
    episode: {
      type: Object,
      required: true
    },
    showDivider: {
      type: Boolean,
      default: true
    },
    preview: {
      type: Boolean,
      default: false
    }
  },
  filters: {
    trim(value) {
      if (!value) return "";
      value = value.toString();
      return value.trim();
    }
  },
  computed: {
    direction() {
      return this.show ? "up" : "down";
    },
    path() {
      return `/episodes/${this.episode.number && this.episode.number._text}`;
    },
    title() {
      return this.episode.title && this.episode.title._text;
    },
    content() {
      return (
        (this.episode["content:encoded"] &&
          this.episode["content:encoded"]._cdata) ||
        (this.episode.description && this.episode.description._cdata)
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
      return this.episode.guid && this.episode.guid._text;
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
dl, p {
  margin-bottom: 1rem;
}

dt {
  margin-bottom: 0.25rem;
}
</style>
