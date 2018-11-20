<template>
  <div class="flex flex-col items-center mt-16">
    <slot />
    <div class="pt-8">
      <number-counter
        :count="count"
        :title="title"
      />
    </div>
  </div>
</template>

<script>
import NumberCounter from '~/components/NumberCounter.vue'

export default {
  name: 'IconCounter',
  components: {
    NumberCounter
  },
  props: {
    count: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>
