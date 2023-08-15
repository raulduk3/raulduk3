import {
  Box_default
} from "./E4WU3AZH.js";
import {
  require_jsx_runtime
} from "./ZCNVHGRQ.js";
import {
  __toESM
} from "./ERZ5UWI7.js";

// src/components/YoutubePlayerBox.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime());
var YoutubePlayerBox = ({ youtubeLink, borderRadius = 16, sx }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    Box_default,
    {
      className: "video-container",
      sx: {
        "&.video-container": {
          position: "relative",
          paddingBottom: "56.25%",
          height: 0
        },
        "&.video-container iframe": {
          borderRadius: borderRadius + "px",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        },
        ...sx
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "iframe",
        {
          title: "YouTube video player",
          width: "560",
          height: "315",
          src: youtubeLink,
          frameBorder: "0",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          allowFullScreen: true
        }
      )
    }
  );
};
var YoutubePlayerBox_default = YoutubePlayerBox;

export {
  YoutubePlayerBox_default
};
