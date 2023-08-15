(function() {
      const importPath = /*@__PURE__*/ JSON.parse('"mainUI.js"');
      import(chrome.runtime.getURL(importPath));
    })();