import { LANGUAGES } from "../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../redux/languageSlice";

const LanguageSelector = () => {
  const selectedLanguage = useSelector(
    (state: { language: { code: string } }) => state.language.code
  );
  const dispatch = useDispatch();
  const onChangeLang = () => {
    dispatch(changeLanguage());
  };
  return (
    <select
      className="languageSelector"
      defaultValue={selectedLanguage}
      onChange={onChangeLang}
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
