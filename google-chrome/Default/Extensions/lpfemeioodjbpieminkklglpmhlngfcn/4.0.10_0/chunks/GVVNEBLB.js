import {
  Autocomplete_default,
  TextField_default
} from "./E4WU3AZH.js";
import {
  useTranslation
} from "./3G6AO2FI.js";
import {
  require_jsx_runtime
} from "./ZCNVHGRQ.js";
import {
  LANGUAGE_CODE_MAP
} from "./X66UQCDQ.js";
import {
  require_react
} from "./AMCWABVH.js";
import {
  __toESM
} from "./ERZ5UWI7.js";

// src/components/select/LanguageSelect.tsx
var import_react = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
function filterOptions(options, { inputValue }) {
  return options.filter((option) => {
    const label = option.label.toLowerCase();
    const value = option.value.toLowerCase();
    const enWord = option.origin?.en_label?.toLowerCase() || "";
    const input = inputValue.toLowerCase();
    return label.includes(input) || value.includes(input) || enWord.includes(input);
  });
}
var LanguageSelect = (props) => {
  const {
    label = "",
    defaultValue = "",
    onChange = (value2) => {
    },
    sx,
    placement = "auto",
    disablePortal = true,
    hasAuto = false
  } = props;
  const { t } = useTranslation("common");
  const languageOptions = (0, import_react.useMemo)(() => {
    const languages = Object.keys(LANGUAGE_CODE_MAP).map((key) => {
      const languageCode = LANGUAGE_CODE_MAP[key];
      const option = {
        label: languageCode.label,
        value: key,
        origin: {
          value: key,
          ...languageCode
        }
      };
      return option;
    });
    if (hasAuto) {
      languages.unshift({
        label: "Auto",
        value: "auto"
      });
    }
    return languages;
  }, [hasAuto]);
  const [value, setValue] = import_react.default.useState(() => {
    return languageOptions.find((option) => option.value === defaultValue) || languageOptions[0];
  });
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    Autocomplete_default,
    {
      disablePortal,
      disableClearable: true,
      autoHighlight: true,
      value,
      size: "small",
      sx: {
        width: 220,
        "& .MuiInputBase-root": {
          height: sx?.height ?? "auto"
        },
        "& .MuiInputBase-input": {
          fontSize: 14,
          fontWeight: 500,
          pl: "2px !important"
        },
        "& .MuiAutocomplete-popupIndicator": {
          color: "inherit",
          p: 0
        },
        ...sx
      },
      getOptionLabel: (option) => option.label,
      options: languageOptions,
      onChange: (event, newValue) => {
        setValue(newValue);
        onChange(newValue.value);
      },
      noOptionsText: t("no_options"),
      filterOptions,
      componentsProps: {
        popper: {
          placement
        }
      },
      renderInput: (params) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        TextField_default,
        {
          ...params,
          label,
          inputProps: {
            ...params.inputProps,
            autoComplete: "new-password"
            // disable autocomplete and autofill
          }
        }
      )
    }
  );
};
var LanguageSelect_default = LanguageSelect;

export {
  LanguageSelect_default
};
