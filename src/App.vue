<script setup lang="ts">
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="homepage is-preload">
    <div id="page-wrapper">
      <Header />
      <RouterView></RouterView>
      <Footer />
    </div>
  </div>
</template>
