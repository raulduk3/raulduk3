(function() {
      const importPath = /*@__PURE__*/ JSON.parse('"theSearchItem.js"');
      import(chrome.runtime.getURL(importPath));
    })();