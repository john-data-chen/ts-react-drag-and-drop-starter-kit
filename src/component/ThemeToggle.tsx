import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

interface ThemeToggleProps {
  switchTheme: () => void;
  isDarkMode: boolean;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({
  switchTheme,
  isDarkMode,
}) => {
  const { t } = useTranslation();

  return (
    <motion.button
      className="themeSwitcher"
      onClick={switchTheme}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      aria-label={t("theme.aria-label")}
    >
      {isDarkMode
        ? t("theme.light-icon") + t("theme.light")
        : t("theme.dark-icon") + t("theme.dark")}
    </motion.button>
  );
};

export default ThemeToggle;
