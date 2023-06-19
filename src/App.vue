<script setup lang="ts">
import CommandBar from './components/CommandBar.vue';
import History from './components/History.vue';
import { useApplyThemes } from './composables/applyTheme';
useApplyThemes();
</script>

<template>
  <div class="main">
    <History />
    <CommandBar />
  </div>
</template>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 900px;
  margin: 0 auto;
}
</style>
