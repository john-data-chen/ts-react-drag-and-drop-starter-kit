import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
  code: string;
}

const initialState: ThemeState = {
  code: localStorage.getItem("theme") || "dark",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    switchTheme: (state) => {
      state.code = state.code === "dark" ? "light" : "dark";
      localStorage.setItem("theme", state.code);
    },
  },
});

export const { switchTheme } = themeSlice.actions;
export default themeSlice.reducer;
