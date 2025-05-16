import { changeLanguageState } from '../redux/languageSlice'
import { RootState } from '../redux/store'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'

const useLanguage = () => {
  const languageCode = useSelector((state: RootState) => state.language.code)
  const dispatch = useDispatch()
  const { i18n } = useTranslation()

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode)
    dispatch(changeLanguageState())
  }

  return { languageCode, handleLanguageChange }
}

export default useLanguage
