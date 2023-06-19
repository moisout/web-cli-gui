import { defineStore } from 'pinia';

type HistoryState = {
  history: {
    command: string;
    timestamp: number;
    output: string;
  }[];
};

export const useHistoryStore = defineStore('history', {
  state: (): HistoryState => ({
    history: []
  }),
  actions: {
    addToHistory(command: string) {
      this.history.push({ command, timestamp: Date.now(), output: 'ababababa\nababsdbasbd' });
    }
  }
});
