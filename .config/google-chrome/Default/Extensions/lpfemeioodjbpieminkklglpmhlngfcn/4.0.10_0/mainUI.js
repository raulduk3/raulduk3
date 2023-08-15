import {
  LanguageSelect_default
} from "./chunks/GVVNEBLB.js";
import {
  useUserConfig
} from "./chunks/XAECMXJJ.js";
import {
  CustomConfirm_default,
  getCurrentPrompt,
  getSavedPrompts,
  promptContainsWebResults
} from "./chunks/EEE4KWHM.js";
import {
  ChatGPTDaemonProcess,
  LIMIT_WEB_ACCESS_COUNT_STORAGE_KEY,
  clientCallApiRecorder
} from "./chunks/BRLRNB4J.js";
import {
  getLoginStuckData,
  getUseChatGPTAccessToken,
  getUseChatGPTUserInfo,
  incrementLoginStuckData,
  logoutUseChatGPTAuth
} from "./chunks/4AP7RHEG.js";
import {
  AppInit_default,
  AppRootLayout_default,
  SUMMARIZE_MAX_CHARACTERS,
  ShortCutsEngine_default,
  ShortCutsState,
  createShadowRoot,
  getMediator,
  globalSnackbar_default,
  require_Close,
  require_relativeTime,
  useEffectOnce_default,
  useQuery,
  useShortCutsParameters
} from "./chunks/MFLY45OR.js";
import "./chunks/5SBGAKJG.js";
import "./chunks/JFO5SVYG.js";
import "./chunks/PEPSRO7F.js";
import "./chunks/N6FWVAY7.js";
import "./chunks/XUC4LD7W.js";
import "./chunks/GRUYIBXB.js";
import "./chunks/FSM3Q7MN.js";
import "./chunks/T2MZYYUX.js";
import "./chunks/2TR75BHR.js";
import {
  AppTheme_default,
  CustomIcon_default,
  ProLink_default,
  require_client,
  useThemeModeWithChatGPT_default
} from "./chunks/XENBXGDD.js";
import "./chunks/P6HDST5X.js";
import {
  Recoil_index_20,
  Recoil_index_22,
  Recoil_index_24,
  Recoil_index_5,
  Recoil_index_8
} from "./chunks/WSBV3W2I.js";
import {
  SnackbarProvider,
  useSnackbar
} from "./chunks/TZCO46MB.js";
import {
  AlertTitle_default,
  Alert_default,
  Autocomplete_default,
  Avatar_default,
  Box_default,
  Button_default,
  CircularProgress_default,
  Divider_default,
  Fade_default,
  FormControlLabel_default,
  FormControl_default,
  FormHelperText_default,
  FormLabel_default,
  Grid_default,
  IconButton_default,
  InputAdornment_default,
  InputLabel_default,
  MenuItem_default,
  MenuList_default,
  Menu_default,
  Modal_default,
  Paper_default,
  Popover_default,
  Select_default,
  Slide_default,
  Switch_default,
  Tab_default,
  TablePagination_default,
  Tabs_default,
  TextField_default,
  Tooltip_default,
  import_system2 as import_system,
  import_utils,
  material_exports
} from "./chunks/E4WU3AZH.js";
import "./chunks/3G6AO2FI.js";
import {
  require_createSvgIcon
} from "./chunks/WS53LFXM.js";
import {
  CacheProvider,
  ListItemText_default,
  Stack_default,
  Typography_default,
  _extends,
  _objectWithoutPropertiesLoose,
  emotion_cache_browser_esm_default,
  emotion_styled_browser_esm_default,
  init_emotion_cache_browser_esm,
  init_emotion_react_browser_esm,
  init_emotion_styled_browser_esm,
  init_extends,
  require_generateUtilityClass,
  require_interopRequireDefault,
  require_jsx_runtime,
  require_prop_types,
  require_utils,
  require_utils3 as require_utils2,
  styled_default,
  useThemeProps
} from "./chunks/ZCNVHGRQ.js";
import "./chunks/CWTJNSHL.js";
import {
  getCacheUserConfig,
  getLanguagesEngWord,
  getTranslate,
  initLanguageJson
} from "./chunks/X66UQCDQ.js";
import {
  require_react
} from "./chunks/AMCWABVH.js";
import {
  require_dayjs_min
} from "./chunks/JUS65PLZ.js";
import {
  api_signature_manager,
  chromeExtensionClientOpenPage,
  clientRestartChromeExtension,
  fetchStyle,
  findAIGeniusDom,
  findAIPRMWrapper,
  findChatOnAiDom,
  findGPT4ModalSwitch,
  findSuperChatGPTDom,
  getChromeExtensionCommands,
  getFooter,
  getHomePageTitle,
  getNewChatBtn,
  getRootElement,
  getSubmitButton,
  getTextArea,
  getTextAreaForm,
  getWebChatGPTToolbar,
  hasData,
  updateForceNotWebAccess
} from "./chunks/LTECKZ5X.js";
import {
  cloneDeep_default,
  debounce_default,
  defaults_default,
  omit_default,
  uniqBy_default
} from "./chunks/VIN7E7C7.js";
import {
  ContentScriptConnectionV2
} from "./chunks/XK6NXF5B.js";
import {
  APP_IS_PROD,
  APP_USE_CHAT_GPT_API_HOST,
  APP_USE_CHAT_GPT_HOST,
  CHROME_EXTENSION_POST_MESSAGE_ID,
  DISCORD_INVITE_LINK,
  MAXAI_INSTALL_LINK,
  RUNNING_CARD_MESSAGE,
  WEBCHATGPT_CHROME_STORE_LINK,
  Z_INDEX,
  require_browser_polyfill
} from "./chunks/QIGS6TBV.js";
import "./chunks/IPYOEOXK.js";
import {
  axios_default
} from "./chunks/H3M35V7H.js";
import "./chunks/V572PYUS.js";
import "./chunks/5AOQSJ7B.js";
import "./chunks/AISGHLQV.js";
import {
  __commonJS,
  __toESM
} from "./chunks/ERZ5UWI7.js";

// node_modules/.pnpm/xtend@4.0.2/node_modules/xtend/mutable.js
var require_mutable = __commonJS({
  "node_modules/.pnpm/xtend@4.0.2/node_modules/xtend/mutable.js"(exports, module) {
    module.exports = extend;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    function extend(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    }
  }
});

// node_modules/.pnpm/simulate-event@1.4.0/node_modules/simulate-event/simulate-event.js
var require_simulate_event = __commonJS({
  "node_modules/.pnpm/simulate-event@1.4.0/node_modules/simulate-event/simulate-event.js"(exports) {
    var extend = require_mutable();
    var eventOptions = {
      UIEvent: function() {
        return {
          view: document.defaultView
        };
      },
      FocusEvent: function() {
        return eventOptions.UIEvent.apply(this, arguments);
      },
      MouseEvent: function(type) {
        return {
          button: 0,
          bubbles: type !== "mouseenter" && type !== "mouseleave",
          cancelable: type !== "mouseenter" && type !== "mouseleave",
          ctrlKey: false,
          altKey: false,
          shiftKey: false,
          metaKey: false,
          clientX: 1,
          clientY: 1,
          screenX: 0,
          screenY: 0,
          view: document.defaultView,
          relatedTarget: document.documentElement
        };
      },
      WheelEvent: function(type) {
        return eventOptions.MouseEvent.apply(this, arguments);
      },
      KeyboardEvent: function() {
        return {
          view: document.defaultView,
          ctrlKey: false,
          altKey: false,
          shiftKey: false,
          metaKey: false,
          keyCode: 0
        };
      }
    };
    var eventTypes = {
      beforeprint: "Event",
      afterprint: "Event",
      beforeunload: "Event",
      abort: "Event",
      error: "Event",
      change: "Event",
      submit: "Event",
      reset: "Event",
      cached: "Event",
      canplay: "Event",
      canplaythrough: "Event",
      chargingchange: "Event",
      chargingtimechange: "Event",
      checking: "Event",
      close: "Event",
      downloading: "Event",
      durationchange: "Event",
      emptied: "Event",
      ended: "Event",
      fullscreenchange: "Event",
      fullscreenerror: "Event",
      invalid: "Event",
      levelchange: "Event",
      loadeddata: "Event",
      loadedmetadata: "Event",
      noupdate: "Event",
      obsolete: "Event",
      offline: "Event",
      online: "Event",
      open: "Event",
      orientationchange: "Event",
      pause: "Event",
      pointerlockchange: "Event",
      pointerlockerror: "Event",
      copy: "Event",
      cut: "Event",
      paste: "Event",
      play: "Event",
      playing: "Event",
      ratechange: "Event",
      readystatechange: "Event",
      seeked: "Event",
      seeking: "Event",
      stalled: "Event",
      success: "Event",
      suspend: "Event",
      timeupdate: "Event",
      updateready: "Event",
      visibilitychange: "Event",
      volumechange: "Event",
      waiting: "Event",
      load: "UIEvent",
      unload: "UIEvent",
      resize: "UIEvent",
      scroll: "UIEvent",
      select: "UIEvent",
      drag: "MouseEvent",
      dragenter: "MouseEvent",
      dragleave: "MouseEvent",
      dragover: "MouseEvent",
      dragstart: "MouseEvent",
      dragend: "MouseEvent",
      drop: "MouseEvent",
      touchcancel: "UIEvent",
      touchend: "UIEvent",
      touchenter: "UIEvent",
      touchleave: "UIEvent",
      touchmove: "UIEvent",
      touchstart: "UIEvent",
      blur: "UIEvent",
      focus: "UIEvent",
      focusin: "UIEvent",
      focusout: "UIEvent",
      input: "UIEvent",
      show: "MouseEvent",
      click: "MouseEvent",
      dblclick: "MouseEvent",
      mouseenter: "MouseEvent",
      mouseleave: "MouseEvent",
      mousedown: "MouseEvent",
      mouseup: "MouseEvent",
      mouseover: "MouseEvent",
      mousemove: "MouseEvent",
      mouseout: "MouseEvent",
      contextmenu: "MouseEvent",
      wheel: "WheelEvent",
      message: "MessageEvent",
      storage: "StorageEvent",
      timeout: "StorageEvent",
      keydown: "KeyboardEvent",
      keypress: "KeyboardEvent",
      keyup: "KeyboardEvent",
      progress: "ProgressEvent",
      loadend: "ProgressEvent",
      loadstart: "ProgressEvent",
      popstate: "PopStateEvent",
      hashchange: "HashChangeEvent",
      transitionend: "TransitionEvent",
      compositionend: "CompositionEvent",
      compositionstart: "CompositionEvent",
      compositionupdate: "CompositionEvent",
      pagehide: "PageTransitionEvent",
      pageshow: "PageTransitionEvent"
    };
    var eventInit = {
      Event: "initEvent",
      UIEvent: "initUIEvent",
      FocusEvent: "initUIEvent",
      MouseEvent: "initMouseEvent",
      WheelEvent: "initMouseEvent",
      MessageEvent: "initMessageEvent",
      StorageEvent: "initStorageEvent",
      KeyboardEvent: "initKeyboardEvent",
      ProgressEvent: "initEvent",
      PopStateEvent: "initEvent",
      TransitionEvent: "initEvent",
      HashChangeEvent: "initHashChangeEvent",
      CompositionEvent: "initCompositionEvent",
      DeviceMotionEvent: "initDeviceMotionEvent",
      PageTransitionEvent: "initEvent",
      DeviceOrientationEvent: "initDeviceOrientationEvent"
    };
    var eventParameters = {
      initEvent: [],
      initUIEvent: [
        "view",
        "detail"
      ],
      initKeyboardEvent: [
        "view",
        "char",
        "key",
        "location",
        "modifiersList",
        "repeat",
        "locale"
      ],
      initKeyEvent: [
        "view",
        "ctrlKey",
        "altKey",
        "shiftKey",
        "metaKey",
        "keyCode",
        "charCode"
      ],
      initMouseEvent: [
        "view",
        "detail",
        "screenX",
        "screenY",
        "clientX",
        "clientY",
        "ctrlKey",
        "altKey",
        "shiftKey",
        "metaKey",
        "button",
        "relatedTarget"
      ],
      initHashChangeEvent: [
        "oldURL",
        "newURL"
      ],
      initCompositionEvent: [
        "view",
        "data",
        "locale"
      ],
      initDeviceMotionEvent: [
        "acceleration",
        "accelerationIncludingGravity",
        "rotationRate",
        "interval"
      ],
      initDeviceOrientationEvent: [
        "alpha",
        "beta",
        "gamma",
        "absolute"
      ],
      initMessageEvent: [
        "data",
        "origin",
        "lastEventId",
        "source"
      ],
      initStorageEvent: [
        "key",
        "oldValue",
        "newValue",
        "url",
        "storageArea"
      ]
    };
    var eventConstructors = {
      UIEvent: window.UIEvent,
      FocusEvent: window.FocusEvent,
      MouseEvent: window.MouseEvent,
      WheelEvent: window.MouseEvent,
      KeyboardEvent: window.KeyboardEvent
    };
    function getOverrides(eventType, options) {
      if (eventType === "KeyboardEvent" && options) {
        return {
          keyCode: options.keyCode || 0,
          key: options.key || 0,
          which: options.which || options.keyCode || 0
        };
      }
    }
    exports.generate = function(type, options) {
      if (!eventTypes.hasOwnProperty(type)) {
        throw new SyntaxError("Unsupported event type");
      }
      var eventType = eventTypes[type];
      var event;
      var key;
      var overrides = getOverrides(eventType, options);
      if (!(options instanceof window.Event)) {
        if (eventType in eventOptions) {
          options = extend({
            bubbles: true,
            cancelable: true
          }, eventOptions[eventType](type, options), options);
        } else {
          options = extend({
            bubbles: true,
            cancelable: true
          }, options);
        }
      }
      var Constructor = eventConstructors[eventType] || window.Event;
      try {
        event = new Constructor(type, options);
        for (key in overrides) {
          Object.defineProperty(event, key, {
            value: overrides[key]
          });
        }
        return event;
      } catch (e) {
      }
      var ua = window.navigator.userAgent.toLowerCase();
      var msie = Math.max(ua.indexOf("msie"), ua.indexOf("trident"));
      if (msie >= 0 && eventType === "KeyboardEvent") {
        eventType = "UIEvent";
      }
      var initEvent = eventInit[eventType];
      if (!document.createEvent) {
        event = extend(document.createEventObject(), options);
        for (key in overrides) {
          Object.defineProperty(event, key, {
            value: overrides[key]
          });
        }
        return event;
      }
      event = extend(document.createEvent(eventType), options);
      if (initEvent === "initKeyboardEvent") {
        if (event[initEvent] === void 0) {
          initEvent = "initKeyEvent";
        } else if (!("modifiersList" in options)) {
          var mods = [];
          if (options.metaKey)
            mods.push("Meta");
          if (options.altKey)
            mods.push("Alt");
          if (options.shiftKey)
            mods.push("Shift");
          if (options.ctrlKey)
            mods.push("Control");
          options["modifiersList"] = mods.join(" ");
        }
      }
      var args = eventParameters[initEvent].map(function(parameter) {
        return options[parameter];
      });
      event[initEvent].apply(
        event,
        [type, options.bubbles, options.cancelable].concat(args)
      );
      for (key in overrides) {
        Object.defineProperty(event, key, {
          value: overrides[key]
        });
      }
      return event;
    };
    exports.simulate = function(element, type, options) {
      var event = exports.generate(type, options);
      if (!document.createEvent) {
        return element.fireEvent("on" + type, event);
      }
      return element.dispatchEvent(event);
    };
  }
});

// node_modules/.pnpm/registry.npmmirror.com+classnames@2.3.2/node_modules/classnames/index.js
var require_classnames = __commonJS({
  "node_modules/.pnpm/registry.npmmirror.com+classnames@2.3.2/node_modules/classnames/index.js"(exports, module) {
    (function() {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      var nativeCodeString = "[native code]";
      function classNames2() {
        var classes = [];
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (!arg)
            continue;
          var argType = typeof arg;
          if (argType === "string" || argType === "number") {
            classes.push(arg);
          } else if (Array.isArray(arg)) {
            if (arg.length) {
              var inner = classNames2.apply(null, arg);
              if (inner) {
                classes.push(inner);
              }
            }
          } else if (argType === "object") {
            if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
              classes.push(arg.toString());
              continue;
            }
            for (var key in arg) {
              if (hasOwn.call(arg, key) && arg[key]) {
                classes.push(key);
              }
            }
          }
        }
        return classes.join(" ");
      }
      if (typeof module !== "undefined" && module.exports) {
        classNames2.default = classNames2;
        module.exports = classNames2;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames2;
        });
      } else {
        window.classNames = classNames2;
      }
    })();
  }
});

// node_modules/.pnpm/@mui+icons-material@5.11.0_@mui+material@5.11.8_@types+react@18.0.27_react@18.2.0/node_modules/@mui/icons-material/Search.js
var require_Search = __commonJS({
  "node_modules/.pnpm/@mui+icons-material@5.11.0_@mui+material@5.11.8_@types+react@18.0.27_react@18.2.0/node_modules/@mui/icons-material/Search.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _jsxRuntime = require_jsx_runtime();
    var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
      d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
    }), "Search");
    exports.default = _default;
  }
});

// node_modules/.pnpm/@mui+icons-material@5.11.0_@mui+material@5.11.8_@types+react@18.0.27_react@18.2.0/node_modules/@mui/icons-material/LanguageOutlined.js
var require_LanguageOutlined = __commonJS({
  "node_modules/.pnpm/@mui+icons-material@5.11.0_@mui+material@5.11.8_@types+react@18.0.27_react@18.2.0/node_modules/@mui/icons-material/LanguageOutlined.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _jsxRuntime = require_jsx_runtime();
    var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
      d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"
    }), "LanguageOutlined");
    exports.default = _default;
  }
});

// node_modules/.pnpm/@mui+icons-material@5.11.0_@mui+material@5.11.8_@types+react@18.0.27_react@18.2.0/node_modules/@mui/icons-material/LockOutlined.js
var require_LockOutlined = __commonJS({
  "node_modules/.pnpm/@mui+icons-material@5.11.0_@mui+material@5.11.8_@types+react@18.0.27_react@18.2.0/node_modules/@mui/icons-material/LockOutlined.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _jsxRuntime = require_jsx_runtime();
    var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
      d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
    }), "LockOutlined");
    exports.default = _default;
  }
});

// node_modules/.pnpm/registry.npmmirror.com+dayjs@1.11.7/node_modules/dayjs/plugin/utc.js
var require_utc = __commonJS({
  "node_modules/.pnpm/registry.npmmirror.com+dayjs@1.11.7/node_modules/dayjs/plugin/utc.js"(exports, module) {
    !function(t, i) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = i() : "function" == typeof define && define.amd ? define(i) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs_plugin_utc = i();
    }(exports, function() {
      "use strict";
      var t = "minute", i = /[+-]\d\d(?::?\d\d)?/g, e = /([+-]|\d\d)/g;
      return function(s, f, n) {
        var u = f.prototype;
        n.utc = function(t2) {
          var i2 = { date: t2, utc: true, args: arguments };
          return new f(i2);
        }, u.utc = function(i2) {
          var e2 = n(this.toDate(), { locale: this.$L, utc: true });
          return i2 ? e2.add(this.utcOffset(), t) : e2;
        }, u.local = function() {
          return n(this.toDate(), { locale: this.$L, utc: false });
        };
        var o = u.parse;
        u.parse = function(t2) {
          t2.utc && (this.$u = true), this.$utils().u(t2.$offset) || (this.$offset = t2.$offset), o.call(this, t2);
        };
        var r = u.init;
        u.init = function() {
          if (this.$u) {
            var t2 = this.$d;
            this.$y = t2.getUTCFullYear(), this.$M = t2.getUTCMonth(), this.$D = t2.getUTCDate(), this.$W = t2.getUTCDay(), this.$H = t2.getUTCHours(), this.$m = t2.getUTCMinutes(), this.$s = t2.getUTCSeconds(), this.$ms = t2.getUTCMilliseconds();
          } else
            r.call(this);
        };
        var a = u.utcOffset;
        u.utcOffset = function(s2, f2) {
          var n2 = this.$utils().u;
          if (n2(s2))
            return this.$u ? 0 : n2(this.$offset) ? a.call(this) : this.$offset;
          if ("string" == typeof s2 && (s2 = function(t2) {
            void 0 === t2 && (t2 = "");
            var s3 = t2.match(i);
            if (!s3)
              return null;
            var f3 = ("" + s3[0]).match(e) || ["-", 0, 0], n3 = f3[0], u3 = 60 * +f3[1] + +f3[2];
            return 0 === u3 ? 0 : "+" === n3 ? u3 : -u3;
          }(s2), null === s2))
            return this;
          var u2 = Math.abs(s2) <= 16 ? 60 * s2 : s2, o2 = this;
          if (f2)
            return o2.$offset = u2, o2.$u = 0 === s2, o2;
          if (0 !== s2) {
            var r2 = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
            (o2 = this.local().add(u2 + r2, t)).$offset = u2, o2.$x.$localOffset = r2;
          } else
            o2 = this.utc();
          return o2;
        };
        var h = u.format;
        u.format = function(t2) {
          var i2 = t2 || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
          return h.call(this, i2);
        }, u.valueOf = function() {
          var t2 = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
          return this.$d.valueOf() - 6e4 * t2;
        }, u.isUTC = function() {
          return !!this.$u;
        }, u.toISOString = function() {
          return this.toDate().toISOString();
        }, u.toString = function() {
          return this.toDate().toUTCString();
        };
        var l = u.toDate;
        u.toDate = function(t2) {
          return "s" === t2 && this.$offset ? n(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : l.call(this);
        };
        var c = u.diff;
        u.diff = function(t2, i2, e2) {
          if (t2 && this.$u === t2.$u)
            return c.call(this, t2, i2, e2);
          var s2 = this.local(), f2 = n(t2).local();
          return c.call(s2, f2, i2, e2);
        };
      };
    });
  }
});

// node_modules/.pnpm/@mui+icons-material@5.11.0_@mui+material@5.11.8_@types+react@18.0.27_react@18.2.0/node_modules/@mui/icons-material/FavoriteBorderOutlined.js
var require_FavoriteBorderOutlined = __commonJS({
  "node_modules/.pnpm/@mui+icons-material@5.11.0_@mui+material@5.11.8_@types+react@18.0.27_react@18.2.0/node_modules/@mui/icons-material/FavoriteBorderOutlined.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _jsxRuntime = require_jsx_runtime();
    var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
      d: "M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
    }), "FavoriteBorderOutlined");
    exports.default = _default;
  }
});

// node_modules/.pnpm/@mui+icons-material@5.11.0_@mui+material@5.11.8_@types+react@18.0.27_react@18.2.0/node_modules/@mui/icons-material/FavoriteOutlined.js
var require_FavoriteOutlined = __commonJS({
  "node_modules/.pnpm/@mui+icons-material@5.11.0_@mui+material@5.11.8_@types+react@18.0.27_react@18.2.0/node_modules/@mui/icons-material/FavoriteOutlined.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _jsxRuntime = require_jsx_runtime();
    var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
      d: "m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
    }), "FavoriteOutlined");
    exports.default = _default;
  }
});

// node_modules/.pnpm/@mui+icons-material@5.11.0_@mui+material@5.11.8_@types+react@18.0.27_react@18.2.0/node_modules/@mui/icons-material/RemoveRedEye.js
var require_RemoveRedEye = __commonJS({
  "node_modules/.pnpm/@mui+icons-material@5.11.0_@mui+material@5.11.8_@types+react@18.0.27_react@18.2.0/node_modules/@mui/icons-material/RemoveRedEye.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _jsxRuntime = require_jsx_runtime();
    var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
      d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
    }), "RemoveRedEye");
    exports.default = _default;
  }
});

// node_modules/.pnpm/@mui+icons-material@5.11.0_@mui+material@5.11.8_@types+react@18.0.27_react@18.2.0/node_modules/@mui/icons-material/AddOutlined.js
var require_AddOutlined = __commonJS({
  "node_modules/.pnpm/@mui+icons-material@5.11.0_@mui+material@5.11.8_@types+react@18.0.27_react@18.2.0/node_modules/@mui/icons-material/AddOutlined.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _jsxRuntime = require_jsx_runtime();
    var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
      d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
    }), "AddOutlined");
    exports.default = _default;
  }
});

// node_modules/.pnpm/fast-deep-equal@3.1.3/node_modules/fast-deep-equal/index.js
var require_fast_deep_equal = __commonJS({
  "node_modules/.pnpm/fast-deep-equal@3.1.3/node_modules/fast-deep-equal/index.js"(exports, module) {
    "use strict";
    module.exports = function equal(a, b) {
      if (a === b)
        return true;
      if (a && b && typeof a == "object" && typeof b == "object") {
        if (a.constructor !== b.constructor)
          return false;
        var length, i, keys;
        if (Array.isArray(a)) {
          length = a.length;
          if (length != b.length)
            return false;
          for (i = length; i-- !== 0; )
            if (!equal(a[i], b[i]))
              return false;
          return true;
        }
        if (a.constructor === RegExp)
          return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf)
          return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString)
          return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length)
          return false;
        for (i = length; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
            return false;
        for (i = length; i-- !== 0; ) {
          var key = keys[i];
          if (!equal(a[key], b[key]))
            return false;
        }
        return true;
      }
      return a !== a && b !== b;
    };
  }
});

// node_modules/.pnpm/react-contenteditable@3.3.7_react@18.2.0/node_modules/react-contenteditable/lib/react-contenteditable.js
var require_react_contenteditable = __commonJS({
  "node_modules/.pnpm/react-contenteditable@3.3.7_react@18.2.0/node_modules/react-contenteditable/lib/react-contenteditable.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __assign2 = exports && exports.__assign || function() {
      __assign2 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign2.apply(this, arguments);
    };
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __rest = exports && exports.__rest || function(s, e) {
      var t = {};
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
          t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
        }
      return t;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var React25 = __importStar(require_react());
    var fast_deep_equal_1 = __importDefault(require_fast_deep_equal());
    var PropTypes = __importStar(require_prop_types());
    function normalizeHtml(str) {
      return str && str.replace(/&nbsp;|\u202F|\u00A0/g, " ").replace(/<br \/>/g, "<br>");
    }
    function replaceCaret(el) {
      var target = document.createTextNode("");
      el.appendChild(target);
      var isTargetFocused = document.activeElement === el;
      if (target !== null && target.nodeValue !== null && isTargetFocused) {
        var sel = window.getSelection();
        if (sel !== null) {
          var range = document.createRange();
          range.setStart(target, target.nodeValue.length);
          range.collapse(true);
          sel.removeAllRanges();
          sel.addRange(range);
        }
        if (el instanceof HTMLElement)
          el.focus();
      }
    }
    var ContentEditable2 = (
      /** @class */
      function(_super) {
        __extends(ContentEditable3, _super);
        function ContentEditable3() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.lastHtml = _this.props.html;
          _this.el = typeof _this.props.innerRef === "function" ? { current: null } : React25.createRef();
          _this.getEl = function() {
            return (_this.props.innerRef && typeof _this.props.innerRef !== "function" ? _this.props.innerRef : _this.el).current;
          };
          _this.emitChange = function(originalEvt) {
            var el = _this.getEl();
            if (!el)
              return;
            var html = el.innerHTML;
            if (_this.props.onChange && html !== _this.lastHtml) {
              var evt = Object.assign({}, originalEvt, {
                target: {
                  value: html
                }
              });
              _this.props.onChange(evt);
            }
            _this.lastHtml = html;
          };
          return _this;
        }
        ContentEditable3.prototype.render = function() {
          var _this = this;
          var _a = this.props, tagName = _a.tagName, html = _a.html, innerRef = _a.innerRef, props = __rest(_a, ["tagName", "html", "innerRef"]);
          return React25.createElement(tagName || "div", __assign2(__assign2({}, props), { ref: typeof innerRef === "function" ? function(current) {
            innerRef(current);
            _this.el.current = current;
          } : innerRef || this.el, onInput: this.emitChange, onBlur: this.props.onBlur || this.emitChange, onKeyUp: this.props.onKeyUp || this.emitChange, onKeyDown: this.props.onKeyDown || this.emitChange, contentEditable: !this.props.disabled, dangerouslySetInnerHTML: { __html: html } }), this.props.children);
        };
        ContentEditable3.prototype.shouldComponentUpdate = function(nextProps) {
          var props = this.props;
          var el = this.getEl();
          if (!el)
            return true;
          if (normalizeHtml(nextProps.html) !== normalizeHtml(el.innerHTML)) {
            return true;
          }
          return props.disabled !== nextProps.disabled || props.tagName !== nextProps.tagName || props.className !== nextProps.className || props.innerRef !== nextProps.innerRef || props.placeholder !== nextProps.placeholder || !(0, fast_deep_equal_1.default)(props.style, nextProps.style);
        };
        ContentEditable3.prototype.componentDidUpdate = function() {
          var el = this.getEl();
          if (!el)
            return;
          if (this.props.html !== el.innerHTML) {
            el.innerHTML = this.props.html;
          }
          this.lastHtml = this.props.html;
          replaceCaret(el);
        };
        ContentEditable3.propTypes = {
          html: PropTypes.string.isRequired,
          onChange: PropTypes.func,
          disabled: PropTypes.bool,
          tagName: PropTypes.string,
          className: PropTypes.string,
          style: PropTypes.object,
          innerRef: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.func
          ])
        };
        return ContentEditable3;
      }(React25.Component)
    );
    exports.default = ContentEditable2;
  }
});

// node_modules/.pnpm/@mui+icons-material@5.11.0_@mui+material@5.11.8_@types+react@18.0.27_react@18.2.0/node_modules/@mui/icons-material/Add.js
var require_Add = __commonJS({
  "node_modules/.pnpm/@mui+icons-material@5.11.0_@mui+material@5.11.8_@types+react@18.0.27_react@18.2.0/node_modules/@mui/icons-material/Add.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _jsxRuntime = require_jsx_runtime();
    var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
      d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
    }), "Add");
    exports.default = _default;
  }
});

// node_modules/.pnpm/@mui+icons-material@5.11.0_@mui+material@5.11.8_@types+react@18.0.27_react@18.2.0/node_modules/@mui/icons-material/EditOutlined.js
var require_EditOutlined = __commonJS({
  "node_modules/.pnpm/@mui+icons-material@5.11.0_@mui+material@5.11.8_@types+react@18.0.27_react@18.2.0/node_modules/@mui/icons-material/EditOutlined.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _jsxRuntime = require_jsx_runtime();
    var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
      d: "m14.06 9.02.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"
    }), "EditOutlined");
    exports.default = _default;
  }
});

// node_modules/.pnpm/@mui+icons-material@5.11.0_@mui+material@5.11.8_@types+react@18.0.27_react@18.2.0/node_modules/@mui/icons-material/HelpOutline.js
var require_HelpOutline = __commonJS({
  "node_modules/.pnpm/@mui+icons-material@5.11.0_@mui+material@5.11.8_@types+react@18.0.27_react@18.2.0/node_modules/@mui/icons-material/HelpOutline.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _jsxRuntime = require_jsx_runtime();
    var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
      d: "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"
    }), "HelpOutline");
    exports.default = _default;
  }
});

// node_modules/.pnpm/@mui+icons-material@5.11.0_@mui+material@5.11.8_@types+react@18.0.27_react@18.2.0/node_modules/@mui/icons-material/Favorite.js
var require_Favorite = __commonJS({
  "node_modules/.pnpm/@mui+icons-material@5.11.0_@mui+material@5.11.8_@types+react@18.0.27_react@18.2.0/node_modules/@mui/icons-material/Favorite.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _jsxRuntime = require_jsx_runtime();
    var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
      d: "m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
    }), "Favorite");
    exports.default = _default;
  }
});

// node_modules/.pnpm/@mui+icons-material@5.11.0_@mui+material@5.11.8_@types+react@18.0.27_react@18.2.0/node_modules/@mui/icons-material/Send.js
var require_Send = __commonJS({
  "node_modules/.pnpm/@mui+icons-material@5.11.0_@mui+material@5.11.8_@types+react@18.0.27_react@18.2.0/node_modules/@mui/icons-material/Send.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _jsxRuntime = require_jsx_runtime();
    var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
      d: "M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"
    }), "Send");
    exports.default = _default;
  }
});

// node_modules/.pnpm/@mui+icons-material@5.11.0_@mui+material@5.11.8_@types+react@18.0.27_react@18.2.0/node_modules/@mui/icons-material/KeyboardArrowDown.js
var require_KeyboardArrowDown = __commonJS({
  "node_modules/.pnpm/@mui+icons-material@5.11.0_@mui+material@5.11.8_@types+react@18.0.27_react@18.2.0/node_modules/@mui/icons-material/KeyboardArrowDown.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _jsxRuntime = require_jsx_runtime();
    var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
      d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
    }), "KeyboardArrowDown");
    exports.default = _default;
  }
});

// node_modules/.pnpm/@mui+icons-material@5.11.0_@mui+material@5.11.8_@types+react@18.0.27_react@18.2.0/node_modules/@mui/icons-material/KeyboardArrowUp.js
var require_KeyboardArrowUp = __commonJS({
  "node_modules/.pnpm/@mui+icons-material@5.11.0_@mui+material@5.11.8_@types+react@18.0.27_react@18.2.0/node_modules/@mui/icons-material/KeyboardArrowUp.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _jsxRuntime = require_jsx_runtime();
    var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
      d: "M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"
    }), "KeyboardArrowUp");
    exports.default = _default;
  }
});

// src/features/shortcuts/utils/simulate.ts
var import_simulate_event = __toESM(require_simulate_event());
var simulateInputAndSubmit = (value) => {
  const textarea2 = document.querySelector("textarea");
  if (textarea2) {
    textarea2.value = value;
    import_simulate_event.default.simulate(textarea2, "input");
    const submitButton = textarea2.parentElement?.lastElementChild;
    if (submitButton) {
      import_simulate_event.default.simulate(submitButton, "click");
    }
  }
};

// src/features/shortcuts/hooks/useShortCutsWithChatGPTWeb.ts
var import_react = __toESM(require_react());
var shortCutsEngine = new ShortCutsEngine_default();
var port = new ContentScriptConnectionV2({
  runtime: "shortcut"
});
var backgroundChat = new ChatGPTDaemonProcess();
var useShortCutsWithChatGPTWeb = (defaultInputValue) => {
  const getParams = useShortCutsParameters();
  const [shortCutsState, setShortsCutsState] = Recoil_index_22(ShortCutsState);
  const shortCutsEngineRef = (0, import_react.useRef)(shortCutsEngine);
  const setShortCuts = (actions) => {
    if (!shortCutsEngineRef.current) {
      return false;
    }
    shortCutsEngineRef.current?.setActions(actions);
    return true;
  };
  const runShortCuts = (0, import_react.useCallback)(async () => {
    if (!shortCutsEngineRef.current) {
      return;
    }
    try {
      const isLoginSuccess = true;
      if (isLoginSuccess && (shortCutsEngineRef.current?.stepIndex === -1 || shortCutsEngineRef.current.status === "stop")) {
        setShortsCutsState({
          status: "running"
        });
        await shortCutsEngineRef.current.run({
          parameters: getParams().shortCutsParameters,
          engine: {
            getShortCutsEngine: () => {
              return shortCutsEngineRef.current;
            },
            getChartGPT: () => {
              return {
                pushMessage: (messageRole, text, messageType) => {
                },
                sendQuestion: async (message, options) => {
                  const textarea2 = document.querySelector("textarea");
                  if (!textarea2) {
                    return {
                      success: false,
                      answer: ""
                    };
                  }
                  return new Promise((resolve) => {
                    if (options.hiddenInChat) {
                      const sendBackgroundMessage = async () => {
                        try {
                          if (backgroundChat.models.length === 0 || !backgroundChat.token) {
                            await backgroundChat.getAllModels();
                          }
                          const conversation = await backgroundChat.createConversation(
                            void 0,
                            void 0,
                            false
                          );
                          if (!conversation) {
                            resolve({
                              success: false,
                              answer: ""
                            });
                            return;
                          }
                          const controller = new AbortController();
                          const abortFunction = () => {
                            controller.abort();
                          };
                          const messageId = message.messageId;
                          backgroundChat.addAbortWithMessageId(
                            messageId,
                            abortFunction
                          );
                          let answer = null;
                          await conversation.generateAnswer(
                            {
                              messageId,
                              parentMessageId: "",
                              prompt: message.question,
                              signal: controller.signal,
                              onEvent(event) {
                                if (event.type === "error") {
                                  backgroundChat.removeAbortWithMessageId(
                                    messageId
                                  );
                                  resolve({
                                    success: false,
                                    answer: event.data.message || event.data.detail || ""
                                  });
                                  return;
                                }
                                if (event.type === "done") {
                                  backgroundChat.removeAbortWithMessageId(
                                    messageId
                                  );
                                  resolve({
                                    success: true,
                                    answer: answer?.text || "",
                                    message: {
                                      type: "ai",
                                      text: answer?.text || "",
                                      messageId: answer?.messageId || "",
                                      parentMessageId: answer?.parentMessageId || ""
                                    }
                                  });
                                  return;
                                }
                                if (event.data.text) {
                                  answer = event.data;
                                }
                              }
                            },
                            false
                          );
                        } catch (e) {
                        }
                      };
                      sendBackgroundMessage();
                      return;
                    }
                    let chat = document.querySelector(".group.w-full")?.parentElement;
                    if (!chat) {
                      const divs = document.querySelector("main")?.querySelectorAll("div");
                      if (divs) {
                        for (let i = 0; i < divs.length; i++) {
                          const div = divs[i];
                          if (div.parentElement?.className?.includes(
                            "react-scroll-to-bottom"
                          ) && div.className?.includes("react-scroll-to-bottom")) {
                            chat = div;
                          }
                        }
                      }
                    }
                    if (!chat) {
                      resolve({
                        success: false,
                        answer: ""
                      });
                      return;
                    }
                    if (backgroundChat.conversations[0]) {
                      backgroundChat.closeConversation(
                        backgroundChat.conversations[0].id
                      );
                    }
                    let isStreaming = false;
                    let steamingDiv = null;
                    const debounceEndMessage = debounce_default(
                      (messageElement) => {
                        isStreaming = false;
                        steamingDiv = null;
                        resolve({
                          success: true,
                          answer: messageElement.innerText
                        });
                      },
                      1e3
                    );
                    let isFinallyAsk = true;
                    if (shortCutsEngineRef.current) {
                      const stepIndex = shortCutsEngineRef.current.stepIndex;
                      const waitAskAction = shortCutsEngineRef.current.actions.find(
                        (action, index2) => (action.type === "ASK_CHATGPT" || action.type === "WEBGPT_ASK_CHATGPT") && index2 > stepIndex
                      );
                      if (waitAskAction) {
                        isFinallyAsk = false;
                      }
                    }
                    if (isFinallyAsk) {
                      resolve({
                        success: true,
                        answer: ""
                      });
                    } else {
                      const observer = new MutationObserver((mutations) => {
                        mutations.forEach((mutation) => {
                          if (mutation.addedNodes) {
                            const div = mutation.target;
                            if (div.classList.contains("result-streaming")) {
                              isStreaming = true;
                              steamingDiv = div;
                            }
                            if (mutation.attributeName === "class") {
                              if (isStreaming && steamingDiv) {
                                if (isStreaming && steamingDiv.isEqualNode(div)) {
                                  debounceEndMessage(div);
                                }
                              } else if (div.classList.contains("markdown")) {
                                debounceEndMessage(div);
                              }
                            }
                          }
                        });
                      });
                      observer.observe(chat, {
                        childList: true,
                        attributes: true,
                        subtree: true
                      });
                    }
                    simulateInputAndSubmit(message.question);
                  });
                }
              };
            },
            getInbox: () => {
              return {};
            },
            getBackgroundConversation: () => {
              return port;
            }
          }
        });
      }
    } catch (e) {
    } finally {
      setShortsCutsState({
        status: shortCutsEngine.status || "idle"
      });
    }
  }, [shortCutsEngineRef, getParams]);
  const stopShortCuts = (0, import_react.useCallback)(() => {
    if (!shortCutsEngineRef.current) {
      return;
    }
    shortCutsEngineRef.current.stop();
    setShortsCutsState({
      status: shortCutsEngine.status || "idle"
    });
  }, [shortCutsEngineRef]);
  const resetShortCuts = (0, import_react.useCallback)(() => {
    if (!shortCutsEngineRef.current) {
      return;
    }
    shortCutsEngineRef.current.reset();
    if (backgroundChat.conversations[0]) {
      backgroundChat.closeConversation(backgroundChat.conversations[0].id);
    }
    const textarea2 = document.querySelector("textarea");
    if (textarea2) {
      textarea2.value = "";
    }
    setShortsCutsState({
      status: shortCutsEngine.status || "idle"
    });
  }, []);
  return {
    shortCutsEngineRef,
    runShortCuts,
    setShortCuts,
    loading: shortCutsState.status === "running",
    status: shortCutsState.status,
    stopShortCuts,
    resetShortCuts
  };
};

// src/components/WebAccessRunningCard.tsx
var import_classnames = __toESM(require_classnames());
var import_react3 = __toESM(require_react());

// src/features/auth/store/index.ts
var AuthState = Recoil_index_8({
  key: "AuthState",
  default: {
    isLogin: false,
    userInfo: null
  }
});
var AuthModalShowState = Recoil_index_8({
  key: "AuthModalShowState",
  default: false
});

// src/features/auth/hooks/useAuthModalController.ts
var import_react2 = __toESM(require_react());
var import_dayjs = __toESM(require_dayjs_min());
var import_webextension_polyfill = __toESM(require_browser_polyfill());
var useAuthModalController = () => {
  const authLogin = Recoil_index_20(AuthState);
  const setAuthModalShow = Recoil_index_24(AuthModalShowState);
  const [webAccessLimit, setWebAccessLimit] = (0, import_react2.useState)(-1);
  (0, import_react2.useEffect)(() => {
    import_webextension_polyfill.default.storage.local.get(LIMIT_WEB_ACCESS_COUNT_STORAGE_KEY).then((data) => {
      const limitWebAccessCount = data[LIMIT_WEB_ACCESS_COUNT_STORAGE_KEY];
      if (limitWebAccessCount && limitWebAccessCount >= 0) {
        setWebAccessLimit(limitWebAccessCount);
      }
    });
  }, []);
  const openAuthModal = (0, import_react2.useCallback)(() => {
    setAuthModalShow(true);
  }, []);
  const closeAuthModal = (0, import_react2.useCallback)(() => {
    setAuthModalShow(false);
  }, []);
  const toggleAuthModal = (0, import_react2.useCallback)(() => {
    setAuthModalShow((pre) => !pre);
  }, []);
  const checkWebAccessCountStuck = (0, import_react2.useCallback)(
    async (callback) => {
      if (authLogin.isLogin) {
        callback();
        return;
      }
      const loginStuckData = await getLoginStuckData();
      const key = (0, import_dayjs.default)().format("YYYY-MM-DD");
      if (webAccessLimit > -1 && loginStuckData[key] && loginStuckData[key] > webAccessLimit) {
        openAuthModal();
      }
      callback();
    },
    [webAccessLimit, authLogin.isLogin]
  );
  const waitStuckCheck = (0, import_react2.useCallback)(
    async (callback) => {
      if (!authLogin.isLogin) {
        openAuthModal();
      }
      callback();
    },
    [authLogin.isLogin]
  );
  return {
    isLogin: authLogin.isLogin,
    openAuthModal,
    closeAuthModal,
    toggleAuthModal,
    // 临时方案 登陆卡点
    // 后续会优化等 roles 权限控制
    // PermissionsWrapper component
    waitStuckCheck,
    checkWebAccessCountStuck
  };
};

// src/util/icons.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime());
var twitterIcon = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "path",
      {
        fill: "#fff",
        fillRule: "evenodd",
        d: "M24 4.309a9.83 9.83 0 0 1-2.828.775 4.94 4.94 0 0 0 2.165-2.724 9.865 9.865 0 0 1-3.127 1.196 4.925 4.925 0 0 0-8.39 4.49A13.974 13.974 0 0 1 1.671 2.9a4.902 4.902 0 0 0-.667 2.476c0 1.708.869 3.216 2.191 4.099A4.936 4.936 0 0 1 .964 8.86v.06a4.926 4.926 0 0 0 3.95 4.829 4.964 4.964 0 0 1-2.224.085 4.93 4.93 0 0 0 4.6 3.42 9.886 9.886 0 0 1-6.115 2.107c-.398 0-.79-.023-1.175-.068a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.009-7.503 14.009-14.01 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.309"
      }
    )
  }
);
var discordIcon = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "path",
      {
        d: "M18.942 5.556a16.299 16.299 0 0 0-4.126-1.297c-.178.321-.385.754-.529 1.097a15.175 15.175 0 0 0-4.573 0 11.583 11.583 0 0 0-.535-1.097 16.274 16.274 0 0 0-4.129 1.3c-2.611 3.946-3.319 7.794-2.965 11.587a16.494 16.494 0 0 0 5.061 2.593 12.65 12.65 0 0 0 1.084-1.785 10.689 10.689 0 0 1-1.707-.831c.143-.106.283-.217.418-.331 3.291 1.539 6.866 1.539 10.118 0 .137.114.277.225.418.331-.541.326-1.114.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595c.415-4.396-.709-8.209-2.973-11.589zM8.678 14.813c-.988 0-1.798-.922-1.798-2.045s.793-2.047 1.798-2.047 1.815.922 1.798 2.047c.001 1.123-.793 2.045-1.798 2.045zm6.644 0c-.988 0-1.798-.922-1.798-2.045s.793-2.047 1.798-2.047 1.815.922 1.798 2.047c0 1.123-.793 2.045-1.798 2.045z",
        fill: "#fff",
        fillRule: "evenodd"
      }
    )
  }
);
var githubIcon = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "path",
      {
        d: "M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10Z",
        fill: "#fff",
        fillRule: "evenodd"
      }
    )
  }
);
var tuneIcon = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24", width: "24", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "path",
  {
    fill: "#aaa",
    d: "M11 21v-6h2v2h8v2h-8v2Zm-8-2v-2h6v2Zm4-4v-2H3v-2h4V9h2v6Zm4-2v-2h10v2Zm4-4V3h2v2h4v2h-4v2ZM3 7V5h10v2Z"
  }
) });
var Language = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24", width: "24", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "path",
  {
    fill: "#fff",
    d: "m11.9 22 4.55-12h2.1l4.55 12H21l-1.05-3.05H15.1L14 22Zm3.8-4.8h3.6l-1.75-4.95h-.1ZM4 19l-1.4-1.4 5.05-5.05q-.95-1.05-1.662-2.175Q5.275 9.25 4.75 8h2.1q.45.9.963 1.625.512.725 1.237 1.525 1.1-1.2 1.825-2.462Q11.6 7.425 12.1 6H1V4h7V2h2v2h7v2h-2.9q-.525 1.775-1.425 3.45-.9 1.675-2.225 3.15l2.4 2.45-.75 2.05L9 14Z"
  }
) });
var Expand = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24", width: "24", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "path",
  {
    fill: "currentColor",
    d: "m12 15.375-6-6 1.4-1.4 4.6 4.6 4.6-4.6 1.4 1.4Z"
  }
) });
var TabKey = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24", width: "24", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "path",
  {
    fill: "#fff",
    d: "M22 4.25a.75.75 0 00-1.5 0v15a.75.75 0 001.5 0v-15zm-9.72 14.28a.75.75 0 11-1.06-1.06l4.97-4.97H1.75a.75.75 0 010-1.5h14.44l-4.97-4.97a.75.75 0 011.06-1.06l6.25 6.25a.75.75 0 010 1.06l-6.25 6.25z"
  }
) });
var Check = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "mask",
        {
          id: "mask0_1976_27448",
          style: {
            maskType: "alpha"
          },
          maskUnits: "userSpaceOnUse",
          x: "0",
          y: "0",
          width: "24",
          height: "24",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { width: "24", height: "24", fill: "#D9D9D9" })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", { mask: "url(#mask0_1976_27448)", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "path",
        {
          d: "M9.5501 18.0001L3.8501 12.3001L5.2751 10.8751L9.5501 15.1501L18.7251 5.9751L20.1501 7.4001L9.5501 18.0001Z",
          fill: "black"
        }
      ) })
    ]
  }
);
var Close = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "mask",
        {
          id: "mask0_1976_27459",
          style: {
            maskType: "alpha"
          },
          maskUnits: "userSpaceOnUse",
          x: "0",
          y: "0",
          width: "24",
          height: "24",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { width: "24", height: "24", fill: "#D9D9D9" })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", { mask: "url(#mask0_1976_27459)", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "path",
        {
          d: "M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z",
          fill: "currentColor"
        }
      ) })
    ]
  }
);
var Continue = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "mask",
        {
          id: "mask0_1976_27624",
          style: {
            maskType: "alpha"
          },
          maskUnits: "userSpaceOnUse",
          x: "0",
          y: "0",
          width: "24",
          height: "24",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { width: "24", height: "24", fill: "#D9D9D9" })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", { mask: "url(#mask0_1976_27624)", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "path",
        {
          d: "M6.4 18L5 16.6L9.575 12L5 7.4L6.4 6L12.4 12L6.4 18ZM13 18L11.6 16.6L16.175 12L11.6 7.4L13 6L19 12L13 18Z",
          fill: "black"
        }
      ) })
    ]
  }
);
var Hourglass = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "mask",
        {
          id: "mask0_1976_27451",
          style: {
            maskType: "alpha"
          },
          maskUnits: "userSpaceOnUse",
          x: "0",
          y: "0",
          width: "24",
          height: "24",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { width: "24", height: "24", fill: "#D9D9D9" })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", { mask: "url(#mask0_1976_27451)", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "path",
        {
          d: "M12 11.1C13.0313 11.1 13.9141 10.7475 14.6484 10.0425C15.3828 9.3375 15.75 8.49 15.75 7.5V4.8H8.25V7.5C8.25 8.49 8.61719 9.3375 9.35156 10.0425C10.0859 10.7475 10.9687 11.1 12 11.1ZM4.5 21V19.2H6.375V16.5C6.375 15.585 6.59766 14.7262 7.04297 13.9237C7.48828 13.1212 8.10938 12.48 8.90625 12C8.10938 11.52 7.48828 10.8788 7.04297 10.0762C6.59766 9.27375 6.375 8.415 6.375 7.5V4.8H4.5V3H19.5V4.8H17.625V7.5C17.625 8.415 17.4023 9.27375 16.957 10.0762C16.5117 10.8788 15.8906 11.52 15.0938 12C15.8906 12.48 16.5117 13.1212 16.957 13.9237C17.4023 14.7262 17.625 15.585 17.625 16.5V19.2H19.5V21H4.5Z",
          fill: "black"
        }
      ) })
    ]
  }
);
var Search = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "mask",
        {
          id: "mask0_1976_27445",
          style: {
            maskType: "alpha"
          },
          maskUnits: "userSpaceOnUse",
          x: "0",
          y: "0",
          width: "24",
          height: "24",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { width: "24", height: "24", fill: "#D9D9D9" })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", { mask: "url(#mask0_1976_27445)", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "path",
        {
          d: "M19.6 21L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16C7.68333 16 6.14583 15.3708 4.8875 14.1125C3.62917 12.8542 3 11.3167 3 9.5C3 7.68333 3.62917 6.14583 4.8875 4.8875C6.14583 3.62917 7.68333 3 9.5 3C11.3167 3 12.8542 3.62917 14.1125 4.8875C15.3708 6.14583 16 7.68333 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L21 19.6L19.6 21ZM9.5 14C10.75 14 11.8125 13.5625 12.6875 12.6875C13.5625 11.8125 14 10.75 14 9.5C14 8.25 13.5625 7.1875 12.6875 6.3125C11.8125 5.4375 10.75 5 9.5 5C8.25 5 7.1875 5.4375 6.3125 6.3125C5.4375 7.1875 5 8.25 5 9.5C5 10.75 5.4375 11.8125 6.3125 12.6875C7.1875 13.5625 8.25 14 9.5 14Z",
          fill: "black"
        }
      ) })
    ]
  }
);
var Stop = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "mask",
        {
          id: "mask0_1976_27442",
          style: {
            maskType: "alpha"
          },
          maskUnits: "userSpaceOnUse",
          x: "0",
          y: "0",
          width: "24",
          height: "24",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { width: "24", height: "24", fill: "#D9D9D9" })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", { mask: "url(#mask0_1976_27442)", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 18V6H18V18H6ZM8 16H16V8H8V16Z", fill: "black" }) })
    ]
  }
);
var QuestionMark = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" })
  }
);
var OpenInNewTab = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" })
  }
);
var icons = {
  twitter: twitterIcon,
  discord: discordIcon,
  github: githubIcon,
  tune: tuneIcon,
  language: Language,
  expand: Expand,
  tabKey: TabKey,
  search: Search,
  stop: Stop,
  check: Check,
  close: Close,
  continue: Continue,
  hourglass: Hourglass,
  questionMark: QuestionMark,
  openInNewTab: OpenInNewTab
};

// src/components/WebAccessRunningCard.tsx
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var WebAccessRunningCard = () => {
  const {
    setShortCuts,
    runShortCuts,
    shortCutsEngineRef,
    status,
    loading,
    stopShortCuts,
    resetShortCuts
  } = useShortCutsWithChatGPTWeb("");
  const messageViewRef = (0, import_react3.useRef)(null);
  const mode = useThemeModeWithChatGPT_default();
  const [actionMessages, setActionMessages] = (0, import_react3.useState)([]);
  const [actionStatus, setActionStatus] = (0, import_react3.useState)("idle");
  const [actionProgress, setActionProgress] = (0, import_react3.useState)({
    current: 0,
    total: 0,
    progress: 0
  });
  const { checkWebAccessCountStuck } = useAuthModalController();
  const selectStyleMemo = (0, import_react3.useMemo)(() => {
    let style2 = "";
    switch (actionStatus) {
      case "complete":
        style2 += "border-color: rgb(54, 211, 153);";
        break;
      case "error":
        style2 += "border-color: rgb(255, 107, 107);";
        break;
      case "running":
        style2 += "border-color: rgb(58, 191, 248);";
        break;
      case "idle":
        style2 += "";
        break;
      default:
        break;
    }
    return style2;
  }, [actionStatus]);
  const showCardMemo = (0, import_react3.useMemo)(() => {
    return status !== "idle";
  }, [actionProgress, status]);
  const handleRunShortCuts = (0, import_react3.useCallback)(
    async (promptJson) => {
      try {
        const { query, userConfig } = JSON.parse(promptJson);
        const userPrompt = await getCurrentPrompt();
        const generatePromptTemplate = (query2) => {
          let promptTemplate = userPrompt.text || "";
          if (!promptTemplate) {
            return query2;
          }
          promptTemplate = promptTemplate.replace("{query}", query2);
          promptTemplate = promptTemplate.replace(
            "{web_results}",
            "{{PAGE_CONTENT}}"
          );
          promptTemplate = promptTemplate.replace(
            "{current_date}",
            "{{CURRENT_DATE}}"
          );
          if (userConfig.aiResponseLanguage !== "auto") {
            const langWord = getLanguagesEngWord(userConfig.aiResponseLanguage) || "English";
            promptTemplate = promptTemplate + `
Respond in ${langWord}`;
          }
          return promptTemplate;
        };
        let currentQuestion = query;
        let actions = [];
        const pageCommandMatch = query.match(/^\/page:(\S+)/);
        if (pageCommandMatch) {
          const url = pageCommandMatch[1];
          currentQuestion = query.replace(pageCommandMatch[0], "");
          actions = [
            {
              type: "DATE",
              parameters: {
                DateActionMode: "Current Date",
                DateFormatStyle: "YYYY-MM-DD HH:mm:ss"
              }
            },
            {
              type: "SET_VARIABLE",
              parameters: {
                VariableName: "CURRENT_DATE"
              }
            },
            {
              type: "GET_CONTENTS_OF_URL",
              parameters: {
                URLActionURL: url
              }
            },
            userConfig.summarizeType === "NO_SUMMARIZE" ? {
              type: "SLICE_OF_TEXT",
              parameters: {
                // SliceTextActionLength: SLICE_MAX_CHARACTERS,
                SliceTextActionType: "TOKENS"
              }
            } : {
              type: "SUMMARIZE_OF_TEXT",
              parameters: {
                SliceTextActionType: "TOKENS",
                SummarizeActionType: userConfig.summarizeType
              }
            },
            {
              type: "SET_VARIABLE",
              parameters: {
                VariableName: "PAGE_CONTENT"
              }
            },
            {
              type: "WEBGPT_ASK_CHATGPT",
              parameters: {
                AskChatGPTActionType: "ASK_CHAT_GPT_REPLACEMENT",
                template: generatePromptTemplate(currentQuestion)
              }
            }
          ];
        } else {
          const siteCommandMatch = query.match(/^\/site:(\S+)/);
          let site = "";
          if (siteCommandMatch) {
            site = siteCommandMatch[1];
            currentQuestion = query.replace(siteCommandMatch[0], "");
          }
          actions = [
            {
              type: "DATE",
              parameters: {
                DateActionMode: "Current Date",
                DateFormatStyle: "YYYY-MM-DD HH:mm:ss"
              }
            },
            {
              type: "SET_VARIABLE",
              parameters: {
                VariableName: "CURRENT_DATE"
              }
            },
            {
              type: "ASK_CHATGPT",
              parameters: {
                AskChatGPTActionType: "ASK_CHAT_GPT_HIDDEN",
                template: `Disregard any previous instructions.

I will give you a question or an instruction. The question or instruction, or possibly just a portion of it, requires searching the internet to find the relevant information as the context to answer the question, or fulfill the instruction. What search query should I enter in a search engine to find the relevant information as the context to answer the question, or fulfill the instruction? 

For your reference, today's date is {{CURRENT_DATE}}.
In your response, do not remind me of what I asked, do not explain, do not self reference, do not apologize, do not use variables or placeholders, do not include any generic filler phrases, do not quote your response, just answer what the final specific search query should be and nothing else.

My question or instruction is:

"""
${site ? `site:${site} ` : ""}${currentQuestion}
"""`
              }
            },
            {
              type: "GET_CONTENTS_OF_SEARCH_ENGINE",
              parameters: {
                URLSearchEngine: userConfig.searchEngine,
                URLSearchEngineParams: {
                  region: userConfig.region,
                  limit: userConfig.numWebResults,
                  btf: userConfig.timePeriod === "any" ? "" : userConfig.timePeriod,
                  nojs: "1",
                  ei: "UTF-8"
                }
              }
            },
            {
              type: "WEBGPT_SEARCH_RESULTS_EXPAND",
              parameters: {
                SummarizeActionType: userConfig.summarizeType
              }
            },
            {
              type: "SET_VARIABLE",
              parameters: {
                VariableName: "PAGE_CONTENT"
              }
            },
            {
              type: "WEBGPT_ASK_CHATGPT",
              parameters: {
                AskChatGPTActionType: "ASK_CHAT_GPT_REPLACEMENT",
                template: generatePromptTemplate(currentQuestion)
              }
            }
          ];
        }
        setActionProgress({
          current: 0,
          total: 0,
          progress: 0
        });
        setActionMessages([]);
        setActionStatus("idle");
        setShortCuts(actions);
        clientCallApiRecorder({
          featureId: "WEB_ACCESS",
          promptId: "chat",
          promptName: "chat",
          metaData: {
            ...userConfig,
            promptName: userPrompt.name,
            promptTemplate: userPrompt.text
          }
        });
        await runShortCuts();
      } catch (e) {
      }
    },
    [setShortCuts, runShortCuts]
  );
  const handleStopShortCutsRef = (0, import_react3.useRef)(handleRunShortCuts);
  (0, import_react3.useEffect)(() => {
    handleStopShortCutsRef.current = handleRunShortCuts;
  }, [handleRunShortCuts]);
  (0, import_react3.useEffect)(() => {
    if (status === "idle") {
      getMediator("chatBoxInputMediator").updateStatus(false);
    } else if (status === "stop") {
      const nextAction = shortCutsEngineRef.current?.getNextAction();
      if (nextAction?.status === "error" && nextAction.error) {
        setActionMessages((messages) => {
          const newMessages = [...messages];
          newMessages[newMessages.length - 1] = nextAction.error || "Network error, please try again later.";
          return newMessages;
        });
      }
    }
  }, [status]);
  (0, import_react3.useEffect)(() => {
    getMediator("chatBoxInputMediator").unsubscribe(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      window.__webgpt__dirty__listener_handleInputUpdate
    );
    window.__webgpt__dirty__listener_handleInputUpdate = function(newInputValue, event) {
      if (event === "submitInputValue") {
        checkWebAccessCountStuck(() => {
          incrementLoginStuckData();
          if (status === "idle") {
            handleStopShortCutsRef.current(newInputValue);
          }
        });
      } else {
      }
    };
    getMediator("chatBoxInputMediator").subscribe(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      window.__webgpt__dirty__listener_handleInputUpdate
    );
  }, [status, checkWebAccessCountStuck]);
  (0, import_react3.useEffect)(() => {
    const shortCutsEngineListener = (event, data) => {
      if (event === "action") {
        const action = data;
        setActionStatus(action.status);
      } else if (event === "beforeRunAction") {
        const shortCutsEngine2 = data.ShortcutsEngine;
        const action = data.action;
        setActionMessages((prev) => {
          const cloneMessages = cloneDeep_default(prev);
          const typeToMessageMap = {
            GET_CONTENTS_OF_SEARCH_ENGINE: `Searching`,
            ASK_CHATGPT: `Thinking`,
            GET_CONTENTS_OF_URL: `Reading`
          };
          let newMessage = typeToMessageMap[action.type] || "Processing";
          if (newMessage === "Searching") {
            try {
              const removeCommands = (query) => query.replace(/page:(\S+)\s*/g, "").replace(/site:(\S+)\s*/g, "");
              const searchText = shortCutsEngine2.actions[shortCutsEngine2.stepIndex - 1].output;
              const searchQuery = removeCommands(searchText);
              newMessage += ` for ${searchQuery}`;
            } catch (e) {
            }
          } else if (newMessage === "Reading" && action.parameters?.URLActionURL) {
            newMessage += ` ${action.parameters.URLActionURL}`;
          }
          if (cloneMessages[shortCutsEngine2.stepIndex]) {
            cloneMessages[shortCutsEngine2.stepIndex] = newMessage;
          } else {
            cloneMessages.push(newMessage);
          }
          return cloneMessages;
        });
        setTimeout(() => {
          const messageView = messageViewRef.current;
          if (messageView) {
            messageView.scrollTop = messageView.scrollHeight;
          }
          if (!shortCutsEngine2) {
            return;
          }
          if (typeof data.progress === "number") {
            setActionProgress({
              current: shortCutsEngine2.stepIndex + 1,
              total: shortCutsEngine2.actions.length,
              progress: Math.max(data.progress, 0)
            });
          }
        }, 100);
      }
    };
    shortCutsEngineRef.current?.removeAllListeners();
    shortCutsEngineRef.current?.addListener(shortCutsEngineListener);
  }, []);
  (0, import_react3.useEffect)(() => {
    window.removeEventListener(
      "message",
      window.__webgpt__dirty__listener_handleRunningCardMessage
    );
    window.__webgpt__dirty__listener_handleRunningCardMessage = async (event) => {
      if (event.data?.id === RUNNING_CARD_MESSAGE) {
        const { type, data } = event.data;
        switch (type) {
          case "runShortCutActions": {
            const { actions, forceNotWebAccess, infoObject } = data;
            if (!loading) {
              forceNotWebAccess && updateForceNotWebAccess(true);
              setActionProgress({
                current: 0,
                total: 0,
                progress: 0
              });
              setActionMessages([]);
              setActionStatus("idle");
              setShortCuts(actions);
              if (infoObject) {
                clientCallApiRecorder(infoObject);
              }
              await runShortCuts();
              forceNotWebAccess && updateForceNotWebAccess(false);
            }
            break;
          }
        }
      }
    };
    window.addEventListener(
      "message",
      window.__webgpt__dirty__listener_handleRunningCardMessage
    );
    return () => {
      window.removeEventListener(
        "message",
        window.__webgpt__dirty__listener_handleRunningCardMessage
      );
    };
  }, [loading, setShortCuts, runShortCuts]);
  if (!showCardMemo)
    return null;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "div",
    {
      className: (0, import_classnames.default)(
        [
          "wcg-absolute wcg-w-full wcg-h-full wcg-inset-0 wcg-m-auto wcg-web-access-card -wcg-top-[210px]"
        ],
        // showCardMemo ? 'wcg-pointer-events-auto' : 'wcg-pointer-events-none',
        // showCardMemo ? 'wcg-opacity-100' : 'wcg-opacity-0',
        // showCardMemo ? 'wcg-z-[9999]' : '-wcg-z-[1]',
        mode === "light" ? "wcg-web-access-card--light" : "wcg-web-access-card--dark"
      ),
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "div",
        {
          style: {
            boxShadow: "0px 1px 7px 2px rgba(0, 0, 0, 0.1)"
          },
          className: (0, import_classnames.default)([
            "wcg-rounded wcg-border wcg-border-solid wcg-border-black/10 wcg-w-full wcg-h-[164px] wcg-box-border wcg-absolute  wcg-left-0 wcg-flex wcg-px-4 wcg-py-2",
            // mode === 'light' ? 'wcg-bg-[#fff]' : 'dark:wcg-bg-[#343541]',
            mode === "light" ? "wcg-bg-[#fff]" : "wcg-bg-[#40414F]"
          ]),
          children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "wcg-flex wcg-flex-1 wcg-flex-col wcg-items-start wcg-gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "wcg-flex wcg-w-full wcg-items-center wcg-justify-center wcg-gap-2", children: [
              status === "stop" && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
                "button",
                {
                  className: "wcg-btn-outline wcg-btn-sm wcg-btn wcg-gap-2 wcg-normal-case",
                  onClick: async () => {
                    const nextAction = shortCutsEngineRef.current?.getNextAction();
                    if (nextAction?.parameters.AskChatGPTActionType === "ASK_CHAT_GPT_HIDDEN") {
                      await runShortCuts();
                      return;
                    }
                    let regenerateButton = null;
                    const buttons = document.querySelectorAll("button");
                    for (let i = 0; i < buttons.length; i++) {
                      if (buttons[i].innerText === "Regenerate response") {
                        regenerateButton = buttons[i];
                        break;
                      }
                    }
                    if (regenerateButton) {
                      regenerateButton.click();
                    }
                    await runShortCuts();
                  },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                      "span",
                      {
                        className: "wcg-progress__svg-icon wcg-progress__svg-icon--large",
                        children: icons.continue
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: "Continue" })
                  ]
                }
              ),
              status === "stop" && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
                "button",
                {
                  className: "wcg-btn-outline wcg-btn-sm wcg-btn wcg-gap-2 wcg-normal-case",
                  onClick: async () => {
                    await resetShortCuts();
                  },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                      "span",
                      {
                        className: "wcg-progress__svg-icon wcg-progress__svg-icon--large",
                        children: icons.close
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: "Exit" })
                  ]
                }
              ),
              status === "running" && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
                "button",
                {
                  className: "wcg-btn-outline wcg-btn-sm wcg-btn wcg-gap-2 wcg-normal-case",
                  onClick: async () => {
                    await stopShortCuts();
                  },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                      "span",
                      {
                        className: "wcg-progress__svg-icon wcg-progress__svg-icon--large",
                        children: icons.stop
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: "Stop browsing" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "wcg-flex wcg-w-full", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "wcg-w-full wcg-bg-[#9393932b] wcg-rounded-full wcg-h-2", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "div",
              {
                className: (0, import_classnames.default)(
                  ["wcg-h-2 wcg-rounded-full"],
                  actionStatus === "error" ? "wcg-progress-error" : "wcg-progress-success"
                ),
                style: {
                  width: `${Math.floor(
                    Number(actionProgress.progress * 100)
                  )}%`
                }
              }
            ) }) }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: " wcg-flex wcg-w-full wcg-justify-between", children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("p", { className: "wcg-text wcg-m-0 wcg-flex wcg-grow-0 wcg-flex-row wcg-items-center wcg-gap-1 wcg-text-xs", children: [
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "wcg-progress__svg-icon", children: icons.search }),
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: "WebChatGPT is browsing the internet..." })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
                "b",
                {
                  className: "wcg-text wcg-m-0 wcg-grow-0 wcg-text-xs",
                  style: {
                    color: actionStatus === "error" ? "#F22C3D" : "#00A67D"
                  },
                  children: [
                    Math.floor(actionProgress.progress * 100).toString(),
                    "%"
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "div",
              {
                className: (0, import_classnames.default)(
                  [
                    "wcg-progress-card--hide-scroll-y-bar wcg-flex wcg-rounded wcg-w-full wcg-h-[60px] wcg-overflow-x-hidden wcg-flex-col"
                  ],
                  mode === "light" ? "wcg-bg-black/[.04]" : "wcg-bg-white/[.04]"
                ),
                ref: messageViewRef,
                children: actionMessages.map((message, index2) => {
                  const isLast = index2 === actionMessages.length - 1;
                  let backgroundColor = "";
                  if (isLast) {
                    if (actionStatus === "error") {
                      backgroundColor = "rgba(242,44,61,0.32)";
                    } else {
                      backgroundColor = "rgba(0,166,125,0.32)";
                    }
                  }
                  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
                    "pre",
                    {
                      className: "wcg-m-0 wcg-flex wcg-flex-row wcg-items-center wcg-gap-1 wcg-rounded wcg-px-1",
                      style: {
                        backgroundColor
                      },
                      children: [
                        isLast ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: "wcg-progress__svg-icon", children: [
                          actionStatus === "error" && icons.close,
                          actionStatus === "running" && icons.hourglass,
                          actionStatus === "complete" && icons.check
                        ] }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "wcg-progress__svg-icon", children: icons.check }),
                        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                          "span",
                          {
                            className: " wcg-shrink-0 wcg-text-xs wcg-text-secondary",
                            children: `${index2 + 1}.`
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                          "code",
                          {
                            className: "wcg-progress-card--hide-scroll-x-bar wcg-w-0 wcg-flex-1 wcg-overflow-x-auto wcg-text-xs",
                            dangerouslySetInnerHTML: {
                              __html: message.replace(/\n/g, "")
                            }
                          }
                        )
                      ]
                    },
                    index2
                  );
                })
              }
            )
          ] })
        }
      )
    }
  );
};
var WebAccessRunningCard_default = WebAccessRunningCard;

// src/features/prompt/constant/index.ts
var DEFAULT_PROMPT_LIST_TYPE = APP_IS_PROD ? "Public" : "Own";
var NEED_AUTH_PROMPT_LIST_TYPE = ["Favorites", "Own"];
var DEFAULT_PROMPT_AUTHOR = "MaxAI.me";
var DEFAULT_PROMPT_AUTHOR_LINK = MAXAI_INSTALL_LINK;
var PROMPT_COLORS = ["#5D5FEF", "#FF6154", "#008000", "#FFA500"];
var PROMPT_APP_SHADOW_ROOT_ID = "WEBCHATGPT_PROMPT_APP_SHADOW_ROOT";
var PROMPT_APP_WRAPPER_ID = "WEBCHATGPT_PROMPT_APP_WRAPPER";
var PROMPT_RUNNER_SHADOW_ROOT_ID = "WEBCHATGPT_PROMPT_RUNNER_SHADOW_ROOT";
var PROMPT_RUNNER_WRAPPER_ID = "WEBCHATGPT_PROMPT_RUNNER_WRAPPER";
var PROMPT_AUTH_REF = {
  Favorites: "webchatgpt-favorites",
  Own: "webchatgpt-own",
  Public: "webchatgpt-public"
};
var DEFAULT_PROMPT_VARIABLE = [
  // type livecrawling
  {
    name: "Live Crawling Target URL",
    hint: "Enter the URL you wish to extract text from",
    type: "livecrawling",
    isSystemVariable: true
  },
  {
    name: "Live Crawling Crawled Text",
    hint: "This variable will be automatically updated with text extracted from the target URL",
    type: "livecrawling",
    isSystemVariable: true
  },
  // {
  //   name: 'Live Crawling Crawled Html',
  //   hint: 'This variable will be automatically updated with Html extracted from the target URL',
  //   type: 'livecrawling',
  //   isSystemVariable: true,
  // },
  // type webaccess
  {
    name: "Web Search Query",
    hint: "Enter your search term",
    type: "websearch",
    isSystemVariable: true
  },
  {
    name: "Web Search Results",
    hint: "This variable will be automatically updated with the search results",
    type: "websearch",
    isSystemVariable: true
  },
  // type system
  {
    name: "System Current Date",
    hint: "This variable will be automatically updated with the current date",
    type: "system",
    isSystemVariable: true
  }
];
var VARIABLE_TYPE_LABEL_MAP = {
  livecrawling: "Live Crawling",
  websearch: "Web Search",
  system: "System",
  text: "Text"
};

// src/features/prompt/PromptApp.tsx
var import_react32 = __toESM(require_react());

// src/features/prompt/layout/PromptListLayout.tsx
var import_react24 = __toESM(require_react());

// src/components/CustomTablePagination.tsx
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var CustomTablePagination = ({
  total,
  current,
  pageSize,
  maxPage = 0,
  sx,
  paginationProps,
  onChange,
  onPageSizeChange
}) => {
  if (!total || !current && current !== 0 || !pageSize) {
    return null;
  }
  const numTotal = Number(total);
  const numCurrent = Number(current);
  const numPageSize = Number(pageSize);
  const numMaxSize = Number(maxPage);
  const coverCurrentPage = () => {
    if (numMaxSize) {
      if (numCurrent > numMaxSize) {
        return numMaxSize;
      }
    }
    return numCurrent;
  };
  const handleChange = (event, value) => {
    onChange && onChange(event, value);
  };
  const handleChangeRowsPerPage = (event) => {
    const value = event.target?.value;
    onPageSizeChange && onPageSizeChange(Number(value));
    onChange && onChange(null, 0);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { children: numTotal > numPageSize ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    Stack_default,
    {
      direction: "row",
      sx: { justifyContent: "center", px: 2, pt: 4, ...sx },
      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        TablePagination_default,
        {
          component: "div",
          sx: {
            "& > .MuiTablePagination-toolbar": {
              pl: 0,
              boxSizing: "border-box"
            },
            ".MuiTablePagination-select": {
              fontSize: 16
            }
          },
          count: numTotal,
          page: coverCurrentPage(),
          rowsPerPage: numPageSize,
          onPageChange: handleChange,
          onRowsPerPageChange: handleChangeRowsPerPage,
          SelectProps: {
            MenuProps: {
              disablePortal: true
            }
          },
          ...paginationProps
        }
      )
    }
  ) : null });
};
var CustomTablePagination_default = CustomTablePagination;

// src/components/select/EmptyContent.tsx
var import_Search = __toESM(require_Search());
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var EmptyContent = ({ emptyText = "No Results Found", sx }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Stack_default, { alignItems: "center", sx, children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      Stack_default,
      {
        width: "56px",
        height: "56px",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        sx: {
          bgcolor: (t) => t.palette.mode === "dark" ? "rgba(255, 255, 255, .04)" : "rgba(0, 0, 0, .04)"
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_Search.default, { width: 24, height: 24 })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Typography_default, { variant: "body1", children: emptyText })
  ] });
};
var EmptyContent_default = EmptyContent;

// src/features/prompt/components/PromptCard.tsx
var import_LanguageOutlined = __toESM(require_LanguageOutlined());
var import_LockOutlined = __toESM(require_LockOutlined());
var import_dayjs3 = __toESM(require_dayjs_min());
var import_utc = __toESM(require_utc());
var import_react11 = __toESM(require_react());

// node_modules/.pnpm/@mui+lab@5.0.0-alpha.120_@emotion+react@11.10.5_@emotion+styled@11.10.5_@mui+material@5.11.8__ex2qvmdip5j276uycqgj35area/node_modules/@mui/lab/LoadingButton/LoadingButton.js
init_extends();
var React = __toESM(require_react());
var import_utils7 = __toESM(require_utils2());

// node_modules/.pnpm/@mui+base@5.0.0-alpha.118_@types+react@18.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@mui/base/composeClasses/index.js
var import_utils6 = __toESM(require_utils());

// node_modules/.pnpm/@mui+lab@5.0.0-alpha.120_@emotion+react@11.10.5_@emotion+styled@11.10.5_@mui+material@5.11.8__ex2qvmdip5j276uycqgj35area/node_modules/@mui/lab/LoadingButton/loadingButtonClasses.js
var import_generateUtilityClass = __toESM(require_generateUtilityClass());
function getLoadingButtonUtilityClass(slot) {
  return (0, import_generateUtilityClass.default)("MuiLoadingButton", slot);
}
var loadingButtonClasses = (0, import_utils.unstable_generateUtilityClasses)("MuiLoadingButton", ["root", "loading", "loadingIndicator", "loadingIndicatorCenter", "loadingIndicatorStart", "loadingIndicatorEnd", "endIconLoadingEnd", "startIconLoadingStart"]);
var loadingButtonClasses_default = loadingButtonClasses;

// node_modules/.pnpm/@mui+lab@5.0.0-alpha.120_@emotion+react@11.10.5_@emotion+styled@11.10.5_@mui+material@5.11.8__ex2qvmdip5j276uycqgj35area/node_modules/@mui/lab/LoadingButton/LoadingButton.js
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
var _excluded = ["children", "disabled", "id", "loading", "loadingIndicator", "loadingPosition", "variant"];
var useUtilityClasses = (ownerState) => {
  const {
    loading,
    loadingPosition,
    classes
  } = ownerState;
  const slots = {
    root: ["root", loading && "loading"],
    startIcon: [loading && `startIconLoading${(0, import_utils7.capitalize)(loadingPosition)}`],
    endIcon: [loading && `endIconLoading${(0, import_utils7.capitalize)(loadingPosition)}`],
    loadingIndicator: ["loadingIndicator", loading && `loadingIndicator${(0, import_utils7.capitalize)(loadingPosition)}`]
  };
  const composedClasses = (0, import_utils6.unstable_composeClasses)(slots, getLoadingButtonUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};
var rootShouldForwardProp = (prop) => prop !== "ownerState" && prop !== "theme" && prop !== "sx" && prop !== "as" && prop !== "classes";
var LoadingButtonRoot = styled_default(Button_default, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiLoadingButton",
  slot: "Root",
  overridesResolver: (props, styles) => {
    return [styles.root, styles.startIconLoadingStart && {
      [`& .${loadingButtonClasses_default.startIconLoadingStart}`]: styles.startIconLoadingStart
    }, styles.endIconLoadingEnd && {
      [`& .${loadingButtonClasses_default.endIconLoadingEnd}`]: styles.endIconLoadingEnd
    }];
  }
})(({
  ownerState,
  theme
}) => _extends({
  [`& .${loadingButtonClasses_default.startIconLoadingStart}, & .${loadingButtonClasses_default.endIconLoadingEnd}`]: {
    transition: theme.transitions.create(["opacity"], {
      duration: theme.transitions.duration.short
    }),
    opacity: 0
  }
}, ownerState.loadingPosition === "center" && {
  transition: theme.transitions.create(["background-color", "box-shadow", "border-color"], {
    duration: theme.transitions.duration.short
  }),
  [`&.${loadingButtonClasses_default.loading}`]: {
    color: "transparent"
  }
}, ownerState.loadingPosition === "start" && ownerState.fullWidth && {
  [`& .${loadingButtonClasses_default.startIconLoadingStart}, & .${loadingButtonClasses_default.endIconLoadingEnd}`]: {
    transition: theme.transitions.create(["opacity"], {
      duration: theme.transitions.duration.short
    }),
    opacity: 0,
    marginRight: -8
  }
}, ownerState.loadingPosition === "end" && ownerState.fullWidth && {
  [`& .${loadingButtonClasses_default.startIconLoadingStart}, & .${loadingButtonClasses_default.endIconLoadingEnd}`]: {
    transition: theme.transitions.create(["opacity"], {
      duration: theme.transitions.duration.short
    }),
    opacity: 0,
    marginLeft: -8
  }
}));
var LoadingButtonLoadingIndicator = styled_default("div", {
  name: "MuiLoadingButton",
  slot: "LoadingIndicator",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.loadingIndicator, styles[`loadingIndicator${(0, import_utils7.capitalize)(ownerState.loadingPosition)}`]];
  }
})(({
  theme,
  ownerState
}) => _extends({
  position: "absolute",
  visibility: "visible",
  display: "flex"
}, ownerState.loadingPosition === "start" && (ownerState.variant === "outlined" || ownerState.variant === "contained") && {
  left: ownerState.size === "small" ? 10 : 14
}, ownerState.loadingPosition === "start" && ownerState.variant === "text" && {
  left: 6
}, ownerState.loadingPosition === "center" && {
  left: "50%",
  transform: "translate(-50%)",
  color: (theme.vars || theme).palette.action.disabled
}, ownerState.loadingPosition === "end" && (ownerState.variant === "outlined" || ownerState.variant === "contained") && {
  right: ownerState.size === "small" ? 10 : 14
}, ownerState.loadingPosition === "end" && ownerState.variant === "text" && {
  right: 6
}, ownerState.loadingPosition === "start" && ownerState.fullWidth && {
  position: "relative",
  left: -10
}, ownerState.loadingPosition === "end" && ownerState.fullWidth && {
  position: "relative",
  right: -10
}));
var LoadingButton = /* @__PURE__ */ React.forwardRef(function LoadingButton2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiLoadingButton"
  });
  const {
    children,
    disabled = false,
    id: idProp,
    loading = false,
    loadingIndicator: loadingIndicatorProp,
    loadingPosition = "center",
    variant = "text"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const id = (0, import_utils7.unstable_useId)(idProp);
  const loadingIndicator = loadingIndicatorProp != null ? loadingIndicatorProp : /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(CircularProgress_default, {
    "aria-labelledby": id,
    color: "inherit",
    size: 16
  });
  const ownerState = _extends({}, props, {
    disabled,
    loading,
    loadingIndicator,
    loadingPosition,
    variant
  });
  const classes = useUtilityClasses(ownerState);
  const loadingButtonLoadingIndicator = loading ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(LoadingButtonLoadingIndicator, {
    className: classes.loadingIndicator,
    ownerState,
    children: loadingIndicator
  }) : null;
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(LoadingButtonRoot, _extends({
    disabled: disabled || loading,
    id,
    ref
  }, other, {
    variant,
    classes,
    ownerState,
    children: [ownerState.loadingPosition === "end" ? children : loadingButtonLoadingIndicator, ownerState.loadingPosition === "end" ? loadingButtonLoadingIndicator : children]
  }));
});
false ? LoadingButton.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types.default.object,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types.default.bool,
  /**
   * @ignore
   */
  id: import_prop_types.default.string,
  /**
   * If `true`, the loading indicator is shown.
   * @default false
   */
  loading: import_prop_types.default.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default we render a `CircularProgress` that is labelled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: import_prop_types.default.node,
  /**
   * The loading indicator can be positioned on the start, end, or the center of the button.
   * @default 'center'
   */
  loadingPosition: (0, import_utils.chainPropTypes)(import_prop_types.default.oneOf(["start", "end", "center"]), (props) => {
    if (props.loadingPosition === "start" && !props.startIcon) {
      return new Error(`MUI: The loadingPosition="start" should be used in combination with startIcon.`);
    }
    if (props.loadingPosition === "end" && !props.endIcon) {
      return new Error(`MUI: The loadingPosition="end" should be used in combination with endIcon.`);
    }
    return null;
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["contained", "outlined", "text"]), import_prop_types.default.string])
} : void 0;
var LoadingButton_default = LoadingButton;

// src/components/CustomModal.tsx
var import_Close = __toESM(require_Close());
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
var CustomModal = ({
  children,
  show = false,
  sx,
  onClose,
  bgTransparent = false,
  maxWidth,
  width,
  height,
  ...restProps
}) => {
  const handleClose = (event, reason) => {
    if (onClose)
      onClose(reason);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Modal_default, { open: show, onClose: handleClose, disablePortal: true, ...restProps, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_jsx_runtime7.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Fade_default, { in: show, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
    Paper_default,
    {
      id: "mui-modal",
      sx: [
        {
          width: width ?? "90vw",
          height: height ?? "90vh",
          maxWidth: maxWidth ?? "lg",
          margin: "5vh auto",
          overflowY: "auto",
          "&:focus-visible": {
            outline: "none"
          },
          bgcolor: (t) => t.palette.mode === "dark" ? (0, import_system.lighten)(t.palette.background.paper, 0.1) : "pageBackground",
          ...sx,
          tabIndex: "100"
        },
        // sx Array types
        // @see https://github.com/mui/material-ui/issues/32948
        bgTransparent && {
          bgcolor: "transparent",
          boxShadow: "none"
        }
      ],
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Box_default, { sx: { position: "fixed", top: 16, left: 16 }, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          IconButton_default,
          {
            onClick: () => {
              onClose && onClose("closeBtn");
            },
            sx: {
              color: "white",
              bgcolor: "#616161",
              "&:hover": {
                bgcolor: "#7e7e7e"
              }
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_Close.default, {})
          }
        ) }),
        children
      ]
    }
  ) }) }) });
};
var CustomModal_default = CustomModal;

// src/layouts/AppPaperCardLayout.tsx
var import_react4 = __toESM(require_react());
var import_jsx_runtime8 = __toESM(require_jsx_runtime());
var AppPaperCardLayout = (props) => {
  const { title, sx, children, bordered, ...paperProps } = props;
  const renderTitle = (0, import_react4.useMemo)(() => {
    if (typeof title === "string") {
      return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(Box_default, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          Typography_default,
          {
            fontSize: 24,
            component: "h2",
            fontWeight: 700,
            display: "flex",
            children: title
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Divider_default, { sx: { my: 2 } })
      ] });
    }
    return title;
  }, [title]);
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
    Paper_default,
    {
      className: "app-paper-card-layout",
      sx: {
        p: "12px 16px",
        height: "100%",
        border: bordered ? "1px solid rgba(0, 0, 0, 0.08)" : "unset",
        ...sx
      },
      elevation: 0,
      ...paperProps,
      children: [
        renderTitle,
        children
      ]
    }
  );
};
var AppPaperCardLayout_default = AppPaperCardLayout;

// src/features/prompt/components/DeletePromptConfirm.tsx
var import_jsx_runtime9 = __toESM(require_jsx_runtime());
var DeletePromptConfirm = ({
  show,
  loading,
  // promptTitle,
  onCancel,
  onConfirm
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    CustomModal_default,
    {
      show,
      width: 400,
      bgTransparent: true,
      onClose: onCancel,
      sx: {
        height: "auto",
        my: "40vh"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
        AppPaperCardLayout_default,
        {
          sx: {
            height: "max-content",
            p: 2
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(Stack_default, { spacing: 2, children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Typography_default, { children: "Are you sure you want to delete this prompt template?" }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(Stack_default, { direction: "row", spacing: 1, justifyContent: "flex-end", children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                LoadingButton_default,
                {
                  loading,
                  variant: "secondary",
                  onClick: onConfirm,
                  children: "Delete"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Button_default, { variant: "contained", type: "submit", onClick: onCancel, children: "Cancel" })
            ] })
          ] })
        }
      )
    }
  );
};
var DeletePromptConfirm_default = DeletePromptConfirm;

// src/features/prompt/components/PromptCardActions/DeleteIconButton.tsx
var import_jsx_runtime10 = __toESM(require_jsx_runtime());
var DeleteIconButton = ({ onClick }) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Tooltip_default, { title: "Delete Prompt", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
  IconButton_default,
  {
    size: "small",
    onClick: (event) => {
      event.stopPropagation();
      onClick && onClick();
    },
    children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      CustomIcon_default,
      {
        icon: "Delete",
        sx: {
          // color: 'rgba(0, 0, 0, 0.54)',
          fontSize: 16
        }
      }
    )
  }
) });

// src/features/prompt/components/PromptCardActions/EditIconButton.tsx
var import_jsx_runtime11 = __toESM(require_jsx_runtime());
var EditIconButton = ({ onClick }) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Tooltip_default, { title: "Edit Prompt", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
  IconButton_default,
  {
    size: "small",
    onClick: (event) => {
      event.stopPropagation();
      onClick && onClick();
    },
    children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      CustomIcon_default,
      {
        icon: "Edit",
        sx: {
          // color: 'rgba(0, 0, 0, 0.54)',
          fontSize: 16
        }
      }
    )
  }
) });

// src/features/prompt/components/PromptCardActions/FavoriteIconButton.tsx
var import_FavoriteBorderOutlined = __toESM(require_FavoriteBorderOutlined());
var import_FavoriteOutlined = __toESM(require_FavoriteOutlined());
var import_react5 = __toESM(require_react());

// src/features/prompt/store/index.ts
var PrompstCategoryOptions = Recoil_index_8({
  key: "PromptCategoryOptions",
  default: []
});
var DEFAULT_PROMPT_SEARCH_PARAMS = {
  category: "All",
  use_case: "All",
  keyword: "",
  tab_active: DEFAULT_PROMPT_LIST_TYPE
  // current: 0,
  // pageSize: 12,
};
var PromptSearchParamsStore = Recoil_index_8({
  key: "PromptSearchParamsStore",
  default: DEFAULT_PROMPT_SEARCH_PARAMS
});
var FavoritesPromptIdsAtom = Recoil_index_8({
  key: "FavoritesPromptIdsAtom",
  default: []
});
var SelectPromptIdAtom = Recoil_index_8({
  key: "SelectPromptIdAtom",
  default: null
});

// src/features/prompt/components/PromptCardActions/FavoriteIconButton.tsx
var import_jsx_runtime12 = __toESM(require_jsx_runtime());
var FavoriteIconButton = ({ id, loading, onClick }) => {
  const favoritesPromptIds = Recoil_index_20(FavoritesPromptIdsAtom);
  const isFavorite = (0, import_react5.useMemo)(
    () => favoritesPromptIds.includes(id),
    [favoritesPromptIds, id]
  );
  const iconSx = (0, import_react5.useMemo)(
    () => ({
      fontSize: 16
    }),
    []
  );
  const Icon = (0, import_react5.useMemo)(
    () => isFavorite ? /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_FavoriteOutlined.default, { sx: iconSx }) : /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_FavoriteBorderOutlined.default, { sx: iconSx }),
    [isFavorite, iconSx]
  );
  const tooltipTitle = (0, import_react5.useMemo)(
    () => isFavorite ? "Remove from the favorite list" : "Add to Favorite",
    [isFavorite]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Tooltip_default, { title: tooltipTitle, children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    IconButton_default,
    {
      size: "small",
      onClick: (event) => {
        event.stopPropagation();
        onClick && onClick(isFavorite);
      },
      children: loading ? /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(CircularProgress_default, { size: 16 }) : Icon
    }
  ) });
};

// src/features/prompt/components/PromptCardActions/SeeIconButton.tsx
var import_RemoveRedEye = __toESM(require_RemoveRedEye());
var import_jsx_runtime13 = __toESM(require_jsx_runtime());
var SeeIconButton = ({ detailLink }) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Tooltip_default, { title: "View prompt details", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
  IconButton_default,
  {
    size: "small",
    onClick: (event) => {
      event.stopPropagation();
      window.open(detailLink);
    },
    children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      import_RemoveRedEye.default,
      {
        sx: {
          fontSize: 16
        }
      }
    )
  }
) });

// src/features/prompt/hooks/useAddFavouritePrompt.ts
var import_react6 = __toESM(require_react());

// src/util/api.ts
var PROMPT_API = {
  GET_FAVOURITE_PROMPTS: "/prompt/get_favourite_prompts",
  GET_OWN_PROMPTS: "/prompt/get_own_prompts",
  SEARCH_PROMPT: "/prompt/search_prompt",
  GET_PROMPT_DETAIL: "/prompt/get_prompt_detail",
  GET_PRIVATE_PROMPT_DETAIL: "/prompt/get_private_prompt_detail",
  PROMPT_CATEGORY: "/prompt/category",
  ADD_PROMPT: "/prompt/add_own_prompt",
  ADD_FAVOURITE_PROMPT: "/prompt/add_favourite_prompt",
  REMOVE_FAVOURITE_PROMPT: "/prompt/remove_favourite_prompt",
  DELETE_PROMPT: "/prompt/remove_own_prompt",
  EDIT_OWN_PROMPT: "/prompt/update_own_prompt"
};

// src/util/request.tsx
var import_dayjs2 = __toESM(require_dayjs_min());

// node_modules/.pnpm/tslib@2.6.0/node_modules/tslib/tslib.es6.mjs
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}

// node_modules/.pnpm/@fingerprintjs+fingerprintjs@3.4.1/node_modules/@fingerprintjs/fingerprintjs/dist/fp.esm.js
var version = "3.4.1";
function wait(durationMs, resolveWith) {
  return new Promise(function(resolve) {
    return setTimeout(resolve, durationMs, resolveWith);
  });
}
function requestIdleCallbackIfAvailable(fallbackTimeout, deadlineTimeout) {
  if (deadlineTimeout === void 0) {
    deadlineTimeout = Infinity;
  }
  var requestIdleCallback = window.requestIdleCallback;
  if (requestIdleCallback) {
    return new Promise(function(resolve) {
      return requestIdleCallback.call(window, function() {
        return resolve();
      }, { timeout: deadlineTimeout });
    });
  } else {
    return wait(Math.min(fallbackTimeout, deadlineTimeout));
  }
}
function isPromise(value) {
  return !!value && typeof value.then === "function";
}
function awaitIfAsync(action, callback) {
  try {
    var returnedValue = action();
    if (isPromise(returnedValue)) {
      returnedValue.then(function(result) {
        return callback(true, result);
      }, function(error2) {
        return callback(false, error2);
      });
    } else {
      callback(true, returnedValue);
    }
  } catch (error2) {
    callback(false, error2);
  }
}
function forEachWithBreaks(items, callback, loopReleaseInterval) {
  if (loopReleaseInterval === void 0) {
    loopReleaseInterval = 16;
  }
  return __awaiter(this, void 0, void 0, function() {
    var lastLoopReleaseTime, i, now;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          lastLoopReleaseTime = Date.now();
          i = 0;
          _a.label = 1;
        case 1:
          if (!(i < items.length))
            return [3, 4];
          callback(items[i], i);
          now = Date.now();
          if (!(now >= lastLoopReleaseTime + loopReleaseInterval))
            return [3, 3];
          lastLoopReleaseTime = now;
          return [4, wait(0)];
        case 2:
          _a.sent();
          _a.label = 3;
        case 3:
          ++i;
          return [3, 1];
        case 4:
          return [
            2
            /*return*/
          ];
      }
    });
  });
}
function suppressUnhandledRejectionWarning(promise) {
  promise.then(void 0, function() {
    return void 0;
  });
}
function x64Add(m, n) {
  m = [m[0] >>> 16, m[0] & 65535, m[1] >>> 16, m[1] & 65535];
  n = [n[0] >>> 16, n[0] & 65535, n[1] >>> 16, n[1] & 65535];
  var o = [0, 0, 0, 0];
  o[3] += m[3] + n[3];
  o[2] += o[3] >>> 16;
  o[3] &= 65535;
  o[2] += m[2] + n[2];
  o[1] += o[2] >>> 16;
  o[2] &= 65535;
  o[1] += m[1] + n[1];
  o[0] += o[1] >>> 16;
  o[1] &= 65535;
  o[0] += m[0] + n[0];
  o[0] &= 65535;
  return [o[0] << 16 | o[1], o[2] << 16 | o[3]];
}
function x64Multiply(m, n) {
  m = [m[0] >>> 16, m[0] & 65535, m[1] >>> 16, m[1] & 65535];
  n = [n[0] >>> 16, n[0] & 65535, n[1] >>> 16, n[1] & 65535];
  var o = [0, 0, 0, 0];
  o[3] += m[3] * n[3];
  o[2] += o[3] >>> 16;
  o[3] &= 65535;
  o[2] += m[2] * n[3];
  o[1] += o[2] >>> 16;
  o[2] &= 65535;
  o[2] += m[3] * n[2];
  o[1] += o[2] >>> 16;
  o[2] &= 65535;
  o[1] += m[1] * n[3];
  o[0] += o[1] >>> 16;
  o[1] &= 65535;
  o[1] += m[2] * n[2];
  o[0] += o[1] >>> 16;
  o[1] &= 65535;
  o[1] += m[3] * n[1];
  o[0] += o[1] >>> 16;
  o[1] &= 65535;
  o[0] += m[0] * n[3] + m[1] * n[2] + m[2] * n[1] + m[3] * n[0];
  o[0] &= 65535;
  return [o[0] << 16 | o[1], o[2] << 16 | o[3]];
}
function x64Rotl(m, n) {
  n %= 64;
  if (n === 32) {
    return [m[1], m[0]];
  } else if (n < 32) {
    return [m[0] << n | m[1] >>> 32 - n, m[1] << n | m[0] >>> 32 - n];
  } else {
    n -= 32;
    return [m[1] << n | m[0] >>> 32 - n, m[0] << n | m[1] >>> 32 - n];
  }
}
function x64LeftShift(m, n) {
  n %= 64;
  if (n === 0) {
    return m;
  } else if (n < 32) {
    return [m[0] << n | m[1] >>> 32 - n, m[1] << n];
  } else {
    return [m[1] << n - 32, 0];
  }
}
function x64Xor(m, n) {
  return [m[0] ^ n[0], m[1] ^ n[1]];
}
function x64Fmix(h) {
  h = x64Xor(h, [0, h[0] >>> 1]);
  h = x64Multiply(h, [4283543511, 3981806797]);
  h = x64Xor(h, [0, h[0] >>> 1]);
  h = x64Multiply(h, [3301882366, 444984403]);
  h = x64Xor(h, [0, h[0] >>> 1]);
  return h;
}
function x64hash128(key, seed) {
  key = key || "";
  seed = seed || 0;
  var remainder = key.length % 16;
  var bytes = key.length - remainder;
  var h1 = [0, seed];
  var h2 = [0, seed];
  var k1 = [0, 0];
  var k2 = [0, 0];
  var c1 = [2277735313, 289559509];
  var c2 = [1291169091, 658871167];
  var i;
  for (i = 0; i < bytes; i = i + 16) {
    k1 = [
      key.charCodeAt(i + 4) & 255 | (key.charCodeAt(i + 5) & 255) << 8 | (key.charCodeAt(i + 6) & 255) << 16 | (key.charCodeAt(i + 7) & 255) << 24,
      key.charCodeAt(i) & 255 | (key.charCodeAt(i + 1) & 255) << 8 | (key.charCodeAt(i + 2) & 255) << 16 | (key.charCodeAt(i + 3) & 255) << 24
    ];
    k2 = [
      key.charCodeAt(i + 12) & 255 | (key.charCodeAt(i + 13) & 255) << 8 | (key.charCodeAt(i + 14) & 255) << 16 | (key.charCodeAt(i + 15) & 255) << 24,
      key.charCodeAt(i + 8) & 255 | (key.charCodeAt(i + 9) & 255) << 8 | (key.charCodeAt(i + 10) & 255) << 16 | (key.charCodeAt(i + 11) & 255) << 24
    ];
    k1 = x64Multiply(k1, c1);
    k1 = x64Rotl(k1, 31);
    k1 = x64Multiply(k1, c2);
    h1 = x64Xor(h1, k1);
    h1 = x64Rotl(h1, 27);
    h1 = x64Add(h1, h2);
    h1 = x64Add(x64Multiply(h1, [0, 5]), [0, 1390208809]);
    k2 = x64Multiply(k2, c2);
    k2 = x64Rotl(k2, 33);
    k2 = x64Multiply(k2, c1);
    h2 = x64Xor(h2, k2);
    h2 = x64Rotl(h2, 31);
    h2 = x64Add(h2, h1);
    h2 = x64Add(x64Multiply(h2, [0, 5]), [0, 944331445]);
  }
  k1 = [0, 0];
  k2 = [0, 0];
  switch (remainder) {
    case 15:
      k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 14)], 48));
    case 14:
      k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 13)], 40));
    case 13:
      k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 12)], 32));
    case 12:
      k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 11)], 24));
    case 11:
      k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 10)], 16));
    case 10:
      k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 9)], 8));
    case 9:
      k2 = x64Xor(k2, [0, key.charCodeAt(i + 8)]);
      k2 = x64Multiply(k2, c2);
      k2 = x64Rotl(k2, 33);
      k2 = x64Multiply(k2, c1);
      h2 = x64Xor(h2, k2);
    case 8:
      k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 7)], 56));
    case 7:
      k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 6)], 48));
    case 6:
      k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 5)], 40));
    case 5:
      k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 4)], 32));
    case 4:
      k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 3)], 24));
    case 3:
      k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 2)], 16));
    case 2:
      k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 1)], 8));
    case 1:
      k1 = x64Xor(k1, [0, key.charCodeAt(i)]);
      k1 = x64Multiply(k1, c1);
      k1 = x64Rotl(k1, 31);
      k1 = x64Multiply(k1, c2);
      h1 = x64Xor(h1, k1);
  }
  h1 = x64Xor(h1, [0, key.length]);
  h2 = x64Xor(h2, [0, key.length]);
  h1 = x64Add(h1, h2);
  h2 = x64Add(h2, h1);
  h1 = x64Fmix(h1);
  h2 = x64Fmix(h2);
  h1 = x64Add(h1, h2);
  h2 = x64Add(h2, h1);
  return ("00000000" + (h1[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (h1[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (h2[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (h2[1] >>> 0).toString(16)).slice(-8);
}
function errorToObject(error2) {
  var _a;
  return __assign({ name: error2.name, message: error2.message, stack: (_a = error2.stack) === null || _a === void 0 ? void 0 : _a.split("\n") }, error2);
}
function includes(haystack, needle) {
  for (var i = 0, l = haystack.length; i < l; ++i) {
    if (haystack[i] === needle) {
      return true;
    }
  }
  return false;
}
function excludes(haystack, needle) {
  return !includes(haystack, needle);
}
function toInt(value) {
  return parseInt(value);
}
function toFloat(value) {
  return parseFloat(value);
}
function replaceNaN(value, replacement) {
  return typeof value === "number" && isNaN(value) ? replacement : value;
}
function countTruthy(values) {
  return values.reduce(function(sum, value) {
    return sum + (value ? 1 : 0);
  }, 0);
}
function round(value, base) {
  if (base === void 0) {
    base = 1;
  }
  if (Math.abs(base) >= 1) {
    return Math.round(value / base) * base;
  } else {
    var counterBase = 1 / base;
    return Math.round(value * counterBase) / counterBase;
  }
}
function parseSimpleCssSelector(selector) {
  var _a, _b;
  var errorMessage = "Unexpected syntax '".concat(selector, "'");
  var tagMatch = /^\s*([a-z-]*)(.*)$/i.exec(selector);
  var tag = tagMatch[1] || void 0;
  var attributes = {};
  var partsRegex = /([.:#][\w-]+|\[.+?\])/gi;
  var addAttribute = function(name, value) {
    attributes[name] = attributes[name] || [];
    attributes[name].push(value);
  };
  for (; ; ) {
    var match = partsRegex.exec(tagMatch[2]);
    if (!match) {
      break;
    }
    var part = match[0];
    switch (part[0]) {
      case ".":
        addAttribute("class", part.slice(1));
        break;
      case "#":
        addAttribute("id", part.slice(1));
        break;
      case "[": {
        var attributeMatch = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(part);
        if (attributeMatch) {
          addAttribute(attributeMatch[1], (_b = (_a = attributeMatch[4]) !== null && _a !== void 0 ? _a : attributeMatch[5]) !== null && _b !== void 0 ? _b : "");
        } else {
          throw new Error(errorMessage);
        }
        break;
      }
      default:
        throw new Error(errorMessage);
    }
  }
  return [tag, attributes];
}
function ensureErrorWithMessage(error2) {
  return error2 && typeof error2 === "object" && "message" in error2 ? error2 : { message: error2 };
}
function isFinalResultLoaded(loadResult) {
  return typeof loadResult !== "function";
}
function loadSource(source, sourceOptions) {
  var sourceLoadPromise = new Promise(function(resolveLoad) {
    var loadStartTime = Date.now();
    awaitIfAsync(source.bind(null, sourceOptions), function() {
      var loadArgs = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        loadArgs[_i] = arguments[_i];
      }
      var loadDuration = Date.now() - loadStartTime;
      if (!loadArgs[0]) {
        return resolveLoad(function() {
          return { error: ensureErrorWithMessage(loadArgs[1]), duration: loadDuration };
        });
      }
      var loadResult = loadArgs[1];
      if (isFinalResultLoaded(loadResult)) {
        return resolveLoad(function() {
          return { value: loadResult, duration: loadDuration };
        });
      }
      resolveLoad(function() {
        return new Promise(function(resolveGet) {
          var getStartTime = Date.now();
          awaitIfAsync(loadResult, function() {
            var getArgs = [];
            for (var _i2 = 0; _i2 < arguments.length; _i2++) {
              getArgs[_i2] = arguments[_i2];
            }
            var duration = loadDuration + Date.now() - getStartTime;
            if (!getArgs[0]) {
              return resolveGet({ error: ensureErrorWithMessage(getArgs[1]), duration });
            }
            resolveGet({ value: getArgs[1], duration });
          });
        });
      });
    });
  });
  suppressUnhandledRejectionWarning(sourceLoadPromise);
  return function getComponent() {
    return sourceLoadPromise.then(function(finalizeSource) {
      return finalizeSource();
    });
  };
}
function loadSources(sources2, sourceOptions, excludeSources) {
  var includedSources = Object.keys(sources2).filter(function(sourceKey) {
    return excludes(excludeSources, sourceKey);
  });
  var sourceGetters = Array(includedSources.length);
  forEachWithBreaks(includedSources, function(sourceKey, index2) {
    sourceGetters[index2] = loadSource(sources2[sourceKey], sourceOptions);
  });
  return function getComponents() {
    return __awaiter(this, void 0, void 0, function() {
      var components, _i, includedSources_1, sourceKey, componentPromises, _loop_1, state_1;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            components = {};
            for (_i = 0, includedSources_1 = includedSources; _i < includedSources_1.length; _i++) {
              sourceKey = includedSources_1[_i];
              components[sourceKey] = void 0;
            }
            componentPromises = Array(includedSources.length);
            _loop_1 = function() {
              var hasAllComponentPromises;
              return __generator(this, function(_b) {
                switch (_b.label) {
                  case 0:
                    hasAllComponentPromises = true;
                    return [4, forEachWithBreaks(includedSources, function(sourceKey2, index2) {
                      if (!componentPromises[index2]) {
                        if (sourceGetters[index2]) {
                          var componentPromise = sourceGetters[index2]().then(function(component) {
                            return components[sourceKey2] = component;
                          });
                          suppressUnhandledRejectionWarning(componentPromise);
                          componentPromises[index2] = componentPromise;
                        } else {
                          hasAllComponentPromises = false;
                        }
                      }
                    })];
                  case 1:
                    _b.sent();
                    if (hasAllComponentPromises) {
                      return [2, "break"];
                    }
                    return [4, wait(1)];
                  case 2:
                    _b.sent();
                    return [
                      2
                      /*return*/
                    ];
                }
              });
            };
            _a.label = 1;
          case 1:
            return [5, _loop_1()];
          case 2:
            state_1 = _a.sent();
            if (state_1 === "break")
              return [3, 4];
            _a.label = 3;
          case 3:
            return [3, 1];
          case 4:
            return [4, Promise.all(componentPromises)];
          case 5:
            _a.sent();
            return [2, components];
        }
      });
    });
  };
}
function isTrident() {
  var w = window;
  var n = navigator;
  return countTruthy([
    "MSCSSMatrix" in w,
    "msSetImmediate" in w,
    "msIndexedDB" in w,
    "msMaxTouchPoints" in n,
    "msPointerEnabled" in n
  ]) >= 4;
}
function isEdgeHTML() {
  var w = window;
  var n = navigator;
  return countTruthy(["msWriteProfilerMark" in w, "MSStream" in w, "msLaunchUri" in n, "msSaveBlob" in n]) >= 3 && !isTrident();
}
function isChromium() {
  var w = window;
  var n = navigator;
  return countTruthy([
    "webkitPersistentStorage" in n,
    "webkitTemporaryStorage" in n,
    n.vendor.indexOf("Google") === 0,
    "webkitResolveLocalFileSystemURL" in w,
    "BatteryManager" in w,
    "webkitMediaStream" in w,
    "webkitSpeechGrammar" in w
  ]) >= 5;
}
function isWebKit() {
  var w = window;
  var n = navigator;
  return countTruthy([
    "ApplePayError" in w,
    "CSSPrimitiveValue" in w,
    "Counter" in w,
    n.vendor.indexOf("Apple") === 0,
    "getStorageUpdates" in n,
    "WebKitMediaKeys" in w
  ]) >= 4;
}
function isDesktopSafari() {
  var w = window;
  return countTruthy([
    "safari" in w,
    !("DeviceMotionEvent" in w),
    !("ongestureend" in w),
    !("standalone" in navigator)
  ]) >= 3;
}
function isGecko() {
  var _a, _b;
  var w = window;
  return countTruthy([
    "buildID" in navigator,
    "MozAppearance" in ((_b = (_a = document.documentElement) === null || _a === void 0 ? void 0 : _a.style) !== null && _b !== void 0 ? _b : {}),
    "onmozfullscreenchange" in w,
    "mozInnerScreenX" in w,
    "CSSMozDocumentRule" in w,
    "CanvasCaptureMediaStream" in w
  ]) >= 4;
}
function isChromium86OrNewer() {
  var w = window;
  return countTruthy([
    !("MediaSettingsRange" in w),
    "RTCEncodedAudioFrame" in w,
    "" + w.Intl === "[object Intl]",
    "" + w.Reflect === "[object Reflect]"
  ]) >= 3;
}
function isWebKit606OrNewer() {
  var w = window;
  return countTruthy([
    "DOMRectList" in w,
    "RTCPeerConnectionIceEvent" in w,
    "SVGGeometryElement" in w,
    "ontransitioncancel" in w
  ]) >= 3;
}
function isIPad() {
  if (navigator.platform === "iPad") {
    return true;
  }
  var s = screen;
  var screenRatio = s.width / s.height;
  return countTruthy([
    "MediaSource" in window,
    !!Element.prototype.webkitRequestFullscreen,
    // iPhone 4S that runs iOS 9 matches this. But it won't match the criteria above, so it won't be detected as iPad.
    screenRatio > 0.65 && screenRatio < 1.53
  ]) >= 2;
}
function getFullscreenElement() {
  var d = document;
  return d.fullscreenElement || d.msFullscreenElement || d.mozFullScreenElement || d.webkitFullscreenElement || null;
}
function exitFullscreen() {
  var d = document;
  return (d.exitFullscreen || d.msExitFullscreen || d.mozCancelFullScreen || d.webkitExitFullscreen).call(d);
}
function isAndroid() {
  var isItChromium = isChromium();
  var isItGecko = isGecko();
  if (!isItChromium && !isItGecko) {
    return false;
  }
  var w = window;
  return countTruthy([
    "onorientationchange" in w,
    "orientation" in w,
    isItChromium && !("SharedWorker" in w),
    isItGecko && /android/i.test(navigator.appVersion)
  ]) >= 2;
}
function getAudioFingerprint() {
  var w = window;
  var AudioContext = w.OfflineAudioContext || w.webkitOfflineAudioContext;
  if (!AudioContext) {
    return -2;
  }
  if (doesCurrentBrowserSuspendAudioContext()) {
    return -1;
  }
  var hashFromIndex = 4500;
  var hashToIndex = 5e3;
  var context = new AudioContext(1, hashToIndex, 44100);
  var oscillator = context.createOscillator();
  oscillator.type = "triangle";
  oscillator.frequency.value = 1e4;
  var compressor = context.createDynamicsCompressor();
  compressor.threshold.value = -50;
  compressor.knee.value = 40;
  compressor.ratio.value = 12;
  compressor.attack.value = 0;
  compressor.release.value = 0.25;
  oscillator.connect(compressor);
  compressor.connect(context.destination);
  oscillator.start(0);
  var _a = startRenderingAudio(context), renderPromise = _a[0], finishRendering = _a[1];
  var fingerprintPromise = renderPromise.then(function(buffer) {
    return getHash(buffer.getChannelData(0).subarray(hashFromIndex));
  }, function(error2) {
    if (error2.name === "timeout" || error2.name === "suspended") {
      return -3;
    }
    throw error2;
  });
  suppressUnhandledRejectionWarning(fingerprintPromise);
  return function() {
    finishRendering();
    return fingerprintPromise;
  };
}
function doesCurrentBrowserSuspendAudioContext() {
  return isWebKit() && !isDesktopSafari() && !isWebKit606OrNewer();
}
function startRenderingAudio(context) {
  var renderTryMaxCount = 3;
  var renderRetryDelay = 500;
  var runningMaxAwaitTime = 500;
  var runningSufficientTime = 5e3;
  var finalize = function() {
    return void 0;
  };
  var resultPromise = new Promise(function(resolve, reject) {
    var isFinalized = false;
    var renderTryCount = 0;
    var startedRunningAt = 0;
    context.oncomplete = function(event) {
      return resolve(event.renderedBuffer);
    };
    var startRunningTimeout = function() {
      setTimeout(function() {
        return reject(makeInnerError(
          "timeout"
          /* InnerErrorName.Timeout */
        ));
      }, Math.min(runningMaxAwaitTime, startedRunningAt + runningSufficientTime - Date.now()));
    };
    var tryRender = function() {
      try {
        var renderingPromise = context.startRendering();
        if (isPromise(renderingPromise)) {
          suppressUnhandledRejectionWarning(renderingPromise);
        }
        switch (context.state) {
          case "running":
            startedRunningAt = Date.now();
            if (isFinalized) {
              startRunningTimeout();
            }
            break;
          case "suspended":
            if (!document.hidden) {
              renderTryCount++;
            }
            if (isFinalized && renderTryCount >= renderTryMaxCount) {
              reject(makeInnerError(
                "suspended"
                /* InnerErrorName.Suspended */
              ));
            } else {
              setTimeout(tryRender, renderRetryDelay);
            }
            break;
        }
      } catch (error2) {
        reject(error2);
      }
    };
    tryRender();
    finalize = function() {
      if (!isFinalized) {
        isFinalized = true;
        if (startedRunningAt > 0) {
          startRunningTimeout();
        }
      }
    };
  });
  return [resultPromise, finalize];
}
function getHash(signal) {
  var hash = 0;
  for (var i = 0; i < signal.length; ++i) {
    hash += Math.abs(signal[i]);
  }
  return hash;
}
function makeInnerError(name) {
  var error2 = new Error(name);
  error2.name = name;
  return error2;
}
function withIframe(action, initialHtml, domPollInterval) {
  var _a, _b, _c;
  if (domPollInterval === void 0) {
    domPollInterval = 50;
  }
  return __awaiter(this, void 0, void 0, function() {
    var d, iframe;
    return __generator(this, function(_d) {
      switch (_d.label) {
        case 0:
          d = document;
          _d.label = 1;
        case 1:
          if (!!d.body)
            return [3, 3];
          return [4, wait(domPollInterval)];
        case 2:
          _d.sent();
          return [3, 1];
        case 3:
          iframe = d.createElement("iframe");
          _d.label = 4;
        case 4:
          _d.trys.push([4, , 10, 11]);
          return [4, new Promise(function(_resolve, _reject) {
            var isComplete = false;
            var resolve = function() {
              isComplete = true;
              _resolve();
            };
            var reject = function(error2) {
              isComplete = true;
              _reject(error2);
            };
            iframe.onload = resolve;
            iframe.onerror = reject;
            var style2 = iframe.style;
            style2.setProperty("display", "block", "important");
            style2.position = "absolute";
            style2.top = "0";
            style2.left = "0";
            style2.visibility = "hidden";
            if (initialHtml && "srcdoc" in iframe) {
              iframe.srcdoc = initialHtml;
            } else {
              iframe.src = "about:blank";
            }
            d.body.appendChild(iframe);
            var checkReadyState = function() {
              var _a2, _b2;
              if (isComplete) {
                return;
              }
              if (((_b2 = (_a2 = iframe.contentWindow) === null || _a2 === void 0 ? void 0 : _a2.document) === null || _b2 === void 0 ? void 0 : _b2.readyState) === "complete") {
                resolve();
              } else {
                setTimeout(checkReadyState, 10);
              }
            };
            checkReadyState();
          })];
        case 5:
          _d.sent();
          _d.label = 6;
        case 6:
          if (!!((_b = (_a = iframe.contentWindow) === null || _a === void 0 ? void 0 : _a.document) === null || _b === void 0 ? void 0 : _b.body))
            return [3, 8];
          return [4, wait(domPollInterval)];
        case 7:
          _d.sent();
          return [3, 6];
        case 8:
          return [4, action(iframe, iframe.contentWindow)];
        case 9:
          return [2, _d.sent()];
        case 10:
          (_c = iframe.parentNode) === null || _c === void 0 ? void 0 : _c.removeChild(iframe);
          return [
            7
            /*endfinally*/
          ];
        case 11:
          return [
            2
            /*return*/
          ];
      }
    });
  });
}
function selectorToElement(selector) {
  var _a = parseSimpleCssSelector(selector), tag = _a[0], attributes = _a[1];
  var element = document.createElement(tag !== null && tag !== void 0 ? tag : "div");
  for (var _i = 0, _b = Object.keys(attributes); _i < _b.length; _i++) {
    var name_1 = _b[_i];
    var value = attributes[name_1].join(" ");
    if (name_1 === "style") {
      addStyleString(element.style, value);
    } else {
      element.setAttribute(name_1, value);
    }
  }
  return element;
}
function addStyleString(style2, source) {
  for (var _i = 0, _a = source.split(";"); _i < _a.length; _i++) {
    var property = _a[_i];
    var match = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(property);
    if (match) {
      var name_2 = match[1], value = match[2], priority = match[4];
      style2.setProperty(name_2, value, priority || "");
    }
  }
}
var testString = "mmMwWLliI0O&1";
var textSize = "48px";
var baseFonts = ["monospace", "sans-serif", "serif"];
var fontList = [
  // This is android-specific font from "Roboto" family
  "sans-serif-thin",
  "ARNO PRO",
  "Agency FB",
  "Arabic Typesetting",
  "Arial Unicode MS",
  "AvantGarde Bk BT",
  "BankGothic Md BT",
  "Batang",
  "Bitstream Vera Sans Mono",
  "Calibri",
  "Century",
  "Century Gothic",
  "Clarendon",
  "EUROSTILE",
  "Franklin Gothic",
  "Futura Bk BT",
  "Futura Md BT",
  "GOTHAM",
  "Gill Sans",
  "HELV",
  "Haettenschweiler",
  "Helvetica Neue",
  "Humanst521 BT",
  "Leelawadee",
  "Letter Gothic",
  "Levenim MT",
  "Lucida Bright",
  "Lucida Sans",
  "Menlo",
  "MS Mincho",
  "MS Outlook",
  "MS Reference Specialty",
  "MS UI Gothic",
  "MT Extra",
  "MYRIAD PRO",
  "Marlett",
  "Meiryo UI",
  "Microsoft Uighur",
  "Minion Pro",
  "Monotype Corsiva",
  "PMingLiU",
  "Pristina",
  "SCRIPTINA",
  "Segoe UI Light",
  "Serifa",
  "SimHei",
  "Small Fonts",
  "Staccato222 BT",
  "TRAJAN PRO",
  "Univers CE 55 Medium",
  "Vrinda",
  "ZWAdobeF"
];
function getFonts() {
  return withIframe(function(_, _a) {
    var document2 = _a.document;
    var holder = document2.body;
    holder.style.fontSize = textSize;
    var spansContainer = document2.createElement("div");
    var defaultWidth = {};
    var defaultHeight = {};
    var createSpan = function(fontFamily) {
      var span = document2.createElement("span");
      var style2 = span.style;
      style2.position = "absolute";
      style2.top = "0";
      style2.left = "0";
      style2.fontFamily = fontFamily;
      span.textContent = testString;
      spansContainer.appendChild(span);
      return span;
    };
    var createSpanWithFonts = function(fontToDetect, baseFont) {
      return createSpan("'".concat(fontToDetect, "',").concat(baseFont));
    };
    var initializeBaseFontsSpans = function() {
      return baseFonts.map(createSpan);
    };
    var initializeFontsSpans = function() {
      var spans = {};
      var _loop_1 = function(font2) {
        spans[font2] = baseFonts.map(function(baseFont) {
          return createSpanWithFonts(font2, baseFont);
        });
      };
      for (var _i = 0, fontList_1 = fontList; _i < fontList_1.length; _i++) {
        var font = fontList_1[_i];
        _loop_1(font);
      }
      return spans;
    };
    var isFontAvailable = function(fontSpans) {
      return baseFonts.some(function(baseFont, baseFontIndex) {
        return fontSpans[baseFontIndex].offsetWidth !== defaultWidth[baseFont] || fontSpans[baseFontIndex].offsetHeight !== defaultHeight[baseFont];
      });
    };
    var baseFontsSpans = initializeBaseFontsSpans();
    var fontsSpans = initializeFontsSpans();
    holder.appendChild(spansContainer);
    for (var index2 = 0; index2 < baseFonts.length; index2++) {
      defaultWidth[baseFonts[index2]] = baseFontsSpans[index2].offsetWidth;
      defaultHeight[baseFonts[index2]] = baseFontsSpans[index2].offsetHeight;
    }
    return fontList.filter(function(font) {
      return isFontAvailable(fontsSpans[font]);
    });
  });
}
function getPlugins() {
  var rawPlugins = navigator.plugins;
  if (!rawPlugins) {
    return void 0;
  }
  var plugins = [];
  for (var i = 0; i < rawPlugins.length; ++i) {
    var plugin = rawPlugins[i];
    if (!plugin) {
      continue;
    }
    var mimeTypes = [];
    for (var j = 0; j < plugin.length; ++j) {
      var mimeType = plugin[j];
      mimeTypes.push({
        type: mimeType.type,
        suffixes: mimeType.suffixes
      });
    }
    plugins.push({
      name: plugin.name,
      description: plugin.description,
      mimeTypes
    });
  }
  return plugins;
}
function getCanvasFingerprint() {
  var winding = false;
  var geometry;
  var text;
  var _a = makeCanvasContext(), canvas = _a[0], context = _a[1];
  if (!isSupported(canvas, context)) {
    geometry = text = "";
  } else {
    winding = doesSupportWinding(context);
    renderTextImage(canvas, context);
    var textImage1 = canvasToString(canvas);
    var textImage2 = canvasToString(canvas);
    if (textImage1 !== textImage2) {
      geometry = text = "unstable";
    } else {
      text = textImage1;
      renderGeometryImage(canvas, context);
      geometry = canvasToString(canvas);
    }
  }
  return { winding, geometry, text };
}
function makeCanvasContext() {
  var canvas = document.createElement("canvas");
  canvas.width = 1;
  canvas.height = 1;
  return [canvas, canvas.getContext("2d")];
}
function isSupported(canvas, context) {
  return !!(context && canvas.toDataURL);
}
function doesSupportWinding(context) {
  context.rect(0, 0, 10, 10);
  context.rect(2, 2, 6, 6);
  return !context.isPointInPath(5, 5, "evenodd");
}
function renderTextImage(canvas, context) {
  canvas.width = 240;
  canvas.height = 60;
  context.textBaseline = "alphabetic";
  context.fillStyle = "#f60";
  context.fillRect(100, 1, 62, 20);
  context.fillStyle = "#069";
  context.font = '11pt "Times New Roman"';
  var printedText = "Cwm fjordbank gly ".concat(
    String.fromCharCode(55357, 56835)
    /* 😃 */
  );
  context.fillText(printedText, 2, 15);
  context.fillStyle = "rgba(102, 204, 0, 0.2)";
  context.font = "18pt Arial";
  context.fillText(printedText, 4, 45);
}
function renderGeometryImage(canvas, context) {
  canvas.width = 122;
  canvas.height = 110;
  context.globalCompositeOperation = "multiply";
  for (var _i = 0, _a = [
    ["#f2f", 40, 40],
    ["#2ff", 80, 40],
    ["#ff2", 60, 80]
  ]; _i < _a.length; _i++) {
    var _b = _a[_i], color = _b[0], x = _b[1], y = _b[2];
    context.fillStyle = color;
    context.beginPath();
    context.arc(x, y, 40, 0, Math.PI * 2, true);
    context.closePath();
    context.fill();
  }
  context.fillStyle = "#f9c";
  context.arc(60, 60, 60, 0, Math.PI * 2, true);
  context.arc(60, 60, 20, 0, Math.PI * 2, true);
  context.fill("evenodd");
}
function canvasToString(canvas) {
  return canvas.toDataURL();
}
function getTouchSupport() {
  var n = navigator;
  var maxTouchPoints = 0;
  var touchEvent;
  if (n.maxTouchPoints !== void 0) {
    maxTouchPoints = toInt(n.maxTouchPoints);
  } else if (n.msMaxTouchPoints !== void 0) {
    maxTouchPoints = n.msMaxTouchPoints;
  }
  try {
    document.createEvent("TouchEvent");
    touchEvent = true;
  } catch (_a) {
    touchEvent = false;
  }
  var touchStart = "ontouchstart" in window;
  return {
    maxTouchPoints,
    touchEvent,
    touchStart
  };
}
function getOsCpu() {
  return navigator.oscpu;
}
function getLanguages() {
  var n = navigator;
  var result = [];
  var language = n.language || n.userLanguage || n.browserLanguage || n.systemLanguage;
  if (language !== void 0) {
    result.push([language]);
  }
  if (Array.isArray(n.languages)) {
    if (!(isChromium() && isChromium86OrNewer())) {
      result.push(n.languages);
    }
  } else if (typeof n.languages === "string") {
    var languages = n.languages;
    if (languages) {
      result.push(languages.split(","));
    }
  }
  return result;
}
function getColorDepth() {
  return window.screen.colorDepth;
}
function getDeviceMemory() {
  return replaceNaN(toFloat(navigator.deviceMemory), void 0);
}
function getScreenResolution() {
  var s = screen;
  var parseDimension = function(value) {
    return replaceNaN(toInt(value), null);
  };
  var dimensions = [parseDimension(s.width), parseDimension(s.height)];
  dimensions.sort().reverse();
  return dimensions;
}
var screenFrameCheckInterval = 2500;
var roundingPrecision = 10;
var screenFrameBackup;
var screenFrameSizeTimeoutId;
function watchScreenFrame() {
  if (screenFrameSizeTimeoutId !== void 0) {
    return;
  }
  var checkScreenFrame = function() {
    var frameSize = getCurrentScreenFrame();
    if (isFrameSizeNull(frameSize)) {
      screenFrameSizeTimeoutId = setTimeout(checkScreenFrame, screenFrameCheckInterval);
    } else {
      screenFrameBackup = frameSize;
      screenFrameSizeTimeoutId = void 0;
    }
  };
  checkScreenFrame();
}
function getScreenFrame() {
  var _this = this;
  watchScreenFrame();
  return function() {
    return __awaiter(_this, void 0, void 0, function() {
      var frameSize;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            frameSize = getCurrentScreenFrame();
            if (!isFrameSizeNull(frameSize))
              return [3, 2];
            if (screenFrameBackup) {
              return [2, __spreadArray([], screenFrameBackup, true)];
            }
            if (!getFullscreenElement())
              return [3, 2];
            return [4, exitFullscreen()];
          case 1:
            _a.sent();
            frameSize = getCurrentScreenFrame();
            _a.label = 2;
          case 2:
            if (!isFrameSizeNull(frameSize)) {
              screenFrameBackup = frameSize;
            }
            return [2, frameSize];
        }
      });
    });
  };
}
function getRoundedScreenFrame() {
  var _this = this;
  var screenFrameGetter = getScreenFrame();
  return function() {
    return __awaiter(_this, void 0, void 0, function() {
      var frameSize, processSize;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            return [4, screenFrameGetter()];
          case 1:
            frameSize = _a.sent();
            processSize = function(sideSize) {
              return sideSize === null ? null : round(sideSize, roundingPrecision);
            };
            return [2, [processSize(frameSize[0]), processSize(frameSize[1]), processSize(frameSize[2]), processSize(frameSize[3])]];
        }
      });
    });
  };
}
function getCurrentScreenFrame() {
  var s = screen;
  return [
    replaceNaN(toFloat(s.availTop), null),
    replaceNaN(toFloat(s.width) - toFloat(s.availWidth) - replaceNaN(toFloat(s.availLeft), 0), null),
    replaceNaN(toFloat(s.height) - toFloat(s.availHeight) - replaceNaN(toFloat(s.availTop), 0), null),
    replaceNaN(toFloat(s.availLeft), null)
  ];
}
function isFrameSizeNull(frameSize) {
  for (var i = 0; i < 4; ++i) {
    if (frameSize[i]) {
      return false;
    }
  }
  return true;
}
function getHardwareConcurrency() {
  return replaceNaN(toInt(navigator.hardwareConcurrency), void 0);
}
function getTimezone() {
  var _a;
  var DateTimeFormat = (_a = window.Intl) === null || _a === void 0 ? void 0 : _a.DateTimeFormat;
  if (DateTimeFormat) {
    var timezone = new DateTimeFormat().resolvedOptions().timeZone;
    if (timezone) {
      return timezone;
    }
  }
  var offset = -getTimezoneOffset();
  return "UTC".concat(offset >= 0 ? "+" : "").concat(Math.abs(offset));
}
function getTimezoneOffset() {
  var currentYear = new Date().getFullYear();
  return Math.max(
    // `getTimezoneOffset` returns a number as a string in some unidentified cases
    toFloat(new Date(currentYear, 0, 1).getTimezoneOffset()),
    toFloat(new Date(currentYear, 6, 1).getTimezoneOffset())
  );
}
function getSessionStorage() {
  try {
    return !!window.sessionStorage;
  } catch (error2) {
    return true;
  }
}
function getLocalStorage() {
  try {
    return !!window.localStorage;
  } catch (e) {
    return true;
  }
}
function getIndexedDB() {
  if (isTrident() || isEdgeHTML()) {
    return void 0;
  }
  try {
    return !!window.indexedDB;
  } catch (e) {
    return true;
  }
}
function getOpenDatabase() {
  return !!window.openDatabase;
}
function getCpuClass() {
  return navigator.cpuClass;
}
function getPlatform() {
  var platform = navigator.platform;
  if (platform === "MacIntel") {
    if (isWebKit() && !isDesktopSafari()) {
      return isIPad() ? "iPad" : "iPhone";
    }
  }
  return platform;
}
function getVendor() {
  return navigator.vendor || "";
}
function getVendorFlavors() {
  var flavors = [];
  for (var _i = 0, _a = [
    // Blink and some browsers on iOS
    "chrome",
    // Safari on macOS
    "safari",
    // Chrome on iOS (checked in 85 on 13 and 87 on 14)
    "__crWeb",
    "__gCrWeb",
    // Yandex Browser on iOS, macOS and Android (checked in 21.2 on iOS 14, macOS and Android)
    "yandex",
    // Yandex Browser on iOS (checked in 21.2 on 14)
    "__yb",
    "__ybro",
    // Firefox on iOS (checked in 32 on 14)
    "__firefox__",
    // Edge on iOS (checked in 46 on 14)
    "__edgeTrackingPreventionStatistics",
    "webkit",
    // Opera Touch on iOS (checked in 2.6 on 14)
    "oprt",
    // Samsung Internet on Android (checked in 11.1)
    "samsungAr",
    // UC Browser on Android (checked in 12.10 and 13.0)
    "ucweb",
    "UCShellJava",
    // Puffin on Android (checked in 9.0)
    "puffinDevice"
    // UC on iOS and Opera on Android have no specific global variables
    // Edge for Android isn't checked
  ]; _i < _a.length; _i++) {
    var key = _a[_i];
    var value = window[key];
    if (value && typeof value === "object") {
      flavors.push(key);
    }
  }
  return flavors.sort();
}
function areCookiesEnabled() {
  var d = document;
  try {
    d.cookie = "cookietest=1; SameSite=Strict;";
    var result = d.cookie.indexOf("cookietest=") !== -1;
    d.cookie = "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT";
    return result;
  } catch (e) {
    return false;
  }
}
function getFilters() {
  var fromB64 = atob;
  return {
    abpIndo: [
      "#Iklan-Melayang",
      "#Kolom-Iklan-728",
      "#SidebarIklan-wrapper",
      fromB64("YVt0aXRsZT0iN25hZ2EgcG9rZXIiIGld"),
      '[title="ALIENBOLA" i]'
    ],
    abpvn: [
      "#quangcaomb",
      fromB64("Lmlvc0Fkc2lvc0Fkcy1sYXlvdXQ="),
      ".quangcao",
      fromB64("W2hyZWZePSJodHRwczovL3I4OC52bi8iXQ=="),
      fromB64("W2hyZWZePSJodHRwczovL3piZXQudm4vIl0=")
    ],
    adBlockFinland: [
      ".mainostila",
      fromB64("LnNwb25zb3JpdA=="),
      ".ylamainos",
      fromB64("YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd"),
      fromB64("YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd")
    ],
    adBlockPersian: ["#navbar_notice_50", ".kadr", 'TABLE[width="140px"]', "#divAgahi", fromB64("I2FkMl9pbmxpbmU=")],
    adBlockWarningRemoval: [
      "#adblock-honeypot",
      ".adblocker-root",
      ".wp_adblock_detect",
      fromB64("LmhlYWRlci1ibG9ja2VkLWFk"),
      fromB64("I2FkX2Jsb2NrZXI=")
    ],
    adGuardAnnoyances: [
      'amp-embed[type="zen"]',
      ".hs-sosyal",
      "#cookieconsentdiv",
      'div[class^="app_gdpr"]',
      ".as-oil"
    ],
    adGuardBase: [
      ".BetterJsPopOverlay",
      fromB64("I2FkXzMwMFgyNTA="),
      fromB64("I2Jhbm5lcmZsb2F0MjI="),
      fromB64("I2FkLWJhbm5lcg=="),
      fromB64("I2NhbXBhaWduLWJhbm5lcg==")
    ],
    adGuardChinese: [
      fromB64("LlppX2FkX2FfSA=="),
      fromB64("YVtocmVmKj0iL29kMDA1LmNvbSJd"),
      fromB64("YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd"),
      ".qq_nr_lad",
      "#widget-quan"
    ],
    adGuardFrench: [
      fromB64("I2Jsb2NrLXZpZXdzLWFkcy1zaWRlYmFyLWJsb2NrLWJsb2Nr"),
      "#pavePub",
      fromB64("LmFkLWRlc2t0b3AtcmVjdGFuZ2xl"),
      ".mobile_adhesion",
      ".widgetadv"
    ],
    adGuardGerman: [
      fromB64("LmJhbm5lcml0ZW13ZXJidW5nX2hlYWRfMQ=="),
      fromB64("LmJveHN0YXJ0d2VyYnVuZw=="),
      fromB64("LndlcmJ1bmcz"),
      fromB64("YVtocmVmXj0iaHR0cDovL3d3dy5laXMuZGUvaW5kZXgucGh0bWw/cmVmaWQ9Il0="),
      fromB64("YVtocmVmXj0iaHR0cHM6Ly93d3cudGlwaWNvLmNvbS8/YWZmaWxpYXRlSWQ9Il0=")
    ],
    adGuardJapanese: [
      "#kauli_yad_1",
      fromB64("YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0="),
      fromB64("Ll9wb3BJbl9pbmZpbml0ZV9hZA=="),
      fromB64("LmFkZ29vZ2xl"),
      fromB64("LmFkX3JlZ3VsYXIz")
    ],
    adGuardMobile: [
      fromB64("YW1wLWF1dG8tYWRz"),
      fromB64("LmFtcF9hZA=="),
      'amp-embed[type="24smi"]',
      "#mgid_iframe1",
      fromB64("I2FkX2ludmlld19hcmVh")
    ],
    adGuardRussian: [
      fromB64("YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0="),
      fromB64("LnJlY2xhbWE="),
      'div[id^="smi2adblock"]',
      fromB64("ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd"),
      fromB64("I2FkX3NxdWFyZQ==")
    ],
    adGuardSocial: [
      fromB64("YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0="),
      fromB64("YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0="),
      ".etsy-tweet",
      "#inlineShare",
      ".popup-social"
    ],
    adGuardSpanishPortuguese: [
      "#barraPublicidade",
      "#Publicidade",
      "#publiEspecial",
      "#queTooltip",
      fromB64("W2hyZWZePSJodHRwOi8vYWRzLmdsaXNwYS5jb20vIl0=")
    ],
    adGuardTrackingProtection: [
      "#qoo-counter",
      fromB64("YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ=="),
      fromB64("YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0="),
      fromB64("YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ=="),
      "#top100counter"
    ],
    adGuardTurkish: [
      "#backkapat",
      fromB64("I3Jla2xhbWk="),
      fromB64("YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0="),
      fromB64("YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd"),
      fromB64("YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ==")
    ],
    bulgarian: [
      fromB64("dGQjZnJlZW5ldF90YWJsZV9hZHM="),
      "#ea_intext_div",
      ".lapni-pop-over",
      "#xenium_hot_offers",
      fromB64("I25ld0Fk")
    ],
    easyList: [
      fromB64("I0FEX0NPTlRST0xfMjg="),
      fromB64("LnNlY29uZC1wb3N0LWFkcy13cmFwcGVy"),
      ".universalboxADVBOX03",
      fromB64("LmFkdmVydGlzZW1lbnQtNzI4eDkw"),
      fromB64("LnNxdWFyZV9hZHM=")
    ],
    easyListChina: [
      fromB64("YVtocmVmKj0iLndlbnNpeHVldGFuZy5jb20vIl0="),
      fromB64("LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ=="),
      fromB64("LmZyb250cGFnZUFkdk0="),
      "#taotaole",
      "#aafoot.top_box"
    ],
    easyListCookie: [
      "#AdaCompliance.app-notice",
      ".text-center.rgpd",
      ".panel--cookie",
      ".js-cookies-andromeda",
      ".elxtr-consent"
    ],
    easyListCzechSlovak: [
      "#onlajny-stickers",
      fromB64("I3Jla2xhbW5pLWJveA=="),
      fromB64("LnJla2xhbWEtbWVnYWJvYXJk"),
      ".sklik",
      fromB64("W2lkXj0ic2tsaWtSZWtsYW1hIl0=")
    ],
    easyListDutch: [
      fromB64("I2FkdmVydGVudGll"),
      fromB64("I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw=="),
      ".adstekst",
      fromB64("YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0="),
      "#semilo-lrectangle"
    ],
    easyListGermany: [
      fromB64("I0FkX1dpbjJkYXk="),
      fromB64("I3dlcmJ1bmdzYm94MzAw"),
      fromB64("YVtocmVmXj0iaHR0cDovL3d3dy5yb3RsaWNodGthcnRlaS5jb20vP3NjPSJd"),
      fromB64("I3dlcmJ1bmdfd2lkZXNreXNjcmFwZXJfc2NyZWVu"),
      fromB64("YVtocmVmXj0iaHR0cDovL2xhbmRpbmcucGFya3BsYXR6a2FydGVpLmNvbS8/YWc9Il0=")
    ],
    easyListItaly: [
      fromB64("LmJveF9hZHZfYW5udW5jaQ=="),
      ".sb-box-pubbliredazionale",
      fromB64("YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd"),
      fromB64("YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd"),
      fromB64("YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ==")
    ],
    easyListLithuania: [
      fromB64("LnJla2xhbW9zX3RhcnBhcw=="),
      fromB64("LnJla2xhbW9zX251b3JvZG9z"),
      fromB64("aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd"),
      fromB64("aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd"),
      fromB64("aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd")
    ],
    estonian: [fromB64("QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==")],
    fanboyAnnoyances: [
      "#feedback-tab",
      "#taboola-below-article",
      ".feedburnerFeedBlock",
      ".widget-feedburner-counter",
      '[title="Subscribe to our blog"]'
    ],
    fanboyAntiFacebook: [".util-bar-module-firefly-visible"],
    fanboyEnhancedTrackers: [
      ".open.pushModal",
      "#issuem-leaky-paywall-articles-zero-remaining-nag",
      "#sovrn_container",
      'div[class$="-hide"][zoompage-fontsize][style="display: block;"]',
      ".BlockNag__Card"
    ],
    fanboySocial: [
      ".td-tags-and-social-wrapper-box",
      ".twitterContainer",
      ".youtube-social",
      'a[title^="Like us on Facebook"]',
      'img[alt^="Share on Digg"]'
    ],
    frellwitSwedish: [
      fromB64("YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ=="),
      fromB64("YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ=="),
      "article.category-samarbete",
      fromB64("ZGl2LmhvbGlkQWRz"),
      "ul.adsmodern"
    ],
    greekAdBlock: [
      fromB64("QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd"),
      fromB64("QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ=="),
      fromB64("QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd"),
      "DIV.agores300",
      "TABLE.advright"
    ],
    hungarian: [
      "#cemp_doboz",
      ".optimonk-iframe-container",
      fromB64("LmFkX19tYWlu"),
      fromB64("W2NsYXNzKj0iR29vZ2xlQWRzIl0="),
      "#hirdetesek_box"
    ],
    iDontCareAboutCookies: [
      '.alert-info[data-block-track*="CookieNotice"]',
      ".ModuleTemplateCookieIndicator",
      ".o--cookies--container",
      ".cookie-msg-info-container",
      "#cookies-policy-sticky"
    ],
    icelandicAbp: [fromB64("QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ==")],
    latvian: [
      fromB64("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiA0MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0="),
      fromB64("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6IDMxcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ==")
    ],
    listKr: [
      fromB64("YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0="),
      fromB64("I2xpdmVyZUFkV3JhcHBlcg=="),
      fromB64("YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ=="),
      fromB64("aW5zLmZhc3R2aWV3LWFk"),
      ".revenue_unit_item.dable"
    ],
    listeAr: [
      fromB64("LmdlbWluaUxCMUFk"),
      ".right-and-left-sponsers",
      fromB64("YVtocmVmKj0iLmFmbGFtLmluZm8iXQ=="),
      fromB64("YVtocmVmKj0iYm9vcmFxLm9yZyJd"),
      fromB64("YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd")
    ],
    listeFr: [
      fromB64("YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ=="),
      fromB64("I2FkY29udGFpbmVyX3JlY2hlcmNoZQ=="),
      fromB64("YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0="),
      ".site-pub-interstitiel",
      'div[id^="crt-"][data-criteo-id]'
    ],
    officialPolish: [
      "#ceneo-placeholder-ceneo-12",
      fromB64("W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd"),
      fromB64("YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ=="),
      fromB64("YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ=="),
      fromB64("ZGl2I3NrYXBpZWNfYWQ=")
    ],
    ro: [
      fromB64("YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd"),
      'a[href^="/magazin/"]',
      fromB64("YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd"),
      fromB64("YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0="),
      fromB64("YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd")
    ],
    ruAd: [
      fromB64("YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd"),
      fromB64("YVtocmVmKj0iLy91dGltZy5ydS8iXQ=="),
      fromB64("YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0="),
      "#pgeldiz",
      ".yandex-rtb-block"
    ],
    thaiAds: [
      "a[href*=macau-uta-popup]",
      fromB64("I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA=="),
      fromB64("LmFkczMwMHM="),
      ".bumq",
      ".img-kosana"
    ],
    webAnnoyancesUltralist: [
      "#mod-social-share-2",
      "#social-tools",
      fromB64("LmN0cGwtZnVsbGJhbm5lcg=="),
      ".zergnet-recommend",
      ".yt.btn-link.btn-md.btn"
    ]
  };
}
function getDomBlockers(_a) {
  var _b = _a === void 0 ? {} : _a, debug = _b.debug;
  return __awaiter(this, void 0, void 0, function() {
    var filters, filterNames, allSelectors, blockedSelectors, activeBlockers;
    var _c;
    return __generator(this, function(_d) {
      switch (_d.label) {
        case 0:
          if (!isApplicable()) {
            return [2, void 0];
          }
          filters = getFilters();
          filterNames = Object.keys(filters);
          allSelectors = (_c = []).concat.apply(_c, filterNames.map(function(filterName) {
            return filters[filterName];
          }));
          return [4, getBlockedSelectors(allSelectors)];
        case 1:
          blockedSelectors = _d.sent();
          if (debug) {
            printDebug(filters, blockedSelectors);
          }
          activeBlockers = filterNames.filter(function(filterName) {
            var selectors = filters[filterName];
            var blockedCount = countTruthy(selectors.map(function(selector) {
              return blockedSelectors[selector];
            }));
            return blockedCount > selectors.length * 0.6;
          });
          activeBlockers.sort();
          return [2, activeBlockers];
      }
    });
  });
}
function isApplicable() {
  return isWebKit() || isAndroid();
}
function getBlockedSelectors(selectors) {
  var _a;
  return __awaiter(this, void 0, void 0, function() {
    var d, root, elements, blockedSelectors, i, element, holder, i;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          d = document;
          root = d.createElement("div");
          elements = new Array(selectors.length);
          blockedSelectors = {};
          forceShow(root);
          for (i = 0; i < selectors.length; ++i) {
            element = selectorToElement(selectors[i]);
            holder = d.createElement("div");
            forceShow(holder);
            holder.appendChild(element);
            root.appendChild(holder);
            elements[i] = element;
          }
          _b.label = 1;
        case 1:
          if (!!d.body)
            return [3, 3];
          return [4, wait(50)];
        case 2:
          _b.sent();
          return [3, 1];
        case 3:
          d.body.appendChild(root);
          try {
            for (i = 0; i < selectors.length; ++i) {
              if (!elements[i].offsetParent) {
                blockedSelectors[selectors[i]] = true;
              }
            }
          } finally {
            (_a = root.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(root);
          }
          return [2, blockedSelectors];
      }
    });
  });
}
function forceShow(element) {
  element.style.setProperty("display", "block", "important");
}
function printDebug(filters, blockedSelectors) {
  var message = "DOM blockers debug:\n```";
  for (var _i = 0, _a = Object.keys(filters); _i < _a.length; _i++) {
    var filterName = _a[_i];
    message += "\n".concat(filterName, ":");
    for (var _b = 0, _c = filters[filterName]; _b < _c.length; _b++) {
      var selector = _c[_b];
      message += "\n  ".concat(blockedSelectors[selector] ? "\u{1F6AB}" : "\u27A1\uFE0F", " ").concat(selector);
    }
  }
}
function getColorGamut() {
  for (var _i = 0, _a = ["rec2020", "p3", "srgb"]; _i < _a.length; _i++) {
    var gamut = _a[_i];
    if (matchMedia("(color-gamut: ".concat(gamut, ")")).matches) {
      return gamut;
    }
  }
  return void 0;
}
function areColorsInverted() {
  if (doesMatch$4("inverted")) {
    return true;
  }
  if (doesMatch$4("none")) {
    return false;
  }
  return void 0;
}
function doesMatch$4(value) {
  return matchMedia("(inverted-colors: ".concat(value, ")")).matches;
}
function areColorsForced() {
  if (doesMatch$3("active")) {
    return true;
  }
  if (doesMatch$3("none")) {
    return false;
  }
  return void 0;
}
function doesMatch$3(value) {
  return matchMedia("(forced-colors: ".concat(value, ")")).matches;
}
var maxValueToCheck = 100;
function getMonochromeDepth() {
  if (!matchMedia("(min-monochrome: 0)").matches) {
    return void 0;
  }
  for (var i = 0; i <= maxValueToCheck; ++i) {
    if (matchMedia("(max-monochrome: ".concat(i, ")")).matches) {
      return i;
    }
  }
  throw new Error("Too high value");
}
function getContrastPreference() {
  if (doesMatch$2("no-preference")) {
    return 0;
  }
  if (doesMatch$2("high") || doesMatch$2("more")) {
    return 1;
  }
  if (doesMatch$2("low") || doesMatch$2("less")) {
    return -1;
  }
  if (doesMatch$2("forced")) {
    return 10;
  }
  return void 0;
}
function doesMatch$2(value) {
  return matchMedia("(prefers-contrast: ".concat(value, ")")).matches;
}
function isMotionReduced() {
  if (doesMatch$1("reduce")) {
    return true;
  }
  if (doesMatch$1("no-preference")) {
    return false;
  }
  return void 0;
}
function doesMatch$1(value) {
  return matchMedia("(prefers-reduced-motion: ".concat(value, ")")).matches;
}
function isHDR() {
  if (doesMatch("high")) {
    return true;
  }
  if (doesMatch("standard")) {
    return false;
  }
  return void 0;
}
function doesMatch(value) {
  return matchMedia("(dynamic-range: ".concat(value, ")")).matches;
}
var M = Math;
var fallbackFn = function() {
  return 0;
};
function getMathFingerprint() {
  var acos = M.acos || fallbackFn;
  var acosh = M.acosh || fallbackFn;
  var asin = M.asin || fallbackFn;
  var asinh = M.asinh || fallbackFn;
  var atanh = M.atanh || fallbackFn;
  var atan = M.atan || fallbackFn;
  var sin = M.sin || fallbackFn;
  var sinh = M.sinh || fallbackFn;
  var cos = M.cos || fallbackFn;
  var cosh = M.cosh || fallbackFn;
  var tan = M.tan || fallbackFn;
  var tanh = M.tanh || fallbackFn;
  var exp = M.exp || fallbackFn;
  var expm1 = M.expm1 || fallbackFn;
  var log1p = M.log1p || fallbackFn;
  var powPI = function(value) {
    return M.pow(M.PI, value);
  };
  var acoshPf = function(value) {
    return M.log(value + M.sqrt(value * value - 1));
  };
  var asinhPf = function(value) {
    return M.log(value + M.sqrt(value * value + 1));
  };
  var atanhPf = function(value) {
    return M.log((1 + value) / (1 - value)) / 2;
  };
  var sinhPf = function(value) {
    return M.exp(value) - 1 / M.exp(value) / 2;
  };
  var coshPf = function(value) {
    return (M.exp(value) + 1 / M.exp(value)) / 2;
  };
  var expm1Pf = function(value) {
    return M.exp(value) - 1;
  };
  var tanhPf = function(value) {
    return (M.exp(2 * value) - 1) / (M.exp(2 * value) + 1);
  };
  var log1pPf = function(value) {
    return M.log(1 + value);
  };
  return {
    acos: acos(0.12312423423423424),
    acosh: acosh(1e308),
    acoshPf: acoshPf(1e154),
    asin: asin(0.12312423423423424),
    asinh: asinh(1),
    asinhPf: asinhPf(1),
    atanh: atanh(0.5),
    atanhPf: atanhPf(0.5),
    atan: atan(0.5),
    sin: sin(-1e300),
    sinh: sinh(1),
    sinhPf: sinhPf(1),
    cos: cos(10.000000000123),
    cosh: cosh(1),
    coshPf: coshPf(1),
    tan: tan(-1e300),
    tanh: tanh(1),
    tanhPf: tanhPf(1),
    exp: exp(1),
    expm1: expm1(1),
    expm1Pf: expm1Pf(1),
    log1p: log1p(10),
    log1pPf: log1pPf(10),
    powPI: powPI(-100)
  };
}
var defaultText = "mmMwWLliI0fiflO&1";
var presets = {
  /**
   * The default font. User can change it in desktop Chrome, desktop Firefox, IE 11,
   * Android Chrome (but only when the size is ≥ than the default) and Android Firefox.
   */
  default: [],
  /** OS font on macOS. User can change its size and weight. Applies after Safari restart. */
  apple: [{ font: "-apple-system-body" }],
  /** User can change it in desktop Chrome and desktop Firefox. */
  serif: [{ fontFamily: "serif" }],
  /** User can change it in desktop Chrome and desktop Firefox. */
  sans: [{ fontFamily: "sans-serif" }],
  /** User can change it in desktop Chrome and desktop Firefox. */
  mono: [{ fontFamily: "monospace" }],
  /**
   * Check the smallest allowed font size. User can change it in desktop Chrome, desktop Firefox and desktop Safari.
   * The height can be 0 in Chrome on a retina display.
   */
  min: [{ fontSize: "1px" }],
  /** Tells one OS from another in desktop Chrome. */
  system: [{ fontFamily: "system-ui" }]
};
function getFontPreferences() {
  return withNaturalFonts(function(document2, container) {
    var elements = {};
    var sizes = {};
    for (var _i = 0, _a = Object.keys(presets); _i < _a.length; _i++) {
      var key = _a[_i];
      var _b = presets[key], _c = _b[0], style2 = _c === void 0 ? {} : _c, _d = _b[1], text = _d === void 0 ? defaultText : _d;
      var element = document2.createElement("span");
      element.textContent = text;
      element.style.whiteSpace = "nowrap";
      for (var _e = 0, _f = Object.keys(style2); _e < _f.length; _e++) {
        var name_1 = _f[_e];
        var value = style2[name_1];
        if (value !== void 0) {
          element.style[name_1] = value;
        }
      }
      elements[key] = element;
      container.appendChild(document2.createElement("br"));
      container.appendChild(element);
    }
    for (var _g = 0, _h = Object.keys(presets); _g < _h.length; _g++) {
      var key = _h[_g];
      sizes[key] = elements[key].getBoundingClientRect().width;
    }
    return sizes;
  });
}
function withNaturalFonts(action, containerWidthPx) {
  if (containerWidthPx === void 0) {
    containerWidthPx = 4e3;
  }
  return withIframe(function(_, iframeWindow) {
    var iframeDocument = iframeWindow.document;
    var iframeBody = iframeDocument.body;
    var bodyStyle = iframeBody.style;
    bodyStyle.width = "".concat(containerWidthPx, "px");
    bodyStyle.webkitTextSizeAdjust = bodyStyle.textSizeAdjust = "none";
    if (isChromium()) {
      iframeBody.style.zoom = "".concat(1 / iframeWindow.devicePixelRatio);
    } else if (isWebKit()) {
      iframeBody.style.zoom = "reset";
    }
    var linesOfText = iframeDocument.createElement("div");
    linesOfText.textContent = __spreadArray([], Array(containerWidthPx / 20 << 0), true).map(function() {
      return "word";
    }).join(" ");
    iframeBody.appendChild(linesOfText);
    return action(iframeDocument, iframeBody);
  }, '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">');
}
function getVideoCard() {
  var _a;
  var canvas = document.createElement("canvas");
  var gl = (_a = canvas.getContext("webgl")) !== null && _a !== void 0 ? _a : canvas.getContext("experimental-webgl");
  if (gl && "getExtension" in gl) {
    var debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
    if (debugInfo) {
      return {
        vendor: (gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) || "").toString(),
        renderer: (gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) || "").toString()
      };
    }
  }
  return void 0;
}
function isPdfViewerEnabled() {
  return navigator.pdfViewerEnabled;
}
function getArchitecture() {
  var f = new Float32Array(1);
  var u8 = new Uint8Array(f.buffer);
  f[0] = Infinity;
  f[0] = f[0] - f[0];
  return u8[3];
}
var sources = {
  // READ FIRST:
  // See https://github.com/fingerprintjs/fingerprintjs/blob/master/contributing.md#how-to-make-an-entropy-source
  // to learn how entropy source works and how to make your own.
  // The sources run in this exact order.
  // The asynchronous sources are at the start to run in parallel with other sources.
  fonts: getFonts,
  domBlockers: getDomBlockers,
  fontPreferences: getFontPreferences,
  audio: getAudioFingerprint,
  screenFrame: getRoundedScreenFrame,
  osCpu: getOsCpu,
  languages: getLanguages,
  colorDepth: getColorDepth,
  deviceMemory: getDeviceMemory,
  screenResolution: getScreenResolution,
  hardwareConcurrency: getHardwareConcurrency,
  timezone: getTimezone,
  sessionStorage: getSessionStorage,
  localStorage: getLocalStorage,
  indexedDB: getIndexedDB,
  openDatabase: getOpenDatabase,
  cpuClass: getCpuClass,
  platform: getPlatform,
  plugins: getPlugins,
  canvas: getCanvasFingerprint,
  touchSupport: getTouchSupport,
  vendor: getVendor,
  vendorFlavors: getVendorFlavors,
  cookiesEnabled: areCookiesEnabled,
  colorGamut: getColorGamut,
  invertedColors: areColorsInverted,
  forcedColors: areColorsForced,
  monochrome: getMonochromeDepth,
  contrast: getContrastPreference,
  reducedMotion: isMotionReduced,
  hdr: isHDR,
  math: getMathFingerprint,
  videoCard: getVideoCard,
  pdfViewerEnabled: isPdfViewerEnabled,
  architecture: getArchitecture
};
function loadBuiltinSources(options) {
  return loadSources(sources, options, []);
}
var commentTemplate = "$ if upgrade to Pro: https://fpjs.dev/pro";
function getConfidence(components) {
  var openConfidenceScore = getOpenConfidenceScore(components);
  var proConfidenceScore = deriveProConfidenceScore(openConfidenceScore);
  return { score: openConfidenceScore, comment: commentTemplate.replace(/\$/g, "".concat(proConfidenceScore)) };
}
function getOpenConfidenceScore(components) {
  if (isAndroid()) {
    return 0.4;
  }
  if (isWebKit()) {
    return isDesktopSafari() ? 0.5 : 0.3;
  }
  var platform = components.platform.value || "";
  if (/^Win/.test(platform)) {
    return 0.6;
  }
  if (/^Mac/.test(platform)) {
    return 0.5;
  }
  return 0.7;
}
function deriveProConfidenceScore(openConfidenceScore) {
  return round(0.99 + 0.01 * openConfidenceScore, 1e-4);
}
function componentsToCanonicalString(components) {
  var result = "";
  for (var _i = 0, _a = Object.keys(components).sort(); _i < _a.length; _i++) {
    var componentKey = _a[_i];
    var component = components[componentKey];
    var value = component.error ? "error" : JSON.stringify(component.value);
    result += "".concat(result ? "|" : "").concat(componentKey.replace(/([:|\\])/g, "\\$1"), ":").concat(value);
  }
  return result;
}
function componentsToDebugString(components) {
  return JSON.stringify(components, function(_key, value) {
    if (value instanceof Error) {
      return errorToObject(value);
    }
    return value;
  }, 2);
}
function hashComponents(components) {
  return x64hash128(componentsToCanonicalString(components));
}
function makeLazyGetResult(components) {
  var visitorIdCache;
  var confidence = getConfidence(components);
  return {
    get visitorId() {
      if (visitorIdCache === void 0) {
        visitorIdCache = hashComponents(this.components);
      }
      return visitorIdCache;
    },
    set visitorId(visitorId) {
      visitorIdCache = visitorId;
    },
    confidence,
    components,
    version
  };
}
function prepareForSources(delayFallback) {
  if (delayFallback === void 0) {
    delayFallback = 50;
  }
  return requestIdleCallbackIfAvailable(delayFallback, delayFallback * 2);
}
function makeAgent(getComponents, debug) {
  var creationTime = Date.now();
  return {
    get: function(options) {
      return __awaiter(this, void 0, void 0, function() {
        var startTime, components, result;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              startTime = Date.now();
              return [4, getComponents()];
            case 1:
              components = _a.sent();
              result = makeLazyGetResult(components);
              if (debug || (options === null || options === void 0 ? void 0 : options.debug)) {
              }
              return [2, result];
          }
        });
      });
    }
  };
}
function monitor() {
  if (window.__fpjs_d_m || Math.random() >= 1e-3) {
    return;
  }
  try {
    var request = new XMLHttpRequest();
    request.open("get", "https://m1.openfpcdn.io/fingerprintjs/v".concat(version, "/npm-monitoring"), true);
    request.send();
  } catch (error2) {
  }
}
function load(_a) {
  var _b = _a === void 0 ? {} : _a, delayFallback = _b.delayFallback, debug = _b.debug, _c = _b.monitoring, monitoring = _c === void 0 ? true : _c;
  return __awaiter(this, void 0, void 0, function() {
    var getComponents;
    return __generator(this, function(_d) {
      switch (_d.label) {
        case 0:
          if (monitoring) {
            monitor();
          }
          return [4, prepareForSources(delayFallback)];
        case 1:
          _d.sent();
          getComponents = loadBuiltinSources({ debug });
          return [2, makeAgent(getComponents, debug)];
      }
    });
  });
}
var index = { load, hashComponents, componentsToDebugString };

// src/util/localStorage.ts
var setLocalStorage = (key, value, isString2 = false) => {
  const needSaveSessions = ["GOOGLE_SIGN_UP_DATA"].includes(key);
  if (typeof localStorage === "undefined" || typeof window === "undefined") {
    return;
  }
  if (isString2 || typeof value === "string") {
    localStorage.setItem(key, String(value));
    if (needSaveSessions) {
      sessionStorage.setItem(key, String(value));
    }
  } else {
    localStorage.setItem(key, JSON.stringify(value));
    if (needSaveSessions) {
      sessionStorage.setItem(key, JSON.stringify(value));
    }
  }
};
var getLocalStorage2 = (key) => {
  if (typeof localStorage === "undefined")
    return null;
  const needSaveSessions = ["GOOGLE_SIGN_UP_DATA"].includes(key);
  if (needSaveSessions && sessionStorage.getItem(key)) {
    return sessionStorage.getItem(key);
  }
  return localStorage.getItem(key);
};

// src/util/fingerPrint.tsx
var FINGER_PRINT_LOCAL_STORAGE_SAVE_KEY = "x_fid";
var initFingerPrint = () => {
  return new Promise((resolve) => {
    if (typeof window !== "undefined") {
      try {
        const fpPromise = index.load();
        fpPromise.then((fp) => {
          fp.get().then((result) => {
            setLocalStorage(
              FINGER_PRINT_LOCAL_STORAGE_SAVE_KEY,
              result.visitorId,
              true
            );
            resolve(result.visitorId);
          });
        });
      } catch (e) {
        resolve(void 0);
      }
    }
  });
};
var getFingerPrintAsync = async () => {
  const fingerPrint = getLocalStorage2(FINGER_PRINT_LOCAL_STORAGE_SAVE_KEY);
  if (!fingerPrint) {
    return await initFingerPrint();
  }
  return fingerPrint.replace(/"/g, "");
};

// src/util/request.tsx
var import_jsx_runtime14 = __toESM(require_jsx_runtime());
var ErrorNetworkTips = (title, msg, key) => {
  const { closeSnackbar } = useSnackbar();
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Paper_default, { elevation: 6, children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(Alert_default, { severity: "warning", onClose: () => closeSnackbar(key), children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(AlertTitle_default, { sx: { color: (t) => t.palette.warning.light }, children: title }),
    msg
  ] }) });
};
var GUEST_USER_MODE = "GUEST_USER_MODE";
var appAxios = axios_default.create({
  baseURL: APP_USE_CHAT_GPT_API_HOST,
  timeout: 2e4
});
var getCurrentVisibility = () => {
  let hidden;
  if (typeof document.hidden !== "undefined") {
    hidden = "hidden";
  } else if (typeof document.msHidden !== "undefined") {
    hidden = "msHidden";
  } else if (typeof document.webkitHidden !== "undefined") {
    hidden = "webkitHidden";
  }
  if (typeof document.addEventListener === "undefined" || typeof document[hidden] === "undefined") {
  }
  return !document[hidden];
};
var getCurrentFullReferer = () => {
  return location.href.split(/[?#]/)[0];
};
var getCurrentPathNameModule = () => {
  const pathname = location.pathname;
  const pathNameArray = pathname.split("/");
  return pathNameArray[1];
};
function splice_uri(uri, params) {
  const paramsArray = [];
  Object.keys(params).forEach(
    (key) => params[key] && paramsArray.push(`${key}=${params[key]}`)
  );
  if (uri.search(/\?/) === -1) {
    uri += `?${paramsArray.join("&")}`;
  } else {
    uri += `&${paramsArray.join("&")}`;
  }
  return uri;
}
appAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error2) => {
    const errorObj = error2.response;
    if (error2.message === GUEST_USER_MODE) {
      return Promise.resolve({ data: [] });
    }
    const msgTitle = "Something went wrong";
    const msgBody = "Connection with the server is currently unavailable, please try again later.";
    if (errorObj?.status === 401) {
      logoutUseChatGPTAuth();
      return Promise.reject(error2);
    }
    if (errorObj?.status === 500 || errorObj?.status === 404) {
      try {
        const requestData = JSON.parse(errorObj?.config?.data);
        if (!requestData?.hideNotifications) {
          globalSnackbar_default.error(msgBody, {
            variant: "warning",
            persist: true,
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "center"
            },
            content: (key) => ErrorNetworkTips(msgTitle, msgBody, key)
          });
        }
      } catch (e) {
        globalSnackbar_default.error(msgBody, {
          variant: "warning",
          persist: true,
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "center"
          },
          content: (key) => ErrorNetworkTips(msgTitle, msgBody, key)
        });
      }
    }
    if (errorObj?.status === 408 && errorObj?.data?.msg === "request time invalid") {
      if (errorObj?.headers?.t) {
        const serverTime = +errorObj.headers.t;
        if (isNaN(serverTime))
          return;
        const diff = serverTime - Date.now();
        setLocalStorage("timediff", diff);
      }
    }
    return Promise.reject(error2);
  }
);
appAxios.interceptors.request.use(
  async (config) => {
    const accessToken = await getUseChatGPTAccessToken();
    const fp = await getFingerPrintAsync();
    config.headers = {
      Authorization: accessToken ? `Bearer ${accessToken}` : "",
      "X-API-MODULE": getCurrentPathNameModule(),
      "X-IS-CRX": "false",
      "X-IS-FOCUS": getCurrentVisibility() ? "true" : "false",
      "X-FULL-REFERER": getCurrentFullReferer(),
      "X-FID": fp,
      fp,
      ...config.headers
    };
    let api_path = config.url?.replace(APP_USE_CHAT_GPT_API_HOST || "", "") || "";
    const sign_header_prefix = "";
    let json_data = {};
    const data = {};
    const isForm = config.headers?.["Content-Type"] === "application/x-www-form-urlencoded";
    if (isForm) {
      if (config["data"] && ["put", "post", "patch"].includes(
        config["method"]?.toLocaleLowerCase() || ""
      ) && config["data"] instanceof FormData) {
        config["data"].forEach((value, key) => data[key] = value);
      }
    } else {
      if (config["data"]) {
        json_data = config["data"];
      }
    }
    if (config.params) {
      api_path = splice_uri(api_path, config.params);
      config.params = void 0;
      config.url = api_path;
    }
    const sign_headers = api_signature_manager({
      api_path: `${sign_header_prefix}${api_path.replace(/[?]$/, "")}`,
      authorization: config.headers?.["Authorization"] || "",
      userAgent: typeof window !== "undefined" ? window?.navigator?.userAgent : "unknown",
      data,
      json_data,
      apiTime: (+(0, import_dayjs2.default)() + +(getLocalStorage2("timediff") || 0)).toString()
    });
    config.headers = {
      ...config.headers,
      ...sign_headers
    };
    return config;
  },
  (error2) => {
    return Promise.reject(error2);
  }
);
var get = (url, params, config) => {
  return new Promise((resolve, reject) => {
    appAxios.get(url, {
      params: {
        ...params,
        ...config
      }
    }).then((res) => {
      resolve(res.data);
    }).catch((err) => {
      reject(err);
    });
  });
};
var post = (url, params, config) => {
  return new Promise((resolve, reject) => {
    appAxios.post(url, params, { ...config }).then((res) => resolve(res.data)).catch((err) => reject(err));
  });
};

// src/features/prompt/hooks/useAddFavouritePrompt.ts
var useFavouriteActionsPrompt = () => {
  const setFavoritesPromptIds = Recoil_index_24(FavoritesPromptIdsAtom);
  const [loading, setLoading] = (0, import_react6.useState)(false);
  const addFavouritePrompt = async (id) => {
    try {
      setLoading(true);
      const res = await post(
        PROMPT_API.ADD_FAVOURITE_PROMPT,
        {
          id
        }
      );
      if (res.status === "OK") {
        globalSnackbar_default.success('Added to "Favorites" prompts list.');
        setFavoritesPromptIds((ids) => [...ids, id]);
        return true;
      }
    } catch (error2) {
    } finally {
      setLoading(false);
    }
  };
  const removeFavouritePrompt = async (id) => {
    try {
      setLoading(true);
      const res = await post(
        PROMPT_API.REMOVE_FAVOURITE_PROMPT,
        {
          id
        }
      );
      if (res.status === "OK") {
        globalSnackbar_default.success('Removed from "Favorites" prompts list.');
        setFavoritesPromptIds((ids) => ids.filter((item) => item !== id));
        return true;
      }
    } catch (error2) {
    } finally {
      setLoading(false);
    }
  };
  return {
    addFavouritePrompt,
    removeFavouritePrompt,
    loading
  };
};

// src/features/prompt/hooks/usePromptActions.ts
var import_react7 = __toESM(require_react());

// src/util/chatgptSnackbar.ts
var snackbarRef;
var SnackbarUtilsConfigurator = () => {
  snackbarRef = useSnackbar();
  return null;
};
var toast = (msg, options = {}) => {
  snackbarRef.enqueueSnackbar(msg, options);
};
var success = (msg, options = {}) => {
  toast(msg, { ...options, variant: "success" });
};
var warning = (msg, options = {}) => {
  toast(msg, { ...options, variant: "warning" });
};
var info = (msg, options = {}) => {
  toast(msg, { ...options, variant: "info" });
};
var error = (msg, options = {}) => {
  toast(msg, { ...options, variant: "error" });
};
var exportedObject = {
  success,
  warning,
  info,
  error
};
var chatgptSnackbar_default = exportedObject;

// src/features/prompt/hooks/usePromptActions.ts
var usePromptActions = () => {
  const [loading, setLoading] = (0, import_react7.useState)(false);
  const addPrompt = async (params) => {
    try {
      setLoading(true);
      const res = await post(
        PROMPT_API.ADD_PROMPT,
        {
          ...params,
          // prompt_hint: '_',
          type: params.type ? "public" : "private",
          // 请求接口前，清理下无用的字段
          variables: params.variables.map((variable) => ({
            hint: variable.hint,
            name: variable.name,
            type: variable.type
          }))
        }
      );
      if (res.status === "OK" && res.data.id) {
        chatgptSnackbar_default.success("Add prompt success");
        return res.data.id;
      }
    } catch (error2) {
      let errorMsg = error2?.response?.data?.detail;
      if (errorMsg.includes("too long")) {
        errorMsg = "The template is too long. Please shorten it.";
      }
      chatgptSnackbar_default.error(errorMsg || "Add prompt failed, please try again later");
    } finally {
      setLoading(false);
    }
  };
  const clonePrompt = async (params) => {
    try {
      setLoading(true);
      const res = await post(
        PROMPT_API.ADD_PROMPT,
        {
          ...omit_default(params, "id"),
          type: params.type ? "public" : "private"
        }
      );
      if (res.status === "OK" && res.data.id) {
        chatgptSnackbar_default.success("Clone prompt success");
        return res.data.id;
      }
    } catch (error2) {
      chatgptSnackbar_default.error(
        error2?.response?.data?.detail || "Clone prompt failed, please try again later"
      );
    } finally {
      setLoading(false);
    }
  };
  const editPrompt = async (params) => {
    try {
      setLoading(true);
      const res = await post(
        PROMPT_API.EDIT_OWN_PROMPT,
        {
          ...params,
          type: params.type ? "public" : "private",
          // 请求接口前，清理下无用的字段
          variables: params.variables.map((variable) => ({
            hint: variable.hint,
            name: variable.name,
            type: variable.type
          }))
        }
      );
      if (res.status === "OK") {
        chatgptSnackbar_default.success("Edit prompt success");
        return true;
      }
    } catch (error2) {
      chatgptSnackbar_default.error(
        error2?.response?.data?.detail || "Edit prompt failed, please try again later"
      );
    } finally {
      setLoading(false);
    }
  };
  const deletePrompt = async (id) => {
    try {
      setLoading(true);
      const res = await post(
        PROMPT_API.DELETE_PROMPT,
        {
          id
        }
      );
      if (res.status === "OK") {
        chatgptSnackbar_default.success("Delete prompt success");
        return true;
      }
    } catch (error2) {
      chatgptSnackbar_default.error(
        error2?.response?.data?.detail || "Delete prompt failed, please try again later"
      );
    } finally {
      setLoading(false);
    }
  };
  return {
    addPrompt,
    clonePrompt,
    editPrompt,
    deletePrompt,
    loading
  };
};

// src/features/prompt/components/PromptCard.tsx
var import_relativeTime = __toESM(require_relativeTime());

// src/features/auth/hooks/useWaitAuthCallback.ts
var import_react8 = __toESM(require_react());
var import_webextension_polyfill2 = __toESM(require_browser_polyfill());

// src/features/auth/hooks/useIsLogin.ts
var useIsLogin = () => {
  const authLogin = Recoil_index_20(AuthState);
  return authLogin.isLogin;
};

// src/features/auth/hooks/useWaitAuthCallback.ts
var port2 = new ContentScriptConnectionV2({
  runtime: "client"
});
var useWaitAuthCallback = () => {
  const isLogin = useIsLogin();
  const waitAuthCallback = (0, import_react8.useCallback)(
    async (callback, ref) => {
      if (isLogin) {
        callback();
        return;
      }
      await port2.postMessage({
        event: "Client_openAuthClientTab",
        data: {
          ref
        }
      });
      const listener = async (msg) => {
        const { event } = msg;
        if (msg?.id && msg.id !== CHROME_EXTENSION_POST_MESSAGE_ID) {
          return;
        }
        return new Promise((resolve) => {
          const exec = async () => {
            switch (event) {
              case "Client_authDone":
                {
                  callback();
                  import_webextension_polyfill2.default.runtime.onMessage.removeListener(listener);
                  return {
                    success: true,
                    data: {},
                    message: "ok"
                  };
                }
                break;
            }
            return void 0;
          };
          exec().then((res) => {
            if (res && res.data) {
              resolve(res);
            }
          });
        });
      };
      import_webextension_polyfill2.default.runtime.onMessage.addListener(listener);
    },
    [isLogin]
  );
  return waitAuthCallback;
};
var useWaitAuthCallback_default = useWaitAuthCallback;

// src/components/EllipsisTextWithTooltip.tsx
var import_react9 = __toESM(require_react());
var import_jsx_runtime15 = __toESM(require_jsx_runtime());
var EllipsisTextWithTooltip = ({
  tip,
  sx,
  children,
  lineClamp = 3,
  resizeListener = false,
  ...restProps
}) => {
  const resizeObserver = (0, import_react9.useRef)(null);
  const textRef = (0, import_react9.useRef)(null);
  const [rendered2, setRendered] = (0, import_react9.useState)(false);
  const [disableTooltip, setDisableTooltip] = (0, import_react9.useState)(true);
  const tooltip = (0, import_react9.useMemo)(() => tip ?? children, [children, tip]);
  const updateTooltipStatus = (0, import_react9.useCallback)(() => {
    if (textRef.current) {
      const textEl = textRef.current;
      setDisableTooltip(textEl.offsetHeight >= textEl.scrollHeight);
    }
  }, [textRef]);
  (0, import_react9.useEffect)(() => {
    if (rendered2) {
      updateTooltipStatus();
    }
  }, [rendered2, updateTooltipStatus]);
  (0, import_react9.useEffect)(() => {
    if (children && !rendered2) {
      setRendered(true);
    }
  }, [children, rendered2]);
  (0, import_react9.useEffect)(() => {
    if (rendered2 && resizeListener) {
      const resizeHandler = () => updateTooltipStatus();
      resizeObserver.current = new ResizeObserver(resizeHandler);
      if (textRef.current) {
        resizeObserver.current.observe(textRef.current);
      }
    }
    return () => {
      resizeObserver.current?.disconnect();
    };
  }, [rendered2, resizeListener, updateTooltipStatus, textRef]);
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Tooltip_default, { title: disableTooltip ? "" : tooltip, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    Typography_default,
    {
      ref: textRef,
      sx: {
        MozBoxOrient: "vertical",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: `${lineClamp}`,
        lineClamp: `${lineClamp}`,
        boxOrient: "vertical",
        display: "-webkit-box",
        overflow: "hidden",
        textOverflow: "ellipsis",
        ...sx
      },
      ...restProps,
      children
    }
  ) });
};
var EllipsisTextWithTooltip_default = EllipsisTextWithTooltip;

// src/features/prompt/components/PromptTypeList.tsx
var import_react10 = __toESM(require_react());
var import_jsx_runtime16 = __toESM(require_jsx_runtime());
var variableTypesNameMap = {
  websearch: "Web Search",
  livecrawling: "Live Crawling"
};
var variableTypesSxMap = {
  websearch: {
    bgcolor: "#E4EBF6",
    color: "#1B72E7"
  },
  livecrawling: {
    bgcolor: (t) => t.palette.mode === "dark" ? "rgba(178, 115, 255, 0.16)" : "rgba(118, 1, 211, 0.08)",
    color: "primary.main"
  }
};
var PromptTypeList = ({ typeList, variables }) => {
  const filterTypeList = (0, import_react10.useMemo)(() => {
    if (typeList) {
      return typeList?.filter((type) => variableTypesNameMap[type]) || [];
    } else {
      const isLiveCrawlingFlag = isLiveCrawling(variables);
      return isLiveCrawlingFlag ? ["livecrawling"] : [];
    }
  }, [typeList, variables]);
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_jsx_runtime16.Fragment, { children: filterTypeList.map((type) => {
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
      Typography_default,
      {
        component: "span",
        variant: "custom",
        sx: (t) => {
          const isDark = t.palette.mode === "dark";
          return {
            fontSize: 14,
            color: "primary.main",
            bgcolor: isDark ? "rgba(178, 115, 255, 0.16)" : "rgba(118, 1, 211, 0.08)",
            px: 0.5,
            // py: '2px',
            mr: 1,
            borderRadius: 1,
            ...variableTypesSxMap[type]
          };
        },
        children: variableTypesNameMap[type]
      },
      type
    );
  }) });
};
var PromptTypeList_default = PromptTypeList;

// src/features/prompt/components/PromptCard.tsx
var import_jsx_runtime17 = __toESM(require_jsx_runtime());
import_dayjs3.default.extend(import_relativeTime.default);
import_dayjs3.default.extend(import_utc.default);
var PromptCard = ({
  active,
  prompt,
  actionButton = ["see", "favorite"],
  onPromptClick,
  onRefresh,
  onOpenEditModal
}) => {
  const [deleteConfirmShow, setDeleteConfirmShow] = (0, import_react11.useState)(false);
  const waitAuthCallback = useWaitAuthCallback_default();
  const setSearchParamsStore = Recoil_index_24(PromptSearchParamsStore);
  const {
    addFavouritePrompt,
    removeFavouritePrompt,
    loading: favoritesLoading
  } = useFavouriteActionsPrompt();
  const { deletePrompt, loading: actionLoading } = usePromptActions();
  const detailLink = (0, import_react11.useMemo)(() => {
    return prompt.type === "private" ? `${APP_USE_CHAT_GPT_HOST}/prompts/own/${prompt.id}` : `${APP_USE_CHAT_GPT_HOST}/prompts/${prompt.id}`;
  }, [prompt]);
  const handleFavoriteIcon = async () => {
    const status = await addFavouritePrompt(prompt.id);
    if (status) {
      setSearchParamsStore((preValue) => ({
        ...preValue,
        tab_active: "Favorites"
      }));
    }
  };
  const handleRemoveFavoriteIcon = async () => {
    const status = await removeFavouritePrompt(prompt.id);
    if (status) {
      onRefresh && onRefresh();
    }
  };
  const handleDeleteConfirm = async () => {
    const status = await deletePrompt(prompt.id);
    if (status) {
      onRefresh && onRefresh();
      setDeleteConfirmShow(false);
    }
  };
  const actionBtnList = () => {
    const btnList = [];
    if (actionButton.includes("see")) {
      btnList.push(/* @__PURE__ */ (0, import_jsx_runtime17.jsx)(SeeIconButton, { detailLink }, "see"));
    }
    if (actionButton.includes("delete")) {
      btnList.push(
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
          DeleteIconButton,
          {
            onClick: () => {
              setDeleteConfirmShow(true);
            }
          },
          "delete"
        )
      );
    }
    if (actionButton.includes("edit")) {
      btnList.push(
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
          EditIconButton,
          {
            onClick: () => {
              onOpenEditModal && onOpenEditModal(prompt);
            }
          },
          "edit"
        )
      );
    }
    if (actionButton.includes("favorite")) {
      btnList.push(
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
          FavoriteIconButton,
          {
            id: prompt.id,
            onClick: (isFavorite) => {
              waitAuthCallback(() => {
                isFavorite ? handleRemoveFavoriteIcon() : handleFavoriteIcon();
              }, "webchatgpt-heart");
            },
            loading: favoritesLoading
          },
          "favorite"
        )
      );
    }
    return btnList;
  };
  const authorLink = (0, import_react11.useMemo)(() => {
    return prompt?.author_url || DEFAULT_PROMPT_AUTHOR_LINK;
  }, [prompt.author_url]);
  const author = (0, import_react11.useMemo)(() => {
    if (authorLink !== DEFAULT_PROMPT_AUTHOR_LINK && !prompt?.author) {
      return authorLink;
    }
    return prompt?.author || DEFAULT_PROMPT_AUTHOR;
  }, [prompt?.author, authorLink]);
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_jsx_runtime17.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
      Stack_default,
      {
        p: 2,
        spacing: 1.5,
        onClick: () => {
          onPromptClick && onPromptClick(prompt);
        },
        sx: (t) => {
          const isDark = t.palette.mode === "dark";
          const normalBgcolor = isDark ? "#3E3F4C" : "#fff";
          const activeBgcolor = isDark ? "#202123" : "rgba(0, 0, 0, 0.04)";
          const shadowColor = isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.16)";
          return {
            position: "relative",
            color: "text.primary",
            border: "1px solid",
            cursor: "pointer",
            borderRadius: "4px",
            transition: "all 0.2s ease-in-out",
            height: "calc(100% - 16px - 16px)",
            borderColor: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)",
            bgcolor: active ? activeBgcolor : normalBgcolor,
            "&:hover": {
              boxShadow: `0px 4px 8px ${shadowColor}`
            }
          };
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(Stack_default, { direction: "row", spacing: 1.5, justifyContent: "space-between", children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
              Typography_default,
              {
                variant: "body1",
                sx: {
                  fontSize: "20px",
                  lineHeight: "24px",
                  whiteSpace: "normal",
                  wordBreak: "break-word",
                  fontWeight: 700
                },
                children: prompt.prompt_title
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Stack_default, { direction: "row", fontSize: 16, height: "max-content", children: actionBtnList() })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Stack_default, { direction: "row", alignItems: "center", spacing: 1, children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
            PromptCardTag,
            {
              tag: `${prompt.category}${prompt.use_case ? ` / ${prompt.use_case}` : ""}`
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
            Stack_default,
            {
              direction: "row",
              alignItems: "center",
              spacing: 0.5,
              sx: (t) => {
                const isDark = t.palette.mode === "dark";
                return {
                  fontSize: 12,
                  color: isDark ? "rgba(255, 255, 255, 0.6)" : "rgba(0, 0, 0, 0.6)"
                };
              },
              children: [
                prompt?.type === "private" ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_LockOutlined.default, { fontSize: "inherit" }) : /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_LanguageOutlined.default, { fontSize: "inherit" }),
                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Typography_default, { variant: "caption", fontSize: 12, children: "\xB7" }),
                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
                  ProLink_default,
                  {
                    href: authorLink,
                    underline: "always",
                    sx: {
                      color: "inherit"
                    },
                    onClick: (event) => {
                      event.stopPropagation();
                    },
                    children: author
                  }
                ),
                prompt.update_time && /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("span", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Typography_default, { variant: "caption", fontSize: 12, children: "\xB7" }),
                  /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Typography_default, { variant: "caption", fontSize: 12, children: import_dayjs3.default.utc(prompt.update_time).fromNow() })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
            EllipsisTextWithTooltip_default,
            {
              tip: prompt.teaser,
              variant: "custom",
              color: "text.secondary",
              fontSize: 16,
              sx: {
                whiteSpace: "normal",
                wordBreak: "break-word"
                // minHeight: 78,
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
                  PromptTypeList_default,
                  {
                    typeList: prompt.variable_types,
                    variables: prompt.variables
                  }
                ),
                prompt.teaser
              ]
            }
          )
        ]
      }
    ),
    actionButton?.includes("delete") && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      DeletePromptConfirm_default,
      {
        promptTitle: prompt.prompt_title,
        loading: actionLoading,
        show: deleteConfirmShow,
        onConfirm: handleDeleteConfirm,
        onCancel: () => {
          setDeleteConfirmShow(false);
        }
      }
    )
  ] });
};
var PromptCardTag = (props) => {
  const { tag } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Box_default, { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    Typography_default,
    {
      variant: "custom",
      sx: (t) => {
        const isDark = t.palette.mode === "dark";
        return {
          borderRadius: "4px",
          display: "inline-flex",
          bgcolor: isDark ? "rgba(255, 255, 255, 0.16)" : "rgb(235,235,235)",
          color: isDark ? "#fff" : "text.secondary",
          fontSize: "14px",
          lineHeight: "20px",
          px: 0.5
        };
      },
      children: tag
    }
  ) });
};

// src/features/prompt/hooks/usePromptSearch.ts
var import_react13 = __toESM(require_react());

// src/util/dataHelper/objectHelper.ts
var objectFilterEmpty = (obj, filterEmptyString = true) => {
  const result = {};
  Object.keys(obj).forEach((key) => {
    if (obj[key] !== void 0 && obj[key] !== null) {
      if (filterEmptyString && typeof obj[key] === "string" && obj[key].trim() === "") {
        return;
      }
      result[key] = obj[key];
    }
  });
  return result;
};

// src/util/usePaginatedQuery.ts
var import_react12 = __toESM(require_react());
var usePaginatedQuery = (queryKey, fetchFunction, defaultSettings) => {
  const [loaded, setLoaded] = (0, import_react12.useState)(false);
  const [enabled, setEnabled] = (0, import_react12.useState)(false);
  const [current, setCurrent] = (0, import_react12.useState)(0);
  const [pageSize, setPageSize] = (0, import_react12.useState)(defaultSettings?.pageSize ?? 10);
  const [total, setTotal] = (0, import_react12.useState)(0);
  useEffectOnce_default(() => {
    setLoaded(true);
  });
  (0, import_react12.useEffect)(() => {
    setCurrent(0);
    setEnabled(true);
  }, []);
  const { data, isLoading, isError, error: error2, isFetching, refetch } = useQuery(
    [...queryKey, current, pageSize],
    async () => {
      const result = await fetchFunction(current, pageSize);
      setTotal(result.total);
      return result;
    },
    {
      enabled,
      keepPreviousData: true,
      refetchOnWindowFocus: false
    }
  );
  const hasNextPage = current + 1 < Math.ceil(total / pageSize);
  const hasPrevPage = current > 0;
  (0, import_react12.useEffect)(() => {
    if (!isFetching && !isLoading && !isError && data) {
      if (data.data.length === 0 && current > 0) {
        setCurrent(0);
      }
    }
  }, [current, data, isFetching, isLoading, isError]);
  return {
    loaded,
    current,
    setCurrent,
    pageSize,
    setPageSize,
    hasNextPage,
    data: data?.data ?? [],
    isLoading,
    isError,
    error: error2,
    isFetching,
    hasPrevPage,
    total,
    refetch
  };
};
var usePaginatedQuery_default = usePaginatedQuery;

// src/features/prompt/hooks/usePromptSearch.ts
var usePromptSearch = (defaultPageSize = 12) => {
  const searchParams = Recoil_index_20(PromptSearchParamsStore);
  const category = searchParams.category || "";
  const use_case = searchParams.use_case || "";
  const keyword = searchParams.keyword || "";
  const tabActive = searchParams.tab_active || "";
  const pageSize = Number(defaultPageSize);
  const [listApiUrl, setListApiUrl] = (0, import_react13.useState)(PROMPT_API.SEARCH_PROMPT);
  (0, import_react13.useEffect)(() => {
    let listurl = PROMPT_API.SEARCH_PROMPT;
    if (tabActive === "Favorites") {
      listurl = PROMPT_API.GET_FAVOURITE_PROMPTS;
    }
    if (tabActive === "Own") {
      listurl = PROMPT_API.GET_OWN_PROMPTS;
    }
    if (tabActive === "Public") {
      listurl = PROMPT_API.SEARCH_PROMPT;
    }
    setListApiUrl(listurl);
    setPageSize(defaultPageSize);
    setCurrent(0);
  }, [tabActive, defaultPageSize]);
  const { setCurrent, setPageSize, data, isFetching, ...PaginatedQueryRest } = usePaginatedQuery_default(
    [listApiUrl, category, use_case, keyword, pageSize],
    async (page, page_size) => {
      let postCategory = category ? decodeURIComponent(category) : "";
      let postUseCase = use_case ? decodeURIComponent(use_case) : "";
      if (postCategory === "All") {
        postCategory = "";
      }
      if (postUseCase === "All") {
        postUseCase = "";
      }
      if (tabActive === "Public") {
        return post(
          listApiUrl,
          objectFilterEmpty({
            page,
            page_size,
            category: postCategory,
            use_case: postUseCase,
            keyword
          })
        );
      }
      const {
        data: response,
        status,
        msg
      } = await post(
        listApiUrl,
        objectFilterEmpty({
          page_number: page,
          // own 和 favvorite 的 page_size 先传 20 获取全部
          page_size: 20,
          category: postCategory,
          use_case: postUseCase,
          keyword
        })
      );
      return {
        data: tabActive === "Own" ? response.own_prompts : response.favourite_prompts,
        current_page_size: response.page_size,
        total: response.total_prompts_cnt,
        current_page: response.page_number,
        msg,
        status
      };
    },
    {
      pageSize
    }
  );
  const formatData = (0, import_react13.useMemo)(() => {
    return data.map((item) => {
      let variables = item.variables;
      if (variables && item.variable_types) {
        variables = handleVariableTypeWithInputVariable(
          variables,
          item.variable_types
        );
      }
      return {
        ...item,
        variables
      };
    });
  }, [data]);
  return {
    data: formatData,
    isFetching,
    setCurrent,
    setPageSize,
    ...PaginatedQueryRest
  };
};

// src/features/prompt/components/AddOwnPromptCard.tsx
var import_AddOutlined = __toESM(require_AddOutlined());
var import_jsx_runtime18 = __toESM(require_jsx_runtime());
var AddOwnPromptCard = ({ onPromptClick }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    Stack_default,
    {
      p: 2,
      spacing: 2,
      onClick: () => {
        onPromptClick && onPromptClick();
      },
      sx: (t) => {
        const isDark = t.palette.mode === "dark";
        const shadowColor = isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.16)";
        return {
          color: "text.primary",
          border: "1px solid",
          borderColor: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)",
          cursor: "pointer",
          borderRadius: "4px",
          transition: "all 0.2s ease-in-out",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 160,
          height: "calc(100% - 16px - 16px)",
          userSelect: "none",
          bgcolor: isDark ? "#3E3F4C" : "#fff",
          "&:hover": {
            boxShadow: `0px 4px 8px ${shadowColor}`
          }
        };
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(Stack_default, { direction: "row", alignItems: "center", spacing: 1, color: "inherit", children: [
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
          import_AddOutlined.default,
          {
            sx: {
              fontSize: 20
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Typography_default, { variant: "custom", fontSize: 16, children: "Add new prompt template" })
      ] })
    }
  );
};
var AddOwnPromptCard_default = AddOwnPromptCard;

// src/features/prompt/components/PromptFormModal.tsx
var import_react22 = __toESM(require_react());

// node_modules/.pnpm/react-hook-form@7.43.9_react@18.2.0/node_modules/react-hook-form/dist/index.esm.mjs
var import_react14 = __toESM(require_react(), 1);
var isCheckBoxInput = (element) => element.type === "checkbox";
var isDateObject = (value) => value instanceof Date;
var isNullOrUndefined = (value) => value == null;
var isObjectType = (value) => typeof value === "object";
var isObject = (value) => !isNullOrUndefined(value) && !Array.isArray(value) && isObjectType(value) && !isDateObject(value);
var getEventValue = (event) => isObject(event) && event.target ? isCheckBoxInput(event.target) ? event.target.checked : event.target.value : event;
var getNodeParentName = (name) => name.substring(0, name.search(/\.\d+(\.|$)/)) || name;
var isNameInFieldArray = (names, name) => names.has(getNodeParentName(name));
var isPlainObject = (tempObject) => {
  const prototypeCopy = tempObject.constructor && tempObject.constructor.prototype;
  return isObject(prototypeCopy) && prototypeCopy.hasOwnProperty("isPrototypeOf");
};
var isWeb = typeof window !== "undefined" && typeof window.HTMLElement !== "undefined" && typeof document !== "undefined";
function cloneObject(data) {
  let copy;
  const isArray = Array.isArray(data);
  if (data instanceof Date) {
    copy = new Date(data);
  } else if (data instanceof Set) {
    copy = new Set(data);
  } else if (!(isWeb && (data instanceof Blob || data instanceof FileList)) && (isArray || isObject(data))) {
    copy = isArray ? [] : {};
    if (!Array.isArray(data) && !isPlainObject(data)) {
      copy = data;
    } else {
      for (const key in data) {
        copy[key] = cloneObject(data[key]);
      }
    }
  } else {
    return data;
  }
  return copy;
}
var compact = (value) => Array.isArray(value) ? value.filter(Boolean) : [];
var isUndefined = (val) => val === void 0;
var get2 = (obj, path, defaultValue) => {
  if (!path || !isObject(obj)) {
    return defaultValue;
  }
  const result = compact(path.split(/[,[\].]+?/)).reduce((result2, key) => isNullOrUndefined(result2) ? result2 : result2[key], obj);
  return isUndefined(result) || result === obj ? isUndefined(obj[path]) ? defaultValue : obj[path] : result;
};
var EVENTS = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
};
var VALIDATION_MODE = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
};
var INPUT_VALIDATION_RULES = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
};
var HookFormContext = import_react14.default.createContext(null);
var getProxyFormState = (formState, control, localProxyFormState, isRoot = true) => {
  const result = {
    defaultValues: control._defaultValues
  };
  for (const key in formState) {
    Object.defineProperty(result, key, {
      get: () => {
        const _key = key;
        if (control._proxyFormState[_key] !== VALIDATION_MODE.all) {
          control._proxyFormState[_key] = !isRoot || VALIDATION_MODE.all;
        }
        localProxyFormState && (localProxyFormState[_key] = true);
        return formState[_key];
      }
    });
  }
  return result;
};
var isEmptyObject = (value) => isObject(value) && !Object.keys(value).length;
var shouldRenderFormState = (formStateData, _proxyFormState, updateFormState, isRoot) => {
  updateFormState(formStateData);
  const { name, ...formState } = formStateData;
  return isEmptyObject(formState) || Object.keys(formState).length >= Object.keys(_proxyFormState).length || Object.keys(formState).find((key) => _proxyFormState[key] === (!isRoot || VALIDATION_MODE.all));
};
var convertToArrayPayload = (value) => Array.isArray(value) ? value : [value];
function useSubscribe(props) {
  const _props = import_react14.default.useRef(props);
  _props.current = props;
  import_react14.default.useEffect(() => {
    const subscription = !props.disabled && _props.current.subject && _props.current.subject.subscribe({
      next: _props.current.next
    });
    return () => {
      subscription && subscription.unsubscribe();
    };
  }, [props.disabled]);
}
var isString = (value) => typeof value === "string";
var generateWatchOutput = (names, _names, formValues, isGlobal, defaultValue) => {
  if (isString(names)) {
    isGlobal && _names.watch.add(names);
    return get2(formValues, names, defaultValue);
  }
  if (Array.isArray(names)) {
    return names.map((fieldName) => (isGlobal && _names.watch.add(fieldName), get2(formValues, fieldName)));
  }
  isGlobal && (_names.watchAll = true);
  return formValues;
};
var isKey = (value) => /^\w*$/.test(value);
var stringToPath = (input) => compact(input.replace(/["|']|\]/g, "").split(/\.|\[/));
function set(object, path, value) {
  let index2 = -1;
  const tempPath = isKey(path) ? [path] : stringToPath(path);
  const length = tempPath.length;
  const lastIndex = length - 1;
  while (++index2 < length) {
    const key = tempPath[index2];
    let newValue = value;
    if (index2 !== lastIndex) {
      const objValue = object[key];
      newValue = isObject(objValue) || Array.isArray(objValue) ? objValue : !isNaN(+tempPath[index2 + 1]) ? [] : {};
    }
    object[key] = newValue;
    object = object[key];
  }
  return object;
}
var appendErrors = (name, validateAllFieldCriteria, errors, type, message) => validateAllFieldCriteria ? {
  ...errors[name],
  types: {
    ...errors[name] && errors[name].types ? errors[name].types : {},
    [type]: message || true
  }
} : {};
var focusFieldBy = (fields, callback, fieldsNames) => {
  for (const key of fieldsNames || Object.keys(fields)) {
    const field = get2(fields, key);
    if (field) {
      const { _f, ...currentField } = field;
      if (_f && callback(_f.name)) {
        if (_f.ref.focus) {
          _f.ref.focus();
          break;
        } else if (_f.refs && _f.refs[0].focus) {
          _f.refs[0].focus();
          break;
        }
      } else if (isObject(currentField)) {
        focusFieldBy(currentField, callback);
      }
    }
  }
};
var getValidationModes = (mode) => ({
  isOnSubmit: !mode || mode === VALIDATION_MODE.onSubmit,
  isOnBlur: mode === VALIDATION_MODE.onBlur,
  isOnChange: mode === VALIDATION_MODE.onChange,
  isOnAll: mode === VALIDATION_MODE.all,
  isOnTouch: mode === VALIDATION_MODE.onTouched
});
var isWatched = (name, _names, isBlurEvent) => !isBlurEvent && (_names.watchAll || _names.watch.has(name) || [..._names.watch].some((watchName) => name.startsWith(watchName) && /^\.\w+/.test(name.slice(watchName.length))));
var updateFieldArrayRootError = (errors, error2, name) => {
  const fieldArrayErrors = compact(get2(errors, name));
  set(fieldArrayErrors, "root", error2[name]);
  set(errors, name, fieldArrayErrors);
  return errors;
};
var isBoolean = (value) => typeof value === "boolean";
var isFileInput = (element) => element.type === "file";
var isFunction = (value) => typeof value === "function";
var isHTMLElement = (value) => {
  if (!isWeb) {
    return false;
  }
  const owner = value ? value.ownerDocument : 0;
  return value instanceof (owner && owner.defaultView ? owner.defaultView.HTMLElement : HTMLElement);
};
var isMessage = (value) => isString(value);
var isRadioInput = (element) => element.type === "radio";
var isRegex = (value) => value instanceof RegExp;
var defaultResult = {
  value: false,
  isValid: false
};
var validResult = { value: true, isValid: true };
var getCheckboxValue = (options) => {
  if (Array.isArray(options)) {
    if (options.length > 1) {
      const values = options.filter((option) => option && option.checked && !option.disabled).map((option) => option.value);
      return { value: values, isValid: !!values.length };
    }
    return options[0].checked && !options[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      options[0].attributes && !isUndefined(options[0].attributes.value) ? isUndefined(options[0].value) || options[0].value === "" ? validResult : { value: options[0].value, isValid: true } : validResult
    ) : defaultResult;
  }
  return defaultResult;
};
var defaultReturn = {
  isValid: false,
  value: null
};
var getRadioValue = (options) => Array.isArray(options) ? options.reduce((previous, option) => option && option.checked && !option.disabled ? {
  isValid: true,
  value: option.value
} : previous, defaultReturn) : defaultReturn;
function getValidateError(result, ref, type = "validate") {
  if (isMessage(result) || Array.isArray(result) && result.every(isMessage) || isBoolean(result) && !result) {
    return {
      type,
      message: isMessage(result) ? result : "",
      ref
    };
  }
}
var getValueAndMessage = (validationData) => isObject(validationData) && !isRegex(validationData) ? validationData : {
  value: validationData,
  message: ""
};
var validateField = async (field, formValues, validateAllFieldCriteria, shouldUseNativeValidation, isFieldArray) => {
  const { ref, refs, required, maxLength, minLength, min, max, pattern, validate, name, valueAsNumber, mount, disabled } = field._f;
  const inputValue = get2(formValues, name);
  if (!mount || disabled) {
    return {};
  }
  const inputRef = refs ? refs[0] : ref;
  const setCustomValidity = (message) => {
    if (shouldUseNativeValidation && inputRef.reportValidity) {
      inputRef.setCustomValidity(isBoolean(message) ? "" : message || "");
      inputRef.reportValidity();
    }
  };
  const error2 = {};
  const isRadio = isRadioInput(ref);
  const isCheckBox = isCheckBoxInput(ref);
  const isRadioOrCheckbox2 = isRadio || isCheckBox;
  const isEmpty = (valueAsNumber || isFileInput(ref)) && isUndefined(ref.value) && isUndefined(inputValue) || isHTMLElement(ref) && ref.value === "" || inputValue === "" || Array.isArray(inputValue) && !inputValue.length;
  const appendErrorsCurry = appendErrors.bind(null, name, validateAllFieldCriteria, error2);
  const getMinMaxMessage = (exceedMax, maxLengthMessage, minLengthMessage, maxType = INPUT_VALIDATION_RULES.maxLength, minType = INPUT_VALIDATION_RULES.minLength) => {
    const message = exceedMax ? maxLengthMessage : minLengthMessage;
    error2[name] = {
      type: exceedMax ? maxType : minType,
      message,
      ref,
      ...appendErrorsCurry(exceedMax ? maxType : minType, message)
    };
  };
  if (isFieldArray ? !Array.isArray(inputValue) || !inputValue.length : required && (!isRadioOrCheckbox2 && (isEmpty || isNullOrUndefined(inputValue)) || isBoolean(inputValue) && !inputValue || isCheckBox && !getCheckboxValue(refs).isValid || isRadio && !getRadioValue(refs).isValid)) {
    const { value, message } = isMessage(required) ? { value: !!required, message: required } : getValueAndMessage(required);
    if (value) {
      error2[name] = {
        type: INPUT_VALIDATION_RULES.required,
        message,
        ref: inputRef,
        ...appendErrorsCurry(INPUT_VALIDATION_RULES.required, message)
      };
      if (!validateAllFieldCriteria) {
        setCustomValidity(message);
        return error2;
      }
    }
  }
  if (!isEmpty && (!isNullOrUndefined(min) || !isNullOrUndefined(max))) {
    let exceedMax;
    let exceedMin;
    const maxOutput = getValueAndMessage(max);
    const minOutput = getValueAndMessage(min);
    if (!isNullOrUndefined(inputValue) && !isNaN(inputValue)) {
      const valueNumber = ref.valueAsNumber || (inputValue ? +inputValue : inputValue);
      if (!isNullOrUndefined(maxOutput.value)) {
        exceedMax = valueNumber > maxOutput.value;
      }
      if (!isNullOrUndefined(minOutput.value)) {
        exceedMin = valueNumber < minOutput.value;
      }
    } else {
      const valueDate = ref.valueAsDate || new Date(inputValue);
      const convertTimeToDate = (time) => new Date(new Date().toDateString() + " " + time);
      const isTime = ref.type == "time";
      const isWeek = ref.type == "week";
      if (isString(maxOutput.value) && inputValue) {
        exceedMax = isTime ? convertTimeToDate(inputValue) > convertTimeToDate(maxOutput.value) : isWeek ? inputValue > maxOutput.value : valueDate > new Date(maxOutput.value);
      }
      if (isString(minOutput.value) && inputValue) {
        exceedMin = isTime ? convertTimeToDate(inputValue) < convertTimeToDate(minOutput.value) : isWeek ? inputValue < minOutput.value : valueDate < new Date(minOutput.value);
      }
    }
    if (exceedMax || exceedMin) {
      getMinMaxMessage(!!exceedMax, maxOutput.message, minOutput.message, INPUT_VALIDATION_RULES.max, INPUT_VALIDATION_RULES.min);
      if (!validateAllFieldCriteria) {
        setCustomValidity(error2[name].message);
        return error2;
      }
    }
  }
  if ((maxLength || minLength) && !isEmpty && (isString(inputValue) || isFieldArray && Array.isArray(inputValue))) {
    const maxLengthOutput = getValueAndMessage(maxLength);
    const minLengthOutput = getValueAndMessage(minLength);
    const exceedMax = !isNullOrUndefined(maxLengthOutput.value) && inputValue.length > +maxLengthOutput.value;
    const exceedMin = !isNullOrUndefined(minLengthOutput.value) && inputValue.length < +minLengthOutput.value;
    if (exceedMax || exceedMin) {
      getMinMaxMessage(exceedMax, maxLengthOutput.message, minLengthOutput.message);
      if (!validateAllFieldCriteria) {
        setCustomValidity(error2[name].message);
        return error2;
      }
    }
  }
  if (pattern && !isEmpty && isString(inputValue)) {
    const { value: patternValue, message } = getValueAndMessage(pattern);
    if (isRegex(patternValue) && !inputValue.match(patternValue)) {
      error2[name] = {
        type: INPUT_VALIDATION_RULES.pattern,
        message,
        ref,
        ...appendErrorsCurry(INPUT_VALIDATION_RULES.pattern, message)
      };
      if (!validateAllFieldCriteria) {
        setCustomValidity(message);
        return error2;
      }
    }
  }
  if (validate) {
    if (isFunction(validate)) {
      const result = await validate(inputValue, formValues);
      const validateError = getValidateError(result, inputRef);
      if (validateError) {
        error2[name] = {
          ...validateError,
          ...appendErrorsCurry(INPUT_VALIDATION_RULES.validate, validateError.message)
        };
        if (!validateAllFieldCriteria) {
          setCustomValidity(validateError.message);
          return error2;
        }
      }
    } else if (isObject(validate)) {
      let validationResult = {};
      for (const key in validate) {
        if (!isEmptyObject(validationResult) && !validateAllFieldCriteria) {
          break;
        }
        const validateError = getValidateError(await validate[key](inputValue, formValues), inputRef, key);
        if (validateError) {
          validationResult = {
            ...validateError,
            ...appendErrorsCurry(key, validateError.message)
          };
          setCustomValidity(validateError.message);
          if (validateAllFieldCriteria) {
            error2[name] = validationResult;
          }
        }
      }
      if (!isEmptyObject(validationResult)) {
        error2[name] = {
          ref: inputRef,
          ...validationResult
        };
        if (!validateAllFieldCriteria) {
          return error2;
        }
      }
    }
  }
  setCustomValidity(true);
  return error2;
};
function baseGet(object, updatePath) {
  const length = updatePath.slice(0, -1).length;
  let index2 = 0;
  while (index2 < length) {
    object = isUndefined(object) ? index2++ : object[updatePath[index2++]];
  }
  return object;
}
function isEmptyArray(obj) {
  for (const key in obj) {
    if (!isUndefined(obj[key])) {
      return false;
    }
  }
  return true;
}
function unset(object, path) {
  const paths = Array.isArray(path) ? path : isKey(path) ? [path] : stringToPath(path);
  const childObject = paths.length === 1 ? object : baseGet(object, paths);
  const index2 = paths.length - 1;
  const key = paths[index2];
  if (childObject) {
    delete childObject[key];
  }
  if (index2 !== 0 && (isObject(childObject) && isEmptyObject(childObject) || Array.isArray(childObject) && isEmptyArray(childObject))) {
    unset(object, paths.slice(0, -1));
  }
  return object;
}
function createSubject() {
  let _observers = [];
  const next = (value) => {
    for (const observer of _observers) {
      observer.next && observer.next(value);
    }
  };
  const subscribe = (observer) => {
    _observers.push(observer);
    return {
      unsubscribe: () => {
        _observers = _observers.filter((o) => o !== observer);
      }
    };
  };
  const unsubscribe = () => {
    _observers = [];
  };
  return {
    get observers() {
      return _observers;
    },
    next,
    subscribe,
    unsubscribe
  };
}
var isPrimitive = (value) => isNullOrUndefined(value) || !isObjectType(value);
function deepEqual(object1, object2) {
  if (isPrimitive(object1) || isPrimitive(object2)) {
    return object1 === object2;
  }
  if (isDateObject(object1) && isDateObject(object2)) {
    return object1.getTime() === object2.getTime();
  }
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    const val1 = object1[key];
    if (!keys2.includes(key)) {
      return false;
    }
    if (key !== "ref") {
      const val2 = object2[key];
      if (isDateObject(val1) && isDateObject(val2) || isObject(val1) && isObject(val2) || Array.isArray(val1) && Array.isArray(val2) ? !deepEqual(val1, val2) : val1 !== val2) {
        return false;
      }
    }
  }
  return true;
}
var isMultipleSelect = (element) => element.type === `select-multiple`;
var isRadioOrCheckbox = (ref) => isRadioInput(ref) || isCheckBoxInput(ref);
var live = (ref) => isHTMLElement(ref) && ref.isConnected;
var objectHasFunction = (data) => {
  for (const key in data) {
    if (isFunction(data[key])) {
      return true;
    }
  }
  return false;
};
function markFieldsDirty(data, fields = {}) {
  const isParentNodeArray = Array.isArray(data);
  if (isObject(data) || isParentNodeArray) {
    for (const key in data) {
      if (Array.isArray(data[key]) || isObject(data[key]) && !objectHasFunction(data[key])) {
        fields[key] = Array.isArray(data[key]) ? [] : {};
        markFieldsDirty(data[key], fields[key]);
      } else if (!isNullOrUndefined(data[key])) {
        fields[key] = true;
      }
    }
  }
  return fields;
}
function getDirtyFieldsFromDefaultValues(data, formValues, dirtyFieldsFromValues) {
  const isParentNodeArray = Array.isArray(data);
  if (isObject(data) || isParentNodeArray) {
    for (const key in data) {
      if (Array.isArray(data[key]) || isObject(data[key]) && !objectHasFunction(data[key])) {
        if (isUndefined(formValues) || isPrimitive(dirtyFieldsFromValues[key])) {
          dirtyFieldsFromValues[key] = Array.isArray(data[key]) ? markFieldsDirty(data[key], []) : { ...markFieldsDirty(data[key]) };
        } else {
          getDirtyFieldsFromDefaultValues(data[key], isNullOrUndefined(formValues) ? {} : formValues[key], dirtyFieldsFromValues[key]);
        }
      } else {
        dirtyFieldsFromValues[key] = !deepEqual(data[key], formValues[key]);
      }
    }
  }
  return dirtyFieldsFromValues;
}
var getDirtyFields = (defaultValues, formValues) => getDirtyFieldsFromDefaultValues(defaultValues, formValues, markFieldsDirty(formValues));
var getFieldValueAs = (value, { valueAsNumber, valueAsDate, setValueAs }) => isUndefined(value) ? value : valueAsNumber ? value === "" ? NaN : value ? +value : value : valueAsDate && isString(value) ? new Date(value) : setValueAs ? setValueAs(value) : value;
function getFieldValue(_f) {
  const ref = _f.ref;
  if (_f.refs ? _f.refs.every((ref2) => ref2.disabled) : ref.disabled) {
    return;
  }
  if (isFileInput(ref)) {
    return ref.files;
  }
  if (isRadioInput(ref)) {
    return getRadioValue(_f.refs).value;
  }
  if (isMultipleSelect(ref)) {
    return [...ref.selectedOptions].map(({ value }) => value);
  }
  if (isCheckBoxInput(ref)) {
    return getCheckboxValue(_f.refs).value;
  }
  return getFieldValueAs(isUndefined(ref.value) ? _f.ref.value : ref.value, _f);
}
var getResolverOptions = (fieldsNames, _fields, criteriaMode, shouldUseNativeValidation) => {
  const fields = {};
  for (const name of fieldsNames) {
    const field = get2(_fields, name);
    field && set(fields, name, field._f);
  }
  return {
    criteriaMode,
    names: [...fieldsNames],
    fields,
    shouldUseNativeValidation
  };
};
var getRuleValue = (rule) => isUndefined(rule) ? rule : isRegex(rule) ? rule.source : isObject(rule) ? isRegex(rule.value) ? rule.value.source : rule.value : rule;
var hasValidation = (options) => options.mount && (options.required || options.min || options.max || options.maxLength || options.minLength || options.pattern || options.validate);
function schemaErrorLookup(errors, _fields, name) {
  const error2 = get2(errors, name);
  if (error2 || isKey(name)) {
    return {
      error: error2,
      name
    };
  }
  const names = name.split(".");
  while (names.length) {
    const fieldName = names.join(".");
    const field = get2(_fields, fieldName);
    const foundError = get2(errors, fieldName);
    if (field && !Array.isArray(field) && name !== fieldName) {
      return { name };
    }
    if (foundError && foundError.type) {
      return {
        name: fieldName,
        error: foundError
      };
    }
    names.pop();
  }
  return {
    name
  };
}
var skipValidation = (isBlurEvent, isTouched, isSubmitted, reValidateMode, mode) => {
  if (mode.isOnAll) {
    return false;
  } else if (!isSubmitted && mode.isOnTouch) {
    return !(isTouched || isBlurEvent);
  } else if (isSubmitted ? reValidateMode.isOnBlur : mode.isOnBlur) {
    return !isBlurEvent;
  } else if (isSubmitted ? reValidateMode.isOnChange : mode.isOnChange) {
    return isBlurEvent;
  }
  return true;
};
var unsetEmptyArray = (ref, name) => !compact(get2(ref, name)).length && unset(ref, name);
var defaultOptions = {
  mode: VALIDATION_MODE.onSubmit,
  reValidateMode: VALIDATION_MODE.onChange,
  shouldFocusError: true
};
function createFormControl(props = {}, flushRootRender) {
  let _options = {
    ...defaultOptions,
    ...props
  };
  let _formState = {
    submitCount: 0,
    isDirty: false,
    isLoading: isFunction(_options.defaultValues),
    isValidating: false,
    isSubmitted: false,
    isSubmitting: false,
    isSubmitSuccessful: false,
    isValid: false,
    touchedFields: {},
    dirtyFields: {},
    errors: {}
  };
  let _fields = {};
  let _defaultValues = isObject(_options.defaultValues) || isObject(_options.values) ? cloneObject(_options.defaultValues || _options.values) || {} : {};
  let _formValues = _options.shouldUnregister ? {} : cloneObject(_defaultValues);
  let _state = {
    action: false,
    mount: false,
    watch: false
  };
  let _names = {
    mount: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  };
  let delayErrorCallback;
  let timer = 0;
  const _proxyFormState = {
    isDirty: false,
    dirtyFields: false,
    touchedFields: false,
    isValidating: false,
    isValid: false,
    errors: false
  };
  const _subjects = {
    values: createSubject(),
    array: createSubject(),
    state: createSubject()
  };
  const shouldCaptureDirtyFields = props.resetOptions && props.resetOptions.keepDirtyValues;
  const validationModeBeforeSubmit = getValidationModes(_options.mode);
  const validationModeAfterSubmit = getValidationModes(_options.reValidateMode);
  const shouldDisplayAllAssociatedErrors = _options.criteriaMode === VALIDATION_MODE.all;
  const debounce = (callback) => (wait2) => {
    clearTimeout(timer);
    timer = setTimeout(callback, wait2);
  };
  const _updateValid = async (shouldUpdateValid) => {
    if (_proxyFormState.isValid || shouldUpdateValid) {
      const isValid = _options.resolver ? isEmptyObject((await _executeSchema()).errors) : await executeBuiltInValidation(_fields, true);
      if (isValid !== _formState.isValid) {
        _subjects.state.next({
          isValid
        });
      }
    }
  };
  const _updateIsValidating = (value) => _proxyFormState.isValidating && _subjects.state.next({
    isValidating: value
  });
  const _updateFieldArray = (name, values = [], method, args, shouldSetValues = true, shouldUpdateFieldsAndState = true) => {
    if (args && method) {
      _state.action = true;
      if (shouldUpdateFieldsAndState && Array.isArray(get2(_fields, name))) {
        const fieldValues = method(get2(_fields, name), args.argA, args.argB);
        shouldSetValues && set(_fields, name, fieldValues);
      }
      if (shouldUpdateFieldsAndState && Array.isArray(get2(_formState.errors, name))) {
        const errors = method(get2(_formState.errors, name), args.argA, args.argB);
        shouldSetValues && set(_formState.errors, name, errors);
        unsetEmptyArray(_formState.errors, name);
      }
      if (_proxyFormState.touchedFields && shouldUpdateFieldsAndState && Array.isArray(get2(_formState.touchedFields, name))) {
        const touchedFields = method(get2(_formState.touchedFields, name), args.argA, args.argB);
        shouldSetValues && set(_formState.touchedFields, name, touchedFields);
      }
      if (_proxyFormState.dirtyFields) {
        _formState.dirtyFields = getDirtyFields(_defaultValues, _formValues);
      }
      _subjects.state.next({
        name,
        isDirty: _getDirty(name, values),
        dirtyFields: _formState.dirtyFields,
        errors: _formState.errors,
        isValid: _formState.isValid
      });
    } else {
      set(_formValues, name, values);
    }
  };
  const updateErrors = (name, error2) => {
    set(_formState.errors, name, error2);
    _subjects.state.next({
      errors: _formState.errors
    });
  };
  const updateValidAndValue = (name, shouldSkipSetValueAs, value, ref) => {
    const field = get2(_fields, name);
    if (field) {
      const defaultValue = get2(_formValues, name, isUndefined(value) ? get2(_defaultValues, name) : value);
      isUndefined(defaultValue) || ref && ref.defaultChecked || shouldSkipSetValueAs ? set(_formValues, name, shouldSkipSetValueAs ? defaultValue : getFieldValue(field._f)) : setFieldValue(name, defaultValue);
      _state.mount && _updateValid();
    }
  };
  const updateTouchAndDirty = (name, fieldValue, isBlurEvent, shouldDirty, shouldRender) => {
    let shouldUpdateField = false;
    let isPreviousDirty = false;
    const output = {
      name
    };
    if (!isBlurEvent || shouldDirty) {
      if (_proxyFormState.isDirty) {
        isPreviousDirty = _formState.isDirty;
        _formState.isDirty = output.isDirty = _getDirty();
        shouldUpdateField = isPreviousDirty !== output.isDirty;
      }
      const isCurrentFieldPristine = deepEqual(get2(_defaultValues, name), fieldValue);
      isPreviousDirty = get2(_formState.dirtyFields, name);
      isCurrentFieldPristine ? unset(_formState.dirtyFields, name) : set(_formState.dirtyFields, name, true);
      output.dirtyFields = _formState.dirtyFields;
      shouldUpdateField = shouldUpdateField || _proxyFormState.dirtyFields && isPreviousDirty !== !isCurrentFieldPristine;
    }
    if (isBlurEvent) {
      const isPreviousFieldTouched = get2(_formState.touchedFields, name);
      if (!isPreviousFieldTouched) {
        set(_formState.touchedFields, name, isBlurEvent);
        output.touchedFields = _formState.touchedFields;
        shouldUpdateField = shouldUpdateField || _proxyFormState.touchedFields && isPreviousFieldTouched !== isBlurEvent;
      }
    }
    shouldUpdateField && shouldRender && _subjects.state.next(output);
    return shouldUpdateField ? output : {};
  };
  const shouldRenderByError = (name, isValid, error2, fieldState) => {
    const previousFieldError = get2(_formState.errors, name);
    const shouldUpdateValid = _proxyFormState.isValid && isBoolean(isValid) && _formState.isValid !== isValid;
    if (props.delayError && error2) {
      delayErrorCallback = debounce(() => updateErrors(name, error2));
      delayErrorCallback(props.delayError);
    } else {
      clearTimeout(timer);
      delayErrorCallback = null;
      error2 ? set(_formState.errors, name, error2) : unset(_formState.errors, name);
    }
    if ((error2 ? !deepEqual(previousFieldError, error2) : previousFieldError) || !isEmptyObject(fieldState) || shouldUpdateValid) {
      const updatedFormState = {
        ...fieldState,
        ...shouldUpdateValid && isBoolean(isValid) ? { isValid } : {},
        errors: _formState.errors,
        name
      };
      _formState = {
        ..._formState,
        ...updatedFormState
      };
      _subjects.state.next(updatedFormState);
    }
    _updateIsValidating(false);
  };
  const _executeSchema = async (name) => _options.resolver(_formValues, _options.context, getResolverOptions(name || _names.mount, _fields, _options.criteriaMode, _options.shouldUseNativeValidation));
  const executeSchemaAndUpdateState = async (names) => {
    const { errors } = await _executeSchema();
    if (names) {
      for (const name of names) {
        const error2 = get2(errors, name);
        error2 ? set(_formState.errors, name, error2) : unset(_formState.errors, name);
      }
    } else {
      _formState.errors = errors;
    }
    return errors;
  };
  const executeBuiltInValidation = async (fields, shouldOnlyCheckValid, context = {
    valid: true
  }) => {
    for (const name in fields) {
      const field = fields[name];
      if (field) {
        const { _f, ...fieldValue } = field;
        if (_f) {
          const isFieldArrayRoot = _names.array.has(_f.name);
          const fieldError = await validateField(field, _formValues, shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation && !shouldOnlyCheckValid, isFieldArrayRoot);
          if (fieldError[_f.name]) {
            context.valid = false;
            if (shouldOnlyCheckValid) {
              break;
            }
          }
          !shouldOnlyCheckValid && (get2(fieldError, _f.name) ? isFieldArrayRoot ? updateFieldArrayRootError(_formState.errors, fieldError, _f.name) : set(_formState.errors, _f.name, fieldError[_f.name]) : unset(_formState.errors, _f.name));
        }
        fieldValue && await executeBuiltInValidation(fieldValue, shouldOnlyCheckValid, context);
      }
    }
    return context.valid;
  };
  const _removeUnmounted = () => {
    for (const name of _names.unMount) {
      const field = get2(_fields, name);
      field && (field._f.refs ? field._f.refs.every((ref) => !live(ref)) : !live(field._f.ref)) && unregister(name);
    }
    _names.unMount = /* @__PURE__ */ new Set();
  };
  const _getDirty = (name, data) => (name && data && set(_formValues, name, data), !deepEqual(getValues(), _defaultValues));
  const _getWatch = (names, defaultValue, isGlobal) => generateWatchOutput(names, _names, {
    ..._state.mount ? _formValues : isUndefined(defaultValue) ? _defaultValues : isString(names) ? { [names]: defaultValue } : defaultValue
  }, isGlobal, defaultValue);
  const _getFieldArray = (name) => compact(get2(_state.mount ? _formValues : _defaultValues, name, props.shouldUnregister ? get2(_defaultValues, name, []) : []));
  const setFieldValue = (name, value, options = {}) => {
    const field = get2(_fields, name);
    let fieldValue = value;
    if (field) {
      const fieldReference = field._f;
      if (fieldReference) {
        !fieldReference.disabled && set(_formValues, name, getFieldValueAs(value, fieldReference));
        fieldValue = isHTMLElement(fieldReference.ref) && isNullOrUndefined(value) ? "" : value;
        if (isMultipleSelect(fieldReference.ref)) {
          [...fieldReference.ref.options].forEach((optionRef) => optionRef.selected = fieldValue.includes(optionRef.value));
        } else if (fieldReference.refs) {
          if (isCheckBoxInput(fieldReference.ref)) {
            fieldReference.refs.length > 1 ? fieldReference.refs.forEach((checkboxRef) => (!checkboxRef.defaultChecked || !checkboxRef.disabled) && (checkboxRef.checked = Array.isArray(fieldValue) ? !!fieldValue.find((data) => data === checkboxRef.value) : fieldValue === checkboxRef.value)) : fieldReference.refs[0] && (fieldReference.refs[0].checked = !!fieldValue);
          } else {
            fieldReference.refs.forEach((radioRef) => radioRef.checked = radioRef.value === fieldValue);
          }
        } else if (isFileInput(fieldReference.ref)) {
          fieldReference.ref.value = "";
        } else {
          fieldReference.ref.value = fieldValue;
          if (!fieldReference.ref.type) {
            _subjects.values.next({
              name,
              values: { ..._formValues }
            });
          }
        }
      }
    }
    (options.shouldDirty || options.shouldTouch) && updateTouchAndDirty(name, fieldValue, options.shouldTouch, options.shouldDirty, true);
    options.shouldValidate && trigger(name);
  };
  const setValues = (name, value, options) => {
    for (const fieldKey in value) {
      const fieldValue = value[fieldKey];
      const fieldName = `${name}.${fieldKey}`;
      const field = get2(_fields, fieldName);
      (_names.array.has(name) || !isPrimitive(fieldValue) || field && !field._f) && !isDateObject(fieldValue) ? setValues(fieldName, fieldValue, options) : setFieldValue(fieldName, fieldValue, options);
    }
  };
  const setValue = (name, value, options = {}) => {
    const field = get2(_fields, name);
    const isFieldArray = _names.array.has(name);
    const cloneValue = cloneObject(value);
    set(_formValues, name, cloneValue);
    if (isFieldArray) {
      _subjects.array.next({
        name,
        values: { ..._formValues }
      });
      if ((_proxyFormState.isDirty || _proxyFormState.dirtyFields) && options.shouldDirty) {
        _subjects.state.next({
          name,
          dirtyFields: getDirtyFields(_defaultValues, _formValues),
          isDirty: _getDirty(name, cloneValue)
        });
      }
    } else {
      field && !field._f && !isNullOrUndefined(cloneValue) ? setValues(name, cloneValue, options) : setFieldValue(name, cloneValue, options);
    }
    isWatched(name, _names) && _subjects.state.next({ ..._formState });
    _subjects.values.next({
      name,
      values: { ..._formValues }
    });
    !_state.mount && flushRootRender();
  };
  const onChange = async (event) => {
    const target = event.target;
    let name = target.name;
    let isFieldValueUpdated = true;
    const field = get2(_fields, name);
    const getCurrentFieldValue = () => target.type ? getFieldValue(field._f) : getEventValue(event);
    if (field) {
      let error2;
      let isValid;
      const fieldValue = getCurrentFieldValue();
      const isBlurEvent = event.type === EVENTS.BLUR || event.type === EVENTS.FOCUS_OUT;
      const shouldSkipValidation = !hasValidation(field._f) && !_options.resolver && !get2(_formState.errors, name) && !field._f.deps || skipValidation(isBlurEvent, get2(_formState.touchedFields, name), _formState.isSubmitted, validationModeAfterSubmit, validationModeBeforeSubmit);
      const watched = isWatched(name, _names, isBlurEvent);
      set(_formValues, name, fieldValue);
      if (isBlurEvent) {
        field._f.onBlur && field._f.onBlur(event);
        delayErrorCallback && delayErrorCallback(0);
      } else if (field._f.onChange) {
        field._f.onChange(event);
      }
      const fieldState = updateTouchAndDirty(name, fieldValue, isBlurEvent, false);
      const shouldRender = !isEmptyObject(fieldState) || watched;
      !isBlurEvent && _subjects.values.next({
        name,
        type: event.type,
        values: { ..._formValues }
      });
      if (shouldSkipValidation) {
        _proxyFormState.isValid && _updateValid();
        return shouldRender && _subjects.state.next({ name, ...watched ? {} : fieldState });
      }
      !isBlurEvent && watched && _subjects.state.next({ ..._formState });
      _updateIsValidating(true);
      if (_options.resolver) {
        const { errors } = await _executeSchema([name]);
        const previousErrorLookupResult = schemaErrorLookup(_formState.errors, _fields, name);
        const errorLookupResult = schemaErrorLookup(errors, _fields, previousErrorLookupResult.name || name);
        error2 = errorLookupResult.error;
        name = errorLookupResult.name;
        isValid = isEmptyObject(errors);
      } else {
        error2 = (await validateField(field, _formValues, shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation))[name];
        isFieldValueUpdated = isNaN(fieldValue) || fieldValue === get2(_formValues, name, fieldValue);
        if (isFieldValueUpdated) {
          if (error2) {
            isValid = false;
          } else if (_proxyFormState.isValid) {
            isValid = await executeBuiltInValidation(_fields, true);
          }
        }
      }
      if (isFieldValueUpdated) {
        field._f.deps && trigger(field._f.deps);
        shouldRenderByError(name, isValid, error2, fieldState);
      }
    }
  };
  const trigger = async (name, options = {}) => {
    let isValid;
    let validationResult;
    const fieldNames = convertToArrayPayload(name);
    _updateIsValidating(true);
    if (_options.resolver) {
      const errors = await executeSchemaAndUpdateState(isUndefined(name) ? name : fieldNames);
      isValid = isEmptyObject(errors);
      validationResult = name ? !fieldNames.some((name2) => get2(errors, name2)) : isValid;
    } else if (name) {
      validationResult = (await Promise.all(fieldNames.map(async (fieldName) => {
        const field = get2(_fields, fieldName);
        return await executeBuiltInValidation(field && field._f ? { [fieldName]: field } : field);
      }))).every(Boolean);
      !(!validationResult && !_formState.isValid) && _updateValid();
    } else {
      validationResult = isValid = await executeBuiltInValidation(_fields);
    }
    _subjects.state.next({
      ...!isString(name) || _proxyFormState.isValid && isValid !== _formState.isValid ? {} : { name },
      ..._options.resolver || !name ? { isValid } : {},
      errors: _formState.errors,
      isValidating: false
    });
    options.shouldFocus && !validationResult && focusFieldBy(_fields, (key) => key && get2(_formState.errors, key), name ? fieldNames : _names.mount);
    return validationResult;
  };
  const getValues = (fieldNames) => {
    const values = {
      ..._defaultValues,
      ..._state.mount ? _formValues : {}
    };
    return isUndefined(fieldNames) ? values : isString(fieldNames) ? get2(values, fieldNames) : fieldNames.map((name) => get2(values, name));
  };
  const getFieldState = (name, formState) => ({
    invalid: !!get2((formState || _formState).errors, name),
    isDirty: !!get2((formState || _formState).dirtyFields, name),
    isTouched: !!get2((formState || _formState).touchedFields, name),
    error: get2((formState || _formState).errors, name)
  });
  const clearErrors = (name) => {
    name && convertToArrayPayload(name).forEach((inputName) => unset(_formState.errors, inputName));
    _subjects.state.next({
      errors: name ? _formState.errors : {}
    });
  };
  const setError = (name, error2, options) => {
    const ref = (get2(_fields, name, { _f: {} })._f || {}).ref;
    set(_formState.errors, name, {
      ...error2,
      ref
    });
    _subjects.state.next({
      name,
      errors: _formState.errors,
      isValid: false
    });
    options && options.shouldFocus && ref && ref.focus && ref.focus();
  };
  const watch = (name, defaultValue) => isFunction(name) ? _subjects.values.subscribe({
    next: (payload) => name(_getWatch(void 0, defaultValue), payload)
  }) : _getWatch(name, defaultValue, true);
  const unregister = (name, options = {}) => {
    for (const fieldName of name ? convertToArrayPayload(name) : _names.mount) {
      _names.mount.delete(fieldName);
      _names.array.delete(fieldName);
      if (!options.keepValue) {
        unset(_fields, fieldName);
        unset(_formValues, fieldName);
      }
      !options.keepError && unset(_formState.errors, fieldName);
      !options.keepDirty && unset(_formState.dirtyFields, fieldName);
      !options.keepTouched && unset(_formState.touchedFields, fieldName);
      !_options.shouldUnregister && !options.keepDefaultValue && unset(_defaultValues, fieldName);
    }
    _subjects.values.next({
      values: { ..._formValues }
    });
    _subjects.state.next({
      ..._formState,
      ...!options.keepDirty ? {} : { isDirty: _getDirty() }
    });
    !options.keepIsValid && _updateValid();
  };
  const register = (name, options = {}) => {
    let field = get2(_fields, name);
    const disabledIsDefined = isBoolean(options.disabled);
    set(_fields, name, {
      ...field || {},
      _f: {
        ...field && field._f ? field._f : { ref: { name } },
        name,
        mount: true,
        ...options
      }
    });
    _names.mount.add(name);
    field ? disabledIsDefined && set(_formValues, name, options.disabled ? void 0 : get2(_formValues, name, getFieldValue(field._f))) : updateValidAndValue(name, true, options.value);
    return {
      ...disabledIsDefined ? { disabled: options.disabled } : {},
      ..._options.shouldUseNativeValidation ? {
        required: !!options.required,
        min: getRuleValue(options.min),
        max: getRuleValue(options.max),
        minLength: getRuleValue(options.minLength),
        maxLength: getRuleValue(options.maxLength),
        pattern: getRuleValue(options.pattern)
      } : {},
      name,
      onChange,
      onBlur: onChange,
      ref: (ref) => {
        if (ref) {
          register(name, options);
          field = get2(_fields, name);
          const fieldRef = isUndefined(ref.value) ? ref.querySelectorAll ? ref.querySelectorAll("input,select,textarea")[0] || ref : ref : ref;
          const radioOrCheckbox = isRadioOrCheckbox(fieldRef);
          const refs = field._f.refs || [];
          if (radioOrCheckbox ? refs.find((option) => option === fieldRef) : fieldRef === field._f.ref) {
            return;
          }
          set(_fields, name, {
            _f: {
              ...field._f,
              ...radioOrCheckbox ? {
                refs: [
                  ...refs.filter(live),
                  fieldRef,
                  ...Array.isArray(get2(_defaultValues, name)) ? [{}] : []
                ],
                ref: { type: fieldRef.type, name }
              } : { ref: fieldRef }
            }
          });
          updateValidAndValue(name, false, void 0, fieldRef);
        } else {
          field = get2(_fields, name, {});
          if (field._f) {
            field._f.mount = false;
          }
          (_options.shouldUnregister || options.shouldUnregister) && !(isNameInFieldArray(_names.array, name) && _state.action) && _names.unMount.add(name);
        }
      }
    };
  };
  const _focusError = () => _options.shouldFocusError && focusFieldBy(_fields, (key) => key && get2(_formState.errors, key), _names.mount);
  const handleSubmit2 = (onValid, onInvalid) => async (e) => {
    if (e) {
      e.preventDefault && e.preventDefault();
      e.persist && e.persist();
    }
    let fieldValues = cloneObject(_formValues);
    _subjects.state.next({
      isSubmitting: true
    });
    if (_options.resolver) {
      const { errors, values } = await _executeSchema();
      _formState.errors = errors;
      fieldValues = values;
    } else {
      await executeBuiltInValidation(_fields);
    }
    unset(_formState.errors, "root");
    if (isEmptyObject(_formState.errors)) {
      _subjects.state.next({
        errors: {}
      });
      await onValid(fieldValues, e);
    } else {
      if (onInvalid) {
        await onInvalid({ ..._formState.errors }, e);
      }
      _focusError();
      setTimeout(_focusError);
    }
    _subjects.state.next({
      isSubmitted: true,
      isSubmitting: false,
      isSubmitSuccessful: isEmptyObject(_formState.errors),
      submitCount: _formState.submitCount + 1,
      errors: _formState.errors
    });
  };
  const resetField = (name, options = {}) => {
    if (get2(_fields, name)) {
      if (isUndefined(options.defaultValue)) {
        setValue(name, get2(_defaultValues, name));
      } else {
        setValue(name, options.defaultValue);
        set(_defaultValues, name, options.defaultValue);
      }
      if (!options.keepTouched) {
        unset(_formState.touchedFields, name);
      }
      if (!options.keepDirty) {
        unset(_formState.dirtyFields, name);
        _formState.isDirty = options.defaultValue ? _getDirty(name, get2(_defaultValues, name)) : _getDirty();
      }
      if (!options.keepError) {
        unset(_formState.errors, name);
        _proxyFormState.isValid && _updateValid();
      }
      _subjects.state.next({ ..._formState });
    }
  };
  const _reset = (formValues, keepStateOptions = {}) => {
    const updatedValues = formValues || _defaultValues;
    const cloneUpdatedValues = cloneObject(updatedValues);
    const values = formValues && !isEmptyObject(formValues) ? cloneUpdatedValues : _defaultValues;
    if (!keepStateOptions.keepDefaultValues) {
      _defaultValues = updatedValues;
    }
    if (!keepStateOptions.keepValues) {
      if (keepStateOptions.keepDirtyValues || shouldCaptureDirtyFields) {
        for (const fieldName of _names.mount) {
          get2(_formState.dirtyFields, fieldName) ? set(values, fieldName, get2(_formValues, fieldName)) : setValue(fieldName, get2(values, fieldName));
        }
      } else {
        if (isWeb && isUndefined(formValues)) {
          for (const name of _names.mount) {
            const field = get2(_fields, name);
            if (field && field._f) {
              const fieldReference = Array.isArray(field._f.refs) ? field._f.refs[0] : field._f.ref;
              if (isHTMLElement(fieldReference)) {
                const form = fieldReference.closest("form");
                if (form) {
                  form.reset();
                  break;
                }
              }
            }
          }
        }
        _fields = {};
      }
      _formValues = props.shouldUnregister ? keepStateOptions.keepDefaultValues ? cloneObject(_defaultValues) : {} : cloneUpdatedValues;
      _subjects.array.next({
        values: { ...values }
      });
      _subjects.values.next({
        values: { ...values }
      });
    }
    _names = {
      mount: /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: false,
      focus: ""
    };
    !_state.mount && flushRootRender();
    _state.mount = !_proxyFormState.isValid || !!keepStateOptions.keepIsValid;
    _state.watch = !!props.shouldUnregister;
    _subjects.state.next({
      submitCount: keepStateOptions.keepSubmitCount ? _formState.submitCount : 0,
      isDirty: keepStateOptions.keepDirty ? _formState.isDirty : !!(keepStateOptions.keepDefaultValues && !deepEqual(formValues, _defaultValues)),
      isSubmitted: keepStateOptions.keepIsSubmitted ? _formState.isSubmitted : false,
      dirtyFields: keepStateOptions.keepDirtyValues ? _formState.dirtyFields : keepStateOptions.keepDefaultValues && formValues ? getDirtyFields(_defaultValues, formValues) : {},
      touchedFields: keepStateOptions.keepTouched ? _formState.touchedFields : {},
      errors: keepStateOptions.keepErrors ? _formState.errors : {},
      isSubmitting: false,
      isSubmitSuccessful: false
    });
  };
  const reset = (formValues, keepStateOptions) => _reset(isFunction(formValues) ? formValues(_formValues) : formValues, keepStateOptions);
  const setFocus = (name, options = {}) => {
    const field = get2(_fields, name);
    const fieldReference = field && field._f;
    if (fieldReference) {
      const fieldRef = fieldReference.refs ? fieldReference.refs[0] : fieldReference.ref;
      if (fieldRef.focus) {
        fieldRef.focus();
        options.shouldSelect && fieldRef.select();
      }
    }
  };
  const _updateFormState = (updatedFormState) => {
    _formState = {
      ..._formState,
      ...updatedFormState
    };
  };
  const _resetDefaultValues = () => isFunction(_options.defaultValues) && _options.defaultValues().then((values) => {
    reset(values, _options.resetOptions);
    _subjects.state.next({
      isLoading: false
    });
  });
  return {
    control: {
      register,
      unregister,
      getFieldState,
      _executeSchema,
      _getWatch,
      _getDirty,
      _updateValid,
      _removeUnmounted,
      _updateFieldArray,
      _getFieldArray,
      _reset,
      _resetDefaultValues,
      _updateFormState,
      _subjects,
      _proxyFormState,
      get _fields() {
        return _fields;
      },
      get _formValues() {
        return _formValues;
      },
      get _state() {
        return _state;
      },
      set _state(value) {
        _state = value;
      },
      get _defaultValues() {
        return _defaultValues;
      },
      get _names() {
        return _names;
      },
      set _names(value) {
        _names = value;
      },
      get _formState() {
        return _formState;
      },
      set _formState(value) {
        _formState = value;
      },
      get _options() {
        return _options;
      },
      set _options(value) {
        _options = {
          ..._options,
          ...value
        };
      }
    },
    trigger,
    register,
    handleSubmit: handleSubmit2,
    watch,
    setValue,
    getValues,
    reset,
    resetField,
    clearErrors,
    unregister,
    setError,
    setFocus,
    getFieldState
  };
}
function useForm(props = {}) {
  const _formControl = import_react14.default.useRef();
  const [formState, updateFormState] = import_react14.default.useState({
    isDirty: false,
    isValidating: false,
    isLoading: isFunction(props.defaultValues),
    isSubmitted: false,
    isSubmitting: false,
    isSubmitSuccessful: false,
    isValid: false,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    errors: {},
    defaultValues: isFunction(props.defaultValues) ? void 0 : props.defaultValues
  });
  if (!_formControl.current) {
    _formControl.current = {
      ...createFormControl(props, () => updateFormState((formState2) => ({ ...formState2 }))),
      formState
    };
  }
  const control = _formControl.current.control;
  control._options = props;
  useSubscribe({
    subject: control._subjects.state,
    next: (value) => {
      if (shouldRenderFormState(value, control._proxyFormState, control._updateFormState, true)) {
        updateFormState({ ...control._formState });
      }
    }
  });
  import_react14.default.useEffect(() => {
    if (props.values && !deepEqual(props.values, control._defaultValues)) {
      control._reset(props.values, control._options.resetOptions);
    } else {
      control._resetDefaultValues();
    }
  }, [props.values, control]);
  import_react14.default.useEffect(() => {
    if (!control._state.mount) {
      control._updateValid();
      control._state.mount = true;
    }
    if (control._state.watch) {
      control._state.watch = false;
      control._subjects.state.next({ ...control._formState });
    }
    control._removeUnmounted();
  });
  _formControl.current.formState = getProxyFormState(formState, control);
  return _formControl.current;
}

// src/features/prompt/components/FormLabelRequiredFlag.tsx
var import_jsx_runtime19 = __toESM(require_jsx_runtime());
var FormLabelRequiredFlag = () => /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
  Typography_default,
  {
    component: "span",
    fontSize: "inherit !important",
    color: "rgb(244, 67, 54)",
    children: [
      " ",
      "*"
    ]
  }
);
var FormLabelRequiredFlag_default = FormLabelRequiredFlag;

// src/features/prompt/components/PromptTemplateInput.tsx
var import_react19 = __toESM(require_react());
var import_react_contenteditable = __toESM(require_react_contenteditable());

// src/features/prompt/components/PromptVariableSelector.tsx
var import_Add = __toESM(require_Add());
var import_EditOutlined = __toESM(require_EditOutlined());
var import_HelpOutline = __toESM(require_HelpOutline());
var import_Search2 = __toESM(require_Search());
var import_react18 = __toESM(require_react());

// src/features/prompt/hooks/usePromptVariableController.ts
var import_react15 = __toESM(require_react());

// src/features/prompt/store/promptVariables.ts
var PromptVariables = Recoil_index_8({
  key: "PromptVariablesAtom",
  default: []
});
var PromptVariableColorIndex = Recoil_index_8({
  key: "PromptVariableColorIndexAtom",
  default: 0
});

// src/features/prompt/hooks/usePromptVariableController.ts
var usePromptVariableController = () => {
  const [variables, setVariables] = Recoil_index_22(PromptVariables);
  const [colorIndex, setColorIndex] = Recoil_index_22(PromptVariableColorIndex);
  const initReservedVariable = (0, import_react15.useCallback)(() => {
    batchAddVariable([], true);
  }, []);
  const batchGenerateVariable = (0, import_react15.useCallback)(
    (data, colorIndex2) => {
      let currentColorIndex = colorIndex2;
      const newVariables = data.map((item) => {
        const newVariable = {
          ...item,
          hint: item.hint,
          name: item.name,
          color: PROMPT_COLORS[currentColorIndex],
          type: item.type
        };
        currentColorIndex = currentColorIndex + 1 > PROMPT_COLORS.length - 1 ? 0 : currentColorIndex + 1;
        return newVariable;
      });
      return {
        newVariables,
        currentColorIndex
      };
    },
    []
  );
  const batchAddVariable = (0, import_react15.useCallback)(
    // cover: 是否覆盖更新
    (data, cover = false) => {
      const coverData = data;
      const { currentColorIndex, newVariables } = batchGenerateVariable(
        coverData,
        cover ? 0 : colorIndex
      );
      setVariables((preVariables) => {
        if (cover) {
          return newVariables;
        }
        return uniqBy_default([...preVariables, ...newVariables], "name");
      });
      setColorIndex(currentColorIndex);
      return newVariables;
    },
    [colorIndex]
  );
  const addVariable = (0, import_react15.useCallback)(
    (data) => {
      const [newVariable] = batchAddVariable([data]);
      return newVariable;
    },
    [batchAddVariable]
  );
  const editVariable = (0, import_react15.useCallback)(
    (index2, newData) => {
      const result = {
        oldVariableName: "",
        newVariable: newData
      };
      setVariables((preVariables) => {
        const newVariables = [...preVariables];
        const preVariable = preVariables[index2];
        result.oldVariableName = preVariable.name;
        newVariables[index2] = { ...preVariable, ...newData };
        result.newVariable = newVariables[index2];
        return newVariables;
      });
      return result;
    },
    []
  );
  return {
    variables,
    reservedVariable: variables,
    initReservedVariable,
    addVariable,
    batchAddVariable,
    batchGenerateVariable,
    editVariable
  };
};
var usePromptVariableController_default = usePromptVariableController;

// src/features/prompt/components/PromptVariableForm.tsx
var import_react16 = __toESM(require_react());
var import_jsx_runtime20 = __toESM(require_jsx_runtime());
var inputProps = {
  sx: {
    fontSize: "16px !important"
  }
};
var formHelperTextProps = {
  sx: { ml: 0 }
};
var PromptVariableForm = ({
  type,
  defaultName,
  defaultHint,
  onCancel,
  onConfirm
}) => {
  const [loading, setLoading] = (0, import_react16.useState)(false);
  const inputRefs = (0, import_react16.useRef)([]);
  const { variables } = usePromptVariableController_default();
  const {
    setError,
    register,
    getValues,
    setValue,
    // reset,
    clearErrors,
    trigger,
    formState: { errors }
  } = useForm();
  const hintRegisterForm = register("hint");
  const variableNameRegisterForm = register("variableName", { required: true });
  const checkVariableNameExist = (0, import_react16.useCallback)(
    (variableName) => {
      return variables.some(
        (variable) => variable.name === variableName && variableName !== defaultName
      );
    },
    [variables, defaultName]
  );
  const handleSubmit2 = async () => {
    setLoading(true);
    const validation = await trigger();
    const formData = getValues();
    const variableName = formData.variableName.trim();
    if (DEFAULT_PROMPT_VARIABLE.some(
      (item) => item.name.toLowerCase() === variableName.toLowerCase()
    )) {
      setError("variableName", {
        type: "custom",
        message: "The variable name is already in use. Please choose another."
      });
      setLoading(false);
      return;
    }
    if (checkVariableNameExist(formData.variableName)) {
      setError("variableName", {
        type: "custom",
        message: "Variable names cannot be repeated"
      });
      setLoading(false);
      return;
    }
    if (validation) {
      const newVariable = {
        name: variableName,
        type: "text",
        hint: formData.hint
      };
      onConfirm && onConfirm(newVariable);
    } else {
    }
    setLoading(false);
  };
  const handlePressEnterWithAutoFocusNext = (0, import_react16.useCallback)((event) => {
    const { key, target } = event;
    if (key === "Enter" && target && target.name) {
      event.preventDefault();
      const name = target.name;
      const indexs = ["variableName", "hint"];
      const index2 = indexs.findIndex((item) => item === name);
      const nextInex = index2 + 1;
      if (nextInex < inputRefs.current.length && inputRefs.current[nextInex]) {
        inputRefs.current[nextInex].focus();
      } else {
        handleSubmit2();
      }
    }
  }, []);
  const handleVariableKeyPress = (0, import_react16.useCallback)((event) => {
    const { key } = event;
    clearErrors();
    if (key === "Enter") {
      handlePressEnterWithAutoFocusNext(event);
    }
    if (key === "{" || key === "}") {
      event.preventDefault();
    }
  }, []);
  (0, import_react16.useEffect)(() => {
    if (defaultName) {
      setValue("variableName", defaultName);
    }
    if (defaultHint) {
      setValue("hint", defaultHint);
    }
  }, [defaultName, defaultHint]);
  (0, import_react16.useEffect)(() => {
    if (type === "add") {
      inputRefs.current[1]?.focus();
    }
    if (type === "edit") {
      inputRefs.current[0]?.focus();
    }
  }, [type]);
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(Grid_default, { container: true, spacing: 2, children: [
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Grid_default, { item: true, xs: 12, children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(FormControl_default, { size: "small", variant: "standard", fullWidth: true, children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(FormLabel_default, { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(Typography_default, { variant: "body2", children: [
        "Variable name",
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(FormLabelRequiredFlag_default, {})
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
        TextField_default,
        {
          ...variableNameRegisterForm,
          size: "small",
          InputProps: inputProps,
          onKeyPress: handleVariableKeyPress,
          placeholder: "Enter variable name",
          error: !!errors.variableName,
          FormHelperTextProps: formHelperTextProps,
          inputRef: (ref) => inputRefs.current[0] = ref,
          helperText: errors.variableName ? errors.variableName?.message || "Variable name is required" : ""
        }
      )
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Grid_default, { item: true, xs: 12, children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(FormControl_default, { size: "small", variant: "standard", fullWidth: true, children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(FormLabel_default, { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Typography_default, { variant: "body2", children: "Variable hint" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
        TextField_default,
        {
          ...hintRegisterForm,
          onKeyPress: handleVariableKeyPress,
          size: "small",
          InputProps: inputProps,
          inputRef: (ref) => inputRefs.current[1] = ref,
          placeholder: "Enter variable hint"
        }
      )
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Grid_default, { item: true, xs: 12, children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(Stack_default, { direction: "row", justifyContent: "flex-end", spacing: 1, pt: 1, children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Button_default, { variant: "secondary", onClick: onCancel, children: "Cancel" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
        LoadingButton_default,
        {
          loading,
          variant: "contained",
          onClick: handleSubmit2,
          children: type === "add" ? "Add" : "Save"
        }
      )
    ] }) })
  ] });
};
var PromptVariableForm_default = PromptVariableForm;

// src/features/prompt/components/PromptVariableTag.tsx
var import_react17 = __toESM(require_react());
var import_jsx_runtime21 = __toESM(require_jsx_runtime());
var variableColorMap = {
  livecrawling: {
    color: "#7601D3",
    bgcolor: "#EBE2F4"
  },
  websearch: {
    color: "#1B72E7",
    bgcolor: "#E4EBF6"
  },
  system: {
    color: "#0FA47F",
    bgcolor: "#D9F0EB"
  },
  text: {
    color: "text.primary",
    bgcolor: ""
  }
};
var PromptVariableTag = ({ onClick, ...variable }) => {
  const textColor = (0, import_react17.useMemo)(() => {
    if (variable.color || variable.type === "text" || variable.type === void 0) {
      return {
        color: variable.color,
        bgcolor: (t) => t.palette.mode === "dark" ? "rgba(178, 115, 255, 0.16)" : "rgba(118, 1, 211, 0.08)"
      };
    }
    return variableColorMap[variable.type];
  }, [variable.type, variable.color]);
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
    Typography_default,
    {
      variant: "custom",
      sx: (t) => {
        return {
          fontSize: 14,
          lineHeight: 1.4,
          px: 0.6,
          py: "2px",
          // mr: 1,
          borderRadius: 1,
          cursor: onClick ? "pointer" : "auto",
          userSelect: "none",
          ...textColor
        };
      },
      onClick: () => {
        onClick && onClick(variable);
      },
      children: `{{${variable.name}}}`
    }
  );
};
var PromptVariableTag_default = PromptVariableTag;

// src/features/prompt/components/PromptVariableSelector.tsx
var import_jsx_runtime22 = __toESM(require_jsx_runtime());
var VARIABLE_MENU_LIST_ID = "variable-menu-list-container";
var presetVariablesTooltip = /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(Typography_default, { fontSize: 14, children: [
  "The official ready-to-use special variables. ",
  /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("br", {}),
  /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("br", {}),
  "You can use any or none of these ready-to-use variables in your template:",
  /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Divider_default, { sx: { my: 2 } }),
  'Variables for "Live Crawling":',
  /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("br", {}),
  /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("br", {}),
  `By using these variables, the text will be crawled from the given website link {{Live Crawling Target URL}}. The {{Live Crawling Crawled Text}} will then show this crawled text.`,
  /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Divider_default, { sx: { my: 2 } }),
  'Variables for "Web Search":',
  /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("br", {}),
  /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("br", {}),
  `When you use these variables, the system will search for {{Web Search Query}}. Then, {{Web Search Results}} will show these search results.`,
  /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Divider_default, { sx: { my: 2 } }),
  'Variables about the "System":',
  /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("br", {}),
  /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("br", {}),
  `{{System Current Date}} will show today's date.`,
  /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("br", {}),
  /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("br", {}),
  'More "System" variables might be added later.'
] });
var variablesTooltip = /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Typography_default, { fontSize: 14, children: `You can add variables that will turn into fillable text fields in the prompt template. Try typing {{ on your prompt and start creating variables for your prompt template. You can use variables more than once in your prompt template. All created variables will be listed here.` });
var findCanFocusEl = (container, type = "first") => {
  const el = container[type === "first" ? "firstChild" : "lastChild"];
  if (!el)
    return;
  if (el.tagName === "BUTTON") {
    return el;
  } else {
    const lis = container.querySelectorAll("li");
    return lis[type === "first" ? 0 : lis.length - 1];
  }
};
var defaultVariablesFormat = () => {
  const variables = [];
  DEFAULT_PROMPT_VARIABLE.forEach((variable) => {
    const { type } = variable;
    const typeListIndex = variables.findIndex((item) => item.type === type);
    if (typeListIndex > -1) {
      variables[typeListIndex].data.push(variable);
    } else {
      variables.push({
        type,
        name: VARIABLE_TYPE_LABEL_MAP[type],
        data: [variable]
      });
    }
  });
  return variables;
};
var PromptVariableSelector = (props, ref) => {
  const { onInsertVariable, onUpdateVariable } = props;
  const menuListRef = (0, import_react18.useRef)(null);
  const inputRef = (0, import_react18.useRef)(null);
  const [inputValue, setInputValue] = (0, import_react18.useState)("");
  const [variableFormShow, setVariableFormShow] = (0, import_react18.useState)(false);
  const [variableFormType, setVariableFormType] = (0, import_react18.useState)(
    "add"
  );
  const [variableFormEditIndex, setVariableFormEditIndex] = (0, import_react18.useState)(-1);
  const [variableFormDefaultData, setVariableFormDefaultData] = (0, import_react18.useState)(null);
  const { variables, addVariable, editVariable } = usePromptVariableController_default();
  const filterVariable = (0, import_react18.useMemo)(() => {
    let filteredVariables = variables.filter(
      (variable) => !variable.isSystemVariable
    );
    if (inputValue.length <= 0)
      return filteredVariables;
    return filteredVariables.filter(
      (variable) => variable.name.includes(inputValue)
    );
  }, [inputValue, variables]);
  const showAddBtn = (0, import_react18.useMemo)(() => {
    return inputValue.length > 0;
  }, [inputValue]);
  const handlePromptVariableFormConfirm = (newVariable) => {
    setInputValue("");
    try {
      if (variableFormType === "edit") {
        const result = editVariable(variableFormEditIndex, newVariable);
        onUpdateVariable && onUpdateVariable(result.oldVariableName, result.newVariable);
      } else {
        const data = addVariable(newVariable);
        onInsertVariable && onInsertVariable(data);
      }
    } catch (error2) {
    }
    setVariableFormShow(false);
    setVariableFormDefaultData(null);
  };
  const handleClickOptionEdit = (index2) => {
    setVariableFormEditIndex(index2);
    setVariableFormType("edit");
    setVariableFormDefaultData(variables[index2]);
    setVariableFormShow(true);
  };
  const handleClickOption = (variable) => {
    setInputValue("");
    onInsertVariable && onInsertVariable(variable);
  };
  const handleClickAddBtn = () => {
    setVariableFormDefaultData({
      name: inputValue,
      type: "text"
    });
    setVariableFormType("add");
    setVariableFormShow(true);
  };
  const handleVariableKeyPress = (0, import_react18.useCallback)(
    (event) => {
      const { key } = event;
      if (key === "Enter") {
        event.preventDefault();
        if (showAddBtn) {
          handleClickAddBtn();
        }
      }
      if (key === "{" || key === "}") {
        event.preventDefault();
      }
    },
    [showAddBtn, handleClickAddBtn, filterVariable]
  );
  const PanelTitle = (0, import_react18.useMemo)(() => {
    if (variableFormType === "add") {
      return "Add new variable";
    }
    if (variableFormType === "edit") {
      return "Edit variable";
    }
    return "Insert variables";
  }, [variableFormType]);
  const defaultVariablesTree = (0, import_react18.useMemo)(defaultVariablesFormat, []);
  const handleFocusListItem = (type) => {
    if (menuListRef.current) {
      const container = menuListRef.current;
      const el = findCanFocusEl(container, type);
      if (el) {
        el.focus();
      }
    }
  };
  const handleListItemArrowUpKeyPress = (e) => {
    const currentEl = e.target;
    if (!currentEl)
      return;
    if (currentEl === currentEl.parentElement?.firstChild) {
      handleInputFocus();
    } else {
      if (currentEl.previousSibling) {
        currentEl.blur();
        currentEl.previousSibling.focus();
      }
    }
  };
  const handleListItemArrowDownKeyPress = (e) => {
    const currentEl = e.target;
    if (currentEl) {
      if (currentEl?.nextSibling) {
        currentEl.blur();
        currentEl.nextSibling.focus();
      } else {
        handleInputFocus();
      }
    }
  };
  const handleInputFocus = () => {
    const inputEl = inputRef.current;
    if (inputEl) {
      inputEl.focus();
      setTimeout(() => {
        if (inputEl) {
          inputEl.setSelectionRange(inputEl.value.length, inputEl.value.length);
        }
      }, 0);
    }
  };
  (0, import_react18.useEffect)(() => {
    if (variableFormShow === false) {
      setVariableFormType("add");
    }
  }, [variableFormShow]);
  (0, import_react18.useImperativeHandle)(ref, () => {
    return {
      onFocus: () => {
        handleInputFocus();
      },
      closeVariableForm: () => {
        setVariableFormShow(false);
      }
    };
  });
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
    Stack_default,
    {
      p: 1,
      mt: 0.5,
      borderRadius: 1,
      sx: {
        bgcolor: (t) => t.palette.mode === "dark" ? "rgba(255, 255, 255, 0.04);" : "#F6F7F8"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(Stack_default, { direction: "row", alignItems: "center", spacing: 0.5, mb: 1, children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Typography_default, { variant: "custom", fontSize: 14, children: "Use preset variables" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Tooltip_default, { title: presetVariablesTooltip, children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_HelpOutline.default, { fontSize: "small" }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
          Stack_default,
          {
            sx: {
              border: "1px solid",
              borderColor: "customColor.borderColor",
              bgcolor: "customColor.paperBackground",
              borderRadius: 1,
              mb: 2
            },
            children: defaultVariablesTree.map((typeData, index2) => /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
              Stack_default,
              {
                direction: "row",
                borderBottom: index2 < defaultVariablesTree.length - 1 ? "1px solid" : "none",
                borderColor: "inherit",
                alignItems: "center",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
                    Stack_default,
                    {
                      p: 1,
                      flexBasis: "15%",
                      flexDirection: "row",
                      alignItems: "center",
                      children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Typography_default, { variant: "body2", children: typeData.name })
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
                    Stack_default,
                    {
                      direction: "row",
                      p: 1,
                      spacing: 1,
                      flexWrap: "wrap",
                      alignItems: "center",
                      borderLeft: "1px solid",
                      borderColor: "inherit",
                      children: typeData.data.map((variable) => /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
                        PromptVariableTag_default,
                        {
                          ...variable,
                          onClick: handlePromptVariableFormConfirm
                        },
                        variable.name
                      ))
                    }
                  )
                ]
              },
              typeData.type
            ))
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(Stack_default, { direction: "row", alignItems: "center", spacing: 0.5, mb: 1, children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Typography_default, { variant: "custom", fontSize: 14, children: PanelTitle }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Tooltip_default, { title: variablesTooltip, children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_HelpOutline.default, { fontSize: "small" }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
          Box_default,
          {
            p: 1,
            bgcolor: (t) => t.palette.mode === "dark" ? "#343540" : "white",
            children: variableFormShow ? /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
              PromptVariableForm_default,
              {
                type: variableFormType,
                defaultHint: variableFormDefaultData?.hint,
                defaultName: variableFormDefaultData?.name,
                onConfirm: handlePromptVariableFormConfirm,
                onCancel: () => {
                  setVariableFormType("add");
                  setVariableFormShow(false);
                }
              }
            ) : /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(import_jsx_runtime22.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
                TextField_default,
                {
                  inputRef,
                  size: "small",
                  value: inputValue,
                  onChange: (e) => {
                    setInputValue(e.target.value);
                  },
                  onKeyPress: handleVariableKeyPress,
                  onKeyDown: (e) => {
                    if (e.key === "ArrowDown") {
                      e.preventDefault();
                      inputRef.current?.blur();
                      handleFocusListItem("first");
                    }
                    if (e.key === "ArrowUp") {
                      e.preventDefault();
                      handleFocusListItem("last");
                    }
                  },
                  InputProps: {
                    sx: {
                      fontSize: "16px !important"
                    },
                    endAdornment: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(InputAdornment_default, { position: "end", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
                      IconButton_default,
                      {
                        "aria-label": "toggle password visibility",
                        edge: "end",
                        children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_Search2.default, {})
                      }
                    ) })
                  },
                  inputProps: {
                    autoComplete: "off"
                  },
                  fullWidth: true,
                  placeholder: "Type to search..."
                }
              ),
              filterVariable.length > 0 || showAddBtn ? /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Box_default, { mt: 1 }) : null,
              /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
                Stack_default,
                {
                  id: VARIABLE_MENU_LIST_ID,
                  bgcolor: (t) => t.palette.mode === "dark" ? "#3E3F4C" : "transparent",
                  maxHeight: 142,
                  overflow: "auto",
                  children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(MenuList_default, { sx: { py: 0 }, ref: menuListRef, children: [
                    filterVariable.length > 0 && filterVariable.map((option, index2) => /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
                      MenuItem_default,
                      {
                        onClick: (e) => {
                          e.stopPropagation();
                          handleClickOption(option);
                        },
                        sx: {
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          borderRadius: 1,
                          cursor: "pointer",
                          transition: "all 0.2s ease-in-out",
                          bgcolor: "transparent",
                          ":hover": {
                            bgcolor: (t) => t.palette.mode === "dark" ? "rgba(178, 115, 255, 0.08)" : "rgba(118, 1, 211, 0.04)",
                            "& > button": {
                              visibility: "visible"
                            }
                          },
                          "&.Mui-focusVisible": {
                            bgcolor: "rgba(118, 1, 211, 0.1)"
                          }
                        },
                        onKeyDown: (e) => {
                          e.stopPropagation();
                          if (e.key === "ArrowUp") {
                            e.preventDefault();
                            handleListItemArrowUpKeyPress(e);
                          }
                          if (e.key === "ArrowDown") {
                            e.preventDefault();
                            handleListItemArrowDownKeyPress(e);
                          }
                        },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
                            Typography_default,
                            {
                              variant: "custom",
                              fontSize: 16,
                              color: option.color,
                              children: `{{${option.name}}}`
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
                            Typography_default,
                            {
                              variant: "custom",
                              fontSize: 14,
                              color: "#808082",
                              sx: {
                                flex: 1,
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap"
                              },
                              children: option.hint
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
                            IconButton_default,
                            {
                              size: "small",
                              sx: {
                                visibility: "hidden",
                                ml: "auto !important"
                              },
                              onClick: (e) => {
                                e.stopPropagation();
                                handleClickOptionEdit(index2);
                              },
                              children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_EditOutlined.default, { fontSize: "inherit", color: "primary" })
                            }
                          )
                        ]
                      },
                      option.name
                    )),
                    showAddBtn && /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
                      Button_default,
                      {
                        fullWidth: true,
                        variant: "text",
                        disableFocusRipple: true,
                        sx: (t) => {
                          const isDark = t.palette.mode === "dark";
                          const bgcolor = isDark ? "rgba(178, 115, 255, 0.08)" : "rgba(118, 1, 211, 0.04)";
                          const hoverBgcolor = isDark ? "rgba(178, 115, 255, 0.2)" : "rgba(118, 1, 211, 0.1)";
                          return {
                            bgcolor,
                            ":hover": {
                              bgcolor: hoverBgcolor
                            },
                            ":focus": {
                              bgcolor: hoverBgcolor
                            }
                          };
                        },
                        onClick: handleClickAddBtn,
                        onKeyDown: (e) => {
                          e.stopPropagation();
                          if (e.key === "ArrowUp") {
                            e.preventDefault();
                            handleListItemArrowUpKeyPress(e);
                          }
                          if (e.key === "ArrowDown") {
                            e.preventDefault();
                            handleListItemArrowDownKeyPress(e);
                          }
                        },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_Add.default, { fontSize: "inherit" }),
                          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Typography_default, { variant: "body2", fontWeight: 500, children: "Add" })
                        ]
                      }
                    )
                  ] })
                }
              )
            ] })
          }
        )
      ]
    }
  );
};
var PromptVariableSelector_default = (0, import_react18.forwardRef)(PromptVariableSelector);

// src/features/prompt/components/PromptTemplateInput.tsx
var import_jsx_runtime23 = __toESM(require_jsx_runtime());
var PromptTemplateInput = (props, ref) => {
  const {
    disabled,
    defaultValue,
    defaultVariables,
    placeholder = "",
    sx,
    minHeight = 140,
    error: error2,
    clearError
  } = props;
  const initDefaultData = (0, import_react19.useRef)(false);
  const promptVariableSelectorRef = (0, import_react19.useRef)(null);
  const inputRef = (0, import_react19.useRef)(null);
  const [inputHtml, setInputHtml] = (0, import_react19.useState)("");
  const [plainText, setPlainText] = (0, import_react19.useState)("");
  const lastFocusInfo = (0, import_react19.useRef)(null);
  const { variables, batchAddVariable } = usePromptVariableController_default();
  const memoSx = (0, import_react19.useMemo)(() => {
    return {
      pointerEvents: disabled ? "none" : "auto",
      ".prompt-template-input[contenteditable=true]:empty:before": {
        content: `"${placeholder}"`,
        display: "block",
        color: "#aaa"
      },
      ".prompt-template-input": {
        "--borderColor": "rgb(208, 208, 208)",
        bgcolor: (t) => t.palette.mode === "dark" ? "#3E3F4C" : "#fff",
        display: "block",
        boxSizing: "border-box",
        width: "calc(100% - 4px)",
        minHeight: `${minHeight}px`,
        borderRadius: "4px",
        border: "1px solid",
        outline: "0px solid",
        outlineColor: "var(--borderColor)",
        borderColor: "var(--borderColor)",
        p: 1,
        fontSize: 16,
        lineHeight: 1.4,
        letterSpacing: "0.4px",
        WebkitUserModify: "read-write-plaintext-only",
        "&:hover": {
          "--borderColor": (t) => t.palette.mode === "dark" ? "#fff" : "rgba(0, 0, 0,.87)"
        },
        "&:focus": {
          "--borderColor": (t) => t.palette.primary.main,
          outlineWidth: 1
        },
        ...error2 ? {
          "--borderColor": "#d32f2f !important"
        } : void 0
      },
      ...sx
    };
  }, [placeholder, minHeight, sx, error2, disabled]);
  (0, import_react19.useImperativeHandle)(
    ref,
    () => ({
      plainText,
      getPlainText: () => {
        return plainText;
      },
      onFocus: () => {
        inputRef.current?.focus();
      },
      cleanUseLessVariable: () => {
        return cleanUseLessVariable(inputHtml, variables);
      }
    }),
    [plainText, inputHtml, variables]
  );
  const updateLastFocus = () => {
    const status = getCursorBrace();
    lastFocusInfo.current = {
      node: status.node,
      index: status.index,
      isBrace: status.isBrace
    };
  };
  const handleChange = (0, import_react19.useCallback)(
    (evt) => {
      updateLastFocus();
      if (evt.type !== "input")
        return;
      clearError && clearError();
      if (evt.target) {
        const value = evt.target.value;
        setInputHtml(toVariableTag(value, variables));
      }
      if (evt.currentTarget) {
        const status = getCursorBrace();
        if (status.isBrace) {
          promptVariableSelectorRef.current?.onFocus();
        }
      }
    },
    [variables, clearError]
  );
  const handlePromptVariableFormConfirm = (0, import_react19.useCallback)(
    (data) => {
      const htmlContent = generateVariableHtmlContent(data, true);
      const newVariableNode = document.createElement("span");
      newVariableNode.innerHTML = htmlContent;
      const { node: targetNode, index: targetIndex } = lastFocusInfo.current || {};
      if (inputRef.current && targetNode && Number(targetIndex) > -1) {
        const resultStatus = insertHtmlAt(
          targetNode,
          targetIndex || 0,
          htmlContent
        );
        setTimeout(() => {
          const range = document.createRange();
          range.setStart(targetNode, 0);
          range.setEnd(targetNode, 0);
          const shadowRoot = getPromptAppShadowRoot();
          const selection = (shadowRoot?.shadowRoot || window).getSelection();
          if (selection) {
            selection.removeAllRanges();
            selection.addRange(range);
          }
          updateLastFocus();
        }, 100);
        if (resultStatus) {
          setInputHtml(inputRef.current.innerHTML);
        } else {
          setInputHtml((preHtml) => preHtml += htmlContent);
        }
      } else {
        setInputHtml((preHtml) => preHtml += htmlContent);
      }
    },
    [inputRef]
  );
  const handleUpdateVariableHtml = (0, import_react19.useCallback)(
    (oldVariableName, newVariable) => {
      setInputHtml(
        (preHtml) => updateVariableTag(preHtml, oldVariableName, newVariable)
      );
    },
    []
  );
  (0, import_react19.useEffect)(() => {
    if (initDefaultData.current)
      return;
    const newVariables = batchAddVariable(
      defaultVariables?.map((variable) => {
        if (checkIsDefaultVariable(variable)) {
          return {
            ...variable,
            isSystemVariable: true
          };
        }
        return variable;
      }) || [],
      true
    );
    if (defaultValue) {
      setPlainText(defaultValue);
      setInputHtml(toVariableTag(defaultValue, newVariables));
    }
    initDefaultData.current = true;
  }, [defaultValue, defaultVariables, initDefaultData, batchAddVariable]);
  (0, import_react19.useEffect)(() => {
    if (!inputRef.current)
      return;
    const textContent = inputRef.current.textContent;
    if (inputHtml && textContent) {
      setPlainText(textContent);
    }
  }, [inputRef, inputHtml]);
  (0, import_react19.useEffect)(() => {
    const eventHandler = () => updateLastFocus();
    if (inputRef.current) {
      inputRef.current.addEventListener("click", eventHandler);
      inputRef.current.addEventListener("keyup", eventHandler);
    }
    return () => {
      inputRef.current?.removeEventListener("click", eventHandler);
      inputRef.current?.removeEventListener("keyup", eventHandler);
    };
  }, [inputRef]);
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(Box_default, { sx: memoSx, children: [
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
      import_react_contenteditable.default,
      {
        innerRef: inputRef,
        className: "prompt-template-input",
        id: "prompt-template-input",
        html: inputHtml,
        placeholder,
        onChange: handleChange,
        onFocus: () => {
          promptVariableSelectorRef.current?.closeVariableForm();
        }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
      PromptVariableSelector_default,
      {
        ref: promptVariableSelectorRef,
        onInsertVariable: handlePromptVariableFormConfirm,
        onUpdateVariable: handleUpdateVariableHtml
      }
    )
  ] });
};
var PromptTemplateInput_default = (0, import_react19.forwardRef)(PromptTemplateInput);
function insertHtmlAt(textNode, index2, html) {
  const spanElement = document.createElement("span");
  spanElement.innerHTML = html;
  const parentElement = textNode.parentNode;
  const textContent = textNode.textContent || "";
  if (parentElement && textContent) {
    const isBrace = textContent.slice(index2 - 2, index2) === "{{";
    const beforeText = textContent.substr(0, isBrace ? index2 - 2 : index2);
    const afterText = textContent.substr(index2);
    const beforeTextNode = document.createTextNode(beforeText);
    const afterTextNode = document.createTextNode(afterText);
    parentElement.insertBefore(beforeTextNode, textNode);
    parentElement.insertBefore(spanElement, textNode);
    parentElement.insertBefore(afterTextNode, textNode);
    parentElement.removeChild(textNode);
    return true;
  }
  return false;
}

// src/hooks/useCheckHasUserInput.ts
var import_react20 = __toESM(require_react());
var useCheckHasUserInput = (container) => {
  const [hasUserInput, setHasUserInput] = (0, import_react20.useState)(false);
  (0, import_react20.useEffect)(() => {
    if (!container)
      return;
    const inputEventHandler = () => {
      setHasUserInput(true);
    };
    container && container.addEventListener("input", inputEventHandler);
    return () => {
      container && container.removeEventListener("input", inputEventHandler);
    };
  }, [container]);
  return {
    hasUserInput
  };
};
var useCheckHasUserInput_default = useCheckHasUserInput;

// src/features/prompt/hooks/usePromptCategories.ts
var import_react21 = __toESM(require_react());

// src/util/dataHelper/arrayHelper.ts
var list2Options = (list, options) => {
  if (!list) {
    return [];
  }
  if (typeof list[0] === "string" || typeof list[0] === "number") {
    return list.map((item) => {
      return { label: String(item), value: String(item) };
    });
  }
  const { labelKey = "label", valueKey = "value" } = options || {};
  return list.map(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    (item) => {
      return {
        label: item[labelKey],
        value: item[valueKey],
        origin: item
      };
    }
  );
};

// src/features/prompt/hooks/usePromptCategories.ts
var usePromptCategories = (props) => {
  const {
    enableSearchParams = false,
    defaultCategory,
    autoQuery = true
  } = props || {};
  const [searchParamsStore, setSearchParamsStore] = Recoil_index_22(
    PromptSearchParamsStore
  );
  const [categoryOptions, setCategoryOptions] = Recoil_index_22(
    PrompstCategoryOptions
  );
  const [useCaseOptions, setUseCaseOptions] = (0, import_react21.useState)([]);
  const [loaded, setLoaded] = (0, import_react21.useState)(false);
  const tabActive = searchParamsStore.tab_active;
  const setTabActive = (tabActive2) => {
    setSearchParamsStore((preValue) => ({
      ...preValue,
      tab_active: tabActive2
    }));
  };
  const [currentCategory, setCurrentCategory] = (0, import_react21.useState)(
    null
  );
  const [currentUseCase, setCurrentUseCase] = (0, import_react21.useState)(null);
  const [searchKeyword, setSearchKeyword] = (0, import_react21.useState)(null);
  const { isFetching, data } = useQuery(
    [PROMPT_API.PROMPT_CATEGORY],
    () => get(PROMPT_API.PROMPT_CATEGORY),
    {
      enabled: autoQuery,
      refetchOnWindowFocus: false
    }
  );
  const setCategoryAndUseCase = (category, useCaseValue) => {
    setCurrentCategory(category);
    const newUseCaseOptions = [
      {
        label: "All",
        value: "All"
      }
    ].concat(list2Options(category?.origin?.use_cases || []));
    setUseCaseOptions(uniqBy_default(newUseCaseOptions, "value"));
    let useCaseOption = newUseCaseOptions[0];
    if (useCaseValue) {
      const findUseCaseOption = newUseCaseOptions.find(
        (item) => item.value === useCaseValue
      );
      if (findUseCaseOption) {
        useCaseOption = findUseCaseOption;
      }
    }
    setCurrentUseCase(useCaseOption);
  };
  (0, import_react21.useEffect)(() => {
    if (!loaded) {
      if (!isFetching && data?.data) {
        const newCategoryOptions = list2Options(data.data, {
          labelKey: "category",
          valueKey: "category"
        });
        setCategoryOptions(uniqBy_default(newCategoryOptions, "value"));
        if (defaultCategory && newCategoryOptions.length > 0) {
          const findCategoryOption = newCategoryOptions.find(
            (item) => item.value === defaultCategory
          );
          if (findCategoryOption) {
            setCategoryAndUseCase(findCategoryOption);
          }
        } else {
          setCategoryAndUseCase(newCategoryOptions[0]);
        }
        setLoaded(true);
      }
    }
  }, [isFetching, data, loaded, defaultCategory]);
  (0, import_react21.useEffect)(() => {
    if (loaded) {
      const useCaseOptions2 = [
        {
          label: "All",
          value: "All"
        }
      ].concat(list2Options(currentCategory?.origin?.use_cases || []));
      setUseCaseOptions(uniqBy_default(useCaseOptions2, "value"));
      setCurrentUseCase(useCaseOptions2[0]);
    }
  }, [loaded, currentCategory]);
  (0, import_react21.useEffect)(() => {
    if (loaded && enableSearchParams) {
      setSearchParamsStore((preValue) => ({
        ...preValue,
        category: currentCategory?.value || "",
        use_case: currentUseCase?.value || "",
        keyword: searchKeyword || "",
        tab_active: tabActive
      }));
    }
  }, [
    loaded,
    enableSearchParams,
    tabActive,
    currentCategory,
    currentUseCase,
    searchKeyword
  ]);
  return {
    loaded,
    categoryOptions,
    useCaseOptions,
    currentCategory,
    currentUseCase,
    searchKeyword,
    tabActive,
    setTabActive,
    setSearchKeyword,
    setCurrentCategory,
    setCurrentUseCase
  };
};

// src/features/prompt/components/PromptFormModal.tsx
var import_jsx_runtime24 = __toESM(require_jsx_runtime());
var PROMPT_PLACEHOLDER = `Use this field to create your actual prompt template.

You can add variables that will turn into fillable text fields in the prompt template. Try typing {{ on your prompt and start creating variables for your prompt template. You can use variables more than once in your prompt template. When the prompt is used, the variables will be replaced by the corresponding inputted text automatically.`.replace(
  /\n/g,
  "\\000A"
);
var inputProps2 = {
  sx: {
    fontSize: "16px !important"
  }
};
var BaseSelectOptionItemProps = {
  sx: {
    fontSize: "16px !important"
  }
};
var DEFAULT_FORM_DATA = {
  prompt_template: "",
  teaser: "",
  prompt_hint: "",
  prompt_title: "",
  category: "Other",
  use_case: "Other",
  type: false,
  author: "",
  author_url: ""
};
var PromptFormModal = (props) => {
  const { show, defaultData, type, onClose, onConfirm } = props;
  const { variables } = usePromptVariableController_default();
  const promptFormRef = (0, import_react22.useRef)(null);
  const promptTemplateRef = (0, import_react22.useRef)(null);
  const [errorText, setErrorText] = (0, import_react22.useState)({
    prompt_template: "",
    author_url: ""
  });
  const {
    currentCategory,
    setCurrentCategory,
    categoryOptions,
    useCaseOptions,
    currentUseCase,
    setCurrentUseCase
  } = usePromptCategories({
    autoQuery: false,
    defaultCategory: "Other"
    // defaultUseCase: 'Other',
  });
  const { hasUserInput } = useCheckHasUserInput_default(promptFormRef.current || null);
  const { addPrompt, editPrompt, clonePrompt, loading } = usePromptActions();
  const {
    register,
    handleSubmit: handleSubmit2,
    reset,
    // setValue,
    // getValues,
    formState: { errors }
  } = useForm();
  const handleReset = (0, import_react22.useCallback)(() => {
    reset(DEFAULT_FORM_DATA);
    setCurrentCategory(categoryOptions[0]);
  }, [reset, categoryOptions]);
  const customValidator = (data) => {
    if (!data.prompt_template) {
      setErrorText((prev) => ({
        ...prev,
        prompt_template: "Prompt Template is required"
      }));
      setTimeout(() => {
        promptTemplateRef.current?.onFocus();
      }, 10);
      return false;
    }
    return true;
  };
  const onSubmit2 = (0, import_react22.useCallback)(
    async (data) => {
      const formData = {
        ...data,
        prompt_template: promptTemplateRef.current?.getPlainText() || "",
        variables: promptTemplateRef.current?.cleanUseLessVariable() || []
      };
      if (!customValidator(formData))
        return;
      const submitFetch = type === "edit" ? editPrompt : addPrompt;
      const id = await submitFetch(formData);
      if (id) {
        onConfirm && onConfirm();
        handleReset();
      }
    },
    [variables, promptTemplateRef.current]
  );
  const onClone = async (data) => {
    const id = await clonePrompt({
      ...data,
      type: data.type === "public"
    });
    if (id) {
      onConfirm && onConfirm();
      handleReset();
    }
  };
  const formDisabled = (0, import_react22.useMemo)(() => loading, [loading]);
  (0, import_react22.useEffect)(() => {
    if (type === "edit" && defaultData?.category) {
      const category = categoryOptions.find(
        (item) => item.value === defaultData?.category
      );
      if (category) {
        setCurrentCategory(category);
      } else {
        setCurrentCategory(categoryOptions[0]);
      }
    }
  }, [type, categoryOptions]);
  (0, import_react22.useEffect)(() => {
    if (type === "edit" && defaultData?.use_case) {
      const useCase = useCaseOptions.find(
        (item) => item.value === defaultData.use_case
      );
      if (useCase) {
        setCurrentUseCase(useCase);
      }
    }
  }, [type, useCaseOptions]);
  (0, import_react22.useEffect)(() => {
    if (show && type === "edit" && defaultData) {
      reset({
        ...defaultData,
        type: defaultData?.type === "public"
      });
    }
  }, [defaultData, type, show]);
  const handleModalOnClose = (reason) => {
    if (!hasUserInput) {
      onClose && onClose();
    } else {
      if (reason === "closeBtn" || reason === "backdropClick") {
        setCancelConfirmShow(true);
        return;
      }
    }
  };
  const [cancelConfirmShow, setCancelConfirmShow] = (0, import_react22.useState)(false);
  const handleClickCancel = () => {
    if (hasUserInput) {
      setCancelConfirmShow(true);
      return;
    } else {
      onClose && onClose();
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
    CustomModal_default,
    {
      width: 800,
      height: "unset",
      sx: {
        maxWidth: {
          xs: "90%",
          sm: 800
        }
      },
      show,
      onClose: handleModalOnClose,
      keepMounted: true,
      children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
        AppPaperCardLayout_default,
        {
          sx: {
            maxHeight: "82vh",
            overflowY: "auto",
            p: {
              xs: 2,
              sm: 3,
              md: 4
            }
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("form", { ref: promptFormRef, onSubmit: handleSubmit2(onSubmit2), children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(Grid_default, { container: true, spacing: 2, children: [
              /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Typography_default, { variant: "body1", fontWeight: 500, pl: 2, children: "Prompt template" }),
              /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Grid_default, { item: true, xs: 12, children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
                FormControl_default,
                {
                  size: "small",
                  variant: "standard",
                  fullWidth: true,
                  error: !!errorText.prompt_template,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(FormLabel_default, { children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(Typography_default, { variant: "body1", children: [
                      "Template",
                      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(FormLabelRequiredFlag_default, {})
                    ] }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                      PromptTemplateInput_default,
                      {
                        ref: promptTemplateRef,
                        disabled: formDisabled,
                        defaultValue: defaultData?.prompt_template,
                        defaultVariables: defaultData?.variables,
                        placeholder: PROMPT_PLACEHOLDER,
                        error: !!errorText.prompt_template,
                        clearError: () => {
                          setErrorText((prev) => ({
                            ...prev,
                            prompt_template: ""
                          }));
                        }
                      }
                    ),
                    errorText.prompt_template && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(FormHelperText_default, { children: errorText.prompt_template })
                  ]
                }
              ) }),
              /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Grid_default, { item: true, xs: 12, children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(FormControl_default, { size: "small", variant: "standard", fullWidth: true, children: [
                /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(FormLabel_default, { children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(Typography_default, { variant: "body1", children: [
                  "Title",
                  /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(FormLabelRequiredFlag_default, {})
                ] }) }),
                /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                  TextField_default,
                  {
                    size: "small",
                    InputProps: inputProps2,
                    disabled: formDisabled,
                    ...register("prompt_title", { required: true }),
                    placeholder: "A clear and informative title attracts more users to your prompt template.",
                    error: !!errors.prompt_title,
                    FormHelperTextProps: { sx: { ml: 0 } },
                    helperText: errors.prompt_title ? "Title is required" : ""
                  }
                )
              ] }) }),
              /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Grid_default, { item: true, xs: 12, children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(FormControl_default, { size: "small", variant: "standard", fullWidth: true, children: [
                /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(FormLabel_default, { children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(Typography_default, { variant: "body1", children: [
                  "Description",
                  /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(FormLabelRequiredFlag_default, {})
                ] }) }),
                /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                  TextField_default,
                  {
                    size: "small",
                    InputProps: inputProps2,
                    disabled: formDisabled,
                    multiline: true,
                    ...register("teaser", { required: true }),
                    placeholder: "Provide a concise description of your prompt template and potential results users can expect.",
                    error: !!errors.teaser,
                    FormHelperTextProps: { sx: { ml: 0 } },
                    helperText: errors.teaser ? "Prompt description is required" : ""
                  }
                )
              ] }) }),
              /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Grid_default, { item: true, xs: 6, children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(FormControl_default, { size: "small", variant: "standard", fullWidth: true, children: [
                /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(FormLabel_default, { children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Typography_default, { variant: "body1", children: "Category" }) }),
                currentCategory?.value && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                  Select_default,
                  {
                    disabled: formDisabled,
                    variant: "outlined",
                    value: currentCategory.value,
                    inputProps: inputProps2,
                    MenuProps: { disablePortal: true },
                    ...register("category", {
                      required: true,
                      onChange: (event) => {
                        const value = event.target.value;
                        const option = categoryOptions.find(
                          (item) => item.value === value
                        );
                        if (option) {
                          setCurrentCategory(option);
                        }
                      }
                    }),
                    children: categoryOptions.map((item) => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                      MenuItem_default,
                      {
                        value: item.value,
                        sx: BaseSelectOptionItemProps.sx,
                        children: item.label
                      },
                      item.value
                    ))
                  }
                )
              ] }) }),
              /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Grid_default, { item: true, xs: 6, children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(FormControl_default, { size: "small", variant: "standard", fullWidth: true, children: [
                /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(FormLabel_default, { children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Typography_default, { variant: "body1", children: "Use case" }) }),
                currentUseCase?.value && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                  Select_default,
                  {
                    disabled: formDisabled,
                    variant: "outlined",
                    value: currentUseCase.value,
                    inputProps: inputProps2,
                    MenuProps: { disablePortal: true },
                    ...register("use_case", {
                      required: true,
                      onChange: (event) => {
                        const value = event.target.value;
                        const option = useCaseOptions.find(
                          (item) => item.value === value
                        );
                        if (option) {
                          setCurrentUseCase(option);
                        }
                      }
                    }),
                    children: useCaseOptions.map((item) => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                      MenuItem_default,
                      {
                        value: item.value,
                        sx: BaseSelectOptionItemProps.sx,
                        children: item.label
                      },
                      item.value
                    ))
                  }
                )
              ] }) }),
              /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Grid_default, { item: true, xs: 6, children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(FormControl_default, { size: "small", variant: "standard", fullWidth: true, children: [
                /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(FormLabel_default, { children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Typography_default, { variant: "body1", children: "Author name" }) }),
                /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                  TextField_default,
                  {
                    size: "small",
                    InputProps: inputProps2,
                    disabled: formDisabled,
                    ...register("author"),
                    placeholder: "Author name"
                  }
                )
              ] }) }),
              /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Grid_default, { item: true, xs: 6, children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(FormControl_default, { size: "small", variant: "standard", fullWidth: true, children: [
                /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(FormLabel_default, { children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Typography_default, { variant: "body1", children: "Author URL" }) }),
                /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                  TextField_default,
                  {
                    size: "small",
                    InputProps: inputProps2,
                    disabled: formDisabled,
                    ...register("author_url", {
                      pattern: /^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/,
                      validate: (value) => {
                        if (!value)
                          return true;
                        const flag = value?.startsWith("http://") || value?.startsWith("https://");
                        if (!flag) {
                          setErrorText((prev) => ({
                            ...prev,
                            author_url: 'Please enter a valid URL starting with "http".'
                          }));
                        }
                        return flag;
                      }
                    }),
                    placeholder: "https://www.example.com/",
                    FormHelperTextProps: { sx: { ml: 0 } },
                    error: !!errors.author_url,
                    helperText: errors.author_url ? errorText.author_url || "Please enter the correct URL" : ""
                  }
                )
              ] }) }),
              /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Grid_default, { item: true, xs: 12, children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
                Stack_default,
                {
                  direction: "row",
                  justifyContent: "flex-end",
                  spacing: 1,
                  pt: 1,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Button_default, { variant: "secondary", onClick: handleClickCancel, children: "Cancel" }),
                    type === "edit" && defaultData && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                      LoadingButton_default,
                      {
                        variant: "outlined",
                        loading,
                        onClick: () => onClone(defaultData),
                        children: "Clone"
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                      LoadingButton_default,
                      {
                        variant: "contained",
                        type: "submit",
                        loading,
                        children: "Save prompt"
                      }
                    )
                  ]
                }
              ) })
            ] }) }),
            /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
              CustomConfirm_default,
              {
                open: cancelConfirmShow,
                confirmText: "You have entered some text that has not been saved. Are you sure you want to close the input box?",
                onClose: () => setCancelConfirmShow(false),
                onConfirm: () => {
                  setCancelConfirmShow(false);
                  onClose && onClose();
                },
                cancelButtonText: "No, take me back!",
                confirmButtonText: "Close anyway"
              }
            )
          ]
        }
      )
    }
  );
};
var PromptFormModal_default = PromptFormModal;

// src/layouts/AppLoadingLayout.tsx
var import_jsx_runtime25 = __toESM(require_jsx_runtime());
var AppLoadingLayout = ({ loading, loadingText = "Loading...", size = 16, sx, children }) => {
  if (loading) {
    return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
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
          /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(CircularProgress_default, { size, sx: { m: "0 auto" } }),
          /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
            Typography_default,
            {
              mt: 1.5,
              variant: "body2",
              fontWeight: 400,
              fontSize: 16,
              lineHeight: 1.25,
              children: loadingText
            }
          )
        ]
      }
    );
  }
  return children;
};
var AppLoadingLayout_default = AppLoadingLayout;

// src/features/prompt/hooks/useSelectPromptController.ts
var import_react23 = __toESM(require_react());
var UPDATE_SELECT_PROMPT_EVENT = "SELECT_PROMPT_EVENT";
var useSelectPromptController = () => {
  const [selectPromptId, setSelectPromptId] = Recoil_index_22(SelectPromptIdAtom);
  const [selectPromptType, setSelectPromptType] = (0, import_react23.useState)(
    null
  );
  const updateSelectPromptId = (id, promptType = "public") => {
    window.dispatchEvent(
      new CustomEvent(UPDATE_SELECT_PROMPT_EVENT, {
        detail: {
          promptId: id,
          promptType
        }
      })
    );
  };
  (0, import_react23.useEffect)(() => {
    const listener = (event) => {
      setSelectPromptId(event.detail?.promptId || null);
      setSelectPromptType(event.detail?.promptType || "");
    };
    window.addEventListener(UPDATE_SELECT_PROMPT_EVENT, listener);
    return () => {
      window.removeEventListener(UPDATE_SELECT_PROMPT_EVENT, listener);
    };
  }, []);
  return {
    selectPromptType,
    selectPromptId,
    updateSelectPromptId
  };
};
var useSelectPromptController_default = useSelectPromptController;

// src/features/prompt/layout/PromptListLayout.tsx
var import_jsx_runtime26 = __toESM(require_jsx_runtime());
var DEFAULT_PAGE_SIZE = 12;
var PromptListLayout = () => {
  const {
    data,
    isFetching,
    current,
    total,
    pageSize,
    loaded,
    setCurrent,
    setPageSize,
    refetch
  } = usePromptSearch(DEFAULT_PAGE_SIZE);
  const [modalType, setModalType] = (0, import_react24.useState)("add");
  const [modalDefaultData, setModalDefaultData] = (0, import_react24.useState)();
  const [addModalShow, setAddModalShow] = (0, import_react24.useState)(false);
  const searchParamsStore = Recoil_index_20(PromptSearchParamsStore);
  const tabActive = searchParamsStore.tab_active;
  const { selectPromptId, updateSelectPromptId } = useSelectPromptController_default();
  const handlePromptClick = (prompt) => {
    if (selectPromptId === prompt.id) {
      updateSelectPromptId(null);
    } else {
      updateSelectPromptId(prompt.id, prompt.type);
    }
  };
  const handleClearSelected = () => {
    updateSelectPromptId(null);
  };
  const handlePageChange = (0, import_react24.useCallback)((e, value) => {
    setCurrent(value);
  }, []);
  const handlePageSizeChange = (0, import_react24.useCallback)((newPageSize) => {
    setPageSize(newPageSize);
  }, []);
  const handleRefresh = () => {
    updateSelectPromptId(null);
    refetch();
  };
  const paginationProps = (0, import_react24.useMemo)(
    () => ({
      labelRowsPerPage: "Prompts per page:",
      rowsPerPageOptions: [8, 12, 16, 20]
    }),
    []
  );
  const actionButton = (0, import_react24.useMemo)(() => {
    if (tabActive === "Own") {
      return ["see", "delete", "edit", "favorite"];
    }
    if (tabActive === "Favorites") {
      return ["see", "favorite"];
    }
    return ["see", "favorite"];
  }, [tabActive]);
  const CardList = (0, import_react24.useMemo)(() => {
    if (tabActive === "Own") {
      return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(import_jsx_runtime26.Fragment, { children: [
        data.map((prompt) => /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(Grid_default, { item: true, xs: 12, md: 6, xl: 3, children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
          PromptCard,
          {
            onRefresh: handleRefresh,
            actionButton,
            active: selectPromptId === prompt.id,
            prompt,
            onPromptClick: handlePromptClick,
            onPromptClearSelected: handleClearSelected,
            onOpenEditModal: (prompt2) => {
              updateSelectPromptId(null);
              setModalDefaultData(prompt2);
              setModalType("edit");
              setAddModalShow(true);
            }
          }
        ) }, prompt.id)),
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(Grid_default, { item: true, xs: 12, md: 6, xl: 3, children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
          AddOwnPromptCard_default,
          {
            onPromptClick: () => {
              updateSelectPromptId(null);
              setModalDefaultData(void 0);
              setModalType("add");
              setAddModalShow(true);
            }
          }
        ) })
      ] });
    }
    return !hasData(data) ? /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(Grid_default, { item: true, xs: 12, children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(EmptyContent_default, { sx: { py: 4 } }) }) : data.map((prompt) => /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(Grid_default, { item: true, xs: 12, md: 6, xl: 3, children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
      PromptCard,
      {
        onRefresh: handleRefresh,
        actionButton,
        active: selectPromptId === prompt.id,
        onPromptClearSelected: handleClearSelected,
        prompt,
        onPromptClick: handlePromptClick
      }
    ) }, prompt.id));
  }, [data, tabActive, actionButton, selectPromptId]);
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(Stack_default, { spacing: 0, mb: 4, children: [
    tabActive === "Public" && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
      CustomTablePagination_default,
      {
        total,
        current,
        pageSize,
        sx: { justifyContent: "flex-end", pt: 0 },
        paginationProps,
        onChange: handlePageChange,
        onPageSizeChange: handlePageSizeChange
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(AppLoadingLayout_default, { loading: !loaded || isFetching, children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(Grid_default, { container: true, spacing: 2, children: CardList }) }),
    tabActive === "Public" && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
      CustomTablePagination_default,
      {
        total,
        current,
        pageSize,
        sx: { justifyContent: "flex-end", pt: 0 },
        paginationProps,
        onChange: handlePageChange,
        onPageSizeChange: handlePageSizeChange
      }
    ),
    addModalShow && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
      PromptFormModal_default,
      {
        defaultData: modalDefaultData,
        type: modalType,
        show: addModalShow,
        onClose: () => setAddModalShow(false),
        onConfirm: () => {
          setAddModalShow(false);
          handleRefresh();
        }
      }
    )
  ] });
};

// src/features/prompt/components/PromptTagSelector.tsx
init_emotion_styled_browser_esm();
var import_Favorite = __toESM(require_Favorite());
var import_Search3 = __toESM(require_Search());
var import_react26 = __toESM(require_react());

// src/components/select/BaseSelect/index.tsx
var import_react25 = __toESM(require_react());
var import_jsx_runtime27 = __toESM(require_jsx_runtime());
var findCurrentOption = (options, value) => {
  let findIndex = 0;
  const findOption = options.find((option, index2) => {
    if (option.value === value) {
      findIndex = index2;
      return true;
    }
  });
  return [value, findOption, findIndex];
};
var BaseSelect = ({
  defaultValue,
  emptyText,
  options,
  renderLabel,
  MenuProps,
  sx,
  placeholder,
  onChange,
  loading = false,
  renderFooter,
  renderHeader,
  label,
  ...props
}) => {
  const [selectValue, setSelectValue] = (0, import_react25.useState)(defaultValue || "");
  const isEmptyDataCache = (0, import_react25.useMemo)(() => {
    return !hasData(options) && !loading;
  }, [options, loading]);
  const renderDom = (value, option, index2) => {
    if (renderLabel) {
      return renderLabel(value, option || {}, index2);
    }
    return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(ListItemText_default, { primary: option.label });
  };
  (0, import_react25.useEffect)(() => {
    if (!selectValue && defaultValue) {
      setSelectValue(defaultValue);
    }
  }, [defaultValue]);
  (0, import_react25.useEffect)(() => {
    if (options.length && !loading && selectValue) {
      const selectOption = options.find(
        (option) => option.value === selectValue
      );
      if (!selectOption) {
        setSelectValue("");
      }
    }
  }, [options, selectValue, loading]);
  const optionsRenderCache = (0, import_react25.useMemo)(() => {
    return options.map((option, index2) => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(MenuItem_default, { value: option.value, children: renderDom(option.value, option, index2) }, index2));
  }, [options, selectValue, renderDom]);
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(FormControl_default, { children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(InputLabel_default, { id: "demo-simple-select-label", children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
      Select_default,
      {
        label,
        sx: {
          // bgcolor: 'background.paper',
          width: 220,
          lineHeight: "40px",
          padding: "8px 12px",
          height: 40,
          "& > .MuiSelect-select": {
            padding: 0
          },
          ...sx
        },
        value: selectValue,
        onChange: (event) => {
          setSelectValue(event.target?.value);
          onChange && onChange(
            ...findCurrentOption(options, event.target?.value)
          );
        },
        renderValue: (value) => {
          if (!value && placeholder || options.length === 0) {
            return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("em", { children: placeholder });
          }
          return renderDom(...findCurrentOption(options, value));
        },
        MenuProps: { disablePortal: true, ...MenuProps },
        displayEmpty: true,
        ...props,
        children: [
          loading && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(AppLoadingLayout_default, { size: 32, loading }),
          !isEmptyDataCache && renderHeader,
          !isEmptyDataCache && optionsRenderCache,
          !isEmptyDataCache && renderFooter,
          isEmptyDataCache && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(EmptyContent_default, { emptyText })
        ]
      }
    )
  ] });
};

// src/features/prompt/components/PromptTagSelector.tsx
var import_jsx_runtime28 = __toESM(require_jsx_runtime());
var GrayTabs = emotion_styled_browser_esm_default(({ ...props }) => /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Tabs_default, { ...props }))(({ theme }) => {
  const t = theme;
  const isDark = t.palette.mode === "dark";
  return {
    "&": {
      // background: '#f00',
    },
    ".MuiTab-root": {
      padding: "6px 16px",
      borderBottom: "1px solid",
      borderColor: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)",
      minHeight: 52
    },
    ".MuiTab-root.Mui-selected": {
      background: isDark ? "#3E3F4C" : "rgba(0, 0, 0, 0.08)",
      color: isDark ? "#fff" : "rgba(0, 0, 0, 0.6)"
    },
    ".MuiTabs-indicator": {
      backgroundColor: "#d8d8d8"
    }
  };
});
var PromptTagSelector = (props) => {
  const { onLoaded } = props;
  const waitAuthCallback = useWaitAuthCallback_default();
  const {
    loaded,
    tabActive,
    categoryOptions,
    currentCategory,
    useCaseOptions,
    currentUseCase,
    searchKeyword,
    setTabActive,
    setSearchKeyword,
    setCurrentUseCase,
    setCurrentCategory
  } = usePromptCategories({
    enableSearchParams: true
  });
  const inputTimer = (0, import_react26.useRef)(null);
  const searchValue = (0, import_react26.useRef)(null);
  (0, import_react26.useEffect)(() => {
    if (!loaded)
      return;
    searchValue.current = searchKeyword;
    onLoaded && onLoaded();
  }, [loaded, onLoaded, searchKeyword]);
  const handleDoSearch = (0, import_react26.useCallback)(() => {
    const value = searchValue.current;
    if (value !== null && value !== "" && value.length <= 2) {
      globalSnackbar_default.warning("Enter at least 3 characters to search.", {
        anchorOrigin: {
          vertical: "top",
          horizontal: "center"
        }
      });
      return;
    }
    setSearchKeyword(value);
  }, [setSearchKeyword]);
  const startInputSearchTimer = (0, import_react26.useCallback)(() => {
    if (inputTimer.current) {
      clearTimeout(inputTimer.current);
    }
    inputTimer.current = window.setTimeout(() => {
      handleDoSearch();
    }, 600);
  }, [handleDoSearch]);
  const handleTabChange = (event, newValue) => {
    if (NEED_AUTH_PROMPT_LIST_TYPE.includes(newValue)) {
      waitAuthCallback(() => {
        setTabActive(newValue);
      }, PROMPT_AUTH_REF[newValue]);
    } else {
      setTabActive(newValue);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
    Stack_default,
    {
      width: "100%",
      direction: "row",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 2,
      children: /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(AppLoadingLayout_default, { loading: !loaded, children: [
        /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Box_default, { flex: 1, flexBasis: "100%", children: /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(
          GrayTabs,
          {
            value: tabActive,
            variant: "fullWidth",
            onChange: handleTabChange,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
                Tab_default,
                {
                  icon: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_Favorite.default, {}),
                  iconPosition: "start",
                  value: "Favorites",
                  label: "Favorites"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Tab_default, { value: "Public", label: "Public" }),
              /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Tab_default, { value: "Own", label: "Own" })
            ]
          }
        ) }),
        tabActive === "Public" && /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(import_jsx_runtime28.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
            BaseSelect,
            {
              sx: { height: 44 },
              label: "Category",
              options: categoryOptions,
              value: currentCategory?.value,
              MenuProps: {
                sx: {
                  maxHeight: "550px"
                }
              },
              onChange: async (value, option) => {
                setCurrentCategory(option);
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
            BaseSelect,
            {
              sx: { height: 44 },
              label: "Use case",
              options: useCaseOptions,
              value: currentUseCase?.value,
              MenuProps: {
                sx: {
                  maxHeight: "550px"
                }
              },
              onChange: async (value, option) => {
                setCurrentUseCase(option);
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
            TextField_default,
            {
              defaultValue: searchKeyword,
              label: "Search...",
              variant: "outlined",
              size: "small",
              sx: {
                width: 220,
                ml: {
                  xs: "unset",
                  sm: "auto"
                }
              },
              onChange: (event) => {
                const value = event.target.value;
                searchValue.current = value;
                if (value === "" || value.length > 2) {
                  startInputSearchTimer();
                }
              },
              onKeyDown: (event) => {
                if (event.key === "Enter") {
                  handleDoSearch();
                }
              },
              onBlur: handleDoSearch,
              InputProps: {
                sx: { height: 44 },
                endAdornment: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(InputAdornment_default, { position: "end", children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(IconButton_default, { onClick: handleDoSearch, edge: "end", children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_Search3.default, {}) }) })
              }
            }
          )
        ] })
      ] })
    }
  );
};

// src/features/prompt/hooks/useInitFavoritesPromptIds.ts
var import_react27 = __toESM(require_react());
var useInitFavoritesPromptIds = () => {
  const [loaded, setLoaded] = (0, import_react27.useState)(false);
  const isLogin = useIsLogin();
  const [favoritesPromptIds, setFavoritesPromptIds] = Recoil_index_22(
    FavoritesPromptIdsAtom
  );
  (0, import_react27.useEffect)(() => {
    if (!loaded && isLogin) {
      post(
        PROMPT_API.GET_FAVOURITE_PROMPTS,
        {}
      ).then((res) => {
        if (res?.data && res?.data?.favourite_prompts) {
          const data = res.data.favourite_prompts;
          setFavoritesPromptIds(data.map((item) => item.id));
          setLoaded(true);
        }
      }).catch();
    }
  }, [loaded, isLogin]);
  return {
    favoritesPromptIds
  };
};
var useInitFavoritesPromptIds_default = useInitFavoritesPromptIds;

// src/components/AccountMenu.tsx
var import_react31 = __toESM(require_react());

// src/features/auth/hooks/useUserProfile.ts
var import_react29 = __toESM(require_react());

// src/hooks/useFocus.ts
var import_react28 = __toESM(require_react());
var useFocus = (execFunction) => {
  (0, import_react28.useEffect)(() => {
    const onFocus = () => {
      execFunction();
    };
    window.addEventListener("focus", onFocus);
    return () => {
      window.removeEventListener("focus", onFocus);
    };
  }, []);
};

// src/features/auth/hooks/useUserProfile.ts
var useUserProfile = () => {
  const [userInfo, setUserInfo] = (0, import_react29.useState)(null);
  const [loaded, setLoaded] = (0, import_react29.useState)(false);
  const [loading, setLoading] = (0, import_react29.useState)(false);
  useEffectOnce_default(() => {
    setLoading(true);
    getUseChatGPTUserInfo().then((userInfo2) => {
      if (userInfo2) {
        setUserInfo(userInfo2);
      }
      setLoaded(true);
      setLoading(false);
    }).catch(() => {
      setLoaded(true);
      setLoading(false);
    });
  });
  useFocus(() => {
    getUseChatGPTUserInfo().then((userInfo2) => {
      setUserInfo(userInfo2);
    });
  });
  return {
    userInfo,
    loaded,
    loading
  };
};

// src/features/auth/hooks/useAuthLogout.ts
var import_react30 = __toESM(require_react());
var useAuthLogout = () => {
  const setAuthLogin = Recoil_index_24(AuthState);
  const logout = (0, import_react30.useCallback)(async () => {
    await logoutUseChatGPTAuth();
    setAuthLogin((pre) => ({
      ...pre,
      userInfo: null,
      isLogin: false
    }));
  }, []);
  return logout;
};

// src/components/AccountMenu.tsx
var import_jsx_runtime29 = __toESM(require_jsx_runtime());
var AccountMenu = () => {
  const authLogin = Recoil_index_20(AuthState);
  const isLogin = authLogin.isLogin;
  const { userInfo } = useUserProfile();
  const email = userInfo?.email;
  const logout = useAuthLogout();
  const [anchorEl, setAnchorEl] = import_react31.default.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  if (!isLogin || !userInfo) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(import_jsx_runtime29.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Box_default, { sx: { display: "flex", alignItems: "center", textAlign: "center" }, children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Tooltip_default, { title: "Account settings", children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
      IconButton_default,
      {
        onClick: handleClick,
        size: "small",
        "aria-controls": open ? "account-menu" : void 0,
        "aria-haspopup": "true",
        "aria-expanded": open ? "true" : void 0,
        children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Avatar_default, { sx: { width: 32, height: 32 }, children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Typography_default, { variant: "body2", children: email ? email.slice(0, 1).toUpperCase() : "M" }) })
      }
    ) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(
      Menu_default,
      {
        anchorEl,
        id: "account-menu",
        open,
        onClose: handleClose,
        onClick: handleClose,
        disablePortal: true,
        PaperProps: {
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0
            }
          }
        },
        transformOrigin: { horizontal: "right", vertical: "top" },
        anchorOrigin: { horizontal: "right", vertical: "bottom" },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(MenuItem_default, { disabled: true, children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Typography_default, { variant: "body2", children: email }) }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
            MenuItem_default,
            {
              onClick: async () => {
                await logout();
                window.location.reload();
                handleClose();
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Typography_default, { variant: "body2", children: "Log out" })
            }
          )
        ]
      }
    )
  ] });
};
var AccountMenu_default = AccountMenu;

// src/features/prompt/PromptApp.tsx
var import_webextension_polyfill3 = __toESM(require_browser_polyfill());
var import_jsx_runtime30 = __toESM(require_jsx_runtime());
var PromptApp = () => {
  const [loaded, setLoaded] = import_react32.default.useState(false);
  const promptAppRef = (0, import_react32.useRef)(null);
  const extensionVersion = import_webextension_polyfill3.default.runtime.getManifest().version;
  useInitFavoritesPromptIds_default();
  (0, import_react32.useEffect)(() => {
    if (promptAppRef.current) {
      const target = promptAppRef.current;
      promptAppRef.current.removeEventListener(
        "scroll",
        window.__webgpt__dirty__listener_handlePromptAppScroll
      );
      const hasGPT4 = !!findGPT4ModalSwitch();
      if (hasGPT4) {
        window.__webgpt__dirty__listener_handlePromptAppScroll = debounce_default(
          () => {
            const { scrollTop } = target;
            const el = getPromptAppShadowRoot();
            const searchParams = new URLSearchParams(location.search);
            const topOffset = searchParams.get("model") === "gpt-4-plugins" ? "125px" : "80px";
            if (el && scrollTop > 10) {
              el.style.top = "0px";
            } else {
              el.style.top = topOffset;
            }
          },
          0
        );
        promptAppRef.current.addEventListener(
          "scroll",
          window.__webgpt__dirty__listener_handlePromptAppScroll
        );
      }
    }
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(
    Box_default,
    {
      ref: promptAppRef,
      sx: {
        position: "relative",
        px: 2,
        overflow: "auto",
        height: "100%",
        bgcolor: (t) => t.palette.mode === "dark" ? "rgb(52,53,65)" : "#fff",
        pt: {
          xs: 6.25,
          sm: 4
        }
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
          Box_default,
          {
            sx: {
              position: "absolute",
              top: {
                xs: 8,
                sm: 16
              },
              right: {
                xs: 8,
                sm: 16
              }
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(AccountMenu_default, {})
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(Stack_default, { alignItems: "center", mb: 2, children: [
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(Typography_default, { variant: "h4", component: "h1", mb: 0.5, fontWeight: 800, children: "WebChatGPT One-Click Prompts" }),
          /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(Typography_default, { variant: "caption", color: "#aaa", fontSize: 14, mb: 2, children: [
            "WebChatGPT v.",
            extensionVersion,
            " -",
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
              ProLink_default,
              {
                href: `${WEBCHATGPT_CHROME_STORE_LINK}/reviews`,
                color: "inherit",
                underline: "always",
                children: "Leave us a review"
              }
            ),
            " - ",
            /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
              ProLink_default,
              {
                href: DISCORD_INVITE_LINK,
                color: "inherit",
                underline: "always",
                children: "Discord community"
              }
            ),
            " ",
            "- Powered by",
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(ProLink_default, { href: MAXAI_INSTALL_LINK, color: "inherit", underline: "always", children: "MaxAI.me" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(PromptTagSelector, { onLoaded: () => setLoaded(true) })
        ] }),
        loaded && /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(PromptListLayout, {})
      ]
    }
  );
};
var PromptApp_default = PromptApp;

// src/features/prompt/PromptRunner.tsx
var import_react40 = __toESM(require_react());

// src/features/prompt/components/PromptFixedRunner.tsx
var import_Close2 = __toESM(require_Close());

// src/features/prompt/components/RunPromptSettingSelector.tsx
init_emotion_styled_browser_esm();
var import_Send = __toESM(require_Send());
var import_react39 = __toESM(require_react());

// src/features/prompt/hooks/useRunThisPrompt.ts
var import_react33 = __toESM(require_react());
function generateLiveCrawlingActions(targetUrl, template) {
  return [
    {
      type: "GET_HTML_OF_URL",
      parameters: {
        URLActionURL: targetUrl
      }
    },
    {
      type: "SET_VARIABLE",
      parameters: {
        VariableName: "Live Crawling Crawled Html"
      }
    },
    {
      type: "GET_CONTENTS_OF_URL",
      parameters: {
        URLActionURL: targetUrl
      }
    },
    {
      type: "SUMMARIZE_OF_TEXT",
      parameters: {
        SliceTextActionLength: SUMMARIZE_MAX_CHARACTERS - template.length,
        // SummarizeActionType default Full insights
        SummarizeActionType: "MAP_REDUCE"
      }
    },
    {
      type: "SET_VARIABLE",
      parameters: {
        VariableName: "Live Crawling Crawled Text"
      }
    }
  ];
}
function generateWebAccessActions(query, userConfig) {
  const resultActions = [];
  let currentQuestion = query;
  const pageCommandMatch = query.match(/^\/page:(\S+)/);
  if (pageCommandMatch) {
    const url = pageCommandMatch[1];
    resultActions.push({
      type: "GET_CONTENTS_OF_URL",
      parameters: {
        URLActionURL: url
      }
    });
    if (userConfig.summarizeType === "NO_SUMMARIZE") {
      resultActions.push({
        type: "SLICE_OF_TEXT",
        parameters: {
          // SliceTextActionLength: SLICE_MAX_CHARACTERS,
          SliceTextActionType: "TOKENS"
        }
      });
    } else {
      resultActions.push({
        type: "SUMMARIZE_OF_TEXT",
        parameters: {
          SliceTextActionType: "TOKENS",
          SummarizeActionType: userConfig.summarizeType
        }
      });
    }
    resultActions.push({
      type: "SET_VARIABLE",
      parameters: {
        VariableName: "Web Search Results"
      }
    });
  } else {
    const siteCommandMatch = query.match(/^\/site:(\S+)/);
    let site = "";
    if (siteCommandMatch) {
      site = siteCommandMatch[1];
      currentQuestion = query.replace(siteCommandMatch[0], "");
    }
    resultActions.push({
      type: "ASK_CHATGPT",
      parameters: {
        AskChatGPTActionType: "ASK_CHAT_GPT_HIDDEN",
        template: `Disregard any previous instructions.

I will give you a question or an instruction. The question or instruction, or possibly just a portion of it, requires searching the internet to find the relevant information as the context to answer the question, or fulfill the instruction. What search query should I enter in a search engine to find the relevant information as the context to answer the question, or fulfill the instruction? 

For your reference, today's date is {{CURRENT_DATE}}.
In your response, do not remind me of what I asked, do not explain, do not self reference, do not apologize, do not use variables or placeholders, do not include any generic filler phrases, do not quote your response, just answer what the final specific search query should be and nothing else.

My question or instruction is:

"""
${site ? `site:${site} ` : ""}${currentQuestion}
"""`
      }
    });
    resultActions.push({
      type: "GET_CONTENTS_OF_SEARCH_ENGINE",
      parameters: {
        URLSearchEngine: userConfig.searchEngine,
        URLSearchEngineParams: {
          region: userConfig.region,
          limit: userConfig.numWebResults,
          btf: userConfig.timePeriod === "any" ? "" : userConfig.timePeriod,
          nojs: "1",
          ei: "UTF-8"
        }
      }
    });
    resultActions.push({
      type: "WEBGPT_SEARCH_RESULTS_EXPAND",
      parameters: {
        SummarizeActionType: userConfig.summarizeType
      }
    });
    resultActions.push({
      type: "SET_VARIABLE",
      parameters: {
        VariableName: "Web Search Results"
      }
    });
  }
  return resultActions;
}
function generateSystemActions() {
  return [
    {
      type: "DATE",
      parameters: {
        DateActionMode: "Current Date",
        DateFormatStyle: "YYYY-MM-DD HH:mm:ss"
      }
    },
    {
      type: "SET_VARIABLE",
      parameters: {
        VariableName: "System Current Date"
      }
    }
  ];
}
var useRunThisPromptV3 = () => {
  const { setShortCuts, runShortCuts } = useShortCutsWithChatGPTWeb("");
  const { userConfig } = useUserConfig();
  const runThisPrompt = (0, import_react33.useCallback)(
    async (template, variables, infoObject) => {
      let actions = [];
      variables.forEach((variable) => {
        if (variable.type === "livecrawling" && variable.name === "Live Crawling Target URL" && variable.value) {
          actions = actions.concat(
            generateLiveCrawlingActions(variable.value, template)
          );
        }
        if (variable.type === "websearch" && variable.name === "Web Search Query" && variable.value) {
          actions = actions.concat(
            generateWebAccessActions(variable.value, userConfig)
          );
        }
        if (variable.type === "system" && variable.name === "System Current Date") {
          actions = actions.concat(generateSystemActions());
        }
      });
      actions.push({
        type: "ASK_CHATGPT",
        parameters: {
          template
        }
      });
      window.postMessage({
        id: RUNNING_CARD_MESSAGE,
        type: "runShortCutActions",
        data: {
          actions,
          forceNotWebAccess: true,
          infoObject
        }
      });
    },
    [setShortCuts, runShortCuts, userConfig]
  );
  return {
    runThisPrompt
  };
};

// src/features/prompt/store/runPromptSettings.ts
var RunPromptSettingsAtom = Recoil_index_8({
  key: "RunPromptSettingsAtom",
  default: {
    tone: "",
    writingStyle: "",
    language: "English",
    variables: []
  }
});
var RenderedTemplatePromptAtom = Recoil_index_8({
  key: "RenderedTemplatePromptAtom",
  default: ""
});

// src/util/dataHelper/stringHelper.ts
var checkIsDomain = (url) => {
  const regex = new RegExp(
    /^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/
  );
  return regex.test(url);
};

// src/features/prompt/components/PromptLanguageSelect.tsx
var import_react34 = __toESM(require_react());
var import_jsx_runtime31 = __toESM(require_jsx_runtime());
var LANGUAGES_OPTIONS = [
  { language_code: "uk", value: "Ukrainian", label: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430" },
  { language_code: "so", value: "Somali", label: "Af Soomaali" },
  { language_code: "af", value: "Afrikaans", label: "Afrikaans" },
  { language_code: "az", value: "Azerbaijani", label: "Az\u0259rbaycan dili" },
  { language_code: "id", value: "Indonesian", label: "Bahasa Indonesia" },
  {
    language_code: "ms-MY",
    value: "Malaysian Malay",
    label: "Bahasa Malaysia"
  },
  { language_code: "ms", value: "Malay", label: "Bahasa Melayu" },
  { language_code: "jv", value: "Javanese", label: "Basa Jawa" },
  { language_code: "su", value: "Sundanese", label: "Basa Sunda" },
  { language_code: "bs", value: "Bosnian", label: "Bosanski jezik" },
  { language_code: "ca", value: "Catalan", label: "Catal\xE0" },
  { language_code: "cs", value: "Czech", label: "\u010Ce\u0161tina" },
  { language_code: "ny", value: "Chichewa", label: "Chichewa" },
  { language_code: "cy", value: "Welsh", label: "Cymraeg" },
  { language_code: "da", value: "Danish", label: "Dansk" },
  { language_code: "de", value: "German", label: "Deutsch" },
  { language_code: "et", value: "Estonian", label: "Eesti keel" },
  { language_code: "en", value: "English", label: "English" },
  { language_code: "en-GB", value: "English (UK)", label: "English (UK)" },
  { language_code: "en-US", value: "English (US)", label: "English (US)" },
  { language_code: "es", value: "Spanish", label: "Espa\xF1ol" },
  { language_code: "eo", value: "Esperanto", label: "Esperanto" },
  { language_code: "eu", value: "Basque", label: "Euskara" },
  { language_code: "fr", value: "French", label: "Fran\xE7ais" },
  { language_code: "ga", value: "Irish", label: "Gaeilge" },
  { language_code: "gl", value: "Galician", label: "Galego" },
  { language_code: "hr", value: "Croatian", label: "Hrvatski jezik" },
  { language_code: "xh", value: "Xhosa", label: "isiXhosa" },
  { language_code: "zu", value: "Zulu", label: "isiZulu" },
  { language_code: "is", value: "Icelandic", label: "\xCDslenska" },
  { language_code: "it", value: "Italian", label: "Italiano" },
  { language_code: "sw", value: "Swahili", label: "Kiswahili" },
  { language_code: "ht", value: "Haitian Creole", label: "Krey\xF2l Ayisyen" },
  { language_code: "ku", value: "Kurdish", label: "Kurd\xEE" },
  { language_code: "la", value: "Latin", label: "Lat\u012Bna" },
  { language_code: "lv", value: "Latvian", label: "Latvie\u0161u valoda" },
  { language_code: "lb", value: "Luxembourgish", label: "L\xEBtzebuergesch" },
  { language_code: "lt", value: "Lithuanian", label: "Lietuvi\u0173 kalba" },
  { language_code: "hu", value: "Hungarian", label: "Magyar" },
  { language_code: "mg", value: "Malagasy", label: "Malagasy" },
  { language_code: "mt", value: "Maltese", label: "Malti" },
  { language_code: "mi", value: "Maori", label: "M\u0101ori" },
  { language_code: "nl", value: "Dutch", label: "Nederlands" },
  { language_code: "no", value: "Norwegian", label: "Norsk" },
  { language_code: "uz", value: "Uzbek", label: `O'zbek tili` },
  { language_code: "pl", value: "Polish", label: "Polski" },
  { language_code: "pt", value: "Portuguese", label: "Portugu\xEAs" },
  { language_code: "ro", value: "Romanian", label: "Rom\xE2n\u0103" },
  { language_code: "st", value: "Sesotho", label: "Sesotho" },
  { language_code: "sq", value: "Albanian", label: "Shqip" },
  { language_code: "sk", value: "Slovak", label: "Sloven\u010Dina" },
  { language_code: "sl", value: "Slovenian", label: "Sloven\u0161\u010Dina" },
  { language_code: "fi", value: "Finnish", label: "Suomi" },
  { language_code: "sv", value: "Swedish", label: "Svenska" },
  { language_code: "tl", value: "Tagalog", label: "Tagalog" },
  { language_code: "tt", value: "Tatar", label: "Tatar\xE7a" },
  { language_code: "tr", value: "Turkish", label: "T\xFCrk\xE7e" },
  { language_code: "vi", value: "Vietnamese", label: "Vi\u1EC7t ng\u1EEF" },
  { language_code: "yo", value: "Yoruba", label: "Yor\xF9b\xE1" },
  { language_code: "el", value: "Greek", label: "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC" },
  { language_code: "be", value: "Belarusian", label: "\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u043A\u0430\u044F \u043C\u043E\u0432\u0430" },
  { language_code: "bg", value: "Bulgarian", label: "\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438 \u0435\u0437\u0438\u043A" },
  { language_code: "ky", value: "Kyrgyz", label: "\u041A\u044B\u0440" },
  { language_code: "kk", value: "Kazakh", label: "\u049A\u0430\u0437\u0430\u049B \u0442\u0456\u043B\u0456" },
  { language_code: "mk", value: "Macedonian", label: "\u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0441\u043A\u0438 \u0458\u0430\u0437\u0438\u043A" },
  { language_code: "mn", value: "Mongolian", label: "\u041C\u043E\u043D\u0433\u043E\u043B \u0445\u044D\u043B" },
  { language_code: "ru", value: "Russian", label: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439" },
  { language_code: "sr", value: "Serbian", label: "\u0421\u0440\u043F\u0441\u043A\u0438 \u0458\u0435\u0437\u0438\u043A" },
  { language_code: "tg", value: "Tajik", label: "\u0422\u043E\u04B7\u0438\u043A\u04E3" },
  { language_code: "ka", value: "Georgian", label: "\u10E5\u10D0\u10E0\u10D7\u10E3\u10DA\u10D8" },
  { language_code: "hy", value: "Armenian", label: "\u0540\u0561\u0575\u0565\u0580\u0565\u0576" },
  { language_code: "yi", value: "Yiddish", label: "\u05D9\u05D9\u05B4\u05D3\u05D9\u05E9" },
  { language_code: "he", value: "Hebrew", label: "\u05E2\u05D1\u05E8\u05D9\u05EA" },
  { language_code: "ug", value: "Uyghur", label: "\u0626\u06C7\u064A\u063A\u06C7\u0631\u0686\u06D5" },
  { language_code: "ur", value: "Urdu", label: "\u0627\u0631\u062F\u0648" },
  { language_code: "ar", value: "Arabic", label: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629" },
  { language_code: "ps", value: "Pashto", label: "\u067E\u069A\u062A\u0648" },
  { language_code: "fa", value: "Persian", label: "\u0641\u0627\u0631\u0633\u06CC" },
  { language_code: "ne", value: "Nepali", label: "\u0928\u0947\u092A\u093E\u0932\u0940" },
  { language_code: "mr", value: "Marathi", label: "\u092E\u0930\u093E\u0920\u0940" },
  { language_code: "hi", value: "Hindi", label: "\u0939\u093F\u0928\u094D\u0926\u0940" },
  { language_code: "bn", value: "Bengali", label: "\u09AC\u09BE\u0982\u09B2\u09BE" },
  { language_code: "pa", value: "Punjabi", label: "\u0A2A\u0A70\u0A1C\u0A3E\u0A2C\u0A40" },
  { language_code: "gu", value: "Gujarati", label: "\u0A97\u0AC1\u0A9C\u0AB0\u0ABE\u0AA4\u0AC0" },
  { language_code: "or", value: "Oriya", label: "\u0B13\u0B21\u0B3C\u0B3F\u0B06" },
  { language_code: "ta", value: "Tamil", label: "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD" },
  { language_code: "te", value: "Telugu", label: "\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41" },
  { language_code: "kn", value: "Kannada", label: "\u0C95\u0CA8\u0CCD\u0CA8\u0CA1" },
  { language_code: "ml", value: "Malayalam", label: "\u0D2E\u0D32\u0D2F\u0D3E\u0D33\u0D02" },
  { language_code: "si", value: "Sinhala", label: "\u0DC3\u0DD2\u0D82\u0DC4\u0DBD" },
  { language_code: "th", value: "Thai", label: "\u0E44\u0E17\u0E22" },
  { language_code: "lo", value: "Lao", label: "\u0E9E\u0EB2\u0EAA\u0EB2\u0EA5\u0EB2\u0EA7" },
  { language_code: "my", value: "Burmese", label: "\u1017\u1019\u102C\u1005\u102C" },
  { language_code: "km", value: "Khmer", label: "\u1797\u17B6\u179F\u17B6\u1781\u17D2\u1798\u17C2\u179A" },
  { language_code: "ko", value: "Korean", label: "\uD55C\uAD6D\uC5B4" },
  { language_code: "zh", value: "Chinese", label: "\u4E2D\u6587" },
  { language_code: "zh-TW", value: "Traditional Chinese", label: "\u7E41\u9AD4\u4E2D\u6587" },
  { language_code: "ja", value: "Japanese", label: "\u65E5\u672C\u8A9E" }
];
function filterOptions(options, { inputValue }) {
  return options.filter((option) => {
    const label = option.label.toLowerCase();
    const value = option.value.toLowerCase();
    const input = inputValue.toLowerCase();
    return label.includes(input) || value.includes(input);
  });
}
var PromptLanguageSelect = (props) => {
  const {
    label = "Output language",
    defaultValue = "",
    onChange = (value2) => {
    },
    sx
  } = props;
  const [value, setValue] = import_react34.default.useState(
    () => {
      return LANGUAGES_OPTIONS.find((option) => option.value === defaultValue) || LANGUAGES_OPTIONS[0];
    }
  );
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
    Autocomplete_default,
    {
      disableClearable: true,
      value,
      size: "small",
      sx: { width: 160, ...sx },
      autoHighlight: true,
      disablePortal: true,
      getOptionLabel: (option) => option.label,
      options: LANGUAGES_OPTIONS,
      onChange: (event, newValue) => {
        setValue(newValue);
        onChange(newValue.value);
      },
      filterOptions,
      renderInput: (params) => /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
        TextField_default,
        {
          ...params,
          label,
          inputProps: {
            ...params.inputProps
          }
        }
      )
    }
  );
};

// src/features/prompt/components/ToneSelect.tsx
var import_react35 = __toESM(require_react());
var import_jsx_runtime32 = __toESM(require_jsx_runtime());
var TONE_OPTIONS = [
  { label: `Default`, value: `` },
  { label: `Authoritative`, value: `Authoritative` },
  { label: `Clinical`, value: `Clinical` },
  { label: `Cold`, value: `Cold` },
  { label: `Confident`, value: `Confident` },
  { label: `Cynical`, value: `Cynical` },
  { label: `Emotional`, value: `Emotional` },
  { label: `Empathetic`, value: `Empathetic` },
  { label: `Formal`, value: `Formal` },
  { label: `Friendly`, value: `Friendly` },
  { label: `Humorous`, value: `Humorous` },
  { label: `Informal`, value: `Informal` },
  { label: `Ironic`, value: `Ironic` },
  { label: `Optimistic`, value: `Optimistic` },
  { label: `Pessimistic`, value: `Pessimistic` },
  { label: `Playful`, value: `Playful` },
  { label: `Sarcastic`, value: `Sarcastic` },
  { label: `Serious`, value: `Serious` },
  { label: `Sympathetic`, value: `Sympathetic` },
  { label: `Tentative`, value: `Tentative` },
  { label: `Warm`, value: `Warm` }
];
function filterOptions2(options, { inputValue }) {
  return options.filter((option) => {
    const label = option.label.toLowerCase();
    const value = option.value.toLowerCase();
    const input = inputValue.toLowerCase();
    return label.includes(input) || value.includes(input);
  });
}
var ToneSelect = (props) => {
  const {
    label = "Tone",
    defaultValue = "",
    onChange = (value2) => {
    },
    sx
  } = props;
  const [value, setValue] = import_react35.default.useState(
    () => {
      return TONE_OPTIONS.find((option) => option.value === defaultValue) || TONE_OPTIONS[0];
    }
  );
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
    Autocomplete_default,
    {
      disableClearable: true,
      value,
      size: "small",
      sx: { width: 160, ...sx },
      autoHighlight: true,
      disablePortal: true,
      getOptionLabel: (option) => option.label,
      options: TONE_OPTIONS,
      onChange: (event, newValue) => {
        setValue(newValue);
        onChange(newValue.value);
      },
      filterOptions: filterOptions2,
      renderInput: (params) => /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
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

// src/features/prompt/components/WritingStyleSelect.tsx
var import_react36 = __toESM(require_react());
var import_jsx_runtime33 = __toESM(require_jsx_runtime());
var WRITING_STYLES_OPTIONS = [
  { label: `Default`, value: `` },
  { value: `Academic`, label: `Academic` },
  { value: `Analytical`, label: `Analytical` },
  { value: `Argumentative`, label: `Argumentative` },
  { value: `Conversational`, label: `Conversational` },
  { value: `Creative`, label: `Creative` },
  { value: `Critical`, label: `Critical` },
  { value: `Descriptive`, label: `Descriptive` },
  { value: `Epigrammatic`, label: `Epigrammatic` },
  { value: `Epistolary`, label: `Epistolary` },
  { value: `Expository`, label: `Expository` },
  { value: `Informative`, label: `Informative` },
  { value: `Instructive`, label: `Instructive` },
  { value: `Journalistic`, label: `Journalistic` },
  { value: `Metaphorical`, label: `Metaphorical` },
  { value: `Narrative`, label: `Narrative` },
  { value: `Persuasive`, label: `Persuasive` },
  { value: `Poetic`, label: `Poetic` },
  { value: `Satirical`, label: `Satirical` },
  { value: `Technical`, label: `Technical` }
];
function filterOptions3(options, { inputValue }) {
  return options.filter((option) => {
    const label = option.label.toLowerCase();
    const value = option.value.toLowerCase();
    const input = inputValue.toLowerCase();
    return label.includes(input) || value.includes(input);
  });
}
var WritingStyleSelect = (props) => {
  const {
    label = "Writing style",
    defaultValue = "",
    onChange = (value2) => {
    },
    sx
  } = props;
  const [value, setValue] = import_react36.default.useState(
    () => {
      return WRITING_STYLES_OPTIONS.find(
        (option) => option.value === defaultValue
      ) || WRITING_STYLES_OPTIONS[0];
    }
  );
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
    Autocomplete_default,
    {
      disableClearable: true,
      value,
      size: "small",
      sx: { width: 160, ...sx },
      autoHighlight: true,
      disablePortal: true,
      getOptionLabel: (option) => option.label,
      options: WRITING_STYLES_OPTIONS,
      onChange: (event, newValue) => {
        setValue(newValue);
        onChange(newValue.value);
      },
      filterOptions: filterOptions3,
      renderInput: (params) => /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
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

// src/features/prompt/components/RunPromptWebSearchQueryTextField.tsx
init_emotion_styled_browser_esm();

// src/features/webAccess/components/WebAccessAdvancedSelector.tsx
var import_KeyboardArrowDown = __toESM(require_KeyboardArrowDown());
var import_KeyboardArrowUp = __toESM(require_KeyboardArrowUp());
var import_react38 = __toESM(require_react());

// src/util/summarize.json
var summarize_default = [
  { value: "NO_SUMMARIZE", label: "Quick lookup", tip: "Extension searches web results, takes a small portion of each URL's content, and uses it as prompt context." },
  { value: "STUFF", label: "Partial insights", tip: "Extension searches web results, takes a large portion of each URL's content, summarizes to ChatGPT limit, and uses it as prompt context." },
  { value: "MAP_REDUCE", label: "Full insights", tip: "Extension searches web results, takes all of each URL's content, summarizes to ChatGPT limit, and uses it as prompt context." }
];

// src/util/timePeriodOptions.json
var timePeriodOptions_default = [
  { value: "any", label: "Any time" },
  { value: "d", label: "Past day" },
  { value: "w", label: "Past week" },
  { value: "m", label: "Past month" }
];

// src/components/select/RegionSelect.tsx
var import_react37 = __toESM(require_react());

// src/util/regionOptions.json
var regionOptions_default = [
  { value: "wt-wt", label: "Any region" },
  { value: "Afghanistan", label: "Afghanistan" },
  { value: "Albania", label: "Albania" },
  { value: "Algeria", label: "Algeria" },
  { value: "American Samoa", label: "American Samoa" },
  { value: "Andorra", label: "Andorra" },
  { value: "Angola", label: "Angola" },
  { value: "Anguilla", label: "Anguilla" },
  { value: "Antarctica", label: "Antarctica" },
  { value: "Antigua and Barbuda", label: "Antigua and Barbuda" },
  { value: "Argentina", label: "Argentina" },
  { value: "Armenia", label: "Armenia" },
  { value: "Aruba", label: "Aruba" },
  { value: "Australia", label: "Australia" },
  { value: "Austria", label: "Austria" },
  { value: "Azerbaijan", label: "Azerbaijan" },
  { value: "Bahamas", label: "Bahamas" },
  { value: "Bahrain", label: "Bahrain" },
  { value: "Bangladesh", label: "Bangladesh" },
  { value: "Barbados", label: "Barbados" },
  { value: "Belarus", label: "Belarus" },
  { value: "Belgium", label: "Belgium" },
  { value: "Belize", label: "Belize" },
  { value: "Benin", label: "Benin" },
  { value: "Bermuda", label: "Bermuda" },
  { value: "Bhutan", label: "Bhutan" },
  { value: "Bolivia", label: "Bolivia" },
  { value: "Bosnia and Herzegovina", label: "Bosnia and Herzegovina" },
  { value: "Botswana", label: "Botswana" },
  { value: "Bouvet Island", label: "Bouvet Island" },
  { value: "Brazil", label: "Brazil" },
  { value: "British Virgin Islands", label: "British Virgin Islands" },
  { value: "Brunei", label: "Brunei" },
  { value: "Bulgaria", label: "Bulgaria" },
  { value: "Burkina Faso", label: "Burkina Faso" },
  { value: "Burundi", label: "Burundi" },
  { value: "Cambodia", label: "Cambodia" },
  { value: "Cameroon", label: "Cameroon" },
  { value: "Canada", label: "Canada" },
  { value: "Cape Verde", label: "Cape Verde" },
  { value: "Cayman Islands", label: "Cayman Islands" },
  { value: "Central African Republic", label: "Central African Republic" },
  { value: "Chad", label: "Chad" },
  { value: "Chile", label: "Chile" },
  { value: "China", label: "China" },
  { value: "Christmas Island", label: "Christmas Island" },
  { value: "Cocos (Keeling) Islands", label: "Cocos (Keeling) Islands" },
  { value: "Colombia", label: "Colombia" },
  { value: "Comoros", label: "Comoros" },
  { value: "Congo - Brazzaville", label: "Congo - Brazzaville" },
  { value: "Congo - Kinshasa", label: "Congo - Kinshasa" },
  { value: "Cook Islands", label: "Cook Islands" },
  { value: "Costa Rica", label: "Costa Rica" },
  { value: "Cote d'Ivoire", label: "Cote d'Ivoire" },
  { value: "Croatia", label: "Croatia" },
  { value: "Cuba", label: "Cuba" },
  { value: "Cyprus", label: "Cyprus" },
  { value: "Czech Republic", label: "Czech Republic" },
  { value: "Denmark", label: "Denmark" },
  { value: "Djibouti", label: "Djibouti" },
  { value: "Dominica", label: "Dominica" },
  { value: "Dominican Republic", label: "Dominican Republic" },
  { value: "Ecuador", label: "Ecuador" },
  { value: "Egypt", label: "Egypt" },
  { value: "El Salvador", label: "El Salvador" },
  { value: "Equatorial Guinea", label: "Equatorial Guinea" },
  { value: "Eritrea", label: "Eritrea" },
  { value: "Estonia", label: "Estonia" },
  { value: "Eswatini", label: "Eswatini" },
  { value: "Ethiopia", label: "Ethiopia" },
  { value: "Faroe Islands", label: "Faroe Islands" },
  { value: "Fiji", label: "Fiji" },
  { value: "Finland", label: "Finland" },
  { value: "France", label: "France" },
  { value: "Gabon", label: "Gabon" },
  { value: "Gambia", label: "Gambia" },
  { value: "Georgia", label: "Georgia" },
  { value: "Germany", label: "Germany" },
  { value: "Ghana", label: "Ghana" },
  { value: "Gibraltar", label: "Gibraltar" },
  { value: "Greece", label: "Greece" },
  { value: "Greenland", label: "Greenland" },
  { value: "Grenada", label: "Grenada" },
  { value: "Guadeloupe", label: "Guadeloupe" },
  { value: "Guam", label: "Guam" },
  { value: "Guatemala", label: "Guatemala" },
  { value: "Guinea", label: "Guinea" },
  { value: "Guinea-Bissau", label: "Guinea-Bissau" },
  { value: "Guyana", label: "Guyana" },
  { value: "Haiti", label: "Haiti" },
  { value: "Holy Sea", label: "Holy Sea" },
  { value: "Honduras", label: "Honduras" },
  { value: "Hong Kong", label: "Hong Kong" },
  { value: "Hungary", label: "Hungary" },
  { value: "Iceland", label: "Iceland" },
  { value: "India", label: "India" },
  { value: "Indonesia", label: "Indonesia" },
  { value: "Iraq", label: "Iraq" },
  { value: "Ireland", label: "Ireland" },
  { value: "Israel", label: "Israel" },
  { value: "Italy", label: "Italy" },
  { value: "Jamaica", label: "Jamaica" },
  { value: "Japan", label: "Japan" },
  { value: "Jordan", label: "Jordan" },
  { value: "Kazakhstan", label: "Kazakhstan" },
  { value: "Kenya", label: "Kenya" },
  { value: "Kiribati", label: "Kiribati" },
  { value: "Korea", label: "Korea" },
  { value: "Kuwait", label: "Kuwait" },
  { value: "Kyrgyzstan", label: "Kyrgyzstan" },
  { value: "Latvia", label: "Latvia" },
  { value: "Lebanon", label: "Lebanon" },
  { value: "Lesotho", label: "Lesotho" },
  { value: "Liberia", label: "Liberia" },
  { value: "Libyan Arab Jamahiriya", label: "Libyan Arab Jamahiriya" },
  { value: "Liechtenstein", label: "Liechtenstein" },
  { value: "Lithuania", label: "Lithuania" },
  { value: "Luxembourg", label: "Luxembourg" },
  { value: "Macau", label: "Macau" },
  { value: "Macedonia", label: "Macedonia" },
  { value: "Madagascar", label: "Madagascar" },
  { value: "Malawi", label: "Malawi" },
  { value: "Malaysia", label: "Malaysia" },
  { value: "Maldives", label: "Maldives" },
  { value: "Mali", label: "Mali" },
  { value: "Malta", label: "Malta" },
  { value: "Marshall Islands", label: "Marshall Islands" },
  { value: "Martinique", label: "Martinique" },
  { value: "Mauritania", label: "Mauritania" },
  { value: "Mauritius", label: "Mauritius" },
  { value: "Mayotte", label: "Mayotte" },
  { value: "Mexico", label: "Mexico" },
  { value: "Moldova, Republic of", label: "Moldova, Republic of" },
  { value: "Monaco", label: "Monaco" },
  { value: "Mongolia", label: "Mongolia" },
  { value: "Montserrat", label: "Montserrat" },
  { value: "Morocco", label: "Morocco" },
  { value: "Mozambique", label: "Mozambique" },
  { value: "Myanmar", label: "Myanmar" },
  { value: "Namibia", label: "Namibia" },
  { value: "Nauru", label: "Nauru" },
  { value: "Nepal", label: "Nepal" },
  { value: "Netherlands", label: "Netherlands" },
  { value: "Netherlands Antilles", label: "Netherlands Antilles" },
  { value: "New Caledonia", label: "New Caledonia" },
  { value: "New Zealand", label: "New Zealand" },
  { value: "Nicaragua", label: "Nicaragua" },
  { value: "Niger", label: "Niger" },
  { value: "Nigeria", label: "Nigeria" },
  { value: "Niue", label: "Niue" },
  { value: "Norfolk Island", label: "Norfolk Island" },
  { value: "Northern Mariana Islands", label: "Northern Mariana Islands" },
  { value: "Norway", label: "Norway" },
  { value: "Oman", label: "Oman" },
  { value: "Pakistan", label: "Pakistan" },
  { value: "Palau", label: "Palau" },
  { value: "Palestinian Territory", label: "Palestinian Territory" },
  { value: "Panama", label: "Panama" },
  { value: "Papua New Guinea", label: "Papua New Guinea" },
  { value: "Paraguay", label: "Paraguay" },
  { value: "Peru", label: "Peru" },
  { value: "Philippines", label: "Philippines" },
  { value: "Pitcairn", label: "Pitcairn" },
  { value: "Poland", label: "Poland" },
  { value: "Portugal", label: "Portugal" },
  { value: "Puerto Rico", label: "Puerto Rico" },
  { value: "Qatar", label: "Qatar" },
  { value: "Reunion", label: "Reunion" },
  { value: "Romania", label: "Romania" },
  { value: "Russian Federation", label: "Russian Federation" },
  { value: "Rwanda", label: "Rwanda" },
  { value: "Saint Helena", label: "Saint Helena" },
  { value: "Saint Kitts and Nevis", label: "Saint Kitts and Nevis" },
  { value: "Saint Lucia", label: "Saint Lucia" },
  { value: "Saint Pierre & Miquelon", label: "Saint Pierre & Miquelon" },
  { value: "Samoa", label: "Samoa" },
  { value: "San Marino", label: "San Marino" },
  { value: "Sao Tome and Principe", label: "Sao Tome and Principe" },
  { value: "Saudi Arabia", label: "Saudi Arabia" },
  { value: "Senegal", label: "Senegal" },
  { value: "Serbia and Montenegro", label: "Serbia and Montenegro" },
  { value: "Seychelles", label: "Seychelles" },
  { value: "Sierra Leone", label: "Sierra Leone" },
  { value: "Singapore", label: "Singapore" },
  { value: "Slovakia", label: "Slovakia" },
  { value: "Slovenia", label: "Slovenia" },
  { value: "Solomon Islands", label: "Solomon Islands" },
  { value: "Somalia", label: "Somalia" },
  { value: "South Africa", label: "South Africa" },
  { value: "Spain", label: "Spain" },
  { value: "Sri Lanka", label: "Sri Lanka" },
  { value: "Sudan", label: "Sudan" },
  { value: "Suriname", label: "Suriname" },
  { value: "Svalbard & Jan Mayen", label: "Svalbard & Jan Mayen" },
  { value: "Sweden", label: "Sweden" },
  { value: "Switzerland", label: "Switzerland" },
  { value: "Syrian Arab Republic", label: "Syrian Arab Republic" },
  { value: "Taiwan", label: "Taiwan" },
  { value: "Tajikistan", label: "Tajikistan" },
  { value: "Tanzania", label: "Tanzania" },
  { value: "Thailand", label: "Thailand" },
  { value: "Timor-Leste", label: "Timor-Leste" },
  { value: "Togo", label: "Togo" },
  { value: "Tokelau", label: "Tokelau" },
  { value: "Tonga", label: "Tonga" },
  { value: "Trinidad and Tobago", label: "Trinidad and Tobago" },
  { value: "Tunisia", label: "Tunisia" },
  { value: "Turkey", label: "Turkey" },
  { value: "Turkmenistan", label: "Turkmenistan" },
  { value: "Turks and Caicos Islands", label: "Turks and Caicos Islands" },
  { value: "Tuvalu", label: "Tuvalu" },
  { value: "Uganda", label: "Uganda" },
  { value: "Ukraine", label: "Ukraine" },
  { value: "United Arab Emirates", label: "United Arab Emirates" },
  { value: "United Kingdom", label: "United Kingdom" },
  { value: "United States", label: "United States" },
  { value: "Uruguay", label: "Uruguay" },
  { value: "Uzbekistan", label: "Uzbekistan" },
  { value: "Vanuatu", label: "Vanuatu" },
  { value: "Venezuela", label: "Venezuela" },
  { value: "Viet Nam", label: "Viet Nam" },
  { value: "Virgin Islands (British)", label: "Virgin Islands (British)" },
  { value: "Virgin Islands (U.S.)", label: "Virgin Islands (U.S.)" },
  { value: "Western Sahara", label: "Western Sahara" },
  { value: "Yemen", label: "Yemen" },
  { value: "Zambia", label: "Zambia" },
  { value: "Zimbabwe", label: "Zimbabwe" }
];

// src/components/select/RegionSelect.tsx
var import_jsx_runtime34 = __toESM(require_jsx_runtime());
function filterOptions4(options, { inputValue }) {
  return options.filter((option) => {
    const label = option.label.toLowerCase();
    const value = option.value.toLowerCase();
    const input = inputValue.toLowerCase();
    return label.includes(input) || value.includes(input);
  });
}
var RegionSelect = (props) => {
  const {
    label = "",
    defaultValue = "",
    onChange = (value2) => {
    },
    sx
  } = props;
  const [value, setValue] = import_react37.default.useState(
    () => {
      return regionOptions_default.find((option) => option.value === defaultValue) || regionOptions_default[0];
    }
  );
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
    Autocomplete_default,
    {
      disablePortal: true,
      disableClearable: true,
      value,
      size: "small",
      sx: {
        width: 220,
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
      componentsProps: {
        popper: {
          placement: "top"
        }
      },
      autoHighlight: true,
      getOptionLabel: (option) => option.label,
      options: regionOptions_default,
      onChange: (event, newValue) => {
        setValue(newValue);
        onChange(newValue.value);
      },
      noOptionsText: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(Typography_default, { variant: "caption", fontWeight: 500, children: "No options" }),
      filterOptions: filterOptions4,
      renderInput: (params) => /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
        TextField_default,
        {
          ...params,
          label,
          sx: {},
          inputProps: {
            ...params.inputProps,
            autoComplete: "new-password",
            // disable autocomplete and autofill
            sx: {
              pl: 0
            }
          }
        }
      )
    }
  );
};
var RegionSelect_default = RegionSelect;

// src/features/webAccess/components/WebAccessSettingSelect.tsx
var import_jsx_runtime35 = __toESM(require_jsx_runtime());
var WebAccessSettingSelect = (props) => {
  const { sx, ...restProps } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
    BaseSelect,
    {
      sx: {
        height: 40,
        width: "auto",
        p: 1,
        "& .MuiInputBase-input": {
          display: "flex",
          alignItems: "center"
        },
        "& .MuiInputBase-input > p": {
          lineHeight: "100%"
        },
        "& .MuiSelect-icon": {
          color: "inherit"
        },
        ...sx
      },
      MenuProps: {
        anchorOrigin: {
          vertical: "top",
          horizontal: "center"
        },
        transformOrigin: {
          vertical: "bottom",
          horizontal: "center"
        }
      },
      renderLabel: (value, option) => {
        return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(Typography_default, { variant: "body2", fontWeight: 500, children: option.label });
      },
      ...restProps
    }
  );
};
var WebAccessSettingSelect_default = WebAccessSettingSelect;

// src/features/webAccess/components/WebAccessAdvancedSelector.tsx
var import_jsx_runtime36 = __toESM(require_jsx_runtime());
var numResultsOptions = Array.from({ length: 10 }, (_, i) => i + 1).map(
  (num) => ({
    value: num,
    label: `${num} result${num === 1 ? "" : "s"}`
  })
);
numResultsOptions.push({
  value: 100,
  label: "Max results"
});
var SearchEngineOptions = [
  {
    value: "google",
    label: "Google Search"
  },
  {
    value: "yahoo",
    label: "Yahoo Search"
  }
];
var WEB_ACCESS_ADVANCED = "web-access-advanced";
var summarizeTooltip = /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(Stack_default, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Typography_default, { variant: "body2", fontWeight: 600, mt: 0, mb: 0.6, children: "Quick lookup" }),
  /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Typography_default, { variant: "caption", children: "Extension searches web results, takes a small portion of each URL's content, and uses it as prompt context." }),
  /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Typography_default, { variant: "body2", fontWeight: 600, mt: 2, mb: 0.6, children: "Partial insights" }),
  /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Typography_default, { variant: "caption", children: "Extension searches web results, takes a large portion of each URL's content, summarizes to ChatGPT limit, and uses it as prompt context." }),
  /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Typography_default, { variant: "body2", fontWeight: 600, mt: 2, mb: 0.6, children: "Full insights" }),
  /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Typography_default, { variant: "caption", children: "Extension searches web results, takes all of each URL's content, summarizes to ChatGPT limit, and uses it as prompt context." })
] });
var WebAccessAdvancedSelector = ({
  responsiveAdvanced = false,
  enableAdvanced,
  sx
}) => {
  const { userConfig, setUserConfig } = useUserConfig();
  const [prompts, setPrompts] = (0, import_react38.useState)([]);
  const [summarizeTooltipOpen, setSummarizeTooltipOpen] = (0, import_react38.useState)(false);
  const [advancedAnchorEl, setAdvancedAnchorEl] = (0, import_react38.useState)(null);
  const webAccessAdvancedOpen = Boolean(advancedAnchorEl);
  const webAccessAdvancedId = webAccessAdvancedOpen ? WEB_ACCESS_ADVANCED : void 0;
  const { waitStuckCheck } = useAuthModalController();
  const cacheEnableAdvanced = (0, import_react38.useMemo)(
    () => enableAdvanced === "all" ? [
      "summarizeType",
      "numResults",
      "searchEngine",
      "timePeriod",
      "region",
      "aiResponseLanguage",
      "promptUUID"
    ] : enableAdvanced,
    [enableAdvanced]
  );
  (0, import_react38.useEffect)(() => {
    updatePrompts();
  }, []);
  const handlePromptClick = () => updatePrompts();
  const updatePrompts = () => {
    getSavedPrompts().then((savedPrompts) => {
      setPrompts(savedPrompts);
    });
  };
  const handleSearchEngineChange = (newValue) => {
    setUserConfig({ searchEngine: newValue });
  };
  const handleNumResultsChange = (newValue) => {
    const value = parseInt(newValue, 10);
    setUserConfig({ numWebResults: value });
  };
  const handleTimePeriodChange = (newValue) => {
    setUserConfig({ timePeriod: newValue });
  };
  const handleRegionChange = (newValue) => {
    waitStuckCheck(() => {
      setUserConfig({ region: newValue });
    });
  };
  const handleAiResponseLanguageChange = (newValue) => {
    waitStuckCheck(() => {
      setUserConfig({ aiResponseLanguage: newValue });
    });
  };
  const handleSummarizeTypeChange = (newValue) => {
    const newSummarizeType = newValue;
    setUserConfig({ summarizeType: newSummarizeType });
  };
  const handlePromptChange = (newValue) => {
    const uuid = newValue;
    if (uuid === "wcg-new-prompt") {
      chromeExtensionClientOpenPage({ key: "options", query: "#/web-access" });
      return;
    }
    waitStuckCheck(() => {
      removeFocusFromCurrentElement();
      setUserConfig({ promptUUID: uuid });
    });
  };
  const removeFocusFromCurrentElement = () => document.activeElement?.blur();
  const handleAdvancedPopoverOpen = (event) => {
    setAdvancedAnchorEl(event.currentTarget);
  };
  const checkEnableAdvanced = (0, import_react38.useCallback)(
    (key) => {
      return cacheEnableAdvanced?.includes(key);
    },
    [cacheEnableAdvanced]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(import_jsx_runtime36.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
      Button_default,
      {
        "aria-describedby": webAccessAdvancedId,
        onClick: handleAdvancedPopoverOpen,
        variant: "normalOutlined",
        endIcon: webAccessAdvancedOpen ? /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_KeyboardArrowUp.default, {}) : /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_KeyboardArrowDown.default, {}),
        sx: {
          minWidth: "auto",
          height: 40,
          p: 1,
          ...sx
        },
        children: "Advanced"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
      Popover_default,
      {
        id: webAccessAdvancedId,
        open: webAccessAdvancedOpen,
        anchorEl: advancedAnchorEl,
        onClose: () => setAdvancedAnchorEl(null),
        anchorOrigin: {
          vertical: "top",
          horizontal: "center"
        },
        transformOrigin: {
          vertical: "bottom",
          horizontal: "center"
        },
        sx: {
          "& > .MuiPaper-root": {
            overflow: "visible"
          }
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(Stack_default, { spacing: 2, p: 2, children: [
          checkEnableAdvanced("promptUUID") && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
            WebAccessSettingSelect_default,
            {
              label: "Prompt",
              value: userConfig.promptUUID,
              options: prompts.map((prompt) => ({
                value: prompt.uuid ?? "undefine",
                label: prompt.name
              })).concat({
                value: "wcg-new-prompt",
                label: `+ ${getTranslate(
                  "client",
                  "chatgpt__web_access__new_prompt"
                )}`
              }),
              onChange: (value) => {
                handlePromptChange(value);
              },
              onClick: handlePromptClick,
              sx: {
                width: 220
              }
            }
          ),
          checkEnableAdvanced("aiResponseLanguage") && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
            LanguageSelect_default,
            {
              label: "Language",
              defaultValue: userConfig.aiResponseLanguage,
              onChange: handleAiResponseLanguageChange,
              placement: "top",
              hasAuto: true,
              sx: {
                height: 40
              }
            }
          ),
          checkEnableAdvanced("region") && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
            RegionSelect_default,
            {
              label: "Region",
              defaultValue: userConfig.region,
              onChange: handleRegionChange,
              sx: {
                height: 40
              }
            }
          ),
          checkEnableAdvanced("timePeriod") && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
            WebAccessSettingSelect_default,
            {
              label: "Time",
              value: userConfig.timePeriod,
              options: timePeriodOptions_default,
              onChange: (value) => {
                waitStuckCheck(() => handleTimePeriodChange(value));
              },
              sx: {
                width: 220
              }
            }
          ),
          checkEnableAdvanced("summarizeType") && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
            Tooltip_default,
            {
              title: summarizeTooltip,
              open: summarizeTooltipOpen,
              placement: "left",
              children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Box_default, { children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
                WebAccessSettingSelect_default,
                {
                  label: "Search depth",
                  value: userConfig.summarizeType,
                  options: summarize_default,
                  onChange: (value) => {
                    waitStuckCheck(() => handleSummarizeTypeChange(value));
                  },
                  onOpen: () => {
                    setSummarizeTooltipOpen(true);
                  },
                  onClose: () => {
                    setSummarizeTooltipOpen(false);
                  },
                  sx: {
                    width: 220
                  },
                  renderLabel: (value, option) => {
                    return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Typography_default, { variant: "body2", fontWeight: 500, children: option.label });
                  }
                }
              ) })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(
            Stack_default,
            {
              spacing: 2,
              sx: responsiveAdvanced ? {
                display: {
                  xs: "flex",
                  lg: "none"
                }
              } : null,
              children: [
                checkEnableAdvanced("searchEngine") && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
                  WebAccessSettingSelect_default,
                  {
                    label: "Search engine",
                    options: SearchEngineOptions,
                    value: userConfig.searchEngine,
                    onChange: async (value) => {
                      waitStuckCheck(() => handleSearchEngineChange(value));
                    },
                    sx: {
                      width: 220
                    }
                  }
                ),
                checkEnableAdvanced("numResults") && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
                  WebAccessSettingSelect_default,
                  {
                    label: "Search results",
                    options: numResultsOptions,
                    value: userConfig.numWebResults,
                    onChange: async (value) => {
                      waitStuckCheck(() => handleNumResultsChange(value));
                    },
                    sx: {
                      width: 220
                    }
                  }
                )
              ]
            }
          )
        ] })
      }
    )
  ] });
};
var WebAccessAdvancedSelector_default = WebAccessAdvancedSelector;

// src/features/prompt/components/RunPromptWebSearchQueryTextField.tsx
var import_jsx_runtime37 = __toESM(require_jsx_runtime());
var CssTextField = emotion_styled_browser_esm_default((props) => /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(TextField_default, { ...props }))((props) => {
  const color = props.inputProps?.color || "";
  return {
    "& label.Mui-focused": {
      color
    },
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: color
      },
      "&.Mui-focused fieldset": {
        borderColor: color
      }
    }
  };
});
var RunPromptWebSearchQueryTextField = ({
  variable,
  handleChange,
  handleRunPrompt,
  error: error2
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(Stack_default, { direction: "row", children: [
    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
      WebAccessAdvancedSelector_default,
      {
        enableAdvanced: [
          "region",
          "timePeriod",
          "summarizeType",
          "searchEngine",
          "numResults"
        ],
        sx: {
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          position: "relative",
          left: 1
          // borderColor: (t: Theme) =>
          //   t.palette.mode === 'dark'
          //     ? 'rgba(255, 255, 255, 0.23)'
          //     : 'rgba(0, 0, 0, 0.23)',
          // '&:hover': {
          //   borderColor: (t: Theme) =>
          //     t.palette.mode === 'dark'
          //       ? 'rgba(255, 255, 255, 0.23)'
          //       : 'rgba(0, 0, 0, 0.23)',
          // },
        }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
      CssTextField,
      {
        label: variable.name,
        placeholder: variable.hint || variable.name,
        value: variable.value,
        onChange: (e) => {
          handleChange && handleChange(`${e.target.value}`);
        },
        onKeyDown: (e) => {
          if (e.key === "Enter") {
            handleRunPrompt && handleRunPrompt();
          }
        },
        sx: {
          width: "100%",
          minHeight: "100%",
          "& .MuiInputBase-root": {
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0
          }
        },
        size: "small",
        variant: "outlined",
        error: !!error2,
        helperText: !!error2 && error2,
        FormHelperTextProps: { sx: { ml: 0 } }
      }
    )
  ] });
};
var RunPromptWebSearchQueryTextField_default = RunPromptWebSearchQueryTextField;

// src/features/prompt/components/RunPromptSettingSelector.tsx
var import_jsx_runtime38 = __toESM(require_jsx_runtime());
var CssTextField2 = emotion_styled_browser_esm_default((props) => /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(TextField_default, { ...props }))((props) => {
  const color = props.inputProps?.color || "";
  return {
    "& label.Mui-focused": {
      color
    },
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: color
      },
      "&.Mui-focused fieldset": {
        borderColor: color
      }
    }
  };
});
var RunPromptSettingSelector = ({
  promptId,
  sx,
  loading = false,
  colorInput = true,
  promptDetail,
  onClose
}) => {
  const [runPromptLoading, setRunPromptLoading] = (0, import_react39.useState)(false);
  const { runThisPrompt } = useRunThisPromptV3();
  const [runPromptSettings, setRunPromptSettings] = Recoil_index_22(
    RunPromptSettingsAtom
  );
  const { batchGenerateVariable } = usePromptVariableController_default();
  const [promptInputError, setPromptInputError] = (0, import_react39.useState)(
    []
  );
  const variables = (0, import_react39.useMemo)(() => {
    return promptDetail?.variables && promptDetail?.variable_types ? handleVariableTypeWithInputVariable(
      promptDetail?.variables,
      promptDetail?.variable_types
    ) : promptDetail?.variables;
  }, [promptDetail]);
  const handleRunPrompt = async () => {
    if (!promptDetail?.prompt_template) {
      return;
    }
    try {
      setRunPromptLoading(true);
      const promptTemplate = promptDetail.prompt_template;
      const { tone, writingStyle, language, variables: variables2 } = runPromptSettings;
      const liveCrawlingVariable = variables2.find(
        (item) => item.type === "livecrawling" && item.name === "Live Crawling Target URL"
      );
      if (liveCrawlingVariable && !checkIsDomain(liveCrawlingVariable?.value || "")) {
        setPromptInputError((pre) => [
          ...pre,
          [liveCrawlingVariable.name, "Please enter a valid URL"]
        ]);
        return;
      }
      const webSearchQueryVariable = variables2.find(
        (item) => item.type === "websearch" && item.name === "Web Search Query"
      );
      if (webSearchQueryVariable && !webSearchQueryVariable.value) {
        setPromptInputError((pre) => [
          ...pre,
          [webSearchQueryVariable.name, "Please enter a valid search query"]
        ]);
        return;
      }
      setPromptInputError([]);
      let promptToneAndWritingStyle = promptDetail?.optional_prompt_template || "";
      if (String(tone + writingStyle).trim() === "" && language === "English") {
        promptToneAndWritingStyle = "";
      }
      if (promptToneAndWritingStyle) {
        if (!promptToneAndWritingStyle.startsWith("\n")) {
          promptToneAndWritingStyle = `
${promptToneAndWritingStyle}`;
        }
      }
      const renderedTemplateParams = {
        TONE: tone ? String(tone).toLowerCase() : "{{TONE}}",
        TARGET_LANGUAGE: language ?? "{{TARGET_LANGUAGE}}",
        WRITTINGSTYLE: writingStyle ? String(writingStyle || "").toLowerCase() : "{{WRITTINGSTYLE}}"
      };
      if (liveCrawlingVariable) {
        renderedTemplateParams[liveCrawlingVariable.name] = liveCrawlingVariable.value || liveCrawlingVariable.name;
      }
      if (webSearchQueryVariable) {
        renderedTemplateParams[webSearchQueryVariable.name] = webSearchQueryVariable.value || webSearchQueryVariable.name;
      }
      const normalVariables = variables2.filter((item) => item.type === "text");
      if (normalVariables) {
        normalVariables.forEach((variable) => {
          renderedTemplateParams[variable.name] = variable.value ? variable.value : `{{${variable.name}}}`;
        });
      }
      const result = renderTemplate(
        promptDetail.prompt_template + promptToneAndWritingStyle,
        renderedTemplateParams
      );
      runThisPrompt(result.data || promptTemplate, variables2, {
        featureId: "PROMPTS",
        promptId: promptDetail.id,
        promptName: promptDetail.prompt_title
      });
      onClose && onClose();
    } catch (error2) {
    } finally {
      setRunPromptLoading(false);
    }
  };
  const handleUpdateVariableValue = (name, value) => {
    setRunPromptSettings((preValue) => {
      const newVariables = cloneDeep_default(preValue.variables);
      const index2 = newVariables.findIndex((item) => item.name === name);
      if (index2 !== -1) {
        newVariables[index2].value = value;
      }
      return {
        ...preValue,
        variables: newVariables
      };
    });
  };
  const checkIsNotNeedShowVariable = (variable) => {
    const hiddenVariables = [
      "Live Crawling Crawled Text",
      "Live Crawling Crawled Html",
      "Web Search Results",
      "System Current Date"
    ];
    return checkIsDefaultVariable(variable) && hiddenVariables.includes(variable.name);
  };
  (0, import_react39.useEffect)(() => {
    if (variables) {
      const { newVariables } = batchGenerateVariable(variables, 0);
      setRunPromptSettings((preValue) => ({
        ...preValue,
        variables: newVariables.map((item) => ({ ...item, value: "" }))
      }));
    }
  }, [variables]);
  (0, import_react39.useEffect)(() => {
    setPromptInputError([]);
  }, [promptId]);
  const renderRunPromptVariables = (0, import_react39.useMemo)(() => {
    return runPromptSettings.variables.filter(
      (item) => !checkIsNotNeedShowVariable(item)
    );
  }, [runPromptSettings.variables]);
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
    AppLoadingLayout_default,
    {
      loading,
      sx: {
        minHeight: 115,
        minWidth: {
          xs: "85vw",
          sm: 750
        }
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(Stack_default, { spacing: 2, sx, children: [
        /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(Stack_default, { direction: "row", alignItems: "center", spacing: 2, children: [
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
            PromptLanguageSelect,
            {
              defaultValue: runPromptSettings.language,
              onChange: (value) => {
                setRunPromptSettings((pre) => ({
                  ...pre,
                  language: value
                }));
              },
              sx: { width: "100%" }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
            ToneSelect,
            {
              defaultValue: runPromptSettings.tone,
              onChange: (value) => {
                setRunPromptSettings((pre) => ({
                  ...pre,
                  tone: value
                }));
              },
              sx: { width: "100%" }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
            WritingStyleSelect,
            {
              defaultValue: runPromptSettings.writingStyle,
              onChange: (value) => {
                setRunPromptSettings((pre) => ({
                  ...pre,
                  writingStyle: value
                }));
              },
              sx: { width: "100%" }
            }
          )
        ] }),
        promptId && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Box_default, { children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Grid_default, { container: true, rowSpacing: 2, columnSpacing: 2, children: renderRunPromptVariables.map((variable, index2) => {
          const length = renderRunPromptVariables.length;
          const xs = length % 2 !== 0 && index2 + 1 === length ? 12 : 6;
          if (variable.name === "Web Search Query" && variable.type === "websearch") {
            return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Grid_default, { item: true, xs, children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
              Tooltip_default,
              {
                title: variable.hint || variable.name,
                disableHoverListener: true,
                placement: "bottom-start",
                children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
                  RunPromptWebSearchQueryTextField_default,
                  {
                    variable,
                    handleChange: (value) => {
                      setPromptInputError([]);
                      handleUpdateVariableValue(variable.name, value);
                    },
                    handleRunPrompt,
                    error: promptInputError.find(
                      (errorItem) => errorItem[0] === variable.name
                    )?.[1] || ""
                  }
                )
              }
            ) }, variable.name);
          }
          return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Grid_default, { item: true, xs, children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
            Tooltip_default,
            {
              title: variable.hint || variable.name,
              disableHoverListener: true,
              placement: "bottom-start",
              children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
                CssTextField2,
                {
                  label: variable.name,
                  placeholder: variable.hint || variable.name,
                  value: variable.value,
                  onChange: (e) => {
                    handleUpdateVariableValue(
                      variable.name,
                      `${e.target.value}`
                    );
                  },
                  onKeyDown: (e) => {
                    setPromptInputError([]);
                    if (e.key === "Enter") {
                      handleRunPrompt();
                    }
                  },
                  inputProps: {
                    color: colorInput ? variable.color : void 0
                  },
                  sx: {
                    width: "100%",
                    minHeight: "100%"
                  },
                  size: "small",
                  variant: "outlined",
                  error: promptInputError.some(
                    (errorItem) => errorItem[0] === variable.name
                  ),
                  helperText: promptInputError.find(
                    (errorItem) => errorItem[0] === variable.name
                  )?.[1] || "",
                  FormHelperTextProps: { sx: { ml: 0 } }
                }
              )
            }
          ) }, variable.name);
        }) }) }),
        promptId && /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(Stack_default, { direction: "row", justifyContent: "flex-end", spacing: 1.5, children: [
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
            LoadingButton_default,
            {
              loading: runPromptLoading,
              sx: { flexShrink: 0, height: 45 },
              variant: "secondary",
              onClick: onClose,
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
            LoadingButton_default,
            {
              loading: runPromptLoading,
              sx: { flexShrink: 0, height: 45 },
              variant: "contained",
              color: "primary",
              startIcon: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_Send.default, { fontSize: "inherit" }),
              onClick: handleRunPrompt,
              children: "Run this prompt"
            }
          )
        ] })
      ] })
    }
  );
};
var RunPromptSettingSelector_default = RunPromptSettingSelector;

// src/features/prompt/hooks/usePromptDetail.ts
var usePromptDetail = (id, type) => {
  const api = type === "private" ? PROMPT_API.GET_PRIVATE_PROMPT_DETAIL : PROMPT_API.GET_PROMPT_DETAIL;
  return useQuery(
    [api, id],
    async () => {
      return post(api, {
        id
      });
    },
    {
      enabled: !!id,
      refetchOnWindowFocus: false
    }
  );
};

// src/features/prompt/components/PromptFixedRunner.tsx
var import_jsx_runtime39 = __toESM(require_jsx_runtime());
var PromptFixedRunner = ({
  promptId,
  promptType = "public",
  onClose
}) => {
  const show = !!promptId;
  const { data: promptDetailResponse, isLoading } = usePromptDetail(
    promptId,
    promptType || "public"
  );
  const prompt = promptDetailResponse?.data;
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(Slide_default, { direction: "up", in: show, children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
    Paper_default,
    {
      sx: {
        display: "flex"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(
        Box_default,
        {
          sx: (t) => {
            const isDark = t.palette.mode === "dark";
            return {
              position: "relative",
              mx: "auto",
              my: 2,
              // width: 'max-content',
              // width: 750,
              p: 2,
              borderRadius: 1,
              bgcolor: isDark ? "#40414F" : "transparent",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.16)"
            };
          },
          children: [
            prompt && /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(Box_default, { position: "absolute", top: 8, right: 8, children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(IconButton_default, { "aria-label": "delete", onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_Close2.default, { fontSize: "inherit" }) }) }),
            !isLoading && prompt?.prompt_title && /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
              Typography_default,
              {
                variant: "body2",
                color: "#fff",
                bgcolor: "#000",
                width: "max-content",
                px: 1,
                borderRadius: 1,
                mb: 2,
                maxWidth: "80%",
                children: prompt.prompt_title
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
              RunPromptSettingSelector_default,
              {
                sx: {
                  minWidth: {
                    xs: "85vw",
                    sm: 750
                  }
                },
                promptDetail: prompt,
                colorInput: false,
                promptId: prompt?.id,
                loading: isLoading,
                onClose
              }
            )
          ]
        }
      )
    }
  ) });
};
var PromptFixedRunner_default = PromptFixedRunner;

// src/features/prompt/PromptRunner.tsx
var import_jsx_runtime40 = __toESM(require_jsx_runtime());
var PromptRunner = () => {
  const { selectPromptId, selectPromptType, updateSelectPromptId } = useSelectPromptController_default();
  (0, import_react40.useEffect)(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        updateSelectPromptId(null);
      }
    };
    window.addEventListener("keydown", listener);
    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
    Box_default,
    {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      sx: {
        pointerEvents: selectPromptId ? "auto" : "none",
        zIndex: 10
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
        PromptFixedRunner_default,
        {
          promptId: selectPromptId,
          promptType: selectPromptType,
          onClose: () => {
            updateSelectPromptId(null);
          }
        }
      )
    }
  );
};
var PromptRunner_default = PromptRunner;

// src/features/prompt/utils/renderHelper.tsx
var import_client2 = __toESM(require_client());
init_emotion_cache_browser_esm();

// src/features/auth/hooks/useInitAuthStatus.tsx
var import_react41 = __toESM(require_react());
var import_webextension_polyfill4 = __toESM(require_browser_polyfill());
var useInitAuthStatus = () => {
  const [loaded, setLoaded] = (0, import_react41.useState)(false);
  const [loading, setLoading] = (0, import_react41.useState)(false);
  const [authLogin, setAuthLogin] = Recoil_index_22(AuthState);
  const syncAuthStatus = async (changeLoadingStatus = false) => {
    if (changeLoadingStatus) {
      setLoading(true);
    }
    try {
      const accessToken = await getUseChatGPTAccessToken();
      const userInfo = await getUseChatGPTUserInfo();
      if (accessToken && userInfo) {
        setAuthLogin((prev) => ({
          ...prev,
          isLogin: true,
          userInfo
        }));
      } else {
        setAuthLogin((prev) => ({
          ...prev,
          isLogin: false,
          userInfo: null
        }));
      }
    } catch (error2) {
    } finally {
      setLoaded(true);
      if (changeLoadingStatus) {
        setLoading(false);
      }
    }
  };
  useEffectOnce_default(() => {
    syncAuthStatus(true);
    const listener = async (msg) => {
      const { event } = msg;
      if (msg?.id && msg.id !== CHROME_EXTENSION_POST_MESSAGE_ID) {
        return;
      }
      return new Promise((resolve) => {
        const exec = async () => {
          switch (event) {
            case "Client_logoutUseChatGPTAuth":
              {
                setAuthLogin((prev) => ({
                  ...prev,
                  userInfo: null,
                  isLogin: false
                }));
                return {
                  success: true,
                  data: {},
                  message: "ok"
                };
              }
              break;
          }
          return void 0;
        };
        exec().then((res) => {
          if (res && res.data) {
            resolve(res);
          }
        });
      });
    };
    import_webextension_polyfill4.default.runtime.onMessage.addListener(listener);
    return () => {
      import_webextension_polyfill4.default.runtime.onMessage.removeListener(listener);
    };
  });
  useFocus(() => {
    syncAuthStatus();
  });
  return {
    isLogin: authLogin.isLogin,
    loaded,
    loading
  };
};
var useInitAuthStatus_default = useInitAuthStatus;

// src/features/auth/components/AuthProvider.tsx
var import_jsx_runtime41 = __toESM(require_jsx_runtime());
var style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  p: 2,
  borderRadius: 1,
  outline: "none"
};
var port3 = new ContentScriptConnectionV2({
  runtime: "client"
});
var AuthProvider = ({ children }) => {
  const [authModalShow, setAuthModalShow] = Recoil_index_22(AuthModalShowState);
  useInitAuthStatus_default();
  const handleSignInClick = () => {
    port3.postMessage({
      event: "Client_openAuthClientTab",
      data: {
        ref: "webchatgpt-web-access"
      }
    });
    setAuthModalShow(false);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(import_jsx_runtime41.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
      Modal_default,
      {
        open: authModalShow,
        onClose: () => setAuthModalShow(false),
        disablePortal: true,
        sx: {
          zIndex: Z_INDEX.MODAL_1
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(Box_default, { sx: style, children: [
          /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(Typography_default, { variant: "h6", component: "h2", mb: 2, children: "Sign in to enjoy all Web Access features" }),
          /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(Typography_default, { variant: "body2", children: "Tailor your search results, select from multiple search engines, set search depth, adjust time and region preferences, and more." }),
          /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(Stack_default, { justifyContent: "flex-end", spacing: 1, mt: 4, children: [
            /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(Button_default, { variant: "contained", fullWidth: true, onClick: handleSignInClick, children: "Sign in" }),
            /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
              Button_default,
              {
                variant: "secondary",
                fullWidth: true,
                onClick: () => setAuthModalShow(false),
                children: "Maybe later"
              }
            )
          ] })
        ] })
      }
    ),
    children
  ] });
};
var AuthProvider_default = AuthProvider;

// src/util/webElementReset.ts
function updateFooterStyle() {
  const chatGptFooter = getFooter();
  if (chatGptFooter) {
    const lastChild = chatGptFooter.lastElementChild;
    if (lastChild)
      lastChild.style.padding = "0 0 0.5em 0";
  }
}
function updateFormParentElementStyle() {
  const form = getTextAreaForm();
  const formParent = form?.parentElement;
  if (formParent) {
    formParent.classList.remove(
      "absolute"
      // 'md:!bg-transparent',
      // 'md:border-t-0',
      // 'md:dark:border-transparent',
      // 'md:border-transparent',
    );
  }
}
function hiddenHomePageContent() {
  const title = getHomePageTitle();
  if (!title) {
    return;
  }
  title.style.display = "none";
  const titleNextSibling = title.nextElementSibling;
  if (titleNextSibling && titleNextSibling.id !== PROMPT_APP_SHADOW_ROOT_ID && // no display none for AIPRM templates wrapper
  titleNextSibling.id !== "templates-wrapper") {
    titleNextSibling.style.display = "none";
  }
  const parent = title.parentElement;
  if (!parent) {
    return;
  }
  parent.classList.remove("md:h-full", "md:max-w-2xl", "lg:max-w-3xl");
  parent.style.width = "100%";
  parent.style.paddingLeft = "1.5rem";
  parent.style.paddingRight = "1.5rem";
  parent.style.position = "static";
  const reactScrollDom = document.querySelectorAll(
    'div[class^="react-scroll-to-bottom"]'
  );
  if (reactScrollDom.length > 0) {
    reactScrollDom.forEach((dom) => {
      dom.style.height = "100%";
    });
  }
}

// src/components/errorMessage.tsx
var import_react42 = __toESM(require_react());

// src/components/TailWindModal.tsx
var import_jsx_runtime42 = __toESM(require_jsx_runtime());
var TailWindModal = ({
  open,
  onClose,
  onConfirm,
  children,
  width = 500
}) => {
  if (!open)
    return null;
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "fixed top-0 right-0 bottom-0 left-0 z-10", tabIndex: -1, children: [
    /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
      "div",
      {
        onClick: onClose,
        className: "fixed top-0 right-0 bottom-0 left-0",
        style: {
          backgroundColor: "#00000080",
          zIndex: -1
        }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(
      "div",
      {
        className: "w-max h-max absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded p-4",
        style: {
          width,
          backgroundColor: "rgb(44, 44, 44)"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "mb-5", children }),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "flex  justify-end gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
              "button",
              {
                className: "btn border-solid border btn-neutral btn-sm normal-case text-base",
                onClick: onClose,
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
              "button",
              {
                className: "btn border-solid border btn-primary btn-sm normal-case text-base",
                onClick: onConfirm,
                children: "Restart"
              }
            )
          ] })
        ]
      }
    )
  ] });
};
var TailWindModal_default = TailWindModal;

// src/components/errorMessage.tsx
var import_jsx_runtime43 = __toESM(require_jsx_runtime());
var defaultOptions2 = {
  noTemplate: false,
  type: "error",
  noAutoClose: true
};
function ErrorMessage(props) {
  const { options: propsOptions } = props;
  const [show, setShow] = (0, import_react42.useState)(true);
  const [modalOpen, setModalOpen] = (0, import_react42.useState)(false);
  const closeTimer = (0, import_react42.useRef)(null);
  const options = (0, import_react42.useMemo)(
    () => defaults_default(propsOptions, defaultOptions2),
    [propsOptions]
  );
  const onClose = () => {
    setShow(false);
    if (options.id) {
      const el = document.querySelector(`#${options.id}`);
      el?.remove();
    }
  };
  (0, import_react42.useEffect)(() => {
    if (!options.noAutoClose) {
      closeTimer.current = setTimeout(() => {
        onClose();
      }, 1e4);
    }
    return () => closeTimer.current && clearTimeout(closeTimer.current);
  }, [options.noAutoClose]);
  if (!props.message)
    return null;
  if (!show)
    return null;
  const content = options.noTemplate ? props.message : /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(import_jsx_runtime43.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("b", { children: "WebChatGPT detected an error" }),
    /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("br", {}),
    /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("br", {}),
    props.message,
    /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("p", { className: "mt-4", children: "Reload the page to fix the error. If it continues, please restart the extension." }),
    /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("p", { className: "mt-4", children: "If the error still persists after restarting the extension, it's likely that some other ChatGPT extensions are interfering with WebChatGPT. Try disabling the other ChatGPT extensions that you have installed and reloading the page." }),
    /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
      "button",
      {
        className: "btn border-solid border btn-outline border-white btn-sm gap-1 normal-case mt-4",
        onClick: () => {
          window.location.reload();
        },
        children: "Reload page"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("br", {}),
    /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
      "button",
      {
        className: "btn border-solid border btn-outline border-white btn-sm gap-2 normal-case mt-2",
        onClick: () => {
          setModalOpen(true);
        },
        children: "Restart extension"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
      TailWindModal_default,
      {
        width: 532,
        open: modalOpen,
        onClose: () => {
          setModalOpen(false);
        },
        onConfirm: async () => {
          await clientRestartChromeExtension();
          setModalOpen(false);
          setShow(false);
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("div", { className: "flex flex-col gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("h2", { children: "Restart WebChatGPT extension?" }),
          /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("p", { className: "text-base", children: [
            "A quick extension restart can clear all existing glitches.",
            /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("br", {}),
            "Don't forget to reload all ChatGPT pages to activate the extension afterwards."
          ] })
        ] })
      }
    )
  ] });
  const bgColor = {
    error: "#EF4444",
    normal: "#661AE6"
  };
  return (
    // <div className="absolute wcg-bottom-0 wcg-right-1 dark:wcg-text-white wcg-bg-red-500 wcg-p-4 wcg-rounded-lg wcg-mb-4 wcg-mr-4 wcg-text-sm">
    /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(
      "div",
      {
        role: "alert",
        className: "absolute bottom-0 right-1 text-white border-white p-4 rounded-lg mb-4 mr-4 text-sm max-w-sm z-50",
        style: {
          backgroundColor: bgColor[options.type],
          zIndex: Z_INDEX.PRO_TIP
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("div", { className: "absolute top-1 right-1 cursor-pointer", onClick: onClose, children: icons.close }),
          content
        ]
      }
    )
  );
}
var errorMessage_default = ErrorMessage;

// src/util/showErrorMessage.tsx
var import_client = __toESM(require_client());
var import_jsx_runtime44 = __toESM(require_jsx_runtime());
function showErrorMessage(error2, options) {
  const div = document.createElement("div");
  if (options?.id) {
    div.id = options.id;
  }
  document.body.appendChild(div);
  (0, import_client.createRoot)(div).render(
    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
      errorMessage_default,
      {
        message: error2 instanceof Error ? error2.message : error2,
        options
      }
    )
  );
}
var showErrorMessage_default = showErrorMessage;

// src/features/prompt/utils/renderHelper.tsx
var import_webextension_polyfill5 = __toESM(require_browser_polyfill());
var import_jsx_runtime45 = __toESM(require_jsx_runtime());
var rendering = false;
var rendered = false;
var styleContent = "";
var renderPromptApp = (root, emotionRoot) => {
  const cache = emotion_cache_browser_esm_default({
    key: `webchatgpt-prompt-emotion-cache`,
    prepend: true,
    container: emotionRoot
  });
  (0, import_client2.createRoot)(root).render(
    /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(AppRootLayout_default, { emotionCache: cache, shadowRootElement: root, withChatGPT: true, children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(AuthProvider_default, { children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(PromptApp_default, {}) }) })
  );
};
var renderPromptRunner = (root, emotionRoot) => {
  const cache = emotion_cache_browser_esm_default({
    key: `webchatgpt-prompt-runner-emotion-cache`,
    prepend: true,
    container: emotionRoot
  });
  (0, import_client2.createRoot)(root).render(
    /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(AppRootLayout_default, { emotionCache: cache, shadowRootElement: root, withChatGPT: true, children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(AuthProvider_default, { children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(PromptRunner_default, {}) }) })
  );
};
var renderPromptSections = () => {
  if (rendering)
    return;
  rendering = true;
  const promptAppRoot = findPromptAppMountDom();
  if (promptAppRoot && !document.querySelector(`#${PROMPT_APP_SHADOW_ROOT_ID}`)) {
    const { emotionRoot, shadowRootElement } = initPromptAppShadowRoot(promptAppRoot);
    renderPromptApp(shadowRootElement, emotionRoot);
    const promptRunnerRoot = findPromptRunnerMountDom();
    if (promptRunnerRoot && !document.querySelector(`#${PROMPT_RUNNER_SHADOW_ROOT_ID}`)) {
      const { emotionRoot: emotionRoot2, shadowRootElement: shadowRootElement2 } = initPromptRunnerShadowRoot(promptRunnerRoot);
      renderPromptRunner(shadowRootElement2, emotionRoot2);
      rendered = true;
    }
  }
  rendering = false;
};
var initPromptAppShadowRoot = (root) => {
  const isSupportWebComponent = "customElements" in window;
  const container = document.createElement(
    isSupportWebComponent ? "webchatgpt-prompt-shadow-root" : "div"
  );
  container.id = PROMPT_APP_SHADOW_ROOT_ID;
  const searchParams = new URLSearchParams(location.search);
  const topOffset = searchParams.get("model") === "gpt-4-plugins" ? "125px" : "80px";
  container.style.position = "absolute";
  const hasChatGPT4 = findGPT4ModalSwitch();
  container.style.top = hasChatGPT4 ? topOffset : "0px";
  container.style.left = "0";
  container.style.right = "0";
  container.style.height = hasChatGPT4 ? `calc(100% - ${topOffset})` : "100%";
  container.style.transition = "all ease 0.25s";
  root.appendChild(container);
  const shadowContainer = container.attachShadow({ mode: "open" });
  const emotionRoot = document.createElement("style");
  const shadowRootElement = document.createElement("div");
  shadowRootElement.id = PROMPT_APP_WRAPPER_ID;
  shadowRootElement.style.height = "100%";
  shadowContainer.appendChild(emotionRoot);
  shadowContainer.appendChild(shadowRootElement);
  return {
    shadowRootElement,
    emotionRoot
  };
};
var initPromptRunnerShadowRoot = (root) => {
  const isSupportWebComponent = "customElements" in window;
  const container = document.createElement(
    isSupportWebComponent ? "webchatgpt-prompt-runner-shadow-root" : "div"
  );
  container.id = PROMPT_RUNNER_SHADOW_ROOT_ID;
  container.style.zIndex = `${Z_INDEX.PROMPT_RUNNER}`;
  root.appendChild(container);
  const shadowContainer = container.attachShadow({ mode: "open" });
  const emotionRoot = document.createElement("style");
  const shadowRootElement = document.createElement("div");
  shadowRootElement.id = PROMPT_RUNNER_WRAPPER_ID;
  shadowContainer.appendChild(emotionRoot);
  shadowContainer.appendChild(shadowRootElement);
  return {
    shadowRootElement,
    emotionRoot
  };
};
var findPromptAppMountDom = () => {
  const title = document.querySelector("h1.text-4xl");
  if (!title) {
    checkInterfereTips();
    return;
  }
  const parent = title.parentElement;
  if (!parent) {
    return;
  }
  hiddenHomePageContent();
  return parent;
};
var findPromptRunnerMountDom = () => {
  const root = document.querySelector("main.relative");
  return root?.parentElement;
};
var getPromptLibraryEnable = async () => {
  const userConfig = await getCacheUserConfig();
  return userConfig.promptLibrary;
};
var mutationObserver = null;
var startMutationObserver = () => {
  if (mutationObserver) {
    const rootEl2 = getRootElement();
    mutationObserver.observe(rootEl2, { childList: true, subtree: true });
  }
};
var removeMutationObserver = () => {
  mutationObserver && mutationObserver.disconnect();
};
var reOpenPromptLibrary = async () => {
  const reOpenTipId = "re-open-tips";
  if (isNewChatPage()) {
    renderPromptSections();
    startMutationObserver();
  } else {
    if (!document.querySelector(`#${reOpenTipId}`)) {
      showErrorMessage_default(
        /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(import_jsx_runtime45.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("b", { children: "WebChatGPT One-Click Prompts Protip" }),
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("p", { className: "mt-3 mb-5", children: "Start a new chat to access the One-Click ChatGPT Prompts library." }),
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
            "button",
            {
              className: "btn border-solid border btn-outline border-white btn-sm  gap-2 normal-case",
              onClick: () => {
                const newChatBtn = getNewChatBtn();
                newChatBtn?.click();
                const errorEl = document.querySelector(`#${reOpenTipId}`);
                errorEl?.remove();
              },
              children: "+ New chat"
            }
          )
        ] }),
        {
          id: reOpenTipId,
          noTemplate: true,
          type: "normal",
          noAutoClose: true
        }
      );
    }
  }
};
var removePromptLibrary = async () => {
  if (isNewChatPage()) {
    const promptApp = document.querySelector(`#${PROMPT_APP_SHADOW_ROOT_ID}`);
    if (promptApp) {
      promptApp.remove();
    }
    const promptRunner = document.querySelector(
      `#${PROMPT_RUNNER_SHADOW_ROOT_ID}`
    );
    if (promptRunner) {
      promptRunner.remove();
    }
    const newChatBtn = getNewChatBtn();
    newChatBtn?.click();
    rendered = false;
  }
};
var isNewChatPage = () => {
  const title = getHomePageTitle();
  const flag = !!title && location.pathname === "/";
  return flag;
};
var checkInterfereTips = async () => {
  const promptEnable = await getPromptLibraryEnable();
  if (!promptEnable) {
    return;
  }
  const interfereLogId = "check-interfere-tips";
  const hasAIPRMDom = findAIPRMWrapper();
  const hasSuperGPT = findSuperChatGPTDom();
  const hasAIGenius = findAIGeniusDom();
  const hasChatOnAi = findChatOnAiDom();
  if (!hasSuperGPT && !hasAIPRMDom && !hasAIGenius && !hasChatOnAi) {
    return;
  }
  if (!isNewChatPage()) {
    return;
  }
  if (document.querySelector(`#${interfereLogId}`)) {
    return;
  }
  const interExtensionNames = [];
  if (hasAIPRMDom) {
    interExtensionNames.push("AIPRM");
  }
  if (hasSuperGPT) {
    interExtensionNames.push("Superpower ChatGPT");
  }
  if (hasAIGenius) {
    interExtensionNames.push("AI Prompt Genius");
  }
  if (hasChatOnAi) {
    interExtensionNames.push("ChatOnAi");
  }
  const errorTips = /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(import_jsx_runtime45.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("b", { children: "WebChatGPT One-Click Prompts Protip" }),
    /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("p", { className: "mt-4", children: [
      "Other ChatGPT extension(s) are interfering with WebChatGPT One-Click Prompts",
      " ",
      interExtensionNames.length > 0 ? `(possibly ${interExtensionNames.join(", ")})` : "",
      "."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("p", { className: "mt-4", children: "Try disabling the other ChatGPT extension(s) that you have installed while using WebChatGPT One-Click Prompts and reloading the page." }),
    /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(
      "button",
      {
        className: "btn border-solid border btn-outline border-white btn-sm gap-1 normal-case mt-4",
        onClick: () => {
          import_webextension_polyfill5.default.runtime.sendMessage({
            type: "open_page",
            url: "chrome://extensions/",
            active: true
          });
        },
        children: [
          "Step 1: Manage extensions",
          icons.openInNewTab
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
    /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
      "button",
      {
        className: "btn border-solid border btn-outline border-white btn-sm gap-2 normal-case mt-2",
        onClick: () => {
          window.location.reload();
        },
        children: "Step 2: Refresh page"
      }
    )
  ] });
  showErrorMessage_default(errorTips, {
    id: interfereLogId,
    noTemplate: true,
    type: "normal",
    noAutoClose: true
  });
};
var initPromptSectionListener = async (styleResult) => {
  mutationObserver = new MutationObserver(async (mutations) => {
    const hasGPT4 = !!findGPT4ModalSwitch();
    if (hasGPT4) {
      const searchParams = new URLSearchParams(location.search);
      const topOffset = searchParams.get("model") === "gpt-4-plugins" ? "125px" : "80px";
      const promptAppShadowRoot = document.querySelector(
        `#${PROMPT_APP_SHADOW_ROOT_ID}`
      );
      if (promptAppShadowRoot) {
        promptAppShadowRoot.style.top = topOffset;
        promptAppShadowRoot.style.height = `calc(100% - ${topOffset})`;
      }
    }
    if (mutations.some((mutation) => mutation.addedNodes.length > 0)) {
      checkInterfereTips();
    }
    if (!mutations.some((mutation) => mutation.removedNodes.length > 0))
      return;
    const promptLibraryEnable2 = await getPromptLibraryEnable();
    if (!promptLibraryEnable2)
      return;
    try {
      renderPromptSections();
    } catch (e) {
    }
  });
  let renderTimer = 0;
  styleContent = styleResult;
  const promptLibraryEnable = await getPromptLibraryEnable();
  startMutationObserver();
  if (promptLibraryEnable) {
    renderPromptSections();
    if (!rendered) {
      renderTimer = window.setInterval(() => {
        if (rendered) {
          renderTimer && window.clearInterval(renderTimer);
          return;
        }
        renderPromptSections();
      }, 3e3);
    }
  }
  return () => {
    removeMutationObserver();
  };
};

// src/features/prompt/utils/index.ts
var generateVariableHtmlContent = (variable, space = false, brace = true) => {
  const spaceStr = space ? "&nbsp;" : "";
  const leftBraceStr = brace ? "{{" : "";
  const rightBraceStr = brace ? "}}" : "";
  const name = variable.name;
  return `${spaceStr}<span contenteditable="false" style="color: ${variable.color}" data-variable-name="${variable.name}">${leftBraceStr}${name}${rightBraceStr}</span>${spaceStr}`;
};
var findSuspiciousVariable = (htmlString) => {
  const result = [];
  const leftBraceIndexArr = [];
  const rightBraceIndexArr = [];
  const text = htmlString;
  let inSpanTag = false;
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (char === "<" && text.slice(i, i + 5) === "<span") {
      inSpanTag = true;
      continue;
    }
    if (char === "<" && text.slice(i, i + 6) === "</span") {
      inSpanTag = false;
    }
    if (inSpanTag) {
      continue;
    }
    const twoChar = text.slice(i, i + 2);
    if (twoChar === "{{" && text[i + 2] !== "{") {
      leftBraceIndexArr.push(i);
      i += 1;
    }
    if (twoChar === "}}" && text[i + 2] !== "<") {
      rightBraceIndexArr.push(i + 2);
      i += 2;
    }
  }
  const minLen = Math.min(leftBraceIndexArr.length, rightBraceIndexArr.length);
  if (minLen <= 0) {
    return result;
  }
  for (let i = 0; i < minLen; i++) {
    const leftBraceIndex = leftBraceIndexArr[i];
    const rightBraceIndex = rightBraceIndexArr[i];
    if (rightBraceIndex - leftBraceIndex > 2) {
      result.push({
        variable: text.slice(leftBraceIndex, rightBraceIndex),
        start: leftBraceIndex,
        end: rightBraceIndex
      });
    }
  }
  return result;
};
var toVariableTag = (htmlString, enteredVariable, space) => {
  const html = htmlString;
  const htmlArr = [];
  let spliceIndex = 0;
  const suspiciousVariables = findSuspiciousVariable(html);
  if (suspiciousVariables.length <= 0) {
    return html;
  }
  for (let i = 0; i < suspiciousVariables.length; i++) {
    const susVariable = suspiciousVariables[i];
    const { start: start2, end } = susVariable;
    htmlArr.push(html.slice(spliceIndex, start2));
    htmlArr.push(html.slice(start2, end));
    spliceIndex = end;
    if (i === suspiciousVariables.length - 1) {
      htmlArr.push(html.slice(end));
    }
  }
  for (let i = 0; i < htmlArr.length; i++) {
    const str = htmlArr[i];
    const matchVariable = enteredVariable.find(
      (variable) => str === `{{${variable.name}}}`
    );
    if (matchVariable) {
      htmlArr[i] = generateVariableHtmlContent(matchVariable, space);
    }
  }
  return htmlArr.join("");
};
var updateVariableTag = (htmlString, targetVariableName, newVariable) => {
  const div = document.createElement("div");
  div.innerHTML = htmlString;
  div.querySelectorAll(
    `span[data-variable-name="${targetVariableName}"]`
  ).forEach((span) => {
    span.style.color = newVariable.color || "";
    span.dataset.variableName = newVariable.name;
    const isBrace = span.innerText.includes("{{");
    span.innerText = (isBrace ? "{{" : "") + newVariable.name + (isBrace ? "}}" : "");
  });
  return div.innerHTML;
};
var cleanUseLessVariable = (htmlString, variables) => {
  const div = document.createElement("div");
  div.innerHTML = htmlString;
  const result = [];
  for (let i = 0; i < variables.length; i++) {
    const variable = variables[i];
    const flag = !!div.querySelector(
      `span[data-variable-name="${variable.name}"]`
    );
    flag && result.push(variable);
  }
  return result;
};
var renderTemplate = (template, params) => {
  try {
    const data = template.replace(
      /\{\{(.+?)\}\}/g,
      (match, p1) => {
        const parts = p1.trim().split(".");
        let val = params;
        while (parts.length) {
          const prop = parts.shift();
          if (Object.prototype.hasOwnProperty.call(val, prop)) {
            val = val[prop];
          } else {
            val = match;
            break;
          }
        }
        return val;
      }
    );
    return {
      data,
      error: ""
    };
  } catch (e) {
    return {
      data: "",
      error: "parse template error"
    };
  }
};
var getCursorBrace = (brace = "{{") => {
  const shadowRoot = getPromptAppShadowRoot();
  const selection = (shadowRoot?.shadowRoot || window).getSelection();
  const focusNode = selection?.focusNode;
  const text = selection?.focusNode?.textContent;
  if (text && focusNode && focusNode.nodeName === "#text") {
    const cursorPosition = selection?.focusOffset;
    const textBeforeCursor = text.substr(cursorPosition - 2, 2);
    return {
      node: selection?.focusNode,
      index: cursorPosition,
      isBrace: textBeforeCursor === brace
    };
  }
  return {
    node: selection?.focusNode,
    index: selection?.focusOffset,
    isBrace: false
  };
};
var getPromptAppShadowRoot = () => {
  return document.querySelector(`#${PROMPT_APP_SHADOW_ROOT_ID}`);
};
var checkIsDefaultVariable = (variable) => {
  return DEFAULT_PROMPT_VARIABLE.some((item) => {
    return item.name === variable.name && item.type === variable.type;
  });
};
var variableTypeWithInputVariable = {
  livecrawling: ["Live Crawling Target URL"],
  websearch: ["Web Search Query"]
};
var handleVariableTypeWithInputVariable = (variables, variableTypes) => {
  if (variableTypes.length > 0 && variables) {
    const withInputVariableTypes = Object.keys(variableTypeWithInputVariable);
    variableTypes.forEach((type) => {
      if (withInputVariableTypes.includes(type)) {
        const currentTypeInputVariables = [];
        variableTypeWithInputVariable[type].forEach((withTypeVariable) => {
          const inputVariable = DEFAULT_PROMPT_VARIABLE.find(
            (item) => item.name === withTypeVariable
          );
          inputVariable && currentTypeInputVariables.push(inputVariable);
        });
        if (currentTypeInputVariables.length > 0) {
          const newInsertInputVariables = currentTypeInputVariables?.filter(
            (variable) => {
              return !variables?.some((item) => item.name === variable.name);
            }
          );
          if (newInsertInputVariables && newInsertInputVariables.length > 0) {
            variables = variables?.concat(newInsertInputVariables);
          }
        }
      }
    });
  }
  return variables;
};
var isLiveCrawling = (variables) => {
  if (!variables) {
    return false;
  }
  return variables.some((variable) => variable.type === "livecrawling");
};

// src/features/webAccess/components/WebAccessToolbar.tsx
var import_react43 = __toESM(require_react());
var import_webextension_polyfill6 = __toESM(require_browser_polyfill());

// src/components/IosSwitch.tsx
init_emotion_styled_browser_esm();
var import_jsx_runtime46 = __toESM(require_jsx_runtime());
var IOSSwitch = emotion_styled_browser_esm_default((props) => /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(Switch_default, { focusVisibleClassName: ".Mui-focusVisible", disableRipple: true, ...props }))(({ theme }) => {
  const t = theme;
  const isDark = t.palette.mode === "dark";
  return {
    width: 36,
    height: 20,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor: "rgb(4 120 87)",
          opacity: 1,
          border: 0
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5
        }
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#33cf4d",
        border: "6px solid #fff"
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color: "#f5f5f5"
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.7
      }
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 16,
      height: 16
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: "#6B7280",
      opacity: 1
    }
  };
});
var IosSwitch_default = IOSSwitch;

// src/features/webAccess/components/WebAccessToolbar.tsx
var import_jsx_runtime47 = __toESM(require_jsx_runtime());
var numResultsOptions2 = Array.from({ length: 10 }, (_, i) => i + 1).map(
  (num) => ({
    value: num,
    label: `${num} result${num === 1 ? "" : "s"}`
  })
);
numResultsOptions2.push({
  value: 100,
  label: "Max results"
});
var SearchEngineOptions2 = [
  {
    value: "google",
    label: "Google Search"
  },
  {
    value: "yahoo",
    label: "Yahoo Search"
  }
];
var WebAccessToolbar = ({ textarea: textarea2 }) => {
  const [loaded, setLoaded] = (0, import_react43.useState)(false);
  const { userConfig, setUserConfig } = useUserConfig();
  const [toggleWebAccessCommands, setToggleWebAccessCommands] = (0, import_react43.useState)("Alt+w");
  const { waitStuckCheck } = useAuthModalController();
  const getCommandsText = async () => {
    const commands = await getChromeExtensionCommands();
    const toggleWebAccess = commands.find(
      (command) => command.name === "toggle-web-access"
    );
    if (toggleWebAccess && toggleWebAccess.shortcut) {
      setToggleWebAccessCommands(toggleWebAccess.shortcut);
    }
  };
  (0, import_react43.useEffect)(() => {
    getCommandsText();
    setLoaded(true);
  }, []);
  (0, import_react43.useEffect)(() => {
    const handleMessage = async (request) => {
      if (request === "toggle-web-access") {
        handleWebAccessToggle();
      }
    };
    import_webextension_polyfill6.default.runtime.onMessage.addListener(handleMessage);
    return () => import_webextension_polyfill6.default.runtime.onMessage.removeListener(handleMessage);
  }, []);
  (0, import_react43.useEffect)(() => {
    if (!loaded)
      return;
    updateTextAreaPlaceholder(userConfig.webAccess);
    textarea2?.focus();
  }, [userConfig.webAccess, loaded]);
  const updateTextAreaPlaceholder = (show) => {
    textarea2?.setAttribute(
      "placeholder",
      show ? getTranslate("client", "chatgpt__textarea_placeholder") : ""
    );
  };
  const handleWebAccessToggle = () => setUserConfig((prev) => ({ ...prev, webAccess: !prev.webAccess }));
  const handlePromptLibraryToggle = async (e) => {
    const target = e.target;
    if (target) {
      const newValue = target.checked;
      await setUserConfig({ promptLibrary: newValue });
      newValue ? reOpenPromptLibrary() : removePromptLibrary();
    }
  };
  const handleSearchEngineChange = (newValue) => {
    setUserConfig({ searchEngine: newValue });
  };
  const handleNumResultsChange = (newValue) => {
    const value = parseInt(newValue, 10);
    setUserConfig({ numWebResults: value });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(import_jsx_runtime47.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
      Stack_default,
      {
        direction: "row",
        spacing: 1,
        px: 0.5,
        pt: 2,
        pb: 1,
        alignItems: "center",
        justifyContent: "space-between",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(Stack_default, { direction: "row", spacing: 1, children: [
            /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
              FormControlLabel_default,
              {
                control: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                  IosSwitch_default,
                  {
                    checked: userConfig.promptLibrary,
                    onChange: handlePromptLibraryToggle,
                    sx: { mr: 1 }
                  }
                ),
                label: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(Typography_default, { variant: "body2", fontWeight: 600, children: "One-click prompts" }),
                sx: {
                  mx: 0,
                  flexShrink: 0
                }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
              Divider_default,
              {
                orientation: "vertical",
                variant: "middle",
                flexItem: true,
                sx: { height: 20, alignSelf: "center" }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
              FormControlLabel_default,
              {
                control: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(Tooltip_default, { title: toggleWebAccessCommands, children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(Box_default, { display: "flex", children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                  IosSwitch_default,
                  {
                    checked: userConfig.webAccess,
                    onChange: handleWebAccessToggle,
                    sx: {
                      mr: 1
                    }
                  }
                ) }) }),
                label: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(Typography_default, { variant: "body2", fontWeight: 600, children: "Web access" }),
                sx: {
                  mx: 0,
                  flexShrink: 0
                }
              }
            ),
            userConfig.webAccess && /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(import_jsx_runtime47.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                Stack_default,
                {
                  direction: "row",
                  spacing: 1,
                  sx: {
                    display: {
                      xs: "none",
                      lg: "flex"
                    }
                  },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                      WebAccessSettingSelect_default,
                      {
                        options: numResultsOptions2,
                        value: userConfig.numWebResults,
                        onChange: async (value) => {
                          waitStuckCheck(() => handleNumResultsChange(value));
                        }
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                      WebAccessSettingSelect_default,
                      {
                        options: SearchEngineOptions2,
                        value: userConfig.searchEngine,
                        onChange: async (value) => {
                          waitStuckCheck(() => handleSearchEngineChange(value));
                        }
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                WebAccessAdvancedSelector_default,
                {
                  enableAdvanced: "all",
                  responsiveAdvanced: true
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
            Button_default,
            {
              variant: "normalOutlined",
              onClick: () => chromeExtensionClientOpenPage({
                key: "options",
                query: "#/web-access"
              }),
              sx: [
                {
                  p: 0,
                  width: 40,
                  height: 40,
                  minWidth: "auto",
                  flexShrink: 0
                }
                // (!webAccess || !isLgScreen) && {},
              ],
              children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                Tooltip_default,
                {
                  title: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(Box_default, { width: "max-content", children: getTranslate("common", "settings") }),
                  placement: "bottom",
                  children: icons.tune
                }
              )
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(WebAccessRunningCard_default, {})
  ] });
};
var WebAccessToolbar_default = WebAccessToolbar;

// src/util/createShadowRoot.ts
async function createShadowRoot2(pathToCSS) {
  const shadowRootDiv = document.createElement("div");
  const shadowRoot = shadowRootDiv.attachShadow({ mode: "open" });
  if (pathToCSS) {
    const style2 = document.createElement("style");
    style2.textContent = await fetchStyle(pathToCSS);
    shadowRoot.append(style2);
  }
  return { shadowRootDiv, shadowRoot };
}
var createShadowRoot_default = createShadowRoot2;

// src/components/slashCommandsMenu.tsx
var import_react44 = __toESM(require_react());
var import_jsx_runtime48 = __toESM(require_jsx_runtime());
var slashCommands = [
  {
    name: "/site:",
    description: "chatgpt__slash_command__site__desc"
  },
  {
    name: "/page:",
    description: "chatgpt__slash_command__page__desc"
  }
];
var SlashCommandItem = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
    "div",
    {
      className: `flex-col p-3 gap-3 hover:bg-[#2A2B32] cursor-pointer text-white
                        ${props.active ? "bg-gray-800" : ""}`,
      onClick: () => props.onclick(props.command),
      children: /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "flex flex-row items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { className: "text-sm font-bold", children: props.command.name }),
          /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { className: "text-sm", children: getTranslate("client", props.command.description) })
        ] }),
        props.active ? icons.tabKey : null
      ] })
    }
  );
};
function SlashCommandsMenu(props) {
  const [showMenu, setShowMenu] = (0, import_react44.useState)(false);
  const [activeElementIndex, setActiveElementIndex] = (0, import_react44.useState)(0);
  const [filter, setFilter] = (0, import_react44.useState)("");
  const [filteredCommands, setFilteredCommands] = (0, import_react44.useState)(slashCommands);
  const onTextAreaInput = (e) => updateFilter(e);
  const onTextAreaKeyDown = (e) => {
    if (!showMenu)
      return;
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveElementIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveElementIndex(
        (prevIndex) => Math.min(prevIndex + 1, filteredCommands.length - 1)
      );
    }
    if (e.key === "Tab") {
      e.preventDefault();
      const command = filteredCommands[activeElementIndex];
      onCommandClick(command);
    }
    if (e.key === "Enter") {
      e.preventDefault();
      const command = filteredCommands[activeElementIndex];
      onCommandClick(command);
    }
  };
  function updateFilter(e) {
    const text = e.target.value;
    if (text.startsWith("/")) {
      setFilter(text);
    } else {
      setFilter("");
    }
    setActiveElementIndex(0);
  }
  const onCommandClick = (command) => {
    if (!command)
      return;
    setTextAreaValue(command.name, false);
    setShowMenu(false);
  };
  function setTextAreaValue(value, dispatchEvent = true) {
    if (!props.textarea)
      return;
    props.textarea.value = value;
    if (dispatchEvent)
      props.textarea.dispatchEvent(new Event("input", { bubbles: true }));
    props.textarea.focus();
  }
  (0, import_react44.useEffect)(() => {
    props.textarea?.addEventListener("input", onTextAreaInput);
    props.textarea?.addEventListener("keydown", onTextAreaKeyDown);
    return function cleanup() {
      props.textarea?.removeEventListener("input", onTextAreaInput);
      props.textarea?.removeEventListener("keydown", onTextAreaKeyDown);
    };
  });
  (0, import_react44.useEffect)(() => {
    if (filter === "") {
      setShowMenu(false);
      return;
    }
    getCacheUserConfig().then((userConfig) => {
      const newFilteredCommands = slashCommands.filter(
        (command) => command.name.startsWith(filter)
      );
      setFilteredCommands(newFilteredCommands);
      setShowMenu(userConfig.webAccess && newFilteredCommands.length > 0);
    });
  }, [filter]);
  if (!showMenu)
    return null;
  return /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(
    "ul",
    {
      className: `flex-col flex-1 overflow-y-auto border border-white/20 rounded-md bg-gray-900 shadow-[0_0_10px_rgba(0,0,0,0.10)]`,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("li", { className: "px-3 p-2 text-xs text-white b-2 border-b border-white/20", children: getTranslate("client", "chatgpt__slash_command__title") }),
        filteredCommands.map((command) => {
          return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
            SlashCommandItem,
            {
              command,
              onclick: onCommandClick,
              active: activeElementIndex === filteredCommands.indexOf(command)
            }
          ) }, command.name);
        })
      ]
    }
  );
}
var slashCommandsMenu_default = SlashCommandsMenu;

// src/mainUI.tsx
var import_client3 = __toESM(require_client());
init_emotion_cache_browser_esm();
var import_react45 = __toESM(require_react());
init_emotion_react_browser_esm();
var import_jsx_runtime49 = __toESM(require_jsx_runtime());
var isProcessing = false;
var updatingUI = false;
var styleContent2 = "";
var rootEl = getRootElement();
var btnSubmit;
var textarea;
var toolbar;
var removePromptSectionListener = null;
function renderSlashCommandsMenu() {
  let div = document.querySelector("div.wcg-slash-commands-menu");
  if (div)
    div.remove();
  div = document.createElement("div");
  div.className = "wcg-slash-commands-menu";
  const textareaContainer = textarea?.parentElement;
  const textareaContainerParent = textarea?.parentElement?.parentElement;
  if (textareaContainer && textareaContainerParent) {
    textareaContainerParent?.insertBefore(div, textareaContainer);
  }
  (0, import_client3.createRoot)(div).render(/* @__PURE__ */ (0, import_jsx_runtime49.jsx)(slashCommandsMenu_default, { textarea }));
}
async function handleSubmit(query) {
  if (!textarea)
    return;
  const forceNotWebAccess = textarea.dataset.forceNotWebAccess === "true";
  const containsWebResults = await promptContainsWebResults();
  const userConfig = await getCacheUserConfig();
  if (forceNotWebAccess || !userConfig.webAccess || !containsWebResults) {
    isProcessing = true;
    textarea.value = query;
    pressEnter();
    isProcessing = false;
    return;
  }
  try {
    isProcessing = true;
    getMediator("chatBoxInputMediator").submitInputValue(
      JSON.stringify({
        query,
        userConfig
      })
    );
  } catch (error2) {
    isProcessing = false;
    if (error2 instanceof Error) {
      showErrorMessage_default(error2);
    }
  }
}
async function onSubmit(event) {
  if (!textarea)
    return;
  const isKeyEvent = event instanceof KeyboardEvent;
  if (isKeyEvent && event.shiftKey && event.key === "Enter")
    return;
  if (isKeyEvent && event.key === "Enter" && event.isComposing)
    return;
  if (!isProcessing && (event.type === "click" || isKeyEvent && event.key === "Enter")) {
    const query = textarea?.value.trim();
    if (!query)
      return;
    textarea.value = "";
    event.preventDefault();
    event.stopPropagation();
    const isPartialCommand = slashCommands.some(
      (command) => command.name.startsWith(query) && query.length <= command.name.length
    );
    if (isPartialCommand) {
      return;
    }
    await handleSubmit(query);
  }
}
function pressEnter() {
  textarea?.focus();
  const enterEvent = new KeyboardEvent("keydown", {
    bubbles: true,
    cancelable: true,
    key: "Enter",
    code: "Enter"
  });
  textarea?.dispatchEvent(enterEvent);
}
var updateProcessingStatus = (statusJson, event) => {
  if (event !== "status")
    return;
  try {
    const status = JSON.parse(statusJson);
    if (typeof status.isProcessing === "undefined")
      return;
    isProcessing = status.isProcessing;
  } catch (e) {
    isProcessing = false;
  }
};
async function updateUI() {
  if (updatingUI)
    return;
  updatingUI = true;
  textarea = getTextArea();
  toolbar = getWebChatGPTToolbar();
  if (!textarea) {
    updatingUI = false;
    toolbar?.remove();
    return;
  }
  btnSubmit = getSubmitButton();
  btnSubmit?.addEventListener("click", onSubmit);
  textarea = getTextArea();
  textarea?.addEventListener("keydown", onSubmit);
  await renderToolbar();
  if (!toolbar) {
    toolbar = getWebChatGPTToolbar();
  }
  getMediator("chatBoxInputMediator").unsubscribe(updateProcessingStatus);
  getMediator("chatBoxInputMediator").subscribe(updateProcessingStatus);
  renderSlashCommandsMenu();
  updateFooterStyle();
  updateFormParentElementStyle();
  updatingUI = false;
}
async function renderToolbar() {
  try {
    const { shadowRootDiv, shadowRoot } = await createShadowRoot_default();
    const style2 = document.createElement("style");
    style2.textContent = styleContent2;
    shadowRoot.append(style2);
    textarea = getTextArea();
    shadowRootDiv.classList.add("wcg-toolbar");
    shadowRootDiv.classList.add("lg:mx-auto", "lg:max-w-2xl", "xl:max-w-3xl");
    shadowRootDiv.style.order = "3";
    shadowRootDiv.style.zIndex = `${Z_INDEX.TOOLBAR}`;
    shadowRootDiv.style.position = "relative";
    shadowRootDiv.style.flex = "1";
    shadowRootDiv.style.width = "100%";
    const form = getTextAreaForm();
    if (form) {
      const formParent = form.parentElement;
      formParent?.insertBefore(shadowRootDiv, form.nextElementSibling);
    }
    const emotionRoot = document.createElement("style");
    shadowRoot.appendChild(emotionRoot);
    const emotionCache = emotion_cache_browser_esm_default({
      key: `webchatgpt-toolbar-emotion-cache`,
      prepend: true,
      container: emotionRoot
    });
    (0, import_client3.createRoot)(shadowRoot).render(
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(import_react45.default.StrictMode, { children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(Recoil_index_5, { children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(CacheProvider, { value: emotionCache, children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(AppTheme_default, { withChatGPT: true, children: /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(AuthProvider_default, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(AppInit_default, {}),
        /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(WebAccessToolbar_default, { textarea })
      ] }) }) }) }) })
    );
  } catch (e) {
    if (e instanceof Error) {
      showErrorMessage_default(
        Error(
          `Error loading WebChatGPT toolbar: ${e.message}. Please reload the page (F5).`
        )
      );
    }
  }
}
var mutationObserver2 = new MutationObserver((mutations) => {
  if (!mutations.some(
    (mutation) => mutation.removedNodes.length > 0 || mutation.target.id === "__next"
  )) {
    return;
  }
  const webChatGPTToolbar = getWebChatGPTToolbar();
  if (webChatGPTToolbar) {
    if (!getTextArea()) {
      webChatGPTToolbar.remove();
    }
    return;
  }
  try {
    updateUI();
  } catch (e) {
    if (e instanceof Error) {
      showErrorMessage_default(e);
    }
  }
});
async function start() {
  const userConfig = await getCacheUserConfig();
  await initLanguageJson(userConfig.language || "en");
  styleContent2 = await fetchStyle("mainUI.css");
  updateUI();
  mutationObserver2.observe(rootEl, { childList: true, subtree: true });
  removePromptSectionListener = await initPromptSectionListener(styleContent2);
  const { container, shadowContainer, emotionRoot } = createShadowRoot({
    containerId: "webchatgpt-snackbar"
  });
  container.style.zIndex = `${Z_INDEX.TOAST}`;
  document.body.appendChild(container);
  const emotionCache = emotion_cache_browser_esm_default({
    key: `webchatgpt-snackbar-emotion-cache`,
    prepend: true,
    container: emotionRoot
  });
  (0, import_client3.createRoot)(shadowContainer).render(
    /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(import_react45.default.StrictMode, { children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(Recoil_index_5, { children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(CacheProvider, { value: emotionCache, children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
      SnackbarProvider,
      {
        maxSnack: 3,
        preventDuplicate: true,
        hideIconVariant: true,
        autoHideDuration: 3e3,
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "left"
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(SnackbarUtilsConfigurator, {})
      }
    ) }) }) })
  );
}
start();
window.addEventListener("unload", () => {
  mutationObserver2.disconnect();
  removePromptSectionListener && removePromptSectionListener();
});
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)

@mui/base/index.js:
  (**
   * @mui/base v5.0.0-alpha.118
   *
   * @license MIT
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@mui/lab/index.js:
  (**
   * @mui/lab v5.0.0-alpha.120
   *
   * @license MIT
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
