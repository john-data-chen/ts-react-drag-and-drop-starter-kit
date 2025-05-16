import useTheme from '../hooks/useTheme'
import { darkTheme, GlobalStyles, lightTheme } from '../theme/ThemeSets'
import React from 'react'
import { ThemeProvider } from 'styled-components'

interface ThemeWrapperProps {
  children: React.ReactNode
}
const ThemeWrapper = React.memo(({ children }: ThemeWrapperProps) => {
  const { isDarkMode } = useTheme()
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles theme={isDarkMode ? darkTheme : lightTheme} />
      {children}
    </ThemeProvider>
  )
})

export default ThemeWrapper
