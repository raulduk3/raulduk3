import {
  syncAuthClientLogin
} from "./chunks/4AP7RHEG.js";
import "./chunks/JUS65PLZ.js";
import {
  ContentScriptConnectionV2
} from "./chunks/XK6NXF5B.js";
import "./chunks/QIGS6TBV.js";
import "./chunks/ERZ5UWI7.js";

// src/authClient.ts
var port = new ContentScriptConnectionV2({
  runtime: "client"
});
var lastPathname = location.pathname;
async function syncIsLogin() {
  const data = syncAuthClientLogin();
  if (data) {
    const result = await port.postMessage({
      event: "Client_updateUseChatGPTAuthInfo",
      data
    });
    if (result.success) {
      port.postMessage({
        event: "Client_authDone",
        data
      });
    }
  } else {
    lastPathname = "";
  }
}
syncIsLogin();
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (lastPathname !== location.pathname) {
      lastPathname = location.pathname;
      syncIsLogin();
    }
  });
});
observer.observe(document.querySelector("body"), {
  attributes: true,
  childList: true,
  subtree: true
});
