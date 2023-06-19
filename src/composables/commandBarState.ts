import { computed, ref } from 'vue';
import { useHistoryStore } from '../store/history';
import { useCommandBarStore } from '../store/commandBar';

export const useCommandBarState = () => {
  const commandBarFocus = ref(false);

  const historyStore = useHistoryStore();
  const commandBarStore = useCommandBarStore();

  const onCommandBarFocus = () => {
    commandBarFocus.value = true;
  };

  const onCommandBarBlur = () => {
    commandBarFocus.value = false;
  };

  const onCommandBarKeyDown = (event: KeyboardEvent) => {
    let shouldPrevent = true;
    if (event.key === 'Enter' && commandBarStore.typedCommand.length > 0) {
      historyStore.addToHistory(commandBarStore.typedCommand);
      commandBarStore.typedCommand = '';
    } else if (event.key === 'ArrowUp') {
      commandBarStore.selectedSuggestion--;
    } else if (event.key === 'ArrowDown') {
      commandBarStore.selectedSuggestion++;
    } else if (event.key === 'Tab') {
      if (commandBarStore.suggestions.length) {
        commandBarStore.typedCommand =
          commandBarStore.suggestions[commandBarStore.selectedSuggestion];
      }
    } else {
      shouldPrevent = false;
    }
    if (shouldPrevent) event.preventDefault();
  };

  const commandBarText = computed({
    get: () => commandBarStore.typedCommand,
    set: (value) => {
      commandBarStore.typedCommand = value;
    }
  });

  return {
    commandBarText,
    commandBarFocus,
    onCommandBarFocus,
    onCommandBarBlur,
    onCommandBarKeyDown
  };
};
