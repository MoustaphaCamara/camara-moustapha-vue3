<script setup lang="ts">
import Footer from "./Footer.vue";
import Header from "./Header.vue";
import Character from "./Character.vue";
</script>

<template>
  <!-- ici vous pouvez choisir 3 amiibos au hasard ou juste vos trois préférés -->
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
