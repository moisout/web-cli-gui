<script setup lang="ts">
import { useCommandBarStore } from '../../store/commandBar';
import { watch } from 'vue';

defineProps<{
  typedInput: string;
  visible: boolean;
}>();

const commandBarStore = useCommandBarStore();

const namespaces = ['system:', 'test:', 'notifications:', 'ds:', 'b'];

commandBarStore.setSuggestions(namespaces);

watch(
  () => commandBarStore.typedCommand,
  (newValue) => {
    commandBarStore.selectedSuggestion = 0;
    commandBarStore.setSuggestions(
      namespaces.filter((namespace) => namespace.startsWith(newValue)).sort()
    );
  }
);

// const suggestionPosition = computed(() => {
//   return `${commandBarStore.typedCommand.length * 9.6 + 10}px`;
// });
</script>

<template>
  <div class="suggestions" :class="{ visible }">
    <div
      class="suggestion"
      :class="{ selected: index === commandBarStore.selectedSuggestion }"
      v-for="(suggestion, index) in commandBarStore.suggestions"
      :key="index"
    >
      {{ suggestion }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.suggestions {
  position: absolute;
  bottom: calc(100% + 5px);
  left: 0;
  border-radius: 8px;
  padding: 10px 0;
  box-sizing: border-box;
  background-color: var(--backgroundLight);
  pointer-events: none;
  opacity: 0;
  transition: opacity 100ms ease-out, left 50ms linear;

  &.visible {
    pointer-events: auto;
    opacity: 1;
  }

  .suggestion {
    padding: 3px 40px 3px 10px;
    font-family: monospace;
    font-size: 1rem;

    &.selected {
      background-color: var(--secondary);
    }
  }
}
</style>
