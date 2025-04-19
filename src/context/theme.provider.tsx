import React, { createContext, useContext } from 'react';
import { Themes, ThemeType } from '@theme/index';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@redux/store';
import { setTheme } from '@redux/slices/themeSlice';

const ThemeContext = createContext({
  theme: 'light' as ThemeType,
  colors: Themes.light,
  setTheme: (_: ThemeType) => {},
});

const RawThemeContext = ThemeContext;

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const currentTheme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();
  const colors = Themes[currentTheme];

  return (
    <ThemeContext.Provider
      value={{
        theme: currentTheme,
        colors,
        setTheme: (theme: ThemeType) => dispatch(setTheme(theme)),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};


const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme, RawThemeContext };
