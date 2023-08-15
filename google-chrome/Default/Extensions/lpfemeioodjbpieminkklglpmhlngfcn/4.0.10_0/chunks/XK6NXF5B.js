import {
  CHROME_EXTENSION_POST_MESSAGE_ID,
  require_browser_polyfill
} from "./QIGS6TBV.js";
import {
  __toESM
} from "./ERZ5UWI7.js";

// src/features/chatgpt/utils/index.ts
var import_webextension_polyfill = __toESM(require_browser_polyfill());
var ContentScriptConnectionV2 = class {
  runtime;
  constructor(options = {}) {
    this.runtime = options.runtime || "client";
  }
  async postMessage(msg) {
    try {
      return await import_webextension_polyfill.default.runtime.sendMessage({
        id: CHROME_EXTENSION_POST_MESSAGE_ID,
        event: msg.event,
        data: {
          ...msg.data,
          _RUNTIME_: this.runtime
        }
      });
    } catch (e) {
      return {
        success: false,
        message: e.message,
        data: {}
      };
    }
  }
  destroy() {
  }
};

export {
  ContentScriptConnectionV2
};
