import { createSlice } from "@reduxjs/toolkit";
// import { current } from "@reduxjs/toolkit";

export interface ThemeState {
  mode: "dark" | "light";
}

const initialState: ThemeState = {
  mode: "dark",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    switchTheme: (state) => {
      state.mode = state.mode === "dark" ? "light" : "dark";
      // console.log(current(state));
    },
  },
});

export const { switchTheme } = themeSlice.actions;
export default themeSlice.reducer;
