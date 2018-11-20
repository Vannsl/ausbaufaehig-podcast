export default {
  data() {
    return {
      sticky: false
    }
  },
  props: {
    shouldCheckStickyness: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    height() {
      return this.$refs.sticky.offsetTop
    }
  },
  methods: {
    toggleStickyness() {
      this.sticky = window.pageYOffset > this.height
    }
  },
  created() {
    if (this.shouldCheckStickyness) {
      window.addEventListener('scroll', this.toggleStickyness)
    } else {
      this.sticky = true
    }
  }
}
