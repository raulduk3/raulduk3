import {
  SettingsFeatureCardLayout_default
} from "./RTQE4LET.js";
import {
  useTranslation
} from "./3G6AO2FI.js";
import {
  require_createSvgIcon
} from "./WS53LFXM.js";
import {
  ListItemButton_default,
  ListItemText_default,
  List_default,
  require_interopRequireDefault,
  require_jsx_runtime
} from "./ZCNVHGRQ.js";
import "./AMCWABVH.js";
import {
  chromeExtensionClientOpenPage
} from "./LTECKZ5X.js";
import "./VIN7E7C7.js";
import "./XK6NXF5B.js";
import "./QIGS6TBV.js";
import {
  __commonJS,
  __toESM
} from "./ERZ5UWI7.js";

// node_modules/.pnpm/@mui+icons-material@5.11.0_@mui+material@5.11.8_@types+react@18.0.27_react@18.2.0/node_modules/@mui/icons-material/OpenInNewOutlined.js
var require_OpenInNewOutlined = __commonJS({
  "node_modules/.pnpm/@mui+icons-material@5.11.0_@mui+material@5.11.8_@types+react@18.0.27_react@18.2.0/node_modules/@mui/icons-material/OpenInNewOutlined.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _jsxRuntime = require_jsx_runtime();
    var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
      d: "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
    }), "OpenInNewOutlined");
    exports.default = _default;
  }
});

// src/options/pages/prompt/index.tsx
var import_OpenInNewOutlined = __toESM(require_OpenInNewOutlined());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var SettingsPromptPage = () => {
  const { t } = useTranslation("settings");
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    SettingsFeatureCardLayout_default,
    {
      title: t("feature__prompts__title"),
      id: "one-click-prompts",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        List_default,
        {
          component: "nav",
          sx: {
            bgcolor: (theme) => theme.palette.mode === "dark" ? "rgb(32, 33, 36)" : "rgb(255,255,255)",
            p: "0 !important",
            borderRadius: "4px",
            border: (t2) => t2.palette.mode === "dark" ? "1px solid rgba(255, 255, 255, 0.12)" : "1px solid rgba(0, 0, 0, 0.12)",
            "& > * + .MuiListItem-root": {
              borderTop: "1px solid",
              borderColor: "customColor.borderColor"
            }
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            ListItemButton_default,
            {
              onClick: () => {
                chromeExtensionClientOpenPage({
                  url: "https://api.maxai.me/app/prompts-web?ref=webchatgpt-settings-prompts-web"
                });
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListItemText_default, { primary: "MaxAI.me/prompts" }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_OpenInNewOutlined.default, { sx: { fontSize: 20 } })
              ]
            }
          )
        }
      )
    }
  );
};
var prompt_default = SettingsPromptPage;
export {
  prompt_default as default
};
