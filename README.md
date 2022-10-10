$ npm install --save --force next-export-i18n

Copy the i18n folder from epam dww web
configure i18n/index.js and i18n/lang.js based on your need

import { useTranslation } from "next-export-i18n";
const { t } = useTranslation();
console.log(t("general.button.cancel"));

> it just works

When you have a new locales file, visit i18n/index.js to add it

link:

https://hackmd.io/JmVMaCjKQ8OR8nHu9oR3VQ

$ npm install --save --force axios
