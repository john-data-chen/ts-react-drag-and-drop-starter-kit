import React from "react";
import { LANGUAGES } from "../constants/constants";
import { useTranslation } from "react-i18next";

interface LanguageSelectorProps {
  selectedLanguage: string;
  onChangeLang: (languageCode: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  selectedLanguage,
  onChangeLang,
}) => {
  const { t } = useTranslation();
  return (
    <select
      className="languageSelector"
      value={selectedLanguage}
      onChange={(e) => onChangeLang(e.target.value)}
      aria-label={t("language-selector.aria-label")}
    >
      {LANGUAGES.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.label}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelector;
