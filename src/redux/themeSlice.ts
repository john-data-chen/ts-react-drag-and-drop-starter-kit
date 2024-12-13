import { createSlice } from "@reduxjs/toolkit";

export interface ThemeState {
  theme: "dark" | "light";
}

const initialState: ThemeState = {
  theme: localStorage.theme || "dark",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.theme = state.theme === "dark" ? "light" : "dark";
      localStorage.theme = state.theme;
    },
  },
});

export const { toggleDarkMode } = themeSlice.actions;
export default themeSlice.reducer;
