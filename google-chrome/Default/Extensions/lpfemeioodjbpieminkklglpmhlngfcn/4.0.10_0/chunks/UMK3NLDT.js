import {
  YoutubePlayerBox_default
} from "./MJFME47G.js";
import {
  SettingsFeatureCardLayout_default
} from "./RTQE4LET.js";
import {
  customMuiTheme_default
} from "./P6HDST5X.js";
import "./WSBV3W2I.js";
import {
  Button_default,
  material_exports,
  useMediaQuery
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
import "./AMCWABVH.js";
import "./JUS65PLZ.js";
import "./LTECKZ5X.js";
import "./VIN7E7C7.js";
import "./XK6NXF5B.js";
import {
  DISCORD_INVITE_LINK,
  WEBCHATGPT_CHROME_STORE_LINK,
  ZMO_TOOLS_LINK
} from "./QIGS6TBV.js";
import {
  __toESM
} from "./ERZ5UWI7.js";

// src/options/pages/support/PerkCard.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime());
var PerkCard = (props) => {
  const { title, description, cardBanner, buttonText, buttonLink } = props;
  const theme = customMuiTheme_default();
  const isUpSm = useMediaQuery(theme.customTheme.breakpoints.up("sm"));
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stack_default, { direction: isUpSm ? "row" : "column", alignItems: "stretch", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Stack_default,
      {
        width: isUpSm ? "320px" : "100%",
        alignItems: "center",
        justifyContent: "center",
        sx: {
          flexShrink: 0,
          "& > img": {
            width: "100%",
            height: "auto"
          }
        },
        children: cardBanner
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stack_default, { flex: 1, p: 2, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        Typography_default,
        {
          variant: "custom",
          fontSize: "16px",
          fontWeight: 700,
          color: "text.primary",
          children: title
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        Typography_default,
        {
          variant: "custom",
          sx: { pt: 0.5 },
          fontSize: "14px",
          fontWeight: 400,
          color: "text.secondary",
          component: "div",
          display: "inline",
          children: description
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        Button_default,
        {
          target: "_blank",
          variant: "contained",
          component: "a",
          href: buttonLink,
          sx: {
            width: isUpSm ? 240 : "100%",
            mt: 2,
            fontSize: "16px",
            height: "40px",
            fontWeight: 600
          },
          children: buttonText
        }
      )
    ] })
  ] });
};
var PerkCard_default = PerkCard;

// src/options/pages/support/FeatureJoinDiscordCard.tsx
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var FeatureJoinDiscordCard = () => {
  const { t } = useTranslation("settings");
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    SettingsFeatureCardLayout_default,
    {
      title: t("feature__support__join_discord__title"),
      id: "join-discord",
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        PerkCard_default,
        {
          title: t("feature__support__join_discord__card_title"),
          description: t("feature__support__join_discord__card_desc"),
          buttonText: t("feature__support__join_discord__card_btn_text"),
          cardBanner: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            YoutubePlayerBox_default,
            {
              youtubeLink: "https://discord.com/widget?id=1060110102188797992&theme=dark",
              borderRadius: 4,
              sx: {
                width: "100%",
                height: "100% !important"
              }
            }
          ),
          buttonLink: `${DISCORD_INVITE_LINK}`
        }
      )
    }
  );
};
var FeatureJoinDiscordCard_default = FeatureJoinDiscordCard;

// src/options/pages/support/FeatureLeaveReviewCard.tsx
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var FeatureLeaveReviewCard = () => {
  const { t } = useTranslation("settings");
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    SettingsFeatureCardLayout_default,
    {
      title: t("feature__support__leave_review__title"),
      id: "leave-review",
      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        PerkCard_default,
        {
          title: t("feature__support__leave_review__card_title"),
          description: t("feature__support__leave_review__card_desc"),
          buttonText: t("feature__support__leave_review__card_btn_text"),
          cardBanner: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            "img",
            {
              src: `${ZMO_TOOLS_LINK}/assets/webchatgpt/leave-review.png`,
              alt: "Leave us a review"
            }
          ),
          buttonLink: `${WEBCHATGPT_CHROME_STORE_LINK}/reviews`
        }
      )
    }
  );
};
var FeatureLeaveReviewCard_default = FeatureLeaveReviewCard;

// src/options/pages/support/index.tsx
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var SettingsSupportPage = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Stack_default, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(FeatureJoinDiscordCard_default, {}),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(FeatureLeaveReviewCard_default, {})
  ] });
};
var support_default = SettingsSupportPage;
export {
  support_default as default
};
