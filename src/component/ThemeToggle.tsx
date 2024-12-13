import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../redux/themeSlice";

interface themeSelectorProps {
  theme: "dark" | "light";
}

const ThemeToggle = () => {
  const themeSelector = useSelector(
    (state: { theme: themeSelectorProps }) => state.theme
  );
  const isDarkMode = themeSelector.theme === "dark";
  const dispatch = useDispatch();
  const toggleTheme = () => {
    dispatch(toggleDarkMode());
  };
  const { t } = useTranslation();

  return (
    <motion.button
      className="themeSwitcher"
      onClick={toggleTheme}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
    >
      {isDarkMode ? "🌞 " + t("theme.light") : "🌜 " + t("theme.dark")}
    </motion.button>
  );
};

export default ThemeToggle;
