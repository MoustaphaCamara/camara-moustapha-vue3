<script setup lang="ts">
import {useAmiiboStore} from "../stores/amiibo.ts";
import {onMounted, ref} from "vue";
import {Amiibo} from "../shared/interfaces/Amiibo.ts";

const amiibos = ref<Amiibo[] | null>(null);

const store = useAmiiboStore();

onMounted(async () => {
  await store.fetchAmiibos("Pokemon");
  amiibos.value = store.amiibo.amiibo;
});
</script>


<template>
  <section id="main">
    <div class="container">
      <article class="box post">
        <header>
          <h2>Ma Collection (10 par 10)</h2>
          <p>Page 1/n </p>
        </header>
        <p>
          <table>
            <tr>
              <th>Character</th>
              <th>game Series</th>
              <th>Action</th>
            </tr>
            <tr v-for="amiibo in amiibos">
              <td>{{amiibo.name}}</td>
              <td>{{amiibo.gameSeries}}</td>
              <td>
                <RouterLink :to="{ name: 'detail', params: { name: amiibo.name }}"
                >Voir {{amiibo.name}}</RouterLink
                >
              </td>
            </tr>
          </table>
        </p>
        <button>Charger plus</button>
      </article>

    </div>
  </section>
</template>
