<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';
import { computed, ref } from 'vue';

const props = defineProps<{
  open: boolean;
  btnRef: HTMLButtonElement | null;
}>();

const position = computed(() => {
  const rect = props.btnRef?.getBoundingClientRect();
  const popupRect = popupRef.value?.getBoundingClientRect();
  if (!rect) return null;

  return {
    top: `${rect.top + rect.height}px`,
    left: `${rect.left - (popupRect?.width ?? 0)}px`
  };
});

const isDark = useDark();
const toggleDark = useToggle(isDark);

const onThemeClick = (theme: string) => {
  toggleDark(theme === 'dark');
};

const popupRef = ref<HTMLDivElement | null>(null);
</script>

<template>
  <div
    v-if="position"
    ref="popupRef"
    class="theme-popup"
    :class="{ open }"
    :style="{ top: position.top, left: position.left }"
  >
    <p class="themes-title">Theme</p>
    <div class="themes">
      <div
        class="theme"
        :class="{ selected: !isDark }"
        @click="onThemeClick('light')"
      >
        <i-tabler-sun width="32" height="32" />
      </div>
      <div
        class="theme"
        :class="{ selected: isDark }"
        @click="onThemeClick('dark')"
      >
        <i-tabler-moon width="32" height="32" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.theme-popup {
  position: fixed;
  pointer-events: none;
  opacity: 0;
  transform: scale(0.8);
  transform-origin: top right;
  transition-property: opacity, transform;
  transition-duration: 150ms;
  transition-timing-function: ease-out;

  background-color: var(--backgroundLight);
  padding: 10px;
  border-radius: 8px;

  .themes-title {
    margin: 5px 0 10px 0;
    text-align: center;
  }

  .themes {
    display: flex;
    flex-direction: row;
    gap: 10px;

    .theme {
      width: 55px;
      height: 55px;
      border-radius: 8px;
      display: flex;
      cursor: pointer;

      transition: outline 200ms ease-out;
      outline: transparent solid 2px;

      svg {
        margin: auto;
      }

      &.selected {
        outline: var(--secondary) solid 2px;
      }

      &:hover {
        outline: var(--primary) solid 2px;
      }
    }
  }

  &.open {
    pointer-events: auto;
    opacity: 1;
    transform: scale(1);
  }
}
</style>
