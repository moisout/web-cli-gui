import { defineStore } from 'pinia';

export const useCommandBarStore = defineStore('commandBar', {
  state: () => ({
    typedCommand: '',
    selectedSuggestion: 0,
    suggestions: [] as string[]
  }),
  actions: {
    setSuggestions(suggestions: string[]) {
      this.suggestions = suggestions;
    }
  }
});
