import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { listenerMiddleware } from './localStorageMiddleware'
import themeReducer, { ThemeState } from './themeSlice'
import languageReducer, { LanguageState } from './languageSlice'
import todoReducer from './todoSlice'
import { DEMO_TASKS } from '../constants/constants'

const rootReducer = combineReducers({
  theme: themeReducer,
  language: languageReducer,
  todos: todoReducer
})

const getInitialState = () => ({
  theme: {
    mode: localStorage.getItem('theme')
      ? (localStorage.getItem('theme') as ThemeState['mode'])
      : 'dark'
  },
  language: {
    code: (localStorage.getItem('i18nextLng') as LanguageState['code']) || 'en'
  },
  todos: {
    todos: localStorage.getItem('todos')
      ? JSON.parse(localStorage.getItem('todos') as string).todos
      : DEMO_TASKS
  }
})

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: getInitialState(),
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().prepend(listenerMiddleware.middleware)
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
