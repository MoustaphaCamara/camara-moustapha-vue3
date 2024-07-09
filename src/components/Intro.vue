<script setup lang="ts">
import Footer from "./Footer.vue";
import Character from "./Character.vue";
import ky from "ky";
import { onMounted, ref } from "vue";

interface Amiibo {
  amiiboSeries: string;
  character: string;
  gameSeries: string;
  head: string;
  image: string;
  name: string;
  release: {
    au?: string;
    eu?: string;
    jp?: string;
    na?: string;
  };
  tail: string;
  type: string;
}

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
      <Character />
      <Character />
      <Character />
    </div>
    <footer>
      <ul class="actions">
        <li>
          <a href="liste.html" class="button large">Liste complète</a>
        </li>
      </ul>
    </footer>
  </section>
</template>
