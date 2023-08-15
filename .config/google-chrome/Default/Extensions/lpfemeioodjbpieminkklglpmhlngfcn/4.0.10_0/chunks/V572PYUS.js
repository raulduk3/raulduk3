import {
  v4_default
} from "./AISGHLQV.js";
import {
  __commonJS,
  __toESM
} from "./ERZ5UWI7.js";

// node_modules/.pnpm/registry.npmmirror.com+base64-js@1.5.1/node_modules/base64-js/index.js
var require_base64_js = __commonJS({
  "node_modules/.pnpm/registry.npmmirror.com+base64-js@1.5.1/node_modules/base64-js/index.js"(exports) {
    "use strict";
    exports.byteLength = byteLength;
    exports.toByteArray = toByteArray;
    exports.fromByteArray = fromByteArray;
    var lookup = [];
    var revLookup = [];
    var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
    var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (i = 0, len = code.length; i < len; ++i) {
      lookup[i] = code[i];
      revLookup[code.charCodeAt(i)] = i;
    }
    var i;
    var len;
    revLookup["-".charCodeAt(0)] = 62;
    revLookup["_".charCodeAt(0)] = 63;
    function getLens(b64) {
      var len2 = b64.length;
      if (len2 % 4 > 0) {
        throw new Error("Invalid string. Length must be a multiple of 4");
      }
      var validLen = b64.indexOf("=");
      if (validLen === -1)
        validLen = len2;
      var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
      return [validLen, placeHoldersLen];
    }
    function byteLength(b64) {
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function _byteLength(b64, validLen, placeHoldersLen) {
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function toByteArray(b64) {
      var tmp;
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
      var curByte = 0;
      var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
      var i2;
      for (i2 = 0; i2 < len2; i2 += 4) {
        tmp = revLookup[b64.charCodeAt(i2)] << 18 | revLookup[b64.charCodeAt(i2 + 1)] << 12 | revLookup[b64.charCodeAt(i2 + 2)] << 6 | revLookup[b64.charCodeAt(i2 + 3)];
        arr[curByte++] = tmp >> 16 & 255;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i2)] << 2 | revLookup[b64.charCodeAt(i2 + 1)] >> 4;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i2)] << 10 | revLookup[b64.charCodeAt(i2 + 1)] << 4 | revLookup[b64.charCodeAt(i2 + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      return arr;
    }
    function tripletToBase64(num) {
      return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
    }
    function encodeChunk(uint8, start, end) {
      var tmp;
      var output = [];
      for (var i2 = start; i2 < end; i2 += 3) {
        tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255);
        output.push(tripletToBase64(tmp));
      }
      return output.join("");
    }
    function fromByteArray(uint8) {
      var tmp;
      var len2 = uint8.length;
      var extraBytes = len2 % 3;
      var parts = [];
      var maxChunkLength = 16383;
      for (var i2 = 0, len22 = len2 - extraBytes; i2 < len22; i2 += maxChunkLength) {
        parts.push(encodeChunk(uint8, i2, i2 + maxChunkLength > len22 ? len22 : i2 + maxChunkLength));
      }
      if (extraBytes === 1) {
        tmp = uint8[len2 - 1];
        parts.push(
          lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "=="
        );
      } else if (extraBytes === 2) {
        tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
        parts.push(
          lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "="
        );
      }
      return parts.join("");
    }
  }
});

// node_modules/.pnpm/registry.npmmirror.com+retry@0.13.1/node_modules/retry/lib/retry_operation.js
var require_retry_operation = __commonJS({
  "node_modules/.pnpm/registry.npmmirror.com+retry@0.13.1/node_modules/retry/lib/retry_operation.js"(exports, module) {
    function RetryOperation(timeouts, options) {
      if (typeof options === "boolean") {
        options = { forever: options };
      }
      this._originalTimeouts = JSON.parse(JSON.stringify(timeouts));
      this._timeouts = timeouts;
      this._options = options || {};
      this._maxRetryTime = options && options.maxRetryTime || Infinity;
      this._fn = null;
      this._errors = [];
      this._attempts = 1;
      this._operationTimeout = null;
      this._operationTimeoutCb = null;
      this._timeout = null;
      this._operationStart = null;
      this._timer = null;
      if (this._options.forever) {
        this._cachedTimeouts = this._timeouts.slice(0);
      }
    }
    module.exports = RetryOperation;
    RetryOperation.prototype.reset = function() {
      this._attempts = 1;
      this._timeouts = this._originalTimeouts.slice(0);
    };
    RetryOperation.prototype.stop = function() {
      if (this._timeout) {
        clearTimeout(this._timeout);
      }
      if (this._timer) {
        clearTimeout(this._timer);
      }
      this._timeouts = [];
      this._cachedTimeouts = null;
    };
    RetryOperation.prototype.retry = function(err) {
      if (this._timeout) {
        clearTimeout(this._timeout);
      }
      if (!err) {
        return false;
      }
      var currentTime = new Date().getTime();
      if (err && currentTime - this._operationStart >= this._maxRetryTime) {
        this._errors.push(err);
        this._errors.unshift(new Error("RetryOperation timeout occurred"));
        return false;
      }
      this._errors.push(err);
      var timeout = this._timeouts.shift();
      if (timeout === void 0) {
        if (this._cachedTimeouts) {
          this._errors.splice(0, this._errors.length - 1);
          timeout = this._cachedTimeouts.slice(-1);
        } else {
          return false;
        }
      }
      var self = this;
      this._timer = setTimeout(function() {
        self._attempts++;
        if (self._operationTimeoutCb) {
          self._timeout = setTimeout(function() {
            self._operationTimeoutCb(self._attempts);
          }, self._operationTimeout);
          if (self._options.unref) {
            self._timeout.unref();
          }
        }
        self._fn(self._attempts);
      }, timeout);
      if (this._options.unref) {
        this._timer.unref();
      }
      return true;
    };
    RetryOperation.prototype.attempt = function(fn, timeoutOps) {
      this._fn = fn;
      if (timeoutOps) {
        if (timeoutOps.timeout) {
          this._operationTimeout = timeoutOps.timeout;
        }
        if (timeoutOps.cb) {
          this._operationTimeoutCb = timeoutOps.cb;
        }
      }
      var self = this;
      if (this._operationTimeoutCb) {
        this._timeout = setTimeout(function() {
          self._operationTimeoutCb();
        }, self._operationTimeout);
      }
      this._operationStart = new Date().getTime();
      this._fn(this._attempts);
    };
    RetryOperation.prototype.try = function(fn) {
      this.attempt(fn);
    };
    RetryOperation.prototype.start = function(fn) {
      this.attempt(fn);
    };
    RetryOperation.prototype.start = RetryOperation.prototype.try;
    RetryOperation.prototype.errors = function() {
      return this._errors;
    };
    RetryOperation.prototype.attempts = function() {
      return this._attempts;
    };
    RetryOperation.prototype.mainError = function() {
      if (this._errors.length === 0) {
        return null;
      }
      var counts = {};
      var mainError = null;
      var mainErrorCount = 0;
      for (var i = 0; i < this._errors.length; i++) {
        var error = this._errors[i];
        var message = error.message;
        var count = (counts[message] || 0) + 1;
        counts[message] = count;
        if (count >= mainErrorCount) {
          mainError = error;
          mainErrorCount = count;
        }
      }
      return mainError;
    };
  }
});

// node_modules/.pnpm/registry.npmmirror.com+retry@0.13.1/node_modules/retry/lib/retry.js
var require_retry = __commonJS({
  "node_modules/.pnpm/registry.npmmirror.com+retry@0.13.1/node_modules/retry/lib/retry.js"(exports) {
    var RetryOperation = require_retry_operation();
    exports.operation = function(options) {
      var timeouts = exports.timeouts(options);
      return new RetryOperation(timeouts, {
        forever: options && (options.forever || options.retries === Infinity),
        unref: options && options.unref,
        maxRetryTime: options && options.maxRetryTime
      });
    };
    exports.timeouts = function(options) {
      if (options instanceof Array) {
        return [].concat(options);
      }
      var opts = {
        retries: 10,
        factor: 2,
        minTimeout: 1 * 1e3,
        maxTimeout: Infinity,
        randomize: false
      };
      for (var key in options) {
        opts[key] = options[key];
      }
      if (opts.minTimeout > opts.maxTimeout) {
        throw new Error("minTimeout is greater than maxTimeout");
      }
      var timeouts = [];
      for (var i = 0; i < opts.retries; i++) {
        timeouts.push(this.createTimeout(i, opts));
      }
      if (options && options.forever && !timeouts.length) {
        timeouts.push(this.createTimeout(i, opts));
      }
      timeouts.sort(function(a, b) {
        return a - b;
      });
      return timeouts;
    };
    exports.createTimeout = function(attempt, opts) {
      var random = opts.randomize ? Math.random() + 1 : 1;
      var timeout = Math.round(random * Math.max(opts.minTimeout, 1) * Math.pow(opts.factor, attempt));
      timeout = Math.min(timeout, opts.maxTimeout);
      return timeout;
    };
    exports.wrap = function(obj, options, methods) {
      if (options instanceof Array) {
        methods = options;
        options = null;
      }
      if (!methods) {
        methods = [];
        for (var key in obj) {
          if (typeof obj[key] === "function") {
            methods.push(key);
          }
        }
      }
      for (var i = 0; i < methods.length; i++) {
        var method = methods[i];
        var original = obj[method];
        obj[method] = function retryWrapper(original2) {
          var op = exports.operation(options);
          var args = Array.prototype.slice.call(arguments, 1);
          var callback = args.pop();
          args.push(function(err) {
            if (op.retry(err)) {
              return;
            }
            if (err) {
              arguments[0] = op.mainError();
            }
            callback.apply(this, arguments);
          });
          op.attempt(function() {
            original2.apply(obj, args);
          });
        }.bind(obj, original);
        obj[method].options = options;
      }
    };
  }
});

// node_modules/.pnpm/registry.npmmirror.com+retry@0.13.1/node_modules/retry/index.js
var require_retry2 = __commonJS({
  "node_modules/.pnpm/registry.npmmirror.com+retry@0.13.1/node_modules/retry/index.js"(exports, module) {
    module.exports = require_retry();
  }
});

// node_modules/.pnpm/registry.npmmirror.com+p-retry@4.6.2/node_modules/p-retry/index.js
var require_p_retry = __commonJS({
  "node_modules/.pnpm/registry.npmmirror.com+p-retry@4.6.2/node_modules/p-retry/index.js"(exports, module) {
    "use strict";
    var retry = require_retry2();
    var networkErrorMsgs = [
      "Failed to fetch",
      // Chrome
      "NetworkError when attempting to fetch resource.",
      // Firefox
      "The Internet connection appears to be offline.",
      // Safari
      "Network request failed"
      // `cross-fetch`
    ];
    var AbortError = class extends Error {
      constructor(message) {
        super();
        if (message instanceof Error) {
          this.originalError = message;
          ({ message } = message);
        } else {
          this.originalError = new Error(message);
          this.originalError.stack = this.stack;
        }
        this.name = "AbortError";
        this.message = message;
      }
    };
    var decorateErrorWithCounts = (error, attemptNumber, options) => {
      const retriesLeft = options.retries - (attemptNumber - 1);
      error.attemptNumber = attemptNumber;
      error.retriesLeft = retriesLeft;
      return error;
    };
    var isNetworkError = (errorMessage) => networkErrorMsgs.includes(errorMessage);
    var pRetry2 = (input, options) => new Promise((resolve, reject) => {
      options = {
        onFailedAttempt: () => {
        },
        retries: 10,
        ...options
      };
      const operation = retry.operation(options);
      operation.attempt(async (attemptNumber) => {
        try {
          resolve(await input(attemptNumber));
        } catch (error) {
          if (!(error instanceof Error)) {
            reject(new TypeError(`Non-error was thrown: "${error}". You should only throw errors.`));
            return;
          }
          if (error instanceof AbortError) {
            operation.stop();
            reject(error.originalError);
          } else if (error instanceof TypeError && !isNetworkError(error.message)) {
            operation.stop();
            reject(error);
          } else {
            decorateErrorWithCounts(error, attemptNumber, options);
            try {
              await options.onFailedAttempt(error);
            } catch (error2) {
              reject(error2);
              return;
            }
            if (!operation.retry(error)) {
              reject(operation.mainError());
            }
          }
        }
      });
    });
    module.exports = pRetry2;
    module.exports.default = pRetry2;
    module.exports.AbortError = AbortError;
  }
});

// node_modules/.pnpm/registry.npmmirror.com+eventemitter3@4.0.7/node_modules/eventemitter3/index.js
var require_eventemitter3 = __commonJS({
  "node_modules/.pnpm/registry.npmmirror.com+eventemitter3@4.0.7/node_modules/eventemitter3/index.js"(exports, module) {
    "use strict";
    var has = Object.prototype.hasOwnProperty;
    var prefix = "~";
    function Events() {
    }
    if (Object.create) {
      Events.prototype = /* @__PURE__ */ Object.create(null);
      if (!new Events().__proto__)
        prefix = false;
    }
    function EE(fn, context, once) {
      this.fn = fn;
      this.context = context;
      this.once = once || false;
    }
    function addListener(emitter, event, fn, context, once) {
      if (typeof fn !== "function") {
        throw new TypeError("The listener must be a function");
      }
      var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
      if (!emitter._events[evt])
        emitter._events[evt] = listener, emitter._eventsCount++;
      else if (!emitter._events[evt].fn)
        emitter._events[evt].push(listener);
      else
        emitter._events[evt] = [emitter._events[evt], listener];
      return emitter;
    }
    function clearEvent(emitter, evt) {
      if (--emitter._eventsCount === 0)
        emitter._events = new Events();
      else
        delete emitter._events[evt];
    }
    function EventEmitter() {
      this._events = new Events();
      this._eventsCount = 0;
    }
    EventEmitter.prototype.eventNames = function eventNames() {
      var names = [], events, name;
      if (this._eventsCount === 0)
        return names;
      for (name in events = this._events) {
        if (has.call(events, name))
          names.push(prefix ? name.slice(1) : name);
      }
      if (Object.getOwnPropertySymbols) {
        return names.concat(Object.getOwnPropertySymbols(events));
      }
      return names;
    };
    EventEmitter.prototype.listeners = function listeners(event) {
      var evt = prefix ? prefix + event : event, handlers = this._events[evt];
      if (!handlers)
        return [];
      if (handlers.fn)
        return [handlers.fn];
      for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
        ee[i] = handlers[i].fn;
      }
      return ee;
    };
    EventEmitter.prototype.listenerCount = function listenerCount(event) {
      var evt = prefix ? prefix + event : event, listeners = this._events[evt];
      if (!listeners)
        return 0;
      if (listeners.fn)
        return 1;
      return listeners.length;
    };
    EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt])
        return false;
      var listeners = this._events[evt], len = arguments.length, args, i;
      if (listeners.fn) {
        if (listeners.once)
          this.removeListener(event, listeners.fn, void 0, true);
        switch (len) {
          case 1:
            return listeners.fn.call(listeners.context), true;
          case 2:
            return listeners.fn.call(listeners.context, a1), true;
          case 3:
            return listeners.fn.call(listeners.context, a1, a2), true;
          case 4:
            return listeners.fn.call(listeners.context, a1, a2, a3), true;
          case 5:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
          case 6:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }
        for (i = 1, args = new Array(len - 1); i < len; i++) {
          args[i - 1] = arguments[i];
        }
        listeners.fn.apply(listeners.context, args);
      } else {
        var length = listeners.length, j;
        for (i = 0; i < length; i++) {
          if (listeners[i].once)
            this.removeListener(event, listeners[i].fn, void 0, true);
          switch (len) {
            case 1:
              listeners[i].fn.call(listeners[i].context);
              break;
            case 2:
              listeners[i].fn.call(listeners[i].context, a1);
              break;
            case 3:
              listeners[i].fn.call(listeners[i].context, a1, a2);
              break;
            case 4:
              listeners[i].fn.call(listeners[i].context, a1, a2, a3);
              break;
            default:
              if (!args)
                for (j = 1, args = new Array(len - 1); j < len; j++) {
                  args[j - 1] = arguments[j];
                }
              listeners[i].fn.apply(listeners[i].context, args);
          }
        }
      }
      return true;
    };
    EventEmitter.prototype.on = function on(event, fn, context) {
      return addListener(this, event, fn, context, false);
    };
    EventEmitter.prototype.once = function once(event, fn, context) {
      return addListener(this, event, fn, context, true);
    };
    EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt])
        return this;
      if (!fn) {
        clearEvent(this, evt);
        return this;
      }
      var listeners = this._events[evt];
      if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
          clearEvent(this, evt);
        }
      } else {
        for (var i = 0, events = [], length = listeners.length; i < length; i++) {
          if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
            events.push(listeners[i]);
          }
        }
        if (events.length)
          this._events[evt] = events.length === 1 ? events[0] : events;
        else
          clearEvent(this, evt);
      }
      return this;
    };
    EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
      var evt;
      if (event) {
        evt = prefix ? prefix + event : event;
        if (this._events[evt])
          clearEvent(this, evt);
      } else {
        this._events = new Events();
        this._eventsCount = 0;
      }
      return this;
    };
    EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
    EventEmitter.prototype.addListener = EventEmitter.prototype.on;
    EventEmitter.prefixed = prefix;
    EventEmitter.EventEmitter = EventEmitter;
    if ("undefined" !== typeof module) {
      module.exports = EventEmitter;
    }
  }
});

// node_modules/.pnpm/registry.npmmirror.com+p-finally@1.0.0/node_modules/p-finally/index.js
var require_p_finally = __commonJS({
  "node_modules/.pnpm/registry.npmmirror.com+p-finally@1.0.0/node_modules/p-finally/index.js"(exports, module) {
    "use strict";
    module.exports = (promise, onFinally) => {
      onFinally = onFinally || (() => {
      });
      return promise.then(
        (val) => new Promise((resolve) => {
          resolve(onFinally());
        }).then(() => val),
        (err) => new Promise((resolve) => {
          resolve(onFinally());
        }).then(() => {
          throw err;
        })
      );
    };
  }
});

// node_modules/.pnpm/registry.npmmirror.com+p-timeout@3.2.0/node_modules/p-timeout/index.js
var require_p_timeout = __commonJS({
  "node_modules/.pnpm/registry.npmmirror.com+p-timeout@3.2.0/node_modules/p-timeout/index.js"(exports, module) {
    "use strict";
    var pFinally = require_p_finally();
    var TimeoutError = class extends Error {
      constructor(message) {
        super(message);
        this.name = "TimeoutError";
      }
    };
    var pTimeout = (promise, milliseconds, fallback) => new Promise((resolve, reject) => {
      if (typeof milliseconds !== "number" || milliseconds < 0) {
        throw new TypeError("Expected `milliseconds` to be a positive number");
      }
      if (milliseconds === Infinity) {
        resolve(promise);
        return;
      }
      const timer = setTimeout(() => {
        if (typeof fallback === "function") {
          try {
            resolve(fallback());
          } catch (error) {
            reject(error);
          }
          return;
        }
        const message = typeof fallback === "string" ? fallback : `Promise timed out after ${milliseconds} milliseconds`;
        const timeoutError = fallback instanceof Error ? fallback : new TimeoutError(message);
        if (typeof promise.cancel === "function") {
          promise.cancel();
        }
        reject(timeoutError);
      }, milliseconds);
      pFinally(
        // eslint-disable-next-line promise/prefer-await-to-then
        promise.then(resolve, reject),
        () => {
          clearTimeout(timer);
        }
      );
    });
    module.exports = pTimeout;
    module.exports.default = pTimeout;
    module.exports.TimeoutError = TimeoutError;
  }
});

// node_modules/.pnpm/registry.npmmirror.com+p-queue@6.6.2/node_modules/p-queue/dist/lower-bound.js
var require_lower_bound = __commonJS({
  "node_modules/.pnpm/registry.npmmirror.com+p-queue@6.6.2/node_modules/p-queue/dist/lower-bound.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function lowerBound(array, value, comparator) {
      let first = 0;
      let count = array.length;
      while (count > 0) {
        const step = count / 2 | 0;
        let it = first + step;
        if (comparator(array[it], value) <= 0) {
          first = ++it;
          count -= step + 1;
        } else {
          count = step;
        }
      }
      return first;
    }
    exports.default = lowerBound;
  }
});

// node_modules/.pnpm/registry.npmmirror.com+p-queue@6.6.2/node_modules/p-queue/dist/priority-queue.js
var require_priority_queue = __commonJS({
  "node_modules/.pnpm/registry.npmmirror.com+p-queue@6.6.2/node_modules/p-queue/dist/priority-queue.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var lower_bound_1 = require_lower_bound();
    var PriorityQueue = class {
      constructor() {
        this._queue = [];
      }
      enqueue(run, options) {
        options = Object.assign({ priority: 0 }, options);
        const element = {
          priority: options.priority,
          run
        };
        if (this.size && this._queue[this.size - 1].priority >= options.priority) {
          this._queue.push(element);
          return;
        }
        const index = lower_bound_1.default(this._queue, element, (a, b) => b.priority - a.priority);
        this._queue.splice(index, 0, element);
      }
      dequeue() {
        const item = this._queue.shift();
        return item === null || item === void 0 ? void 0 : item.run;
      }
      filter(options) {
        return this._queue.filter((element) => element.priority === options.priority).map((element) => element.run);
      }
      get size() {
        return this._queue.length;
      }
    };
    exports.default = PriorityQueue;
  }
});

// node_modules/.pnpm/registry.npmmirror.com+p-queue@6.6.2/node_modules/p-queue/dist/index.js
var require_dist = __commonJS({
  "node_modules/.pnpm/registry.npmmirror.com+p-queue@6.6.2/node_modules/p-queue/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EventEmitter = require_eventemitter3();
    var p_timeout_1 = require_p_timeout();
    var priority_queue_1 = require_priority_queue();
    var empty = () => {
    };
    var timeoutError = new p_timeout_1.TimeoutError();
    var PQueue = class extends EventEmitter {
      constructor(options) {
        var _a, _b, _c, _d;
        super();
        this._intervalCount = 0;
        this._intervalEnd = 0;
        this._pendingCount = 0;
        this._resolveEmpty = empty;
        this._resolveIdle = empty;
        options = Object.assign({ carryoverConcurrencyCount: false, intervalCap: Infinity, interval: 0, concurrency: Infinity, autoStart: true, queueClass: priority_queue_1.default }, options);
        if (!(typeof options.intervalCap === "number" && options.intervalCap >= 1)) {
          throw new TypeError(`Expected \`intervalCap\` to be a number from 1 and up, got \`${(_b = (_a = options.intervalCap) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : ""}\` (${typeof options.intervalCap})`);
        }
        if (options.interval === void 0 || !(Number.isFinite(options.interval) && options.interval >= 0)) {
          throw new TypeError(`Expected \`interval\` to be a finite number >= 0, got \`${(_d = (_c = options.interval) === null || _c === void 0 ? void 0 : _c.toString()) !== null && _d !== void 0 ? _d : ""}\` (${typeof options.interval})`);
        }
        this._carryoverConcurrencyCount = options.carryoverConcurrencyCount;
        this._isIntervalIgnored = options.intervalCap === Infinity || options.interval === 0;
        this._intervalCap = options.intervalCap;
        this._interval = options.interval;
        this._queue = new options.queueClass();
        this._queueClass = options.queueClass;
        this.concurrency = options.concurrency;
        this._timeout = options.timeout;
        this._throwOnTimeout = options.throwOnTimeout === true;
        this._isPaused = options.autoStart === false;
      }
      get _doesIntervalAllowAnother() {
        return this._isIntervalIgnored || this._intervalCount < this._intervalCap;
      }
      get _doesConcurrentAllowAnother() {
        return this._pendingCount < this._concurrency;
      }
      _next() {
        this._pendingCount--;
        this._tryToStartAnother();
        this.emit("next");
      }
      _resolvePromises() {
        this._resolveEmpty();
        this._resolveEmpty = empty;
        if (this._pendingCount === 0) {
          this._resolveIdle();
          this._resolveIdle = empty;
          this.emit("idle");
        }
      }
      _onResumeInterval() {
        this._onInterval();
        this._initializeIntervalIfNeeded();
        this._timeoutId = void 0;
      }
      _isIntervalPaused() {
        const now = Date.now();
        if (this._intervalId === void 0) {
          const delay = this._intervalEnd - now;
          if (delay < 0) {
            this._intervalCount = this._carryoverConcurrencyCount ? this._pendingCount : 0;
          } else {
            if (this._timeoutId === void 0) {
              this._timeoutId = setTimeout(() => {
                this._onResumeInterval();
              }, delay);
            }
            return true;
          }
        }
        return false;
      }
      _tryToStartAnother() {
        if (this._queue.size === 0) {
          if (this._intervalId) {
            clearInterval(this._intervalId);
          }
          this._intervalId = void 0;
          this._resolvePromises();
          return false;
        }
        if (!this._isPaused) {
          const canInitializeInterval = !this._isIntervalPaused();
          if (this._doesIntervalAllowAnother && this._doesConcurrentAllowAnother) {
            const job = this._queue.dequeue();
            if (!job) {
              return false;
            }
            this.emit("active");
            job();
            if (canInitializeInterval) {
              this._initializeIntervalIfNeeded();
            }
            return true;
          }
        }
        return false;
      }
      _initializeIntervalIfNeeded() {
        if (this._isIntervalIgnored || this._intervalId !== void 0) {
          return;
        }
        this._intervalId = setInterval(() => {
          this._onInterval();
        }, this._interval);
        this._intervalEnd = Date.now() + this._interval;
      }
      _onInterval() {
        if (this._intervalCount === 0 && this._pendingCount === 0 && this._intervalId) {
          clearInterval(this._intervalId);
          this._intervalId = void 0;
        }
        this._intervalCount = this._carryoverConcurrencyCount ? this._pendingCount : 0;
        this._processQueue();
      }
      /**
      Executes all queued functions until it reaches the limit.
      */
      _processQueue() {
        while (this._tryToStartAnother()) {
        }
      }
      get concurrency() {
        return this._concurrency;
      }
      set concurrency(newConcurrency) {
        if (!(typeof newConcurrency === "number" && newConcurrency >= 1)) {
          throw new TypeError(`Expected \`concurrency\` to be a number from 1 and up, got \`${newConcurrency}\` (${typeof newConcurrency})`);
        }
        this._concurrency = newConcurrency;
        this._processQueue();
      }
      /**
      Adds a sync or async task to the queue. Always returns a promise.
      */
      async add(fn, options = {}) {
        return new Promise((resolve, reject) => {
          const run = async () => {
            this._pendingCount++;
            this._intervalCount++;
            try {
              const operation = this._timeout === void 0 && options.timeout === void 0 ? fn() : p_timeout_1.default(Promise.resolve(fn()), options.timeout === void 0 ? this._timeout : options.timeout, () => {
                if (options.throwOnTimeout === void 0 ? this._throwOnTimeout : options.throwOnTimeout) {
                  reject(timeoutError);
                }
                return void 0;
              });
              resolve(await operation);
            } catch (error) {
              reject(error);
            }
            this._next();
          };
          this._queue.enqueue(run, options);
          this._tryToStartAnother();
          this.emit("add");
        });
      }
      /**
          Same as `.add()`, but accepts an array of sync or async functions.
      
          @returns A promise that resolves when all functions are resolved.
          */
      async addAll(functions, options) {
        return Promise.all(functions.map(async (function_) => this.add(function_, options)));
      }
      /**
      Start (or resume) executing enqueued tasks within concurrency limit. No need to call this if queue is not paused (via `options.autoStart = false` or by `.pause()` method.)
      */
      start() {
        if (!this._isPaused) {
          return this;
        }
        this._isPaused = false;
        this._processQueue();
        return this;
      }
      /**
      Put queue execution on hold.
      */
      pause() {
        this._isPaused = true;
      }
      /**
      Clear the queue.
      */
      clear() {
        this._queue = new this._queueClass();
      }
      /**
          Can be called multiple times. Useful if you for example add additional items at a later time.
      
          @returns A promise that settles when the queue becomes empty.
          */
      async onEmpty() {
        if (this._queue.size === 0) {
          return;
        }
        return new Promise((resolve) => {
          const existingResolve = this._resolveEmpty;
          this._resolveEmpty = () => {
            existingResolve();
            resolve();
          };
        });
      }
      /**
          The difference with `.onEmpty` is that `.onIdle` guarantees that all work from the queue has finished. `.onEmpty` merely signals that the queue is empty, but it could mean that some promises haven't completed yet.
      
          @returns A promise that settles when the queue becomes empty, and all promises have completed; `queue.size === 0 && queue.pending === 0`.
          */
      async onIdle() {
        if (this._pendingCount === 0 && this._queue.size === 0) {
          return;
        }
        return new Promise((resolve) => {
          const existingResolve = this._resolveIdle;
          this._resolveIdle = () => {
            existingResolve();
            resolve();
          };
        });
      }
      /**
      Size of the queue.
      */
      get size() {
        return this._queue.size;
      }
      /**
          Size of the queue, filtered by the given options.
      
          For example, this can be used to find the number of items remaining in the queue with a specific priority level.
          */
      sizeBy(options) {
        return this._queue.filter(options).length;
      }
      /**
      Number of pending promises.
      */
      get pending() {
        return this._pendingCount;
      }
      /**
      Whether the queue is currently paused.
      */
      get isPaused() {
        return this._isPaused;
      }
      get timeout() {
        return this._timeout;
      }
      /**
      Set the timeout for future operations.
      */
      set timeout(milliseconds) {
        this._timeout = milliseconds;
      }
    };
    exports.default = PQueue;
  }
});

// node_modules/.pnpm/registry.npmmirror.com+ansi-styles@5.2.0/node_modules/ansi-styles/index.js
var require_ansi_styles = __commonJS({
  "node_modules/.pnpm/registry.npmmirror.com+ansi-styles@5.2.0/node_modules/ansi-styles/index.js"(exports, module) {
    "use strict";
    var ANSI_BACKGROUND_OFFSET = 10;
    var wrapAnsi256 = (offset = 0) => (code) => `\x1B[${38 + offset};5;${code}m`;
    var wrapAnsi16m = (offset = 0) => (red, green, blue) => `\x1B[${38 + offset};2;${red};${green};${blue}m`;
    function assembleStyles() {
      const codes = /* @__PURE__ */ new Map();
      const styles2 = {
        modifier: {
          reset: [0, 0],
          // 21 isn't widely supported and 22 does the same thing
          bold: [1, 22],
          dim: [2, 22],
          italic: [3, 23],
          underline: [4, 24],
          overline: [53, 55],
          inverse: [7, 27],
          hidden: [8, 28],
          strikethrough: [9, 29]
        },
        color: {
          black: [30, 39],
          red: [31, 39],
          green: [32, 39],
          yellow: [33, 39],
          blue: [34, 39],
          magenta: [35, 39],
          cyan: [36, 39],
          white: [37, 39],
          // Bright color
          blackBright: [90, 39],
          redBright: [91, 39],
          greenBright: [92, 39],
          yellowBright: [93, 39],
          blueBright: [94, 39],
          magentaBright: [95, 39],
          cyanBright: [96, 39],
          whiteBright: [97, 39]
        },
        bgColor: {
          bgBlack: [40, 49],
          bgRed: [41, 49],
          bgGreen: [42, 49],
          bgYellow: [43, 49],
          bgBlue: [44, 49],
          bgMagenta: [45, 49],
          bgCyan: [46, 49],
          bgWhite: [47, 49],
          // Bright color
          bgBlackBright: [100, 49],
          bgRedBright: [101, 49],
          bgGreenBright: [102, 49],
          bgYellowBright: [103, 49],
          bgBlueBright: [104, 49],
          bgMagentaBright: [105, 49],
          bgCyanBright: [106, 49],
          bgWhiteBright: [107, 49]
        }
      };
      styles2.color.gray = styles2.color.blackBright;
      styles2.bgColor.bgGray = styles2.bgColor.bgBlackBright;
      styles2.color.grey = styles2.color.blackBright;
      styles2.bgColor.bgGrey = styles2.bgColor.bgBlackBright;
      for (const [groupName, group] of Object.entries(styles2)) {
        for (const [styleName, style] of Object.entries(group)) {
          styles2[styleName] = {
            open: `\x1B[${style[0]}m`,
            close: `\x1B[${style[1]}m`
          };
          group[styleName] = styles2[styleName];
          codes.set(style[0], style[1]);
        }
        Object.defineProperty(styles2, groupName, {
          value: group,
          enumerable: false
        });
      }
      Object.defineProperty(styles2, "codes", {
        value: codes,
        enumerable: false
      });
      styles2.color.close = "\x1B[39m";
      styles2.bgColor.close = "\x1B[49m";
      styles2.color.ansi256 = wrapAnsi256();
      styles2.color.ansi16m = wrapAnsi16m();
      styles2.bgColor.ansi256 = wrapAnsi256(ANSI_BACKGROUND_OFFSET);
      styles2.bgColor.ansi16m = wrapAnsi16m(ANSI_BACKGROUND_OFFSET);
      Object.defineProperties(styles2, {
        rgbToAnsi256: {
          value: (red, green, blue) => {
            if (red === green && green === blue) {
              if (red < 8) {
                return 16;
              }
              if (red > 248) {
                return 231;
              }
              return Math.round((red - 8) / 247 * 24) + 232;
            }
            return 16 + 36 * Math.round(red / 255 * 5) + 6 * Math.round(green / 255 * 5) + Math.round(blue / 255 * 5);
          },
          enumerable: false
        },
        hexToRgb: {
          value: (hex) => {
            const matches = /(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(hex.toString(16));
            if (!matches) {
              return [0, 0, 0];
            }
            let { colorString } = matches.groups;
            if (colorString.length === 3) {
              colorString = colorString.split("").map((character) => character + character).join("");
            }
            const integer = Number.parseInt(colorString, 16);
            return [
              integer >> 16 & 255,
              integer >> 8 & 255,
              integer & 255
            ];
          },
          enumerable: false
        },
        hexToAnsi256: {
          value: (hex) => styles2.rgbToAnsi256(...styles2.hexToRgb(hex)),
          enumerable: false
        }
      });
      return styles2;
    }
    Object.defineProperty(module, "exports", {
      enumerable: true,
      get: assembleStyles
    });
  }
});

// node_modules/.pnpm/registry.npmmirror.com+langchain@0.0.81_axios@1.3.3_cheerio@1.0.0-rc.12/node_modules/langchain/dist/util/env.js
var isBrowser = () => typeof window !== "undefined" && typeof window.document !== "undefined";
var isWebWorker = () => typeof globalThis === "object" && globalThis.constructor && globalThis.constructor.name === "DedicatedWorkerGlobalScope";
var isJsDom = () => typeof window !== "undefined" && window.name === "nodejs" || typeof navigator !== "undefined" && (navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom"));
var isDeno = () => typeof Deno !== "undefined";
var isNode = () => typeof process !== "undefined" && typeof process.versions !== "undefined" && typeof process.versions.node !== "undefined" && !isDeno();
var getEnv = () => {
  let env;
  if (isBrowser()) {
    env = "browser";
  } else if (isNode()) {
    env = "node";
  } else if (isWebWorker()) {
    env = "webworker";
  } else if (isJsDom()) {
    env = "jsdom";
  } else if (isDeno()) {
    env = "deno";
  } else {
    env = "other";
  }
  return env;
};
var runtimeEnvironment;
async function getRuntimeEnvironment() {
  if (runtimeEnvironment === void 0) {
    const env = getEnv();
    runtimeEnvironment = {
      library: "langchain-js",
      runtime: env
    };
  }
  return runtimeEnvironment;
}

// node_modules/.pnpm/registry.npmmirror.com+js-tiktoken@1.0.6/node_modules/js-tiktoken/dist/chunk-XXPGZHWZ.js
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// node_modules/.pnpm/registry.npmmirror.com+js-tiktoken@1.0.6/node_modules/js-tiktoken/dist/chunk-HORODD5P.js
var import_base64_js = __toESM(require_base64_js(), 1);
function bytePairMerge(piece, ranks) {
  let parts = Array.from(
    { length: piece.length },
    (_, i) => ({ start: i, end: i + 1 })
  );
  while (parts.length > 1) {
    let minRank = null;
    for (let i = 0; i < parts.length - 1; i++) {
      const slice = piece.slice(parts[i].start, parts[i + 1].end);
      const rank = ranks.get(slice.join(","));
      if (rank == null)
        continue;
      if (minRank == null || rank < minRank[0]) {
        minRank = [rank, i];
      }
    }
    if (minRank != null) {
      const i = minRank[1];
      parts[i] = { start: parts[i].start, end: parts[i + 1].end };
      parts.splice(i + 1, 1);
    } else {
      break;
    }
  }
  return parts;
}
function bytePairEncode(piece, ranks) {
  if (piece.length === 1)
    return [ranks.get(piece.join(","))];
  return bytePairMerge(piece, ranks).map((p) => ranks.get(piece.slice(p.start, p.end).join(","))).filter((x) => x != null);
}
function escapeRegex(str) {
  return str.replace(/[\\^$*+?.()|[\]{}]/g, "\\$&");
}
var _Tiktoken = class {
  /** @internal */
  specialTokens;
  /** @internal */
  inverseSpecialTokens;
  /** @internal */
  patStr;
  /** @internal */
  textEncoder = new TextEncoder();
  /** @internal */
  textDecoder = new TextDecoder("utf-8");
  /** @internal */
  rankMap = /* @__PURE__ */ new Map();
  /** @internal */
  textMap = /* @__PURE__ */ new Map();
  constructor(ranks, extendedSpecialTokens) {
    this.patStr = ranks.pat_str;
    const uncompressed = ranks.bpe_ranks.split("\n").filter(Boolean).reduce((memo, x) => {
      const [_, offsetStr, ...tokens] = x.split(" ");
      const offset = Number.parseInt(offsetStr, 10);
      tokens.forEach((token, i) => memo[token] = offset + i);
      return memo;
    }, {});
    for (const [token, rank] of Object.entries(uncompressed)) {
      const bytes = import_base64_js.default.toByteArray(token);
      this.rankMap.set(bytes.join(","), rank);
      this.textMap.set(rank, bytes);
    }
    this.specialTokens = { ...ranks.special_tokens, ...extendedSpecialTokens };
    this.inverseSpecialTokens = Object.entries(this.specialTokens).reduce((memo, [text, rank]) => {
      memo[rank] = this.textEncoder.encode(text);
      return memo;
    }, {});
  }
  encode(text, allowedSpecial = [], disallowedSpecial = "all") {
    const regexes = new RegExp(this.patStr, "ug");
    const specialRegex = _Tiktoken.specialTokenRegex(
      Object.keys(this.specialTokens)
    );
    const ret = [];
    const allowedSpecialSet = new Set(
      allowedSpecial === "all" ? Object.keys(this.specialTokens) : allowedSpecial
    );
    const disallowedSpecialSet = new Set(
      disallowedSpecial === "all" ? Object.keys(this.specialTokens).filter(
        (x) => !allowedSpecialSet.has(x)
      ) : disallowedSpecial
    );
    if (disallowedSpecialSet.size > 0) {
      const disallowedSpecialRegex = _Tiktoken.specialTokenRegex([
        ...disallowedSpecialSet
      ]);
      const specialMatch = text.match(disallowedSpecialRegex);
      if (specialMatch != null) {
        throw new Error(
          `The text contains a special token that is not allowed: ${specialMatch[0]}`
        );
      }
    }
    let start = 0;
    while (true) {
      let nextSpecial = null;
      let startFind = start;
      while (true) {
        specialRegex.lastIndex = startFind;
        nextSpecial = specialRegex.exec(text);
        if (nextSpecial == null || allowedSpecialSet.has(nextSpecial[0]))
          break;
        startFind = nextSpecial.index + 1;
      }
      const end = nextSpecial?.index ?? text.length;
      for (const match of text.substring(start, end).matchAll(regexes)) {
        const piece = this.textEncoder.encode(match[0]);
        const token2 = this.rankMap.get(piece.join(","));
        if (token2 != null) {
          ret.push(token2);
          continue;
        }
        ret.push(...bytePairEncode(piece, this.rankMap));
      }
      if (nextSpecial == null)
        break;
      let token = this.specialTokens[nextSpecial[0]];
      ret.push(token);
      start = nextSpecial.index + nextSpecial[0].length;
    }
    return ret;
  }
  decode(tokens) {
    const res = [];
    let length = 0;
    for (let i2 = 0; i2 < tokens.length; ++i2) {
      const token = tokens[i2];
      const bytes = this.textMap.get(token) ?? this.inverseSpecialTokens[token];
      if (bytes != null) {
        res.push(bytes);
        length += bytes.length;
      }
    }
    const mergedArray = new Uint8Array(length);
    let i = 0;
    for (const bytes of res) {
      mergedArray.set(bytes, i);
      i += bytes.length;
    }
    return this.textDecoder.decode(mergedArray);
  }
};
var Tiktoken = _Tiktoken;
__publicField(Tiktoken, "specialTokenRegex", (tokens) => {
  return new RegExp(tokens.map((i) => escapeRegex(i)).join("|"), "g");
});
function getEncodingNameForModel(model) {
  switch (model) {
    case "gpt2": {
      return "gpt2";
    }
    case "code-cushman-001":
    case "code-cushman-002":
    case "code-davinci-001":
    case "code-davinci-002":
    case "cushman-codex":
    case "davinci-codex":
    case "text-davinci-002":
    case "text-davinci-003": {
      return "p50k_base";
    }
    case "code-davinci-edit-001":
    case "text-davinci-edit-001": {
      return "p50k_edit";
    }
    case "ada":
    case "babbage":
    case "code-search-ada-code-001":
    case "code-search-babbage-code-001":
    case "curie":
    case "davinci":
    case "text-ada-001":
    case "text-babbage-001":
    case "text-curie-001":
    case "text-davinci-001":
    case "text-search-ada-doc-001":
    case "text-search-babbage-doc-001":
    case "text-search-curie-doc-001":
    case "text-search-davinci-doc-001":
    case "text-similarity-ada-001":
    case "text-similarity-babbage-001":
    case "text-similarity-curie-001":
    case "text-similarity-davinci-001": {
      return "r50k_base";
    }
    case "gpt-3.5-turbo-0301":
    case "gpt-3.5-turbo":
    case "gpt-4-0314":
    case "gpt-4-32k-0314":
    case "gpt-4-32k":
    case "gpt-4":
    case "text-embedding-ada-002": {
      return "cl100k_base";
    }
    default:
      throw new Error("Unknown model");
  }
}

// node_modules/.pnpm/registry.npmmirror.com+langchain@0.0.81_axios@1.3.3_cheerio@1.0.0-rc.12/node_modules/langchain/dist/util/async_caller.js
var import_p_retry = __toESM(require_p_retry(), 1);
var import_p_queue = __toESM(require_dist(), 1);
var STATUS_NO_RETRY = [
  400,
  401,
  403,
  404,
  405,
  406,
  407,
  408,
  409
  // Conflict
];
var AsyncCaller = class {
  constructor(params) {
    Object.defineProperty(this, "maxConcurrency", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "maxRetries", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "queue", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.maxConcurrency = params.maxConcurrency ?? Infinity;
    this.maxRetries = params.maxRetries ?? 6;
    const PQueue = "default" in import_p_queue.default ? import_p_queue.default.default : import_p_queue.default;
    this.queue = new PQueue({ concurrency: this.maxConcurrency });
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  call(callable, ...args) {
    return this.queue.add(() => (0, import_p_retry.default)(() => callable(...args).catch((error) => {
      if (error instanceof Error) {
        throw error;
      } else {
        throw new Error(error);
      }
    }), {
      onFailedAttempt(error) {
        if (error.message.startsWith("Cancel") || error.message.startsWith("TimeoutError") || error.message.startsWith("AbortError")) {
          throw error;
        }
        if (error?.code === "ECONNABORTED") {
          throw error;
        }
        const status = error?.response?.status;
        if (status && STATUS_NO_RETRY.includes(+status)) {
          throw error;
        }
      },
      retries: this.maxRetries,
      randomize: true
      // If needed we can change some of the defaults here,
      // but they're quite sensible.
    }), { throwOnTimeout: true });
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  callWithOptions(options, callable, ...args) {
    if (options.signal) {
      return Promise.race([
        this.call(callable, ...args),
        new Promise((_, reject) => {
          options.signal?.addEventListener("abort", () => {
            reject(new Error("AbortError"));
          });
        })
      ]);
    }
    return this.call(callable, ...args);
  }
  fetch(...args) {
    return this.call(() => fetch(...args).then((res) => res.ok ? res : Promise.reject(res)));
  }
};

// node_modules/.pnpm/registry.npmmirror.com+langchain@0.0.81_axios@1.3.3_cheerio@1.0.0-rc.12/node_modules/langchain/dist/util/tiktoken.js
var cache = {};
var caller = /* @__PURE__ */ new AsyncCaller({});
async function getEncoding(encoding, options) {
  if (!(encoding in cache)) {
    cache[encoding] = caller.fetch(`https://tiktoken.pages.dev/js/${encoding}.json`, {
      signal: options?.signal
    }).then((res) => res.json()).catch((e) => {
      delete cache[encoding];
      throw e;
    });
  }
  return new Tiktoken(await cache[encoding], options?.extendedSpecialTokens);
}
async function encodingForModel(model, options) {
  return getEncoding(getEncodingNameForModel(model), options);
}

// node_modules/.pnpm/registry.npmmirror.com+langchain@0.0.81_axios@1.3.3_cheerio@1.0.0-rc.12/node_modules/langchain/dist/base_language/count_tokens.js
var getModelNameForTiktoken = (modelName) => {
  if (modelName.startsWith("gpt-3.5-turbo-")) {
    return "gpt-3.5-turbo";
  }
  if (modelName.startsWith("gpt-4-32k-")) {
    return "gpt-4-32k";
  }
  if (modelName.startsWith("gpt-4-")) {
    return "gpt-4";
  }
  return modelName;
};
var getModelContextSize = (modelName) => {
  switch (getModelNameForTiktoken(modelName)) {
    case "gpt-3.5-turbo":
      return 4096;
    case "gpt-4-32k":
      return 32768;
    case "gpt-4":
      return 8192;
    case "text-davinci-003":
      return 4097;
    case "text-curie-001":
      return 2048;
    case "text-babbage-001":
      return 2048;
    case "text-ada-001":
      return 2048;
    case "code-davinci-002":
      return 8e3;
    case "code-cushman-001":
      return 2048;
    default:
      return 4097;
  }
};
var calculateMaxTokens = async ({ prompt, modelName }) => {
  let numTokens = Math.ceil(prompt.length / 4);
  try {
    numTokens = (await encodingForModel(modelName)).encode(prompt).length;
  } catch (error) {
  }
  const maxTokens = getModelContextSize(modelName);
  return maxTokens - numTokens;
};

// node_modules/.pnpm/registry.npmmirror.com+langchain@0.0.81_axios@1.3.3_cheerio@1.0.0-rc.12/node_modules/langchain/dist/base_language/index.js
var getVerbosity = () => false;
var BaseLangChain = class {
  constructor(params) {
    Object.defineProperty(this, "verbose", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "callbacks", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.verbose = params.verbose ?? getVerbosity();
    this.callbacks = params.callbacks;
  }
};
var BaseLanguageModel = class extends BaseLangChain {
  /**
   * Keys that the language model accepts as call options.
   */
  get callKeys() {
    return ["stop", "timeout", "signal"];
  }
  constructor(params) {
    super({
      verbose: params.verbose,
      callbacks: params.callbacks ?? params.callbackManager
    });
    Object.defineProperty(this, "caller", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_encoding", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.caller = new AsyncCaller(params ?? {});
  }
  async getNumTokens(text) {
    let numTokens = Math.ceil(text.length / 4);
    if (!this._encoding) {
      try {
        this._encoding = await encodingForModel("modelName" in this ? getModelNameForTiktoken(this.modelName) : "gpt2");
      } catch (error) {
      }
    }
    if (this._encoding) {
      numTokens = this._encoding.encode(text).length;
    }
    return numTokens;
  }
  /**
   * Get the identifying parameters of the LLM.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _identifyingParams() {
    return {};
  }
  /**
   * Return a json-like object representing this LLM.
   */
  serialize() {
    return {
      ...this._identifyingParams(),
      _type: this._llmType(),
      _model: this._modelType()
    };
  }
  /**
   * Load an LLM from a json-like object describing it.
   */
  static async deserialize(data) {
    const { _type, _model, ...rest } = data;
    if (_model && _model !== "base_chat_model") {
      throw new Error(`Cannot load LLM with model ${_model}`);
    }
    const Cls = {
      openai: (await import("./JSMRX4C4.js")).ChatOpenAI
    }[_type];
    if (Cls === void 0) {
      throw new Error(`Cannot load  LLM with type ${_type}`);
    }
    return new Cls(rest);
  }
};

// node_modules/.pnpm/registry.npmmirror.com+langchain@0.0.81_axios@1.3.3_cheerio@1.0.0-rc.12/node_modules/langchain/dist/memory/base.js
function getBufferString(messages, humanPrefix = "Human", aiPrefix = "AI") {
  const string_messages = [];
  for (const m of messages) {
    let role;
    if (m._getType() === "human") {
      role = humanPrefix;
    } else if (m._getType() === "ai") {
      role = aiPrefix;
    } else if (m._getType() === "system") {
      role = "System";
    } else if (m._getType() === "generic") {
      role = m.role;
    } else {
      throw new Error(`Got unsupported message type: ${m}`);
    }
    string_messages.push(`${role}: ${m.text}`);
  }
  return string_messages.join("\n");
}

// node_modules/.pnpm/registry.npmmirror.com+langchain@0.0.81_axios@1.3.3_cheerio@1.0.0-rc.12/node_modules/langchain/dist/callbacks/base.js
var BaseCallbackHandlerMethodsClass = class {
};
var BaseCallbackHandler = class extends BaseCallbackHandlerMethodsClass {
  constructor(input) {
    super();
    Object.defineProperty(this, "ignoreLLM", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "ignoreChain", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "ignoreAgent", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    if (input) {
      this.ignoreLLM = input.ignoreLLM ?? this.ignoreLLM;
      this.ignoreChain = input.ignoreChain ?? this.ignoreChain;
      this.ignoreAgent = input.ignoreAgent ?? this.ignoreAgent;
    }
  }
  copy() {
    return new this.constructor(this);
  }
  static fromMethods(methods) {
    class Handler extends BaseCallbackHandler {
      constructor() {
        super();
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: v4_default()
        });
        Object.assign(this, methods);
      }
    }
    return new Handler();
  }
};

// node_modules/.pnpm/registry.npmmirror.com+langchain@0.0.81_axios@1.3.3_cheerio@1.0.0-rc.12/node_modules/langchain/dist/callbacks/handlers/console.js
var import_ansi_styles = __toESM(require_ansi_styles(), 1);

// node_modules/.pnpm/registry.npmmirror.com+langchain@0.0.81_axios@1.3.3_cheerio@1.0.0-rc.12/node_modules/langchain/dist/callbacks/handlers/tracer.js
var BaseTracer = class extends BaseCallbackHandler {
  constructor() {
    super();
    Object.defineProperty(this, "runMap", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: /* @__PURE__ */ new Map()
    });
  }
  copy() {
    return this;
  }
  _addChildRun(parentRun, childRun) {
    parentRun.child_runs.push(childRun);
  }
  _startTrace(run) {
    if (run.parent_run_id !== void 0) {
      const parentRun = this.runMap.get(run.parent_run_id);
      if (parentRun) {
        this._addChildRun(parentRun, run);
      }
    }
    this.runMap.set(run.id, run);
  }
  async _endTrace(run) {
    const parentRun = run.parent_run_id !== void 0 && this.runMap.get(run.parent_run_id);
    if (parentRun) {
      parentRun.child_execution_order = Math.max(parentRun.child_execution_order, run.child_execution_order);
    } else {
      await this.persistRun(run);
    }
    this.runMap.delete(run.id);
  }
  _getExecutionOrder(parentRunId) {
    const parentRun = parentRunId !== void 0 && this.runMap.get(parentRunId);
    if (!parentRun) {
      return 1;
    }
    return parentRun.child_execution_order + 1;
  }
  async handleLLMStart(llm, prompts, runId, parentRunId, extraParams) {
    const execution_order = this._getExecutionOrder(parentRunId);
    const run = {
      id: runId,
      name: llm.name,
      parent_run_id: parentRunId,
      start_time: Date.now(),
      end_time: 0,
      serialized: llm,
      inputs: { prompts },
      execution_order,
      child_runs: [],
      child_execution_order: execution_order,
      run_type: "llm",
      extra: extraParams
    };
    this._startTrace(run);
    await this.onLLMStart?.(run);
  }
  async handleChatModelStart(llm, messages, runId, parentRunId, extraParams) {
    const execution_order = this._getExecutionOrder(parentRunId);
    const run = {
      id: runId,
      name: llm.name,
      parent_run_id: parentRunId,
      start_time: Date.now(),
      end_time: 0,
      serialized: llm,
      inputs: { messages },
      execution_order,
      child_runs: [],
      child_execution_order: execution_order,
      run_type: "llm",
      extra: extraParams
    };
    this._startTrace(run);
    await this.onLLMStart?.(run);
  }
  async handleLLMEnd(output, runId) {
    const run = this.runMap.get(runId);
    if (!run || run?.run_type !== "llm") {
      throw new Error("No LLM run to end.");
    }
    run.end_time = Date.now();
    run.outputs = output;
    await this.onLLMEnd?.(run);
    await this._endTrace(run);
  }
  async handleLLMError(error, runId) {
    const run = this.runMap.get(runId);
    if (!run || run?.run_type !== "llm") {
      throw new Error("No LLM run to end.");
    }
    run.end_time = Date.now();
    run.error = error.message;
    await this.onLLMError?.(run);
    await this._endTrace(run);
  }
  async handleChainStart(chain, inputs, runId, parentRunId) {
    const execution_order = this._getExecutionOrder(parentRunId);
    const run = {
      id: runId,
      name: chain.name,
      parent_run_id: parentRunId,
      start_time: Date.now(),
      end_time: 0,
      serialized: chain,
      inputs,
      execution_order,
      child_execution_order: execution_order,
      run_type: "chain",
      child_runs: []
    };
    this._startTrace(run);
    await this.onChainStart?.(run);
  }
  async handleChainEnd(outputs, runId) {
    const run = this.runMap.get(runId);
    if (!run || run?.run_type !== "chain") {
      throw new Error("No chain run to end.");
    }
    run.end_time = Date.now();
    run.outputs = outputs;
    await this.onChainEnd?.(run);
    await this._endTrace(run);
  }
  async handleChainError(error, runId) {
    const run = this.runMap.get(runId);
    if (!run || run?.run_type !== "chain") {
      throw new Error("No chain run to end.");
    }
    run.end_time = Date.now();
    run.error = error.message;
    await this.onChainError?.(run);
    await this._endTrace(run);
  }
  async handleToolStart(tool, input, runId, parentRunId) {
    const execution_order = this._getExecutionOrder(parentRunId);
    const run = {
      id: runId,
      name: tool.name,
      parent_run_id: parentRunId,
      start_time: Date.now(),
      end_time: 0,
      serialized: tool,
      inputs: { input },
      execution_order,
      child_execution_order: execution_order,
      run_type: "tool",
      child_runs: []
    };
    this._startTrace(run);
    await this.onToolStart?.(run);
  }
  async handleToolEnd(output, runId) {
    const run = this.runMap.get(runId);
    if (!run || run?.run_type !== "tool") {
      throw new Error("No tool run to end");
    }
    run.end_time = Date.now();
    run.outputs = { output };
    await this.onToolEnd?.(run);
    await this._endTrace(run);
  }
  async handleToolError(error, runId) {
    const run = this.runMap.get(runId);
    if (!run || run?.run_type !== "tool") {
      throw new Error("No tool run to end");
    }
    run.end_time = Date.now();
    run.error = error.message;
    await this.onToolError?.(run);
    await this._endTrace(run);
  }
  async handleAgentAction(action, runId) {
    const run = this.runMap.get(runId);
    if (!run || run?.run_type !== "chain") {
      return;
    }
    const agentRun = run;
    agentRun.actions = agentRun.actions || [];
    agentRun.actions.push(action);
    await this.onAgentAction?.(run);
  }
};

// node_modules/.pnpm/registry.npmmirror.com+langchain@0.0.81_axios@1.3.3_cheerio@1.0.0-rc.12/node_modules/langchain/dist/callbacks/handlers/console.js
function wrap(style, text) {
  return `${style.open}${text}${style.close}`;
}
var { color } = import_ansi_styles.default;
var ConsoleCallbackHandler = class extends BaseTracer {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "console_callback_handler"
    });
  }
  persistRun(_run) {
    return Promise.resolve();
  }
  // utility methods
  getParents(run) {
    const parents = [];
    let currentRun = run;
    while (currentRun.parent_run_id) {
      const parent = this.runMap.get(currentRun.parent_run_id);
      if (parent) {
        parents.push(parent);
        currentRun = parent;
      } else {
        break;
      }
    }
    return parents;
  }
  getBreadcrumbs(run) {
    const parents = this.getParents(run).reverse();
    const string = [...parents, run].map((parent, i, arr) => {
      const name = `${parent.execution_order}:${parent.run_type}:${parent.name}`;
      return i === arr.length - 1 ? wrap(import_ansi_styles.default.bold, name) : name;
    }).join(" > ");
    return wrap(color.grey, string);
  }
  // logging methods
  onChainStart(run) {
    const crumbs = this.getBreadcrumbs(run);
  }
  onChainEnd(run) {
    const crumbs = this.getBreadcrumbs(run);
  }
  onChainError(run) {
    const crumbs = this.getBreadcrumbs(run);
  }
  onLLMStart(run) {
    const crumbs = this.getBreadcrumbs(run);
    const inputs = "prompts" in run.inputs ? { prompts: run.inputs.prompts.map((p) => p.trim()) } : run.inputs;
  }
  onLLMEnd(run) {
    const crumbs = this.getBreadcrumbs(run);
  }
  onLLMError(run) {
    const crumbs = this.getBreadcrumbs(run);
  }
  onToolStart(run) {
    const crumbs = this.getBreadcrumbs(run);
  }
  onToolEnd(run) {
    const crumbs = this.getBreadcrumbs(run);
  }
  onToolError(run) {
    const crumbs = this.getBreadcrumbs(run);
  }
  onAgentAction(run) {
    const agentRun = run;
    const crumbs = this.getBreadcrumbs(run);
  }
};

// node_modules/.pnpm/registry.npmmirror.com+langchain@0.0.81_axios@1.3.3_cheerio@1.0.0-rc.12/node_modules/langchain/dist/callbacks/handlers/tracer_langchain.js
var LangChainTracer = class extends BaseTracer {
  constructor({ exampleId, tenantId, sessionName, sessionExtra, callerParams } = {}) {
    super();
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "langchain_tracer"
    });
    Object.defineProperty(this, "endpoint", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: (typeof process !== "undefined" ? (
        // eslint-disable-next-line no-process-env
        process.env?.LANGCHAIN_ENDPOINT
      ) : void 0) || "http://localhost:1984"
    });
    Object.defineProperty(this, "headers", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {
        "Content-Type": "application/json"
      }
    });
    Object.defineProperty(this, "sessionName", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "sessionExtra", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "session", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "exampleId", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "tenantId", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "caller", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    if (typeof process !== "undefined" && process.env?.LANGCHAIN_API_KEY) {
      this.headers["x-api-key"] = process.env?.LANGCHAIN_API_KEY;
    }
    this.tenantId = tenantId ?? (typeof process !== "undefined" ? (
      // eslint-disable-next-line no-process-env
      process.env?.LANGCHAIN_TENANT_ID
    ) : void 0);
    this.sessionName = sessionName ?? (typeof process !== "undefined" ? (
      // eslint-disable-next-line no-process-env
      process.env?.LANGCHAIN_SESSION
    ) : void 0) ?? "default";
    this.sessionExtra = sessionExtra;
    this.exampleId = exampleId;
    this.caller = new AsyncCaller(callerParams ?? {});
  }
  async ensureSession() {
    if (this.session) {
      return this.session;
    }
    const tenantId = await this.ensureTenantId();
    const endpoint = `${this.endpoint}/sessions?upsert=true`;
    const res = await this.caller.call(fetch, endpoint, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        name: this.sessionName,
        tenant_id: tenantId,
        extra: this.sessionExtra
      })
    });
    if (!res.ok) {
      const body = await res.text();
      throw new Error(`Failed to create session: ${res.status} ${res.statusText} ${body}`);
    }
    const session = await res.json();
    this.session = session;
    return session;
  }
  async ensureTenantId() {
    if (this.tenantId) {
      return this.tenantId;
    }
    const endpoint = `${this.endpoint}/tenants`;
    const response = await this.caller.call(fetch, endpoint, {
      method: "GET",
      headers: this.headers
    });
    if (!response.ok) {
      const body = await response.text();
      throw new Error(`Failed to fetch tenant ID: ${response.status} ${response.statusText} ${body}`);
    }
    const tenants = await response.json();
    if (!tenants || tenants.length === 0) {
      throw new Error(`No tenants found for endpoint ${endpoint}`);
    }
    const tenantId = tenants[0].id;
    this.tenantId = tenantId;
    return tenantId;
  }
  async _convertToCreate(run, example_id = void 0) {
    const session = await this.ensureSession();
    const runExtra = run.extra ?? {};
    runExtra.runtime = await getRuntimeEnvironment();
    const persistedRun = {
      id: run.id,
      name: run.name,
      start_time: run.start_time,
      end_time: run.end_time,
      run_type: run.run_type,
      reference_example_id: example_id,
      extra: runExtra,
      execution_order: run.execution_order,
      serialized: run.serialized,
      error: run.error,
      inputs: run.inputs,
      outputs: run.outputs ?? {},
      session_id: session.id,
      child_runs: await Promise.all(run.child_runs.map((child_run) => this._convertToCreate(child_run)))
    };
    return persistedRun;
  }
  async persistRun(run) {
    const persistedRun = await this._convertToCreate(run, this.exampleId);
    const endpoint = `${this.endpoint}/runs`;
    const response = await this.caller.call(fetch, endpoint, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(persistedRun)
    });
    if (!response.ok) {
      const body = await response.text();
      throw new Error(`Failed to persist run: ${response.status} ${response.statusText} ${body}`);
    }
  }
};

// node_modules/.pnpm/registry.npmmirror.com+langchain@0.0.81_axios@1.3.3_cheerio@1.0.0-rc.12/node_modules/langchain/dist/callbacks/handlers/tracer_langchain_v1.js
var LangChainTracerV1 = class extends BaseTracer {
  constructor() {
    super();
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "langchain_tracer"
    });
    Object.defineProperty(this, "endpoint", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: (typeof process !== "undefined" ? (
        // eslint-disable-next-line no-process-env
        process.env?.LANGCHAIN_ENDPOINT
      ) : void 0) || "http://localhost:1984"
    });
    Object.defineProperty(this, "headers", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {
        "Content-Type": "application/json"
      }
    });
    Object.defineProperty(this, "session", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    if (typeof process !== "undefined" && process.env?.LANGCHAIN_API_KEY) {
      this.headers["x-api-key"] = process.env?.LANGCHAIN_API_KEY;
    }
  }
  async newSession(sessionName) {
    const sessionCreate = {
      start_time: Date.now(),
      name: sessionName
    };
    const session = await this.persistSession(sessionCreate);
    this.session = session;
    return session;
  }
  async loadSession(sessionName) {
    const endpoint = `${this.endpoint}/sessions?name=${sessionName}`;
    return this._handleSessionResponse(endpoint);
  }
  async loadDefaultSession() {
    const endpoint = `${this.endpoint}/sessions?name=default`;
    return this._handleSessionResponse(endpoint);
  }
  async convertV2RunToRun(run) {
    const session = this.session ?? await this.loadDefaultSession();
    const serialized = run.serialized;
    let runResult;
    if (run.run_type === "llm") {
      const prompts = run.inputs.prompts ? run.inputs.prompts : run.inputs.messages.map((x) => getBufferString(x));
      const llmRun = {
        uuid: run.id,
        start_time: run.start_time,
        end_time: run.end_time,
        execution_order: run.execution_order,
        child_execution_order: run.child_execution_order,
        serialized,
        type: run.run_type,
        session_id: session.id,
        prompts,
        response: run.outputs
      };
      runResult = llmRun;
    } else if (run.run_type === "chain") {
      const child_runs = await Promise.all(run.child_runs.map((child_run) => this.convertV2RunToRun(child_run)));
      const chainRun = {
        uuid: run.id,
        start_time: run.start_time,
        end_time: run.end_time,
        execution_order: run.execution_order,
        child_execution_order: run.child_execution_order,
        serialized,
        type: run.run_type,
        session_id: session.id,
        inputs: run.inputs,
        outputs: run.outputs,
        child_llm_runs: child_runs.filter((child_run) => child_run.type === "llm"),
        child_chain_runs: child_runs.filter((child_run) => child_run.type === "chain"),
        child_tool_runs: child_runs.filter((child_run) => child_run.type === "tool")
      };
      runResult = chainRun;
    } else if (run.run_type === "tool") {
      const child_runs = await Promise.all(run.child_runs.map((child_run) => this.convertV2RunToRun(child_run)));
      const toolRun = {
        uuid: run.id,
        start_time: run.start_time,
        end_time: run.end_time,
        execution_order: run.execution_order,
        child_execution_order: run.child_execution_order,
        serialized,
        type: run.run_type,
        session_id: session.id,
        tool_input: run.inputs.input,
        output: run.outputs?.output,
        action: JSON.stringify(serialized),
        child_llm_runs: child_runs.filter((child_run) => child_run.type === "llm"),
        child_chain_runs: child_runs.filter((child_run) => child_run.type === "chain"),
        child_tool_runs: child_runs.filter((child_run) => child_run.type === "tool")
      };
      runResult = toolRun;
    } else {
      throw new Error(`Unknown run type: ${run.run_type}`);
    }
    return runResult;
  }
  async persistRun(run) {
    let endpoint;
    let v1Run;
    if (run.run_type !== void 0) {
      v1Run = await this.convertV2RunToRun(run);
    } else {
      v1Run = run;
    }
    if (v1Run.type === "llm") {
      endpoint = `${this.endpoint}/llm-runs`;
    } else if (v1Run.type === "chain") {
      endpoint = `${this.endpoint}/chain-runs`;
    } else {
      endpoint = `${this.endpoint}/tool-runs`;
    }
    const response = await fetch(endpoint, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(v1Run)
    });
    if (!response.ok) {
    }
  }
  async persistSession(sessionCreate) {
    const endpoint = `${this.endpoint}/sessions`;
    const response = await fetch(endpoint, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(sessionCreate)
    });
    if (!response.ok) {
      return {
        id: 1,
        ...sessionCreate
      };
    }
    return {
      id: (await response.json()).id,
      ...sessionCreate
    };
  }
  async _handleSessionResponse(endpoint) {
    const response = await fetch(endpoint, {
      method: "GET",
      headers: this.headers
    });
    let tracerSession;
    if (!response.ok) {
      tracerSession = {
        id: 1,
        start_time: Date.now()
      };
      this.session = tracerSession;
      return tracerSession;
    }
    const resp = await response.json();
    if (resp.length === 0) {
      tracerSession = {
        id: 1,
        start_time: Date.now()
      };
      this.session = tracerSession;
      return tracerSession;
    }
    [tracerSession] = resp;
    this.session = tracerSession;
    return tracerSession;
  }
};

// node_modules/.pnpm/registry.npmmirror.com+langchain@0.0.81_axios@1.3.3_cheerio@1.0.0-rc.12/node_modules/langchain/dist/callbacks/handlers/initialize.js
async function getTracingCallbackHandler(session) {
  const tracer = new LangChainTracerV1();
  if (session) {
    await tracer.loadSession(session);
  } else {
    await tracer.loadDefaultSession();
  }
  return tracer;
}
async function getTracingV2CallbackHandler() {
  return new LangChainTracer();
}

// node_modules/.pnpm/registry.npmmirror.com+langchain@0.0.81_axios@1.3.3_cheerio@1.0.0-rc.12/node_modules/langchain/dist/callbacks/manager.js
var BaseCallbackManager = class {
  setHandler(handler) {
    return this.setHandlers([handler]);
  }
};
var BaseRunManager = class {
  constructor(runId, handlers, inheritableHandlers, _parentRunId) {
    Object.defineProperty(this, "runId", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: runId
    });
    Object.defineProperty(this, "handlers", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: handlers
    });
    Object.defineProperty(this, "inheritableHandlers", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: inheritableHandlers
    });
    Object.defineProperty(this, "_parentRunId", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: _parentRunId
    });
  }
  async handleText(text) {
    await Promise.all(this.handlers.map(async (handler) => {
      try {
        await handler.handleText?.(text, this.runId, this._parentRunId);
      } catch (err) {
      }
    }));
  }
};
var CallbackManagerForLLMRun = class extends BaseRunManager {
  async handleLLMNewToken(token) {
    await Promise.all(this.handlers.map(async (handler) => {
      if (!handler.ignoreLLM) {
        try {
          await handler.handleLLMNewToken?.(token, this.runId, this._parentRunId);
        } catch (err) {
        }
      }
    }));
  }
  async handleLLMError(err) {
    await Promise.all(this.handlers.map(async (handler) => {
      if (!handler.ignoreLLM) {
        try {
          await handler.handleLLMError?.(err, this.runId, this._parentRunId);
        } catch (err2) {
        }
      }
    }));
  }
  async handleLLMEnd(output) {
    await Promise.all(this.handlers.map(async (handler) => {
      if (!handler.ignoreLLM) {
        try {
          await handler.handleLLMEnd?.(output, this.runId, this._parentRunId);
        } catch (err) {
        }
      }
    }));
  }
};
var CallbackManagerForChainRun = class extends BaseRunManager {
  getChild() {
    const manager = new CallbackManager(this.runId);
    manager.setHandlers(this.inheritableHandlers);
    return manager;
  }
  async handleChainError(err) {
    await Promise.all(this.handlers.map(async (handler) => {
      if (!handler.ignoreChain) {
        try {
          await handler.handleChainError?.(err, this.runId, this._parentRunId);
        } catch (err2) {
        }
      }
    }));
  }
  async handleChainEnd(output) {
    await Promise.all(this.handlers.map(async (handler) => {
      if (!handler.ignoreChain) {
        try {
          await handler.handleChainEnd?.(output, this.runId, this._parentRunId);
        } catch (err) {
        }
      }
    }));
  }
  async handleAgentAction(action) {
    await Promise.all(this.handlers.map(async (handler) => {
      if (!handler.ignoreAgent) {
        try {
          await handler.handleAgentAction?.(action, this.runId, this._parentRunId);
        } catch (err) {
        }
      }
    }));
  }
  async handleAgentEnd(action) {
    await Promise.all(this.handlers.map(async (handler) => {
      if (!handler.ignoreAgent) {
        try {
          await handler.handleAgentEnd?.(action, this.runId, this._parentRunId);
        } catch (err) {
        }
      }
    }));
  }
};
var CallbackManagerForToolRun = class extends BaseRunManager {
  getChild() {
    const manager = new CallbackManager(this.runId);
    manager.setHandlers(this.inheritableHandlers);
    return manager;
  }
  async handleToolError(err) {
    await Promise.all(this.handlers.map(async (handler) => {
      if (!handler.ignoreAgent) {
        try {
          await handler.handleToolError?.(err, this.runId, this._parentRunId);
        } catch (err2) {
        }
      }
    }));
  }
  async handleToolEnd(output) {
    await Promise.all(this.handlers.map(async (handler) => {
      if (!handler.ignoreAgent) {
        try {
          await handler.handleToolEnd?.(output, this.runId, this._parentRunId);
        } catch (err) {
        }
      }
    }));
  }
};
var CallbackManager = class extends BaseCallbackManager {
  constructor(parentRunId) {
    super();
    Object.defineProperty(this, "handlers", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "inheritableHandlers", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "callback_manager"
    });
    Object.defineProperty(this, "_parentRunId", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.handlers = [];
    this.inheritableHandlers = [];
    this._parentRunId = parentRunId;
  }
  async handleLLMStart(llm, prompts, runId = v4_default(), _parentRunId = void 0, extraParams = void 0) {
    await Promise.all(this.handlers.map(async (handler) => {
      if (!handler.ignoreLLM) {
        try {
          await handler.handleLLMStart?.(llm, prompts, runId, this._parentRunId, extraParams);
        } catch (err) {
        }
      }
    }));
    return new CallbackManagerForLLMRun(runId, this.handlers, this.inheritableHandlers, this._parentRunId);
  }
  async handleChatModelStart(llm, messages, runId = v4_default(), _parentRunId = void 0, extraParams = void 0) {
    let messageStrings;
    await Promise.all(this.handlers.map(async (handler) => {
      if (!handler.ignoreLLM) {
        try {
          if (handler.handleChatModelStart)
            await handler.handleChatModelStart?.(llm, messages, runId, this._parentRunId, extraParams);
          else if (handler.handleLLMStart) {
            messageStrings = messages.map((x) => getBufferString(x));
            await handler.handleLLMStart?.(llm, messageStrings, runId, this._parentRunId, extraParams);
          }
        } catch (err) {
        }
      }
    }));
    return new CallbackManagerForLLMRun(runId, this.handlers, this.inheritableHandlers, this._parentRunId);
  }
  async handleChainStart(chain, inputs, runId = v4_default()) {
    await Promise.all(this.handlers.map(async (handler) => {
      if (!handler.ignoreChain) {
        try {
          await handler.handleChainStart?.(chain, inputs, runId, this._parentRunId);
        } catch (err) {
        }
      }
    }));
    return new CallbackManagerForChainRun(runId, this.handlers, this.inheritableHandlers, this._parentRunId);
  }
  async handleToolStart(tool, input, runId = v4_default()) {
    await Promise.all(this.handlers.map(async (handler) => {
      if (!handler.ignoreAgent) {
        try {
          await handler.handleToolStart?.(tool, input, runId, this._parentRunId);
        } catch (err) {
        }
      }
    }));
    return new CallbackManagerForToolRun(runId, this.handlers, this.inheritableHandlers, this._parentRunId);
  }
  addHandler(handler, inherit = true) {
    this.handlers.push(handler);
    if (inherit) {
      this.inheritableHandlers.push(handler);
    }
  }
  removeHandler(handler) {
    this.handlers = this.handlers.filter((_handler) => _handler !== handler);
    this.inheritableHandlers = this.inheritableHandlers.filter((_handler) => _handler !== handler);
  }
  setHandlers(handlers, inherit = true) {
    this.handlers = [];
    this.inheritableHandlers = [];
    for (const handler of handlers) {
      this.addHandler(handler, inherit);
    }
  }
  copy(additionalHandlers = [], inherit = true) {
    const manager = new CallbackManager(this._parentRunId);
    for (const handler of this.handlers) {
      const inheritable = this.inheritableHandlers.includes(handler);
      manager.addHandler(handler, inheritable);
    }
    for (const handler of additionalHandlers) {
      if (
        // Prevent multiple copies of console_callback_handler
        manager.handlers.filter((h) => h.name === "console_callback_handler").some((h) => h.name === handler.name)
      ) {
        continue;
      }
      manager.addHandler(handler, inherit);
    }
    return manager;
  }
  static fromHandlers(handlers) {
    class Handler extends BaseCallbackHandler {
      constructor() {
        super();
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: v4_default()
        });
        Object.assign(this, handlers);
      }
    }
    const manager = new this();
    manager.addHandler(new Handler());
    return manager;
  }
  static async configure(inheritableHandlers, localHandlers, options) {
    let callbackManager;
    if (inheritableHandlers || localHandlers) {
      if (Array.isArray(inheritableHandlers) || !inheritableHandlers) {
        callbackManager = new CallbackManager();
        callbackManager.setHandlers(inheritableHandlers?.map(ensureHandler) ?? [], true);
      } else {
        callbackManager = inheritableHandlers;
      }
      callbackManager = callbackManager.copy(Array.isArray(localHandlers) ? localHandlers.map(ensureHandler) : localHandlers?.handlers, false);
    }
    const verboseEnabled = (typeof process !== "undefined" ? (
      // eslint-disable-next-line no-process-env
      process.env?.LANGCHAIN_VERBOSE !== void 0
    ) : false) || options?.verbose;
    const tracingV2Enabled = typeof process !== "undefined" ? (
      // eslint-disable-next-line no-process-env
      process.env?.LANGCHAIN_TRACING_V2 !== void 0
    ) : false;
    const tracingEnabled = tracingV2Enabled || (typeof process !== "undefined" ? (
      // eslint-disable-next-line no-process-env
      process.env?.LANGCHAIN_TRACING !== void 0
    ) : false);
    if (verboseEnabled || tracingEnabled) {
      if (!callbackManager) {
        callbackManager = new CallbackManager();
      }
      if (verboseEnabled && !callbackManager.handlers.some((handler) => handler.name === ConsoleCallbackHandler.prototype.name)) {
        const consoleHandler = new ConsoleCallbackHandler();
        callbackManager.addHandler(consoleHandler, true);
      }
      if (tracingEnabled && !callbackManager.handlers.some((handler) => handler.name === "langchain_tracer")) {
        if (tracingV2Enabled) {
          callbackManager.addHandler(await getTracingV2CallbackHandler(), true);
        } else {
          const session = typeof process !== "undefined" ? (
            // eslint-disable-next-line no-process-env
            process.env?.LANGCHAIN_SESSION
          ) : void 0;
          callbackManager.addHandler(await getTracingCallbackHandler(session), true);
        }
      }
    }
    return callbackManager;
  }
};
function ensureHandler(handler) {
  if ("name" in handler) {
    return handler;
  }
  return BaseCallbackHandler.fromMethods(handler);
}

export {
  isNode,
  getModelNameForTiktoken,
  calculateMaxTokens,
  getBufferString,
  CallbackManager,
  BaseLangChain,
  BaseLanguageModel
};
