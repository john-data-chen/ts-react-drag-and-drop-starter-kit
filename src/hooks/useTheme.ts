import { RootState } from '../redux/store'
import { switchTheme } from '../redux/themeSlice'
import { useDispatch, useSelector } from 'react-redux'

const useTheme = () => {
  const themeMode = useSelector((state: RootState) => state.theme.mode)
  const dispatch = useDispatch()

  const isDarkMode = themeMode === 'dark'
  const handleSwitchTheme = () => dispatch(switchTheme())

  return { isDarkMode, handleSwitchTheme }
}

export default useTheme
