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
  background: url("https://res.cloudinary.com/vannsl-io/image/upload/c_scale,w_2400,q_40/v1542542993/hero.jpg");
  background-position: center;
  background-size: cover;
  min-height: calc(100vh - 0px);
}
</style>
