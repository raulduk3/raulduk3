import {
  FormControlLabel_default,
  Radio_default,
  material_exports
} from "./E4WU3AZH.js";
import {
  Stack_default,
  require_jsx_runtime
} from "./ZCNVHGRQ.js";
import {
  require_react
} from "./AMCWABVH.js";
import {
  __toESM
} from "./ERZ5UWI7.js";

// src/options/components/RadioCardGroup.tsx
var import_react = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var RadioCardGroup = (props) => {
  const { options, maxWidth, defaultValue, onChange, sx } = props;
  const [selectedValue, setSelectedValue] = (0, import_react.useState)(
    () => defaultValue || options[0].value
  );
  const handleChange = (newValue) => {
    setSelectedValue(newValue);
    onChange?.(newValue);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stack_default, { direction: "row", alignItems: "stretch", gap: 3, sx: { ...sx }, children: options.map((option) => {
    const isSelected = selectedValue === option.value;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      Stack_default,
      {
        sx: {
          borderRadius: "4px",
          border: "1px solid",
          borderColor: "customColor.borderColor",
          maxWidth,
          bgcolor: (theme) => theme.palette.mode === "dark" ? "rgb(32, 33, 36)" : "rgb(255,255,255)",
          flex: "1 1 0",
          cursor: "pointer",
          ...isSelected && {
            borderColor: "primary.main",
            bgcolor: (theme) => theme.palette.mode === "dark" ? "rgb(56, 56, 56)" : "rgb(235, 227, 345)"
          }
        },
        onClick: () => {
          handleChange(option.value);
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            FormControlLabel_default,
            {
              sx: { m: 0 },
              value: option.value,
              control: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radio_default, { checked: isSelected, sx: { p: 1 } }),
              label: option.label
            }
          ),
          option.image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            Stack_default,
            {
              sx: {
                p: 1,
                "& img": {
                  width: "100%",
                  height: "auto",
                  boxShadow: "0px 1px 7px 2px rgba(0, 0, 0, 0.10)",
                  // disable image dragging
                  userSelect: "none",
                  userDrag: "none",
                  pointerEvents: "none"
                }
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { src: option.image, alt: option.label })
            }
          )
        ]
      },
      option.value
    );
  }) });
};
var RadioCardGroup_default = RadioCardGroup;

export {
  RadioCardGroup_default
};
