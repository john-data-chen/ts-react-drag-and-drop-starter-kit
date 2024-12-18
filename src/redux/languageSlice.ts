import { createSlice } from '@reduxjs/toolkit'

export interface LanguageState {
  code: 'en' | 'de'
}

const initialState: LanguageState = {
  code: 'en'
}

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    changeLanguageState: (state) => {
      state.code = state.code === 'en' ? 'de' : 'en'
    }
  }
})

export const { changeLanguageState } = languageSlice.actions
export default languageSlice.reducer
