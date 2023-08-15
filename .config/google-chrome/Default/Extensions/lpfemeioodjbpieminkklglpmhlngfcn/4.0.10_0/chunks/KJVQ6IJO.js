import {
  require_browser_polyfill
} from "./QIGS6TBV.js";
import {
  __toESM
} from "./ERZ5UWI7.js";

// src/util/imageHelper.ts
var import_webextension_polyfill = __toESM(require_browser_polyfill());
var getChromeExtensionAssetsURL = (path) => {
  return import_webextension_polyfill.default.runtime.getURL(`/assets${path[0] === "/" ? path : "/" + path}`);
};

export {
  getChromeExtensionAssetsURL
};
