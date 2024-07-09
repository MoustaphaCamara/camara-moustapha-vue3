<script setup lang="ts">
import { ref} from "vue";

const isActive = ref<boolean>(false);
</script>

<template>
  <nav id="nav">
    <ul>
      <li>
        <RouterLink :class="isActive ? 'current' : ''" to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/list">Liste Amiibo</RouterLink>
      </li>
    </ul>
  </nav>
</template>
