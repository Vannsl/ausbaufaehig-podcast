<template>
  <ul class="list-reset flex justify-center py-8">
    <li class="mr-6">
      <nuxt-link class="hover:text-primary" to="/impressum">Impressum</nuxt-link>
    </li>
    <li>
      Copyright 2018-2021 <a href="https://vannsl.io" class="hover:text-primary" target="_blank" rel="noopener nofollow noreferrer">vannsl.io</a>
    </li>
    <!-- <li class="mr-6 hover:text-grey-lightest">
      <nuxt-link to="/datenschutz">Datenschutz</nuxt-link>
    </li> -->
  </ul>
</template>

<script>
export default {
  name: "Footer"
};
</script>
