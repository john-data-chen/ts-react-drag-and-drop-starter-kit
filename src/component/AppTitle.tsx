import { useTranslation } from "react-i18next";

export default function AppTitle() {
  const { t } = useTranslation();
  return <h1 className="appTitle">{t("app-title")}</h1>;
}
