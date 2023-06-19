<script setup lang="ts">
import { useApplyThemes } from './composables/applyTheme';
useApplyThemes();
</script>

<template>
  <div class="main">
    <Toolbar />
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
