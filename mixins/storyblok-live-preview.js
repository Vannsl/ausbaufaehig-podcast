export default {
  mounted() {
    this.$storybridge.on(['published', 'change'], ev => {
      if (!ev.slugChanged) {
        this.$nuxt.$router.go({
          path: this.$nuxt.$router.currentRoute,
          force: true
        })
      }
    })
  }
}
