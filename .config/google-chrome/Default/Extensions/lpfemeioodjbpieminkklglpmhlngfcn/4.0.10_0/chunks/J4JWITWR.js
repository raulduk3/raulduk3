import {
  Box_default,
  CircularProgress_default
} from "./E4WU3AZH.js";
import {
  Typography_default,
  require_jsx_runtime
} from "./ZCNVHGRQ.js";
import {
  require_react
} from "./AMCWABVH.js";
import {
  __toESM
} from "./ERZ5UWI7.js";

// src/components/AppSuspenseLoadingLayout.tsx
var import_react = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var AppSuspenseLoadingLayout = ({ loadingText = "Loading...", size = 16, sx, children }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_react.Suspense,
    {
      fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        Box_default,
        {
          sx: {
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            flexDirection: "column",
            my: 2,
            ...sx
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircularProgress_default, { size, sx: { m: "0 auto" } }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              Typography_default,
              {
                mt: 1.5,
                variant: "body2",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: 1.25,
                color: "text.primary",
                children: loadingText
              }
            )
          ]
        }
      ),
      children
    }
  );
};
var AppSuspenseLoadingLayout_default = AppSuspenseLoadingLayout;

export {
  AppSuspenseLoadingLayout_default
};
