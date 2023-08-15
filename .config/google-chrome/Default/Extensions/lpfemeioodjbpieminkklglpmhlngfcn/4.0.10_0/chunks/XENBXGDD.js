import {
  customMuiTheme_default
} from "./P6HDST5X.js";
import {
  Recoil_index_20,
  Recoil_index_24,
  UserConfigState
} from "./WSBV3W2I.js";
import {
  Link_default,
  import_system,
  material_exports
} from "./E4WU3AZH.js";
import {
  initReactI18next,
  useTranslation
} from "./3G6AO2FI.js";
import {
  require_SvgIcon,
  require_jsx_runtime,
  require_react_dom
} from "./ZCNVHGRQ.js";
import {
  Log_default
} from "./CWTJNSHL.js";
import {
  getCacheUserConfig,
  updateCacheUserConfig
} from "./X66UQCDQ.js";
import {
  require_react
} from "./AMCWABVH.js";
import {
  SYNC_USER_CONFIG_STORE_EVENT,
  require_browser_polyfill
} from "./QIGS6TBV.js";
import {
  __commonJS,
  __toESM
} from "./ERZ5UWI7.js";

// node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/client.js
var require_client = __commonJS({
  "node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/client.js"(exports) {
    "use strict";
    var m = require_react_dom();
    if (true) {
      exports.createRoot = m.createRoot;
      exports.hydrateRoot = m.hydrateRoot;
    } else {
      i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      exports.createRoot = function(c, o) {
        i.usingClientEntryPoint = true;
        try {
          return m.createRoot(c, o);
        } finally {
          i.usingClientEntryPoint = false;
        }
      };
      exports.hydrateRoot = function(c, h, o) {
        i.usingClientEntryPoint = true;
        try {
          return m.hydrateRoot(c, h, o);
        } finally {
          i.usingClientEntryPoint = false;
        }
      };
    }
    var i;
  }
});

// node_modules/.pnpm/i18next@23.3.0/node_modules/i18next/dist/esm/i18next.js
var consoleLogger = {
  type: "logger",
  log(args) {
    this.output("log", args);
  },
  warn(args) {
    this.output("warn", args);
  },
  error(args) {
    this.output("error", args);
  },
  output(type, args) {
    if (console && console[type])
      ;
  }
};
var Logger = class {
  constructor(concreteLogger) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(concreteLogger, options);
  }
  init(concreteLogger) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = options.prefix || "i18next:";
    this.logger = concreteLogger || consoleLogger;
    this.options = options;
    this.debug = options.debug;
  }
  log() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return this.forward(args, "log", "", true);
  }
  warn() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return this.forward(args, "warn", "", true);
  }
  error() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    return this.forward(args, "error", "");
  }
  deprecate() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }
    return this.forward(args, "warn", "WARNING DEPRECATED: ", true);
  }
  forward(args, lvl, prefix, debugOnly) {
    if (debugOnly && !this.debug)
      return null;
    if (typeof args[0] === "string")
      args[0] = `${prefix}${this.prefix} ${args[0]}`;
    return this.logger[lvl](args);
  }
  create(moduleName) {
    return new Logger(this.logger, {
      ...{
        prefix: `${this.prefix}:${moduleName}:`
      },
      ...this.options
    });
  }
  clone(options) {
    options = options || this.options;
    options.prefix = options.prefix || this.prefix;
    return new Logger(this.logger, options);
  }
};
var baseLogger = new Logger();
var EventEmitter = class {
  constructor() {
    this.observers = {};
  }
  on(events, listener) {
    events.split(" ").forEach((event) => {
      this.observers[event] = this.observers[event] || [];
      this.observers[event].push(listener);
    });
    return this;
  }
  off(event, listener) {
    if (!this.observers[event])
      return;
    if (!listener) {
      delete this.observers[event];
      return;
    }
    this.observers[event] = this.observers[event].filter((l) => l !== listener);
  }
  emit(event) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (this.observers[event]) {
      const cloned = [].concat(this.observers[event]);
      cloned.forEach((observer) => {
        observer(...args);
      });
    }
    if (this.observers["*"]) {
      const cloned = [].concat(this.observers["*"]);
      cloned.forEach((observer) => {
        observer.apply(observer, [event, ...args]);
      });
    }
  }
};
function defer() {
  let res;
  let rej;
  const promise = new Promise((resolve, reject) => {
    res = resolve;
    rej = reject;
  });
  promise.resolve = res;
  promise.reject = rej;
  return promise;
}
function makeString(object) {
  if (object == null)
    return "";
  return "" + object;
}
function copy(a, s, t2) {
  a.forEach((m) => {
    if (s[m])
      t2[m] = s[m];
  });
}
function getLastOfPath(object, path, Empty) {
  function cleanKey(key) {
    return key && key.indexOf("###") > -1 ? key.replace(/###/g, ".") : key;
  }
  function canNotTraverseDeeper() {
    return !object || typeof object === "string";
  }
  const stack = typeof path !== "string" ? [].concat(path) : path.split(".");
  while (stack.length > 1) {
    if (canNotTraverseDeeper())
      return {};
    const key = cleanKey(stack.shift());
    if (!object[key] && Empty)
      object[key] = new Empty();
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      object = object[key];
    } else {
      object = {};
    }
  }
  if (canNotTraverseDeeper())
    return {};
  return {
    obj: object,
    k: cleanKey(stack.shift())
  };
}
function setPath(object, path, newValue) {
  const {
    obj,
    k
  } = getLastOfPath(object, path, Object);
  obj[k] = newValue;
}
function pushPath(object, path, newValue, concat) {
  const {
    obj,
    k
  } = getLastOfPath(object, path, Object);
  obj[k] = obj[k] || [];
  if (concat)
    obj[k] = obj[k].concat(newValue);
  if (!concat)
    obj[k].push(newValue);
}
function getPath(object, path) {
  const {
    obj,
    k
  } = getLastOfPath(object, path);
  if (!obj)
    return void 0;
  return obj[k];
}
function getPathWithDefaults(data, defaultData, key) {
  const value = getPath(data, key);
  if (value !== void 0) {
    return value;
  }
  return getPath(defaultData, key);
}
function deepExtend(target, source, overwrite) {
  for (const prop in source) {
    if (prop !== "__proto__" && prop !== "constructor") {
      if (prop in target) {
        if (typeof target[prop] === "string" || target[prop] instanceof String || typeof source[prop] === "string" || source[prop] instanceof String) {
          if (overwrite)
            target[prop] = source[prop];
        } else {
          deepExtend(target[prop], source[prop], overwrite);
        }
      } else {
        target[prop] = source[prop];
      }
    }
  }
  return target;
}
function regexEscape(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var _entityMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function escape(data) {
  if (typeof data === "string") {
    return data.replace(/[&<>"'\/]/g, (s) => _entityMap[s]);
  }
  return data;
}
var chars = [" ", ",", "?", "!", ";"];
function looksLikeObjectPath(key, nsSeparator, keySeparator) {
  nsSeparator = nsSeparator || "";
  keySeparator = keySeparator || "";
  const possibleChars = chars.filter((c) => nsSeparator.indexOf(c) < 0 && keySeparator.indexOf(c) < 0);
  if (possibleChars.length === 0)
    return true;
  const r = new RegExp(`(${possibleChars.map((c) => c === "?" ? "\\?" : c).join("|")})`);
  let matched = !r.test(key);
  if (!matched) {
    const ki = key.indexOf(keySeparator);
    if (ki > 0 && !r.test(key.substring(0, ki))) {
      matched = true;
    }
  }
  return matched;
}
function deepFind(obj, path) {
  let keySeparator = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!obj)
    return void 0;
  if (obj[path])
    return obj[path];
  const paths = path.split(keySeparator);
  let current = obj;
  for (let i = 0; i < paths.length; ++i) {
    if (!current)
      return void 0;
    if (typeof current[paths[i]] === "string" && i + 1 < paths.length) {
      return void 0;
    }
    if (current[paths[i]] === void 0) {
      let j = 2;
      let p = paths.slice(i, i + j).join(keySeparator);
      let mix = current[p];
      while (mix === void 0 && paths.length > i + j) {
        j++;
        p = paths.slice(i, i + j).join(keySeparator);
        mix = current[p];
      }
      if (mix === void 0)
        return void 0;
      if (mix === null)
        return null;
      if (path.endsWith(p)) {
        if (typeof mix === "string")
          return mix;
        if (p && typeof mix[p] === "string")
          return mix[p];
      }
      const joinedPath = paths.slice(i + j).join(keySeparator);
      if (joinedPath)
        return deepFind(mix, joinedPath, keySeparator);
      return void 0;
    }
    current = current[paths[i]];
  }
  return current;
}
function getCleanedCode(code) {
  if (code && code.indexOf("_") > 0)
    return code.replace("_", "-");
  return code;
}
var ResourceStore = class extends EventEmitter {
  constructor(data) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    super();
    this.data = data || {};
    this.options = options;
    if (this.options.keySeparator === void 0) {
      this.options.keySeparator = ".";
    }
    if (this.options.ignoreJSONStructure === void 0) {
      this.options.ignoreJSONStructure = true;
    }
  }
  addNamespaces(ns) {
    if (this.options.ns.indexOf(ns) < 0) {
      this.options.ns.push(ns);
    }
  }
  removeNamespaces(ns) {
    const index = this.options.ns.indexOf(ns);
    if (index > -1) {
      this.options.ns.splice(index, 1);
    }
  }
  getResource(lng, ns, key) {
    let options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
    const ignoreJSONStructure = options.ignoreJSONStructure !== void 0 ? options.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let path = [lng, ns];
    if (key && typeof key !== "string")
      path = path.concat(key);
    if (key && typeof key === "string")
      path = path.concat(keySeparator ? key.split(keySeparator) : key);
    if (lng.indexOf(".") > -1) {
      path = lng.split(".");
    }
    const result = getPath(this.data, path);
    if (result || !ignoreJSONStructure || typeof key !== "string")
      return result;
    return deepFind(this.data && this.data[lng] && this.data[lng][ns], key, keySeparator);
  }
  addResource(lng, ns, key, value) {
    let options = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: false
    };
    const keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
    let path = [lng, ns];
    if (key)
      path = path.concat(keySeparator ? key.split(keySeparator) : key);
    if (lng.indexOf(".") > -1) {
      path = lng.split(".");
      value = ns;
      ns = path[1];
    }
    this.addNamespaces(ns);
    setPath(this.data, path, value);
    if (!options.silent)
      this.emit("added", lng, ns, key, value);
  }
  addResources(lng, ns, resources) {
    let options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: false
    };
    for (const m in resources) {
      if (typeof resources[m] === "string" || Object.prototype.toString.apply(resources[m]) === "[object Array]")
        this.addResource(lng, ns, m, resources[m], {
          silent: true
        });
    }
    if (!options.silent)
      this.emit("added", lng, ns, resources);
  }
  addResourceBundle(lng, ns, resources, deep, overwrite) {
    let options = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: false
    };
    let path = [lng, ns];
    if (lng.indexOf(".") > -1) {
      path = lng.split(".");
      deep = resources;
      resources = ns;
      ns = path[1];
    }
    this.addNamespaces(ns);
    let pack = getPath(this.data, path) || {};
    if (deep) {
      deepExtend(pack, resources, overwrite);
    } else {
      pack = {
        ...pack,
        ...resources
      };
    }
    setPath(this.data, path, pack);
    if (!options.silent)
      this.emit("added", lng, ns, resources);
  }
  removeResourceBundle(lng, ns) {
    if (this.hasResourceBundle(lng, ns)) {
      delete this.data[lng][ns];
    }
    this.removeNamespaces(ns);
    this.emit("removed", lng, ns);
  }
  hasResourceBundle(lng, ns) {
    return this.getResource(lng, ns) !== void 0;
  }
  getResourceBundle(lng, ns) {
    if (!ns)
      ns = this.options.defaultNS;
    if (this.options.compatibilityAPI === "v1")
      return {
        ...{},
        ...this.getResource(lng, ns)
      };
    return this.getResource(lng, ns);
  }
  getDataByLanguage(lng) {
    return this.data[lng];
  }
  hasLanguageSomeTranslations(lng) {
    const data = this.getDataByLanguage(lng);
    const n = data && Object.keys(data) || [];
    return !!n.find((v) => data[v] && Object.keys(data[v]).length > 0);
  }
  toJSON() {
    return this.data;
  }
};
var postProcessor = {
  processors: {},
  addPostProcessor(module) {
    this.processors[module.name] = module;
  },
  handle(processors, value, key, options, translator) {
    processors.forEach((processor) => {
      if (this.processors[processor])
        value = this.processors[processor].process(value, key, options, translator);
    });
    return value;
  }
};
var checkedLoadedFor = {};
var Translator = class extends EventEmitter {
  constructor(services) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super();
    copy(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], services, this);
    this.options = options;
    if (this.options.keySeparator === void 0) {
      this.options.keySeparator = ".";
    }
    this.logger = baseLogger.create("translator");
  }
  changeLanguage(lng) {
    if (lng)
      this.language = lng;
  }
  exists(key) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    if (key === void 0 || key === null) {
      return false;
    }
    const resolved = this.resolve(key, options);
    return resolved && resolved.res !== void 0;
  }
  extractFromKey(key, options) {
    let nsSeparator = options.nsSeparator !== void 0 ? options.nsSeparator : this.options.nsSeparator;
    if (nsSeparator === void 0)
      nsSeparator = ":";
    const keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
    let namespaces = options.ns || this.options.defaultNS || [];
    const wouldCheckForNsInKey = nsSeparator && key.indexOf(nsSeparator) > -1;
    const seemsNaturalLanguage = !this.options.userDefinedKeySeparator && !options.keySeparator && !this.options.userDefinedNsSeparator && !options.nsSeparator && !looksLikeObjectPath(key, nsSeparator, keySeparator);
    if (wouldCheckForNsInKey && !seemsNaturalLanguage) {
      const m = key.match(this.interpolator.nestingRegexp);
      if (m && m.length > 0) {
        return {
          key,
          namespaces
        };
      }
      const parts = key.split(nsSeparator);
      if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.indexOf(parts[0]) > -1)
        namespaces = parts.shift();
      key = parts.join(keySeparator);
    }
    if (typeof namespaces === "string")
      namespaces = [namespaces];
    return {
      key,
      namespaces
    };
  }
  translate(keys, options, lastKey) {
    if (typeof options !== "object" && this.options.overloadTranslationOptionHandler) {
      options = this.options.overloadTranslationOptionHandler(arguments);
    }
    if (typeof options === "object")
      options = {
        ...options
      };
    if (!options)
      options = {};
    if (keys === void 0 || keys === null)
      return "";
    if (!Array.isArray(keys))
      keys = [String(keys)];
    const returnDetails = options.returnDetails !== void 0 ? options.returnDetails : this.options.returnDetails;
    const keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
    const {
      key,
      namespaces
    } = this.extractFromKey(keys[keys.length - 1], options);
    const namespace = namespaces[namespaces.length - 1];
    const lng = options.lng || this.language;
    const appendNamespaceToCIMode = options.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (lng && lng.toLowerCase() === "cimode") {
      if (appendNamespaceToCIMode) {
        const nsSeparator = options.nsSeparator || this.options.nsSeparator;
        if (returnDetails) {
          return {
            res: `${namespace}${nsSeparator}${key}`,
            usedKey: key,
            exactUsedKey: key,
            usedLng: lng,
            usedNS: namespace
          };
        }
        return `${namespace}${nsSeparator}${key}`;
      }
      if (returnDetails) {
        return {
          res: key,
          usedKey: key,
          exactUsedKey: key,
          usedLng: lng,
          usedNS: namespace
        };
      }
      return key;
    }
    const resolved = this.resolve(keys, options);
    let res = resolved && resolved.res;
    const resUsedKey = resolved && resolved.usedKey || key;
    const resExactUsedKey = resolved && resolved.exactUsedKey || key;
    const resType = Object.prototype.toString.apply(res);
    const noObject = ["[object Number]", "[object Function]", "[object RegExp]"];
    const joinArrays = options.joinArrays !== void 0 ? options.joinArrays : this.options.joinArrays;
    const handleAsObjectInI18nFormat = !this.i18nFormat || this.i18nFormat.handleAsObject;
    const handleAsObject = typeof res !== "string" && typeof res !== "boolean" && typeof res !== "number";
    if (handleAsObjectInI18nFormat && res && handleAsObject && noObject.indexOf(resType) < 0 && !(typeof joinArrays === "string" && resType === "[object Array]")) {
      if (!options.returnObjects && !this.options.returnObjects) {
        if (!this.options.returnedObjectHandler) {
          this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        }
        const r = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, res, {
          ...options,
          ns: namespaces
        }) : `key '${key} (${this.language})' returned an object instead of string.`;
        if (returnDetails) {
          resolved.res = r;
          return resolved;
        }
        return r;
      }
      if (keySeparator) {
        const resTypeIsArray = resType === "[object Array]";
        const copy2 = resTypeIsArray ? [] : {};
        const newKeyToUse = resTypeIsArray ? resExactUsedKey : resUsedKey;
        for (const m in res) {
          if (Object.prototype.hasOwnProperty.call(res, m)) {
            const deepKey = `${newKeyToUse}${keySeparator}${m}`;
            copy2[m] = this.translate(deepKey, {
              ...options,
              ...{
                joinArrays: false,
                ns: namespaces
              }
            });
            if (copy2[m] === deepKey)
              copy2[m] = res[m];
          }
        }
        res = copy2;
      }
    } else if (handleAsObjectInI18nFormat && typeof joinArrays === "string" && resType === "[object Array]") {
      res = res.join(joinArrays);
      if (res)
        res = this.extendTranslation(res, keys, options, lastKey);
    } else {
      let usedDefault = false;
      let usedKey = false;
      const needsPluralHandling = options.count !== void 0 && typeof options.count !== "string";
      const hasDefaultValue = Translator.hasDefaultValue(options);
      const defaultValueSuffix = needsPluralHandling ? this.pluralResolver.getSuffix(lng, options.count, options) : "";
      const defaultValueSuffixOrdinalFallback = options.ordinal && needsPluralHandling ? this.pluralResolver.getSuffix(lng, options.count, {
        ordinal: false
      }) : "";
      const defaultValue = options[`defaultValue${defaultValueSuffix}`] || options[`defaultValue${defaultValueSuffixOrdinalFallback}`] || options.defaultValue;
      if (!this.isValidLookup(res) && hasDefaultValue) {
        usedDefault = true;
        res = defaultValue;
      }
      if (!this.isValidLookup(res)) {
        usedKey = true;
        res = key;
      }
      const missingKeyNoValueFallbackToKey = options.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey;
      const resForMissing = missingKeyNoValueFallbackToKey && usedKey ? void 0 : res;
      const updateMissing = hasDefaultValue && defaultValue !== res && this.options.updateMissing;
      if (usedKey || usedDefault || updateMissing) {
        this.logger.log(updateMissing ? "updateKey" : "missingKey", lng, namespace, key, updateMissing ? defaultValue : res);
        if (keySeparator) {
          const fk = this.resolve(key, {
            ...options,
            keySeparator: false
          });
          if (fk && fk.res)
            this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let lngs = [];
        const fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, options.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && fallbackLngs && fallbackLngs[0]) {
          for (let i = 0; i < fallbackLngs.length; i++) {
            lngs.push(fallbackLngs[i]);
          }
        } else if (this.options.saveMissingTo === "all") {
          lngs = this.languageUtils.toResolveHierarchy(options.lng || this.language);
        } else {
          lngs.push(options.lng || this.language);
        }
        const send = (l, k, specificDefaultValue) => {
          const defaultForMissing = hasDefaultValue && specificDefaultValue !== res ? specificDefaultValue : resForMissing;
          if (this.options.missingKeyHandler) {
            this.options.missingKeyHandler(l, namespace, k, defaultForMissing, updateMissing, options);
          } else if (this.backendConnector && this.backendConnector.saveMissing) {
            this.backendConnector.saveMissing(l, namespace, k, defaultForMissing, updateMissing, options);
          }
          this.emit("missingKey", l, namespace, k, res);
        };
        if (this.options.saveMissing) {
          if (this.options.saveMissingPlurals && needsPluralHandling) {
            lngs.forEach((language) => {
              this.pluralResolver.getSuffixes(language, options).forEach((suffix) => {
                send([language], key + suffix, options[`defaultValue${suffix}`] || defaultValue);
              });
            });
          } else {
            send(lngs, key, defaultValue);
          }
        }
      }
      res = this.extendTranslation(res, keys, options, resolved, lastKey);
      if (usedKey && res === key && this.options.appendNamespaceToMissingKey)
        res = `${namespace}:${key}`;
      if ((usedKey || usedDefault) && this.options.parseMissingKeyHandler) {
        if (this.options.compatibilityAPI !== "v1") {
          res = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${namespace}:${key}` : key, usedDefault ? res : void 0);
        } else {
          res = this.options.parseMissingKeyHandler(res);
        }
      }
    }
    if (returnDetails) {
      resolved.res = res;
      return resolved;
    }
    return res;
  }
  extendTranslation(res, key, options, resolved, lastKey) {
    var _this = this;
    if (this.i18nFormat && this.i18nFormat.parse) {
      res = this.i18nFormat.parse(res, {
        ...this.options.interpolation.defaultVariables,
        ...options
      }, resolved.usedLng, resolved.usedNS, resolved.usedKey, {
        resolved
      });
    } else if (!options.skipInterpolation) {
      if (options.interpolation)
        this.interpolator.init({
          ...options,
          ...{
            interpolation: {
              ...this.options.interpolation,
              ...options.interpolation
            }
          }
        });
      const skipOnVariables = typeof res === "string" && (options && options.interpolation && options.interpolation.skipOnVariables !== void 0 ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let nestBef;
      if (skipOnVariables) {
        const nb = res.match(this.interpolator.nestingRegexp);
        nestBef = nb && nb.length;
      }
      let data = options.replace && typeof options.replace !== "string" ? options.replace : options;
      if (this.options.interpolation.defaultVariables)
        data = {
          ...this.options.interpolation.defaultVariables,
          ...data
        };
      res = this.interpolator.interpolate(res, data, options.lng || this.language, options);
      if (skipOnVariables) {
        const na = res.match(this.interpolator.nestingRegexp);
        const nestAft = na && na.length;
        if (nestBef < nestAft)
          options.nest = false;
      }
      if (!options.lng && this.options.compatibilityAPI !== "v1" && resolved && resolved.res)
        options.lng = resolved.usedLng;
      if (options.nest !== false)
        res = this.interpolator.nest(res, function() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          if (lastKey && lastKey[0] === args[0] && !options.context) {
            _this.logger.warn(`It seems you are nesting recursively key: ${args[0]} in key: ${key[0]}`);
            return null;
          }
          return _this.translate(...args, key);
        }, options);
      if (options.interpolation)
        this.interpolator.reset();
    }
    const postProcess = options.postProcess || this.options.postProcess;
    const postProcessorNames = typeof postProcess === "string" ? [postProcess] : postProcess;
    if (res !== void 0 && res !== null && postProcessorNames && postProcessorNames.length && options.applyPostProcessor !== false) {
      res = postProcessor.handle(postProcessorNames, res, key, this.options && this.options.postProcessPassResolved ? {
        i18nResolved: resolved,
        ...options
      } : options, this);
    }
    return res;
  }
  resolve(keys) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let found;
    let usedKey;
    let exactUsedKey;
    let usedLng;
    let usedNS;
    if (typeof keys === "string")
      keys = [keys];
    keys.forEach((k) => {
      if (this.isValidLookup(found))
        return;
      const extracted = this.extractFromKey(k, options);
      const key = extracted.key;
      usedKey = key;
      let namespaces = extracted.namespaces;
      if (this.options.fallbackNS)
        namespaces = namespaces.concat(this.options.fallbackNS);
      const needsPluralHandling = options.count !== void 0 && typeof options.count !== "string";
      const needsZeroSuffixLookup = needsPluralHandling && !options.ordinal && options.count === 0 && this.pluralResolver.shouldUseIntlApi();
      const needsContextHandling = options.context !== void 0 && (typeof options.context === "string" || typeof options.context === "number") && options.context !== "";
      const codes = options.lngs ? options.lngs : this.languageUtils.toResolveHierarchy(options.lng || this.language, options.fallbackLng);
      namespaces.forEach((ns) => {
        if (this.isValidLookup(found))
          return;
        usedNS = ns;
        if (!checkedLoadedFor[`${codes[0]}-${ns}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(usedNS)) {
          checkedLoadedFor[`${codes[0]}-${ns}`] = true;
          this.logger.warn(`key "${usedKey}" for languages "${codes.join(", ")}" won't get resolved as namespace "${usedNS}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
        }
        codes.forEach((code) => {
          if (this.isValidLookup(found))
            return;
          usedLng = code;
          const finalKeys = [key];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys) {
            this.i18nFormat.addLookupKeys(finalKeys, key, code, ns, options);
          } else {
            let pluralSuffix;
            if (needsPluralHandling)
              pluralSuffix = this.pluralResolver.getSuffix(code, options.count, options);
            const zeroSuffix = `${this.options.pluralSeparator}zero`;
            const ordinalPrefix = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (needsPluralHandling) {
              finalKeys.push(key + pluralSuffix);
              if (options.ordinal && pluralSuffix.indexOf(ordinalPrefix) === 0) {
                finalKeys.push(key + pluralSuffix.replace(ordinalPrefix, this.options.pluralSeparator));
              }
              if (needsZeroSuffixLookup) {
                finalKeys.push(key + zeroSuffix);
              }
            }
            if (needsContextHandling) {
              const contextKey = `${key}${this.options.contextSeparator}${options.context}`;
              finalKeys.push(contextKey);
              if (needsPluralHandling) {
                finalKeys.push(contextKey + pluralSuffix);
                if (options.ordinal && pluralSuffix.indexOf(ordinalPrefix) === 0) {
                  finalKeys.push(contextKey + pluralSuffix.replace(ordinalPrefix, this.options.pluralSeparator));
                }
                if (needsZeroSuffixLookup) {
                  finalKeys.push(contextKey + zeroSuffix);
                }
              }
            }
          }
          let possibleKey;
          while (possibleKey = finalKeys.pop()) {
            if (!this.isValidLookup(found)) {
              exactUsedKey = possibleKey;
              found = this.getResource(code, ns, possibleKey, options);
            }
          }
        });
      });
    });
    return {
      res: found,
      usedKey,
      exactUsedKey,
      usedLng,
      usedNS
    };
  }
  isValidLookup(res) {
    return res !== void 0 && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === "");
  }
  getResource(code, ns, key) {
    let options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    if (this.i18nFormat && this.i18nFormat.getResource)
      return this.i18nFormat.getResource(code, ns, key, options);
    return this.resourceStore.getResource(code, ns, key, options);
  }
  static hasDefaultValue(options) {
    const prefix = "defaultValue";
    for (const option in options) {
      if (Object.prototype.hasOwnProperty.call(options, option) && prefix === option.substring(0, prefix.length) && void 0 !== options[option]) {
        return true;
      }
    }
    return false;
  }
};
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
var LanguageUtil = class {
  constructor(options) {
    this.options = options;
    this.supportedLngs = this.options.supportedLngs || false;
    this.logger = baseLogger.create("languageUtils");
  }
  getScriptPartFromCode(code) {
    code = getCleanedCode(code);
    if (!code || code.indexOf("-") < 0)
      return null;
    const p = code.split("-");
    if (p.length === 2)
      return null;
    p.pop();
    if (p[p.length - 1].toLowerCase() === "x")
      return null;
    return this.formatLanguageCode(p.join("-"));
  }
  getLanguagePartFromCode(code) {
    code = getCleanedCode(code);
    if (!code || code.indexOf("-") < 0)
      return code;
    const p = code.split("-");
    return this.formatLanguageCode(p[0]);
  }
  formatLanguageCode(code) {
    if (typeof code === "string" && code.indexOf("-") > -1) {
      const specialCases = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let p = code.split("-");
      if (this.options.lowerCaseLng) {
        p = p.map((part) => part.toLowerCase());
      } else if (p.length === 2) {
        p[0] = p[0].toLowerCase();
        p[1] = p[1].toUpperCase();
        if (specialCases.indexOf(p[1].toLowerCase()) > -1)
          p[1] = capitalize(p[1].toLowerCase());
      } else if (p.length === 3) {
        p[0] = p[0].toLowerCase();
        if (p[1].length === 2)
          p[1] = p[1].toUpperCase();
        if (p[0] !== "sgn" && p[2].length === 2)
          p[2] = p[2].toUpperCase();
        if (specialCases.indexOf(p[1].toLowerCase()) > -1)
          p[1] = capitalize(p[1].toLowerCase());
        if (specialCases.indexOf(p[2].toLowerCase()) > -1)
          p[2] = capitalize(p[2].toLowerCase());
      }
      return p.join("-");
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
  }
  isSupportedCode(code) {
    if (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) {
      code = this.getLanguagePartFromCode(code);
    }
    return !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(code) > -1;
  }
  getBestMatchFromCodes(codes) {
    if (!codes)
      return null;
    let found;
    codes.forEach((code) => {
      if (found)
        return;
      const cleanedLng = this.formatLanguageCode(code);
      if (!this.options.supportedLngs || this.isSupportedCode(cleanedLng))
        found = cleanedLng;
    });
    if (!found && this.options.supportedLngs) {
      codes.forEach((code) => {
        if (found)
          return;
        const lngOnly = this.getLanguagePartFromCode(code);
        if (this.isSupportedCode(lngOnly))
          return found = lngOnly;
        found = this.options.supportedLngs.find((supportedLng) => {
          if (supportedLng === lngOnly)
            return supportedLng;
          if (supportedLng.indexOf("-") < 0 && lngOnly.indexOf("-") < 0)
            return;
          if (supportedLng.indexOf(lngOnly) === 0)
            return supportedLng;
        });
      });
    }
    if (!found)
      found = this.getFallbackCodes(this.options.fallbackLng)[0];
    return found;
  }
  getFallbackCodes(fallbacks, code) {
    if (!fallbacks)
      return [];
    if (typeof fallbacks === "function")
      fallbacks = fallbacks(code);
    if (typeof fallbacks === "string")
      fallbacks = [fallbacks];
    if (Object.prototype.toString.apply(fallbacks) === "[object Array]")
      return fallbacks;
    if (!code)
      return fallbacks.default || [];
    let found = fallbacks[code];
    if (!found)
      found = fallbacks[this.getScriptPartFromCode(code)];
    if (!found)
      found = fallbacks[this.formatLanguageCode(code)];
    if (!found)
      found = fallbacks[this.getLanguagePartFromCode(code)];
    if (!found)
      found = fallbacks.default;
    return found || [];
  }
  toResolveHierarchy(code, fallbackCode) {
    const fallbackCodes = this.getFallbackCodes(fallbackCode || this.options.fallbackLng || [], code);
    const codes = [];
    const addCode = (c) => {
      if (!c)
        return;
      if (this.isSupportedCode(c)) {
        codes.push(c);
      } else {
        this.logger.warn(`rejecting language code not found in supportedLngs: ${c}`);
      }
    };
    if (typeof code === "string" && (code.indexOf("-") > -1 || code.indexOf("_") > -1)) {
      if (this.options.load !== "languageOnly")
        addCode(this.formatLanguageCode(code));
      if (this.options.load !== "languageOnly" && this.options.load !== "currentOnly")
        addCode(this.getScriptPartFromCode(code));
      if (this.options.load !== "currentOnly")
        addCode(this.getLanguagePartFromCode(code));
    } else if (typeof code === "string") {
      addCode(this.formatLanguageCode(code));
    }
    fallbackCodes.forEach((fc) => {
      if (codes.indexOf(fc) < 0)
        addCode(this.formatLanguageCode(fc));
    });
    return codes;
  }
};
var sets = [{
  lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
  nr: [1, 2],
  fc: 1
}, {
  lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
  nr: [1, 2],
  fc: 2
}, {
  lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
  nr: [1],
  fc: 3
}, {
  lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
  nr: [1, 2, 5],
  fc: 4
}, {
  lngs: ["ar"],
  nr: [0, 1, 2, 3, 11, 100],
  fc: 5
}, {
  lngs: ["cs", "sk"],
  nr: [1, 2, 5],
  fc: 6
}, {
  lngs: ["csb", "pl"],
  nr: [1, 2, 5],
  fc: 7
}, {
  lngs: ["cy"],
  nr: [1, 2, 3, 8],
  fc: 8
}, {
  lngs: ["fr"],
  nr: [1, 2],
  fc: 9
}, {
  lngs: ["ga"],
  nr: [1, 2, 3, 7, 11],
  fc: 10
}, {
  lngs: ["gd"],
  nr: [1, 2, 3, 20],
  fc: 11
}, {
  lngs: ["is"],
  nr: [1, 2],
  fc: 12
}, {
  lngs: ["jv"],
  nr: [0, 1],
  fc: 13
}, {
  lngs: ["kw"],
  nr: [1, 2, 3, 4],
  fc: 14
}, {
  lngs: ["lt"],
  nr: [1, 2, 10],
  fc: 15
}, {
  lngs: ["lv"],
  nr: [1, 2, 0],
  fc: 16
}, {
  lngs: ["mk"],
  nr: [1, 2],
  fc: 17
}, {
  lngs: ["mnk"],
  nr: [0, 1, 2],
  fc: 18
}, {
  lngs: ["mt"],
  nr: [1, 2, 11, 20],
  fc: 19
}, {
  lngs: ["or"],
  nr: [2, 1],
  fc: 2
}, {
  lngs: ["ro"],
  nr: [1, 2, 20],
  fc: 20
}, {
  lngs: ["sl"],
  nr: [5, 1, 2, 3],
  fc: 21
}, {
  lngs: ["he", "iw"],
  nr: [1, 2, 20, 21],
  fc: 22
}];
var _rulesPluralsTypes = {
  1: function(n) {
    return Number(n > 1);
  },
  2: function(n) {
    return Number(n != 1);
  },
  3: function(n) {
    return 0;
  },
  4: function(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  5: function(n) {
    return Number(n == 0 ? 0 : n == 1 ? 1 : n == 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5);
  },
  6: function(n) {
    return Number(n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2);
  },
  7: function(n) {
    return Number(n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  8: function(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n != 8 && n != 11 ? 2 : 3);
  },
  9: function(n) {
    return Number(n >= 2);
  },
  10: function(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4);
  },
  11: function(n) {
    return Number(n == 1 || n == 11 ? 0 : n == 2 || n == 12 ? 1 : n > 2 && n < 20 ? 2 : 3);
  },
  12: function(n) {
    return Number(n % 10 != 1 || n % 100 == 11);
  },
  13: function(n) {
    return Number(n !== 0);
  },
  14: function(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n == 3 ? 2 : 3);
  },
  15: function(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  16: function(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n !== 0 ? 1 : 2);
  },
  17: function(n) {
    return Number(n == 1 || n % 10 == 1 && n % 100 != 11 ? 0 : 1);
  },
  18: function(n) {
    return Number(n == 0 ? 0 : n == 1 ? 1 : 2);
  },
  19: function(n) {
    return Number(n == 1 ? 0 : n == 0 || n % 100 > 1 && n % 100 < 11 ? 1 : n % 100 > 10 && n % 100 < 20 ? 2 : 3);
  },
  20: function(n) {
    return Number(n == 1 ? 0 : n == 0 || n % 100 > 0 && n % 100 < 20 ? 1 : 2);
  },
  21: function(n) {
    return Number(n % 100 == 1 ? 1 : n % 100 == 2 ? 2 : n % 100 == 3 || n % 100 == 4 ? 3 : 0);
  },
  22: function(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : (n < 0 || n > 10) && n % 10 == 0 ? 2 : 3);
  }
};
var nonIntlVersions = ["v1", "v2", "v3"];
var intlVersions = ["v4"];
var suffixesOrder = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function createRules() {
  const rules = {};
  sets.forEach((set) => {
    set.lngs.forEach((l) => {
      rules[l] = {
        numbers: set.nr,
        plurals: _rulesPluralsTypes[set.fc]
      };
    });
  });
  return rules;
}
var PluralResolver = class {
  constructor(languageUtils) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = languageUtils;
    this.options = options;
    this.logger = baseLogger.create("pluralResolver");
    if ((!this.options.compatibilityJSON || intlVersions.includes(this.options.compatibilityJSON)) && (typeof Intl === "undefined" || !Intl.PluralRules)) {
      this.options.compatibilityJSON = "v3";
      this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.");
    }
    this.rules = createRules();
  }
  addRule(lng, obj) {
    this.rules[lng] = obj;
  }
  getRule(code) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi()) {
      try {
        return new Intl.PluralRules(getCleanedCode(code), {
          type: options.ordinal ? "ordinal" : "cardinal"
        });
      } catch {
        return;
      }
    }
    return this.rules[code] || this.rules[this.languageUtils.getLanguagePartFromCode(code)];
  }
  needsPlural(code) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const rule = this.getRule(code, options);
    if (this.shouldUseIntlApi()) {
      return rule && rule.resolvedOptions().pluralCategories.length > 1;
    }
    return rule && rule.numbers.length > 1;
  }
  getPluralFormsOfKey(code, key) {
    let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(code, options).map((suffix) => `${key}${suffix}`);
  }
  getSuffixes(code) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const rule = this.getRule(code, options);
    if (!rule) {
      return [];
    }
    if (this.shouldUseIntlApi()) {
      return rule.resolvedOptions().pluralCategories.sort((pluralCategory1, pluralCategory2) => suffixesOrder[pluralCategory1] - suffixesOrder[pluralCategory2]).map((pluralCategory) => `${this.options.prepend}${options.ordinal ? `ordinal${this.options.prepend}` : ""}${pluralCategory}`);
    }
    return rule.numbers.map((number) => this.getSuffix(code, number, options));
  }
  getSuffix(code, count) {
    let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const rule = this.getRule(code, options);
    if (rule) {
      if (this.shouldUseIntlApi()) {
        return `${this.options.prepend}${options.ordinal ? `ordinal${this.options.prepend}` : ""}${rule.select(count)}`;
      }
      return this.getSuffixRetroCompatible(rule, count);
    }
    this.logger.warn(`no plural rule found for: ${code}`);
    return "";
  }
  getSuffixRetroCompatible(rule, count) {
    const idx = rule.noAbs ? rule.plurals(count) : rule.plurals(Math.abs(count));
    let suffix = rule.numbers[idx];
    if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
      if (suffix === 2) {
        suffix = "plural";
      } else if (suffix === 1) {
        suffix = "";
      }
    }
    const returnSuffix = () => this.options.prepend && suffix.toString() ? this.options.prepend + suffix.toString() : suffix.toString();
    if (this.options.compatibilityJSON === "v1") {
      if (suffix === 1)
        return "";
      if (typeof suffix === "number")
        return `_plural_${suffix.toString()}`;
      return returnSuffix();
    } else if (this.options.compatibilityJSON === "v2") {
      return returnSuffix();
    } else if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
      return returnSuffix();
    }
    return this.options.prepend && idx.toString() ? this.options.prepend + idx.toString() : idx.toString();
  }
  shouldUseIntlApi() {
    return !nonIntlVersions.includes(this.options.compatibilityJSON);
  }
};
function deepFindWithDefaults(data, defaultData, key) {
  let keySeparator = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".";
  let ignoreJSONStructure = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true;
  let path = getPathWithDefaults(data, defaultData, key);
  if (!path && ignoreJSONStructure && typeof key === "string") {
    path = deepFind(data, key, keySeparator);
    if (path === void 0)
      path = deepFind(defaultData, key, keySeparator);
  }
  return path;
}
var Interpolator = class {
  constructor() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = baseLogger.create("interpolator");
    this.options = options;
    this.format = options.interpolation && options.interpolation.format || ((value) => value);
    this.init(options);
  }
  init() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!options.interpolation)
      options.interpolation = {
        escapeValue: true
      };
    const iOpts = options.interpolation;
    this.escape = iOpts.escape !== void 0 ? iOpts.escape : escape;
    this.escapeValue = iOpts.escapeValue !== void 0 ? iOpts.escapeValue : true;
    this.useRawValueToEscape = iOpts.useRawValueToEscape !== void 0 ? iOpts.useRawValueToEscape : false;
    this.prefix = iOpts.prefix ? regexEscape(iOpts.prefix) : iOpts.prefixEscaped || "{{";
    this.suffix = iOpts.suffix ? regexEscape(iOpts.suffix) : iOpts.suffixEscaped || "}}";
    this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ",";
    this.unescapePrefix = iOpts.unescapeSuffix ? "" : iOpts.unescapePrefix || "-";
    this.unescapeSuffix = this.unescapePrefix ? "" : iOpts.unescapeSuffix || "";
    this.nestingPrefix = iOpts.nestingPrefix ? regexEscape(iOpts.nestingPrefix) : iOpts.nestingPrefixEscaped || regexEscape("$t(");
    this.nestingSuffix = iOpts.nestingSuffix ? regexEscape(iOpts.nestingSuffix) : iOpts.nestingSuffixEscaped || regexEscape(")");
    this.nestingOptionsSeparator = iOpts.nestingOptionsSeparator ? iOpts.nestingOptionsSeparator : iOpts.nestingOptionsSeparator || ",";
    this.maxReplaces = iOpts.maxReplaces ? iOpts.maxReplaces : 1e3;
    this.alwaysFormat = iOpts.alwaysFormat !== void 0 ? iOpts.alwaysFormat : false;
    this.resetRegExp();
  }
  reset() {
    if (this.options)
      this.init(this.options);
  }
  resetRegExp() {
    const regexpStr = `${this.prefix}(.+?)${this.suffix}`;
    this.regexp = new RegExp(regexpStr, "g");
    const regexpUnescapeStr = `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`;
    this.regexpUnescape = new RegExp(regexpUnescapeStr, "g");
    const nestingRegexpStr = `${this.nestingPrefix}(.+?)${this.nestingSuffix}`;
    this.nestingRegexp = new RegExp(nestingRegexpStr, "g");
  }
  interpolate(str, data, lng, options) {
    let match;
    let value;
    let replaces;
    const defaultData = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
    function regexSafe(val) {
      return val.replace(/\$/g, "$$$$");
    }
    const handleFormat = (key) => {
      if (key.indexOf(this.formatSeparator) < 0) {
        const path = deepFindWithDefaults(data, defaultData, key, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(path, void 0, lng, {
          ...options,
          ...data,
          interpolationkey: key
        }) : path;
      }
      const p = key.split(this.formatSeparator);
      const k = p.shift().trim();
      const f = p.join(this.formatSeparator).trim();
      return this.format(deepFindWithDefaults(data, defaultData, k, this.options.keySeparator, this.options.ignoreJSONStructure), f, lng, {
        ...options,
        ...data,
        interpolationkey: k
      });
    };
    this.resetRegExp();
    const missingInterpolationHandler = options && options.missingInterpolationHandler || this.options.missingInterpolationHandler;
    const skipOnVariables = options && options.interpolation && options.interpolation.skipOnVariables !== void 0 ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    const todos = [{
      regex: this.regexpUnescape,
      safeValue: (val) => regexSafe(val)
    }, {
      regex: this.regexp,
      safeValue: (val) => this.escapeValue ? regexSafe(this.escape(val)) : regexSafe(val)
    }];
    todos.forEach((todo) => {
      replaces = 0;
      while (match = todo.regex.exec(str)) {
        const matchedVar = match[1].trim();
        value = handleFormat(matchedVar);
        if (value === void 0) {
          if (typeof missingInterpolationHandler === "function") {
            const temp = missingInterpolationHandler(str, match, options);
            value = typeof temp === "string" ? temp : "";
          } else if (options && Object.prototype.hasOwnProperty.call(options, matchedVar)) {
            value = "";
          } else if (skipOnVariables) {
            value = match[0];
            continue;
          } else {
            this.logger.warn(`missed to pass in variable ${matchedVar} for interpolating ${str}`);
            value = "";
          }
        } else if (typeof value !== "string" && !this.useRawValueToEscape) {
          value = makeString(value);
        }
        const safeValue = todo.safeValue(value);
        str = str.replace(match[0], safeValue);
        if (skipOnVariables) {
          todo.regex.lastIndex += value.length;
          todo.regex.lastIndex -= match[0].length;
        } else {
          todo.regex.lastIndex = 0;
        }
        replaces++;
        if (replaces >= this.maxReplaces) {
          break;
        }
      }
    });
    return str;
  }
  nest(str, fc) {
    let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    let match;
    let value;
    let clonedOptions;
    function handleHasOptions(key, inheritedOptions) {
      const sep = this.nestingOptionsSeparator;
      if (key.indexOf(sep) < 0)
        return key;
      const c = key.split(new RegExp(`${sep}[ ]*{`));
      let optionsString = `{${c[1]}`;
      key = c[0];
      optionsString = this.interpolate(optionsString, clonedOptions);
      const matchedSingleQuotes = optionsString.match(/'/g);
      const matchedDoubleQuotes = optionsString.match(/"/g);
      if (matchedSingleQuotes && matchedSingleQuotes.length % 2 === 0 && !matchedDoubleQuotes || matchedDoubleQuotes.length % 2 !== 0) {
        optionsString = optionsString.replace(/'/g, '"');
      }
      try {
        clonedOptions = JSON.parse(optionsString);
        if (inheritedOptions)
          clonedOptions = {
            ...inheritedOptions,
            ...clonedOptions
          };
      } catch (e) {
        this.logger.warn(`failed parsing options string in nesting for key ${key}`, e);
        return `${key}${sep}${optionsString}`;
      }
      delete clonedOptions.defaultValue;
      return key;
    }
    while (match = this.nestingRegexp.exec(str)) {
      let formatters = [];
      clonedOptions = {
        ...options
      };
      clonedOptions = clonedOptions.replace && typeof clonedOptions.replace !== "string" ? clonedOptions.replace : clonedOptions;
      clonedOptions.applyPostProcessor = false;
      delete clonedOptions.defaultValue;
      let doReduce = false;
      if (match[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(match[1])) {
        const r = match[1].split(this.formatSeparator).map((elem) => elem.trim());
        match[1] = r.shift();
        formatters = r;
        doReduce = true;
      }
      value = fc(handleHasOptions.call(this, match[1].trim(), clonedOptions), clonedOptions);
      if (value && match[0] === str && typeof value !== "string")
        return value;
      if (typeof value !== "string")
        value = makeString(value);
      if (!value) {
        this.logger.warn(`missed to resolve ${match[1]} for nesting ${str}`);
        value = "";
      }
      if (doReduce) {
        value = formatters.reduce((v, f) => this.format(v, f, options.lng, {
          ...options,
          interpolationkey: match[1].trim()
        }), value.trim());
      }
      str = str.replace(match[0], value);
      this.regexp.lastIndex = 0;
    }
    return str;
  }
};
function parseFormatStr(formatStr) {
  let formatName = formatStr.toLowerCase().trim();
  const formatOptions = {};
  if (formatStr.indexOf("(") > -1) {
    const p = formatStr.split("(");
    formatName = p[0].toLowerCase().trim();
    const optStr = p[1].substring(0, p[1].length - 1);
    if (formatName === "currency" && optStr.indexOf(":") < 0) {
      if (!formatOptions.currency)
        formatOptions.currency = optStr.trim();
    } else if (formatName === "relativetime" && optStr.indexOf(":") < 0) {
      if (!formatOptions.range)
        formatOptions.range = optStr.trim();
    } else {
      const opts = optStr.split(";");
      opts.forEach((opt) => {
        if (!opt)
          return;
        const [key, ...rest] = opt.split(":");
        const val = rest.join(":").trim().replace(/^'+|'+$/g, "");
        if (!formatOptions[key.trim()])
          formatOptions[key.trim()] = val;
        if (val === "false")
          formatOptions[key.trim()] = false;
        if (val === "true")
          formatOptions[key.trim()] = true;
        if (!isNaN(val))
          formatOptions[key.trim()] = parseInt(val, 10);
      });
    }
  }
  return {
    formatName,
    formatOptions
  };
}
function createCachedFormatter(fn) {
  const cache = {};
  return function invokeFormatter(val, lng, options) {
    const key = lng + JSON.stringify(options);
    let formatter = cache[key];
    if (!formatter) {
      formatter = fn(getCleanedCode(lng), options);
      cache[key] = formatter;
    }
    return formatter(val);
  };
}
var Formatter = class {
  constructor() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = baseLogger.create("formatter");
    this.options = options;
    this.formats = {
      number: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.NumberFormat(lng, {
          ...opt
        });
        return (val) => formatter.format(val);
      }),
      currency: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.NumberFormat(lng, {
          ...opt,
          style: "currency"
        });
        return (val) => formatter.format(val);
      }),
      datetime: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.DateTimeFormat(lng, {
          ...opt
        });
        return (val) => formatter.format(val);
      }),
      relativetime: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.RelativeTimeFormat(lng, {
          ...opt
        });
        return (val) => formatter.format(val, opt.range || "day");
      }),
      list: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.ListFormat(lng, {
          ...opt
        });
        return (val) => formatter.format(val);
      })
    };
    this.init(options);
  }
  init(services) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    const iOpts = options.interpolation;
    this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ",";
  }
  add(name, fc) {
    this.formats[name.toLowerCase().trim()] = fc;
  }
  addCached(name, fc) {
    this.formats[name.toLowerCase().trim()] = createCachedFormatter(fc);
  }
  format(value, format, lng) {
    let options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const formats = format.split(this.formatSeparator);
    const result = formats.reduce((mem, f) => {
      const {
        formatName,
        formatOptions
      } = parseFormatStr(f);
      if (this.formats[formatName]) {
        let formatted = mem;
        try {
          const valOptions = options && options.formatParams && options.formatParams[options.interpolationkey] || {};
          const l = valOptions.locale || valOptions.lng || options.locale || options.lng || lng;
          formatted = this.formats[formatName](mem, l, {
            ...formatOptions,
            ...options,
            ...valOptions
          });
        } catch (error) {
          this.logger.warn(error);
        }
        return formatted;
      } else {
        this.logger.warn(`there was no format function for ${formatName}`);
      }
      return mem;
    }, value);
    return result;
  }
};
function removePending(q, name) {
  if (q.pending[name] !== void 0) {
    delete q.pending[name];
    q.pendingCount--;
  }
}
var Connector = class extends EventEmitter {
  constructor(backend, store, services) {
    let options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super();
    this.backend = backend;
    this.store = store;
    this.services = services;
    this.languageUtils = services.languageUtils;
    this.options = options;
    this.logger = baseLogger.create("backendConnector");
    this.waitingReads = [];
    this.maxParallelReads = options.maxParallelReads || 10;
    this.readingCalls = 0;
    this.maxRetries = options.maxRetries >= 0 ? options.maxRetries : 5;
    this.retryTimeout = options.retryTimeout >= 1 ? options.retryTimeout : 350;
    this.state = {};
    this.queue = [];
    if (this.backend && this.backend.init) {
      this.backend.init(services, options.backend, options);
    }
  }
  queueLoad(languages, namespaces, options, callback) {
    const toLoad = {};
    const pending = {};
    const toLoadLanguages = {};
    const toLoadNamespaces = {};
    languages.forEach((lng) => {
      let hasAllNamespaces = true;
      namespaces.forEach((ns) => {
        const name = `${lng}|${ns}`;
        if (!options.reload && this.store.hasResourceBundle(lng, ns)) {
          this.state[name] = 2;
        } else if (this.state[name] < 0)
          ;
        else if (this.state[name] === 1) {
          if (pending[name] === void 0)
            pending[name] = true;
        } else {
          this.state[name] = 1;
          hasAllNamespaces = false;
          if (pending[name] === void 0)
            pending[name] = true;
          if (toLoad[name] === void 0)
            toLoad[name] = true;
          if (toLoadNamespaces[ns] === void 0)
            toLoadNamespaces[ns] = true;
        }
      });
      if (!hasAllNamespaces)
        toLoadLanguages[lng] = true;
    });
    if (Object.keys(toLoad).length || Object.keys(pending).length) {
      this.queue.push({
        pending,
        pendingCount: Object.keys(pending).length,
        loaded: {},
        errors: [],
        callback
      });
    }
    return {
      toLoad: Object.keys(toLoad),
      pending: Object.keys(pending),
      toLoadLanguages: Object.keys(toLoadLanguages),
      toLoadNamespaces: Object.keys(toLoadNamespaces)
    };
  }
  loaded(name, err, data) {
    const s = name.split("|");
    const lng = s[0];
    const ns = s[1];
    if (err)
      this.emit("failedLoading", lng, ns, err);
    if (data) {
      this.store.addResourceBundle(lng, ns, data);
    }
    this.state[name] = err ? -1 : 2;
    const loaded = {};
    this.queue.forEach((q) => {
      pushPath(q.loaded, [lng], ns);
      removePending(q, name);
      if (err)
        q.errors.push(err);
      if (q.pendingCount === 0 && !q.done) {
        Object.keys(q.loaded).forEach((l) => {
          if (!loaded[l])
            loaded[l] = {};
          const loadedKeys = q.loaded[l];
          if (loadedKeys.length) {
            loadedKeys.forEach((n) => {
              if (loaded[l][n] === void 0)
                loaded[l][n] = true;
            });
          }
        });
        q.done = true;
        if (q.errors.length) {
          q.callback(q.errors);
        } else {
          q.callback();
        }
      }
    });
    this.emit("loaded", loaded);
    this.queue = this.queue.filter((q) => !q.done);
  }
  read(lng, ns, fcName) {
    let tried = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
    let wait = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout;
    let callback = arguments.length > 5 ? arguments[5] : void 0;
    if (!lng.length)
      return callback(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng,
        ns,
        fcName,
        tried,
        wait,
        callback
      });
      return;
    }
    this.readingCalls++;
    const resolver = (err, data) => {
      this.readingCalls--;
      if (this.waitingReads.length > 0) {
        const next = this.waitingReads.shift();
        this.read(next.lng, next.ns, next.fcName, next.tried, next.wait, next.callback);
      }
      if (err && data && tried < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, lng, ns, fcName, tried + 1, wait * 2, callback);
        }, wait);
        return;
      }
      callback(err, data);
    };
    const fc = this.backend[fcName].bind(this.backend);
    if (fc.length === 2) {
      try {
        const r = fc(lng, ns);
        if (r && typeof r.then === "function") {
          r.then((data) => resolver(null, data)).catch(resolver);
        } else {
          resolver(null, r);
        }
      } catch (err) {
        resolver(err);
      }
      return;
    }
    return fc(lng, ns, resolver);
  }
  prepareLoading(languages, namespaces) {
    let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    let callback = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend) {
      this.logger.warn("No backend was added via i18next.use. Will not load resources.");
      return callback && callback();
    }
    if (typeof languages === "string")
      languages = this.languageUtils.toResolveHierarchy(languages);
    if (typeof namespaces === "string")
      namespaces = [namespaces];
    const toLoad = this.queueLoad(languages, namespaces, options, callback);
    if (!toLoad.toLoad.length) {
      if (!toLoad.pending.length)
        callback();
      return null;
    }
    toLoad.toLoad.forEach((name) => {
      this.loadOne(name);
    });
  }
  load(languages, namespaces, callback) {
    this.prepareLoading(languages, namespaces, {}, callback);
  }
  reload(languages, namespaces, callback) {
    this.prepareLoading(languages, namespaces, {
      reload: true
    }, callback);
  }
  loadOne(name) {
    let prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const s = name.split("|");
    const lng = s[0];
    const ns = s[1];
    this.read(lng, ns, "read", void 0, void 0, (err, data) => {
      if (err)
        this.logger.warn(`${prefix}loading namespace ${ns} for language ${lng} failed`, err);
      if (!err && data)
        this.logger.log(`${prefix}loaded namespace ${ns} for language ${lng}`, data);
      this.loaded(name, err, data);
    });
  }
  saveMissing(languages, namespace, key, fallbackValue, isUpdate) {
    let options = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
    let clb = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(namespace)) {
      this.logger.warn(`did not save key "${key}" as the namespace "${namespace}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (key === void 0 || key === null || key === "")
      return;
    if (this.backend && this.backend.create) {
      const opts = {
        ...options,
        isUpdate
      };
      const fc = this.backend.create.bind(this.backend);
      if (fc.length < 6) {
        try {
          let r;
          if (fc.length === 5) {
            r = fc(languages, namespace, key, fallbackValue, opts);
          } else {
            r = fc(languages, namespace, key, fallbackValue);
          }
          if (r && typeof r.then === "function") {
            r.then((data) => clb(null, data)).catch(clb);
          } else {
            clb(null, r);
          }
        } catch (err) {
          clb(err);
        }
      } else {
        fc(languages, namespace, key, fallbackValue, clb, opts);
      }
    }
    if (!languages || !languages[0])
      return;
    this.store.addResource(languages[0], namespace, key, fallbackValue);
  }
};
function get() {
  return {
    debug: false,
    initImmediate: true,
    ns: ["translation"],
    defaultNS: ["translation"],
    fallbackLng: ["dev"],
    fallbackNS: false,
    supportedLngs: false,
    nonExplicitSupportedLngs: false,
    load: "all",
    preload: false,
    simplifyPluralSuffix: true,
    keySeparator: ".",
    nsSeparator: ":",
    pluralSeparator: "_",
    contextSeparator: "_",
    partialBundledLanguages: false,
    saveMissing: false,
    updateMissing: false,
    saveMissingTo: "fallback",
    saveMissingPlurals: true,
    missingKeyHandler: false,
    missingInterpolationHandler: false,
    postProcess: false,
    postProcessPassResolved: false,
    returnNull: false,
    returnEmptyString: true,
    returnObjects: false,
    joinArrays: false,
    returnedObjectHandler: false,
    parseMissingKeyHandler: false,
    appendNamespaceToMissingKey: false,
    appendNamespaceToCIMode: false,
    overloadTranslationOptionHandler: function handle(args) {
      let ret = {};
      if (typeof args[1] === "object")
        ret = args[1];
      if (typeof args[1] === "string")
        ret.defaultValue = args[1];
      if (typeof args[2] === "string")
        ret.tDescription = args[2];
      if (typeof args[2] === "object" || typeof args[3] === "object") {
        const options = args[3] || args[2];
        Object.keys(options).forEach((key) => {
          ret[key] = options[key];
        });
      }
      return ret;
    },
    interpolation: {
      escapeValue: true,
      format: (value, format, lng, options) => value,
      prefix: "{{",
      suffix: "}}",
      formatSeparator: ",",
      unescapePrefix: "-",
      nestingPrefix: "$t(",
      nestingSuffix: ")",
      nestingOptionsSeparator: ",",
      maxReplaces: 1e3,
      skipOnVariables: true
    }
  };
}
function transformOptions(options) {
  if (typeof options.ns === "string")
    options.ns = [options.ns];
  if (typeof options.fallbackLng === "string")
    options.fallbackLng = [options.fallbackLng];
  if (typeof options.fallbackNS === "string")
    options.fallbackNS = [options.fallbackNS];
  if (options.supportedLngs && options.supportedLngs.indexOf("cimode") < 0) {
    options.supportedLngs = options.supportedLngs.concat(["cimode"]);
  }
  return options;
}
function noop() {
}
function bindMemberFunctions(inst) {
  const mems = Object.getOwnPropertyNames(Object.getPrototypeOf(inst));
  mems.forEach((mem) => {
    if (typeof inst[mem] === "function") {
      inst[mem] = inst[mem].bind(inst);
    }
  });
}
var I18n = class extends EventEmitter {
  constructor() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    let callback = arguments.length > 1 ? arguments[1] : void 0;
    super();
    this.options = transformOptions(options);
    this.services = {};
    this.logger = baseLogger;
    this.modules = {
      external: []
    };
    bindMemberFunctions(this);
    if (callback && !this.isInitialized && !options.isClone) {
      if (!this.options.initImmediate) {
        this.init(options, callback);
        return this;
      }
      setTimeout(() => {
        this.init(options, callback);
      }, 0);
    }
  }
  init() {
    var _this = this;
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    let callback = arguments.length > 1 ? arguments[1] : void 0;
    if (typeof options === "function") {
      callback = options;
      options = {};
    }
    if (!options.defaultNS && options.defaultNS !== false && options.ns) {
      if (typeof options.ns === "string") {
        options.defaultNS = options.ns;
      } else if (options.ns.indexOf("translation") < 0) {
        options.defaultNS = options.ns[0];
      }
    }
    const defOpts = get();
    this.options = {
      ...defOpts,
      ...this.options,
      ...transformOptions(options)
    };
    if (this.options.compatibilityAPI !== "v1") {
      this.options.interpolation = {
        ...defOpts.interpolation,
        ...this.options.interpolation
      };
    }
    if (options.keySeparator !== void 0) {
      this.options.userDefinedKeySeparator = options.keySeparator;
    }
    if (options.nsSeparator !== void 0) {
      this.options.userDefinedNsSeparator = options.nsSeparator;
    }
    function createClassOnDemand(ClassOrObject) {
      if (!ClassOrObject)
        return null;
      if (typeof ClassOrObject === "function")
        return new ClassOrObject();
      return ClassOrObject;
    }
    if (!this.options.isClone) {
      if (this.modules.logger) {
        baseLogger.init(createClassOnDemand(this.modules.logger), this.options);
      } else {
        baseLogger.init(null, this.options);
      }
      let formatter;
      if (this.modules.formatter) {
        formatter = this.modules.formatter;
      } else if (typeof Intl !== "undefined") {
        formatter = Formatter;
      }
      const lu = new LanguageUtil(this.options);
      this.store = new ResourceStore(this.options.resources, this.options);
      const s = this.services;
      s.logger = baseLogger;
      s.resourceStore = this.store;
      s.languageUtils = lu;
      s.pluralResolver = new PluralResolver(lu, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      });
      if (formatter && (!this.options.interpolation.format || this.options.interpolation.format === defOpts.interpolation.format)) {
        s.formatter = createClassOnDemand(formatter);
        s.formatter.init(s, this.options);
        this.options.interpolation.format = s.formatter.format.bind(s.formatter);
      }
      s.interpolator = new Interpolator(this.options);
      s.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      };
      s.backendConnector = new Connector(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options);
      s.backendConnector.on("*", function(event) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        _this.emit(event, ...args);
      });
      if (this.modules.languageDetector) {
        s.languageDetector = createClassOnDemand(this.modules.languageDetector);
        if (s.languageDetector.init)
          s.languageDetector.init(s, this.options.detection, this.options);
      }
      if (this.modules.i18nFormat) {
        s.i18nFormat = createClassOnDemand(this.modules.i18nFormat);
        if (s.i18nFormat.init)
          s.i18nFormat.init(this);
      }
      this.translator = new Translator(this.services, this.options);
      this.translator.on("*", function(event) {
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }
        _this.emit(event, ...args);
      });
      this.modules.external.forEach((m) => {
        if (m.init)
          m.init(this);
      });
    }
    this.format = this.options.interpolation.format;
    if (!callback)
      callback = noop;
    if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const codes = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      if (codes.length > 0 && codes[0] !== "dev")
        this.options.lng = codes[0];
    }
    if (!this.services.languageDetector && !this.options.lng) {
      this.logger.warn("init: no languageDetector is used and no lng is defined");
    }
    const storeApi = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
    storeApi.forEach((fcName) => {
      this[fcName] = function() {
        return _this.store[fcName](...arguments);
      };
    });
    const storeApiChained = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
    storeApiChained.forEach((fcName) => {
      this[fcName] = function() {
        _this.store[fcName](...arguments);
        return _this;
      };
    });
    const deferred = defer();
    const load = () => {
      const finish = (err, t2) => {
        if (this.isInitialized && !this.initializedStoreOnce)
          this.logger.warn("init: i18next is already initialized. You should call init just once!");
        this.isInitialized = true;
        if (!this.options.isClone)
          this.logger.log("initialized", this.options);
        this.emit("initialized", this.options);
        deferred.resolve(t2);
        callback(err, t2);
      };
      if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized)
        return finish(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, finish);
    };
    if (this.options.resources || !this.options.initImmediate) {
      load();
    } else {
      setTimeout(load, 0);
    }
    return deferred;
  }
  loadResources(language) {
    let callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop;
    let usedCallback = callback;
    const usedLng = typeof language === "string" ? language : this.language;
    if (typeof language === "function")
      usedCallback = language;
    if (!this.options.resources || this.options.partialBundledLanguages) {
      if (usedLng && usedLng.toLowerCase() === "cimode")
        return usedCallback();
      const toLoad = [];
      const append = (lng) => {
        if (!lng)
          return;
        const lngs = this.services.languageUtils.toResolveHierarchy(lng);
        lngs.forEach((l) => {
          if (toLoad.indexOf(l) < 0)
            toLoad.push(l);
        });
      };
      if (!usedLng) {
        const fallbacks = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
        fallbacks.forEach((l) => append(l));
      } else {
        append(usedLng);
      }
      if (this.options.preload) {
        this.options.preload.forEach((l) => append(l));
      }
      this.services.backendConnector.load(toLoad, this.options.ns, (e) => {
        if (!e && !this.resolvedLanguage && this.language)
          this.setResolvedLanguage(this.language);
        usedCallback(e);
      });
    } else {
      usedCallback(null);
    }
  }
  reloadResources(lngs, ns, callback) {
    const deferred = defer();
    if (!lngs)
      lngs = this.languages;
    if (!ns)
      ns = this.options.ns;
    if (!callback)
      callback = noop;
    this.services.backendConnector.reload(lngs, ns, (err) => {
      deferred.resolve();
      callback(err);
    });
    return deferred;
  }
  use(module) {
    if (!module)
      throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!module.type)
      throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    if (module.type === "backend") {
      this.modules.backend = module;
    }
    if (module.type === "logger" || module.log && module.warn && module.error) {
      this.modules.logger = module;
    }
    if (module.type === "languageDetector") {
      this.modules.languageDetector = module;
    }
    if (module.type === "i18nFormat") {
      this.modules.i18nFormat = module;
    }
    if (module.type === "postProcessor") {
      postProcessor.addPostProcessor(module);
    }
    if (module.type === "formatter") {
      this.modules.formatter = module;
    }
    if (module.type === "3rdParty") {
      this.modules.external.push(module);
    }
    return this;
  }
  setResolvedLanguage(l) {
    if (!l || !this.languages)
      return;
    if (["cimode", "dev"].indexOf(l) > -1)
      return;
    for (let li = 0; li < this.languages.length; li++) {
      const lngInLngs = this.languages[li];
      if (["cimode", "dev"].indexOf(lngInLngs) > -1)
        continue;
      if (this.store.hasLanguageSomeTranslations(lngInLngs)) {
        this.resolvedLanguage = lngInLngs;
        break;
      }
    }
  }
  changeLanguage(lng, callback) {
    var _this2 = this;
    this.isLanguageChangingTo = lng;
    const deferred = defer();
    this.emit("languageChanging", lng);
    const setLngProps = (l) => {
      this.language = l;
      this.languages = this.services.languageUtils.toResolveHierarchy(l);
      this.resolvedLanguage = void 0;
      this.setResolvedLanguage(l);
    };
    const done = (err, l) => {
      if (l) {
        setLngProps(l);
        this.translator.changeLanguage(l);
        this.isLanguageChangingTo = void 0;
        this.emit("languageChanged", l);
        this.logger.log("languageChanged", l);
      } else {
        this.isLanguageChangingTo = void 0;
      }
      deferred.resolve(function() {
        return _this2.t(...arguments);
      });
      if (callback)
        callback(err, function() {
          return _this2.t(...arguments);
        });
    };
    const setLng = (lngs) => {
      if (!lng && !lngs && this.services.languageDetector)
        lngs = [];
      const l = typeof lngs === "string" ? lngs : this.services.languageUtils.getBestMatchFromCodes(lngs);
      if (l) {
        if (!this.language) {
          setLngProps(l);
        }
        if (!this.translator.language)
          this.translator.changeLanguage(l);
        if (this.services.languageDetector && this.services.languageDetector.cacheUserLanguage)
          this.services.languageDetector.cacheUserLanguage(l);
      }
      this.loadResources(l, (err) => {
        done(err, l);
      });
    };
    if (!lng && this.services.languageDetector && !this.services.languageDetector.async) {
      setLng(this.services.languageDetector.detect());
    } else if (!lng && this.services.languageDetector && this.services.languageDetector.async) {
      if (this.services.languageDetector.detect.length === 0) {
        this.services.languageDetector.detect().then(setLng);
      } else {
        this.services.languageDetector.detect(setLng);
      }
    } else {
      setLng(lng);
    }
    return deferred;
  }
  getFixedT(lng, ns, keyPrefix) {
    var _this3 = this;
    const fixedT = function(key, opts) {
      let options;
      if (typeof opts !== "object") {
        for (var _len3 = arguments.length, rest = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
          rest[_key3 - 2] = arguments[_key3];
        }
        options = _this3.options.overloadTranslationOptionHandler([key, opts].concat(rest));
      } else {
        options = {
          ...opts
        };
      }
      options.lng = options.lng || fixedT.lng;
      options.lngs = options.lngs || fixedT.lngs;
      options.ns = options.ns || fixedT.ns;
      options.keyPrefix = options.keyPrefix || keyPrefix || fixedT.keyPrefix;
      const keySeparator = _this3.options.keySeparator || ".";
      let resultKey;
      if (options.keyPrefix && Array.isArray(key)) {
        resultKey = key.map((k) => `${options.keyPrefix}${keySeparator}${k}`);
      } else {
        resultKey = options.keyPrefix ? `${options.keyPrefix}${keySeparator}${key}` : key;
      }
      return _this3.t(resultKey, options);
    };
    if (typeof lng === "string") {
      fixedT.lng = lng;
    } else {
      fixedT.lngs = lng;
    }
    fixedT.ns = ns;
    fixedT.keyPrefix = keyPrefix;
    return fixedT;
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(ns) {
    this.options.defaultNS = ns;
  }
  hasLoadedNamespace(ns) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized) {
      this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages);
      return false;
    }
    if (!this.languages || !this.languages.length) {
      this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages);
      return false;
    }
    const lng = options.lng || this.resolvedLanguage || this.languages[0];
    const fallbackLng = this.options ? this.options.fallbackLng : false;
    const lastLng = this.languages[this.languages.length - 1];
    if (lng.toLowerCase() === "cimode")
      return true;
    const loadNotPending = (l, n) => {
      const loadState = this.services.backendConnector.state[`${l}|${n}`];
      return loadState === -1 || loadState === 2;
    };
    if (options.precheck) {
      const preResult = options.precheck(this, loadNotPending);
      if (preResult !== void 0)
        return preResult;
    }
    if (this.hasResourceBundle(lng, ns))
      return true;
    if (!this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages)
      return true;
    if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns)))
      return true;
    return false;
  }
  loadNamespaces(ns, callback) {
    const deferred = defer();
    if (!this.options.ns) {
      if (callback)
        callback();
      return Promise.resolve();
    }
    if (typeof ns === "string")
      ns = [ns];
    ns.forEach((n) => {
      if (this.options.ns.indexOf(n) < 0)
        this.options.ns.push(n);
    });
    this.loadResources((err) => {
      deferred.resolve();
      if (callback)
        callback(err);
    });
    return deferred;
  }
  loadLanguages(lngs, callback) {
    const deferred = defer();
    if (typeof lngs === "string")
      lngs = [lngs];
    const preloaded = this.options.preload || [];
    const newLngs = lngs.filter((lng) => preloaded.indexOf(lng) < 0);
    if (!newLngs.length) {
      if (callback)
        callback();
      return Promise.resolve();
    }
    this.options.preload = preloaded.concat(newLngs);
    this.loadResources((err) => {
      deferred.resolve();
      if (callback)
        callback(err);
    });
    return deferred;
  }
  dir(lng) {
    if (!lng)
      lng = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language);
    if (!lng)
      return "rtl";
    const rtlLngs = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"];
    const languageUtils = this.services && this.services.languageUtils || new LanguageUtil(get());
    return rtlLngs.indexOf(languageUtils.getLanguagePartFromCode(lng)) > -1 || lng.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    let callback = arguments.length > 1 ? arguments[1] : void 0;
    return new I18n(options, callback);
  }
  cloneInstance() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    let callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop;
    const forkResourceStore = options.forkResourceStore;
    if (forkResourceStore)
      delete options.forkResourceStore;
    const mergedOptions = {
      ...this.options,
      ...options,
      ...{
        isClone: true
      }
    };
    const clone = new I18n(mergedOptions);
    if (options.debug !== void 0 || options.prefix !== void 0) {
      clone.logger = clone.logger.clone(options);
    }
    const membersToCopy = ["store", "services", "language"];
    membersToCopy.forEach((m) => {
      clone[m] = this[m];
    });
    clone.services = {
      ...this.services
    };
    clone.services.utils = {
      hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
    };
    if (forkResourceStore) {
      clone.store = new ResourceStore(this.store.data, mergedOptions);
      clone.services.resourceStore = clone.store;
    }
    clone.translator = new Translator(clone.services, mergedOptions);
    clone.translator.on("*", function(event) {
      for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        args[_key4 - 1] = arguments[_key4];
      }
      clone.emit(event, ...args);
    });
    clone.init(mergedOptions, callback);
    clone.translator.options = mergedOptions;
    clone.translator.backendConnector.services.utils = {
      hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
    };
    return clone;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
};
var instance = I18n.createInstance();
instance.createInstance = I18n.createInstance;
var createInstance = instance.createInstance;
var dir = instance.dir;
var init = instance.init;
var loadResources = instance.loadResources;
var reloadResources = instance.reloadResources;
var use = instance.use;
var changeLanguage = instance.changeLanguage;
var getFixedT = instance.getFixedT;
var t = instance.t;
var exists = instance.exists;
var setDefaultNamespace = instance.setDefaultNamespace;
var hasLoadedNamespace = instance.hasLoadedNamespace;
var loadNamespaces = instance.loadNamespaces;
var loadLanguages = instance.loadLanguages;

// src/i18n/locales/en/index.json
var en_default = {
  name: "WebChatGPT: ChatGPT with internet access",
  description: "Augment your ChatGPT prompts with relevant web search results through web browsing.",
  shortName: "WebChatGPT",
  shortcuts: {
    toggleWebAccess: "Toggle Web Access"
  },
  common: {
    log_out: "Log out",
    help: "Help",
    save: "Save",
    cancel: "Cancel",
    close: "Close",
    back: "Back",
    delete: "Delete",
    add: "Add",
    edit: "Edit",
    auto: "Auto",
    light: "Light",
    dark: "Dark",
    system: "System",
    visible: "Visible",
    hidden: "Hidden",
    enabled: "Enabled",
    disabled: "Disabled",
    settings: "Settings",
    contact_us: "Contact us",
    visibility: "Visibility",
    mode: "Mode",
    or: "OR",
    model: "Model",
    provider: "Provider",
    language: "Language",
    learn_more: "Learn more",
    read_more: "Read more",
    try_again: "Try again",
    stop: "Stop",
    copy: "Copy",
    copy_to_clipboard: "Copy to clipboard",
    copied: "Copied",
    paste: "Paste",
    loading: "Loading...",
    no_options: "No options",
    confirm: "Confirm"
  },
  settings: {
    left_menu__prompts: "One-click prompts",
    left_menu__web_access: "Web access",
    left_menu__search_with_ai: "Search with AI",
    left_menu__appearance: "Appearance",
    left_menu__language: "Language",
    left_menu__support: "Support",
    feature__prompts__title: "One-click prompts",
    feature__web_access__prompt_editor__title: "Prompt Editor",
    feature__web_access__new_prompt: "NEW PROMPT",
    feature__web_access__delete_prompt_confirm: "Are you sure you want to delete this prompt? Please note that once you delete it, the action cannot be undone.",
    feature__web_access__variable__web_result__tooltip: "Insert variable for the web results (optional)",
    feature__web_access__variable__current_date__tooltip: "Insert variable for the current date (optional)",
    feature__web_access__variable__query__tooltip: "Insert variable for the initial query (required)",
    feature__web_access__save_prompt_feedback: "Prompt saved",
    feature__web_access__delete_prompt_feedback: "Prompt deleted",
    feature__web_access__delete_prompt_confirm_button_text: "Yes, delete",
    feature__search_with_ai__title: "Display AI responses next to search results",
    feature__search_with_ai__trigger_mode__title: "When to display AI responses",
    feature__search_with_ai__trigger_mode__always__name: "Always",
    feature__search_with_ai__trigger_mode__always__desc: "Display AI response for every search.",
    "feature__search_with_ai__trigger_mode__question-mask__name": "Question mark",
    "feature__search_with_ai__trigger_mode__question-mask__desc": "Display AI response whenever your search query ends with a question mark.",
    feature__search_with_ai__trigger_mode__manual__name: "Manually",
    feature__search_with_ai__trigger_mode__manual__desc: "Display AI response only when you click a button manually.",
    feature__appearance__title: "Appearance",
    feature__preferred_language__title: "Preferred language",
    feature__preferred_language__field_preferred_language_title: "Choose your preferred language",
    feature__preferred_language__field_preferred_language_description: "View all interface text in your chosen language.",
    feature__preferred_language__select_label: "Preferred language",
    feature__support__join_discord__title: "Join our Discord community",
    feature__support__join_discord__card_title: "Join our Discord community",
    feature__support__join_discord__card_desc: "Join our Discord community where you can ask questions, find inspiration, and receive the newest updates and tips on WebChatGPT, prompts, AI, and more.",
    feature__support__join_discord__card_btn_text: "Join us on Discord",
    feature__support__leave_review__title: "Leave us a review",
    feature__support__leave_review__card_title: "Leave us a review",
    feature__support__leave_review__card_desc: "Your support and feedback means the whole world to us. They enable us to consistently improve and upgrade WebChatGPT, making it better and more useful for you.",
    feature__support__leave_review__card_btn_text: "Leave a review"
  },
  client: {
    chatgpt__web_access__new_prompt: "New prompt",
    chatgpt__textarea_placeholder: "Press / to open the commands menu",
    chatgpt__slash_command__title: "WebChatGPT Commands",
    chatgpt__slash_command__site__desc: "Restrict search results to a specific website, e.g. /site:wikipedia.com",
    chatgpt__slash_command__page__desc: "Get the content of a specific page, e.g. /page:maxai.me/prompts"
  }
};

// src/i18n/index.ts
instance.use(initReactI18next).init({
  resources: {
    en: en_default
  },
  defaultNS: ["common", "settings"],
  fallbackLng: "en",
  debug: true,
  interpolation: {
    escapeValue: false
    // not needed for react as it escapes by default
  },
  react: {
    bindI18nStore: "added"
  }
});

// src/hooks/useThemeModeWithChatGPT.ts
var import_react = __toESM(require_react());
var useThemeModeWithChatGPT = (enable = true) => {
  const [mode, setMode] = (0, import_react.useState)(() => {
    return document.documentElement.classList.contains("dark") ? "dark" : "light";
  });
  (0, import_react.useEffect)(() => {
    if (!enable) {
      return;
    }
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.target) {
          const newValue = mutation.target.getAttribute(
            mutation.attributeName
          );
          if (mutation.attributeName === "class") {
            setMode(newValue.includes("dark") ? "dark" : "light");
          }
        }
      });
    });
    observer.observe(document.documentElement, {
      attributes: true
    });
    return () => {
      observer.disconnect();
    };
  }, [enable]);
  return mode;
};
var useThemeModeWithChatGPT_default = useThemeModeWithChatGPT;

// src/components/AppTheme.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime());
var AppThemeProvider = (props) => {
  const chatGTPColorSchema = useThemeModeWithChatGPT_default(props.withChatGPT);
  const { customTheme } = customMuiTheme_default(
    props.withChatGPT ? chatGTPColorSchema : void 0
  );
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_system.ThemeProvider, { theme: customTheme, children: props.children });
};
var AppTheme_default = AppThemeProvider;

// src/components/ProLink.tsx
var import_react2 = __toESM(require_react());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var ProLink = (props) => {
  const { href, underline = "none", ...rest } = props;
  const ref = (0, import_react2.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    Link_default,
    {
      target: "_blank",
      ref,
      href: href ?? "#",
      component: "a",
      underline,
      ...rest
    }
  );
};
var ProLink_default = ProLink;

// src/components/AppInit/index.tsx
var import_react3 = __toESM(require_react());
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var UserConfigInit = () => {
  const setUserConfig = Recoil_index_24(UserConfigState);
  const firstLoaded = (0, import_react3.useRef)(true);
  (0, import_react3.useEffect)(() => {
    const updateAppSettings = async () => {
      const settings = await getCacheUserConfig();
      if (settings) {
        if (firstLoaded.current) {
          setUserConfig({
            ...settings,
            loaded: true
          });
          await updateCacheUserConfig({
            loaded: true
          });
          firstLoaded.current = false;
        } else {
          setUserConfig({
            ...settings
          });
        }
      }
    };
    updateAppSettings();
    window.addEventListener("focus", updateAppSettings);
    window.addEventListener(SYNC_USER_CONFIG_STORE_EVENT, updateAppSettings);
    return () => {
      window.removeEventListener("focus", updateAppSettings);
      window.removeEventListener(
        SYNC_USER_CONFIG_STORE_EVENT,
        updateAppSettings
      );
    };
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_jsx_runtime3.Fragment, {});
};

// src/i18n/hooks/index.ts
var import_react4 = __toESM(require_react());
var import_webextension_polyfill = __toESM(require_browser_polyfill());
var log = new Log_default("i18n");
var useLazyLoadI18nResources = () => {
  const { language } = Recoil_index_20(UserConfigState);
  const { i18n } = useTranslation();
  (0, import_react4.useEffect)(() => {
    const newLanguage = language || i18n.language;
    if (!i18n.hasResourceBundle(newLanguage, "name")) {
      fetch(import_webextension_polyfill.default.runtime.getURL(`i18n/locales/${newLanguage}/index.json`)).then((t2) => t2.json()).then((json) => {
        Object.keys(json).forEach((key) => {
          i18n.addResourceBundle(newLanguage, key, json[key], true, true);
        });
        log.info("load i18n resources success", newLanguage);
      }).catch((err) => {
        log.error("load i18n resources error", err);
      });
    }
  }, [i18n, language]);
};
var useInitI18n = () => {
  const { i18n } = useTranslation();
  const { language } = Recoil_index_20(UserConfigState);
  useLazyLoadI18nResources();
  (0, import_react4.useEffect)(() => {
    if (language) {
      i18n.changeLanguage(language, (err) => {
        if (err) {
          log.error("change language error", err);
        }
      });
    }
  }, [language]);
  (0, import_react4.useEffect)(() => {
    if (language) {
      i18n.changeLanguage(language, (err) => {
        if (err) {
          log.error("change language error", err);
        }
      });
    }
  }, [language]);
};

// src/components/CustomIcon.tsx
var import_SvgIcon = __toESM(require_SvgIcon());
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var Delete = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_SvgIcon.default, { viewBox: "0 0 20 20", sx: props.sx, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("svg", { viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    "path",
    {
      d: "M4.66699 14C4.30033 14 3.98644 13.8694 3.72533 13.6083C3.46421 13.3472 3.33366 13.0333 3.33366 12.6667V4H2.66699V2.66667H6.00033V2H10.0003V2.66667H13.3337V4H12.667V12.6667C12.667 13.0333 12.5364 13.3472 12.2753 13.6083C12.0142 13.8694 11.7003 14 11.3337 14H4.66699ZM11.3337 4H4.66699V12.6667H11.3337V4ZM6.00033 11.3333H7.33366V5.33333H6.00033V11.3333ZM8.66699 11.3333H10.0003V5.33333H8.66699V11.3333Z",
      fill: "currentColor"
    }
  ) }) });
};
var Edit = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_SvgIcon.default, { viewBox: "0 0 20 20", sx: props.sx, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("svg", { viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    "path",
    {
      d: "M3.33333 13.8C2.96667 13.8 2.65278 13.6695 2.39167 13.4084C2.13056 13.1473 2 12.8334 2 12.4667V3.13337C2 2.7667 2.13056 2.45281 2.39167 2.1917C2.65278 1.93059 2.96667 1.80003 3.33333 1.80003H9.28333L7.95 3.13337H3.33333V12.4667H12.6667V7.83337L14 6.50003V12.4667C14 12.8334 13.8694 13.1473 13.6083 13.4084C13.3472 13.6695 13.0333 13.8 12.6667 13.8H3.33333ZM10.7833 2.18337L11.7333 3.1167L7.33333 7.5167V8.4667H8.26667L12.6833 4.05003L13.6333 4.98337L8.83333 9.80003H6V6.9667L10.7833 2.18337ZM13.6333 4.98337L10.7833 2.18337L12.45 0.516699C12.7167 0.250033 13.0361 0.116699 13.4083 0.116699C13.7806 0.116699 14.0944 0.250033 14.35 0.516699L15.2833 1.4667C15.5389 1.72225 15.6667 2.03337 15.6667 2.40003C15.6667 2.7667 15.5389 3.07781 15.2833 3.33337L13.6333 4.98337Z",
      fill: "currentColor"
    }
  ) }) });
};
var ChatGPTIcon = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_SvgIcon.default, { viewBox: "0 0 24 24", sx: props.sx, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("g", { clipPath: "url(#clip0_4133_35975)", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "path",
        {
          d: "M20 0H4C1.79086 0 0 1.79086 0 4V20C0 22.2091 1.79086 24 4 24H20C22.2091 24 24 22.2091 24 20V4C24 1.79086 22.2091 0 20 0Z",
          fill: "#0FA47F"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "path",
        {
          d: "M19.8134 10.3669C20.0179 9.76086 20.0888 9.11884 20.0215 8.48367C19.9541 7.8485 19.75 7.23485 19.4228 6.68381C18.9378 5.85033 18.197 5.19043 17.3073 4.79933C16.4175 4.40824 15.4248 4.30617 14.4724 4.50786C14.0428 4.03019 13.5148 3.64857 12.9236 3.38854C12.3325 3.12851 11.6919 2.99607 11.0447 3.00009C10.0709 2.99778 9.12167 3.30061 8.33362 3.86497C7.54557 4.42931 6.95954 5.22601 6.65998 6.14017C6.02565 6.2683 5.42637 6.52864 4.90228 6.90378C4.37818 7.27893 3.94135 7.7602 3.62103 8.31541C3.13216 9.14661 2.92348 10.1094 3.02509 11.0653C3.1267 12.021 3.53334 12.9202 4.18638 13.6332C3.9819 14.2391 3.91098 14.8812 3.97833 15.5164C4.04569 16.1515 4.24978 16.7652 4.57695 17.3162C5.062 18.1497 5.80283 18.8095 6.69259 19.2007C7.58234 19.5917 8.57502 19.6938 9.52738 19.4922C9.95701 19.9698 10.485 20.3515 11.0761 20.6115C11.6673 20.8715 12.3079 21.0039 12.955 20.9999C13.9293 21.0024 14.8791 20.6995 15.6674 20.1348C16.4558 19.5701 17.042 18.7728 17.3412 17.8581C17.9756 17.73 18.5748 17.4696 19.099 17.0945C19.623 16.7193 20.0598 16.238 20.3801 15.6829C20.8685 14.8518 21.0766 13.8891 20.9748 12.9336C20.8729 11.9783 20.4663 11.0795 19.8134 10.3669ZM12.9566 19.8233C12.1568 19.8244 11.3822 19.548 10.7681 19.0426C10.7959 19.0277 10.8444 19.0015 10.876 18.9823L14.5084 16.9121C14.5996 16.8609 14.6753 16.7866 14.7277 16.697C14.7802 16.6074 14.8075 16.5056 14.8069 16.4022V11.3494L16.3422 12.2241C16.3502 12.2281 16.3571 12.2339 16.3624 12.2412C16.3676 12.2485 16.3708 12.2568 16.372 12.2656V16.45C16.3708 17.3438 16.0107 18.2006 15.3706 18.8328C14.7304 19.4651 13.8623 19.8213 12.9566 19.8233ZM5.61127 16.7279C5.2107 16.0449 5.06633 15.2448 5.20344 14.4675C5.23041 14.4834 5.27753 14.5118 5.31133 14.531L8.94366 16.6012C9.03419 16.6533 9.13717 16.6809 9.24202 16.6809C9.34683 16.6809 9.44981 16.6533 9.54034 16.6012L13.975 14.0746V15.8241C13.9755 15.833 13.9738 15.8419 13.97 15.8501C13.9661 15.8582 13.9604 15.8652 13.9531 15.8706L10.2812 17.9624C9.49578 18.4088 8.56298 18.5294 7.6875 18.298C6.81201 18.0665 6.06532 17.5019 5.61127 16.7279ZM4.65571 8.90375C5.05454 8.21992 5.68448 7.69639 6.4352 7.42473C6.4352 7.4556 6.4334 7.51027 6.4334 7.5482V11.6886C6.43277 11.792 6.46006 11.8937 6.51245 11.9834C6.56484 12.0729 6.64047 12.147 6.73155 12.1982L11.1663 14.7244L9.63096 15.5991C9.62339 15.6041 9.61468 15.607 9.60565 15.6078C9.59662 15.6086 9.5875 15.6072 9.57915 15.6038L5.90689 13.51C5.12286 13.0621 4.55086 12.3255 4.31631 11.462C4.08177 10.5986 4.20382 9.6786 4.65571 8.90375ZM17.2697 11.8L12.835 9.27351L14.3703 8.39916C14.3779 8.39426 14.3865 8.39124 14.3955 8.39043C14.4047 8.38962 14.4137 8.39106 14.422 8.39457L18.0944 10.4864C18.657 10.807 19.1152 11.2792 19.4158 11.8476C19.7163 12.416 19.8464 13.0571 19.791 13.6958C19.7355 14.3345 19.4968 14.9445 19.1028 15.4542C18.7087 15.9639 18.1757 16.3523 17.566 16.5738C17.566 16.5426 17.566 16.4881 17.566 16.45V12.3096C17.5668 12.2064 17.5398 12.1048 17.4878 12.0152C17.4357 11.9256 17.3604 11.8515 17.2697 11.8ZM18.7978 9.53077C18.7708 9.51445 18.7237 9.4864 18.6899 9.46728L15.0576 7.39705C14.9669 7.34494 14.8641 7.31745 14.7592 7.31745C14.6544 7.31745 14.5514 7.34494 14.4609 7.39705L10.0261 9.92365V8.17421C10.0257 8.16525 10.0274 8.15634 10.0313 8.14823C10.035 8.14014 10.0409 8.13308 10.0481 8.12772L13.72 6.03762C14.2825 5.71758 14.9258 5.5622 15.5747 5.58968C16.2234 5.61716 16.8507 5.82636 17.3835 6.1928C17.9161 6.55924 18.332 7.06776 18.5825 7.6589C18.833 8.25003 18.9076 8.89929 18.7978 9.53077ZM9.19149 12.6489L7.65581 11.7742C7.64778 11.7702 7.64081 11.7644 7.6356 11.7571C7.6304 11.7498 7.62707 11.7415 7.62598 11.7326V7.5482C7.62639 6.90734 7.81183 6.27983 8.16054 5.73914C8.5093 5.19846 9.00692 4.76697 9.59516 4.49519C10.1834 4.22342 10.8379 4.12259 11.4821 4.20452C12.1263 4.28645 12.7336 4.54774 13.2327 4.95781C13.2051 4.97271 13.1568 4.99898 13.1248 5.01814L9.4925 7.08834C9.40133 7.13946 9.32567 7.21361 9.27317 7.30318C9.22073 7.39273 9.19341 7.49448 9.194 7.59788L9.19149 12.6489ZM10.0254 10.8746L12.0006 9.74903L13.9757 10.8739V13.1244L12.0006 14.2492L10.0254 13.1244V10.8746Z",
          fill: "white"
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("clipPath", { id: "clip0_4133_35975", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("rect", { width: "24", height: "24", fill: "white" }) }) })
  ] }) });
};
var BingIcon = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_SvgIcon.default, { ...props, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
    "svg",
    {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("g", { clipPath: "url(#clip0_234_9664)", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "path",
            {
              d: "M11.3268 8.32338C11.3232 8.35219 11.3232 8.3849 11.3232 8.417C11.3232 8.54183 11.3481 8.66186 11.3932 8.77229L11.4334 8.85511L11.5924 9.262L12.4185 11.3694L13.139 13.2097C13.3445 13.5812 13.6737 13.8729 14.0707 14.0283L14.194 14.0736C14.1988 14.0751 14.2069 14.0751 14.2135 14.0769L16.1883 14.756V14.7575L16.9433 15.0168L16.9949 15.0342C16.9967 15.0342 16.9997 15.036 17.0015 15.036C17.1503 15.0735 17.2962 15.1239 17.4354 15.1854C17.7574 15.3243 18.0493 15.5224 18.2987 15.7639C18.3992 15.86 18.4916 15.9635 18.5772 16.0739C18.65 16.1666 18.7165 16.2641 18.7764 16.3656C19.0399 16.8031 19.1911 17.3174 19.1911 17.865C19.1911 17.9629 19.1863 18.0574 19.1764 18.1534C19.1731 18.1957 19.168 18.2365 19.1617 18.277V18.2803C19.1551 18.3233 19.147 18.3677 19.1389 18.4112C19.1305 18.4535 19.1227 18.4955 19.1131 18.5375C19.1116 18.5423 19.1098 18.5474 19.108 18.5522C19.099 18.5948 19.0876 18.6368 19.0759 18.6791C19.0654 18.7191 19.0522 18.7602 19.0375 18.7989C19.0245 18.8412 19.0094 18.8829 18.9922 18.9237C18.9775 18.9657 18.9601 19.0083 18.9406 19.0485C18.8871 19.1719 18.8235 19.2904 18.7521 19.4035C18.66 19.5521 18.5549 19.6922 18.4379 19.8221C19.3646 18.8259 19.9806 17.5395 20.1339 16.1159C20.1597 15.8825 20.1729 15.6457 20.1729 15.4075C20.1729 15.2553 20.1663 15.1047 20.1564 14.9535C20.0397 13.2464 19.2625 11.7196 18.0763 10.63C17.7493 10.3273 17.3919 10.0578 17.0075 9.82914L16.2813 9.45795L12.6015 7.5696C12.4884 7.5211 12.3666 7.49619 12.2436 7.49638C11.767 7.49638 11.3737 7.85977 11.3268 8.32338Z",
              fill: "#7F7F7F"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "path",
            {
              d: "M11.3268 8.32338C11.3232 8.35219 11.3232 8.3849 11.3232 8.417C11.3232 8.54183 11.3481 8.66186 11.3932 8.77229L11.4334 8.85511L11.5924 9.262L12.4185 11.3694L13.139 13.2097C13.3445 13.5812 13.6737 13.8729 14.0707 14.0283L14.194 14.0736C14.1988 14.0751 14.2069 14.0751 14.2135 14.0769L16.1883 14.756V14.7575L16.9433 15.0168L16.9949 15.0342C16.9967 15.0342 16.9997 15.036 17.0015 15.036C17.1503 15.0735 17.2962 15.1239 17.4354 15.1854C17.7574 15.3243 18.0493 15.5224 18.2987 15.7639C18.3992 15.86 18.4916 15.9635 18.5772 16.0739C18.65 16.1666 18.7165 16.2641 18.7764 16.3656C19.0399 16.8031 19.1911 17.3174 19.1911 17.865C19.1911 17.9629 19.1863 18.0574 19.1764 18.1534C19.1731 18.1957 19.168 18.2365 19.1617 18.277V18.2803C19.1551 18.3233 19.147 18.3677 19.1389 18.4112C19.1305 18.4535 19.1227 18.4955 19.1131 18.5375C19.1116 18.5423 19.1098 18.5474 19.108 18.5522C19.099 18.5948 19.0876 18.6368 19.0759 18.6791C19.0654 18.7191 19.0522 18.7602 19.0375 18.7989C19.0245 18.8412 19.0094 18.8829 18.9922 18.9237C18.9775 18.9657 18.9601 19.0083 18.9406 19.0485C18.8871 19.1719 18.8235 19.2904 18.7521 19.4035C18.66 19.5521 18.5549 19.6922 18.4379 19.8221C19.3646 18.8259 19.9806 17.5395 20.1339 16.1159C20.1597 15.8825 20.1729 15.6457 20.1729 15.4075C20.1729 15.2553 20.1663 15.1047 20.1564 14.9535C20.0397 13.2464 19.2625 11.7196 18.0763 10.63C17.7493 10.3273 17.3919 10.0578 17.0075 9.82914L16.2813 9.45795L12.6015 7.5696C12.4884 7.5211 12.3666 7.49619 12.2436 7.49638C11.767 7.49638 11.3737 7.85977 11.3268 8.32338Z",
              fill: "url(#paint0_linear_234_9664)"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "path",
            {
              d: "M4.77459 0C4.25097 0.00930221 3.83057 0.437804 3.83057 0.961729V17.7375C3.83267 17.8545 3.83927 17.9701 3.84767 18.0874C3.85517 18.1492 3.86327 18.2134 3.87468 18.2758C4.11383 19.6223 5.28531 20.644 6.69985 20.644C7.19587 20.644 7.66098 20.5177 8.06787 20.298C8.07027 20.2962 8.07447 20.2938 8.07657 20.2938L8.22301 20.2053L8.81655 19.856L9.57153 19.408L9.57333 4.50257C9.57333 3.51203 9.07761 2.63883 8.31873 2.12C8.30073 2.1092 8.28332 2.0978 8.26742 2.0849L5.32972 0.163839C5.18089 0.0654155 5.00144 0.00360086 4.8091 0H4.77459Z",
              fill: "#7F7F7F"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "path",
            {
              d: "M4.77459 0C4.25097 0.00930221 3.83057 0.437804 3.83057 0.961729V17.7375C3.83267 17.8545 3.83927 17.9701 3.84767 18.0874C3.85517 18.1492 3.86327 18.2134 3.87468 18.2758C4.11383 19.6223 5.28531 20.644 6.69985 20.644C7.19587 20.644 7.66098 20.5177 8.06787 20.298C8.07027 20.2962 8.07447 20.2938 8.07657 20.2938L8.22301 20.2053L8.81655 19.856L9.57153 19.408L9.57333 4.50257C9.57333 3.51203 9.07761 2.63883 8.31873 2.12C8.30073 2.1092 8.28332 2.0978 8.26742 2.0849L5.32972 0.163839C5.18089 0.0654155 5.00144 0.00360086 4.8091 0H4.77459Z",
              fill: "url(#paint1_linear_234_9664)"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "path",
            {
              d: "M16.4233 15.3258L9.66896 19.3294L9.57174 19.3879V19.4092L8.81676 19.8563L8.22352 20.2065L8.07799 20.2944L8.06808 20.2992C7.66209 20.5198 7.19668 20.6446 6.70096 20.6446C5.28672 20.6446 4.11374 19.6235 3.87549 18.2764C3.98862 19.2619 4.32439 20.1792 4.83092 20.9783C5.87396 22.6248 7.63778 23.7701 9.67827 23.9691H10.926C12.0296 23.8539 12.9511 23.4119 13.9198 22.815L15.4093 21.904C16.0803 21.474 17.9014 20.4162 18.4379 19.8227C18.5547 19.6928 18.66 19.5535 18.7521 19.4044C18.8235 19.291 18.8872 19.1725 18.9406 19.0491C18.9586 19.0071 18.9757 18.9663 18.9922 18.9246C19.0078 18.8832 19.0225 18.8415 19.0375 18.7992C19.0654 18.7181 19.0876 18.6368 19.1089 18.5531C19.1197 18.5054 19.1296 18.4583 19.1395 18.4115C19.1719 18.2347 19.1896 18.0532 19.1896 17.865C19.1896 17.3174 19.0384 16.8031 18.7764 16.3662C18.7164 16.2642 18.6504 16.1666 18.5772 16.0745C18.4917 15.9635 18.3992 15.8606 18.2987 15.7645C18.0494 15.523 17.7583 15.3249 17.4354 15.1857C17.2962 15.1242 17.1509 15.0735 17.0015 15.0366C16.9997 15.0366 16.9967 15.0348 16.9949 15.0348L16.9433 15.0174L16.4233 15.3258Z",
              fill: "#7F7F7F"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "path",
            {
              d: "M16.4233 15.3258L9.66896 19.3294L9.57174 19.3879V19.4092L8.81676 19.8563L8.22352 20.2065L8.07799 20.2944L8.06808 20.2992C7.66209 20.5198 7.19668 20.6446 6.70096 20.6446C5.28672 20.6446 4.11374 19.6235 3.87549 18.2764C3.98862 19.2619 4.32439 20.1792 4.83092 20.9783C5.87396 22.6248 7.63778 23.7701 9.67827 23.9691H10.926C12.0296 23.8539 12.9511 23.4119 13.9198 22.815L15.4093 21.904C16.0803 21.474 17.9014 20.4162 18.4379 19.8227C18.5547 19.6928 18.66 19.5535 18.7521 19.4044C18.8235 19.291 18.8872 19.1725 18.9406 19.0491C18.9586 19.0071 18.9757 18.9663 18.9922 18.9246C19.0078 18.8832 19.0225 18.8415 19.0375 18.7992C19.0654 18.7181 19.0876 18.6368 19.1089 18.5531C19.1197 18.5054 19.1296 18.4583 19.1395 18.4115C19.1719 18.2347 19.1896 18.0532 19.1896 17.865C19.1896 17.3174 19.0384 16.8031 18.7764 16.3662C18.7164 16.2642 18.6504 16.1666 18.5772 16.0745C18.4917 15.9635 18.3992 15.8606 18.2987 15.7645C18.0494 15.523 17.7583 15.3249 17.4354 15.1857C17.2962 15.1242 17.1509 15.0735 17.0015 15.0366C16.9997 15.0366 16.9967 15.0348 16.9949 15.0348L16.9433 15.0174L16.4233 15.3258Z",
              fill: "url(#paint2_linear_234_9664)"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "path",
            {
              opacity: "0.15",
              d: "M19.1896 17.865C19.1896 18.0532 19.1719 18.235 19.1392 18.4118C19.1296 18.4586 19.1197 18.5054 19.1086 18.5528C19.0876 18.6368 19.0654 18.7181 19.0375 18.7995C19.0228 18.8415 19.0078 18.8835 18.9922 18.9243C18.976 18.9663 18.9586 19.0071 18.9403 19.0491C18.8868 19.1721 18.824 19.2907 18.7524 19.4041C18.6604 19.5527 18.5552 19.6927 18.4379 19.8224C17.9014 20.4162 16.0803 21.474 15.4093 21.904L13.9198 22.815C12.8278 23.4878 11.7962 23.964 10.4951 23.9967C10.4335 23.9985 10.3732 24 10.3135 24C10.2295 24 10.1467 23.9985 10.0636 23.9952C7.86043 23.9112 5.93908 22.7274 4.83092 20.9783C4.31238 20.1614 3.98573 19.2377 3.87549 18.2764C4.11374 19.6235 5.28672 20.6446 6.70096 20.6446C7.19668 20.6446 7.66209 20.5195 8.06808 20.2992L8.07799 20.2941L8.22352 20.2065L8.81676 19.8563L9.57174 19.4092V19.3879L9.66896 19.3294L16.4233 15.3255L16.9433 15.0174L16.9949 15.0348C16.9964 15.0348 16.9997 15.0366 17.0015 15.0366C17.1509 15.0735 17.2965 15.1242 17.4354 15.1857C17.7583 15.3249 18.0491 15.523 18.2987 15.7645C18.3992 15.8607 18.4923 15.9643 18.5772 16.0745C18.6504 16.1666 18.7164 16.2642 18.7764 16.3662C19.0384 16.8031 19.1896 17.3174 19.1896 17.865Z",
              fill: "#7F7F7F"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "path",
            {
              opacity: "0.15",
              d: "M19.1896 17.865C19.1896 18.0532 19.1719 18.235 19.1392 18.4118C19.1296 18.4586 19.1197 18.5054 19.1086 18.5528C19.0876 18.6368 19.0654 18.7181 19.0375 18.7995C19.0228 18.8415 19.0078 18.8835 18.9922 18.9243C18.976 18.9663 18.9586 19.0071 18.9403 19.0491C18.8868 19.1721 18.824 19.2907 18.7524 19.4041C18.6604 19.5527 18.5552 19.6927 18.4379 19.8224C17.9014 20.4162 16.0803 21.474 15.4093 21.904L13.9198 22.815C12.8278 23.4878 11.7962 23.964 10.4951 23.9967C10.4335 23.9985 10.3732 24 10.3135 24C10.2295 24 10.1467 23.9985 10.0636 23.9952C7.86043 23.9112 5.93908 22.7274 4.83092 20.9783C4.31238 20.1614 3.98573 19.2377 3.87549 18.2764C4.11374 19.6235 5.28672 20.6446 6.70096 20.6446C7.19668 20.6446 7.66209 20.5195 8.06808 20.2992L8.07799 20.2941L8.22352 20.2065L8.81676 19.8563L9.57174 19.4092V19.3879L9.66896 19.3294L16.4233 15.3255L16.9433 15.0174L16.9949 15.0348C16.9964 15.0348 16.9997 15.0366 17.0015 15.0366C17.1509 15.0735 17.2965 15.1242 17.4354 15.1857C17.7583 15.3249 18.0491 15.523 18.2987 15.7645C18.3992 15.8607 18.4923 15.9643 18.5772 16.0745C18.6504 16.1666 18.7164 16.2642 18.7764 16.3662C19.0384 16.8031 19.1896 17.3174 19.1896 17.865Z",
              fill: "url(#paint3_linear_234_9664)"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("defs", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
            "linearGradient",
            {
              id: "paint0_linear_234_9664",
              x1: "12.4195",
              y1: "8.5241",
              x2: "20.0915",
              y2: "17.0744",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("stop", { stopColor: "#37BDFF" }),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("stop", { offset: "0.25", stopColor: "#26C6F4" }),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("stop", { offset: "0.5", stopColor: "#15D0E9" }),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("stop", { offset: "0.75", stopColor: "#3BD6DF" }),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("stop", { offset: "1", stopColor: "#62DCD4" })
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
            "linearGradient",
            {
              id: "paint1_linear_234_9664",
              x1: "7.09591",
              y1: "20.2812",
              x2: "6.84916",
              y2: "1.30738",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("stop", { stopColor: "#1B48EF" }),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("stop", { offset: "0.5", stopColor: "#2080F1" }),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("stop", { offset: "1", stopColor: "#26B8F4" })
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
            "linearGradient",
            {
              id: "paint2_linear_234_9664",
              x1: "11.5325",
              y1: "19.4932",
              x2: "30.1012",
              y2: "19.4932",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("stop", { stopColor: "#39D2FF" }),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("stop", { offset: "0.5", stopColor: "#248FFA" }),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("stop", { offset: "1", stopColor: "#104CF5" })
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
            "linearGradient",
            {
              id: "paint3_linear_234_9664",
              x1: "11.5325",
              y1: "19.4932",
              x2: "30.1012",
              y2: "19.4932",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("stop", { stopColor: "white" }),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("stop", { offset: "1" })
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("clipPath", { id: "clip0_234_9664", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("rect", { width: "24", height: "24", fill: "white" }) })
        ] })
      ]
    }
  ) });
};
var BardIcon = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_SvgIcon.default, { ...props, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
    "svg",
    {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("g", { clipPath: "url(#clip0_1_2)", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "path",
            {
              d: "M11.4464 16.1294L10.489 18.3223C10.121 19.1652 8.95452 19.1652 8.5865 18.3223L7.62905 16.1294C6.77701 14.1779 5.24338 12.6245 3.33038 11.7754L0.695048 10.6056C-0.142816 10.2337 -0.142815 9.01477 0.695048 8.64286L3.24807 7.50959C5.21027 6.63859 6.77141 5.02764 7.6089 3.00957L8.57874 0.672646C8.93863 -0.194591 10.1369 -0.194593 10.4968 0.672643L11.4666 3.00959C12.3041 5.02764 13.8652 6.63859 15.8274 7.50959L18.3805 8.64286C19.2183 9.01477 19.2183 10.2337 18.3805 10.6056L15.7451 11.7754C13.8321 12.6245 12.2985 14.1779 11.4464 16.1294Z",
              fill: "url(#paint0_radial_1_2)"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "path",
            {
              d: "M20.3441 23.044L20.0748 23.6611C19.8778 24.1129 19.2522 24.1129 19.0552 23.6611L18.7859 23.044C18.3059 21.9437 17.4414 21.0676 16.3626 20.5883L15.5331 20.2198C15.0845 20.0205 15.0845 19.3684 15.5331 19.1691L16.3163 18.8211C17.4228 18.3295 18.3028 17.421 18.7745 16.2833L19.051 15.6165C19.2437 15.1517 19.8863 15.1517 20.079 15.6165L20.3555 16.2833C20.8273 17.421 21.7073 18.3295 22.8138 18.8211L23.5969 19.1691C24.0456 19.3684 24.0456 20.0205 23.5969 20.2198L22.7674 20.5883C21.6886 21.0676 20.8241 21.9437 20.3441 23.044Z",
              fill: "url(#paint1_radial_1_2)"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("defs", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
            "radialGradient",
            {
              id: "paint0_radial_1_2",
              cx: "0",
              cy: "0",
              r: "1",
              gradientUnits: "userSpaceOnUse",
              gradientTransform: "translate(14.8988 10.5335) rotate(78.858) scale(14.7889 14.7961)",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("stop", { stopColor: "#1BA1E3" }),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("stop", { offset: "0.0001", stopColor: "#1BA1E3" }),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("stop", { offset: "0.300221", stopColor: "#5489D6" }),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("stop", { offset: "0.545524", stopColor: "#9B72CB" }),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("stop", { offset: "0.825372", stopColor: "#D96570" }),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("stop", { offset: "1", stopColor: "#F49C46" })
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
            "radialGradient",
            {
              id: "paint1_radial_1_2",
              cx: "0",
              cy: "0",
              r: "1",
              gradientUnits: "userSpaceOnUse",
              gradientTransform: "translate(14.8988 10.5335) rotate(78.858) scale(14.7889 14.7961)",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("stop", { stopColor: "#1BA1E3" }),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("stop", { offset: "0.0001", stopColor: "#1BA1E3" }),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("stop", { offset: "0.300221", stopColor: "#5489D6" }),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("stop", { offset: "0.545524", stopColor: "#9B72CB" }),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("stop", { offset: "0.825372", stopColor: "#D96570" }),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("stop", { offset: "1", stopColor: "#F49C46" })
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("clipPath", { id: "clip0_1_2", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("rect", { width: "24", height: "24", fill: "white" }) })
        ] })
      ]
    }
  ) });
};
var ClaudeIcon = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_SvgIcon.default, { ...props, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
    "svg",
    {
      width: "24",
      height: "24",
      viewBox: "0 0 256 256",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("rect", { width: "256", height: "256", fill: "#D19974" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M155.465 174L118.721 82H98.2052L61.4609 174H80.0968L87.4259 155.282H129.5L136.829 174H155.465ZM122.791 138.147H94.1348L108.433 101.479L122.791 138.147Z",
            fill: "#1E1E1C"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "path",
          {
            d: "M193.635 174L156.439 82H138.449L174.999 174H193.635Z",
            fill: "#1E1E1C"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M94.1504 138.147L108.449 101.479L122.807 138.147H94.1504ZM95.6133 137.147L108.451 104.226L121.342 137.147H95.6133Z",
            fill: "black"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M119.666 81.6289L119.414 81H97.543L97.293 81.6289L60 175H80.7949L88.123 156.282H128.834L136.162 175H156.957L119.666 81.6289ZM129.516 155.282H87.4414L80.1133 174H61.4766L98.2207 82H118.736L155.48 174H136.846L129.516 155.282Z",
            fill: "black"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M157.295 81.625L157.043 81H138.174C138.174 81 137.996 81 137.891 81C137.785 81 137.607 81 137.607 81H136.977L174.336 175H195.135L157.295 81.625ZM156.369 82H138.449L175.016 174H193.65L156.369 82Z",
            fill: "black"
          }
        )
      ]
    }
  ) });
};
var ChatGPTOutlinedIcon = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_SvgIcon.default, { ...props, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    "svg",
    {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "path",
        {
          d: "M21.6748 9.97835C21.9281 9.22799 22.0158 8.43302 21.9325 7.64653C21.849 6.86003 21.5964 6.10019 21.1912 5.41787C20.5906 4.38582 19.6734 3.56871 18.5717 3.08444C17.4699 2.60018 16.2408 2.47379 15.0614 2.72353C14.5295 2.13207 13.8757 1.65952 13.1437 1.33755C12.4117 1.01557 11.6185 0.851582 10.8171 0.856555C9.61139 0.853694 8.43596 1.22868 7.46018 1.92748C6.48438 2.62627 5.75874 3.61277 5.38781 4.74472C4.60237 4.90337 3.86032 5.22574 3.21136 5.69025C2.56241 6.15477 2.02151 6.7507 1.62488 7.43818C1.01954 8.4674 0.761147 9.6596 0.886962 10.8431C1.01278 12.0266 1.5163 13.14 2.32491 14.0228C2.07172 14.7731 1.9839 15.5682 2.0673 16.3547C2.15071 17.1411 2.40341 17.901 2.80853 18.5833C3.40913 19.6153 4.32646 20.4324 5.4282 20.9167C6.52991 21.4009 7.75908 21.5273 8.93833 21.2777C9.47032 21.8691 10.1241 22.3416 10.856 22.6636C11.5881 22.9856 12.3812 23.1496 13.1826 23.1446C14.3889 23.1477 15.565 22.7726 16.5411 22.0734C17.5174 21.3741 18.2432 20.3869 18.6137 19.2543C19.3992 19.0956 20.1412 18.7732 20.7902 18.3088C21.4391 17.8442 21.98 17.2482 22.3766 16.5608C22.9813 15.5317 23.239 14.3397 23.1129 13.1566C22.9868 11.9737 22.4833 10.8608 21.6748 9.97835ZM13.1845 21.6876C12.1942 21.689 11.235 21.3468 10.4747 20.721C10.509 20.7025 10.5692 20.67 10.6083 20.6463L15.106 18.0829C15.2189 18.0195 15.3126 17.9276 15.3776 17.8166C15.4426 17.7057 15.4764 17.5796 15.4756 17.4515V11.195L17.3767 12.2781C17.3866 12.283 17.3952 12.2902 17.4017 12.2992C17.4081 12.3082 17.4122 12.3186 17.4136 12.3295V17.5107C17.4122 18.6174 16.9663 19.6784 16.1736 20.4612C15.3809 21.2442 14.306 21.6851 13.1845 21.6876ZM4.08927 17.8548C3.59326 17.0092 3.4145 16.0184 3.58427 15.0559C3.61767 15.0757 3.67601 15.1108 3.71786 15.1345L8.21555 17.6979C8.32765 17.7625 8.45516 17.7966 8.58499 17.7966C8.71477 17.7966 8.84228 17.7625 8.95438 17.6979L14.4455 14.5695V16.7357C14.4462 16.7468 14.444 16.7578 14.4393 16.7679C14.4345 16.7779 14.4274 16.7866 14.4184 16.7933L9.87176 19.3834C8.8992 19.9362 7.74418 20.0855 6.66013 19.799C5.57606 19.5123 4.65149 18.8132 4.08927 17.8548ZM2.90605 8.16668C3.3999 7.31994 4.17992 6.67169 5.10949 6.3353C5.10949 6.37353 5.10726 6.44123 5.10726 6.4882V11.615C5.10647 11.7431 5.14026 11.869 5.20514 11.98C5.27001 12.0908 5.36365 12.1826 5.47643 12.246L10.9677 15.374L9.06659 16.4571C9.05721 16.4633 9.04643 16.4669 9.03525 16.4679C9.02407 16.4689 9.01277 16.4671 9.00244 16.4629L4.45531 13.8704C3.4845 13.3157 2.77622 12.4037 2.4858 11.3345C2.19538 10.2654 2.34651 9.12613 2.90605 8.16668ZM18.5252 11.7529L13.0339 8.62453L14.935 7.54188C14.9444 7.53581 14.9551 7.53207 14.9663 7.53107C14.9775 7.53006 14.9887 7.53185 14.9991 7.5362L19.5463 10.1264C20.2429 10.5234 20.8104 11.108 21.1826 11.8119C21.5546 12.5156 21.7157 13.3095 21.6471 14.1004C21.5784 14.8912 21.2829 15.6466 20.7949 16.2777C20.307 16.9088 19.6469 17.3898 18.8921 17.664C18.8921 17.6254 18.8921 17.5578 18.8921 17.5107V12.3839C18.8931 12.2561 18.8596 12.1303 18.7952 12.0194C18.7307 11.9085 18.6375 11.8167 18.5252 11.7529ZM20.4173 8.94309C20.3838 8.92287 20.3256 8.88814 20.2837 8.86446L15.786 6.30103C15.6738 6.2365 15.5464 6.20247 15.4166 6.20247C15.2868 6.20247 15.1593 6.2365 15.0472 6.30103L9.55592 9.42956V7.26334C9.55542 7.25224 9.55744 7.24121 9.56226 7.23118C9.56694 7.22115 9.57416 7.21241 9.58315 7.20577L14.1298 4.61773C14.8263 4.22145 15.6229 4.02906 16.4263 4.06308C17.2295 4.09711 18.0063 4.35615 18.666 4.80989C19.3255 5.26363 19.8406 5.8933 20.1507 6.62527C20.4608 7.35723 20.5533 8.16116 20.4173 8.94309ZM8.52242 12.804L6.62089 11.7209C6.61095 11.7161 6.60231 11.7088 6.59586 11.6998C6.58943 11.6908 6.5853 11.6805 6.58395 11.6695V6.4882C6.58445 5.69465 6.81407 4.91764 7.24586 4.24815C7.67771 3.57865 8.29388 3.04437 9.02226 2.70785C9.75069 2.37133 10.561 2.24648 11.3587 2.34792C12.1564 2.44937 12.9084 2.77291 13.5264 3.28068C13.4922 3.29912 13.4324 3.33165 13.3928 3.35538L8.89514 5.91878C8.78225 5.98208 8.68857 6.07389 8.62356 6.1848C8.55862 6.29568 8.5248 6.42167 8.52553 6.54971L8.52242 12.804ZM9.55504 10.6071L12.0008 9.21333L14.4464 10.6062V13.3928L12.0008 14.7856L9.55504 13.3928V10.6071Z",
          fill: "currentColor"
        }
      )
    }
  ) });
};
var ClaudeOutlinedIcon = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_SvgIcon.default, { ...props, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
    "svg",
    {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M10.2333 3.53516L16.8 20.4643H13.4695L12.1597 17.0199H4.64041L3.33058 20.4643H6.10352e-05L6.56683 3.53516H10.2333ZM5.83939 13.8669H10.9607L8.3947 7.11953L5.83939 13.8669Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "path",
          {
            d: "M17.5295 3.53516L24 20.4643H20.7582L14.4001 3.53516H17.5295Z",
            fill: "currentColor"
          }
        )
      ]
    }
  ) });
};
var CustomIcon = ({ icon, sx }) => {
  const renderIcon = () => {
    switch (icon) {
      case "Delete":
        return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Delete, { sx });
      case "Edit":
        return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Edit, { sx });
      case "ChatGPTIcon":
        return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ChatGPTIcon, { sx });
      case "ChatGPTOutlinedIcon":
        return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ChatGPTOutlinedIcon, { sx });
      case "BingIcon":
        return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(BingIcon, { sx });
      case "BardIcon":
        return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(BardIcon, { sx });
      case "ClaudeIcon":
        return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ClaudeIcon, { sx });
      case "ClaudeOutlinedIcon":
        return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ClaudeOutlinedIcon, { sx });
      default:
        return null;
    }
  };
  return renderIcon();
};
var CustomIcon_default = CustomIcon;
var WebChatGPTLogo = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_SvgIcon.default, { viewBox: "0 0 24 24", sx: { color: "primary.main", ...props.sx }, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 22 22", fill: "none", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("g", { clipPath: "url(#clip0_5391_39565)", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M11 21.587C12.473 21.587 13.877 21.286 15.1527 20.7414L18.5743 21.5652C19.1711 21.7088 19.6928 21.1394 19.4971 20.5574L18.7201 18.2449C20.4978 16.3514 21.5875 13.8022 21.5875 10.9996C21.5875 5.15228 16.8473 0.412109 11 0.412109C5.15266 0.412109 0.412476 5.15228 0.412476 10.9996C0.412476 16.8469 5.15266 21.587 11 21.587ZM18.9758 20.7326L18.0921 18.1026C19.9118 16.2857 21.0375 13.7741 21.0375 10.9996C21.0375 5.45604 16.5436 0.962109 11 0.962109C5.45642 0.962109 0.962476 5.45604 0.962476 10.9996C0.962476 16.5431 5.45642 21.037 11 21.037C12.4612 21.037 13.8495 20.7248 15.1017 20.1634L18.7031 21.0304C18.8795 21.0729 19.0336 20.9046 18.9758 20.7326Z",
          fill: "white"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "path",
        {
          d: "M18.0921 18.1034C19.9118 16.2865 21.0375 13.7749 21.0375 11.0004C21.0375 5.45682 16.5436 0.962891 11 0.962891C5.45646 0.962891 0.962524 5.45682 0.962524 11.0004C0.962524 16.5439 5.45646 21.0378 11 21.0378C12.4612 21.0378 13.8495 20.7256 15.1017 20.1642L18.7031 21.0312C18.8795 21.0737 19.0337 20.9054 18.9758 20.7334L18.0921 18.1034Z",
          fill: "#393C52"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
        "mask",
        {
          id: "mask0_5391_39565",
          "mask-type": "alpha",
          maskUnits: "userSpaceOnUse",
          x: "1",
          y: "2",
          width: "19",
          height: "19",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "path",
              {
                d: "M11.4922 8.25L11.4238 7.7C11.3867 7.6857 11.3518 7.66851 11.3191 7.64844C11.2863 7.62836 11.2542 7.60691 11.2228 7.58395L10.7141 7.79886L10.2438 6.98239L10.6841 6.64727C10.6813 6.62721 10.6799 6.60788 10.6799 6.58926V6.47325C10.6799 6.45462 10.6813 6.43529 10.6841 6.41523L10.2438 6.08008L10.7141 5.26367L11.2228 5.47852C11.2542 5.4556 11.287 5.43412 11.3212 5.41406C11.3554 5.39401 11.3896 5.37682 11.4238 5.3625L11.4922 4.8125H12.4328L12.5012 5.3625C12.5383 5.37682 12.5732 5.39401 12.606 5.41406C12.6387 5.43412 12.6709 5.4556 12.7022 5.47852L13.211 5.26367L13.6813 6.08008L13.2409 6.41523C13.2437 6.43529 13.2452 6.45462 13.2452 6.47325V6.58926C13.2452 6.60788 13.2423 6.62721 13.2366 6.64727L13.677 6.98239L13.2067 7.79886L12.7022 7.58395C12.6709 7.60691 12.6381 7.62836 12.6038 7.64844C12.5697 7.66851 12.5354 7.6857 12.5012 7.7L12.4328 8.25H11.4922ZM11.971 7.13281C12.1364 7.13281 12.2775 7.0741 12.3943 6.95668C12.5112 6.8392 12.5697 6.6974 12.5697 6.53125C12.5697 6.3651 12.5112 6.2233 12.3943 6.10586C12.2775 5.98841 12.1364 5.92969 11.971 5.92969C11.8029 5.92969 11.6611 5.98841 11.5457 6.10586C11.4302 6.2233 11.3725 6.3651 11.3725 6.53125C11.3725 6.6974 11.4302 6.8392 11.5457 6.95668C11.6611 7.0741 11.8029 7.13281 11.971 7.13281Z",
                fill: "white",
                fillOpacity: "0.6"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "path",
              {
                d: "M17.5552 7.56211L17.5087 7.18811C17.4835 7.17835 17.4597 7.16666 17.4375 7.15305C17.4151 7.13943 17.3933 7.12479 17.372 7.10925L17.0261 7.25535L16.7062 6.70016L17.0057 6.47225C17.0038 6.45862 17.0028 6.44546 17.0028 6.43281V6.35392C17.0028 6.34125 17.0038 6.3281 17.0057 6.31447L16.7062 6.08656L17.0261 5.53141L17.372 5.6775C17.3933 5.66191 17.4156 5.6473 17.4389 5.63367C17.4621 5.62004 17.4854 5.60835 17.5087 5.59861L17.5552 5.22461H18.1948L18.2413 5.59861C18.2665 5.60835 18.2902 5.62004 18.3125 5.63367C18.3349 5.6473 18.3567 5.66191 18.378 5.6775L18.7239 5.53141L19.0437 6.08656L18.7443 6.31447C18.7462 6.3281 18.7472 6.34125 18.7472 6.35392V6.43281C18.7472 6.44546 18.7452 6.45862 18.7414 6.47225L19.0409 6.70016L18.721 7.25535L18.378 7.10925C18.3567 7.12479 18.3344 7.13943 18.3111 7.15305C18.2878 7.16666 18.2646 7.17835 18.2413 7.18811L18.1948 7.56211H17.5552ZM17.8808 6.80242C17.9932 6.80242 18.0891 6.76249 18.1686 6.68262C18.2481 6.60276 18.2878 6.50634 18.2878 6.39336C18.2878 6.28038 18.2481 6.18396 18.1686 6.10409C18.0891 6.02423 17.9932 5.9843 17.8808 5.9843C17.7664 5.9843 17.67 6.02423 17.5915 6.10409C17.513 6.18396 17.4738 6.28038 17.4738 6.39336C17.4738 6.50634 17.513 6.60276 17.5915 6.68262C17.67 6.76249 17.7664 6.80242 17.8808 6.80242Z",
                fill: "white",
                fillOpacity: "0.6"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "path",
              {
                d: "M6.273 6.4625L6.18543 5.7585C6.13801 5.74016 6.09331 5.71816 6.05136 5.6925C6.0094 5.66684 5.96835 5.63934 5.92822 5.61L5.27698 5.885L4.67499 4.84L5.23867 4.411C5.23502 4.38534 5.2332 4.36059 5.2332 4.33675V4.18825C5.2332 4.16441 5.23502 4.13966 5.23867 4.114L4.67499 3.685L5.27698 2.64L5.92822 2.915C5.96835 2.88566 6.01031 2.85816 6.05409 2.8325C6.09787 2.80684 6.14165 2.78484 6.18543 2.7665L6.273 2.0625H7.47696L7.56455 2.7665C7.61199 2.78484 7.65668 2.80684 7.69861 2.8325C7.74055 2.85816 7.78159 2.88566 7.82174 2.915L8.47301 2.64L9.07499 3.685L8.51131 4.114C8.51495 4.13966 8.51681 4.16441 8.51681 4.18825V4.33675C8.51681 4.36059 8.51316 4.38534 8.50581 4.411L9.06949 4.84L8.46751 5.885L7.82174 5.61C7.78159 5.63934 7.73966 5.66684 7.69586 5.6925C7.65207 5.71816 7.60834 5.74016 7.56455 5.7585L7.47696 6.4625H6.273ZM6.88592 5.0325C7.09753 5.0325 7.27814 4.95734 7.42774 4.807C7.57734 4.65666 7.65207 4.47516 7.65207 4.2625C7.65207 4.04984 7.57734 3.86834 7.42774 3.718C7.27814 3.56766 7.09753 3.4925 6.88592 3.4925C6.67068 3.4925 6.48917 3.56766 6.34141 3.718C6.19365 3.86834 6.11976 4.04984 6.11976 4.2625C6.11976 4.47516 6.19365 4.65666 6.34141 4.807C6.48917 4.95734 6.67068 5.0325 6.88592 5.0325Z",
                fill: "white",
                fillOpacity: "0.2"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "path",
              {
                d: "M3.46792 6.66836L3.43235 6.38236C3.41308 6.37491 3.39492 6.36598 3.37788 6.35555C3.36083 6.34512 3.34415 6.33395 3.32785 6.32203L3.06328 6.43375L2.81873 6.00922L3.04772 5.83494C3.04624 5.82451 3.0455 5.81446 3.0455 5.80478V5.74445C3.0455 5.73476 3.04624 5.72471 3.04772 5.71428L2.81873 5.54L3.06328 5.11547L3.32785 5.22719C3.34415 5.21527 3.3612 5.2041 3.37899 5.19367C3.39678 5.18324 3.41456 5.17431 3.43235 5.16686L3.46792 4.88086H3.95703L3.9926 5.16686C4.01187 5.17431 4.03003 5.18324 4.04707 5.19367C4.06412 5.2041 4.0808 5.21527 4.0971 5.22719L4.36167 5.11547L4.60623 5.54L4.37723 5.71428C4.37871 5.72471 4.37945 5.73476 4.37945 5.74445V5.80478C4.37945 5.81446 4.37797 5.82451 4.37501 5.83494L4.604 6.00922L4.35944 6.43375L4.0971 6.32203C4.0808 6.33395 4.06375 6.34512 4.04596 6.35555C4.02818 6.36598 4.01039 6.37491 3.9926 6.38236L3.95703 6.66836H3.46792ZM3.71692 6.08742C3.80289 6.08742 3.87626 6.05688 3.93703 5.99581C3.99779 5.93474 4.02818 5.86101 4.02818 5.77461C4.02818 5.68821 3.99779 5.61448 3.93703 5.55341C3.87626 5.49234 3.80289 5.4618 3.71692 5.4618C3.62947 5.4618 3.55573 5.49234 3.49571 5.55341C3.43568 5.61448 3.40566 5.68821 3.40566 5.77461C3.40566 5.86101 3.43568 5.93474 3.49571 5.99581C3.55573 6.05688 3.62947 6.08742 3.71692 6.08742Z",
                fill: "white",
                fillOpacity: "0.4"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "path",
              {
                d: "M1.8802 9.00644L1.83367 8.63244C1.80848 8.62268 1.78474 8.611 1.76245 8.59738C1.74016 8.58377 1.71835 8.56913 1.69703 8.55359L1.35105 8.69968L1.03125 8.14453L1.3307 7.91662C1.32877 7.90294 1.3278 7.88981 1.3278 7.87716V7.79823C1.3278 7.78558 1.32877 7.77245 1.3307 7.75884L1.03125 7.53093L1.35105 6.97578L1.69703 7.12187C1.71835 7.10626 1.74064 7.09162 1.7639 7.07801C1.78716 7.0644 1.81041 7.05271 1.83367 7.04295L1.8802 6.66895H2.5198L2.56633 7.04295C2.59152 7.05271 2.61526 7.0644 2.63755 7.07801C2.65984 7.09162 2.68165 7.10626 2.70297 7.12187L3.04895 6.97578L3.36875 7.53093L3.0693 7.75884C3.07123 7.77245 3.0722 7.78558 3.0722 7.79823V7.87716C3.0722 7.88981 3.07026 7.90294 3.06639 7.91662L3.36584 8.14453L3.04604 8.69968L2.70297 8.55359C2.68165 8.56913 2.65936 8.58377 2.6361 8.59738C2.61284 8.611 2.58959 8.62268 2.56633 8.63244L2.5198 9.00644H1.8802ZM2.20582 8.24676C2.31823 8.24676 2.41418 8.20681 2.49364 8.127C2.57311 8.04711 2.61284 7.95065 2.61284 7.8377C2.61284 7.72474 2.57311 7.62828 2.49364 7.54846C2.41418 7.46858 2.31823 7.42863 2.20582 7.42863C2.09146 7.42863 1.99504 7.46858 1.91654 7.54846C1.83804 7.62828 1.79879 7.72474 1.79879 7.8377C1.79879 7.95065 1.83804 8.04711 1.91654 8.127C1.99504 8.20681 2.09146 8.24676 2.20582 8.24676Z",
                fill: "white",
                fillOpacity: "0.6"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "path",
              {
                d: "M15.1359 19.7998L15.0675 19.2498C15.0305 19.2355 14.9956 19.2183 14.9628 19.1982C14.93 19.1782 14.8979 19.1567 14.8666 19.1338L14.3578 19.3487L13.8875 18.5322L14.3279 18.1971C14.325 18.177 14.3236 18.1577 14.3236 18.1391V18.023C14.3236 18.0044 14.325 17.9851 14.3279 17.965L13.8875 17.6299L14.3578 16.8134L14.8666 17.0284C14.8979 17.0054 14.9307 16.9839 14.965 16.9639C14.9991 16.9438 15.0334 16.9266 15.0675 16.9123L15.1359 16.3623H16.0766L16.145 16.9123C16.182 16.9266 16.217 16.9438 16.2497 16.9639C16.2825 16.9839 16.3146 17.0054 16.3459 17.0284L16.8547 16.8134L17.325 17.6299L16.8847 17.965C16.8875 17.9851 16.8889 18.0044 16.8889 18.023V18.1391C16.8889 18.1577 16.886 18.177 16.8803 18.1971L17.3207 18.5322L16.8504 19.3487L16.3459 19.1338C16.3146 19.1567 16.2818 19.1782 16.2476 19.1982C16.2134 19.2183 16.1792 19.2355 16.145 19.2498L16.0766 19.7998H15.1359ZM15.6148 18.6826C15.7801 18.6826 15.9212 18.6239 16.0381 18.5065C16.155 18.389 16.2134 18.2472 16.2134 18.0811C16.2134 17.9149 16.155 17.7731 16.0381 17.6557C15.9212 17.5382 15.7801 17.4795 15.6148 17.4795C15.4466 17.4795 15.3049 17.5382 15.1894 17.6557C15.0739 17.7731 15.0162 17.9149 15.0162 18.0811C15.0162 18.2472 15.0739 18.389 15.1894 18.5065C15.3049 18.6239 15.4466 18.6826 15.6148 18.6826Z",
                fill: "white",
                fillOpacity: "0.3"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "path",
              {
                d: "M4.16196 19.3186L4.13734 19.1206C4.124 19.1154 4.11143 19.1092 4.09963 19.102C4.08783 19.0948 4.07628 19.087 4.065 19.0788L3.88184 19.1561L3.71252 18.8622L3.87106 18.7415C3.87003 18.7343 3.86952 18.7274 3.86952 18.7207V18.6789C3.86952 18.6722 3.87003 18.6652 3.87106 18.658L3.71252 18.5373L3.88184 18.2434L4.065 18.3208C4.07628 18.3125 4.08809 18.3048 4.1004 18.2976C4.11271 18.2904 4.12502 18.2842 4.13734 18.2791L4.16196 18.0811H4.50059L4.52521 18.2791C4.53855 18.2842 4.55112 18.2904 4.56292 18.2976C4.57472 18.3048 4.58627 18.3125 4.59755 18.3208L4.78071 18.2434L4.95002 18.5373L4.79149 18.658C4.79252 18.6652 4.79303 18.6722 4.79303 18.6789V18.7207C4.79303 18.7274 4.792 18.7343 4.78995 18.7415L4.94848 18.8622L4.77917 19.1561L4.59755 19.0788C4.58627 19.087 4.57446 19.0948 4.56215 19.102C4.54984 19.1092 4.53752 19.1154 4.52521 19.1206L4.50059 19.3186H4.16196ZM4.33435 18.9164C4.39386 18.9164 4.44466 18.8953 4.48673 18.853C4.5288 18.8107 4.54984 18.7596 4.54984 18.6998C4.54984 18.64 4.5288 18.5889 4.48673 18.5466C4.44466 18.5043 4.39386 18.4832 4.33435 18.4832C4.27381 18.4832 4.22276 18.5043 4.18121 18.5466C4.13965 18.5889 4.11886 18.64 4.11886 18.6998C4.11886 18.7596 4.13965 18.8107 4.18121 18.853C4.22276 18.8953 4.27381 18.9164 4.33435 18.9164Z",
                fill: "white",
                fillOpacity: "0.2"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "path",
              {
                d: "M6.72451 18.2875L6.70262 18.1115C6.69077 18.1069 6.67959 18.1014 6.66911 18.095C6.65861 18.0886 6.64836 18.0817 6.63832 18.0744L6.47551 18.1431L6.32501 17.8819L6.46594 17.7746C6.46502 17.7682 6.46457 17.762 6.46457 17.7561V17.7189C6.46457 17.713 6.46502 17.7068 6.46594 17.7004L6.32501 17.5931L6.47551 17.3319L6.63832 17.4006C6.64836 17.3933 6.65884 17.3864 6.66979 17.38C6.68073 17.3736 6.69168 17.3681 6.70262 17.3635L6.72451 17.1875H7.02551L7.04737 17.3635C7.05926 17.3681 7.0704 17.3736 7.08092 17.38C7.09144 17.3864 7.10168 17.3933 7.11172 17.4006L7.27452 17.3319L7.42501 17.5931L7.28407 17.7004C7.28504 17.7068 7.28545 17.713 7.28545 17.7189V17.7561C7.28545 17.762 7.28456 17.7682 7.2827 17.7746L7.42364 17.8819L7.27314 18.1431L7.11172 18.0744C7.10168 18.0817 7.09116 18.0886 7.08023 18.095C7.0693 18.1014 7.05837 18.1069 7.04737 18.1115L7.02551 18.2875H6.72451ZM6.87776 17.93C6.93063 17.93 6.9758 17.9112 7.0132 17.8736C7.0506 17.836 7.0693 17.7906 7.0693 17.7375C7.0693 17.6844 7.0506 17.639 7.0132 17.6014C6.9758 17.5638 6.93063 17.545 6.87776 17.545C6.82393 17.545 6.77856 17.5638 6.74162 17.6014C6.70468 17.639 6.6862 17.6844 6.6862 17.7375C6.6862 17.7906 6.70468 17.836 6.74162 17.8736C6.77856 17.9112 6.82393 17.93 6.87776 17.93Z",
                fill: "white",
                fillOpacity: "0.6"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "path",
              {
                d: "M5.7309 18.9061L5.71448 18.7741C5.70559 18.7706 5.69721 18.7665 5.68934 18.7617C5.68148 18.7569 5.67378 18.7517 5.66626 18.7462L5.54415 18.7978L5.43127 18.6018L5.53696 18.5214C5.53628 18.5166 5.53594 18.512 5.53594 18.5075V18.4797C5.53594 18.4752 5.53628 18.4705 5.53696 18.4657L5.43127 18.3853L5.54415 18.1893L5.66626 18.2409C5.67378 18.2354 5.68165 18.2302 5.68986 18.2254C5.69807 18.2206 5.70627 18.2165 5.71448 18.2131L5.7309 18.0811H5.95665L5.97307 18.2131C5.98196 18.2165 5.99034 18.2206 5.99821 18.2254C6.00607 18.2302 6.01377 18.2354 6.02129 18.2409L6.1434 18.1893L6.25627 18.3853L6.15059 18.4657C6.15127 18.4705 6.15161 18.4752 6.15161 18.4797V18.5075C6.15161 18.512 6.15093 18.5166 6.14956 18.5214L6.25525 18.6018L6.14238 18.7978L6.02129 18.7462C6.01377 18.7517 6.0059 18.7569 5.99769 18.7617C5.98948 18.7665 5.98127 18.7706 5.97307 18.7741L5.95665 18.9061H5.7309ZM5.84583 18.6379C5.88551 18.6379 5.91937 18.6238 5.94742 18.5956C5.97546 18.5675 5.98948 18.5334 5.98948 18.4936C5.98948 18.4537 5.97546 18.4196 5.94742 18.3915C5.91937 18.3633 5.88551 18.3492 5.84583 18.3492C5.80547 18.3492 5.77144 18.3633 5.74373 18.3915C5.71602 18.4196 5.70217 18.4537 5.70217 18.4936C5.70217 18.5334 5.71602 18.5675 5.74373 18.5956C5.77144 18.6238 5.80547 18.6379 5.84583 18.6379Z",
                fill: "white",
                fillOpacity: "0.4"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "path",
              {
                d: "M18.2875 18.0469C18.2875 18.3316 18.0566 18.5625 17.7719 18.5625C17.4871 18.5625 17.2562 18.3316 17.2562 18.0469C17.2562 17.7621 17.4871 17.5312 17.7719 17.5312C18.0566 17.5312 18.2875 17.7621 18.2875 18.0469ZM17.548 18.0469C17.548 18.1705 17.6482 18.2707 17.7719 18.2707C17.8955 18.2707 17.9957 18.1705 17.9957 18.0469C17.9957 17.9233 17.8955 17.823 17.7719 17.823C17.6482 17.823 17.548 17.9233 17.548 18.0469Z",
                fill: "#D9D9D9",
                fillOpacity: "0.3"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "path",
              {
                d: "M9.45315 20.6248C9.77589 20.6248 10.0375 20.3632 10.0375 20.0404C10.0375 19.7177 9.77589 19.4561 9.45315 19.4561C9.13041 19.4561 8.86877 19.7177 8.86877 20.0404C8.86877 20.3632 9.13041 20.6248 9.45315 20.6248Z",
                fill: "white",
                fillOpacity: "0.2"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "path",
              {
                d: "M14.8156 5.43145C15.1384 5.43145 15.4 5.16981 15.4 4.84707C15.4 4.52433 15.1384 4.2627 14.8156 4.2627C14.4929 4.2627 14.2313 4.52433 14.2313 4.84707C14.2313 5.16981 14.4929 5.43145 14.8156 5.43145Z",
                fill: "white",
                fillOpacity: "0.2"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("g", { mask: "url(#mask0_5391_39565)", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "path",
        {
          d: "M18.0921 18.1034C19.9118 16.2865 21.0375 13.7749 21.0375 11.0004C21.0375 5.45682 16.5436 0.962891 11 0.962891C5.45646 0.962891 0.962524 5.45682 0.962524 11.0004C0.962524 16.5439 5.45646 21.0378 11 21.0378C12.4612 21.0378 13.8495 20.7256 15.1017 20.1642L18.7031 21.0312C18.8795 21.0737 19.0337 20.9054 18.9758 20.7334L18.0921 18.1034Z",
          fill: "white"
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
        "mask",
        {
          id: "mask1_5391_39565",
          "mask-type": "alpha",
          maskUnits: "userSpaceOnUse",
          x: "0",
          y: "1",
          width: "22",
          height: "20",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "path",
              {
                d: "M2.44181 14.1619L2.35699 13.4799C2.31104 13.4622 2.26774 13.4409 2.2271 13.416C2.18645 13.3911 2.14669 13.3645 2.10781 13.336L1.47692 13.6024L0.893738 12.5901L1.43981 12.1745C1.43627 12.1497 1.4345 12.1257 1.4345 12.1026V11.9588C1.4345 11.9357 1.43627 11.9117 1.43981 11.8868L0.893738 11.4712L1.47692 10.4588L2.10781 10.7252C2.14669 10.6968 2.18733 10.6702 2.22974 10.6454C2.27216 10.6205 2.31457 10.5992 2.35699 10.5814L2.44181 9.89941H3.60817L3.69299 10.5814C3.73894 10.5992 3.78223 10.6205 3.82288 10.6454C3.86352 10.6702 3.90329 10.6968 3.94217 10.7252L4.57306 10.4588L5.15624 11.4712L4.61017 11.8868C4.6137 11.9117 4.61547 11.9357 4.61547 11.9588V12.1026C4.61547 12.1257 4.61194 12.1497 4.60487 12.1745L5.15094 12.5901L4.56776 13.6024L3.94217 13.336C3.90329 13.3645 3.86264 13.3911 3.82023 13.416C3.77781 13.4409 3.7354 13.4622 3.69299 13.4799L3.60817 14.1619H2.44181ZM3.03559 12.7766C3.24059 12.7766 3.41554 12.7038 3.56045 12.5581C3.70537 12.4125 3.77781 12.2367 3.77781 12.0307C3.77781 11.8246 3.70537 11.6488 3.56045 11.5031C3.41554 11.3575 3.24059 11.2847 3.03559 11.2847C2.82706 11.2847 2.65122 11.3575 2.50808 11.5031C2.36494 11.6488 2.29336 11.8246 2.29336 12.0307C2.29336 12.2367 2.36494 12.4125 2.50808 12.5581C2.65122 12.7038 2.82706 12.7766 3.03559 12.7766Z",
                fill: "#06DFFF",
                fillOpacity: "0.4"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "path",
              {
                d: "M15.0114 7.97519L14.9649 7.60119C14.9397 7.59143 14.916 7.57975 14.8937 7.56613C14.8714 7.55252 14.8496 7.53788 14.8283 7.52234L14.4823 7.66843L14.1625 7.11328L14.462 6.88537C14.46 6.8717 14.459 6.85855 14.459 6.84589V6.767C14.459 6.75434 14.46 6.74119 14.462 6.72755L14.1625 6.49965L14.4823 5.94449L14.8283 6.09059C14.8496 6.075 14.8718 6.06039 14.8951 6.04676C14.9184 6.03312 14.9416 6.02144 14.9649 6.0117L15.0114 5.6377H15.651L15.6975 6.0117C15.7228 6.02144 15.7465 6.03312 15.7688 6.04676C15.7911 6.06039 15.8129 6.075 15.8342 6.09059L16.1802 5.94449L16.5 6.49965L16.2005 6.72755C16.2024 6.74119 16.2035 6.75434 16.2035 6.767V6.84589C16.2035 6.85855 16.2015 6.8717 16.1976 6.88537L16.4971 7.11328L16.1773 7.66843L15.8342 7.52234C15.8129 7.53788 15.7906 7.55252 15.7673 7.56613C15.7441 7.57975 15.7208 7.59143 15.6975 7.60119L15.651 7.97519H15.0114ZM15.3371 7.21551C15.4495 7.21551 15.5454 7.17556 15.6249 7.09575C15.7043 7.01586 15.7441 6.9194 15.7441 6.80645C15.7441 6.69347 15.7043 6.59705 15.6249 6.51718C15.5454 6.43731 15.4495 6.39738 15.3371 6.39738C15.2227 6.39738 15.1263 6.43731 15.0478 6.51718C14.9693 6.59705 14.93 6.69347 14.93 6.80645C14.93 6.9194 14.9693 7.01586 15.0478 7.09575C15.1263 7.17556 15.2227 7.21551 15.3371 7.21551Z",
                fill: "#06DFFF",
                fillOpacity: "0.6"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "path",
              {
                d: "M11.9299 4.6748L11.8752 4.2348C11.8456 4.22334 11.8177 4.20959 11.7914 4.19355C11.7652 4.17752 11.7396 4.16033 11.7145 4.14199L11.3075 4.31387L10.9312 3.66074L11.2835 3.39262C11.2812 3.37658 11.2801 3.36111 11.2801 3.34621V3.2534C11.2801 3.2385 11.2812 3.22303 11.2835 3.20699L10.9312 2.93887L11.3075 2.28574L11.7145 2.45762C11.7396 2.43928 11.7658 2.42209 11.7931 2.40605C11.8205 2.39002 11.8479 2.37627 11.8752 2.3648L11.9299 1.9248H12.6825L12.7372 2.3648C12.7668 2.37627 12.7948 2.39002 12.821 2.40605C12.8472 2.42209 12.8729 2.43928 12.8979 2.45762L13.3049 2.28574L13.6812 2.93887L13.3289 3.20699C13.3312 3.22303 13.3323 3.2385 13.3323 3.2534V3.34621C13.3323 3.36111 13.33 3.37658 13.3255 3.39262L13.6778 3.66074L13.3016 4.31387L12.8979 4.14199C12.8729 4.16033 12.8467 4.17752 12.8193 4.19355C12.7919 4.20959 12.7646 4.22334 12.7372 4.2348L12.6825 4.6748H11.9299ZM12.3131 3.78105C12.4453 3.78105 12.5582 3.73408 12.6517 3.64012C12.7452 3.54616 12.7919 3.43272 12.7919 3.2998C12.7919 3.16689 12.7452 3.05345 12.6517 2.95949C12.5582 2.86553 12.4453 2.81855 12.3131 2.81855C12.1785 2.81855 12.0651 2.86553 11.9727 2.95949C11.8804 3.05345 11.8342 3.16689 11.8342 3.2998C11.8342 3.43272 11.8804 3.54616 11.9727 3.64012C12.0651 3.73408 12.1785 3.78105 12.3131 3.78105Z",
                fill: "#06DFFF",
                fillOpacity: "0.2"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "path",
              {
                d: "M19.6047 16.7744L19.5363 16.2244C19.4992 16.2101 19.4643 16.1929 19.4316 16.1729C19.3988 16.1528 19.3667 16.1313 19.3353 16.1084L18.8266 16.3233L18.3563 15.5068L18.7966 15.1717C18.7938 15.1516 18.7923 15.1323 18.7923 15.1137V14.9976C18.7923 14.979 18.7938 14.9597 18.7966 14.9396L18.3563 14.6045L18.8266 13.7881L19.3353 14.003C19.3667 13.98 19.3995 13.9586 19.4337 13.9385C19.4679 13.9184 19.5021 13.9012 19.5363 13.8869L19.6047 13.3369H20.5453L20.6137 13.8869C20.6508 13.9012 20.6857 13.9184 20.7184 13.9385C20.7512 13.9586 20.7833 13.98 20.8147 14.003L21.3234 13.7881L21.7938 14.6045L21.3534 14.9396C21.3562 14.9597 21.3577 14.979 21.3577 14.9976V15.1137C21.3577 15.1323 21.3548 15.1516 21.3491 15.1717L21.7895 15.5068L21.3192 16.3233L20.8147 16.1084C20.7833 16.1313 20.7506 16.1528 20.7163 16.1729C20.6821 16.1929 20.6479 16.2101 20.6137 16.2244L20.5453 16.7744H19.6047ZM20.0835 15.6572C20.2489 15.6572 20.39 15.5985 20.5068 15.4811C20.6237 15.3636 20.6821 15.2218 20.6821 15.0557C20.6821 14.8895 20.6237 14.7477 20.5068 14.6303C20.39 14.5128 20.2489 14.4541 20.0835 14.4541C19.9154 14.4541 19.7736 14.5128 19.6582 14.6303C19.5427 14.7477 19.485 14.8895 19.485 15.0557C19.485 15.2218 19.5427 15.3636 19.6582 15.4811C19.7736 15.5985 19.9154 15.6572 20.0835 15.6572Z",
                fill: "#06DFFF",
                fillOpacity: "0.2"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "path",
              {
                d: "M17.0972 13.75L16.9741 12.76C16.9073 12.7342 16.8445 12.7033 16.7855 12.6672C16.7265 12.6311 16.6688 12.5925 16.6123 12.5511L15.6965 12.9379L14.85 11.4683L15.6427 10.8651C15.6375 10.829 15.635 10.7942 15.635 10.7607V10.5518C15.635 10.5183 15.6375 10.4835 15.6427 10.4474L14.85 9.84418L15.6965 8.37457L16.6123 8.76136C16.6688 8.72004 16.7277 8.68141 16.7893 8.64531C16.8509 8.60922 16.9125 8.57828 16.9741 8.5525L17.0972 7.5625H18.7902L18.9134 8.5525C18.9801 8.57828 19.043 8.60922 19.102 8.64531C19.1609 8.68141 19.2187 8.72004 19.2751 8.76136L20.191 8.37457L21.0375 9.84418L20.2448 10.4474C20.2499 10.4835 20.2525 10.5183 20.2525 10.5518V10.7607C20.2525 10.7942 20.2473 10.829 20.2371 10.8651L21.0298 11.4683L20.1833 12.9379L19.2751 12.5511C19.2187 12.5925 19.1597 12.6311 19.0981 12.6672C19.0366 12.7033 18.975 12.7342 18.9134 12.76L18.7902 13.75H17.0972ZM17.9591 11.7391C18.2567 11.7391 18.5106 11.6334 18.721 11.422C18.9314 11.2106 19.0366 10.9553 19.0366 10.6562C19.0366 10.3572 18.9314 10.102 18.721 9.89058C18.5106 9.67918 18.2567 9.57344 17.9591 9.57344C17.6564 9.57344 17.4012 9.67918 17.1934 9.89058C16.9856 10.102 16.8817 10.3572 16.8817 10.6562C16.8817 10.9553 16.9856 11.2106 17.1934 11.422C17.4012 11.6334 17.6564 11.7391 17.9591 11.7391Z",
                fill: "#06DFFF",
                fillOpacity: "0.4"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "path",
              {
                d: "M10.2222 15.1934L10.099 14.2034C10.0323 14.1776 9.96952 14.1466 9.91048 14.1105C9.85149 14.0745 9.79379 14.0358 9.73733 13.9945L8.82153 14.3812L7.97498 12.9117L8.76765 12.3084C8.76254 12.2723 8.75996 12.2375 8.75996 12.204V11.9952C8.75996 11.9617 8.76254 11.9269 8.76765 11.8908L7.97498 11.2875L8.82153 9.81797L9.73733 10.2047C9.79379 10.1634 9.85278 10.1248 9.91434 10.0887C9.97591 10.0526 10.0375 10.0216 10.099 9.99586L10.2222 9.00586H11.9153L12.0384 9.99586C12.1051 10.0216 12.1679 10.0526 12.227 10.0887C12.286 10.1248 12.3437 10.1634 12.4001 10.2047L13.3159 9.81797L14.1625 11.2875L13.3698 11.8908C13.3749 11.9269 13.3775 11.9617 13.3775 11.9952V12.204C13.3775 12.2375 13.3724 12.2723 13.3621 12.3084L14.1548 12.9117L13.3082 14.3812L12.4001 13.9945C12.3437 14.0358 12.2847 14.0745 12.2231 14.1105C12.1615 14.1466 12.1 14.1776 12.0384 14.2034L11.9153 15.1934H10.2222ZM11.0841 13.1824C11.3817 13.1824 11.6357 13.0767 11.846 12.8653C12.0564 12.6539 12.1615 12.3987 12.1615 12.0996C12.1615 11.8005 12.0564 11.5453 11.846 11.3339C11.6357 11.1225 11.3817 11.0168 11.0841 11.0168C10.7814 11.0168 10.5262 11.1225 10.3184 11.3339C10.1106 11.5453 10.0067 11.8005 10.0067 12.0996C10.0067 12.3987 10.1106 12.6539 10.3184 12.8653C10.5262 13.0767 10.7814 13.1824 11.0841 13.1824Z",
                fill: "#06DFFF"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "path",
              {
                d: "M10.6925 20.2119L10.6377 19.7719C10.6081 19.7604 10.5802 19.7467 10.5539 19.7307C10.5277 19.7146 10.5021 19.6975 10.477 19.6791L10.07 19.851L9.69373 19.1979L10.046 18.9297C10.0437 18.9137 10.0426 18.8982 10.0426 18.8833V18.7905C10.0426 18.7756 10.0437 18.7601 10.046 18.7441L9.69373 18.476L10.07 17.8229L10.477 17.9947C10.5021 17.9764 10.5283 17.9592 10.5556 17.9432C10.583 17.9271 10.6104 17.9134 10.6377 17.9019L10.6925 17.4619H11.445L11.4997 17.9019C11.5294 17.9134 11.5573 17.9271 11.5835 17.9432C11.6097 17.9592 11.6354 17.9764 11.6605 17.9947L12.0675 17.8229L12.4437 18.476L12.0915 18.7441C12.0937 18.7601 12.0948 18.7756 12.0948 18.7905V18.8833C12.0948 18.8982 12.0926 18.9137 12.088 18.9297L12.4403 19.1979L12.0641 19.851L11.6605 19.6791C11.6354 19.6975 11.6092 19.7146 11.5818 19.7307C11.5544 19.7467 11.5271 19.7604 11.4997 19.7719L11.445 20.2119H10.6925ZM11.0756 19.3182C11.2078 19.3182 11.3207 19.2712 11.4142 19.1772C11.5077 19.0832 11.5544 18.9698 11.5544 18.8369C11.5544 18.704 11.5077 18.5906 11.4142 18.4966C11.3207 18.4026 11.2078 18.3557 11.0756 18.3557C10.9411 18.3557 10.8276 18.4026 10.7352 18.4966C10.6429 18.5906 10.5967 18.704 10.5967 18.8369C10.5967 18.9698 10.6429 19.0832 10.7352 19.1772C10.8276 19.2712 10.9411 19.3182 11.0756 19.3182Z",
                fill: "#06DFFF",
                fillOpacity: "0.3"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "path",
              {
                d: "M9.24941 7.14961L9.22479 6.95161C9.21146 6.94645 9.19888 6.94027 9.18712 6.93305C9.17529 6.92583 9.16374 6.91806 9.15247 6.90981L8.96932 6.98715L8.79999 6.69328L8.95853 6.57262C8.95749 6.56541 8.95701 6.55845 8.95701 6.55175V6.50998C8.95701 6.50328 8.95749 6.49631 8.95853 6.48909L8.79999 6.36844L8.96932 6.07453L9.15247 6.15188C9.16374 6.14363 9.17557 6.13589 9.18788 6.12867C9.20018 6.12145 9.21249 6.11527 9.22479 6.11011L9.24941 5.91211H9.58807L9.61268 6.11011C9.62602 6.11527 9.6386 6.12145 9.65036 6.12867C9.66218 6.13589 9.67373 6.14363 9.68501 6.15188L9.86816 6.07453L10.0375 6.36844L9.87895 6.48909C9.87998 6.49631 9.88046 6.50328 9.88046 6.50998V6.55175C9.88046 6.55845 9.87943 6.56541 9.87744 6.57262L10.036 6.69328L9.86664 6.98715L9.68501 6.90981C9.67373 6.91806 9.66191 6.92583 9.6496 6.93305C9.63729 6.94027 9.62499 6.94645 9.61268 6.95161L9.58807 7.14961H9.24941ZM9.42183 6.74742C9.4813 6.74742 9.53211 6.72628 9.57418 6.684C9.61626 6.64172 9.63729 6.59067 9.63729 6.53086C9.63729 6.47105 9.61626 6.42 9.57418 6.37772C9.53211 6.33544 9.4813 6.3143 9.42183 6.3143C9.36126 6.3143 9.31025 6.33544 9.26866 6.37772C9.22713 6.42 9.2063 6.47105 9.2063 6.53086C9.2063 6.59067 9.22713 6.64172 9.26866 6.684C9.31025 6.72628 9.36126 6.74742 9.42183 6.74742Z",
                fill: "#06DFFF",
                fillOpacity: "0.2"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "path",
              {
                d: "M13.187 20.4184L13.1651 20.2424C13.1532 20.2378 13.1421 20.2323 13.1316 20.2259C13.1211 20.2195 13.1108 20.2126 13.1008 20.2052L12.938 20.274L12.7875 20.0127L12.9284 19.9055C12.9275 19.8991 12.927 19.8929 12.927 19.8869V19.8498C12.927 19.8438 12.9275 19.8376 12.9284 19.8312L12.7875 19.724L12.938 19.4627L13.1008 19.5315C13.1108 19.5241 13.1213 19.5173 13.1323 19.5109C13.1432 19.5045 13.1541 19.499 13.1651 19.4944L13.187 19.3184H13.488L13.5098 19.4944C13.5217 19.499 13.5329 19.5045 13.5434 19.5109C13.5539 19.5173 13.5641 19.5241 13.5742 19.5315L13.737 19.4627L13.8875 19.724L13.7465 19.8312C13.7475 19.8376 13.7479 19.8438 13.7479 19.8498V19.8869C13.7479 19.8929 13.747 19.8991 13.7452 19.9055L13.8861 20.0127L13.7356 20.274L13.5742 20.2052C13.5641 20.2126 13.5536 20.2195 13.5427 20.2259C13.5318 20.2323 13.5208 20.2378 13.5098 20.2424L13.488 20.4184H13.187ZM13.3402 20.0609C13.3931 20.0609 13.4383 20.0421 13.4757 20.0045C13.5131 19.9669 13.5318 19.9215 13.5318 19.8684C13.5318 19.8152 13.5131 19.7698 13.4757 19.7322C13.4383 19.6946 13.3931 19.6759 13.3402 19.6759C13.2864 19.6759 13.241 19.6946 13.2041 19.7322C13.1671 19.7698 13.1487 19.8152 13.1487 19.8684C13.1487 19.9215 13.1671 19.9669 13.2041 20.0045C13.241 20.0421 13.2864 20.0609 13.3402 20.0609Z",
                fill: "#06DFFF",
                fillOpacity: "0.4"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "path",
              {
                d: "M13.8875 17.9088C13.8875 18.3454 13.5335 18.6994 13.0968 18.6994C12.6602 18.6994 12.3062 18.3454 12.3062 17.9088C12.3062 17.4722 12.6602 17.1182 13.0968 17.1182C13.5335 17.1182 13.8875 17.4722 13.8875 17.9088ZM12.7536 17.9088C12.7536 18.0983 12.9073 18.252 13.0968 18.252C13.2864 18.252 13.44 18.0983 13.44 17.9088C13.44 17.7192 13.2864 17.5656 13.0968 17.5656C12.9073 17.5656 12.7536 17.7192 12.7536 17.9088Z",
                fill: "#06DFFF",
                fillOpacity: "0.2"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "path",
              {
                opacity: "0.8",
                d: "M7.42496 8.62773C7.42496 9.74781 6.51694 10.6559 5.39684 10.6559C4.27674 10.6559 3.36871 9.74781 3.36871 8.62773C3.36871 7.50766 4.27674 6.59961 5.39684 6.59961C6.51694 6.59961 7.42496 7.50766 7.42496 8.62773ZM4.38278 8.62773C4.38278 9.18777 4.83679 9.6418 5.39684 9.6418C5.95689 9.6418 6.4109 9.18777 6.4109 8.62773C6.4109 8.0677 5.95689 7.61367 5.39684 7.61367C4.83679 7.61367 4.38278 8.0677 4.38278 8.62773Z",
                fill: "#06DFFF"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("g", { mask: "url(#mask1_5391_39565)", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "path",
        {
          d: "M18.0921 18.1024C19.9117 16.2855 21.0375 13.7739 21.0375 10.9994C21.0375 5.45584 16.5435 0.961914 11 0.961914C5.4564 0.961914 0.962463 5.45584 0.962463 10.9994C0.962463 16.5429 5.4564 21.0368 11 21.0368C12.4612 21.0368 13.8494 20.7247 15.1017 20.1632L18.7031 21.0302C18.8795 21.0727 19.0336 20.9044 18.9758 20.7324L18.0921 18.1024Z",
          fill: "#24E8FF"
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "path",
        {
          d: "M5.40871 16.2518C4.2121 16.2518 3.24206 15.2818 3.24206 14.0852C3.24206 13.1869 3.78873 12.4162 4.56754 12.0878L2.68127 5.77539H12.291L11.9394 6.92244C12.1109 6.88899 12.2882 6.87146 12.4695 6.87146C12.859 6.87146 13.2297 6.95238 13.5655 7.09831V5.77539H16.9047V6.76467C18.3107 7.11735 19.3518 8.38948 19.3518 9.90478C19.3518 10.5974 19.1343 11.2391 18.7639 11.7656H19.3008V16.2518H5.40871Z",
          fill: "#393C52"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "path",
        {
          d: "M5.53774 11.5613L4.17822 6.88965H5.42597L6.13082 9.95085H6.1696L6.97482 6.88965H7.99217L8.79739 9.95769H8.83617L9.5433 6.88965H10.7888L9.43153 11.5613H8.34346L7.50174 8.72819H7.46525L6.62353 11.5613H5.53774Z",
          fill: "white"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "path",
        {
          d: "M12.472 11.6274C12.1055 11.6274 11.7892 11.5552 11.5231 11.4107C11.2585 11.2647 11.0547 11.0572 10.9118 10.788C10.7703 10.5173 10.6996 10.1957 10.6996 9.82311C10.6996 9.46118 10.7711 9.14487 10.914 8.87418C11.057 8.60197 11.2585 8.39059 11.5185 8.24004C11.7786 8.08797 12.085 8.01194 12.4378 8.01194C12.6872 8.01194 12.9153 8.05071 13.1221 8.12827C13.3289 8.20583 13.5076 8.32064 13.6582 8.47271C13.8087 8.62478 13.9258 8.81259 14.0095 9.03614C14.0931 9.25816 14.1349 9.51288 14.1349 9.8003V10.0786H11.0897V9.43076H13.097C13.0955 9.31215 13.0674 9.20646 13.0126 9.11369C12.9579 9.02093 12.8826 8.9487 12.7868 8.89699C12.6925 8.84377 12.5838 8.81715 12.4606 8.81715C12.3359 8.81715 12.2241 8.84529 12.1253 8.90155C12.0264 8.9563 11.9481 9.03157 11.8903 9.12738C11.8326 9.22166 11.8021 9.32887 11.7991 9.44901V10.1082C11.7991 10.2512 11.8272 10.3766 11.8835 10.4846C11.9398 10.5911 12.0196 10.6739 12.123 10.7333C12.2264 10.7926 12.3496 10.8222 12.4925 10.8222C12.5914 10.8222 12.6811 10.8085 12.7617 10.7812C12.8423 10.7538 12.9115 10.7135 12.9693 10.6603C13.0271 10.607 13.0704 10.5416 13.0993 10.4641L14.1235 10.4937C14.0809 10.7234 13.9874 10.9233 13.8429 11.0937C13.7 11.2625 13.5122 11.394 13.2795 11.4883C13.0468 11.5811 12.7777 11.6274 12.472 11.6274Z",
          fill: "white"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "path",
        {
          d: "M14.6725 11.5613V6.88965H15.7879V8.65748H15.8108C15.8564 8.55103 15.921 8.44838 16.0046 8.34953C16.0898 8.25069 16.1978 8.17009 16.3286 8.10774C16.4609 8.04387 16.619 8.01194 16.803 8.01194C17.0463 8.01194 17.2737 8.07581 17.4851 8.20355C17.698 8.33129 17.8698 8.52822 18.0006 8.79434C18.1314 9.06047 18.1968 9.39959 18.1968 9.8117C18.1968 10.2086 18.1336 10.5409 18.0074 10.8085C17.8827 11.0762 17.7139 11.2769 17.501 11.4107C17.2896 11.5446 17.0547 11.6115 16.7962 11.6115C16.6198 11.6115 16.4669 11.5826 16.3377 11.5248C16.2084 11.467 16.0997 11.391 16.0115 11.2967C15.9248 11.2024 15.8579 11.1013 15.8108 10.9933H15.7765V11.5613H14.6725ZM15.7651 9.80942C15.7651 9.99799 15.7902 10.1622 15.8404 10.3021C15.8921 10.442 15.9659 10.5508 16.0617 10.6283C16.159 10.7044 16.2753 10.7424 16.4107 10.7424C16.5475 10.7424 16.6639 10.7044 16.7597 10.6283C16.8555 10.5508 16.9277 10.442 16.9764 10.3021C17.0266 10.1622 17.0517 9.99799 17.0517 9.80942C17.0517 9.62085 17.0266 9.45737 16.9764 9.31899C16.9277 9.1806 16.8555 9.07339 16.7597 8.99736C16.6654 8.92132 16.5491 8.8833 16.4107 8.8833C16.2738 8.8833 16.1575 8.92056 16.0617 8.99508C15.9659 9.06959 15.8921 9.17604 15.8404 9.31443C15.7902 9.45281 15.7651 9.61781 15.7651 9.80942Z",
          fill: "white"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "path",
        {
          d: "M6.45867 13.7138H5.95912C5.94999 13.6492 5.93136 13.5918 5.90323 13.5416C5.8751 13.4906 5.83898 13.4473 5.79488 13.4116C5.75078 13.3758 5.69984 13.3484 5.64205 13.3294C5.58502 13.3104 5.52305 13.3009 5.45614 13.3009C5.33524 13.3009 5.22994 13.331 5.14021 13.391C5.05049 13.4503 4.98092 13.537 4.9315 13.6511C4.88207 13.7644 4.85736 13.902 4.85736 14.0639C4.85736 14.2305 4.88207 14.3704 4.9315 14.4837C4.98168 14.597 5.05163 14.6825 5.14135 14.7403C5.23108 14.7981 5.33486 14.827 5.45272 14.827C5.51887 14.827 5.58008 14.8182 5.63635 14.8007C5.69337 14.7832 5.74394 14.7578 5.78804 14.7243C5.83214 14.6901 5.86864 14.6487 5.89753 14.6C5.92718 14.5513 5.94771 14.4958 5.95912 14.4335L6.45867 14.4358C6.44575 14.543 6.41343 14.6464 6.36173 14.746C6.31078 14.8448 6.24197 14.9334 6.15529 15.0117C6.06937 15.0893 5.96672 15.1509 5.84735 15.1965C5.72873 15.2414 5.59453 15.2638 5.44474 15.2638C5.2364 15.2638 5.05011 15.2166 4.88587 15.1224C4.7224 15.0281 4.59314 14.8916 4.49809 14.7129C4.40381 14.5342 4.35667 14.3179 4.35667 14.0639C4.35667 13.8092 4.40457 13.5925 4.50037 13.4138C4.59618 13.2352 4.7262 13.0991 4.89044 13.0055C5.05467 12.9112 5.23944 12.8641 5.44474 12.8641C5.58008 12.8641 5.70554 12.8831 5.82111 12.9211C5.93745 12.9591 6.04048 13.0147 6.1302 13.0876C6.21992 13.1599 6.29291 13.2485 6.34918 13.3534C6.40621 13.4583 6.4427 13.5785 6.45867 13.7138Z",
          fill: "white"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "path",
        {
          d: "M7.27349 14.2191V15.2319H6.78763V12.896H7.25981V13.7891H7.28034C7.31988 13.6857 7.38375 13.6047 7.47195 13.5461C7.56015 13.4868 7.67078 13.4572 7.80384 13.4572C7.9255 13.4572 8.03157 13.4838 8.12205 13.537C8.21329 13.5895 8.28401 13.6651 8.33419 13.764C8.38514 13.8621 8.41023 13.9795 8.40947 14.1164V15.2319H7.9236V14.2031C7.92436 14.0951 7.89699 14.0111 7.84148 13.951C7.78674 13.891 7.70994 13.8609 7.61109 13.8609C7.54494 13.8609 7.48639 13.875 7.43545 13.9031C7.38527 13.9313 7.34573 13.9723 7.31683 14.0263C7.2887 14.0795 7.27425 14.1438 7.27349 14.2191Z",
          fill: "white"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "path",
        {
          d: "M9.27533 15.2649C9.16356 15.2649 9.06395 15.2455 8.97651 15.2068C8.88907 15.1672 8.81987 15.1091 8.76893 15.0323C8.71875 14.9547 8.69365 14.8581 8.69365 14.7426C8.69365 14.6452 8.71152 14.5635 8.74726 14.4973C8.783 14.4312 8.83166 14.378 8.89325 14.3377C8.95484 14.2974 9.02479 14.267 9.10311 14.2464C9.18218 14.2259 9.26506 14.2115 9.35174 14.2031C9.45363 14.1924 9.53575 14.1826 9.5981 14.1734C9.66045 14.1635 9.70569 14.1491 9.73382 14.1301C9.76196 14.1111 9.77602 14.083 9.77602 14.0457V14.0389C9.77602 13.9666 9.75321 13.9107 9.70759 13.8712C9.66273 13.8317 9.59886 13.8119 9.51598 13.8119C9.42854 13.8119 9.35897 13.8313 9.30726 13.8701C9.25556 13.9081 9.22134 13.956 9.20461 14.0138L8.75524 13.9773C8.77805 13.8708 8.82292 13.7788 8.88983 13.7013C8.95674 13.6229 9.04304 13.5629 9.14873 13.521C9.25518 13.4785 9.37836 13.4572 9.51826 13.4572C9.61559 13.4572 9.70873 13.4686 9.79769 13.4914C9.88742 13.5142 9.96687 13.5496 10.0361 13.5975C10.106 13.6454 10.1611 13.707 10.2014 13.7822C10.2417 13.8567 10.2619 13.9461 10.2619 14.0503V15.2319H9.80112V14.9889H9.78743C9.75929 15.0437 9.72166 15.0919 9.67452 15.1338C9.62737 15.1748 9.57073 15.2071 9.50458 15.2307C9.43842 15.2535 9.36201 15.2649 9.27533 15.2649ZM9.41447 14.9296C9.48595 14.9296 9.54906 14.9155 9.6038 14.8874C9.65855 14.8585 9.70151 14.8197 9.73268 14.7711C9.76386 14.7224 9.77944 14.6673 9.77944 14.6057V14.4198C9.76424 14.4297 9.74333 14.4388 9.71672 14.4472C9.69086 14.4548 9.66159 14.462 9.62889 14.4688C9.5962 14.4749 9.5635 14.4806 9.53081 14.4859C9.49811 14.4905 9.46846 14.4947 9.44185 14.4985C9.38482 14.5069 9.33502 14.5202 9.29244 14.5384C9.24986 14.5567 9.21678 14.5814 9.19321 14.6125C9.16964 14.643 9.15785 14.681 9.15785 14.7266C9.15785 14.7927 9.1818 14.8433 9.22971 14.8783C9.27837 14.9125 9.33996 14.9296 9.41447 14.9296Z",
          fill: "white"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "path",
        {
          d: "M11.5546 13.48V13.845H10.4996V13.48H11.5546ZM10.7391 13.0603H11.225V14.6935C11.225 14.7384 11.2318 14.7734 11.2455 14.7984C11.2592 14.8228 11.2782 14.8399 11.3025 14.8498C11.3276 14.8597 11.3565 14.8646 11.3892 14.8646C11.412 14.8646 11.4348 14.8627 11.4577 14.8589C11.4805 14.8543 11.498 14.8509 11.5101 14.8486L11.5865 15.2102C11.5622 15.2178 11.528 15.2265 11.4839 15.2364C11.4398 15.2471 11.3862 15.2535 11.3231 15.2558C11.206 15.2604 11.1033 15.2448 11.0151 15.209C10.9277 15.1733 10.8596 15.1178 10.811 15.0425C10.7623 14.9672 10.7384 14.8722 10.7391 14.7574V13.0603Z",
          fill: "white"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "path",
        {
          d: "M13.413 13.6511C13.397 13.5956 13.3746 13.5465 13.3457 13.5039C13.3168 13.4606 13.2815 13.4241 13.2396 13.3944C13.1986 13.364 13.1514 13.3408 13.0982 13.3249C13.0458 13.3089 12.9876 13.3009 12.9237 13.3009C12.8043 13.3009 12.6994 13.3306 12.6089 13.3899C12.5192 13.4492 12.4493 13.5355 12.3991 13.6488C12.3489 13.7613 12.3238 13.8989 12.3238 14.0617C12.3238 14.2244 12.3485 14.3628 12.3979 14.4768C12.4474 14.5909 12.5173 14.6779 12.6078 14.738C12.6983 14.7973 12.8051 14.827 12.9283 14.827C13.0401 14.827 13.1355 14.8072 13.2146 14.7677C13.2944 14.7274 13.3552 14.6707 13.397 14.5977C13.4396 14.5247 13.4609 14.4384 13.4609 14.3388L13.5613 14.3536H12.9591V13.9818H13.9365V14.2761C13.9365 14.4814 13.8932 14.6578 13.8065 14.8053C13.7198 14.952 13.6004 15.0653 13.4484 15.1452C13.2963 15.2242 13.1222 15.2638 12.926 15.2638C12.707 15.2638 12.5146 15.2155 12.3489 15.1189C12.1831 15.0216 12.0539 14.8836 11.9611 14.7049C11.8691 14.5255 11.8231 14.3126 11.8231 14.0662C11.8231 13.8769 11.8505 13.7081 11.9052 13.5598C11.9607 13.4108 12.0383 13.2846 12.1379 13.1812C12.2375 13.0778 12.3535 12.9991 12.4858 12.9451C12.6181 12.8911 12.7614 12.8641 12.9157 12.8641C13.048 12.8641 13.1712 12.8835 13.2853 12.9223C13.3993 12.9603 13.5005 13.0143 13.5887 13.0842C13.6776 13.1542 13.7502 13.2374 13.8065 13.334C13.8628 13.4298 13.8989 13.5355 13.9148 13.6511H13.413Z",
          fill: "white"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "path",
        {
          d: "M14.2914 15.2319V12.896H15.213C15.3901 12.896 15.5411 12.9299 15.6658 12.9975C15.7905 13.0645 15.8855 13.1576 15.9509 13.277C16.017 13.3956 16.0501 13.5325 16.0501 13.6876C16.0501 13.8427 16.0167 13.9795 15.9498 14.0982C15.8828 14.2168 15.7859 14.3092 15.6589 14.3753C15.5327 14.4415 15.3799 14.4745 15.2004 14.4745H14.613V14.0788H15.1206C15.2156 14.0788 15.2939 14.0624 15.3555 14.0297C15.4179 13.9963 15.4643 13.9503 15.4947 13.8917C15.5259 13.8324 15.5414 13.7644 15.5414 13.6876C15.5414 13.61 15.5259 13.5423 15.4947 13.4846C15.4643 13.426 15.4179 13.3808 15.3555 13.3488C15.2932 13.3161 15.2141 13.2998 15.1183 13.2998H14.7853V15.2319H14.2914Z",
          fill: "white"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "path",
        {
          d: "M16.2659 13.3032V12.896H18.1843V13.3032H17.4691V15.2319H16.981V13.3032H16.2659Z",
          fill: "white"
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("clipPath", { id: "clip0_5391_39565", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("rect", { width: "22", height: "22", fill: "white" }) }) })
  ] }) });
};

export {
  useThemeModeWithChatGPT_default,
  ProLink_default,
  CustomIcon_default,
  WebChatGPTLogo,
  require_client,
  UserConfigInit,
  useInitI18n,
  AppTheme_default
};
