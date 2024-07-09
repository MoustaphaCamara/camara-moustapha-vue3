<script setup lang="ts">
defineProps<{ message: string }>();
</script>

<template>
  <section id="banner">
    <header>
      <h2>{{ message }}</h2>
    </header>
  </section>
</template>
