<script setup lang="ts">
import Footer from "./Footer.vue";
import Character from "./Character.vue";
import { onMounted, ref } from "vue";
import { useAmiiboStore } from "../stores/amiibo.ts";
import { Amiibo } from "../shared/interfaces/Amiibo.ts";

const store = useAmiiboStore();

const amiibos = ref<Amiibo[] | null>(null);

onMounted(async () => {
  await store.fetchByName("MewTwo");
  amiibos.value = store.amiibos.amiibo;
});
</script>

<template>
  <section id="intro" class="container">
    <div class="row">
      <div v-for="amiibo in amiibos">
        <Character :amiibo="amiibo" />
      </div>
    </div>
    <footer>
      <ul class="actions">
        <li>
          <RouterLink class="complete" to="/list">Liste complète</RouterLink>
        </li>
      </ul>
    </footer>
  </section>
</template>
