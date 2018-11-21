<template>
  <div>
    <div class="h-px w-max my-8 bg-grey-lighter" />
    <h2 class="text-xl text-center">
      {{ title }}
    </h2>
    <div class="text-center my-4">
      <audio controls class="max-w-full">
        <source :src="src" type="audio/mpeg">
      Your browser does not support the audio element.
      </audio>
    </div>
    <p class="text-xl w-full leading-tight my-2">
      {{ description }}
    </p>
    <div
      @click="toggleNotices"
      class="flex w-24 group cursor-pointer"
      >
      <h3 class="text-l mb-4 group-hover:text-primary">
        Show Notes
      </h3>
      <Arrow :direction="direction" />
    </div>
    <div v-show="show">
      <slot />
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
      show: false
    };
  },
  props: {
    number: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  computed: {
    direction() {
      return this.show ? "up" : "down";
    },
    src() {
      return `https:vannsl.io/ausbaufaehig/ausbaufaehig_episode_${
        this.number
      }.mp3`;
    }
  },
  methods: {
    toggleNotices() {
      this.show = !this.show;
    }
  }
};
</script>

<style lang="scss" scoped>
dl {
  margin-bottom: 1rem;
}

dt {
  margin-bottom: 0.25rem;
}
</style>
