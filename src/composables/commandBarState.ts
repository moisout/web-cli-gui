import { ref } from 'vue';
import { useHistoryStore } from '../store/history';

export const useCommandBarState = () => {
  const commandBarText = ref('');
  const commandBarFocus = ref(false);

  const historyStore = useHistoryStore();

  const onCommandBarFocus = () => {
    commandBarFocus.value = true;
  };

  const onCommandBarBlur = () => {
    commandBarFocus.value = false;
  };

  const onCommandBarKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter' && commandBarText.value.length > 0) {
      historyStore.addToHistory(commandBarText.value);
      commandBarText.value = '';
    }
  };

  return {
    commandBarText,
    commandBarFocus,
    onCommandBarFocus,
    onCommandBarBlur,
    onCommandBarKeyDown
  };
};
