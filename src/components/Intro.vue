<script setup lang="ts">
import Footer from "./Footer.vue";
import Header from "./Header.vue";
</script>

<template>
  <!-- ici vous pouvez choisir 3 amiibos au hasard ou juste vos trois préférés -->
  <section id="intro" class="container">
    <div class="row">
      <div class="col-4 col-12-medium">
        <section class="middle">
          <img
              src="https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00000002.png"
          />
          <header>
            <h2>character</h2>
          </header>
          <p>gameSeries</p>
        </section>
      </div>
      <div class="col-4 col-12-medium">
        <section class="middle">
          <img
              src="https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00000002.png"
          />
          <header>
            <h2>character</h2>
          </header>
          <p>gameSeries</p>
        </section>
      </div>
      <div class="col-4 col-12-medium">
        <section class="middle">
          <img
              src="https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00000002.png"
          />
          <header>
            <h2>character</h2>
          </header>
          <p>gameSeries</p>
        </section>
      </div>
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
