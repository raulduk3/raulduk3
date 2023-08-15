import {
  SettingsFeatureCardLayout_default
} from "./RTQE4LET.js";
import {
  LanguageSelect_default
} from "./GVVNEBLB.js";
import {
  useUserConfig
} from "./XAECMXJJ.js";
import "./WSBV3W2I.js";
import {
  ListItem_default,
  material_exports
} from "./E4WU3AZH.js";
import {
  useTranslation
} from "./3G6AO2FI.js";
import {
  ListItemText_default,
  List_default,
  require_jsx_runtime
} from "./ZCNVHGRQ.js";
import "./X66UQCDQ.js";
import {
  require_react
} from "./AMCWABVH.js";
import "./JUS65PLZ.js";
import "./VIN7E7C7.js";
import "./QIGS6TBV.js";
import {
  __toESM
} from "./ERZ5UWI7.js";

// src/options/pages/language/index.tsx
var import_react = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var SettingsLanguagePage = () => {
  const { t } = useTranslation("settings");
  const { userConfig, setUserConfig } = useUserConfig();
  const [selectedValue, setSelectedValue] = (0, import_react.useState)(userConfig.language);
  const handleLanguageChange = (value) => {
    setSelectedValue(value);
    setUserConfig({
      language: value
    });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    SettingsFeatureCardLayout_default,
    {
      title: t("feature__preferred_language__title"),
      id: "language",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        List_default,
        {
          sx: {
            bgcolor: (theme) => theme.palette.mode === "dark" ? "rgb(32, 33, 36)" : "rgb(255,255,255)",
            // p: ' !important',
            borderRadius: "4px",
            border: (t2) => t2.palette.mode === "dark" ? "1px solid rgba(255, 255, 255, 0.12)" : "1px solid rgba(0, 0, 0, 0.12)"
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ListItem_default, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              ListItemText_default,
              {
                primary: t(
                  "settings:feature__preferred_language__field_preferred_language_title"
                ),
                secondary: t(
                  "settings:feature__preferred_language__field_preferred_language_description"
                )
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              LanguageSelect_default,
              {
                disablePortal: false,
                label: t("feature__preferred_language__select_label"),
                defaultValue: selectedValue,
                onChange: handleLanguageChange,
                placement: "bottom",
                sx: {
                  height: 40
                }
              }
            )
          ] })
        }
      )
    }
  );
};
var language_default = SettingsLanguagePage;
export {
  language_default as default
};
