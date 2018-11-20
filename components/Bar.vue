<template>
  <div
    ref="sticky"
    :class="{
      'bg-transparent': !sticky,
      'text-grey-lighter': !sticky,
      'py-8': !sticky,
      'text-2xl': !sticky,
      'py-2': sticky,
      'text-xl': sticky,
      'sticky-bar': sticky,
      'text-black': sticky,
      'bg-grey-lighter': sticky
    }"
    class="bar w-full fixed pin-x pin-t h-auto z-10"
  >
    <div class="container-lg flex justify-between py-2 px-2 sm:px-4 md:px-8">
      <div class="self-center">
        <nuxt-link
          to="/"
          class="no-underline"
        >
          <img
            v-if="sticky"
            class="max-h-36"
            src="https://res.cloudinary.com/vannsl-io/image/upload/c_scale,h_80,p_40/v1542543661/ausbaufaehig_logo_long.png"
            alt="Ausbaufähig, der Wein-Podcast"
          >
          <img
            v-else
            class="max-h-36"
            src="https://res.cloudinary.com/vannsl-io/image/upload/c_scale,h_80,p_40/v1542543661/ausbaufaehig_logo_long_white.png"
            alt="Ausbaufähig, der Wein-Podcast"
          >
        </nuxt-link>
      </div>
      <social />
    </div>
  </div>
</template>

<script>
import toggleStickyness from "~/mixins/toggle-stickyness";
import Social from "~/components/Social.vue";

export default {
  name: "Bar",
  components: {
    Social
  },
  mixins: [toggleStickyness]
};
</script>

<style lang="scss">
.bar {
  transform: translateZ(2px);
  transition: all 1s ease;
}

.sticky-bar {
  box-shadow: 0 3px 10px 0 rgba(255, 255, 255, 0.1);
}

.sticky-bar .twitter {
  color: #1da1f2;

  &:hover {
    color: darken(#1da1f2, 10%);
  }
}

.sticky-bar .instagram {
  color: #e1306c;

  &:hover {
    color: darken(#e1306c, 10%);
  }
}

.sticky-bar + .content {
  padding-top: 42px;
}
</style>
