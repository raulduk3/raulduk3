/*
	Keyboard Shortcuts
	for Chrome (and other similar browsers)
	by Joe Pestro

	---

	This extension adds the ability to set custom keyboard shortcuts for Chrome.
	By design, it does not require additional Chrome permissions to function.
	All keyboard shortcuts are optional and can be changed at any time.
	Chrome extensions are currently limited to 4 "suggested_key" defaults.
	Other keyboard shortcuts can be user-defined at chrome://extensions/shortcuts.
*/

function currentTab(callback) {
	chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
		var current = tabs[0];
		chrome.tabs.get(current.id, function(tab) {
			callback(tab);
		});
	});
}

function selectTab(position) {
	chrome.tabs.query({ currentWindow: true }, function(tabs) {
		if (position < 0) {
			position = tabs.length - 1; 
		} else if (position > tabs.length - 1) {
			position = 0;
		}

		chrome.tabs.highlight({ tabs: position });
	});
}

function moveTab(tab, newPosition) {
	chrome.tabs.query({ pinned: true, currentWindow: true }, function(pinnedTabs) {
		var offset = !tab.pinned ? pinnedTabs.length : 0;
		chrome.tabs.query({ currentWindow: true }, function(tabs) {
			if (newPosition - offset < 0) {
				newPosition = tabs.length - 1;
			} else if (newPosition > tabs.length - 1) {
				newPosition = 0;
			} else if (tab.pinned && newPosition > pinnedTabs.length - 1) {
				newPosition = 0;
			}

			chrome.tabs.move(tab.id, { index: newPosition });
		});
	});
}

function setBadge(command) {
	chrome.browserAction.setBadgeText({ text: command });
	setTimeout(function() {
		chrome.browserAction.setBadgeText({ text: "" });
	}, 500);
}

chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.create({ url: "chrome://extensions/shortcuts" });
});

chrome.commands.onCommand.addListener(function(command) {
	if (command == "01-tab-previous") {
		currentTab(function(tab) {
			selectTab(tab.index - 1);
		});
	} else if (command == "02-tab-next") {
		currentTab(function(tab) {
			selectTab(tab.index + 1);
		});
	} else if (command == "03-tab-move-to-previous") {
		currentTab(function(tab) {
			moveTab(tab, tab.index - 1);
		});
	} else if (command == "04-tab-move-to-next") {
		currentTab(function(tab) {
			moveTab(tab, tab.index + 1);
		});
	} else if (command == "tab-move-to-first") {
		currentTab(function(tab) {
			chrome.tabs.move(tab.id, { index: 0 });
		});
	} else if (command == "tab-move-to-last") {
		currentTab(function(tab) {
			chrome.tabs.move(tab.id, { index: -1 });
		}); 
	} else if (command == "tab-discard") {
		currentTab(function(tab) {
			chrome.tabs.discard(tab.id);
		});
	} else if (command == "tab-reload") {
		currentTab(function(tab) {
			chrome.tabs.reload(tab.id);
		});
	} else if (command == "tab-duplicate") {
		currentTab(function(tab) {
			chrome.tabs.duplicate(tab.id);
		});
	} else if (command == "tab-pin") {
		currentTab(function(tab) {
			chrome.tabs.update(tab.id, { pinned: !tab.pinned });
		});
	} else if (command == "tab-mute") {
		currentTab(function(tab) {
			chrome.tabs.update(tab.id, { muted: !tab.mutedInfo.muted });
		});
	} else if (command == "tab-close") {
		currentTab(function(tab) {
			chrome.tabs.remove(tab.id);
		});
	} else if (command == "tab-create-new") {
		chrome.tabs.create({});
	} else if (command == "tab-go-back") {
		currentTab(function(tab) {
			chrome.tabs.goBack(tab.id);
		});
	} else if (command == "tab-go-forward") {
		currentTab(function(tab) {
			chrome.tabs.goForward(tab.id);
		});
	} else if (command == "window-new") {
		chrome.windows.create({});
	} else if (command == "window-new-incognito") {
		chrome.windows.create({ incognito: true });
	} else if (command == "open-extensions") {
		chrome.tabs.create({ url: "chrome://extensions" });
	} else if (command == "open-extensions-shortcuts") {
		chrome.tabs.create({ url: "chrome://extensions/shortcuts" });
	} else if (command == "open-downloads") {
		chrome.tabs.create({ url: "chrome://downloads" });
	} else if (command == "open-settings") {
		chrome.tabs.create({ url: "chrome://settings" });
	} else if (command == "open-history") {
		chrome.tabs.create({ url: "chrome://history" });
	} else if (command == "open-bookmarks") {
		chrome.tabs.create({ url: "chrome://bookmarks" });
	} else if (command == "open-help") {
		chrome.tabs.create({ url: "chrome://help" });
	} else if (command == "open-flags") {
		chrome.tabs.create({ url: "chrome://flags" });
	} else {
		console.error("Unknown command", command);
	}
});
