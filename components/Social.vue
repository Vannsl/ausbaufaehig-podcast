<template>
  <div class="w-24 flex text-white justify-around">
    <twitter />
    <instagram />
  </div>
</template>

<script>
import Instagram from '~/components/icons/social/Instagram.vue'
import Twitter from '~/components/icons/social/Twitter.vue'

export default {
  name: 'Social',
  components: {
    Twitter,
    Instagram
  }
}
</script>
