import LightColors from './colors/LightColors';
import DarkColors from './colors/DarkColors';

export const Themes = {
  light: LightColors,
  dark: DarkColors,
};

export type ThemeType = keyof typeof Themes;
