import {
  Stack_default,
  Typography_default,
  require_jsx_runtime
} from "./ZCNVHGRQ.js";
import {
  __toESM
} from "./ERZ5UWI7.js";

// src/options/layout/SettingsFeatureCardLayout.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime());
var SettingsFeatureCardLayout = (props) => {
  const { id, title, children, tooltip } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stack_default, { spacing: 2, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stack_default, { direction: "row", alignItems: "center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        Typography_default,
        {
          id,
          component: "h2",
          fontSize: "24px",
          lineHeight: "28px",
          fontWeight: 800,
          color: "text.primary",
          children: title
        }
      ),
      tooltip
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Stack_default,
      {
        p: 2,
        sx: {
          mb: "32px!important",
          borderRadius: "4px",
          bgcolor: (t) => t.palette.mode === "dark" ? "#121212" : "#F5F6F7"
        },
        children
      }
    )
  ] });
};
var SettingsFeatureCardLayout_default = SettingsFeatureCardLayout;

export {
  SettingsFeatureCardLayout_default
};
