<script setup lang="ts">
import { Amiibo } from "../shared/interfaces/Amiibo.ts";
import { onMounted } from "vue";

const props = defineProps<{ amiibo: Amiibo }>();

onMounted(() => {
  console.log(props.amiibo);
});
</script>

<template>
  <div class="col-4 col-12-medium">
    <section class="middle">
      <img
        :alt="`picture of ${props.amiibo.name}`"
        width="300px"
        :src="props.amiibo.image"
      />
      <header>
        <h2>{{ props.amiibo.name }}</h2>
      </header>
      <p>{{ props.amiibo.gameSeries }}</p>
    </section>
  </div>
</template>
