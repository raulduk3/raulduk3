import {
  AuthStatusMessageInit,
  ChatGPTDaemonProcess,
  backgroundCallApiListener,
  fetchSSE
} from "../chunks/BRLRNB4J.js";
import "../chunks/4AP7RHEG.js";
import {
  cacheCrxInfo,
  fetchSearchAdIntervals
} from "../chunks/SELEFUX2.js";
import {
  getThirdProviderSettings
} from "../chunks/O7KWQ6B6.js";
import {
  backgroundRestartChromeExtension,
  backgroundSendAllClientMessage,
  createBackgroundMessageListener,
  createChromeExtensionOptionsPage,
  getWebpageOriginHtml,
  getWebpageTitleAndText,
  getWebpageUrlContent,
  parseHTML,
  require_readability
} from "../chunks/2TR75BHR.js";
import {
  Log_default
} from "../chunks/CWTJNSHL.js";
import {
  getCacheUserConfig,
  updateCacheUserConfig
} from "../chunks/X66UQCDQ.js";
import "../chunks/AMCWABVH.js";
import "../chunks/JUS65PLZ.js";
import {
  isManifestVersionV2
} from "../chunks/LTECKZ5X.js";
import {
  cloneDeep_default,
  random_default
} from "../chunks/VIN7E7C7.js";
import "../chunks/XK6NXF5B.js";
import {
  AI_PROVIDER_MAP,
  APP_IS_PROD,
  CHAT_GPT_MESSAGES_RECOIL_KEY,
  CHROME_EXTENSION_POST_MESSAGE_ID,
  require_browser_polyfill
} from "../chunks/QIGS6TBV.js";
import {
  v4_default
} from "../chunks/AISGHLQV.js";
import {
  __commonJS,
  __toESM
} from "../chunks/ERZ5UWI7.js";

// node_modules/.pnpm/chnl@1.2.0/node_modules/chnl/dist/channel.cjs.js
var require_channel_cjs = __commonJS({
  "node_modules/.pnpm/chnl@1.2.0/node_modules/chnl/dist/channel.cjs.js"(exports, module) {
    "use strict";
    function _typeof(e) {
      return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e2) {
        return typeof e2;
      } : function(e2) {
        return e2 && "function" == typeof Symbol && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
      })(e);
    }
    function _classCallCheck(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function _defineProperties(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r2 = t[n];
        r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e, r2.key, r2);
      }
    }
    function _createClass(e, t, n) {
      return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e;
    }
    function _inherits(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: true, configurable: true } }), t && _setPrototypeOf(e, t);
    }
    function _getPrototypeOf(e) {
      return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(e2) {
        return e2.__proto__ || Object.getPrototypeOf(e2);
      })(e);
    }
    function _setPrototypeOf(e, t) {
      return (_setPrototypeOf = Object.setPrototypeOf || function(e2, t2) {
        return e2.__proto__ = t2, e2;
      })(e, t);
    }
    function _isNativeReflectConstruct() {
      if ("undefined" == typeof Reflect || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if ("function" == typeof Proxy)
        return true;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        })), true;
      } catch (e) {
        return false;
      }
    }
    function _assertThisInitialized(e) {
      if (void 0 === e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }
    function _possibleConstructorReturn(e, t) {
      return !t || "object" != typeof t && "function" != typeof t ? _assertThisInitialized(e) : t;
    }
    function _createSuper(r2) {
      var i = _isNativeReflectConstruct();
      return function() {
        var e, t = _getPrototypeOf(r2);
        if (i) {
          var n = _getPrototypeOf(this).constructor;
          e = Reflect.construct(t, arguments, n);
        } else
          e = t.apply(this, arguments);
        return _possibleConstructorReturn(this, e);
      };
    }
    function _toConsumableArray(e) {
      return _arrayWithoutHoles(e) || _iterableToArray(e) || _unsupportedIterableToArray(e) || _nonIterableSpread();
    }
    function _arrayWithoutHoles(e) {
      if (Array.isArray(e))
        return _arrayLikeToArray(e);
    }
    function _iterableToArray(e) {
      if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
        return Array.from(e);
    }
    function _unsupportedIterableToArray(e, t) {
      if (e) {
        if ("string" == typeof e)
          return _arrayLikeToArray(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray(e, t) : void 0;
      }
    }
    function _arrayLikeToArray(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r2 = new Array(t); n < t; n++)
        r2[n] = e[n];
      return r2;
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var Channel = function() {
      function c(e) {
        _classCallCheck(this, c), this._listeners = [], this._mute = false, this._accumulate = false, this._accumulatedEvents = [], this._name = e || "", this._onListenerAdded = null, this._onFirstListenerAdded = null, this._onListenerRemoved = null, this._onLastListenerRemoved = null;
      }
      return _createClass(c, [{ key: "addListener", value: function(e, t) {
        this._pushListener(e, t, false);
      } }, { key: "addOnceListener", value: function(e, t) {
        this._pushListener(e, t, true);
      } }, { key: "removeListener", value: function(e, t) {
        this._ensureListener(e);
        var n = this._indexOfListener(e, t);
        0 <= n && this._spliceListener(n);
      } }, { key: "removeAllListeners", value: function() {
        for (; this.hasListeners(); )
          this._spliceListener(0);
      } }, { key: "hasListener", value: function(e, t) {
        return this._ensureListener(e), 0 <= this._indexOfListener(e, t);
      } }, { key: "hasListeners", value: function() {
        return 0 < this._listeners.length;
      } }, { key: "dispatch", value: function() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        this._invokeListeners({ args: t, async: false });
      } }, { key: "dispatchAsync", value: function() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        this._invokeListeners({ args: t, async: true });
      } }, { key: "mute", value: function(e) {
        var t = 0 < arguments.length && void 0 !== e ? e : {};
        this._mute = true, t.accumulate ? this._accumulate = true : (this._accumulate = false, this._accumulatedEvents = []);
      } }, { key: "unmute", value: function() {
        this._mute = false, this._accumulate && (this._dispatchAccumulated(), this._accumulate = false);
      } }, { key: "_invokeListeners", value: function(e) {
        var t = this, n = 0 < arguments.length && void 0 !== e ? e : { args: [], async: false };
        this._mute ? this._accumulate && this._accumulatedEvents.push(n) : this._listeners.slice().forEach(function(e2) {
          t._invokeListener(e2, n), e2.once && t.removeListener(e2.callback, e2.context);
        });
      } }, { key: "_invokeListener", value: function(e, t) {
        var n, r2, i = e.callback instanceof c;
        t.async ? i ? (n = e.callback).dispatchAsync.apply(n, _toConsumableArray(t.args)) : setTimeout(function() {
          return e.callback.apply(e.context, t.args);
        }, 0) : i ? (r2 = e.callback).dispatch.apply(r2, _toConsumableArray(t.args)) : e.callback.apply(e.context, t.args);
      } }, { key: "_ensureListener", value: function(e) {
        if (!c.isValidListener(e))
          throw new Error("Channel " + this._name + ": listener is not a function and not a Channel");
      } }, { key: "_dispatchInnerAddEvents", value: function() {
        var e, t;
        this._onListenerAdded && (e = this._onListenerAdded).dispatch.apply(e, arguments);
        this._onFirstListenerAdded && 1 === this._listeners.length && (t = this._onFirstListenerAdded).dispatch.apply(t, arguments);
      } }, { key: "_dispatchInnerRemoveEvents", value: function() {
        var e, t;
        this._onListenerRemoved && (e = this._onListenerRemoved).dispatch.apply(e, arguments);
        this._onLastListenerRemoved && 0 === this._listeners.length && (t = this._onLastListenerRemoved).dispatch.apply(t, arguments);
      } }, { key: "_indexOfListener", value: function(e, t) {
        for (var n = 0; n < this._listeners.length; n++) {
          var r2 = this._listeners[n], i = r2.callback === e, s = e instanceof c, o = void 0 === t && void 0 === r2.context, a = t === r2.context;
          if (i && (s || o || a))
            return n;
        }
      } }, { key: "_dispatchAccumulated", value: function() {
        var t = this;
        this._accumulatedEvents.forEach(function(e) {
          return t._invokeListeners(e);
        }), this._accumulatedEvents = [];
      } }, { key: "_pushListener", value: function(e, t, n) {
        this._ensureListener(e), this._checkForDuplicates(e, t), this._listeners.push({ callback: e, context: t, once: n }), this._dispatchInnerAddEvents(e, t, n);
      } }, { key: "_checkForDuplicates", value: function(e, t) {
        if (this.hasListener(e, t))
          throw new Error("Channel " + this._name + ": duplicating listeners");
      } }, { key: "_spliceListener", value: function(e) {
        var t = this._listeners[e], n = t.callback, r2 = t.context, i = t.once;
        this._listeners.splice(e, 1), this._dispatchInnerRemoveEvents(n, r2, i);
      } }, { key: "onListenerAdded", get: function() {
        return this._onListenerAdded || (this._onListenerAdded = new c("".concat(this._name, ":onListenerAdded"))), this._onListenerAdded;
      } }, { key: "onFirstListenerAdded", get: function() {
        return this._onFirstListenerAdded || (this._onFirstListenerAdded = new c("".concat(this._name, ":onFirstListenerAdded"))), this._onFirstListenerAdded;
      } }, { key: "onListenerRemoved", get: function() {
        return this._onListenerRemoved || (this._onListenerRemoved = new c("".concat(this._name, ":onListenerRemoved"))), this._onListenerRemoved;
      } }, { key: "onLastListenerRemoved", get: function() {
        return this._onLastListenerRemoved || (this._onLastListenerRemoved = new c("".concat(this._name, ":onLastListenerRemoved"))), this._onLastListenerRemoved;
      } }], [{ key: "isValidListener", value: function(e) {
        return "function" == typeof e || e instanceof c;
      } }]), c;
    }();
    var EventEmitter = function() {
      function e() {
        _classCallCheck(this, e), this._channels = /* @__PURE__ */ new Map();
      }
      return _createClass(e, [{ key: "addListener", value: function(e2, t, n) {
        this._getChannel(e2).addListener(t, n);
      } }, { key: "on", value: function(e2, t, n) {
        this.addListener(e2, t, n);
      } }, { key: "addOnceListener", value: function(e2, t, n) {
        this._getChannel(e2).addOnceListener(t, n);
      } }, { key: "once", value: function(e2, t, n) {
        this.addOnceListener(e2, t, n);
      } }, { key: "removeListener", value: function(e2, t, n) {
        this._getChannel(e2).removeListener(t, n);
      } }, { key: "off", value: function(e2, t, n) {
        this.removeListener(e2, t, n);
      } }, { key: "hasListener", value: function(e2, t, n) {
        return this._getChannel(e2).hasListener(t, n);
      } }, { key: "has", value: function(e2, t, n) {
        return this.hasListener(e2, t, n);
      } }, { key: "hasListeners", value: function(e2) {
        return this._getChannel(e2).hasListeners();
      } }, { key: "dispatch", value: function(e2) {
        for (var t, n = arguments.length, r2 = new Array(1 < n ? n - 1 : 0), i = 1; i < n; i++)
          r2[i - 1] = arguments[i];
        (t = this._getChannel(e2)).dispatch.apply(t, r2);
      } }, { key: "emit", value: function(e2) {
        for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r2 = 1; r2 < t; r2++)
          n[r2 - 1] = arguments[r2];
        this.dispatch.apply(this, [e2].concat(n));
      } }, { key: "_getChannel", value: function(e2) {
        return this._channels.has(e2) || this._channels.set(e2, new Channel(e2)), this._channels.get(e2);
      } }]), e;
    }();
    var SubscriptionItem = function() {
      function t(e) {
        _classCallCheck(this, t), this._params = e, this._isOn = false, this._assertParams();
      }
      return _createClass(t, [{ key: "on", value: function() {
        if (!this._isOn) {
          var e = this._params.channel, t2 = e.addListener || e.addEventListener || e.on;
          this._applyMethod(t2), this._isOn = true;
        }
      } }, { key: "off", value: function() {
        if (this._isOn) {
          var e = this._params.channel, t2 = e.removeListener || e.removeEventListener || e.off;
          this._applyMethod(t2), this._isOn = false;
        }
      } }, { key: "_applyMethod", value: function(e) {
        var t2 = this._params, n = t2.channel, r2 = t2.event, i = t2.listener, s = r2 ? [r2, i] : [i];
        e.apply(n, s);
      } }, { key: "_assertParams", value: function() {
        var e = this._params, t2 = e.channel, n = e.event, r2 = e.listener;
        if (!t2 || "object" !== _typeof(t2))
          throw new Error("Channel should be object");
        if (n && "string" != typeof n)
          throw new Error("Event should be string");
        if (!r2 || !Channel.isValidListener(r2))
          throw new Error("Listener should be function or Channel");
      } }]), t;
    }();
    var Subscription = function() {
      function t(e) {
        _classCallCheck(this, t), this._items = e.map(function(e2) {
          return new SubscriptionItem(e2);
        });
      }
      return _createClass(t, [{ key: "on", value: function() {
        return this._items.forEach(function(e) {
          return e.on();
        }), this;
      } }, { key: "off", value: function() {
        return this._items.forEach(function(e) {
          return e.off();
        }), this;
      } }]), t;
    }();
    var ReactSubscription = function() {
      _inherits(i, Subscription);
      var r2 = _createSuper(i);
      function i(e, t) {
        var n;
        return _classCallCheck(this, i), (n = r2.call(this, t))._overrideComponentCallback(e, "componentDidMount", "on"), n._overrideComponentCallback(e, "componentWillUnmount", "off"), n;
      }
      return _createClass(i, [{ key: "_overrideComponentCallback", value: function(r3, e, i2) {
        var s = this, o = r3[e];
        r3[e] = function() {
          if (s[i2](), "function" == typeof o) {
            for (var e2 = arguments.length, t = new Array(e2), n = 0; n < e2; n++)
              t[n] = arguments[n];
            return o.apply(r3, t);
          }
        };
      } }]), i;
    }();
    var chnl = Channel;
    chnl.EventEmitter = EventEmitter, chnl.Subscription = Subscription, chnl.ReactSubscription = ReactSubscription, module.exports = chnl;
  }
});

// node_modules/.pnpm/promise-controller@1.0.0/node_modules/promise-controller/src/defaults.js
var require_defaults = __commonJS({
  "node_modules/.pnpm/promise-controller@1.0.0/node_modules/promise-controller/src/defaults.js"(exports, module) {
    module.exports = {
      timeout: 0,
      timeoutReason: "Promise rejected by PromiseController timeout {timeout} ms.",
      resetReason: "Promise rejected by PromiseController reset."
    };
  }
});

// node_modules/.pnpm/promise-controller@1.0.0/node_modules/promise-controller/src/utils.js
var require_utils = __commonJS({
  "node_modules/.pnpm/promise-controller@1.0.0/node_modules/promise-controller/src/utils.js"(exports) {
    exports.isPromise = function(p) {
      return p && typeof p.then === "function";
    };
    exports.tryCall = function(value) {
      return typeof value === "function" ? value() : value;
    };
    exports.createErrorType = function(name) {
      function E(message) {
        if (!Error.captureStackTrace) {
          this.stack = new Error().stack;
        } else {
          Error.captureStackTrace(this, this.constructor);
        }
        this.message = message;
      }
      E.prototype = new Error();
      E.prototype.name = name;
      E.prototype.constructor = E;
      return E;
    };
  }
});

// node_modules/.pnpm/promise-controller@1.0.0/node_modules/promise-controller/src/index.js
var require_src = __commonJS({
  "node_modules/.pnpm/promise-controller@1.0.0/node_modules/promise-controller/src/index.js"(exports, module) {
    var defaults = require_defaults();
    var { isPromise, createErrorType, tryCall } = require_utils();
    var PromiseController = class {
      /**
       * Creates promise controller. Unlike original Promise, it does not immediately call any function.
       * Instead it has [.call()](#PromiseController+call) method that calls provided function
       * and stores `resolve / reject` methods for future access.
       *
       * @param {Options} [options]
       */
      constructor(options) {
        this._options = Object.assign({}, defaults, options);
        this._resolve = null;
        this._reject = null;
        this._isPending = false;
        this._isFulfilled = false;
        this._isRejected = false;
        this._value = void 0;
        this._promise = null;
        this._timer = null;
      }
      /**
       * Returns promise itself.
       *
       * @returns {Promise}
       */
      get promise() {
        return this._promise;
      }
      /**
       * Returns value with that promise was settled (fulfilled or rejected).
       *
       * @returns {*}
       */
      get value() {
        return this._value;
      }
      /**
       * Returns true if promise is pending.
       *
       * @returns {Boolean}
       */
      get isPending() {
        return this._isPending;
      }
      /**
       * Returns true if promise is fulfilled.
       *
       * @returns {Boolean}
       */
      get isFulfilled() {
        return this._isFulfilled;
      }
      /**
       * Returns true if promise rejected.
       *
       * @returns {Boolean}
       */
      get isRejected() {
        return this._isRejected;
      }
      /**
       * Returns true if promise is fulfilled or rejected.
       *
       * @returns {Boolean}
       */
      get isSettled() {
        return this._isFulfilled || this._isRejected;
      }
      /**
       * Calls `fn` and returns promise OR just returns existing promise from previous `call()` if it is still pending.
       * To fulfill returned promise you should use
       * {@link PromiseController#resolve} / {@link PromiseController#reject} methods.
       * If `fn` itself returns promise, then external promise is attached to it and fulfills together.
       * If no `fn` passed - promiseController is initialized as well.
       *
       * @param {Function} [fn] function to be called.
       * @returns {Promise}
       */
      call(fn) {
        if (!this._isPending) {
          this.reset();
          this._createPromise();
          this._createTimer();
          this._callFn(fn);
        }
        return this._promise;
      }
      /**
       * Resolves pending promise with specified `value`.
       *
       * @param {*} [value]
       */
      resolve(value) {
        if (this._isPending) {
          if (isPromise(value)) {
            this._tryAttachToPromise(value);
          } else {
            this._settle(value);
            this._isFulfilled = true;
            this._resolve(value);
          }
        }
      }
      /**
       * Rejects pending promise with specified `value`.
       *
       * @param {*} [value]
       */
      reject(value) {
        if (this._isPending) {
          this._settle(value);
          this._isRejected = true;
          this._reject(value);
        }
      }
      /**
       * Resets to initial state.
       * If promise is pending it will be rejected with {@link PromiseController.ResetError}.
       */
      reset() {
        if (this._isPending) {
          const message = tryCall(this._options.resetReason);
          const error = new PromiseController.ResetError(message);
          this.reject(error);
        }
        this._promise = null;
        this._isPending = false;
        this._isFulfilled = false;
        this._isRejected = false;
        this._value = void 0;
        this._clearTimer();
      }
      /**
       * Re-assign one or more options.
       *
       * @param {Options} options
       */
      configure(options) {
        Object.assign(this._options, options);
      }
      _createPromise() {
        this._promise = new Promise((resolve, reject) => {
          this._isPending = true;
          this._resolve = resolve;
          this._reject = reject;
        });
      }
      _handleTimeout() {
        const messageTpl = tryCall(this._options.timeoutReason);
        const message = typeof messageTpl === "string" ? messageTpl.replace("{timeout}", this._options.timeout) : "";
        const error = new PromiseController.TimeoutError(message);
        this.reject(error);
      }
      _createTimer() {
        if (this._options.timeout) {
          this._timer = setTimeout(() => this._handleTimeout(), this._options.timeout);
        }
      }
      _clearTimer() {
        if (this._timer) {
          clearTimeout(this._timer);
          this._timer = null;
        }
      }
      _settle(value) {
        this._isPending = false;
        this._value = value;
        this._clearTimer();
      }
      _callFn(fn) {
        if (typeof fn === "function") {
          try {
            const result = fn();
            this._tryAttachToPromise(result);
          } catch (e) {
            this.reject(e);
          }
        }
      }
      _tryAttachToPromise(p) {
        if (isPromise(p)) {
          p.then((value) => this.resolve(value), (e) => this.reject(e));
        }
      }
    };
    PromiseController.TimeoutError = createErrorType("TimeoutError");
    PromiseController.ResetError = createErrorType("ResetError");
    module.exports = PromiseController;
  }
});

// node_modules/.pnpm/promised-map@1.0.0/node_modules/promised-map/dist/cjs/index.js
var require_cjs = __commonJS({
  "node_modules/.pnpm/promised-map@1.0.0/node_modules/promised-map/dist/cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PromisedMap = void 0;
    var PromisedMap = (
      /** @class */
      function() {
        function PromisedMap2() {
          this.map = /* @__PURE__ */ new Map();
        }
        Object.defineProperty(PromisedMap2.prototype, "size", {
          /**
           * Returns map size.
           */
          get: function() {
            return this.map.size;
          },
          enumerable: false,
          configurable: true
        });
        PromisedMap2.prototype.set = function(key, data) {
          var item = this.createMapItem(data);
          this.map.set(key, item);
          return item.promise;
        };
        PromisedMap2.prototype.get = function(key) {
          var item = this.map.get(key);
          return item && item.data;
        };
        PromisedMap2.prototype.has = function(key) {
          return this.map.has(key);
        };
        PromisedMap2.prototype.delete = function(key) {
          return this.map.delete(key);
        };
        PromisedMap2.prototype.resolve = function(key, value) {
          var item = this.map.get(key);
          if (item) {
            this.delete(key);
            item.resolve(value);
          }
        };
        PromisedMap2.prototype.reject = function(key, reason) {
          var item = this.map.get(key);
          if (item) {
            this.delete(key);
            item.reject(reason);
          }
        };
        PromisedMap2.prototype.resolveAll = function(value) {
          this.map.forEach(function(item) {
            return item.resolve(value);
          });
          this.map.clear();
        };
        PromisedMap2.prototype.rejectAll = function(reason) {
          this.map.forEach(function(item) {
            return item.reject(reason);
          });
          this.map.clear();
        };
        PromisedMap2.prototype.forEach = function(fn) {
          this.map.forEach(function(item, key, map) {
            return fn(item.data, key, map);
          });
        };
        PromisedMap2.prototype.clear = function() {
          return this.map.clear();
        };
        PromisedMap2.prototype.createMapItem = function(data) {
          var item = { data };
          item.promise = new Promise(function(resolve, reject) {
            item.resolve = resolve;
            item.reject = reject;
          });
          return item;
        };
        return PromisedMap2;
      }()
    );
    exports.PromisedMap = PromisedMap;
  }
});

// node_modules/.pnpm/function-bind@1.1.1/node_modules/function-bind/implementation.js
var require_implementation = __commonJS({
  "node_modules/.pnpm/function-bind@1.1.1/node_modules/function-bind/implementation.js"(exports, module) {
    "use strict";
    var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
    var slice = Array.prototype.slice;
    var toStr = Object.prototype.toString;
    var funcType = "[object Function]";
    module.exports = function bind(that) {
      var target = this;
      if (typeof target !== "function" || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
      }
      var args = slice.call(arguments, 1);
      var bound;
      var binder = function() {
        if (this instanceof bound) {
          var result = target.apply(
            this,
            args.concat(slice.call(arguments))
          );
          if (Object(result) === result) {
            return result;
          }
          return this;
        } else {
          return target.apply(
            that,
            args.concat(slice.call(arguments))
          );
        }
      };
      var boundLength = Math.max(0, target.length - args.length);
      var boundArgs = [];
      for (var i = 0; i < boundLength; i++) {
        boundArgs.push("$" + i);
      }
      bound = Function("binder", "return function (" + boundArgs.join(",") + "){ return binder.apply(this,arguments); }")(binder);
      if (target.prototype) {
        var Empty = function Empty2() {
        };
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
      }
      return bound;
    };
  }
});

// node_modules/.pnpm/function-bind@1.1.1/node_modules/function-bind/index.js
var require_function_bind = __commonJS({
  "node_modules/.pnpm/function-bind@1.1.1/node_modules/function-bind/index.js"(exports, module) {
    "use strict";
    var implementation = require_implementation();
    module.exports = Function.prototype.bind || implementation;
  }
});

// node_modules/.pnpm/has-symbols@1.0.3/node_modules/has-symbols/shams.js
var require_shams = __commonJS({
  "node_modules/.pnpm/has-symbols@1.0.3/node_modules/has-symbols/shams.js"(exports, module) {
    "use strict";
    module.exports = function hasSymbols() {
      if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
        return false;
      }
      if (typeof Symbol.iterator === "symbol") {
        return true;
      }
      var obj = {};
      var sym = Symbol("test");
      var symObj = Object(sym);
      if (typeof sym === "string") {
        return false;
      }
      if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
        return false;
      }
      if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
        return false;
      }
      var symVal = 42;
      obj[sym] = symVal;
      for (sym in obj) {
        return false;
      }
      if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
        return false;
      }
      if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
        return false;
      }
      var syms = Object.getOwnPropertySymbols(obj);
      if (syms.length !== 1 || syms[0] !== sym) {
        return false;
      }
      if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
        return false;
      }
      if (typeof Object.getOwnPropertyDescriptor === "function") {
        var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor.value !== symVal || descriptor.enumerable !== true) {
          return false;
        }
      }
      return true;
    };
  }
});

// node_modules/.pnpm/has-symbols@1.0.3/node_modules/has-symbols/index.js
var require_has_symbols = __commonJS({
  "node_modules/.pnpm/has-symbols@1.0.3/node_modules/has-symbols/index.js"(exports, module) {
    "use strict";
    var origSymbol = typeof Symbol !== "undefined" && Symbol;
    var hasSymbolSham = require_shams();
    module.exports = function hasNativeSymbols() {
      if (typeof origSymbol !== "function") {
        return false;
      }
      if (typeof Symbol !== "function") {
        return false;
      }
      if (typeof origSymbol("foo") !== "symbol") {
        return false;
      }
      if (typeof Symbol("bar") !== "symbol") {
        return false;
      }
      return hasSymbolSham();
    };
  }
});

// node_modules/.pnpm/has-proto@1.0.1/node_modules/has-proto/index.js
var require_has_proto = __commonJS({
  "node_modules/.pnpm/has-proto@1.0.1/node_modules/has-proto/index.js"(exports, module) {
    "use strict";
    var test = {
      foo: {}
    };
    var $Object = Object;
    module.exports = function hasProto() {
      return { __proto__: test }.foo === test.foo && !({ __proto__: null } instanceof $Object);
    };
  }
});

// node_modules/.pnpm/has@1.0.3/node_modules/has/src/index.js
var require_src2 = __commonJS({
  "node_modules/.pnpm/has@1.0.3/node_modules/has/src/index.js"(exports, module) {
    "use strict";
    var bind = require_function_bind();
    module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);
  }
});

// node_modules/.pnpm/get-intrinsic@1.2.1/node_modules/get-intrinsic/index.js
var require_get_intrinsic = __commonJS({
  "node_modules/.pnpm/get-intrinsic@1.2.1/node_modules/get-intrinsic/index.js"(exports, module) {
    "use strict";
    var undefined2;
    var $SyntaxError = SyntaxError;
    var $Function = Function;
    var $TypeError = TypeError;
    var getEvalledConstructor = function(expressionSyntax) {
      try {
        return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
      } catch (e) {
      }
    };
    var $gOPD = Object.getOwnPropertyDescriptor;
    if ($gOPD) {
      try {
        $gOPD({}, "");
      } catch (e) {
        $gOPD = null;
      }
    }
    var throwTypeError = function() {
      throw new $TypeError();
    };
    var ThrowTypeError = $gOPD ? function() {
      try {
        arguments.callee;
        return throwTypeError;
      } catch (calleeThrows) {
        try {
          return $gOPD(arguments, "callee").get;
        } catch (gOPDthrows) {
          return throwTypeError;
        }
      }
    }() : throwTypeError;
    var hasSymbols = require_has_symbols()();
    var hasProto = require_has_proto()();
    var getProto = Object.getPrototypeOf || (hasProto ? function(x) {
      return x.__proto__;
    } : null);
    var needsEval = {};
    var TypedArray = typeof Uint8Array === "undefined" || !getProto ? undefined2 : getProto(Uint8Array);
    var INTRINSICS = {
      "%AggregateError%": typeof AggregateError === "undefined" ? undefined2 : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined2 : ArrayBuffer,
      "%ArrayIteratorPrototype%": hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined2,
      "%AsyncFromSyncIteratorPrototype%": undefined2,
      "%AsyncFunction%": needsEval,
      "%AsyncGenerator%": needsEval,
      "%AsyncGeneratorFunction%": needsEval,
      "%AsyncIteratorPrototype%": needsEval,
      "%Atomics%": typeof Atomics === "undefined" ? undefined2 : Atomics,
      "%BigInt%": typeof BigInt === "undefined" ? undefined2 : BigInt,
      "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined2 : BigInt64Array,
      "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined2 : BigUint64Array,
      "%Boolean%": Boolean,
      "%DataView%": typeof DataView === "undefined" ? undefined2 : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": Error,
      "%eval%": eval,
      // eslint-disable-line no-eval
      "%EvalError%": EvalError,
      "%Float32Array%": typeof Float32Array === "undefined" ? undefined2 : Float32Array,
      "%Float64Array%": typeof Float64Array === "undefined" ? undefined2 : Float64Array,
      "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined2 : FinalizationRegistry,
      "%Function%": $Function,
      "%GeneratorFunction%": needsEval,
      "%Int8Array%": typeof Int8Array === "undefined" ? undefined2 : Int8Array,
      "%Int16Array%": typeof Int16Array === "undefined" ? undefined2 : Int16Array,
      "%Int32Array%": typeof Int32Array === "undefined" ? undefined2 : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined2,
      "%JSON%": typeof JSON === "object" ? JSON : undefined2,
      "%Map%": typeof Map === "undefined" ? undefined2 : Map,
      "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols || !getProto ? undefined2 : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()),
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": Object,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": typeof Promise === "undefined" ? undefined2 : Promise,
      "%Proxy%": typeof Proxy === "undefined" ? undefined2 : Proxy,
      "%RangeError%": RangeError,
      "%ReferenceError%": ReferenceError,
      "%Reflect%": typeof Reflect === "undefined" ? undefined2 : Reflect,
      "%RegExp%": RegExp,
      "%Set%": typeof Set === "undefined" ? undefined2 : Set,
      "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols || !getProto ? undefined2 : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()),
      "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined2 : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": hasSymbols && getProto ? getProto(""[Symbol.iterator]()) : undefined2,
      "%Symbol%": hasSymbols ? Symbol : undefined2,
      "%SyntaxError%": $SyntaxError,
      "%ThrowTypeError%": ThrowTypeError,
      "%TypedArray%": TypedArray,
      "%TypeError%": $TypeError,
      "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined2 : Uint8Array,
      "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined2 : Uint8ClampedArray,
      "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined2 : Uint16Array,
      "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined2 : Uint32Array,
      "%URIError%": URIError,
      "%WeakMap%": typeof WeakMap === "undefined" ? undefined2 : WeakMap,
      "%WeakRef%": typeof WeakRef === "undefined" ? undefined2 : WeakRef,
      "%WeakSet%": typeof WeakSet === "undefined" ? undefined2 : WeakSet
    };
    if (getProto) {
      try {
        null.error;
      } catch (e) {
        errorProto = getProto(getProto(e));
        INTRINSICS["%Error.prototype%"] = errorProto;
      }
    }
    var errorProto;
    var doEval = function doEval2(name) {
      var value;
      if (name === "%AsyncFunction%") {
        value = getEvalledConstructor("async function () {}");
      } else if (name === "%GeneratorFunction%") {
        value = getEvalledConstructor("function* () {}");
      } else if (name === "%AsyncGeneratorFunction%") {
        value = getEvalledConstructor("async function* () {}");
      } else if (name === "%AsyncGenerator%") {
        var fn = doEval2("%AsyncGeneratorFunction%");
        if (fn) {
          value = fn.prototype;
        }
      } else if (name === "%AsyncIteratorPrototype%") {
        var gen = doEval2("%AsyncGenerator%");
        if (gen && getProto) {
          value = getProto(gen.prototype);
        }
      }
      INTRINSICS[name] = value;
      return value;
    };
    var LEGACY_ALIASES = {
      "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
      "%ArrayPrototype%": ["Array", "prototype"],
      "%ArrayProto_entries%": ["Array", "prototype", "entries"],
      "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
      "%ArrayProto_keys%": ["Array", "prototype", "keys"],
      "%ArrayProto_values%": ["Array", "prototype", "values"],
      "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
      "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
      "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
      "%BooleanPrototype%": ["Boolean", "prototype"],
      "%DataViewPrototype%": ["DataView", "prototype"],
      "%DatePrototype%": ["Date", "prototype"],
      "%ErrorPrototype%": ["Error", "prototype"],
      "%EvalErrorPrototype%": ["EvalError", "prototype"],
      "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
      "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
      "%FunctionPrototype%": ["Function", "prototype"],
      "%Generator%": ["GeneratorFunction", "prototype"],
      "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
      "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
      "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
      "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
      "%JSONParse%": ["JSON", "parse"],
      "%JSONStringify%": ["JSON", "stringify"],
      "%MapPrototype%": ["Map", "prototype"],
      "%NumberPrototype%": ["Number", "prototype"],
      "%ObjectPrototype%": ["Object", "prototype"],
      "%ObjProto_toString%": ["Object", "prototype", "toString"],
      "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
      "%PromisePrototype%": ["Promise", "prototype"],
      "%PromiseProto_then%": ["Promise", "prototype", "then"],
      "%Promise_all%": ["Promise", "all"],
      "%Promise_reject%": ["Promise", "reject"],
      "%Promise_resolve%": ["Promise", "resolve"],
      "%RangeErrorPrototype%": ["RangeError", "prototype"],
      "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
      "%RegExpPrototype%": ["RegExp", "prototype"],
      "%SetPrototype%": ["Set", "prototype"],
      "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
      "%StringPrototype%": ["String", "prototype"],
      "%SymbolPrototype%": ["Symbol", "prototype"],
      "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
      "%TypedArrayPrototype%": ["TypedArray", "prototype"],
      "%TypeErrorPrototype%": ["TypeError", "prototype"],
      "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
      "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
      "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
      "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
      "%URIErrorPrototype%": ["URIError", "prototype"],
      "%WeakMapPrototype%": ["WeakMap", "prototype"],
      "%WeakSetPrototype%": ["WeakSet", "prototype"]
    };
    var bind = require_function_bind();
    var hasOwn = require_src2();
    var $concat = bind.call(Function.call, Array.prototype.concat);
    var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
    var $replace = bind.call(Function.call, String.prototype.replace);
    var $strSlice = bind.call(Function.call, String.prototype.slice);
    var $exec = bind.call(Function.call, RegExp.prototype.exec);
    var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = function stringToPath2(string) {
      var first = $strSlice(string, 0, 1);
      var last = $strSlice(string, -1);
      if (first === "%" && last !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
      } else if (last === "%" && first !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
      }
      var result = [];
      $replace(string, rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
      });
      return result;
    };
    var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
      var intrinsicName = name;
      var alias;
      if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = "%" + alias[0] + "%";
      }
      if (hasOwn(INTRINSICS, intrinsicName)) {
        var value = INTRINSICS[intrinsicName];
        if (value === needsEval) {
          value = doEval(intrinsicName);
        }
        if (typeof value === "undefined" && !allowMissing) {
          throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
        }
        return {
          alias,
          name: intrinsicName,
          value
        };
      }
      throw new $SyntaxError("intrinsic " + name + " does not exist!");
    };
    module.exports = function GetIntrinsic(name, allowMissing) {
      if (typeof name !== "string" || name.length === 0) {
        throw new $TypeError("intrinsic name must be a non-empty string");
      }
      if (arguments.length > 1 && typeof allowMissing !== "boolean") {
        throw new $TypeError('"allowMissing" argument must be a boolean');
      }
      if ($exec(/^%?[^%]*%?$/, name) === null) {
        throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
      }
      var parts = stringToPath(name);
      var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
      var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
      var intrinsicRealName = intrinsic.name;
      var value = intrinsic.value;
      var skipFurtherCaching = false;
      var alias = intrinsic.alias;
      if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([0, 1], alias));
      }
      for (var i = 1, isOwn = true; i < parts.length; i += 1) {
        var part = parts[i];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
          throw new $SyntaxError("property names with quotes must have matching quotes");
        }
        if (part === "constructor" || !isOwn) {
          skipFurtherCaching = true;
        }
        intrinsicBaseName += "." + part;
        intrinsicRealName = "%" + intrinsicBaseName + "%";
        if (hasOwn(INTRINSICS, intrinsicRealName)) {
          value = INTRINSICS[intrinsicRealName];
        } else if (value != null) {
          if (!(part in value)) {
            if (!allowMissing) {
              throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
            }
            return void 0;
          }
          if ($gOPD && i + 1 >= parts.length) {
            var desc = $gOPD(value, part);
            isOwn = !!desc;
            if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
              value = desc.get;
            } else {
              value = value[part];
            }
          } else {
            isOwn = hasOwn(value, part);
            value = value[part];
          }
          if (isOwn && !skipFurtherCaching) {
            INTRINSICS[intrinsicRealName] = value;
          }
        }
      }
      return value;
    };
  }
});

// node_modules/.pnpm/call-bind@1.0.2/node_modules/call-bind/index.js
var require_call_bind = __commonJS({
  "node_modules/.pnpm/call-bind@1.0.2/node_modules/call-bind/index.js"(exports, module) {
    "use strict";
    var bind = require_function_bind();
    var GetIntrinsic = require_get_intrinsic();
    var $apply = GetIntrinsic("%Function.prototype.apply%");
    var $call = GetIntrinsic("%Function.prototype.call%");
    var $reflectApply = GetIntrinsic("%Reflect.apply%", true) || bind.call($call, $apply);
    var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
    var $defineProperty = GetIntrinsic("%Object.defineProperty%", true);
    var $max = GetIntrinsic("%Math.max%");
    if ($defineProperty) {
      try {
        $defineProperty({}, "a", { value: 1 });
      } catch (e) {
        $defineProperty = null;
      }
    }
    module.exports = function callBind(originalFunction) {
      var func = $reflectApply(bind, $call, arguments);
      if ($gOPD && $defineProperty) {
        var desc = $gOPD(func, "length");
        if (desc.configurable) {
          $defineProperty(
            func,
            "length",
            { value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
          );
        }
      }
      return func;
    };
    var applyBind = function applyBind2() {
      return $reflectApply(bind, $apply, arguments);
    };
    if ($defineProperty) {
      $defineProperty(module.exports, "apply", { value: applyBind });
    } else {
      module.exports.apply = applyBind;
    }
  }
});

// node_modules/.pnpm/object-keys@1.1.1/node_modules/object-keys/isArguments.js
var require_isArguments = __commonJS({
  "node_modules/.pnpm/object-keys@1.1.1/node_modules/object-keys/isArguments.js"(exports, module) {
    "use strict";
    var toStr = Object.prototype.toString;
    module.exports = function isArguments(value) {
      var str = toStr.call(value);
      var isArgs = str === "[object Arguments]";
      if (!isArgs) {
        isArgs = str !== "[object Array]" && value !== null && typeof value === "object" && typeof value.length === "number" && value.length >= 0 && toStr.call(value.callee) === "[object Function]";
      }
      return isArgs;
    };
  }
});

// node_modules/.pnpm/object-keys@1.1.1/node_modules/object-keys/implementation.js
var require_implementation2 = __commonJS({
  "node_modules/.pnpm/object-keys@1.1.1/node_modules/object-keys/implementation.js"(exports, module) {
    "use strict";
    var keysShim;
    if (!Object.keys) {
      has = Object.prototype.hasOwnProperty;
      toStr = Object.prototype.toString;
      isArgs = require_isArguments();
      isEnumerable = Object.prototype.propertyIsEnumerable;
      hasDontEnumBug = !isEnumerable.call({ toString: null }, "toString");
      hasProtoEnumBug = isEnumerable.call(function() {
      }, "prototype");
      dontEnums = [
        "toString",
        "toLocaleString",
        "valueOf",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "constructor"
      ];
      equalsConstructorPrototype = function(o) {
        var ctor = o.constructor;
        return ctor && ctor.prototype === o;
      };
      excludedKeys = {
        $applicationCache: true,
        $console: true,
        $external: true,
        $frame: true,
        $frameElement: true,
        $frames: true,
        $innerHeight: true,
        $innerWidth: true,
        $onmozfullscreenchange: true,
        $onmozfullscreenerror: true,
        $outerHeight: true,
        $outerWidth: true,
        $pageXOffset: true,
        $pageYOffset: true,
        $parent: true,
        $scrollLeft: true,
        $scrollTop: true,
        $scrollX: true,
        $scrollY: true,
        $self: true,
        $webkitIndexedDB: true,
        $webkitStorageInfo: true,
        $window: true
      };
      hasAutomationEqualityBug = function() {
        if (typeof window === "undefined") {
          return false;
        }
        for (var k in window) {
          try {
            if (!excludedKeys["$" + k] && has.call(window, k) && window[k] !== null && typeof window[k] === "object") {
              try {
                equalsConstructorPrototype(window[k]);
              } catch (e) {
                return true;
              }
            }
          } catch (e) {
            return true;
          }
        }
        return false;
      }();
      equalsConstructorPrototypeIfNotBuggy = function(o) {
        if (typeof window === "undefined" || !hasAutomationEqualityBug) {
          return equalsConstructorPrototype(o);
        }
        try {
          return equalsConstructorPrototype(o);
        } catch (e) {
          return false;
        }
      };
      keysShim = function keys(object) {
        var isObject = object !== null && typeof object === "object";
        var isFunction = toStr.call(object) === "[object Function]";
        var isArguments = isArgs(object);
        var isString = isObject && toStr.call(object) === "[object String]";
        var theKeys = [];
        if (!isObject && !isFunction && !isArguments) {
          throw new TypeError("Object.keys called on a non-object");
        }
        var skipProto = hasProtoEnumBug && isFunction;
        if (isString && object.length > 0 && !has.call(object, 0)) {
          for (var i = 0; i < object.length; ++i) {
            theKeys.push(String(i));
          }
        }
        if (isArguments && object.length > 0) {
          for (var j = 0; j < object.length; ++j) {
            theKeys.push(String(j));
          }
        } else {
          for (var name in object) {
            if (!(skipProto && name === "prototype") && has.call(object, name)) {
              theKeys.push(String(name));
            }
          }
        }
        if (hasDontEnumBug) {
          var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
          for (var k = 0; k < dontEnums.length; ++k) {
            if (!(skipConstructor && dontEnums[k] === "constructor") && has.call(object, dontEnums[k])) {
              theKeys.push(dontEnums[k]);
            }
          }
        }
        return theKeys;
      };
    }
    var has;
    var toStr;
    var isArgs;
    var isEnumerable;
    var hasDontEnumBug;
    var hasProtoEnumBug;
    var dontEnums;
    var equalsConstructorPrototype;
    var excludedKeys;
    var hasAutomationEqualityBug;
    var equalsConstructorPrototypeIfNotBuggy;
    module.exports = keysShim;
  }
});

// node_modules/.pnpm/object-keys@1.1.1/node_modules/object-keys/index.js
var require_object_keys = __commonJS({
  "node_modules/.pnpm/object-keys@1.1.1/node_modules/object-keys/index.js"(exports, module) {
    "use strict";
    var slice = Array.prototype.slice;
    var isArgs = require_isArguments();
    var origKeys = Object.keys;
    var keysShim = origKeys ? function keys(o) {
      return origKeys(o);
    } : require_implementation2();
    var originalKeys = Object.keys;
    keysShim.shim = function shimObjectKeys() {
      if (Object.keys) {
        var keysWorksWithArguments = function() {
          var args = Object.keys(arguments);
          return args && args.length === arguments.length;
        }(1, 2);
        if (!keysWorksWithArguments) {
          Object.keys = function keys(object) {
            if (isArgs(object)) {
              return originalKeys(slice.call(object));
            }
            return originalKeys(object);
          };
        }
      } else {
        Object.keys = keysShim;
      }
      return Object.keys || keysShim;
    };
    module.exports = keysShim;
  }
});

// node_modules/.pnpm/has-property-descriptors@1.0.0/node_modules/has-property-descriptors/index.js
var require_has_property_descriptors = __commonJS({
  "node_modules/.pnpm/has-property-descriptors@1.0.0/node_modules/has-property-descriptors/index.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var $defineProperty = GetIntrinsic("%Object.defineProperty%", true);
    var hasPropertyDescriptors = function hasPropertyDescriptors2() {
      if ($defineProperty) {
        try {
          $defineProperty({}, "a", { value: 1 });
          return true;
        } catch (e) {
          return false;
        }
      }
      return false;
    };
    hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
      if (!hasPropertyDescriptors()) {
        return null;
      }
      try {
        return $defineProperty([], "length", { value: 1 }).length !== 1;
      } catch (e) {
        return true;
      }
    };
    module.exports = hasPropertyDescriptors;
  }
});

// node_modules/.pnpm/define-properties@1.2.0/node_modules/define-properties/index.js
var require_define_properties = __commonJS({
  "node_modules/.pnpm/define-properties@1.2.0/node_modules/define-properties/index.js"(exports, module) {
    "use strict";
    var keys = require_object_keys();
    var hasSymbols = typeof Symbol === "function" && typeof Symbol("foo") === "symbol";
    var toStr = Object.prototype.toString;
    var concat = Array.prototype.concat;
    var origDefineProperty = Object.defineProperty;
    var isFunction = function(fn) {
      return typeof fn === "function" && toStr.call(fn) === "[object Function]";
    };
    var hasPropertyDescriptors = require_has_property_descriptors()();
    var supportsDescriptors = origDefineProperty && hasPropertyDescriptors;
    var defineProperty = function(object, name, value, predicate) {
      if (name in object) {
        if (predicate === true) {
          if (object[name] === value) {
            return;
          }
        } else if (!isFunction(predicate) || !predicate()) {
          return;
        }
      }
      if (supportsDescriptors) {
        origDefineProperty(object, name, {
          configurable: true,
          enumerable: false,
          value,
          writable: true
        });
      } else {
        object[name] = value;
      }
    };
    var defineProperties = function(object, map) {
      var predicates = arguments.length > 2 ? arguments[2] : {};
      var props = keys(map);
      if (hasSymbols) {
        props = concat.call(props, Object.getOwnPropertySymbols(map));
      }
      for (var i = 0; i < props.length; i += 1) {
        defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
      }
    };
    defineProperties.supportsDescriptors = !!supportsDescriptors;
    module.exports = defineProperties;
  }
});

// node_modules/.pnpm/promise.prototype.finally@3.1.4/node_modules/promise.prototype.finally/requirePromise.js
var require_requirePromise = __commonJS({
  "node_modules/.pnpm/promise.prototype.finally@3.1.4/node_modules/promise.prototype.finally/requirePromise.js"(exports, module) {
    "use strict";
    module.exports = function requirePromise() {
      if (typeof Promise !== "function") {
        throw new TypeError("`Promise.prototype.finally` requires a global `Promise` be available.");
      }
    };
  }
});

// node_modules/.pnpm/is-callable@1.2.7/node_modules/is-callable/index.js
var require_is_callable = __commonJS({
  "node_modules/.pnpm/is-callable@1.2.7/node_modules/is-callable/index.js"(exports, module) {
    "use strict";
    var fnToStr = Function.prototype.toString;
    var reflectApply = typeof Reflect === "object" && Reflect !== null && Reflect.apply;
    var badArrayLike;
    var isCallableMarker;
    if (typeof reflectApply === "function" && typeof Object.defineProperty === "function") {
      try {
        badArrayLike = Object.defineProperty({}, "length", {
          get: function() {
            throw isCallableMarker;
          }
        });
        isCallableMarker = {};
        reflectApply(function() {
          throw 42;
        }, null, badArrayLike);
      } catch (_) {
        if (_ !== isCallableMarker) {
          reflectApply = null;
        }
      }
    } else {
      reflectApply = null;
    }
    var constructorRegex = /^\s*class\b/;
    var isES6ClassFn = function isES6ClassFunction(value) {
      try {
        var fnStr = fnToStr.call(value);
        return constructorRegex.test(fnStr);
      } catch (e) {
        return false;
      }
    };
    var tryFunctionObject = function tryFunctionToStr(value) {
      try {
        if (isES6ClassFn(value)) {
          return false;
        }
        fnToStr.call(value);
        return true;
      } catch (e) {
        return false;
      }
    };
    var toStr = Object.prototype.toString;
    var objectClass = "[object Object]";
    var fnClass = "[object Function]";
    var genClass = "[object GeneratorFunction]";
    var ddaClass = "[object HTMLAllCollection]";
    var ddaClass2 = "[object HTML document.all class]";
    var ddaClass3 = "[object HTMLCollection]";
    var hasToStringTag = typeof Symbol === "function" && !!Symbol.toStringTag;
    var isIE68 = !(0 in [,]);
    var isDDA = function isDocumentDotAll() {
      return false;
    };
    if (typeof document === "object") {
      all = document.all;
      if (toStr.call(all) === toStr.call(document.all)) {
        isDDA = function isDocumentDotAll(value) {
          if ((isIE68 || !value) && (typeof value === "undefined" || typeof value === "object")) {
            try {
              var str = toStr.call(value);
              return (str === ddaClass || str === ddaClass2 || str === ddaClass3 || str === objectClass) && value("") == null;
            } catch (e) {
            }
          }
          return false;
        };
      }
    }
    var all;
    module.exports = reflectApply ? function isCallable(value) {
      if (isDDA(value)) {
        return true;
      }
      if (!value) {
        return false;
      }
      if (typeof value !== "function" && typeof value !== "object") {
        return false;
      }
      try {
        reflectApply(value, null, badArrayLike);
      } catch (e) {
        if (e !== isCallableMarker) {
          return false;
        }
      }
      return !isES6ClassFn(value) && tryFunctionObject(value);
    } : function isCallable(value) {
      if (isDDA(value)) {
        return true;
      }
      if (!value) {
        return false;
      }
      if (typeof value !== "function" && typeof value !== "object") {
        return false;
      }
      if (hasToStringTag) {
        return tryFunctionObject(value);
      }
      if (isES6ClassFn(value)) {
        return false;
      }
      var strClass = toStr.call(value);
      if (strClass !== fnClass && strClass !== genClass && !/^\[object HTML/.test(strClass)) {
        return false;
      }
      return tryFunctionObject(value);
    };
  }
});

// node_modules/.pnpm/es-abstract@1.22.1/node_modules/es-abstract/2022/IsCallable.js
var require_IsCallable = __commonJS({
  "node_modules/.pnpm/es-abstract@1.22.1/node_modules/es-abstract/2022/IsCallable.js"(exports, module) {
    "use strict";
    module.exports = require_is_callable();
  }
});

// node_modules/.pnpm/es-abstract@1.22.1/node_modules/es-abstract/GetIntrinsic.js
var require_GetIntrinsic = __commonJS({
  "node_modules/.pnpm/es-abstract@1.22.1/node_modules/es-abstract/GetIntrinsic.js"(exports, module) {
    "use strict";
    module.exports = require_get_intrinsic();
  }
});

// node_modules/.pnpm/es-abstract@1.22.1/node_modules/es-abstract/helpers/isPropertyDescriptor.js
var require_isPropertyDescriptor = __commonJS({
  "node_modules/.pnpm/es-abstract@1.22.1/node_modules/es-abstract/helpers/isPropertyDescriptor.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var has = require_src2();
    var $TypeError = GetIntrinsic("%TypeError%");
    module.exports = function IsPropertyDescriptor(ES, Desc) {
      if (ES.Type(Desc) !== "Object") {
        return false;
      }
      var allowed = {
        "[[Configurable]]": true,
        "[[Enumerable]]": true,
        "[[Get]]": true,
        "[[Set]]": true,
        "[[Value]]": true,
        "[[Writable]]": true
      };
      for (var key in Desc) {
        if (has(Desc, key) && !allowed[key]) {
          return false;
        }
      }
      if (ES.IsDataDescriptor(Desc) && ES.IsAccessorDescriptor(Desc)) {
        throw new $TypeError("Property Descriptors may not be both accessor and data descriptors");
      }
      return true;
    };
  }
});

// node_modules/.pnpm/call-bind@1.0.2/node_modules/call-bind/callBound.js
var require_callBound = __commonJS({
  "node_modules/.pnpm/call-bind@1.0.2/node_modules/call-bind/callBound.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var callBind = require_call_bind();
    var $indexOf = callBind(GetIntrinsic("String.prototype.indexOf"));
    module.exports = function callBoundIntrinsic(name, allowMissing) {
      var intrinsic = GetIntrinsic(name, !!allowMissing);
      if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
        return callBind(intrinsic);
      }
      return intrinsic;
    };
  }
});

// node_modules/.pnpm/es-abstract@1.22.1/node_modules/es-abstract/helpers/IsArray.js
var require_IsArray = __commonJS({
  "node_modules/.pnpm/es-abstract@1.22.1/node_modules/es-abstract/helpers/IsArray.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var $Array = GetIntrinsic("%Array%");
    var toStr = !$Array.isArray && require_callBound()("Object.prototype.toString");
    module.exports = $Array.isArray || function IsArray(argument) {
      return toStr(argument) === "[object Array]";
    };
  }
});

// node_modules/.pnpm/es-abstract@1.22.1/node_modules/es-abstract/helpers/DefineOwnProperty.js
var require_DefineOwnProperty = __commonJS({
  "node_modules/.pnpm/es-abstract@1.22.1/node_modules/es-abstract/helpers/DefineOwnProperty.js"(exports, module) {
    "use strict";
    var hasPropertyDescriptors = require_has_property_descriptors();
    var GetIntrinsic = require_get_intrinsic();
    var $defineProperty = hasPropertyDescriptors() && GetIntrinsic("%Object.defineProperty%", true);
    var hasArrayLengthDefineBug = hasPropertyDescriptors.hasArrayLengthDefineBug();
    var isArray = hasArrayLengthDefineBug && require_IsArray();
    var callBound = require_callBound();
    var $isEnumerable = callBound("Object.prototype.propertyIsEnumerable");
    module.exports = function DefineOwnProperty(IsDataDescriptor, SameValue, FromPropertyDescriptor, O, P, desc) {
      if (!$defineProperty) {
        if (!IsDataDescriptor(desc)) {
          return false;
        }
        if (!desc["[[Configurable]]"] || !desc["[[Writable]]"]) {
          return false;
        }
        if (P in O && $isEnumerable(O, P) !== !!desc["[[Enumerable]]"]) {
          return false;
        }
        var V = desc["[[Value]]"];
        O[P] = V;
        return SameValue(O[P], V);
      }
      if (hasArrayLengthDefineBug && P === "length" && "[[Value]]" in desc && isArray(O) && O.length !== desc["[[Value]]"]) {
        O.length = desc["[[Value]]"];
        return O.length === desc["[[Value]]"];
      }
      $defineProperty(O, P, FromPropertyDescriptor(desc));
      return true;
    };
  }
});

// node_modules/.pnpm/es-abstract@1.22.1/node_modules/es-abstract/helpers/isNaN.js
var require_isNaN = __commonJS({
  "node_modules/.pnpm/es-abstract@1.22.1/node_modules/es-abstract/helpers/isNaN.js"(exports, module) {
    "use strict";
    module.exports = Number.isNaN || function isNaN2(a) {
      return a !== a;
    };
  }
});

// node_modules/.pnpm/es-abstract@1.22.1/node_modules/es-abstract/helpers/isFinite.js
var require_isFinite = __commonJS({
  "node_modules/.pnpm/es-abstract@1.22.1/node_modules/es-abstract/helpers/isFinite.js"(exports, module) {
    "use strict";
    var $isNaN = require_isNaN();
    module.exports = function(x) {
      return (typeof x === "number" || typeof x === "bigint") && !$isNaN(x) && x !== Infinity && x !== -Infinity;
    };
  }
});

// node_modules/.pnpm/es-abstract@1.22.1/node_modules/es-abstract/helpers/isInteger.js
var require_isInteger = __commonJS({
  "node_modules/.pnpm/es-abstract@1.22.1/node_modules/es-abstract/helpers/isInteger.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var $abs = GetIntrinsic("%Math.abs%");
    var $floor = GetIntrinsic("%Math.floor%");
    var $isNaN = require_isNaN();
    var $isFinite = require_isFinite();
    module.exports = function isInteger(argument) {
      if (typeof argument !== "number" || $isNaN(argument) || !$isFinite(argument)) {
        return false;
      }
      var absValue = $abs(argument);
      return $floor(absValue) === absValue;
    };
  }
});

// node_modules/.pnpm/es-abstract@1.22.1/node_modules/es-abstract/helpers/isMatchRecord.js
var require_isMatchRecord = __commonJS({
  "node_modules/.pnpm/es-abstract@1.22.1/node_modules/es-abstract/helpers/isMatchRecord.js"(exports, module) {
    "use strict";
    var has = require_src2();
    module.exports = function isMatchRecord(record) {
      return has(record, "[[StartIndex]]") && has(record, "[[EndIndex]]") && record["[[StartIndex]]"] >= 0 && record["[[EndIndex]]"] >= record["[[StartIndex]]"] && String(parseInt(record["[[StartIndex]]"], 10)) === String(record["[[StartIndex]]"]) && String(parseInt(record["[[EndIndex]]"], 10)) === String(record["[[EndIndex]]"]);
    };
  }
});

// node_modules/.pnpm/es-abstract@1.22.1/node_modules/es-abstract/helpers/assertRecord.js
var require_assertRecord = __commonJS({
  "node_modules/.pnpm/es-abstract@1.22.1/node_modules/es-abstract/helpers/assertRecord.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var $TypeError = GetIntrinsic("%TypeError%");
    var $SyntaxError = GetIntrinsic("%SyntaxError%");
    var has = require_src2();
    var isInteger = require_isInteger();
    var isMatchRecord = require_isMatchRecord();
    var predicates = {
      // https://262.ecma-international.org/6.0/#sec-property-descriptor-specification-type
      "Property Descriptor": function isPropertyDescriptor(Desc) {
        var allowed = {
          "[[Configurable]]": true,
          "[[Enumerable]]": true,
          "[[Get]]": true,
          "[[Set]]": true,
          "[[Value]]": true,
          "[[Writable]]": true
        };
        if (!Desc) {
          return false;
        }
        for (var key in Desc) {
          if (has(Desc, key) && !allowed[key]) {
            return false;
          }
        }
        var isData = has(Desc, "[[Value]]");
        var IsAccessor = has(Desc, "[[Get]]") || has(Desc, "[[Set]]");
        if (isData && IsAccessor) {
          throw new $TypeError("Property Descriptors may not be both accessor and data descriptors");
        }
        return true;
      },
      // https://262.ecma-international.org/13.0/#sec-match-records
      "Match Record": isMatchRecord,
      "Iterator Record": function isIteratorRecord(value) {
        return has(value, "[[Iterator]]") && has(value, "[[NextMethod]]") && has(value, "[[Done]]");
      },
      "PromiseCapability Record": function isPromiseCapabilityRecord(value) {
        return !!value && has(value, "[[Resolve]]") && typeof value["[[Resolve]]"] === "function" && has(value, "[[Reject]]") && typeof value["[[Reject]]"] === "function" && has(value, "[[Promise]]") && value["[[Promise]]"] && typeof value["[[Promise]]"].then === "function";
      },
      "AsyncGeneratorRequest Record": function isAsyncGeneratorRequestRecord(value) {
        return !!value && has(value, "[[Completion]]") && has(value, "[[Capability]]") && predicates["PromiseCapability Record"](value["[[Capability]]"]);
      },
      "RegExp Record": function isRegExpRecord(value) {
        return value && has(value, "[[IgnoreCase]]") && typeof value["[[IgnoreCase]]"] === "boolean" && has(value, "[[Multiline]]") && typeof value["[[Multiline]]"] === "boolean" && has(value, "[[DotAll]]") && typeof value["[[DotAll]]"] === "boolean" && has(value, "[[Unicode]]") && typeof value["[[Unicode]]"] === "boolean" && has(value, "[[CapturingGroupsCount]]") && typeof value["[[CapturingGroupsCount]]"] === "number" && isInteger(value["[[CapturingGroupsCount]]"]) && value["[[CapturingGroupsCount]]"] >= 0;
      }
    };
    module.exports = function assertRecord(Type, recordType, argumentName, value) {
      var predicate = predicates[recordType];
      if (typeof predicate !== "function") {
        throw new $SyntaxError("unknown record type: " + recordType);
      }
      if (Type(value) !== "Object" || !predicate(value)) {
        throw new $TypeError(argumentName + " must be a " + recordType);
      }
    };
  }
});

// node_modules/.pnpm/es-abstract@1.22.1/node_modules/es-abstract/helpers/fromPropertyDescriptor.js
var require_fromPropertyDescriptor = __commonJS({
  "node_modules/.pnpm/es-abstract@1.22.1/node_modules/es-abstract/helpers/fromPropertyDescriptor.js"(exports, module) {
    "use strict";
    module.exports = function fromPropertyDescriptor(Desc) {
      if (typeof Desc === "undefined") {
        return Desc;
      }
      var obj = {};
      if ("[[Value]]" in Desc) {
        obj.value = Desc["[[Value]]"];
      }
      if ("[[Writable]]" in Desc) {
        obj.writable = !!Desc["[[Writable]]"];
      }
      if ("[[Get]]" in Desc) {
        obj.get = Desc["[[Get]]"];
      }
      if ("[[Set]]" in Desc) {
        obj.set = Desc["[[Set]]"];
      }
      if ("[[Enumerable]]" in Desc) {
        obj.enumerable = !!Desc["[[Enumerable]]"];
      }
      if ("[[Configurable]]" in Desc) {
        obj.configurable = !!Desc["[[Configurable]]"];
      }
      return obj;
    };
  }
});

// node_modules/.pnpm/es-abstract@1.22.1/node_modules/es-abstract/5/Type.js
var require_Type = __commonJS({
  "node_modules/.pnpm/es-abstract@1.22.1/node_modules/es-abstract/5/Type.js"(exports, module) {
    "use strict";
    module.exports = function Type(x) {
      if (x === null) {
        return "Null";
      }
      if (typeof x === "undefined") {
        return "Undefined";
      }
      if (typeof x === "function" || typeof x === "object") {
        return "Object";
      }
      if (typeof x === "number") {
        return "Number";
      }
      if (typeof x === "boolean") {
        return "Boolean";
      }
      if (typeof x === "string") {
        return "String";
      }
    };
  }
});

// node_modules/.pnpm/es-abstract@1.22.1/node_modules/es-abstract/2022/Type.js
var require_Type2 = __commonJS({
  "node_modules/.pnpm/es-abstract@1.22.1/node_modules/es-abstract/2022/Type.js"(exports, module) {
    "use strict";
    var ES5Type = require_Type();
    module.exports = function Type(x) {
      if (typeof x === "symbol") {
        return "Symbol";
      }
      if (typeof x === "bigint") {
        return "BigInt";
      }
      return ES5Type(x);
    };
  }
});

// node_modules/.pnpm/es-abstract@1.22.1/node_modules/es-abstract/2022/FromPropertyDescriptor.js
var require_FromPropertyDescriptor = __commonJS({
  "node_modules/.pnpm/es-abstract@1.22.1/node_modules/es-abstract/2022/FromPropertyDescriptor.js"(exports, module) {
    "use strict";
    var assertRecord = require_assertRecord();
    var fromPropertyDescriptor = require_fromPropertyDescriptor();
    var Type = require_Type2();
    module.exports = function FromPropertyDescriptor(Desc) {
      if (typeof Desc !== "undefined") {
        assertRecord(Type, "Property Descriptor", "Desc", Desc);
      }
      return fromPropertyDescriptor(Desc);
    };
  }
});

// node_modules/.pnpm/es-abstract@1.22.1/node_modules/es-abstract/2022/IsAccessorDescriptor.js
var require_IsAccessorDescriptor = __commonJS({
  "node_modules/.pnpm/es-abstract@1.22.1/node_modules/es-abstract/2022/IsAccessorDescriptor.js"(exports, module) {
    "use strict";
    var has = require_src2();
    var Type = require_Type2();
    var assertRecord = require_assertRecord();
    module.exports = function IsAccessorDescriptor(Desc) {
      if (typeof Desc === "undefined") {
        return false;
      }
      assertRecord(Type, "Property Descriptor", "Desc", Desc);
      if (!has(Desc, "[[Get]]") && !has(Desc, "[[Set]]")) {
        return false;
      }
      return true;
    };
  }
});

// node_modules/.pnpm/es-abstract@1.22.1/node_modules/es-abstract/2022/IsDataDescriptor.js
var require_IsDataDescriptor = __commonJS({
  "node_modules/.pnpm/es-abstract@1.22.1/node_modules/es-abstract/2022/IsDataDescriptor.js"(exports, module) {
    "use strict";
    var has = require_src2();
    var Type = require_Type2();
    var assertRecord = require_assertRecord();
    module.exports = function IsDataDescriptor(Desc) {
      if (typeof Desc === "undefined") {
        return false;
      }
      assertRecord(Type, "Property Descriptor", "Desc", Desc);
      if (!has(Desc, "[[Value]]") && !has(Desc, "[[Writable]]")) {
        return false;
      }
      return true;
    };
  }
});

// node_modules/.pnpm/es-abstract@1.22.1/node_modules/es-abstract/2022/IsPropertyKey.js
var require_IsPropertyKey = __commonJS({
  "node_modules/.pnpm/es-abstract@1.22.1/node_modules/es-abstract/2022/IsPropertyKey.js"(exports, module) {
    "use strict";
    module.exports = function IsPropertyKey(argument) {
      return typeof argument === "string" || typeof argument === "symbol";
    };
  }
});

// node_modules/.pnpm/es-abstract@1.22.1/node_modules/es-abstract/2022/SameValue.js
var require_SameValue = __commonJS({
  "node_modules/.pnpm/es-abstract@1.22.1/node_modules/es-abstract/2022/SameValue.js"(exports, module) {
    "use strict";
    var $isNaN = require_isNaN();
    module.exports = function SameValue(x, y) {
      if (x === y) {
        if (x === 0) {
          return 1 / x === 1 / y;
        }
        return true;
      }
      return $isNaN(x) && $isNaN(y);
    };
  }
});

// node_modules/.pnpm/es-abstract@1.22.1/node_modules/es-abstract/2022/ToBoolean.js
var require_ToBoolean = __commonJS({
  "node_modules/.pnpm/es-abstract@1.22.1/node_modules/es-abstract/2022/ToBoolean.js"(exports, module) {
    "use strict";
    module.exports = function ToBoolean(value) {
      return !!value;
    };
  }
});

// node_modules/.pnpm/es-abstract@1.22.1/node_modules/es-abstract/2022/ToPropertyDescriptor.js
var require_ToPropertyDescriptor = __commonJS({
  "node_modules/.pnpm/es-abstract@1.22.1/node_modules/es-abstract/2022/ToPropertyDescriptor.js"(exports, module) {
    "use strict";
    var has = require_src2();
    var GetIntrinsic = require_get_intrinsic();
    var $TypeError = GetIntrinsic("%TypeError%");
    var Type = require_Type2();
    var ToBoolean = require_ToBoolean();
    var IsCallable = require_IsCallable();
    module.exports = function ToPropertyDescriptor(Obj) {
      if (Type(Obj) !== "Object") {
        throw new $TypeError("ToPropertyDescriptor requires an object");
      }
      var desc = {};
      if (has(Obj, "enumerable")) {
        desc["[[Enumerable]]"] = ToBoolean(Obj.enumerable);
      }
      if (has(Obj, "configurable")) {
        desc["[[Configurable]]"] = ToBoolean(Obj.configurable);
      }
      if (has(Obj, "value")) {
        desc["[[Value]]"] = Obj.value;
      }
      if (has(Obj, "writable")) {
        desc["[[Writable]]"] = ToBoolean(Obj.writable);
      }
      if (has(Obj, "get")) {
        var getter = Obj.get;
        if (typeof getter !== "undefined" && !IsCallable(getter)) {
          throw new $TypeError("getter must be a function");
        }
        desc["[[Get]]"] = getter;
      }
      if (has(Obj, "set")) {
        var setter = Obj.set;
        if (typeof setter !== "undefined" && !IsCallable(setter)) {
          throw new $TypeError("setter must be a function");
        }
        desc["[[Set]]"] = setter;
      }
      if ((has(desc, "[[Get]]") || has(desc, "[[Set]]")) && (has(desc, "[[Value]]") || has(desc, "[[Writable]]"))) {
        throw new $TypeError("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
      }
      return desc;
    };
  }
});

// node_modules/.pnpm/es-abstract@1.22.1/node_modules/es-abstract/2022/DefinePropertyOrThrow.js
var require_DefinePropertyOrThrow = __commonJS({
  "node_modules/.pnpm/es-abstract@1.22.1/node_modules/es-abstract/2022/DefinePropertyOrThrow.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var $TypeError = GetIntrinsic("%TypeError%");
    var isPropertyDescriptor = require_isPropertyDescriptor();
    var DefineOwnProperty = require_DefineOwnProperty();
    var FromPropertyDescriptor = require_FromPropertyDescriptor();
    var IsAccessorDescriptor = require_IsAccessorDescriptor();
    var IsDataDescriptor = require_IsDataDescriptor();
    var IsPropertyKey = require_IsPropertyKey();
    var SameValue = require_SameValue();
    var ToPropertyDescriptor = require_ToPropertyDescriptor();
    var Type = require_Type2();
    module.exports = function DefinePropertyOrThrow(O, P, desc) {
      if (Type(O) !== "Object") {
        throw new $TypeError("Assertion failed: Type(O) is not Object");
      }
      if (!IsPropertyKey(P)) {
        throw new $TypeError("Assertion failed: IsPropertyKey(P) is not true");
      }
      var Desc = isPropertyDescriptor({
        Type,
        IsDataDescriptor,
        IsAccessorDescriptor
      }, desc) ? desc : ToPropertyDescriptor(desc);
      if (!isPropertyDescriptor({
        Type,
        IsDataDescriptor,
        IsAccessorDescriptor
      }, Desc)) {
        throw new $TypeError("Assertion failed: Desc is not a valid Property Descriptor");
      }
      return DefineOwnProperty(
        IsDataDescriptor,
        SameValue,
        FromPropertyDescriptor,
        O,
        P,
        Desc
      );
    };
  }
});

// node_modules/.pnpm/es-abstract@1.22.1/node_modules/es-abstract/2022/IsConstructor.js
var require_IsConstructor = __commonJS({
  "node_modules/.pnpm/es-abstract@1.22.1/node_modules/es-abstract/2022/IsConstructor.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_GetIntrinsic();
    var $construct = GetIntrinsic("%Reflect.construct%", true);
    var DefinePropertyOrThrow = require_DefinePropertyOrThrow();
    try {
      DefinePropertyOrThrow({}, "", { "[[Get]]": function() {
      } });
    } catch (e) {
      DefinePropertyOrThrow = null;
    }
    if (DefinePropertyOrThrow && $construct) {
      isConstructorMarker = {};
      badArrayLike = {};
      DefinePropertyOrThrow(badArrayLike, "length", {
        "[[Get]]": function() {
          throw isConstructorMarker;
        },
        "[[Enumerable]]": true
      });
      module.exports = function IsConstructor(argument) {
        try {
          $construct(argument, badArrayLike);
        } catch (err) {
          return err === isConstructorMarker;
        }
      };
    } else {
      module.exports = function IsConstructor(argument) {
        return typeof argument === "function" && !!argument.prototype;
      };
    }
    var isConstructorMarker;
    var badArrayLike;
  }
});

// node_modules/.pnpm/es-abstract@1.22.1/node_modules/es-abstract/2022/SpeciesConstructor.js
var require_SpeciesConstructor = __commonJS({
  "node_modules/.pnpm/es-abstract@1.22.1/node_modules/es-abstract/2022/SpeciesConstructor.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var $species = GetIntrinsic("%Symbol.species%", true);
    var $TypeError = GetIntrinsic("%TypeError%");
    var IsConstructor = require_IsConstructor();
    var Type = require_Type2();
    module.exports = function SpeciesConstructor(O, defaultConstructor) {
      if (Type(O) !== "Object") {
        throw new $TypeError("Assertion failed: Type(O) is not Object");
      }
      var C = O.constructor;
      if (typeof C === "undefined") {
        return defaultConstructor;
      }
      if (Type(C) !== "Object") {
        throw new $TypeError("O.constructor is not an Object");
      }
      var S = $species ? C[$species] : void 0;
      if (S == null) {
        return defaultConstructor;
      }
      if (IsConstructor(S)) {
        return S;
      }
      throw new $TypeError("no constructor found");
    };
  }
});

// node_modules/.pnpm/promise.prototype.finally@3.1.4/node_modules/promise.prototype.finally/implementation.js
var require_implementation3 = __commonJS({
  "node_modules/.pnpm/promise.prototype.finally@3.1.4/node_modules/promise.prototype.finally/implementation.js"(exports, module) {
    "use strict";
    var requirePromise = require_requirePromise();
    requirePromise();
    var IsCallable = require_IsCallable();
    var SpeciesConstructor = require_SpeciesConstructor();
    var Type = require_Type2();
    var promiseResolve = function PromiseResolve(C, value) {
      return new C(function(resolve) {
        resolve(value);
      });
    };
    var OriginalPromise = Promise;
    var createThenFinally = function CreateThenFinally(C, onFinally) {
      return function(value) {
        var result = onFinally();
        var promise = promiseResolve(C, result);
        var valueThunk = function() {
          return value;
        };
        return promise.then(valueThunk);
      };
    };
    var createCatchFinally = function CreateCatchFinally(C, onFinally) {
      return function(reason) {
        var result = onFinally();
        var promise = promiseResolve(C, result);
        var thrower = function() {
          throw reason;
        };
        return promise.then(thrower);
      };
    };
    var promiseFinally = function finally_(onFinally) {
      var promise = this;
      if (Type(promise) !== "Object") {
        throw new TypeError("receiver is not an Object");
      }
      var C = SpeciesConstructor(promise, OriginalPromise);
      var thenFinally = onFinally;
      var catchFinally = onFinally;
      if (IsCallable(onFinally)) {
        thenFinally = createThenFinally(C, onFinally);
        catchFinally = createCatchFinally(C, onFinally);
      }
      return promise.then(thenFinally, catchFinally);
    };
    if (Object.getOwnPropertyDescriptor) {
      descriptor = Object.getOwnPropertyDescriptor(promiseFinally, "name");
      if (descriptor && descriptor.configurable) {
        Object.defineProperty(promiseFinally, "name", { configurable: true, value: "finally" });
      }
    }
    var descriptor;
    module.exports = promiseFinally;
  }
});

// node_modules/.pnpm/promise.prototype.finally@3.1.4/node_modules/promise.prototype.finally/polyfill.js
var require_polyfill = __commonJS({
  "node_modules/.pnpm/promise.prototype.finally@3.1.4/node_modules/promise.prototype.finally/polyfill.js"(exports, module) {
    "use strict";
    var requirePromise = require_requirePromise();
    var implementation = require_implementation3();
    module.exports = function getPolyfill() {
      requirePromise();
      return typeof Promise.prototype["finally"] === "function" ? Promise.prototype["finally"] : implementation;
    };
  }
});

// node_modules/.pnpm/promise.prototype.finally@3.1.4/node_modules/promise.prototype.finally/shim.js
var require_shim = __commonJS({
  "node_modules/.pnpm/promise.prototype.finally@3.1.4/node_modules/promise.prototype.finally/shim.js"(exports, module) {
    "use strict";
    var requirePromise = require_requirePromise();
    var getPolyfill = require_polyfill();
    var define = require_define_properties();
    module.exports = function shimPromiseFinally() {
      requirePromise();
      var polyfill = getPolyfill();
      define(Promise.prototype, { "finally": polyfill }, {
        "finally": function testFinally() {
          return Promise.prototype["finally"] !== polyfill;
        }
      });
      return polyfill;
    };
  }
});

// node_modules/.pnpm/promise.prototype.finally@3.1.4/node_modules/promise.prototype.finally/index.js
var require_promise_prototype = __commonJS({
  "node_modules/.pnpm/promise.prototype.finally@3.1.4/node_modules/promise.prototype.finally/index.js"(exports, module) {
    "use strict";
    var callBind = require_call_bind();
    var define = require_define_properties();
    var implementation = require_implementation3();
    var getPolyfill = require_polyfill();
    var shim = require_shim();
    var bound = callBind(getPolyfill());
    define(bound, {
      getPolyfill,
      implementation,
      shim
    });
    module.exports = bound;
  }
});

// node_modules/.pnpm/websocket-as-promised@2.0.1/node_modules/websocket-as-promised/src/requests.js
var require_requests = __commonJS({
  "node_modules/.pnpm/websocket-as-promised@2.0.1/node_modules/websocket-as-promised/src/requests.js"(exports, module) {
    var PromiseController = require_src();
    var promiseFinally = require_promise_prototype();
    module.exports = class Requests {
      constructor() {
        this._items = /* @__PURE__ */ new Map();
      }
      /**
       * Creates new request and stores it in the list.
       *
       * @param {String|Number} requestId
       * @param {Function} fn
       * @param {Number} timeout
       * @returns {Promise}
       */
      create(requestId, fn, timeout) {
        this._rejectExistingRequest(requestId);
        return this._createNewRequest(requestId, fn, timeout);
      }
      resolve(requestId, data) {
        if (requestId && this._items.has(requestId)) {
          this._items.get(requestId).resolve(data);
        }
      }
      rejectAll(error) {
        this._items.forEach((request) => request.isPending ? request.reject(error) : null);
      }
      _rejectExistingRequest(requestId) {
        const existingRequest = this._items.get(requestId);
        if (existingRequest && existingRequest.isPending) {
          existingRequest.reject(new Error(`WebSocket request is replaced, id: ${requestId}`));
        }
      }
      _createNewRequest(requestId, fn, timeout) {
        const request = new PromiseController({
          timeout,
          timeoutReason: `WebSocket request was rejected by timeout (${timeout} ms). RequestId: ${requestId}`
        });
        this._items.set(requestId, request);
        return promiseFinally(request.call(fn), () => this._deleteRequest(requestId, request));
      }
      _deleteRequest(requestId, request) {
        if (this._items.get(requestId) === request) {
          this._items.delete(requestId);
        }
      }
    };
  }
});

// node_modules/.pnpm/websocket-as-promised@2.0.1/node_modules/websocket-as-promised/src/options.js
var require_options = __commonJS({
  "node_modules/.pnpm/websocket-as-promised@2.0.1/node_modules/websocket-as-promised/src/options.js"(exports, module) {
    module.exports = {
      /**
       * See {@link Options.createWebSocket}
       *
       * @param {String} url
       * @returns {WebSocket}
       */
      createWebSocket: (url) => new WebSocket(url),
      /**
       * See {@link Options.packMessage}
       *
       * @param {*} data
       * @returns {String|ArrayBuffer|Blob}
       */
      packMessage: null,
      /**
       * See {@link Options.unpackMessage}
       *
       * @param {String|ArrayBuffer|Blob} data
       * @returns {*}
       */
      unpackMessage: null,
      /**
       * See {@link Options.attachRequestId}
       *
       * @param {*} data
       * @param {String|Number} requestId
       * @returns {*}
       */
      attachRequestId: null,
      /**
       * See {@link Options.extractRequestId}
       *
       * @param {*} data
       * @returns {String|Number|undefined}
       */
      extractRequestId: null,
      /**
       * See {@link Options.extractMessageData}
       *
       * @param {*} event
       * @returns {*}
       */
      extractMessageData: (event) => event.data,
      /**
       * See {@link Options.timeout}
       */
      timeout: 0,
      /**
       * See {@link Options.connectionTimeout}
       */
      connectionTimeout: 0
    };
  }
});

// node_modules/.pnpm/websocket-as-promised@2.0.1/node_modules/websocket-as-promised/src/utils.js
var require_utils2 = __commonJS({
  "node_modules/.pnpm/websocket-as-promised@2.0.1/node_modules/websocket-as-promised/src/utils.js"(exports) {
    exports.throwIf = (condition, message) => {
      if (condition) {
        throw new Error(message);
      }
    };
    exports.isPromise = (value) => {
      return value && typeof value.then === "function";
    };
  }
});

// node_modules/.pnpm/websocket-as-promised@2.0.1/node_modules/websocket-as-promised/src/index.js
var require_src3 = __commonJS({
  "node_modules/.pnpm/websocket-as-promised@2.0.1/node_modules/websocket-as-promised/src/index.js"(exports, module) {
    var Channel = require_channel_cjs();
    var PromiseController = require_src();
    var { PromisedMap } = require_cjs();
    var Requests = require_requests();
    var defaultOptions = require_options();
    var { throwIf, isPromise } = require_utils2();
    var STATE = {
      CONNECTING: 0,
      OPEN: 1,
      CLOSING: 2,
      CLOSED: 3
    };
    var WebSocketAsPromised2 = class {
      /**
       * Constructor. Unlike original WebSocket it does not immediately open connection.
       * Please call `open()` method to connect.
       *
       * @param {String} url WebSocket URL
       * @param {Options} [options]
       */
      constructor(url, options) {
        this._assertOptions(options);
        this._url = url;
        this._options = Object.assign({}, defaultOptions, options);
        this._requests = new Requests();
        this._promisedMap = new PromisedMap();
        this._ws = null;
        this._wsSubscription = null;
        this._createOpeningController();
        this._createClosingController();
        this._createChannels();
      }
      /**
       * Returns original WebSocket instance created by `options.createWebSocket`.
       *
       * @returns {WebSocket}
       */
      get ws() {
        return this._ws;
      }
      /**
       * Returns WebSocket url.
       *
       * @returns {String}
       */
      get url() {
        return this._url;
      }
      /**
       * Is WebSocket connection in opening state.
       *
       * @returns {Boolean}
       */
      get isOpening() {
        return Boolean(this._ws && this._ws.readyState === STATE.CONNECTING);
      }
      /**
       * Is WebSocket connection opened.
       *
       * @returns {Boolean}
       */
      get isOpened() {
        return Boolean(this._ws && this._ws.readyState === STATE.OPEN);
      }
      /**
       * Is WebSocket connection in closing state.
       *
       * @returns {Boolean}
       */
      get isClosing() {
        return Boolean(this._ws && this._ws.readyState === STATE.CLOSING);
      }
      /**
       * Is WebSocket connection closed.
       *
       * @returns {Boolean}
       */
      get isClosed() {
        return Boolean(!this._ws || this._ws.readyState === STATE.CLOSED);
      }
      /**
       * Event channel triggered when connection is opened.
       *
       * @see https://vitalets.github.io/chnl/#channel
       * @example
       * wsp.onOpen.addListener(() => console.log('Connection opened'));
       *
       * @returns {Channel}
       */
      get onOpen() {
        return this._onOpen;
      }
      /**
       * Event channel triggered every time when message is sent to server.
       *
       * @see https://vitalets.github.io/chnl/#channel
       * @example
       * wsp.onSend.addListener(data => console.log('Message sent', data));
       *
       * @returns {Channel}
       */
      get onSend() {
        return this._onSend;
      }
      /**
       * Event channel triggered every time when message received from server.
       *
       * @see https://vitalets.github.io/chnl/#channel
       * @example
       * wsp.onMessage.addListener(message => console.log(message));
       *
       * @returns {Channel}
       */
      get onMessage() {
        return this._onMessage;
      }
      /**
       * Event channel triggered every time when received message is successfully unpacked.
       * For example, if you are using JSON transport, the listener will receive already JSON parsed data.
       *
       * @see https://vitalets.github.io/chnl/#channel
       * @example
       * wsp.onUnpackedMessage.addListener(data => console.log(data.foo));
       *
       * @returns {Channel}
       */
      get onUnpackedMessage() {
        return this._onUnpackedMessage;
      }
      /**
       * Event channel triggered every time when response to some request comes.
       * Received message considered a response if requestId is found in it.
       *
       * @see https://vitalets.github.io/chnl/#channel
       * @example
       * wsp.onResponse.addListener(data => console.log(data));
       *
       * @returns {Channel}
       */
      get onResponse() {
        return this._onResponse;
      }
      /**
       * Event channel triggered when connection closed.
       * Listener accepts single argument `{code, reason}`.
       *
       * @see https://vitalets.github.io/chnl/#channel
       * @example
       * wsp.onClose.addListener(event => console.log(`Connections closed: ${event.reason}`));
       *
       * @returns {Channel}
       */
      get onClose() {
        return this._onClose;
      }
      /**
       * Event channel triggered when by Websocket 'error' event.
       *
       * @see https://vitalets.github.io/chnl/#channel
       * @example
       * wsp.onError.addListener(event => console.error(event));
       *
       * @returns {Channel}
       */
      get onError() {
        return this._onError;
      }
      /**
       * Opens WebSocket connection. If connection already opened, promise will be resolved with "open event".
       *
       * @returns {Promise<Event>}
       */
      open() {
        if (this.isClosing) {
          return Promise.reject(new Error(`Can't open WebSocket while closing.`));
        }
        if (this.isOpened) {
          return this._opening.promise;
        }
        return this._opening.call(() => {
          this._opening.promise.catch((e) => this._cleanup(e));
          this._createWS();
        });
      }
      /**
       * Performs request and waits for response.
       *
       * @param {*} data
       * @param {Object} [options]
       * @param {String|Number} [options.requestId=<auto-generated>]
       * @param {Number} [options.timeout=0]
       * @returns {Promise}
       */
      sendRequest(data, options = {}) {
        const requestId = options.requestId || `${Math.random()}`;
        const timeout = options.timeout !== void 0 ? options.timeout : this._options.timeout;
        return this._requests.create(requestId, () => {
          this._assertRequestIdHandlers();
          const finalData = this._options.attachRequestId(data, requestId);
          this.sendPacked(finalData);
        }, timeout);
      }
      /**
       * Packs data with `options.packMessage` and sends to the server.
       *
       * @param {*} data
       */
      sendPacked(data) {
        this._assertPackingHandlers();
        const message = this._options.packMessage(data);
        this.send(message);
      }
      /**
       * Sends data without packing.
       *
       * @param {String|Blob|ArrayBuffer} data
       */
      send(data) {
        throwIf(!this.isOpened, `Can't send data because WebSocket is not opened.`);
        this._ws.send(data);
        this._onSend.dispatchAsync(data);
      }
      /**
       * Waits for particular message to come.
       *
       * @param {Function} predicate function to check incoming message.
       * @param {Object} [options]
       * @param {Number} [options.timeout=0]
       * @param {Error} [options.timeoutError]
       * @returns {Promise}
       *
       * @example
       * const response = await wsp.waitUnpackedMessage(data => data && data.foo === 'bar');
       */
      waitUnpackedMessage(predicate, options = {}) {
        throwIf(typeof predicate !== "function", `Predicate must be a function, got ${typeof predicate}`);
        if (options.timeout) {
          setTimeout(() => {
            if (this._promisedMap.has(predicate)) {
              const error = options.timeoutError || new Error("Timeout");
              this._promisedMap.reject(predicate, error);
            }
          }, options.timeout);
        }
        return this._promisedMap.set(predicate);
      }
      /**
       * Closes WebSocket connection. If connection already closed, promise will be resolved with "close event".
       *
       * @param {number=} [code=1000] A numeric value indicating the status code.
       * @param {string=} [reason] A human-readable reason for closing connection.
       * @returns {Promise<Event>}
       */
      close(code, reason) {
        return this.isClosed ? Promise.resolve(this._closing.value) : this._closing.call(() => this._ws.close(code, reason));
      }
      /**
       * Removes all listeners from WSP instance. Useful for cleanup.
       */
      removeAllListeners() {
        this._onOpen.removeAllListeners();
        this._onMessage.removeAllListeners();
        this._onUnpackedMessage.removeAllListeners();
        this._onResponse.removeAllListeners();
        this._onSend.removeAllListeners();
        this._onClose.removeAllListeners();
        this._onError.removeAllListeners();
      }
      _createOpeningController() {
        const connectionTimeout = this._options.connectionTimeout || this._options.timeout;
        this._opening = new PromiseController({
          timeout: connectionTimeout,
          timeoutReason: `Can't open WebSocket within allowed timeout: ${connectionTimeout} ms.`
        });
      }
      _createClosingController() {
        const closingTimeout = this._options.timeout;
        this._closing = new PromiseController({
          timeout: closingTimeout,
          timeoutReason: `Can't close WebSocket within allowed timeout: ${closingTimeout} ms.`
        });
      }
      _createChannels() {
        this._onOpen = new Channel();
        this._onMessage = new Channel();
        this._onUnpackedMessage = new Channel();
        this._onResponse = new Channel();
        this._onSend = new Channel();
        this._onClose = new Channel();
        this._onError = new Channel();
      }
      _createWS() {
        this._ws = this._options.createWebSocket(this._url);
        this._wsSubscription = new Channel.Subscription([
          { channel: this._ws, event: "open", listener: (e) => this._handleOpen(e) },
          { channel: this._ws, event: "message", listener: (e) => this._handleMessage(e) },
          { channel: this._ws, event: "error", listener: (e) => this._handleError(e) },
          { channel: this._ws, event: "close", listener: (e) => this._handleClose(e) }
        ]).on();
      }
      _handleOpen(event) {
        this._onOpen.dispatchAsync(event);
        this._opening.resolve(event);
      }
      _handleMessage(event) {
        const data = this._options.extractMessageData(event);
        this._onMessage.dispatchAsync(data);
        this._tryUnpack(data);
      }
      _tryUnpack(data) {
        if (this._options.unpackMessage) {
          data = this._options.unpackMessage(data);
          if (isPromise(data)) {
            data.then((data2) => this._handleUnpackedData(data2));
          } else {
            this._handleUnpackedData(data);
          }
        }
      }
      _handleUnpackedData(data) {
        if (data !== void 0) {
          this._onUnpackedMessage.dispatchAsync(data);
          this._tryHandleResponse(data);
        }
        this._tryHandleWaitingMessage(data);
      }
      _tryHandleResponse(data) {
        if (this._options.extractRequestId) {
          const requestId = this._options.extractRequestId(data);
          if (requestId) {
            this._onResponse.dispatchAsync(data, requestId);
            this._requests.resolve(requestId, data);
          }
        }
      }
      _tryHandleWaitingMessage(data) {
        this._promisedMap.forEach((_, predicate) => {
          let isMatched = false;
          try {
            isMatched = predicate(data);
          } catch (e) {
            this._promisedMap.reject(predicate, e);
            return;
          }
          if (isMatched) {
            this._promisedMap.resolve(predicate, data);
          }
        });
      }
      _handleError(event) {
        this._onError.dispatchAsync(event);
      }
      _handleClose(event) {
        this._onClose.dispatchAsync(event);
        this._closing.resolve(event);
        const error = new Error(`WebSocket closed with reason: ${event.reason} (${event.code}).`);
        if (this._opening.isPending) {
          this._opening.reject(error);
        }
        this._cleanup(error);
      }
      _cleanupWS() {
        if (this._wsSubscription) {
          this._wsSubscription.off();
          this._wsSubscription = null;
        }
        this._ws = null;
      }
      _cleanup(error) {
        this._cleanupWS();
        this._requests.rejectAll(error);
      }
      _assertOptions(options) {
        Object.keys(options || {}).forEach((key) => {
          if (!defaultOptions.hasOwnProperty(key)) {
            throw new Error(`Unknown option: ${key}`);
          }
        });
      }
      _assertPackingHandlers() {
        const { packMessage, unpackMessage } = this._options;
        throwIf(
          !packMessage || !unpackMessage,
          `Please define 'options.packMessage / options.unpackMessage' for sending packed messages.`
        );
      }
      _assertRequestIdHandlers() {
        const { attachRequestId, extractRequestId } = this._options;
        throwIf(
          !attachRequestId || !extractRequestId,
          `Please define 'options.attachRequestId / options.extractRequestId' for sending requests.`
        );
      }
    };
    module.exports = WebSocketAsPromised2;
  }
});

// src/features/shortcuts/background/index.ts
var ShortcutMessageInit = () => {
  createBackgroundMessageListener(async (runtime, event, data, sender) => {
    if (runtime === "shortcut") {
      switch (event) {
        case "ShortCuts_getContentOfURL": {
          const { URL } = data;
          const webpageData = await getWebpageTitleAndText(URL);
          return {
            data: webpageData,
            success: webpageData.success,
            message: "ok"
          };
        }
        case "ShortCuts_getHtmlOfURL": {
          const { URL } = data;
          const webpageData = await getWebpageOriginHtml(URL);
          return {
            data: webpageData,
            success: webpageData.success,
            message: "ok"
          };
        }
        case "ShortCuts_getContentOfSearchEngine": {
          const { URL } = data;
          const webpageContent = await getWebpageUrlContent(URL);
          return {
            data: webpageContent,
            success: webpageContent.success,
            message: "ok"
          };
        }
        default:
          break;
      }
    }
    return void 0;
  });
};

// src/util/webSearch/api.ts
var import_readability = __toESM(require_readability());
var import_webextension_polyfill = __toESM(require_browser_polyfill());
var cleanText = (text) => text.trim().replace(/(\n){4,}/g, "\n\n\n").replace(/ {3,}/g, "  ").replace(/\t/g, "").replace(/\n+(\s*\n)*/g, "\n");
async function getWebpageTitleAndText2(url, html_str = "") {
  let html = html_str;
  if (!html) {
    let response;
    try {
      response = await fetch(url.startsWith("http") ? url : `https://${url}`);
    } catch (e) {
      return {
        title: "Could not fetch the page.",
        body: `Could not fetch the page: ${e}.
Make sure the URL is correct.`,
        url
      };
    }
    if (!response.ok) {
      return {
        title: "Could not fetch the page.",
        body: `Could not fetch the page: ${response.status} ${response.statusText}`,
        url
      };
    }
    html = await response.text();
  }
  const doc = parseHTML(html).document;
  const parsed = new import_readability.Readability(doc).parse();
  if (!parsed || !parsed.textContent) {
    return {
      title: "Could not parse the page.",
      body: "Could not parse the page.",
      url
    };
  }
  let text = cleanText(parsed.textContent);
  const userConfig = await getCacheUserConfig();
  if (userConfig.trimLongText && text.length > 14400) {
    text = text.slice(0, 14400);
    text += "\n\n[Text has been trimmed to 14,500 characters. You can disable this on WebChatGPT's options page.]";
  }
  return { title: parsed.title, body: text, url };
}

// src/util/webSearch/web_search.ts
var import_webextension_polyfill2 = __toESM(require_browser_polyfill());
var BASE_URL = "https://search.yahoo.com/search";
async function getHtml({
  query,
  timerange
}) {
  const params = new URLSearchParams({
    q: query,
    btf: timerange,
    nojs: "1",
    ei: "UTF-8"
  });
  const response = await fetch(`${BASE_URL}?${params.toString()}`);
  if (!response.ok) {
    throw new Error(
      `Failed to fetch: ${response.status} ${response.statusText}`
    );
  }
  return {
    status: response.status,
    html: await response.text(),
    url: response.url
  };
}

// src/background/bg.ts
var import_webextension_polyfill10 = __toESM(require_browser_polyfill());

// src/features/chatgpt/background/index.ts
var ChatGPTMessageInit = () => {
  createBackgroundMessageListener(async (runtime, event, data, sender) => {
    if (runtime === "client") {
      switch (event) {
        case "Client_logCallApiRequest": {
          backgroundCallApiListener(data);
          return {
            success: true,
            message: "ok",
            data: {}
          };
          break;
        }
        default:
          break;
      }
    }
    return void 0;
  });
};

// src/features/searchAd/background/index.ts
var SearchAdMessageInit = () => {
  createBackgroundMessageListener(async (runtime, event, data, sender) => {
    if (runtime === "client") {
      switch (event) {
        case "Client_getSearchAdIntervals": {
          const value = await fetchSearchAdIntervals();
          return {
            success: true,
            message: "ok",
            data: value ?? null
          };
          break;
        }
        default:
          break;
      }
    }
    return void 0;
  });
};

// src/background/provider/chat/BardChatProvider.ts
var import_webextension_polyfill3 = __toESM(require_browser_polyfill());
var BardChatProvider = class {
  bardChat;
  constructor(bardChat) {
    this.bardChat = bardChat;
  }
  async auth(authTabId) {
    await this.bardChat.auth();
  }
  async preAuth() {
    await this.bardChat.checkAuth();
  }
  get status() {
    return this.bardChat.status;
  }
  async createConversation() {
    return Promise.resolve("");
  }
  async removeConversation(conversationId) {
    await this.bardChat.reset();
    return Promise.resolve(true);
  }
  sendQuestion = async (taskId, sender, question, options) => {
    const messageId = v4_default();
    await this.bardChat.askChatGPT(
      question.question,
      {
        taskId: question.messageId,
        regenerate: options.regenerate,
        include_history: options.includeHistory,
        max_history_message_cnt: options.maxHistoryMessageCnt
      },
      async ({ type, done, error, data }) => {
        if (sender.tab?.id) {
          await this.sendResponseToClient(sender.tab.id, {
            taskId,
            data: {
              text: data.text,
              parentMessageId: question.messageId,
              conversationId: data.conversationId,
              messageId
            },
            error,
            done
          });
        }
      }
    );
  };
  async abortAskQuestion(messageId) {
    return await this.bardChat.abortTask(messageId);
  }
  async destroy() {
    await this.bardChat.destroy();
  }
  async sendResponseToClient(tabId, data) {
    await import_webextension_polyfill3.default.tabs.sendMessage(tabId, {
      id: CHROME_EXTENSION_POST_MESSAGE_ID,
      event: "Client_askChatGPTQuestionResponse",
      data
    });
  }
};

// src/background/provider/chat/BingChatProvider.ts
var import_webextension_polyfill4 = __toESM(require_browser_polyfill());
var BingChatProvider = class {
  bingChat;
  constructor(bingChat) {
    this.bingChat = bingChat;
  }
  async auth(authTabId) {
    await this.bingChat.auth();
  }
  async preAuth() {
    await this.bingChat.auth();
  }
  get status() {
    return this.bingChat.status;
  }
  async createConversation() {
    return Promise.resolve("");
  }
  async removeConversation(conversationId) {
    await this.bingChat.removeConversation(conversationId);
    return Promise.resolve(true);
  }
  sendQuestion = async (taskId, sender, question, options) => {
    const messageId = v4_default();
    await this.bingChat.askChatGPT(
      question.question,
      {
        taskId: question.messageId,
        regenerate: options.regenerate,
        include_history: options.includeHistory,
        max_history_message_cnt: options.maxHistoryMessageCnt
      },
      async ({ type, done, error, data }) => {
        if (sender.tab?.id) {
          await this.sendResponseToClient(sender.tab.id, {
            taskId,
            data: {
              text: data.text,
              parentMessageId: question.messageId,
              conversationId: data.conversationId,
              messageId
            },
            error,
            done
          });
        }
      }
    );
  };
  async abortAskQuestion(messageId) {
    return await this.bingChat.abortTask(messageId);
  }
  async destroy() {
    await this.bingChat.destroy();
  }
  async sendResponseToClient(tabId, data) {
    await import_webextension_polyfill4.default.tabs.sendMessage(tabId, {
      id: CHROME_EXTENSION_POST_MESSAGE_ID,
      event: "Client_askChatGPTQuestionResponse",
      data
    });
  }
};

// src/background/provider/chat/ChatAdapter.ts
var ChatAdapter = class {
  chatAdapter;
  constructor(chatAdapter) {
    this.chatAdapter = chatAdapter;
  }
  async preAuth() {
    await this.chatAdapter.preAuth();
  }
  async auth(authTabId) {
    await this.chatAdapter.auth(authTabId);
  }
  get status() {
    return this.chatAdapter.status;
  }
  sendQuestion = (taskId, sender, question, options) => {
    return this.chatAdapter.sendQuestion(taskId, sender, question, options);
  };
  async abortAskQuestion(messageId) {
    return await this.chatAdapter.abortAskQuestion(messageId);
  }
  async destroy() {
    await this.chatAdapter.destroy();
  }
  async createConversation() {
    return await this.chatAdapter.createConversation();
  }
  async removeConversation(conversationId) {
    return await this.chatAdapter.removeConversation(conversationId);
  }
  // get chatFiles() {
  //   return this.chatAdapter.chatFiles
  // }
  // async getUploadFileToken() {
  //   return await this.chatAdapter.getUploadFileToken()
  // }
  // async updateFiles(updateFiles: IChatUploadFile[]) {
  //   await this.chatAdapter.updateFiles(updateFiles)
  // }
  // async uploadFiles(files: IChatUploadFile[]) {
  //   return await this.chatAdapter.uploadFiles(files)
  // }
  // async abortUploadFiles(fileIds: string[]) {
  //   return await this.chatAdapter.abortUploadFiles(fileIds)
  // }
  // async removeFiles(fileIds: string[]) {
  //   return await this.chatAdapter.removeFiles(fileIds)
  // }
  // async getFiles() {
  //   return await this.chatAdapter.getFiles()
  // }
  // async clearFiles() {
  //   return await this.chatAdapter.clearFiles()
  // }
};

// src/background/provider/chat/ClaudeChatProvider.ts
var import_webextension_polyfill5 = __toESM(require_browser_polyfill());
var ClaudeChatProvider = class {
  claudeChat;
  constructor(claudeChat) {
    this.claudeChat = claudeChat;
  }
  async auth(authTabId) {
    await this.claudeChat.auth();
  }
  async preAuth() {
    await this.claudeChat.preAuth();
  }
  get status() {
    return this.claudeChat.status;
  }
  async createConversation() {
    return await this.claudeChat.createConversation();
  }
  async removeConversation(conversationId) {
    await this.claudeChat.removeConversation(conversationId);
    return Promise.resolve(true);
  }
  sendQuestion = async (taskId, sender, question, options) => {
    const messageId = v4_default();
    await this.claudeChat.askChatGPT(
      question.question,
      {
        taskId: question.messageId,
        regenerate: options.regenerate,
        include_history: options.includeHistory,
        max_history_message_cnt: options.maxHistoryMessageCnt
      },
      async ({ type, done, error, data }) => {
        if (sender.tab?.id) {
          await this.sendResponseToClient(sender.tab.id, {
            taskId,
            data: {
              text: data.text,
              parentMessageId: question.messageId,
              conversationId: data.conversationId,
              messageId
            },
            error,
            done
          });
        }
      }
    );
  };
  async abortAskQuestion(messageId) {
    return await this.claudeChat.abortTask(messageId);
  }
  async destroy() {
    await this.claudeChat.destroy();
  }
  async sendResponseToClient(tabId, data) {
    await import_webextension_polyfill5.default.tabs.sendMessage(tabId, {
      id: CHROME_EXTENSION_POST_MESSAGE_ID,
      event: "Client_askChatGPTQuestionResponse",
      data
    });
  }
};

// src/background/provider/chat/OpenAIChatProvider.ts
var import_webextension_polyfill6 = __toESM(require_browser_polyfill());
var OpenAIChatProvider = class {
  openAIChat;
  constructor(openAIChat) {
    this.openAIChat = openAIChat;
  }
  async preAuth() {
    return this.openAIChat.preAuth();
  }
  async auth(authTabId) {
    await this.openAIChat.auth(authTabId);
  }
  get status() {
    return this.openAIChat.status;
  }
  sendQuestion = async (taskId, sender, question, options) => {
    const messageId = v4_default();
    await this.openAIChat.askChatGPT(
      question.question,
      {
        taskId: question.messageId,
        regenerate: options.regenerate,
        include_history: options.includeHistory,
        max_history_message_cnt: options.maxHistoryMessageCnt
      },
      async ({ type, done, error, data }) => {
        if (sender.tab?.id) {
          await this.sendResponseToClient(sender.tab.id, {
            taskId,
            data: {
              text: data.text,
              parentMessageId: question.messageId,
              conversationId: data.conversationId,
              messageId
            },
            error,
            done
          });
        }
      }
    );
  };
  async abortAskQuestion(messageId) {
    try {
      await this.openAIChat.abortAskQuestion(messageId);
      return true;
    } catch (error) {
      return false;
    }
  }
  async createConversation() {
    return Promise.resolve("");
  }
  async removeConversation(conversationId) {
    return await this.openAIChat.removeConversation(conversationId);
  }
  destroy() {
    return this.openAIChat.destroy();
  }
  async sendResponseToClient(tabId, data) {
    await import_webextension_polyfill6.default.tabs.sendMessage(tabId, {
      id: CHROME_EXTENSION_POST_MESSAGE_ID,
      event: "Client_askChatGPTQuestionResponse",
      data
    });
  }
};

// node_modules/.pnpm/destr@1.2.2/node_modules/destr/dist/index.mjs
var suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
var suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
var JsonSigRx = /^\s*["[{]|^\s*-?\d[\d.]{0,14}\s*$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__") {
    return;
  }
  if (key === "constructor" && value && typeof value === "object" && "prototype" in value) {
    return;
  }
  return value;
}
function destr(value, options = {}) {
  if (typeof value !== "string") {
    return value;
  }
  const _lval = value.toLowerCase().trim();
  if (_lval === "true") {
    return true;
  }
  if (_lval === "false") {
    return false;
  }
  if (_lval === "null") {
    return null;
  }
  if (_lval === "nan") {
    return Number.NaN;
  }
  if (_lval === "infinity") {
    return Number.POSITIVE_INFINITY;
  }
  if (_lval === "undefined") {
    return void 0;
  }
  if (!JsonSigRx.test(value)) {
    if (options.strict) {
      throw new SyntaxError("Invalid JSON");
    }
    return value;
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      return JSON.parse(value, jsonParseTransform);
    }
    return JSON.parse(value);
  } catch (error) {
    if (options.strict) {
      throw error;
    }
    return value;
  }
}

// node_modules/.pnpm/ufo@1.1.2/node_modules/ufo/dist/index.mjs
var r = String.fromCharCode;
var HASH_RE = /#/g;
var AMPERSAND_RE = /&/g;
var EQUAL_RE = /=/g;
var PLUS_RE = /\+/g;
var ENC_CARET_RE = /%5e/gi;
var ENC_BACKTICK_RE = /%60/gi;
var ENC_PIPE_RE = /%7c/gi;
var ENC_SPACE_RE = /%20/gi;
function encode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|");
}
function encodeQueryValue(input) {
  return encode(typeof input === "string" ? input : JSON.stringify(input)).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CARET_RE, "^");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function decode(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch {
    return "" + text;
  }
}
function decodeQueryValue(text) {
  return decode(text.replace(PLUS_RE, " "));
}
function parseQuery(parametersString = "") {
  const object = {};
  if (parametersString[0] === "?") {
    parametersString = parametersString.slice(1);
  }
  for (const parameter of parametersString.split("&")) {
    const s = parameter.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) {
      continue;
    }
    const key = decode(s[1]);
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s[2] || "");
    if (typeof object[key] !== "undefined") {
      if (Array.isArray(object[key])) {
        object[key].push(value);
      } else {
        object[key] = [object[key], value];
      }
    } else {
      object[key] = value;
    }
  }
  return object;
}
function encodeQueryItem(key, value) {
  if (typeof value === "number" || typeof value === "boolean") {
    value = String(value);
  }
  if (!value) {
    return encodeQueryKey(key);
  }
  if (Array.isArray(value)) {
    return value.map((_value) => `${encodeQueryKey(key)}=${encodeQueryValue(_value)}`).join("&");
  }
  return `${encodeQueryKey(key)}=${encodeQueryValue(value)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).filter((k) => query[k] !== void 0).map((k) => encodeQueryItem(k, query[k])).join("&");
}
var PROTOCOL_STRICT_REGEX = /^\w{2,}:([/\\]{1,2})/;
var PROTOCOL_REGEX = /^\w{2,}:([/\\]{2})?/;
var PROTOCOL_RELATIVE_REGEX = /^([/\\]\s*){2,}[^/\\]/;
function hasProtocol(inputString, opts = {}) {
  if (typeof opts === "boolean") {
    opts = { acceptRelative: opts };
  }
  if (opts.strict) {
    return PROTOCOL_STRICT_REGEX.test(inputString);
  }
  return PROTOCOL_REGEX.test(inputString) || (opts.acceptRelative ? PROTOCOL_RELATIVE_REGEX.test(inputString) : false);
}
var TRAILING_SLASH_RE = /\/$|\/\?/;
function hasTrailingSlash(input = "", queryParameters = false) {
  if (!queryParameters) {
    return input.endsWith("/");
  }
  return TRAILING_SLASH_RE.test(input);
}
function withoutTrailingSlash(input = "", queryParameters = false) {
  if (!queryParameters) {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
  if (!hasTrailingSlash(input, true)) {
    return input || "/";
  }
  const [s0, ...s] = input.split("?");
  return (s0.slice(0, -1) || "/") + (s.length > 0 ? `?${s.join("?")}` : "");
}
function withTrailingSlash(input = "", queryParameters = false) {
  if (!queryParameters) {
    return input.endsWith("/") ? input : input + "/";
  }
  if (hasTrailingSlash(input, true)) {
    return input || "/";
  }
  const [s0, ...s] = input.split("?");
  return s0 + "/" + (s.length > 0 ? `?${s.join("?")}` : "");
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withoutLeadingSlash(input = "") {
  return (hasLeadingSlash(input) ? input.slice(1) : input) || "/";
}
function withBase(input, base) {
  if (isEmptyURL(base) || hasProtocol(input)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    return input;
  }
  return joinURL(_base, input);
}
function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = { ...parseQuery(parsed.search), ...query };
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function isEmptyURL(url) {
  return !url || url === "/";
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
function joinURL(base, ...input) {
  let url = base || "";
  for (const index of input.filter((url2) => isNonEmptyURL(url2))) {
    url = url ? withTrailingSlash(url) + withoutLeadingSlash(index) : index;
  }
  return url;
}
function parseURL(input = "", defaultProto) {
  if (!hasProtocol(input, { acceptRelative: true })) {
    return defaultProto ? parseURL(defaultProto + input) : parsePath(input);
  }
  const [protocol = "", auth, hostAndPath = ""] = (input.replace(/\\/g, "/").match(/([^/:]+:)?\/\/([^/@]+@)?(.*)/) || []).splice(1);
  const [host = "", path = ""] = (hostAndPath.match(/([^#/?]*)(.*)?/) || []).splice(1);
  const { pathname, search, hash } = parsePath(
    path.replace(/\/(?=[A-Za-z]:)/, "")
  );
  return {
    protocol,
    auth: auth ? auth.slice(0, Math.max(0, auth.length - 1)) : "",
    host,
    pathname,
    search,
    hash
  };
}
function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}
function stringifyParsedURL(parsed) {
  const fullpath = parsed.pathname + (parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "") + parsed.hash;
  if (!parsed.protocol) {
    return fullpath;
  }
  return parsed.protocol + "//" + (parsed.auth ? parsed.auth + "@" : "") + parsed.host + fullpath;
}

// node_modules/.pnpm/ofetch@1.0.1/node_modules/ofetch/dist/shared/ofetch.502a4799.mjs
var FetchError = class extends Error {
  constructor() {
    super(...arguments);
    this.name = "FetchError";
  }
};
function createFetchError(request, error, response) {
  let message = "";
  if (error) {
    message = error.message;
  }
  if (request && response) {
    message = `${message} (${response.status} ${response.statusText} (${request.toString()}))`;
  } else if (request) {
    message = `${message} (${request.toString()})`;
  }
  const fetchError = new FetchError(message);
  Object.defineProperty(fetchError, "request", {
    get() {
      return request;
    }
  });
  Object.defineProperty(fetchError, "response", {
    get() {
      return response;
    }
  });
  Object.defineProperty(fetchError, "data", {
    get() {
      return response && response._data;
    }
  });
  Object.defineProperty(fetchError, "status", {
    get() {
      return response && response.status;
    }
  });
  Object.defineProperty(fetchError, "statusText", {
    get() {
      return response && response.statusText;
    }
  });
  Object.defineProperty(fetchError, "statusCode", {
    get() {
      return response && response.status;
    }
  });
  Object.defineProperty(fetchError, "statusMessage", {
    get() {
      return response && response.statusText;
    }
  });
  return fetchError;
}
var payloadMethods = new Set(
  Object.freeze(["PATCH", "POST", "PUT", "DELETE"])
);
function isPayloadMethod(method = "GET") {
  return payloadMethods.has(method.toUpperCase());
}
function isJSONSerializable(value) {
  if (value === void 0) {
    return false;
  }
  const t = typeof value;
  if (t === "string" || t === "number" || t === "boolean" || t === null) {
    return true;
  }
  if (t !== "object") {
    return false;
  }
  if (Array.isArray(value)) {
    return true;
  }
  return value.constructor && value.constructor.name === "Object" || typeof value.toJSON === "function";
}
var textTypes = /* @__PURE__ */ new Set([
  "image/svg",
  "application/xml",
  "application/xhtml",
  "application/html"
]);
var JSON_RE = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function detectResponseType(_contentType = "") {
  if (!_contentType) {
    return "json";
  }
  const contentType = _contentType.split(";").shift() || "";
  if (JSON_RE.test(contentType)) {
    return "json";
  }
  if (textTypes.has(contentType) || contentType.startsWith("text/")) {
    return "text";
  }
  return "blob";
}
var retryStatusCodes = /* @__PURE__ */ new Set([
  408,
  // Request Timeout
  409,
  // Conflict
  425,
  // Too Early
  429,
  // Too Many Requests
  500,
  // Internal Server Error
  502,
  // Bad Gateway
  503,
  // Service Unavailable
  504
  //  Gateway Timeout
]);
function createFetch(globalOptions) {
  const { fetch: fetch3, Headers: Headers2 } = globalOptions;
  function onError(context) {
    const isAbort = context.error && context.error.name === "AbortError" || false;
    if (context.options.retry !== false && !isAbort) {
      let retries;
      if (typeof context.options.retry === "number") {
        retries = context.options.retry;
      } else {
        retries = isPayloadMethod(context.options.method) ? 0 : 1;
      }
      const responseCode = context.response && context.response.status || 500;
      if (retries > 0 && retryStatusCodes.has(responseCode)) {
        return $fetchRaw(context.request, {
          ...context.options,
          retry: retries - 1
        });
      }
    }
    const error = createFetchError(
      context.request,
      context.error,
      context.response
    );
    if (Error.captureStackTrace) {
      Error.captureStackTrace(error, $fetchRaw);
    }
    throw error;
  }
  const $fetchRaw = async function $fetchRaw2(_request, _options = {}) {
    const context = {
      request: _request,
      options: { ...globalOptions.defaults, ..._options },
      response: void 0,
      error: void 0
    };
    if (context.options.onRequest) {
      await context.options.onRequest(context);
    }
    if (typeof context.request === "string") {
      if (context.options.baseURL) {
        context.request = withBase(context.request, context.options.baseURL);
      }
      if (context.options.query || context.options.params) {
        context.request = withQuery(context.request, {
          ...context.options.params,
          ...context.options.query
        });
      }
      if (context.options.body && isPayloadMethod(context.options.method) && isJSONSerializable(context.options.body)) {
        context.options.body = typeof context.options.body === "string" ? context.options.body : JSON.stringify(context.options.body);
        context.options.headers = new Headers2(context.options.headers);
        if (!context.options.headers.has("content-type")) {
          context.options.headers.set("content-type", "application/json");
        }
        if (!context.options.headers.has("accept")) {
          context.options.headers.set("accept", "application/json");
        }
      }
    }
    context.response = await fetch3(
      context.request,
      context.options
    ).catch(async (error) => {
      context.error = error;
      if (context.options.onRequestError) {
        await context.options.onRequestError(context);
      }
      return onError(context);
    });
    const responseType = (context.options.parseResponse ? "json" : context.options.responseType) || detectResponseType(context.response.headers.get("content-type") || "");
    if (responseType === "json") {
      const data = await context.response.text();
      const parseFunction = context.options.parseResponse || destr;
      context.response._data = parseFunction(data);
    } else if (responseType === "stream") {
      context.response._data = context.response.body;
    } else {
      context.response._data = await context.response[responseType]();
    }
    if (context.options.onResponse) {
      await context.options.onResponse(context);
    }
    if (context.response.status >= 400 && context.response.status < 600) {
      if (context.options.onResponseError) {
        await context.options.onResponseError(context);
      }
      return onError(context);
    }
    return context.response;
  };
  const $fetch = function $fetch2(request, options) {
    return $fetchRaw(request, options).then((r2) => r2._data);
  };
  $fetch.raw = $fetchRaw;
  $fetch.native = fetch3;
  $fetch.create = (defaultOptions = {}) => createFetch({
    ...globalOptions,
    defaults: {
      ...globalOptions.defaults,
      ...defaultOptions
    }
  });
  return $fetch;
}

// node_modules/.pnpm/ofetch@1.0.1/node_modules/ofetch/dist/index.mjs
var _globalThis = function() {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw new Error("unable to locate global object");
}();
var fetch2 = _globalThis.fetch || (() => Promise.reject(new Error("[ofetch] global.fetch is not supported!")));
var Headers = _globalThis.Headers;
var ofetch = createFetch({ fetch: fetch2, Headers });

// src/background/src/chat/BardChat/utils.ts
function extractFromHTML(variableName, html) {
  const regex = new RegExp(`"${variableName}":"([^"]+)"`);
  const match = regex.exec(html);
  return match?.[1];
}
var fetchBardRequestParams = async () => {
  const html = await ofetch("https://bard.google.com/faq", {
    cache: "reload"
  });
  const atValue = extractFromHTML("SNlM0e", html);
  const blValue = extractFromHTML("cfb2h", html);
  return { atValue, blValue };
};
var parseBardResponse = (resp) => {
  const data = JSON.parse(resp.split("\n")[3]);
  const payload = JSON.parse(data[0][2]);
  if (!payload) {
    return {
      text: "Failed to access Bard\nTry again, or visit [bard.google.com](https://bard.google.com) for more information.",
      ids: ["", "", ""]
    };
  }
  const text = payload[4][0][1][0];
  return {
    text,
    ids: [...payload[1], payload[4][0][0]]
  };
};

// src/background/src/chat/BaseChat.ts
var BaseChat = class {
  log;
  status = "needAuth";
  active = false;
  taskList = {};
  constructor(name) {
    this.log = new Log_default("Background/Chat/" + name);
  }
  async auth(tabId) {
    this.active = true;
    await this.updateClientStatus("success");
  }
  async destroy() {
    await this.updateClientStatus("needAuth");
    this.active = false;
  }
  async updateClientStatus(status) {
    if (this.active) {
      this.status = status;
      this.log.info("updateStatus", this.status);
      await backgroundSendAllClientMessage("Client_ChatGPTStatusUpdate", {
        status: this.status
      });
    }
  }
  async abortTask(taskId) {
    if (this.taskList[taskId]) {
      this.taskList[taskId]();
      delete this.taskList[taskId];
      return true;
    }
    return true;
  }
};
var BaseChat_default = BaseChat;

// src/background/src/chat/BardChat/index.ts
function generateReqId() {
  return Math.floor(Math.random() * 9e5) + 1e5;
}
var BardChat = class extends BaseChat_default {
  token;
  contextIds = ["", "", ""];
  conversationId;
  constructor() {
    super("BardChat");
    this.token = void 0;
  }
  async checkAuth() {
    this.active = true;
  }
  async auth() {
    this.active = true;
  }
  async askChatGPT(question, options, onMessage) {
    if (!this.conversationId) {
      this.conversationId = v4_default();
    }
    const {
      taskId
      // include_history = false,
      // streaming = true,
      // regenerate = false,
      // max_history_message_cnt = 0,
    } = options || {};
    const controller = new AbortController();
    const signal = controller.signal;
    let isAbort = false;
    if (taskId) {
      this.taskList[taskId] = () => controller.abort();
    }
    if (!await this.syncBardToken() || !this.token) {
      onMessage && onMessage({
        type: "error",
        error: "UNAUTHORIZED",
        done: true,
        data: { text: "", conversationId: "" }
      });
      return;
    }
    try {
      if (!this.active) {
        return;
      }
      const result = await ofetch(
        "https://bard.google.com/_/BardChatUi/data/assistant.lamda.BardFrontendService/StreamGenerate",
        {
          method: "POST",
          signal,
          query: {
            bl: this.token.blValue,
            _reqid: generateReqId(),
            rt: "c"
          },
          body: new URLSearchParams({
            at: this.token.atValue,
            "f.req": JSON.stringify([
              null,
              `[[${JSON.stringify(question)}],null,${JSON.stringify(
                this.contextIds
              )}]`
            ])
          }),
          parseResponse: (txt) => txt
        }
      ).catch((err) => {
        if (err?.message.includes("The user aborted a request.")) {
          isAbort = true;
          onMessage && onMessage({
            type: "error",
            error: "manual aborted request.",
            done: true,
            data: { text: "", conversationId: "" }
          });
          return;
        }
      });
      const { text, ids } = parseBardResponse(result);
      this.log.debug("result", result, text, ids);
      if (text && ids) {
        if (isAbort) {
          return;
        }
        onMessage && onMessage({
          type: "message",
          done: false,
          error: "",
          data: {
            text,
            conversationId: this.conversationId
          }
        });
        onMessage && onMessage({
          type: "message",
          done: true,
          error: "",
          data: {
            text,
            conversationId: this.conversationId
          }
        });
        this.contextIds = ids;
      } else {
        onMessage && onMessage({
          type: "error",
          done: true,
          error: "BardChat: Unknown Error",
          data: {
            text: "",
            conversationId: this.conversationId
          }
        });
      }
    } catch (e) {
      this.log.error(e);
    }
  }
  async syncBardToken() {
    const { atValue, blValue } = await fetchBardRequestParams();
    if (!atValue || !blValue) {
      this.token = void 0;
      return false;
    }
    this.token = { atValue, blValue };
    return true;
  }
  reset() {
    this.conversationId = "";
    this.contextIds = ["", "", ""];
  }
  // removeConversation(conversationId: string) {
  //   if(conversationId) {
  //   }
  // }
};

// src/background/src/chat/BingChat/bing/api.ts
function randomIP() {
  return `13.${random_default(104, 107)}.${random_default(0, 255)}.${random_default(0, 255)}`;
}
var API_ENDPOINT = "https://www.bing.com/turing/conversation/create";
async function createConversation() {
  const headers = {
    "x-ms-client-request-id": v4_default(),
    "x-ms-useragent": "azsdk-js-api-client-factory/1.0.0-beta.1 core-rest-pipeline/1.10.0 OS/Win32"
  };
  let resp;
  try {
    resp = await ofetch(API_ENDPOINT, { headers, redirect: "error" });
    if (!resp.result) {
      throw new Error("Invalid response");
    }
  } catch (err) {
    resp = await ofetch(API_ENDPOINT, {
      headers: { ...headers, "x-forwarded-for": randomIP() },
      redirect: "error"
    });
    if (!resp) {
      throw new Error(
        `Please sign in to [bing.com](https://bing.com/), complete any required verifications, then try again.`
      );
    }
  }
  if (resp.result.value !== "Success") {
    let message = `${resp.result.value}: ${resp.result.message}

Please sign in to [bing.com](http://bing.com/), complete any required verifications, then try again.`;
    if (resp.result.value === "UnauthorizedRequest") {
      message += "\n[Log into bing.com to continue.](https://www.bing.com/)";
    }
    if (resp.result.value === "Forbidden") {
      message += "\n[Log into bing.com to continue.](https://www.bing.com/)";
    }
    throw new Error(message);
  }
  return resp;
}

// src/background/src/chat/BingChat/bing/utils.ts
function convertMessageToMarkdown(message) {
  if (message.messageType === "InternalSearchQuery") {
    return message.text;
  }
  if (message.messageType === "InternalLoaderMessage") {
    return `_${message.text}_`;
  }
  for (const card of message.adaptiveCards) {
    for (const block of card.body) {
      if (block.type === "TextBlock") {
        return block.text;
      }
    }
  }
  return "";
}
var RecordSeparator = String.fromCharCode(30);
var websocketUtils = {
  packMessage(data) {
    return `${JSON.stringify(data)}${RecordSeparator}`;
  },
  unpackMessage(data) {
    return data.toString().split(RecordSeparator).filter(Boolean).map((s) => JSON.parse(s));
  }
};

// src/background/src/chat/BingChat/bing/index.ts
var import_websocket_as_promised = __toESM(require_src3());
var styleOptionMap = {
  ["balanced" /* Balanced */]: "",
  ["creative" /* Creative */]: "h3imaginative",
  ["precise" /* Precise */]: "h3precise"
};
var OPTIONS_SETS = [
  "nlu_direct_response_filter",
  "deepleo",
  "disable_emoji_spoken_text",
  "responsible_ai_policy_235",
  "enablemm",
  "iycapbing",
  "iyxapbing",
  "objopinion",
  "rweasgv2",
  "dagslnv1",
  "dv3sugg",
  "autosave",
  "iyoloxap",
  "iyoloneutral",
  "clgalileo",
  "gencontentv3"
];
var BingWebBot = class {
  conversationContext;
  buildChatRequest(conversation, message, imageUrl) {
    const styleOption = styleOptionMap[conversation.conversationStyle];
    const optionsSets = OPTIONS_SETS.concat(styleOption || []);
    return {
      arguments: [
        {
          source: "cib",
          optionsSets,
          allowedMessageTypes: [
            "Chat",
            "InternalSearchQuery",
            "Disengaged",
            "InternalLoaderMessage",
            "SemanticSerp",
            "GenerateContentQuery",
            "SearchQuery"
          ],
          sliceIds: [
            "winmuid1tf",
            "anssupfor_c",
            "imgchatgptv2",
            "tts2cf",
            "contansperf",
            "mlchatpc8500w",
            "mlchatpc2",
            "ctrlworkpay",
            "winshortmsgtf",
            "cibctrl",
            "sydtransctrl",
            "sydconfigoptc",
            "0705trt4",
            "517opinion",
            "628ajcopus0",
            "330uaugs0",
            "529rwea",
            "0626snptrcs0",
            "424dagslnv1"
          ],
          isStartOfSession: conversation.invocationId === 0,
          message: {
            author: "user",
            inputMethod: "Keyboard",
            text: message,
            imageUrl,
            messageType: "Chat"
          },
          conversationId: conversation.conversationId,
          conversationSignature: conversation.conversationSignature,
          participant: { id: conversation.clientId }
        }
      ],
      invocationId: conversation.invocationId.toString(),
      target: "chat",
      type: 4 /* StreamInvocation */
    };
  }
  async doSendMessage(params) {
    if (!this.conversationContext) {
      try {
        const conversation2 = await createConversation();
        const bingSettings = await getThirdProviderSettings("BING");
        this.conversationContext = {
          conversationId: conversation2.conversationId,
          conversationSignature: conversation2.conversationSignature,
          clientId: conversation2.clientId,
          invocationId: 0,
          conversationStyle: bingSettings?.conversationStyle || "balanced" /* Balanced */
        };
      } catch (e) {
        params.onEvent({
          type: "ERROR",
          error: e.message || e
        });
        return;
      }
    }
    const conversation = this.conversationContext;
    const wsp = new import_websocket_as_promised.default(
      "wss://sydney.bing.com/sydney/ChatHub",
      {
        packMessage: websocketUtils.packMessage,
        unpackMessage: websocketUtils.unpackMessage
      }
    );
    wsp.onUnpackedMessage.addListener((events) => {
      for (const event of events) {
        if (JSON.stringify(event) === "{}") {
          wsp.sendPacked({ type: 6 });
          wsp.sendPacked(
            this.buildChatRequest(conversation, params.prompt, params.imageUrl)
          );
          conversation.invocationId += 1;
        } else if (event.type === 6) {
          wsp.sendPacked({ type: 6 });
        } else if (event.type === 3) {
          params.onEvent({
            type: "DONE",
            data: {
              conversationId: conversation.conversationId
            }
          });
          wsp.removeAllListeners();
          wsp.close();
        } else if (event.type === 1) {
          const message = event.arguments[0]?.messages?.[0];
          const text = message ? convertMessageToMarkdown(message) : "";
          if (text) {
            params.onEvent({
              type: "UPDATE_ANSWER",
              data: { text, conversationId: conversation.conversationId }
            });
          }
        } else if (event.type === 2) {
          const messages = event?.item?.messages || [];
          const errorMessage = event?.item?.result?.error;
          const limited = messages.some(
            (message) => message.contentOrigin === "TurnLimiter"
          );
          if (limited) {
            params.onEvent({
              type: "ERROR",
              error: `Sorry, you have reached chat turns limit in this conversation.`
            });
          }
          if (errorMessage === "User needs to solve CAPTCHA to continue.") {
            const bingChallengeUrl = `

Please visit [bing.com/turing/captcha/challenge](https://www.bing.com/turing/captcha/challenge), complete any required verifications, then try again.`;
            params.onEvent({
              type: "ERROR",
              error: errorMessage + bingChallengeUrl
            });
          }
        }
      }
    });
    wsp.onClose.addListener(() => {
      params.onEvent({
        type: "DONE",
        data: { conversationId: conversation.conversationId }
      });
    });
    params.signal?.addEventListener("abort", () => {
      wsp.removeAllListeners();
      wsp.close();
      params.onEvent({
        type: "ERROR",
        error: "manual aborted request."
      });
    });
    await wsp.open();
    wsp.sendPacked({ protocol: "json", version: 1 });
  }
  resetConversation() {
    this.conversationContext = void 0;
  }
};

// src/background/src/chat/BingChat/index.ts
var BingChat = class extends BaseChat_default {
  bingLib;
  constructor() {
    super("BingChat");
    this.bingLib = new BingWebBot();
    this.status = "success";
  }
  async init() {
    this.log.info("init");
  }
  async auth() {
    this.active = true;
    await this.updateClientStatus("success");
  }
  async askChatGPT(question, options, onMessage) {
    const { taskId } = options || {};
    this.log.info("askChatGPT");
    const controller = new AbortController();
    const signal = controller.signal;
    if (taskId) {
      this.taskList[taskId] = () => controller.abort();
    }
    await this.bingLib.doSendMessage({
      prompt: question,
      signal,
      onEvent(event) {
        if (event.type === "ERROR") {
          onMessage?.({
            type: "error",
            done: true,
            error: event.error,
            data: {
              text: "",
              conversationId: ""
            }
          });
        } else if (event.type === "UPDATE_ANSWER") {
          onMessage?.({
            type: "message",
            done: false,
            error: "",
            data: {
              text: event.data.text,
              conversationId: event.data.conversationId
            }
          });
        } else if (event.type === "DONE") {
          onMessage?.({
            type: "message",
            done: true,
            error: "",
            data: {
              text: "",
              conversationId: event.data.conversationId
            }
          });
        }
      }
    });
  }
  async removeConversation(conversationId) {
    this.bingLib.resetConversation();
    return Promise.resolve(true);
  }
  async destroy() {
    this.bingLib.resetConversation();
  }
};

// src/background/src/chat/ChatSystem.ts
var import_webextension_polyfill7 = __toESM(require_browser_polyfill());
var log = new Log_default("Background/Chat/ChatSystem");
var ChatSystem = class {
  currentProvider;
  adapters = {};
  constructor() {
    this.initChatSystem();
  }
  get status() {
    if (this.currentAdapter) {
      return this.currentAdapter.status;
    }
    return "needAuth";
  }
  get currentAdapter() {
    return this.currentProvider ? this.adapters[this.currentProvider] : void 0;
  }
  initChatSystem() {
    createBackgroundMessageListener(async (runtime, event, data, sender) => {
      if (runtime === "client") {
        switch (event) {
          case "Client_switchChatGPTProvider":
            {
              const { provider } = data;
              await this.switchAdapter(provider);
              return {
                success: true,
                data: {
                  provider
                },
                message: ""
              };
            }
            break;
          case "Client_authChatGPTProvider": {
            const { provider } = data;
            await this.switchAdapter(provider);
            await this.auth(sender.tab?.id || 0);
            return {
              success: true,
              data: {},
              message: ""
            };
          }
          case "Client_checkChatGPTStatus": {
            return {
              success: true,
              data: {
                status: this.status
              },
              message: ""
            };
          }
          case "Client_createChatGPTConversation": {
            const conversationId = await this.createConversation();
            if (conversationId) {
              return {
                success: true,
                data: {
                  conversationId
                },
                message: ""
              };
            } else {
              return {
                success: false,
                data: {
                  conversationId
                },
                message: "create conversation failed"
              };
            }
          }
          case "Client_askChatGPTQuestion":
            {
              const { taskId, question, options } = data;
              await this.sendQuestion(taskId, sender, question, options);
            }
            break;
          case "Client_removeChatGPTConversation": {
            const { conversationId } = data;
            const success = await this.removeConversation(conversationId || "");
            return {
              success,
              data: {},
              message: ""
            };
          }
          case "Client_abortAskChatGPTQuestion": {
            const { messageId } = data;
            await this.abortAskQuestion(messageId);
            return {
              success: true,
              data: {},
              message: ""
            };
          }
          case "Client_destroyWithLogout": {
            await this.destroy();
            return {
              success: true,
              data: {},
              message: ""
            };
          }
          default:
            break;
        }
      }
      return void 0;
    });
    getCacheUserConfig().then(async (userConfig) => {
      if (userConfig.currentProvider) {
        await this.switchAdapter(userConfig.currentProvider);
      }
    });
  }
  addAdapter(provider, adapter) {
    this.adapters[provider] = adapter;
  }
  async switchAdapter(provider) {
    if (provider === this.currentProvider) {
      log.info("switchAdapter", "same provider no need to switch");
      return;
    }
    if (this.currentAdapter) {
      await this.currentAdapter.destroy();
    }
    this.currentProvider = provider;
    await updateCacheUserConfig({
      currentProvider: provider
    });
    await this.preAuth();
    return this.currentAdapter;
  }
  async auth(authTabId) {
    if (this.currentAdapter) {
      await this.currentAdapter.auth(authTabId);
    }
  }
  async preAuth() {
    if (this.currentAdapter) {
      await this.currentAdapter.preAuth();
    }
  }
  sendQuestion = (taskId, sender, data, options) => {
    return this.currentAdapter?.sendQuestion(taskId, sender, data, options) || Promise.resolve();
  };
  async abortAskQuestion(messageId) {
    if (this.currentAdapter) {
      return await this.currentAdapter.abortAskQuestion(messageId);
    }
    return false;
  }
  async createConversation() {
    if (!this.currentAdapter) {
      return "";
    }
    return await this.currentAdapter?.createConversation() || "";
  }
  async removeConversation(conversationId) {
    if (!this.currentAdapter) {
      return false;
    }
    const result = await this.currentAdapter?.removeConversation(conversationId);
    return result;
  }
  async destroy() {
    await import_webextension_polyfill7.default.storage.local.set({
      [CHAT_GPT_MESSAGES_RECOIL_KEY]: JSON.stringify([])
    });
    await this.currentAdapter?.destroy();
  }
};

// src/background/src/chat/OpenAiChat/index.ts
var log2 = new Log_default("ChatGPT/OpenAIChat");
var OpenAIChat = class extends BaseChat_default {
  openAILib;
  status = "success";
  conversation;
  constructor() {
    super("OpenAIChat");
    this.openAILib = new ChatGPTDaemonProcess();
    this.conversation = void 0;
    this.init();
  }
  init() {
    this.log.info("init");
  }
  async preAuth() {
    this.log.info("preAuth");
  }
  async auth(authTabId) {
    this.active = true;
    this.status = "success";
    await this.updateClientStatus();
  }
  async createConversation() {
    this.conversation = await this.openAILib.createConversation();
    return this.conversation;
  }
  async removeConversation(conversationId) {
    return await this.openAILib.closeConversation(conversationId);
  }
  async askChatGPT(question, options, onMessage) {
    try {
      await this.createConversation();
    } catch (error) {
      onMessage?.({
        type: "error",
        done: true,
        error: error.message || "conversation is not created",
        data: {
          text: "",
          conversationId: ""
        }
      });
    }
    if (!this.conversation) {
      onMessage?.({
        type: "error",
        done: true,
        error: "conversation is not created",
        data: {
          text: "",
          conversationId: ""
        }
      });
      return;
    }
    const openAILib = this.openAILib;
    const conversation = this.conversation;
    const { taskId } = options || {};
    this.log.info("askChatGPT");
    const controller = new AbortController();
    const signal = controller.signal;
    if (taskId) {
      this.taskList[taskId] = () => controller.abort();
    }
    await this.conversation.generateAnswer(
      {
        prompt: question,
        signal,
        onEvent(event) {
          log2.info("generateAnswer", event, options);
          if (event.type === "error") {
            log2.info("error");
            log2.info("abort Controller remove", taskId);
            taskId && openAILib.removeAbortWithMessageId(taskId);
            onMessage?.({
              type: "error",
              done: true,
              error: event.data.message || event.data.detail || "",
              data: {
                text: "",
                conversationId: ""
              }
            });
            return;
          }
          if (event.type === "done") {
            log2.info("abort Controller remove", taskId);
            taskId && openAILib.removeAbortWithMessageId(taskId);
            onMessage?.({
              type: "message",
              done: true,
              error: "",
              data: {
                text: "",
                conversationId: conversation.conversationId
              }
            });
            return;
          }
          onMessage?.({
            type: "message",
            done: false,
            error: "",
            data: {
              text: event.data.text,
              conversationId: conversation.conversationId
            }
          });
        }
      },
      options?.regenerate === true
    );
  }
  async abortAskQuestion(messageId) {
    if (this.taskList[messageId]) {
      this.taskList[messageId]();
      delete this.taskList[messageId];
    }
    return this.openAILib.abortWithMessageId(messageId);
  }
  async destroy() {
    this.openAILib.removeCacheConversation();
  }
  async updateClientStatus() {
    if (this.active) {
      await backgroundSendAllClientMessage("Client_ChatGPTStatusUpdate", {
        status: this.status
      });
    }
  }
};

// src/background/src/chat/ClaudeChat/claude/api.ts
var getClaudeOrganizationId = async () => {
  const response = await fetch("https://claude.ai/api/organizations", {
    redirect: "error",
    cache: "no-cache"
  });
  const organization = await response.json();
  return organization?.[0]?.uuid;
};
var createClaudeConversation = async (organizationId, name) => {
  try {
    if (!organizationId) {
      return void 0;
    }
    const conversationId = v4_default();
    const response = await fetch(
      `https://claude.ai/api/organizations/${organizationId}/chat_conversations`,
      {
        method: "POST",
        // or 'PUT
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name || "",
          uuid: conversationId
        })
      }
    );
    if (response.status === 201 || response.status === 200) {
      const body = await response.json();
      if (body.uuid) {
        return body;
      }
      return void 0;
    } else {
      return void 0;
    }
  } catch (e) {
    return void 0;
  }
};
var getAllClaudeConversations = async (organizationId) => {
  try {
    const response = await fetch(
      `https://claude.ai/api/organizations/${organizationId}/chat_conversations`,
      {
        method: "GET"
      }
    );
    if (response.status === 200) {
      const body = await response.json();
      if (body.length) {
        return body;
      }
      return [];
    }
    return [];
  } catch (e) {
    return [];
  }
};
var removeAllCacheClaudeConversation = async (organizationId, conversationName) => {
  let allClaudeConversations = await getAllClaudeConversations(organizationId);
  allClaudeConversations = allClaudeConversations.filter(
    (conversation) => conversation.name === conversationName
  );
  let deleteConversationIdGroup = [];
  while (allClaudeConversations.length) {
    deleteConversationIdGroup = allClaudeConversations.splice(0, 5).map((conversation) => conversation.uuid);
    await Promise.all(
      deleteConversationIdGroup.map(
        (conversationId) => deleteClaudeConversation(organizationId, conversationId)
      )
    );
    await new Promise((resolve) => setTimeout(resolve, 5e3));
  }
};
var deleteClaudeConversation = async (organizationId, conversationId) => {
  try {
    const response = await fetch(
      `https://claude.ai/api/organizations/${organizationId}/chat_conversations/${conversationId}`,
      {
        method: "DELETE"
      }
    );
    if (response.status === 204 || response.status === 200) {
      return true;
    }
    return false;
  } catch (e) {
    return false;
  }
};
var uploadClaudeAttachment = async (organizationId, file, fileName) => {
  const formData = new FormData();
  formData.append("file", file, fileName || file?.name || "");
  formData.append("orgUuid", organizationId);
  const response = await fetch("https://claude.ai/api/convert_document", {
    method: "POST",
    body: formData
  });
  if (response.status === 200) {
    const body = await response.json();
    if (body.extracted_content) {
      body.file_name = fileName || file?.name || body.file_name || "";
      return {
        success: true,
        data: body,
        error: ""
      };
    }
  }
  let errorMessage = "Upload failed.";
  if (response.status === 429) {
    errorMessage = "Exceeded file upload rate limit";
  }
  return {
    success: false,
    data: void 0,
    error: errorMessage
  };
};

// src/background/src/chat/ClaudeChat/claude/index.ts
var Claude = class {
  conversation;
  abortController;
  organizationId;
  attachments = [];
  constructor(organizationId) {
    this.organizationId = organizationId;
  }
  get conversationId() {
    return this.conversation?.uuid;
  }
  async createConversation(name) {
    if (!this.organizationId) {
      this.organizationId = await getClaudeOrganizationId();
    }
    if (this.organizationId) {
      this.conversation = await createClaudeConversation(
        this.organizationId,
        name
      );
    }
    return this.conversation?.uuid || "";
  }
  async sendMessage(text, options) {
    const { regenerate = false, onMessage } = options || {};
    let conversationId = this.conversation?.uuid;
    if (!conversationId || !this.organizationId) {
      conversationId = await this.createConversation();
      if (!conversationId || !this.organizationId) {
        onMessage?.({
          completion: "",
          log_id: "",
          messageLimit: {
            type: "within_limit"
          },
          model: "",
          stop: true,
          // stop_reason:
          //   'Please log into [Claude.ai](https://claude.ai/chats) and try again.',
          stop_reason: "UNAUTHORIZED"
        });
        return;
      }
      return;
    }
    this.abortController = new AbortController();
    const signal = this.abortController.signal;
    const apiHost = regenerate ? "https://claude.ai/api/retry_message" : "https://claude.ai/api/append_message";
    if (regenerate) {
      text = "";
    }
    await fetchSSE(apiHost, {
      signal,
      method: "POST",
      // provider: 'CLAUDE',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        attachments: this.attachments.map((attachment) => {
          const originalAttachment = cloneDeep_default(attachment);
          delete originalAttachment.id;
          return originalAttachment;
        }),
        completion: {
          incremental: true,
          model: "claude-2",
          prompt: text,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        },
        conversation_uuid: conversationId,
        organization_uuid: this.organizationId,
        text
      }),
      onMessage: (message) => {
        try {
          const data = JSON.parse(message);
          if (data.log_id) {
            onMessage?.(data);
          }
        } catch (e) {
        }
      }
    }).then(() => {
    }).catch((err) => {
      if (err?.message.includes("The user aborted a request.")) {
        onMessage?.({
          completion: "",
          log_id: "",
          messageLimit: {
            type: "within_limit"
          },
          model: "",
          stop: true,
          stop_reason: "The user aborted a request."
        });
        return;
      }
      try {
        const errorData = JSON.parse(err.message);
        const errorMessage = errorData?.error?.message || errorData?.message || "Network Error";
        onMessage?.({
          completion: "",
          log_id: "",
          messageLimit: {
            type: "within_limit"
          },
          model: "",
          stop: true,
          stop_reason: errorMessage
        });
      } catch (e) {
        onMessage?.({
          completion: "",
          log_id: "",
          messageLimit: {
            type: "within_limit"
          },
          model: "",
          stop: true,
          stop_reason: "Network Error"
        });
      }
    });
    this.resetAttachments();
  }
  abortSendMessage() {
    this.abortController?.abort();
  }
  async resetConversation() {
    if (this.conversation?.uuid && this.organizationId) {
      const result = await deleteClaudeConversation(
        this.organizationId,
        this.conversation.uuid
      );
    }
    this.conversation = void 0;
    return true;
  }
  async uploadAttachment(file, fileName) {
    if (!this.organizationId) {
      this.organizationId = await getClaudeOrganizationId();
      if (!this.organizationId) {
        return {
          success: false,
          error: "organization id not found",
          data: void 0
        };
      }
    }
    if (file.size > 10 * 1024 * 1024) {
      return {
        success: false,
        error: "file size too large",
        data: void 0
      };
    }
    const attachmentResult = await uploadClaudeAttachment(
      this.organizationId,
      file,
      fileName || file.name
    );
    if (attachmentResult.success && attachmentResult.data) {
      const attachment = attachmentResult.data;
      attachment.id = v4_default();
      this.attachments.push(attachment);
      return {
        success: true,
        error: void 0,
        data: attachment
      };
    } else {
      return {
        success: false,
        error: attachmentResult.error || "Upload failed.",
        data: void 0
      };
    }
  }
  resetAttachments() {
    this.attachments = [];
    return true;
  }
  removeAttachment(attachmentId) {
    const index = this.attachments.findIndex(
      (attachment) => attachment.id === attachmentId
    );
    if (index > -1) {
      this.attachments.splice(index, 1);
    }
    return true;
  }
};

// src/background/src/chat/ClaudeChat/index.ts
var import_webextension_polyfill8 = __toESM(require_browser_polyfill());
var cacheTokenKey = "CHROME_EXTENSION_LOCAL_STORAGE_CLAUDE_TOKEN_KEY";
var CLAUDE_CONVERSATION_NAME = "WebChatGPT";
var ClaudeChat = class extends BaseChat_default {
  claude;
  constructor() {
    super("ClaudeChat");
    this.claude = new Claude();
    this.status = "success";
  }
  async init() {
    this.log.info("init");
  }
  async preAuth() {
    this.active = true;
    const cache = await import_webextension_polyfill8.default.storage.local.get(cacheTokenKey);
    if (cache[cacheTokenKey]) {
      this.claude.organizationId = cache[cacheTokenKey];
    }
    this.status = this.claude.organizationId ? "success" : "needAuth";
  }
  async auth() {
    this.active = true;
    this.claude.organizationId = await getClaudeOrganizationId();
    if (this.claude.organizationId) {
      this.status = "success";
      await import_webextension_polyfill8.default.storage.local.set({
        [cacheTokenKey]: this.claude.organizationId
      });
      await this.updateClientStatus("success");
    } else {
      await import_webextension_polyfill8.default.tabs.create({
        url: "https://claude.ai/chats",
        active: true
      });
    }
  }
  async createConversation() {
    if (this.claude.conversationId) {
      return this.claude.conversationId;
    }
    const conversationId = await this.claude.createConversation(
      CLAUDE_CONVERSATION_NAME
    );
    if (this.claude.organizationId) {
      await import_webextension_polyfill8.default.storage.local.set({
        [cacheTokenKey]: this.claude.organizationId
      });
    } else {
      await import_webextension_polyfill8.default.storage.local.remove(cacheTokenKey);
      this.status = "needAuth";
      await this.updateClientStatus("needAuth");
    }
    return conversationId;
  }
  async askChatGPT(question, options, onMessage) {
    const { regenerate } = options || {};
    let partOfMessageText = "";
    this.log.info("ClaudeChat send");
    await this.claude.sendMessage(question, {
      regenerate,
      onMessage: (claudeMessage) => {
        if (!claudeMessage.stop) {
          partOfMessageText += claudeMessage.completion || "";
          onMessage?.({
            type: "message",
            done: false,
            error: "",
            data: {
              text: partOfMessageText,
              conversationId: this.claude.conversationId
            }
          });
        } else {
          if (claudeMessage.stop_reason === "stop_sequence") {
            onMessage?.({
              type: "message",
              done: true,
              error: "",
              data: {
                text: partOfMessageText,
                conversationId: this.claude.conversationId
              }
            });
          } else if (claudeMessage.stop_reason === "The user aborted a request.") {
            onMessage?.({
              type: "error",
              error: "manual aborted request.",
              done: true,
              data: { text: "", conversationId: this.claude.conversationId }
            });
          } else {
            onMessage?.({
              type: "error",
              done: true,
              error: claudeMessage.stop_reason || "Network Error",
              data: {
                text: partOfMessageText,
                conversationId: this.claude.conversationId
              }
            });
          }
        }
      }
    });
  }
  async abortTask(taskId) {
    this.claude.abortSendMessage();
    return true;
  }
  async removeConversation(conversationId) {
    await this.claude.resetConversation();
    if (this.claude.organizationId) {
      removeAllCacheClaudeConversation(
        this.claude.organizationId,
        CLAUDE_CONVERSATION_NAME
      ).then().catch();
    }
    return;
  }
};

// src/background/src/client/index.ts
var import_webextension_polyfill9 = __toESM(require_browser_polyfill());
var ClientMessageInit = () => {
  const isManifestV22 = isManifestVersionV2();
  createBackgroundMessageListener(async (runtime, event, data, sender) => {
    if (runtime === "client") {
      switch (event) {
        case "Client_openUrl":
          {
            const { url, key, query = "" } = data;
            if (url) {
              await import_webextension_polyfill9.default.tabs.create({
                url
              });
              return {
                data: true,
                success: true,
                message: "ok"
              };
            } else if (key) {
              if (key === "current_page") {
                if (sender.tab?.id) {
                  await import_webextension_polyfill9.default.tabs.update(sender.tab.id, {
                    active: true
                  });
                }
              } else if (key === "shortcuts") {
                if (isManifestV22) {
                  await import_webextension_polyfill9.default.runtime.openOptionsPage();
                } else {
                  await import_webextension_polyfill9.default.tabs.create({
                    url: "chrome://extensions/shortcuts",
                    active: true
                  });
                }
              } else if (key === "options") {
                if (isManifestV22) {
                  await import_webextension_polyfill9.default.runtime.openOptionsPage();
                } else {
                  await createChromeExtensionOptionsPage(query);
                }
              } else if (key === "manage_extension") {
                if (isManifestV22) {
                  await import_webextension_polyfill9.default.runtime.openOptionsPage();
                } else {
                  await import_webextension_polyfill9.default.tabs.create({
                    url: `chrome://extensions/?id=${import_webextension_polyfill9.default.runtime.id}`,
                    active: true
                  });
                }
              }
              return {
                data: true,
                success: true,
                message: "ok"
              };
            }
          }
          break;
        case "Client_restartApp":
          {
            await backgroundRestartChromeExtension();
            return {
              data: true,
              success: true,
              message: "ok"
            };
          }
          break;
        case "Client_getChromeExtensionCommands":
          {
            const commands = await import_webextension_polyfill9.default.commands.getAll() || [];
            return {
              data: commands,
              success: true,
              message: "ok"
            };
          }
          break;
        default:
          break;
      }
    }
    return void 0;
  });
};

// src/background/bg.ts
var isManifestV2 = isManifestVersionV2();
import_webextension_polyfill10.default.runtime.onInstalled.addListener(async (object) => {
  if (object.reason === "install") {
    openChatGPTWebpage();
    openInstallPage();
  }
});
import_webextension_polyfill10.default.runtime.setUninstallURL(
  "https://tools.zmo.ai/webchatgpt/uninstall?from=crx"
);
function openChatGPTWebpage() {
  if (APP_IS_PROD) {
    import_webextension_polyfill10.default.tabs.create({
      url: "https://chat.openai.com"
    });
  } else {
    import_webextension_polyfill10.default.runtime.openOptionsPage();
  }
}
function openInstallPage() {
  import_webextension_polyfill10.default.tabs.create({
    active: false,
    url: "https://tools.zmo.ai/webchatgpt/install"
  });
}
if (isManifestV2) {
  import_webextension_polyfill10.default.browserAction.onClicked.addListener(openChatGPTWebpage);
} else {
  import_webextension_polyfill10.default.action.onClicked.addListener(openChatGPTWebpage);
}
import_webextension_polyfill10.default.commands.onCommand.addListener(async (command) => {
  if (command === "toggle-web-access") {
    import_webextension_polyfill10.default.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
      const tab = tabs[0];
      if (tab.url && tab.id && tab.url.startsWith("https://chat.openai.com/")) {
        import_webextension_polyfill10.default.tabs.sendMessage(tab.id, "toggle-web-access");
      }
    });
  }
});
import_webextension_polyfill10.default.runtime.onMessage.addListener((message) => {
  if (message.type === "get_search_results") {
    return getHtml(message.search);
  }
  if (message.type === "get_webpage_text") {
    return getWebpageTitleAndText2(message.url, message.html);
  }
  if (message.type === "open_page") {
    import_webextension_polyfill10.default.tabs.create({
      url: message.url,
      active: message.active
    });
    return true;
  }
});
import_webextension_polyfill10.default.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url && tab.url.includes("google")) {
    cacheCrxInfo();
  }
});
APP_IS_PROD && cacheCrxInfo();
ClientMessageInit();
ShortcutMessageInit();
AuthStatusMessageInit();
ChatGPTMessageInit();
SearchAdMessageInit();
var chatSystem = new ChatSystem();
var openAIChatAdapter = new ChatAdapter(
  new OpenAIChatProvider(new OpenAIChat())
);
var bardChatAdapter = new ChatAdapter(new BardChatProvider(new BardChat()));
var bingChatAdapter = new ChatAdapter(new BingChatProvider(new BingChat()));
var claudeChatAdapter = new ChatAdapter(
  new ClaudeChatProvider(new ClaudeChat())
);
chatSystem.addAdapter(AI_PROVIDER_MAP.OPENAI, openAIChatAdapter);
chatSystem.addAdapter(AI_PROVIDER_MAP.BING, bingChatAdapter);
chatSystem.addAdapter(AI_PROVIDER_MAP.BARD, bardChatAdapter);
chatSystem.addAdapter(AI_PROVIDER_MAP.CLAUDE, claudeChatAdapter);
/*! Bundled license information:

chnl/dist/channel.cjs.js:
  (* chnl v1.2.0 by Vitaliy Potapov @preserve *)
*/
