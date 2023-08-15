import {
  require_dayjs_min
} from "./JUS65PLZ.js";
import {
  ContentScriptConnectionV2
} from "./XK6NXF5B.js";
import {
  require_browser_polyfill
} from "./QIGS6TBV.js";
import {
  __toESM
} from "./ERZ5UWI7.js";

// src/features/auth/utils/index.ts
var import_webextension_polyfill = __toESM(require_browser_polyfill());

// src/features/auth/constant/index.ts
var USECHATGPT_AUTH_INFO_STORAGE_KEY = "USECHATGPT_AUTH_INFO_STORAGE_KEY";
var DEFAULT_ROLE = "free";

// src/features/auth/utils/index.ts
var import_dayjs = __toESM(require_dayjs_min());
var parseJwt = (token) => {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    window.atob(base64).split("").map(function(c) {
      return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
    }).join("")
  );
  return JSON.parse(jsonPayload);
};
var syncAuthClientLogin = () => {
  try {
    const loginEmail = window.localStorage.getItem(
      "UseChatGPTAuthServiceProvider.email"
    );
    const localStoreKeyPrefix = `UseChatGPTAuthServiceProvider.${loginEmail}`;
    const accessToken = window.localStorage.getItem(
      localStoreKeyPrefix + ".accessToken"
    );
    const refreshToken = window.localStorage.getItem(
      localStoreKeyPrefix + ".refreshToken"
    );
    const roles = window.localStorage.getItem(localStoreKeyPrefix + ".roles");
    if (refreshToken && roles) {
      const userInfo = parseJwt(refreshToken);
      userInfo.roles = JSON.parse(roles)?.[0] || DEFAULT_ROLE;
      const exp = userInfo.exp;
      if (exp * 1e3 > Date.now()) {
        return {
          accessToken,
          refreshToken,
          userInfo: {
            ...userInfo,
            email: loginEmail
          }
        };
      }
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};
var getUseChatGPTAccessToken = async () => {
  const cache = await import_webextension_polyfill.default.storage.local.get(
    USECHATGPT_AUTH_INFO_STORAGE_KEY
  );
  if (cache[USECHATGPT_AUTH_INFO_STORAGE_KEY]) {
    return cache[USECHATGPT_AUTH_INFO_STORAGE_KEY]?.refreshToken;
  }
  return "";
};
var getUseChatGPTUserInfo = async () => {
  const cache = await import_webextension_polyfill.default.storage.local.get(
    USECHATGPT_AUTH_INFO_STORAGE_KEY
  );
  if (cache[USECHATGPT_AUTH_INFO_STORAGE_KEY]) {
    return cache[USECHATGPT_AUTH_INFO_STORAGE_KEY]?.userInfo;
  }
  return null;
};
var logoutUseChatGPTAuth = async () => {
  const port = new ContentScriptConnectionV2({
    runtime: "client"
  });
  const result = await port.postMessage({
    event: "Client_logoutUseChatGPTAuth"
  });
  return result.success;
};
var getChatGPTUserEmail = () => {
  try {
    const nextDataDom = document.querySelector("#__NEXT_DATA__");
    if (nextDataDom) {
      const data = JSON.parse(nextDataDom.innerText);
      return data?.props?.pageProps?.user?.email || "";
    }
    return "";
  } catch (error) {
    return "";
  }
};
var LOGIN_STUCK_STORAGE_KEY = "LOGIN_STUCK_STORAGE_KEY";
var setLoginStuckData = async (newData) => {
  const oldData = await getLoginStuckData() ?? {};
  await import_webextension_polyfill.default.storage.local.set({
    [LOGIN_STUCK_STORAGE_KEY]: {
      ...oldData,
      ...newData
    }
  });
};
var getLoginStuckData = async () => {
  const localData = await import_webextension_polyfill.default.storage.local.get(LOGIN_STUCK_STORAGE_KEY) ?? {};
  return localData[LOGIN_STUCK_STORAGE_KEY] ?? {};
};
var incrementLoginStuckData = async () => {
  const data = await getLoginStuckData();
  const key = (0, import_dayjs.default)().format("YYYY-MM-DD");
  const value = data[key] ?? 0;
  await setLoginStuckData({
    [key]: value + 1
  });
};

export {
  USECHATGPT_AUTH_INFO_STORAGE_KEY,
  syncAuthClientLogin,
  getUseChatGPTAccessToken,
  getUseChatGPTUserInfo,
  logoutUseChatGPTAuth,
  getChatGPTUserEmail,
  getLoginStuckData,
  incrementLoginStuckData
};
