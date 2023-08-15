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
  FormControlLabel_default,
  RadioGroup_default,
  Radio_default,
  material_exports
} from "./E4WU3AZH.js";
import {
  useTranslation
} from "./3G6AO2FI.js";
import {
  Stack_default,
  Typography_default,
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

// src/options/pages/search-with-ai/FeatureSearchWithAICard.tsx
var import_react = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var FeatureSearchWithAICard = () => {
  const { t } = useTranslation("settings");
  const { userConfig, setUserConfig } = useUserConfig();
  const [selectedValue, setSelectedValue] = (0, import_react.useState)(
    userConfig.searchWithAIEnabled
  );
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    SettingsFeatureCardLayout_default,
    {
      title: t("feature__search_with_ai__title"),
      id: "search-with-ai",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        RadioCardGroup_default,
        {
          defaultValue: selectedValue ? "enabled" : "disabled",
          onChange: async (value) => {
            const isEnable = value === "enabled";
            setSelectedValue(isEnable);
            setUserConfig({
              searchWithAIEnabled: isEnable
            });
          },
          options: [
            {
              label: t("common:enabled"),
              value: "enabled",
              image: getChromeExtensionAssetsURL(
                "/images/settings/search-with-ai/search-with-ai-enabled.png"
              )
            },
            {
              label: t("common:disabled"),
              value: "disabled",
              image: getChromeExtensionAssetsURL(
                "/images/settings/search-with-ai/search-with-ai-disabled.png"
              )
            }
          ],
          maxWidth: 372
        }
      )
    }
  );
};
var FeatureSearchWithAICard_default = FeatureSearchWithAICard;

// src/options/pages/search-with-ai/FeatureTriggerModeCard.tsx
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var TRIGGER_MODE_OPTIONS = [
  {
    name: "feature__search_with_ai__trigger_mode__always__name",
    value: "always",
    desc: "feature__search_with_ai__trigger_mode__always__desc"
  },
  {
    name: "feature__search_with_ai__trigger_mode__question-mask__name",
    value: "question-mask",
    desc: "feature__search_with_ai__trigger_mode__question-mask__desc"
  },
  {
    name: "feature__search_with_ai__trigger_mode__manual__name",
    value: "manual",
    desc: "feature__search_with_ai__trigger_mode__manual__desc"
  }
];
var FeatureTriggerModeCard = () => {
  const { t } = useTranslation("settings");
  const { userConfig, setUserConfig } = useUserConfig();
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    SettingsFeatureCardLayout_default,
    {
      title: t("feature__search_with_ai__trigger_mode__title"),
      id: "trigger-mode",
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        RadioGroup_default,
        {
          "aria-labelledby": "demo-radio-buttons-group-label",
          value: userConfig.triggerMode,
          onChange: (event) => {
            const value = event.target.value;
            setUserConfig({
              triggerMode: value
            });
          },
          children: TRIGGER_MODE_OPTIONS.map((option) => {
            return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              FormControlLabel_default,
              {
                value: option.value,
                control: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Radio_default, {}),
                sx: {
                  mb: 2
                },
                label: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Stack_default, { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                    Typography_default,
                    {
                      variant: "body1",
                      color: "text.primary",
                      fontWeight: 600,
                      children: t(option.name)
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Typography_default, { variant: "body2", color: "text.secondary", children: t(option.desc) })
                ] })
              },
              option.value
            );
          })
        }
      )
    }
  );
};
var FeatureTriggerModeCard_default = FeatureTriggerModeCard;

// src/options/pages/search-with-ai/index.tsx
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var SettingsSearchWithAIPage = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(Stack_default, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(FeatureSearchWithAICard_default, {}),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(FeatureTriggerModeCard_default, {})
  ] });
};
var search_with_ai_default = SettingsSearchWithAIPage;
export {
  search_with_ai_default as default
};
