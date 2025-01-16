import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../redux/store'
import { switchTheme } from '../redux/themeSlice'

const useTheme = () => {
  const themeMode = useSelector((state: RootState) => state.theme.mode)
  const dispatch = useDispatch()

  const isDarkMode = themeMode === 'dark'
  const handleSwitchTheme = () => dispatch(switchTheme())

  return { isDarkMode, handleSwitchTheme }
}

export default useTheme
