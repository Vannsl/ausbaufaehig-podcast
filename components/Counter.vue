<template>
  <div class="gradient">
    <div class="container-md flex justify-center flex-wrap py-32">
      <div class="flex justify-around w-400 max-w-full">
        <icon-counter
          :count="0"
          title="Episoden"
        >
          <podcast />
        </icon-counter>
        <icon-counter
          :count="0"
          title="Länder"
        >
          <earth />
        </icon-counter>
      </div>
      <div class="flex justify-around w-400 max-w-full">
        <icon-counter
          :count="0"
          title="Flaschen"
        >
          <bottle />
        </icon-counter>
        <icon-counter
          :count="0"
          title="Gläser"
        >
          <glass />
        </icon-counter>
      </div>
    </div>
  </div>
</template>

<script>
import Earth from '~/components/icons/Earth.vue'
import Glass from '~/components/icons/Glass.vue'
import Bottle from '~/components/icons/Bottle.vue'
import Podcast from '~/components/icons/Podcast.vue'
import IconCounter from '~/components/IconCounter.vue'

export default {
  name: 'Counter',
  components: {
    Glass,
    Bottle,
    Podcast,
    Earth,
    IconCounter
  }
}
</script>

<style lang="scss" scoped>
.gradient {
  background: linear-gradient(20deg, #1a4731, #51d88a 90%);
}
</style>
