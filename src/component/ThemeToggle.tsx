import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { memo } from "react";

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
      type="button"
      className="themeSwitcher"
      data-testid="themeSwitcher"
      onClick={switchTheme}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      role="switch"
      aria-checked={isDarkMode}
      aria-label={t("theme.aria-label")}
    >
      {isDarkMode
        ? `${t("theme.light-icon")}${t("theme.light")}`
        : `${t("theme.dark-icon")}${t("theme.dark")}`}
    </motion.button>
  );
};

export default memo(ThemeToggle);
