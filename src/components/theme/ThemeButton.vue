<script setup lang="ts">
import { ref } from 'vue';
import { useCssVar } from '@vueuse/core';

const onThemeClick = () => {
  open.value = !open.value;
};

const primary = useCssVar('--primary');
const secondary = useCssVar('--secondary');

const open = ref(false);
const btnRef = ref<HTMLButtonElement | null>(null);
</script>

<template>
  <button class="theme-button" @click="onThemeClick" ref="btnRef">
    <i-tabler-palette
      width="24"
      height="24"
      :style="{
        color: open ? secondary : primary
      }"
    />
  </button>
  <ThemePopup :open="open" :btnRef="btnRef" @close="() => (open = false)" />
</template>

<style lang="scss" scoped>
.theme-button {
  all: unset;
  cursor: pointer;
  color: var(--primary);
}
</style>
