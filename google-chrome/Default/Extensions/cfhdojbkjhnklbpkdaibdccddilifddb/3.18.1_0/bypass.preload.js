/*
 * This file is part of Adblock Plus <https://adblockplus.org/>,
 * Copyright (C) 2006-present eyeo GmbH
 *
 * Adblock Plus is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * Adblock Plus is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Adblock Plus.  If not, see <http://www.gnu.org/licenses/>.
 */ /* eslint-disable */
(function(){'use strict';function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}const eventQueue = [];
const maxErrorThreshold = 30;
const maxQueuedEvents = 20;
const processingDelay = 100;
let errorCount = 0;
let processingIntervalId = null;
function getPayload(event) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!isTrustedEvent(event)) {
            return null;
        }
        if (!isAuthRequestEvent(event)) {
            return null;
        }
        const payload = (yield browser.runtime.sendMessage({
            type: "premium.getAuthPayload",
            signature: event.detail.signature,
            timestamp: event.detail.timestamp
        }));
        return payload;
    });
}
function handleFlattrRequestPayloadEvent(event) {
    if (eventQueue.length >= maxQueuedEvents) {
        return;
    }
    eventQueue.push(event);
    startProcessingInterval();
}
function isAuthRequestEvent(event) {
    return (event.detail &&
        typeof event.detail.signature === "string" &&
        typeof event.detail.timestamp === "number");
}
function isTrustedEvent(event) {
    return (Object.getPrototypeOf(event) === CustomEvent.prototype &&
        !Object.hasOwnProperty.call(event, "detail"));
}
function processNextEvent() {
    return __awaiter(this, void 0, void 0, function* () {
        const event = eventQueue.shift();
        if (event) {
            try {
                const payload = yield getPayload(event);
                if (!payload) {
                    throw new Error("Premium request rejected");
                }
                let detail = { detail: { payload } };
                if (typeof cloneInto === "function") {
                    detail = cloneInto(detail, document.defaultView);
                }
                document.dispatchEvent(new CustomEvent("flattr-payload", detail));
                stop();
            }
            catch (ex) {
                errorCount += 1;
                if (errorCount >= maxErrorThreshold) {
                    stop();
                }
            }
        }
        if (!eventQueue.length) {
            stopProcessingInterval();
        }
    });
}
function startProcessingInterval() {
    if (processingIntervalId) {
        return;
    }
    processNextEvent();
    processingIntervalId = setInterval(processNextEvent, processingDelay);
}
function stopProcessingInterval() {
    if (processingIntervalId !== null) {
        clearInterval(processingIntervalId);
    }
    processingIntervalId = null;
}
function start() {
    document.addEventListener("flattr-request-payload", handleFlattrRequestPayloadEvent, true);
}
function stop() {
    document.removeEventListener("flattr-request-payload", handleFlattrRequestPayloadEvent, true);
    eventQueue.length = 0;
    stopProcessingInterval();
}
start();})();
