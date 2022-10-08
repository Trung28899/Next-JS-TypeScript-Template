import React from "react";
import useTranslation from "next-translate/useTranslation";

function i18n_demo() {
  const { t } = useTranslation();
  return <div>{t("common:greeting")}</div>;
}

export default i18n_demo;
