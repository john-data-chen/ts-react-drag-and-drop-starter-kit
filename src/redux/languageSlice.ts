import { createSlice } from "@reduxjs/toolkit";

interface LanguageState {
  code: "en" | "de";
}

const initialState: LanguageState = {
  code: "en",
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguage: (state) => {
      state.code = state.code === "en" ? "de" : "en";
    },
  },
});

export const { changeLanguage } = languageSlice.actions;
export default languageSlice.reducer;
