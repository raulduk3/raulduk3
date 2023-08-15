import {
  Recoil_index_20,
  UserConfigState
} from "./WSBV3W2I.js";
import {
  material_exports,
  responsiveFontSizes
} from "./E4WU3AZH.js";
import {
  createTheme_default,
  require_jsx_runtime
} from "./ZCNVHGRQ.js";
import {
  require_react
} from "./AMCWABVH.js";
import {
  detectSystemColorScheme
} from "./LTECKZ5X.js";
import {
  Z_INDEX
} from "./QIGS6TBV.js";
import {
  __toESM
} from "./ERZ5UWI7.js";

// src/config/customMuiTheme.tsx
var import_react = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var LinkBehaviour = (0, import_react.forwardRef)((props, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref, ...props });
});
var customColor = {
  main: "#7601D3",
  lightBackground: "#f7f9fd",
  lightPaperBackground: "#fff",
  lightBorderColor: "rgb(237,237,236)",
  darkBackground: "#14162a",
  darkPaperBackground: "#343540",
  darkBorderColor: "rgba(255, 255, 255, 0.2)"
};
var useCustomTheme = (colorSchema) => {
  const userConfig = Recoil_index_20(UserConfigState);
  const mode = (0, import_react.useMemo)(() => {
    let coverMode = userConfig.colorSchema;
    if (colorSchema) {
      return colorSchema;
    }
    return coverMode === "auto" ? detectSystemColorScheme() : coverMode;
  }, [colorSchema, userConfig.colorSchema]);
  const isDarkMode = (0, import_react.useMemo)(() => mode === "dark", [mode]);
  const theme = (0, import_react.useMemo)(() => {
    return responsiveFontSizes(
      createTheme_default({
        components: {
          MuiButton: {
            defaultProps: {
              disableElevation: true
            },
            styleOverrides: {
              root: {
                textTransform: "none"
              }
            },
            variants: [
              {
                props: { variant: "secondary" },
                style: {
                  backgroundColor: isDarkMode ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.08)",
                  color: isDarkMode ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.38)",
                  "&:hover": {
                    backgroundColor: isDarkMode ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.1)",
                    color: isDarkMode ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.38)"
                  }
                }
              },
              {
                props: { variant: "contained" },
                style: {
                  backgroundColor: customColor.main,
                  color: "#fff"
                }
              },
              {
                props: { variant: "normalOutlined" },
                style: {
                  backgroundColor: "transparent",
                  border: "1px solid",
                  color: isDarkMode ? "rgba(255, 255, 255, 1)" : "rgba(0, 0, 0, 0.87)",
                  borderColor: isDarkMode ? "rgba(255, 255, 255, 0.23)" : "rgba(0, 0, 0, 0.23)",
                  "&:hover": {
                    backgroundColor: "transparent",
                    borderColor: isDarkMode ? "rgba(255, 255, 255, 1)" : "rgba(0, 0, 0, 0.87)"
                  }
                }
              }
            ]
          },
          MuiTab: {
            styleOverrides: {
              root: {
                textTransform: "none"
              }
            }
          },
          MuiToolbar: {
            styleOverrides: {
              root: {
                width: "100%"
              }
            }
          },
          MuiPaper: {
            styleOverrides: {
              root: {
                outline: "none"
              }
            }
          },
          MuiToggleButton: {
            styleOverrides: {
              root: {
                textTransform: "none"
              }
            }
          },
          MuiButtonBase: {
            defaultProps: {
              LinkComponent: LinkBehaviour
            }
          },
          // 因为用在 shadowRoot 中，需要 disablePortal 对弹窗做样式隔离
          MuiPopover: {
            defaultProps: {
              disablePortal: true
            }
          },
          MuiModal: {
            defaultProps: {
              disablePortal: true
            },
            styleOverrides: {
              root: {
                zIndex: Z_INDEX.MODAL
              }
            }
          },
          MuiAutocomplete: {
            defaultProps: {
              disablePortal: true
            },
            styleOverrides: {
              option: {
                fontSize: 14,
                fontWeight: 500
              }
            }
          },
          MuiTooltip: {
            defaultProps: {
              PopperProps: {
                disablePortal: true
              }
            }
          }
        },
        palette: {
          primary: {
            main: isDarkMode ? "#B273FF" : customColor.main
          },
          mode: isDarkMode ? "dark" : "light",
          background: {
            paper: isDarkMode ? customColor.darkPaperBackground : "#ffffff",
            default: isDarkMode ? customColor.darkBackground : "#ffffff"
          },
          pageBackground: isDarkMode ? customColor.darkBackground : customColor.lightBackground,
          customColor: {
            main: customColor.main,
            borderColor: isDarkMode ? customColor.darkBorderColor : customColor.lightBorderColor,
            background: isDarkMode ? customColor.darkBackground : customColor.lightBackground,
            paperBackground: isDarkMode ? customColor.darkPaperBackground : customColor.lightPaperBackground
          },
          table: {
            title: isDarkMode ? customColor.darkBackground : "#f5f5f5",
            column: isDarkMode ? customColor.darkPaperBackground : "#ffffff"
          }
        },
        breakpoints: {
          values: {
            xs: 320,
            sm: 768,
            md: 1024,
            lg: 1280,
            xl: 1440
          }
        }
      })
    );
  }, [isDarkMode]);
  return {
    isDarkMode,
    customTheme: theme
  };
};
var customMuiTheme_default = useCustomTheme;

export {
  customMuiTheme_default
};
