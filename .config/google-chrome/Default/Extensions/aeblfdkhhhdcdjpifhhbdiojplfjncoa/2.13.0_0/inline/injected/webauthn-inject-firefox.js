(function () {
	'use strict';

	if(!0!==window.webauthnFirefoxContentScriptInjected){window.webauthnFirefoxContentScriptInjected=!0;const e=document.createElement("script");e.src=chrome.runtime.getURL("/inline/injected/webauthn-listeners.js"),document.documentElement.prepend(e),e.remove();}

})();
