import {
  AppSuspenseLoadingLayout_default
} from "../chunks/J4JWITWR.js";
import {
  AppTheme_default,
  ProLink_default,
  UserConfigInit,
  WebChatGPTLogo,
  require_client,
  useInitI18n
} from "../chunks/XENBXGDD.js";
import "../chunks/P6HDST5X.js";
import {
  Recoil_index_5
} from "../chunks/WSBV3W2I.js";
import {
  SnackbarProvider
} from "../chunks/TZCO46MB.js";
import {
  Box_default,
  Button_default,
  CssBaseline_default,
  Divider_default,
  Drawer_default,
  IconButton_default,
  material_exports
} from "../chunks/E4WU3AZH.js";
import {
  useTranslation
} from "../chunks/3G6AO2FI.js";
import {
  require_createSvgIcon
} from "../chunks/WS53LFXM.js";
import {
  ListItemButton_default,
  ListItemText_default,
  List_default,
  Stack_default,
  Typography_default,
  require_interopRequireDefault,
  require_jsx_runtime
} from "../chunks/ZCNVHGRQ.js";
import "../chunks/CWTJNSHL.js";
import "../chunks/X66UQCDQ.js";
import {
  require_react
} from "../chunks/AMCWABVH.js";
import "../chunks/JUS65PLZ.js";
import "../chunks/LTECKZ5X.js";
import "../chunks/VIN7E7C7.js";
import "../chunks/XK6NXF5B.js";
import {
  APP_IS_PROD,
  require_browser_polyfill
} from "../chunks/QIGS6TBV.js";
import {
  __commonJS,
  __toESM
} from "../chunks/ERZ5UWI7.js";

// node_modules/.pnpm/@mui+icons-material@5.11.0_@mui+material@5.11.8_@types+react@18.0.27_react@18.2.0/node_modules/@mui/icons-material/MenuOutlined.js
var require_MenuOutlined = __commonJS({
  "node_modules/.pnpm/@mui+icons-material@5.11.0_@mui+material@5.11.8_@types+react@18.0.27_react@18.2.0/node_modules/@mui/icons-material/MenuOutlined.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _jsxRuntime = require_jsx_runtime();
    var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
      d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
    }), "MenuOutlined");
    exports.default = _default;
  }
});

// node_modules/.pnpm/@mui+icons-material@5.11.0_@mui+material@5.11.8_@types+react@18.0.27_react@18.2.0/node_modules/@mui/icons-material/GitHub.js
var require_GitHub = __commonJS({
  "node_modules/.pnpm/@mui+icons-material@5.11.0_@mui+material@5.11.8_@types+react@18.0.27_react@18.2.0/node_modules/@mui/icons-material/GitHub.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var React6 = _interopRequireWildcard(require_react());
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _jsxRuntime = require_jsx_runtime();
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function")
        return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return { default: obj };
      }
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj.default = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
      d: "M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"
    }), "GitHub");
    exports.default = _default;
  }
});

// src/options/options.tsx
var import_react5 = __toESM(require_react());
var import_client = __toESM(require_client());

// src/options/pages/SettingsApp.tsx
var import_react4 = __toESM(require_react());

// src/options/components/toolbar/OptionsToolbarLogo.tsx
var import_react3 = __toESM(require_react());
var import_MenuOutlined = __toESM(require_MenuOutlined());

// src/options/components/OptionsLeftMenu.tsx
var import_react2 = __toESM(require_react());

// src/options/context/index.ts
var import_react = __toESM(require_react());
var settingsPageRouterList = [
  {
    route: "/prompt",
    label: "left_menu__prompts",
    divider: false
  },
  {
    route: "/web-access",
    label: "left_menu__web_access",
    divider: false
  },
  {
    route: "/search-with-ai",
    label: "left_menu__search_with_ai",
    divider: true
  },
  {
    route: "/appearance",
    label: "left_menu__appearance",
    divider: false
  },
  {
    route: "/language",
    label: "left_menu__language",
    divider: false
  },
  {
    route: "/support",
    label: "left_menu__support",
    divider: false
  }
];
var SettingsPageRouteContext = import_react.default.createContext({
  route: "/prompt",
  setRoute: (route) => {
  }
});
var getLocationHashRoute = () => {
  const hash = window.location.hash;
  let route = hash.replace("#", "");
  if (!route) {
    route = "/prompt";
    setLocationHashRoute(route);
  }
  return route;
};
var setLocationHashRoute = (route) => {
  window.location.hash = `#${route}`;
};

// src/options/components/OptionsLeftMenu.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime());
var OptionsLeftMenu = (props) => {
  const { t } = useTranslation("settings");
  const { route, setRoute } = (0, import_react2.useContext)(SettingsPageRouteContext);
  const { sx } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List_default, { component: "nav", sx: { py: 2, ...sx }, children: settingsPageRouterList.map((menuItem) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react2.default.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        ListItemButton_default,
        {
          sx: {
            p: "4px 16px"
          },
          selected: route === menuItem.route,
          onClick: () => {
            setRoute(menuItem.route);
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListItemText_default, { primary: t(menuItem.label) })
        }
      ),
      menuItem.divider && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Divider_default, { sx: { my: 1 } })
    ] }, menuItem.route);
  }) });
};
var OptionsLeftMenu_default = OptionsLeftMenu;

// src/options/components/toolbar/OptionsToolbarLogo.tsx
var import_webextension_polyfill = __toESM(require_browser_polyfill());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var version = import_webextension_polyfill.default.runtime.getManifest().version;
var OptionsToolbarLogo = () => {
  const { t } = useTranslation(["common"]);
  const [drawerOpen, setDrawerOpen] = (0, import_react3.useState)(false);
  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setDrawerOpen(open);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_react3.default.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Stack_default, { direction: "row", alignItems: "center", spacing: 1, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Box_default, { component: "span", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          WebChatGPTLogo,
          {
            sx: {
              // xs: {
              //   width: 0,
              //   height: 0,
              //   fontSize: 0,
              // },
              // md: {
              //   fontSize: 32,
              // },
              display: "inherit",
              fontSize: {
                xs: 0,
                md: 32
              }
              // display: {
              //   xs: 'none',
              //   md: 'inherit',
              // },
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          IconButton_default,
          {
            onClick: (event) => {
              event.stopPropagation();
              event.preventDefault();
              toggleDrawer(true)(event);
            },
            sx: {
              display: {
                xs: "inline-flex",
                md: "none"
              }
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              import_MenuOutlined.default,
              {
                sx: {
                  fontSize: 24
                }
              }
            )
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Typography_default, { fontSize: 20, fontWeight: 700, color: "text.primary", children: "WebChatGPT" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Typography_default, { fontSize: 12, color: "text.secondary", children: version })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Drawer_default, { anchor: "left", open: drawerOpen, onClose: toggleDrawer(false), children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
      Box_default,
      {
        role: "presentation",
        component: "div",
        onKeyDown: toggleDrawer(false),
        onClick: toggleDrawer(false),
        sx: {
          width: SETTINGS_PAGE_MENU_WIDTH
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            Stack_default,
            {
              minHeight: 56,
              sx: {
                flexDirection: "row",
                alignItems: "center",
                borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
                boxSizing: "border-box",
                pl: 2
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Stack_default, { direction: "row", alignItems: "center", spacing: 1, children: [
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                  WebChatGPTLogo,
                  {
                    sx: {
                      fontSize: 32
                    }
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Typography_default, { fontSize: 20, fontWeight: 700, color: "text.primary", children: "WebChatGPT" })
              ] })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(OptionsLeftMenu_default, {})
        ]
      }
    ) })
  ] });
};
var OptionsToolbarLogo_default = OptionsToolbarLogo;

// src/components/DevContent.tsx
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var DevContent = ({ children }) => {
  if (APP_IS_PROD) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_jsx_runtime3.Fragment, { children });
};
var DevContent_default = DevContent;

// src/options/pages/SettingsApp.tsx
var import_GitHub = __toESM(require_GitHub());
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var SETTINGS_PAGE_MENU_WIDTH = {
  xs: 250,
  sm: 250,
  md: 250,
  lg: 250,
  xl: 250
};
var SETTINGS_PAGE_CONTENT_WIDTH = {
  xs: 400,
  sm: 680,
  md: 800,
  lg: 680,
  xl: 800
};
var SettingsPromptPage = import_react4.default.lazy(() => import("../chunks/GPDAVZNG.js"));
var SettingsWebAccessPage = import_react4.default.lazy(
  () => import("../chunks/Q7ZJHFLE.js")
);
var SettingsSearchWithAIPAge = import_react4.default.lazy(
  () => import("../chunks/CMUSJL4N.js")
);
var SettingsAppearancePage = import_react4.default.lazy(
  () => import("../chunks/OOFVIJTS.js")
);
var SettingsLanguagePage = import_react4.default.lazy(
  () => import("../chunks/ABPQ7SPU.js")
);
var SettingsSupportPage = import_react4.default.lazy(() => import("../chunks/UMK3NLDT.js"));
var SettingsApp = () => {
  const { i18n } = useTranslation();
  const onceScrollRef = (0, import_react4.useRef)(false);
  const [route, setRoute] = (0, import_react4.useState)(
    () => getLocationHashRoute()
  );
  (0, import_react4.useEffect)(() => {
    if (route) {
      if (getLocationHashRoute() !== route) {
        setLocationHashRoute(route);
      }
    }
  }, [route]);
  (0, import_react4.useEffect)(() => {
    if (route && !onceScrollRef.current) {
      const locationSearch = window.location.search;
      const searchParams = locationSearch.split("?")[1]?.split("&");
      const searchParamsMap = /* @__PURE__ */ new Map();
      searchParams?.forEach((searchParam) => {
        const [key, value] = searchParam.split("=");
        searchParamsMap.set(key, value);
      });
      if (searchParamsMap.get("id")) {
        onceScrollRef.current = true;
        const maxRenderTime = 3e3;
        const intervalTimer = setInterval(() => {
          const hTag = document.getElementById(searchParamsMap.get("id"));
          if (hTag) {
            clearInterval(intervalTimer);
            hTag.scrollIntoView({
              behavior: "smooth"
            });
          }
        }, 100);
        const timer = setTimeout(() => {
          clearInterval(intervalTimer);
        }, maxRenderTime);
        return () => {
          clearTimeout(timer);
          clearInterval(intervalTimer);
        };
      }
    }
    return () => {
    };
  }, [route]);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(SettingsPageRouteContext.Provider, { value: { route, setRoute }, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
    Stack_default,
    {
      height: "100vh",
      bgcolor: (t) => t.palette.mode === "dark" ? "#202124" : "#fff",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          Stack_default,
          {
            minHeight: 56,
            direction: "row",
            alignItems: "center",
            sx: {
              borderBottom: (t) => t.palette.mode === "dark" ? "1px solid #121212" : "1px solid #E0E0E0",
              boxSizing: "border-box",
              bgcolor: (t) => t.palette.mode === "dark" ? "#202124" : "#fff",
              mb: 1
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
              Stack_default,
              {
                direction: "row",
                alignItems: "center",
                maxWidth: "xl",
                mx: "auto",
                width: "100%",
                px: 2,
                minHeight: 70,
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Stack_default, { direction: "row", flex: "1 1 0", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Box_default, { width: SETTINGS_PAGE_MENU_WIDTH, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(OptionsToolbarLogo_default, {}) }) }),
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                    Stack_default,
                    {
                      direction: "row",
                      flex: "1 1 0",
                      flexBasis: SETTINGS_PAGE_CONTENT_WIDTH,
                      children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(DevContent_default, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                        Button_default,
                        {
                          onClick: async () => {
                            await i18n.changeLanguage(
                              i18n.language === "zh_CN" ? "en" : "zh_CN"
                            );
                          },
                          children: "change language"
                        }
                      ) })
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Stack_default, { direction: "row", flex: "1 1 0", justifyContent: "end", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                    ProLink_default,
                    {
                      href: "https://github.com/qunash/chatgpt-advanced",
                      target: "_blank",
                      children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(IconButton_default, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_GitHub.default, {}) })
                    }
                  ) })
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          Box_default,
          {
            flex: 1,
            display: "flex",
            alignItems: "flex-start",
            overflow: "overlay",
            maxWidth: "xl",
            mx: "auto",
            width: "100%",
            px: 2,
            children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(AppSuspenseLoadingLayout_default, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                Box_default,
                {
                  flex: "1 1 0",
                  sx: {
                    justifyContent: "end",
                    height: "100%",
                    position: "sticky",
                    top: 0,
                    display: {
                      xs: "none",
                      md: "flex"
                    }
                  },
                  children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Stack_default, { direction: "row", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(OptionsLeftMenu_default, { sx: { width: SETTINGS_PAGE_MENU_WIDTH } }) })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                Stack_default,
                {
                  flex: "1 1 0",
                  flexBasis: SETTINGS_PAGE_CONTENT_WIDTH,
                  sx: {
                    maxHeight: "calc(100vh - 56px)",
                    overflowY: "auto"
                  },
                  children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Stack_default, { width: SETTINGS_PAGE_CONTENT_WIDTH, mx: "auto", pt: 2, children: [
                    route === "/prompt" && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(SettingsPromptPage, {}),
                    route === "/web-access" && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(SettingsWebAccessPage, {}),
                    route === "/search-with-ai" && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(SettingsSearchWithAIPAge, {}),
                    route === "/appearance" && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(SettingsAppearancePage, {}),
                    route === "/language" && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(SettingsLanguagePage, {}),
                    route === "/support" && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(SettingsSupportPage, {})
                  ] })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                Stack_default,
                {
                  direction: "row",
                  flex: "1 1 0",
                  justifyContent: "start",
                  sx: {
                    pt: 2,
                    display: {
                      xs: "none",
                      lg: "flex"
                    }
                  }
                }
              )
            ] })
          }
        )
      ]
    }
  ) });
};
var SettingsApp_default = SettingsApp;

// src/components/AppInit/OptionPageInit.tsx
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var OptionPageInit = () => {
  useInitI18n();
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_jsx_runtime5.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(UserConfigInit, {}) });
};
var OptionPageInit_default = OptionPageInit;

// src/options/options.tsx
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
var rootElement = document.getElementById("options");
if (rootElement) {
  const root = (0, import_client.createRoot)(rootElement);
  document.title = `Settings | MaxAI.me`;
  root.render(
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react5.default.StrictMode, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Recoil_index_5, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(AppTheme_default, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(OptionPageInit_default, {}),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(CssBaseline_default, {}),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(SnackbarProvider, { maxSnack: 3, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(SettingsApp_default, {}) })
    ] }) }) })
  );
}
