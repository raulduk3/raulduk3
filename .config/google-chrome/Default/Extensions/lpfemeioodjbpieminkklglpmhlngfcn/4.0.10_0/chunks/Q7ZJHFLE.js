import {
  SettingsFeatureCardLayout_default
} from "./RTQE4LET.js";
import {
  CustomConfirm_default,
  deletePrompt,
  getDefaultPrompt,
  getSavedPrompts,
  savePrompt
} from "./EEE4KWHM.js";
import {
  useSnackbar
} from "./TZCO46MB.js";
import {
  Box_default,
  Button_default,
  FormControl_default,
  FormHelperText_default,
  ListItemIcon_default,
  Paper_default,
  TextField_default,
  Tooltip_default,
  material_exports
} from "./E4WU3AZH.js";
import {
  useTranslation
} from "./3G6AO2FI.js";
import {
  require_createSvgIcon
} from "./WS53LFXM.js";
import {
  ListItemButton_default,
  ListItemText_default,
  Stack_default,
  Typography_default,
  require_interopRequireDefault,
  require_jsx_runtime,
  styled_default
} from "./ZCNVHGRQ.js";
import "./X66UQCDQ.js";
import {
  require_react
} from "./AMCWABVH.js";
import "./JUS65PLZ.js";
import "./VIN7E7C7.js";
import "./QIGS6TBV.js";
import {
  v4_default
} from "./AISGHLQV.js";
import {
  __commonJS,
  __toESM
} from "./ERZ5UWI7.js";

// node_modules/.pnpm/@mui+icons-material@5.11.0_@mui+material@5.11.8_@types+react@18.0.27_react@18.2.0/node_modules/@mui/icons-material/AddCircleOutline.js
var require_AddCircleOutline = __commonJS({
  "node_modules/.pnpm/@mui+icons-material@5.11.0_@mui+material@5.11.8_@types+react@18.0.27_react@18.2.0/node_modules/@mui/icons-material/AddCircleOutline.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _jsxRuntime = require_jsx_runtime();
    var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
      d: "M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
    }), "AddCircleOutline");
    exports.default = _default;
  }
});

// node_modules/.pnpm/@mui+icons-material@5.11.0_@mui+material@5.11.8_@types+react@18.0.27_react@18.2.0/node_modules/@mui/icons-material/ArticleOutlined.js
var require_ArticleOutlined = __commonJS({
  "node_modules/.pnpm/@mui+icons-material@5.11.0_@mui+material@5.11.8_@types+react@18.0.27_react@18.2.0/node_modules/@mui/icons-material/ArticleOutlined.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _jsxRuntime = require_jsx_runtime();
    var _default = (0, _createSvgIcon.default)([/* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
      d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
    }, "0"), /* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
      d: "M14 17H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"
    }, "1")], "ArticleOutlined");
    exports.default = _default;
  }
});

// node_modules/.pnpm/@mui+icons-material@5.11.0_@mui+material@5.11.8_@types+react@18.0.27_react@18.2.0/node_modules/@mui/icons-material/DeleteOutlineOutlined.js
var require_DeleteOutlineOutlined = __commonJS({
  "node_modules/.pnpm/@mui+icons-material@5.11.0_@mui+material@5.11.8_@types+react@18.0.27_react@18.2.0/node_modules/@mui/icons-material/DeleteOutlineOutlined.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _jsxRuntime = require_jsx_runtime();
    var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
      d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4h-3.5z"
    }), "DeleteOutlineOutlined");
    exports.default = _default;
  }
});

// src/options/pages/web-access/FeaturePromptEditorCard.tsx
var import_AddCircleOutline = __toESM(require_AddCircleOutline());
var import_react2 = __toESM(require_react());

// src/options/pages/web-access/FeaturePromptList.tsx
var import_ArticleOutlined = __toESM(require_ArticleOutlined());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var FeaturePromptList = ({
  promptList,
  currentPrompt,
  onPromptSelect
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    Paper_default,
    {
      variant: "outlined",
      sx: {
        bgcolor: "transparent",
        height: "100%"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stack_default, { children: promptList.map((prompt) => {
        return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          ListItemButton_default,
          {
            sx: {
              px: 2,
              py: 1.5
            },
            selected: currentPrompt.uuid === prompt.uuid,
            onClick: () => {
              onPromptSelect(prompt);
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                ListItemIcon_default,
                {
                  sx: {
                    minWidth: 0,
                    mr: 1
                  },
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ArticleOutlined.default, {})
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                ListItemText_default,
                {
                  primary: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Typography_default, { variant: "body1", children: prompt.name })
                }
              )
            ]
          },
          prompt.uuid
        );
      }) })
    }
  );
};
var FeaturePromptList_default = FeaturePromptList;

// src/options/pages/web-access/FeaturePromptEditor.tsx
var import_react = __toESM(require_react());
var import_DeleteOutlineOutlined = __toESM(require_DeleteOutlineOutlined());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var VariableButton = styled_default((props) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Button_default, { ...props }))(
  ({ color }) => {
    if (color === "error") {
      return {
        color: "#fff",
        backgroundColor: "#f44336"
      };
    }
    if (color === "warning") {
      return {
        color: "#000",
        backgroundColor: "#FBBD23",
        "&:hover": {
          backgroundColor: "#FBBD23"
        }
      };
    }
    return {
      color: "#000",
      backgroundColor: "#37D39A",
      "&:hover": {
        backgroundColor: "#37D39A"
      }
    };
  }
);
var FeaturePromptEditor = ({
  prompt,
  handlePromptSave,
  handlePromptDelete
}) => {
  const { t } = useTranslation(["settings", "common"]);
  const systemVariables = (0, import_react.useMemo)(
    () => [
      {
        text: "{web_results}",
        value: "{web_results}",
        tooltip: "feature__web_access__variable__web_result__tooltip",
        isRequired: false
      },
      {
        text: "{query}",
        value: "{query}",
        tooltip: "feature__web_access__variable__query__tooltip",
        isRequired: true
      },
      {
        text: "{current_date}",
        value: "{current_date}",
        tooltip: "feature__web_access__variable__current_date__tooltip",
        isRequired: false
      }
    ],
    []
  );
  const textareaRef = import_react.default.useRef(null);
  const [nameError, setNameError] = (0, import_react.useState)("");
  const [textError, setTextError] = (0, import_react.useState)("");
  const [variableError, setVariableError] = (0, import_react.useState)(false);
  const [warnRequiredVariable, setWarnRequiredVariable] = (0, import_react.useState)(false);
  const [editPrompt, setEditPrompt] = (0, import_react.useState)(prompt);
  const [confirmOpen, setConfirmOpen] = (0, import_react.useState)(false);
  const isDisabled = (0, import_react.useMemo)(() => {
    return prompt.uuid === "default";
  }, [prompt]);
  const handleEditPromptChange = (prompt2) => {
    setNameError("");
    setTextError("");
    setEditPrompt((preState) => ({
      ...preState,
      ...prompt2
    }));
  };
  const handleInsertText = (text) => {
    if (textareaRef.current) {
      const start = textareaRef.current.selectionStart;
      const end = textareaRef.current.selectionEnd;
      const currentText = textareaRef.current.value;
      const newText = currentText.substring(0, start) + text + currentText.substring(end, currentText.length);
      textareaRef.current.setSelectionRange(
        start + text.length,
        start + text.length
      );
      textareaRef.current.focus();
      setNameError("");
      setTextError("");
      if (text === "{query}") {
        setVariableError(false);
      }
      setEditPrompt((preState) => ({
        ...preState,
        text: newText
      }));
    }
  };
  const handlePromptSaveClick = (prompt2) => {
    if (promptIsValid(prompt2)) {
      handlePromptSave(prompt2);
    }
  };
  const promptIsValid = (prompt2) => {
    if (!prompt2.name) {
      setNameError("Name is required");
      return false;
    }
    if (!prompt2.text) {
      setTextError("Prompt template is required");
      return false;
    }
    if (!prompt2.text.includes("{query}")) {
      setTextError("Prompt template must include {query}");
      setVariableError(true);
      return false;
    }
    return true;
  };
  const handleDeleteConfirm = () => {
    handlePromptDelete(editPrompt);
    setConfirmOpen(false);
  };
  const checkRequiredVariable = (text) => {
    setWarnRequiredVariable(!text.includes("{query}"));
  };
  (0, import_react.useEffect)(() => {
    setNameError("");
    setTextError("");
    setEditPrompt(prompt);
  }, [prompt]);
  (0, import_react.useEffect)(() => {
    checkRequiredVariable(editPrompt.text);
  }, [editPrompt]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Stack_default, { spacing: 1, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Stack_default, { direction: "row", spacing: 1, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(FormControl_default, { size: "small", error: !!nameError, sx: { flex: 1 }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        TextField_default,
        {
          error: !!nameError,
          size: "small",
          disabled: isDisabled,
          id: "prompt-name",
          variant: "outlined",
          value: editPrompt.name,
          placeholder: "Prompt name",
          onChange: (event) => {
            const value = event.target.value;
            handleEditPromptChange({ name: value });
          },
          sx: {
            fontSize: 16
          }
        }
      ) }),
      !isDisabled && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Tooltip_default, { title: t("common:delete"), children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        Button_default,
        {
          color: "error",
          variant: "outlined",
          sx: {
            px: 1.5,
            py: 1,
            minWidth: 0
          },
          onClick: () => {
            setConfirmOpen(true);
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_DeleteOutlineOutlined.default, {})
        }
      ) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(FormControl_default, { error: !!textError, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        TextField_default,
        {
          error: !!textError,
          disabled: isDisabled,
          id: "prompt-text",
          variant: "outlined",
          multiline: true,
          minRows: 20,
          maxRows: 20,
          placeholder: "Prompt template",
          value: editPrompt.text,
          onChange: (event) => {
            const value = event.target.value;
            handleEditPromptChange({ text: value });
          },
          inputProps: {
            ref: textareaRef
          }
        }
      ),
      textError && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(FormHelperText_default, { sx: { ml: 0 }, children: textError })
    ] }),
    !isDisabled && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
      Stack_default,
      {
        direction: {
          xs: "column",
          sm: "row"
        },
        spacing: 1,
        flexWrap: "wrap",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            Stack_default,
            {
              direction: "row",
              spacing: 1,
              justifyContent: {
                xs: "space-between",
                sm: "flex-start"
              },
              children: systemVariables.map((variable) => {
                return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Tooltip_default, { title: t(variable.tooltip), children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                  VariableButton,
                  {
                    color: (
                      // TODO check variable is required
                      variable.isRequired ? variableError ? "error" : warnRequiredVariable ? "warning" : "primary" : "primary"
                    ),
                    variant: "contained",
                    onClick: () => {
                      handleInsertText(variable.value);
                    },
                    children: variable.text
                  }
                ) }) }, variable.value);
              })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            Box_default,
            {
              flexGrow: 1,
              sx: {
                display: {
                  xs: "none",
                  sm: "block"
                }
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Stack_default, { direction: "row", spacing: 1, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            Button_default,
            {
              variant: "contained",
              onClick: () => {
                handlePromptSaveClick(editPrompt);
              },
              sx: {
                flex: {
                  xs: 1,
                  sm: 0
                }
              },
              children: t("common:save")
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      CustomConfirm_default,
      {
        open: confirmOpen,
        onConfirm: handleDeleteConfirm,
        onClose: () => {
          setConfirmOpen(false);
        },
        confirmButtonText: t(
          "settings:feature__web_access__delete_prompt_confirm_button_text"
        ),
        confirmText: t("settings:feature__web_access__delete_prompt_confirm")
      }
    )
  ] });
};
var FeaturePromptEditor_default = FeaturePromptEditor;

// src/options/pages/web-access/FeaturePromptEditorCard.tsx
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var FeaturePromptEditorCard = () => {
  const { t } = useTranslation("settings");
  const { enqueueSnackbar } = useSnackbar();
  const [savedPrompts, setSavedPrompts] = (0, import_react2.useState)([]);
  const [currentPrompt, setCurrentPrompt] = (0, import_react2.useState)(getDefaultPrompt());
  const updateSavedPrompts = async () => {
    const prompts = await getSavedPrompts();
    setSavedPrompts(prompts);
    if (currentPrompt.uuid === "default") {
      setCurrentPrompt(prompts[0]);
    }
  };
  const handleSelect = (prompt) => {
    setCurrentPrompt(prompt);
  };
  const handleAddPrompt = () => {
    const newPrompt = { uuid: v4_default(), name: "", text: "" };
    setCurrentPrompt(newPrompt);
  };
  const handlePromptSave = async (prompt) => {
    await savePrompt(prompt);
    await updateList();
    enqueueSnackbar(t("feature__web_access__save_prompt_feedback"), {
      variant: "success",
      autoHideDuration: 1e3
    });
  };
  const handlePromptDelete = async (prompt) => {
    if (prompt.uuid) {
      await deletePrompt(prompt);
      await updateList();
      handleAddPrompt();
      enqueueSnackbar(t("feature__web_access__delete_prompt_feedback"), {
        variant: "success",
        autoHideDuration: 1e3
      });
    }
  };
  const updateList = async () => {
    getSavedPrompts().then((sp) => {
      setSavedPrompts(sp);
    });
  };
  (0, import_react2.useLayoutEffect)(() => {
    updateSavedPrompts();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    SettingsFeatureCardLayout_default,
    {
      title: t("feature__web_access__prompt_editor__title"),
      id: "prompt-editor",
      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
        Stack_default,
        {
          direction: {
            xs: "column",
            sm: "row"
          },
          spacing: 2,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
              Stack_default,
              {
                width: {
                  xs: "100%",
                  sm: "30%"
                },
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                    Button_default,
                    {
                      variant: "contained",
                      startIcon: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_AddCircleOutline.default, {}),
                      sx: {
                        height: 48,
                        fontWeight: 600,
                        mb: 1
                      },
                      onClick: handleAddPrompt,
                      children: t("feature__web_access__new_prompt")
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                    FeaturePromptList_default,
                    {
                      promptList: savedPrompts,
                      currentPrompt,
                      onPromptSelect: handleSelect
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              Stack_default,
              {
                width: {
                  xs: "100%",
                  sm: "70%"
                },
                children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                  FeaturePromptEditor_default,
                  {
                    prompt: currentPrompt,
                    handlePromptSave,
                    handlePromptDelete
                  }
                )
              }
            )
          ]
        }
      )
    }
  );
};
var FeaturePromptEditorCard_default = FeaturePromptEditorCard;

// src/options/pages/web-access/index.tsx
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var SettingsWebAccessPage = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Stack_default, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(FeaturePromptEditorCard_default, {}) });
};
var web_access_default = SettingsWebAccessPage;
export {
  web_access_default as default
};
