<script setup lang="ts">
import { useHistoryStore } from '../store/history';

const historyStore = useHistoryStore();
</script>

<template>
  <div class="history">
    <div class="history-inner">
      <div
        class="history-element"
        v-for="(element, index) in historyStore.history"
        :key="index"
      >
        <p class="command">
          <span class="command-indicator">▶</span>{{ element.command }}
        </p>
        <p class="command-output" v-if="element.output">{{ element.output }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.history {
  flex-grow: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 0 10px 0;

  .history-inner {
    box-sizing: border-box;

    .history-element {
      font-family: monospace;
      font-size: 1rem;
      margin-top: 5px;

      .command {
        margin: 5px 0 0 0;
        color: var(--text);
      }

      .command-output {
        margin: 0;
        color: var(--text);
        margin: 0 0 0 15px;
      }

      .command-indicator {
        margin: 0 5px 0 0;
        color: var(--secondary);
      }
    }
  }
}
</style>
