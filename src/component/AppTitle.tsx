import { memo } from "react";
import { useTranslation } from "react-i18next";

function AppTitle() {
  const { t } = useTranslation();
  return (
    <h1 className="appTitle" data-testid="appTitle" aria-label={t("app-title")}>
      {t("app-title")}
    </h1>
  );
}

export default memo(AppTitle);
