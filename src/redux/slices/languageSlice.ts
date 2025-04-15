import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from '../../translations/i18n';

interface LanguageState {
  lang: string;
}

const initialState: LanguageState = {
  lang: 'en',
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<string>) {
      state.lang = action.payload;
      i18n.changeLanguage(action.payload);
      AsyncStorage.setItem('user-language', action.payload);
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
