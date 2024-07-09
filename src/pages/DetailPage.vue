<script setup lang="ts">

import {onMounted, ref} from "vue";
import {RouteParamValue, useRoute} from "vue-router";
import {Amiibo} from "../shared/interfaces/Amiibo.ts";
import {useAmiiboStore} from "../stores/amiibo.ts";
const route = useRoute()
const name = ref<any|null>('');

const amiibo = ref<Amiibo[] | null>(null);

const store = useAmiiboStore();

onMounted(async () => {
  await store.fetchByName(route.params.name);
  amiibo.value = store.amiibo.amiibo;
  console.log(amiibo.value);
});

</script>

<template>
  <section id="header">
    <h1>Détail</h1>
  </section>

  <!-- Main -->
  <section id="main">
    <div class="container">
      <div class="row">
        <div class="col-4 col-12-medium">
          <!-- Sidebar -->
          <section class="box">
            <header>
              <h3>Infos</h3>
            </header>
            <p>
              amiiboSeries: <b>Animal Crossing</b> <br />
              character: Cube<br />
              gameSeries: Animal Crossing<br />
              type: card
            </p>
          </section>
          <section class="box">
            <header>
              <h3>Dates sorties</h3>
            </header>

            <ul class="divided">
              <li>au: 2016-03-19</li>
              <li>eu: 2016-03-18</li>
              <li></li>
              <li></li>
            </ul>
          </section>
        </div>
        <div class="col-8 col-12-medium imp-medium">
          <!-- Content -->
          <article class="box post">
            <a href="#" class="featured"
            ><img
                src="https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00800102-035d0302.png"
                alt=""
            /></a>
            <header>
              <h2>Name</h2>
              <p>type</p>
            </header>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>