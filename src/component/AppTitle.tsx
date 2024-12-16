import { useTranslation } from "react-i18next";

export default function AppTitle() {
  const { t } = useTranslation();
  return (
    <h1 className="appTitle" data-testid="appTitle" aria-label={t("app-title")}>
      {t("app-title")}
    </h1>
  );
}
