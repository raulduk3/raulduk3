import {
  RadioCardGroup_default
} from "./7A4OQ6JL.js";
import {
  SettingsFeatureCardLayout_default
} from "./RTQE4LET.js";
import {
  useUserConfig
} from "./XAECMXJJ.js";
import {
  getChromeExtensionAssetsURL
} from "./KJVQ6IJO.js";
import "./WSBV3W2I.js";
import {
  material_exports
} from "./E4WU3AZH.js";
import {
  useTranslation
} from "./3G6AO2FI.js";
import {
  Stack_default,
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

// src/options/pages/appearance/FeatureAppearanceCard.tsx
var import_react = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var FeatureAppearanceCard = () => {
  const { t } = useTranslation(["settings", "common"]);
  const { userConfig, setUserConfig } = useUserConfig();
  const [selectedValue, setSelectedValue] = (0, import_react.useState)(userConfig.colorSchema);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    SettingsFeatureCardLayout_default,
    {
      title: t("feature__appearance__title"),
      id: "appearance",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        RadioCardGroup_default,
        {
          defaultValue: selectedValue,
          onChange: async (selectValue) => {
            const value = selectValue;
            setSelectedValue(value);
            setUserConfig({
              colorSchema: value
            });
          },
          options: [
            {
              label: t("common:auto"),
              value: "auto",
              image: getChromeExtensionAssetsURL(
                "/images/settings/appearance/appearance-auto.png"
              )
            },
            {
              label: t("common:light"),
              value: "light",
              image: getChromeExtensionAssetsURL(
                "/images/settings/appearance/appearance-light.png"
              )
            },
            {
              label: t("common:dark"),
              value: "dark",
              image: getChromeExtensionAssetsURL(
                "/images/settings/appearance/appearance-dark.png"
              )
            }
          ],
          maxWidth: 372
        }
      )
    }
  );
};
var FeatureAppearanceCard_default = FeatureAppearanceCard;

// src/options/pages/appearance/index.tsx
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var SettingsAppearancePage = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Stack_default, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(FeatureAppearanceCard_default, {}) });
};
var appearance_default = SettingsAppearancePage;
export {
  appearance_default as default
};
