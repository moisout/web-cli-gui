<script setup lang="ts">
import { ref } from 'vue';
import { useCommandBarState } from '../composables/commandBarState';
const commandBarInput = ref<HTMLInputElement | null>(null);

const {
  commandBarFocus,
  commandBarText,
  onCommandBarFocus,
  onCommandBarBlur,
  onCommandBarKeyDown
} = useCommandBarState();
</script>

<template>
  <div class="command-bar">
    <div class="command-bar-outline" :class="{ focus: commandBarFocus }" />
    <input
      class="command-bar-input"
      @focus="onCommandBarFocus"
      @blur="onCommandBarBlur"
      @keydown="onCommandBarKeyDown"
      v-model="commandBarText"
      type="text"
      name="command-bar-input"
      ref="commandBarInput"
    />
  </div>
</template>

<style lang="scss" scoped>
.command-bar {
  height: 50px;
  box-sizing: border-box;
  position: relative;
  margin: 0 0 10px 0;

  .command-bar-outline {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    box-shadow: 0 0 0 2px var(--primary) inset;
    transition: box-shadow 200ms ease-out;
    position: absolute;
    pointer-events: none;

    &.focus {
      box-shadow: 0 0 0 2px var(--secondary) inset;
    }
  }

  .command-bar-input {
    all: unset;
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    margin: 5px;
    padding: 12px;
    box-sizing: border-box;
    color: var(--text);
    font-size: 1rem;
    font-family: monospace;
  }
}
</style>
