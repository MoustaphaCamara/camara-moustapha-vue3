<script setup lang="ts">
import Footer from "./Footer.vue";
import Character from "./Character.vue";
import ky from "ky";
import { onMounted, ref } from "vue";
import { Amiibo } from "../shared/interfaces/Amiibo.ts";

const amiibos = ref<Amiibo[]>([]);

const fetchData = async (): Promise<Amiibo> => {
  try {
    const fetch = await ky
      .get("https://www.amiiboapi.com/api/amiibo/?character=Mewtwo")
      .json();
    const { amiibo } = fetch;
    amiibos.value = amiibo;
    console.log(amiibos.value);
  } catch (e) {
    console.error(e);
  }
};

onMounted(() => {
  fetchData();
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
