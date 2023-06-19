import { useDark } from '@vueuse/core';
import { watch } from 'vue';
import { darkTheme } from '../themes/dark';
import { lightTheme } from '../themes/light';

type StyleElement = Element & {
  style: {
    setProperty: (key: string, value: string | number) => void;
  } & {
    [key: string]: string | number;
  };
};

export const useApplyThemes = () => {
  const isDark = useDark();
  const styleRoot: StyleElement | null = document.querySelector(':root');

  watch(isDark, (newValue) => {
    if (styleRoot && window) {
      setTheme(newValue);
    }
  });

  const setTheme = (dark: boolean) => {
    const theme = dark ? darkTheme : lightTheme;
    Object.entries(theme.colors).forEach(([key, value]) => {
      styleRoot?.style.setProperty(`--${key}`, value);
    });
  };

  setTheme(isDark.value);

  return isDark;
};
