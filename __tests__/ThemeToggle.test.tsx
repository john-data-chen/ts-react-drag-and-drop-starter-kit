import { render, fireEvent } from '@testing-library/react'
import ThemeToggle from '../src/component/ThemeToggle'
import React from 'react'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key
  })
}))

describe('ThemeToggle Component', () => {
  test('test_theme_toggle_switch', () => {
    const switchThemeMock = jest.fn()
    const { getByTestId } = render(<ThemeToggle switchTheme={switchThemeMock} isDarkMode={false} />)

    const button = getByTestId('themeSwitcher')
    fireEvent.click(button)

    expect(switchThemeMock).toHaveBeenCalledTimes(1)
  })

  test('test_theme_toggle_display', () => {
    const { getByTestId, rerender } = render(
      <ThemeToggle switchTheme={() => {}} isDarkMode={false} />
    )
    let button = getByTestId('themeSwitcher')
    expect(button).toHaveTextContent(`${'theme.dark-icon'}${'theme.dark'}`)

    rerender(<ThemeToggle switchTheme={() => {}} isDarkMode={true} />)
    button = getByTestId('themeSwitcher')
    expect(button).toHaveTextContent(`${'theme.light-icon'}${'theme.light'}`)
  })
})
