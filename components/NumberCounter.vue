<template>
  <div class="text-3xl">
    <strong>{{ animatedNumber }} {{ title }}</strong>
  </div>
</template>

<script>
import { TweenLite } from 'greensock'
import inViewport from 'vue-in-viewport-mixin'

export default {
  name: 'NumberCounter',
  mixins: [inViewport],
  props: {
    count: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      once: true,
      number: 0,
      tweenedNumber: 0
    }
  },
  computed: {
    animatedNumber() {
      return this.tweenedNumber.toFixed(0)
    }
  },
  watch: {
    'inViewport.now'(visible) {
      if (this.once && visible) {
        setTimeout(() => {
          this.number = this.count
        }, 100)
        this.once = false
      }
    },
    number(newValue) {
      TweenLite.to(this.$data, 2, { tweenedNumber: newValue })
    }
  }
}
</script>
