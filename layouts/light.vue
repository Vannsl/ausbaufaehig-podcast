<template>
  <div class="light flex flex-col min-h-screen bg-grey-light text-grey-light">
    <nuxt/>
  </div>
</template>

<style lang="scss">
.light {
  color: #333;

  .box {
    background: #eee;

    .bg-grey-lighter {
      background: #888;
    }

    .text-primary {
      color: #bf024e;
    }
  }
}
</style>
