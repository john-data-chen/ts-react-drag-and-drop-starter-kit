import { render, fireEvent } from '@testing-library/react'
import LanguageSelector from '../src/component/LanguageSelector'
import { LANGUAGES } from '../src/constants/constants'
import React from 'react'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key
  })
}))

describe('LanguageSelector Component', () => {
  it('test_render_language_options', () => {
    const { getByTestId } = render(
      <LanguageSelector selectedLanguage="en" onChangeLang={() => {}} />
    )

    const selectElement = getByTestId('languageSelector')
    expect(selectElement).toBeInTheDocument()

    LANGUAGES.forEach((lang) => {
      const optionElement = getByTestId(`LanguageOption-${lang.code}`)
      expect(optionElement).toBeInTheDocument()
      expect(optionElement).toHaveValue(lang.code)
      expect(optionElement).toHaveTextContent(lang.label)
    })
  })

  it('test_on_change_language', () => {
    const mockOnChangeLang = jest.fn()
    const { getByTestId } = render(
      <LanguageSelector selectedLanguage="en" onChangeLang={mockOnChangeLang} />
    )

    const selectElement = getByTestId('languageSelector')
    fireEvent.change(selectElement, { target: { value: 'de' } })

    expect(mockOnChangeLang).toHaveBeenCalledWith('de')
  })
})
