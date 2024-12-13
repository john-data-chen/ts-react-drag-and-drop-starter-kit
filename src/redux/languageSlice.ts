import { createSlice } from "@reduxjs/toolkit";

interface LanguageState {
  code: string;
}

const initialState: LanguageState = {
  code: localStorage.getItem("i18nextLng") || "en",
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguage: (state) => {
      state.code = state.code === "en" ? "de" : "en";
      localStorage.setItem("i18nextLng", state.code);
    },
  },
});

export const { changeLanguage } = languageSlice.actions;
export default languageSlice.reducer;
