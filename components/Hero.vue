<template>
  <section class="hero bg-black" />
</template>

<script>
export default {
  name: "Hero"
};
</script>

<style lang="scss" scoped>
.hero {
  background: url("~assets/img/hero.jpg");
  background-position: center;
  background-size: cover;
  min-height: calc(100vh - 0px);
}
</style>
