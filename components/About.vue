<template>
  <div class="box flex flex-wrap flex-row-reverse sm:p-8">
    <div class="box__half sm:min-w-300">
      <div class="circular-image w-220 sm:w-300 h-220 sm:h-300 max-w-full" />
    </div>
    <slot name="dynamic" />
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style lang="scss" scoped>
.circular-image {
  margin: 48px auto;
  border-radius: 150px;
  max-width: 300px;
  background: url("~assets/img/ben_und_vanessa.webp");
  background-position: 30%;
  background-size: cover;
  box-shadow: 0px 0px 50px -10px rgba(0, 0, 0, 0.75);
}
</style>
