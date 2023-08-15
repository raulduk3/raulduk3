import {
  USECHATGPT_AUTH_INFO_STORAGE_KEY,
  getChatGPTUserEmail
} from "./4AP7RHEG.js";
import {
  createBackgroundMessageListener
} from "./2TR75BHR.js";
import {
  require_aes
} from "./LTECKZ5X.js";
import {
  isEmpty_default
} from "./VIN7E7C7.js";
import {
  ContentScriptConnectionV2
} from "./XK6NXF5B.js";
import {
  APP_USE_CHAT_GPT_API_HOST,
  CHROME_EXTENSION_POST_MESSAGE_ID,
  require_browser_polyfill
} from "./QIGS6TBV.js";
import {
  v4_default
} from "./AISGHLQV.js";
import {
  __toESM
} from "./ERZ5UWI7.js";

// src/features/auth/background/index.ts
var import_webextension_polyfill = __toESM(require_browser_polyfill());
var AuthStatusMessageInit = () => {
  let lastFocusTabId = void 0;
  let authClientTabsId = void 0;
  createBackgroundMessageListener(async (runtime, event, data, sender) => {
    if (runtime === "client") {
      switch (event) {
        case "Client_authDone": {
          if (authClientTabsId) {
            await import_webextension_polyfill.default.tabs.remove([authClientTabsId]);
            authClientTabsId = void 0;
          }
          if (lastFocusTabId) {
            await import_webextension_polyfill.default.tabs.update(lastFocusTabId, {
              active: true
            });
            import_webextension_polyfill.default.tabs.sendMessage(lastFocusTabId, {
              id: CHROME_EXTENSION_POST_MESSAGE_ID,
              event: "Client_authDone"
            });
            lastFocusTabId = void 0;
          }
          return {
            success: true,
            message: "ok",
            data: {}
          };
          break;
        }
        case "Client_openAuthClientTab": {
          if (sender.tab && sender.tab.id) {
            lastFocusTabId = sender.tab.id;
          }
          const authClientTab = await import_webextension_polyfill.default.tabs.create({
            active: true,
            url: `${APP_USE_CHAT_GPT_API_HOST}/app/login-webchatgpt?ref=${data.ref}`
          });
          if (authClientTab) {
            authClientTabsId = authClientTab.id;
          }
          return {
            success: true,
            message: "ok",
            data: {}
          };
          break;
        }
        case "Client_updateUseChatGPTAuthInfo": {
          const { accessToken, refreshToken, userInfo } = data;
          if (accessToken && refreshToken) {
            await import_webextension_polyfill.default.storage.local.set({
              [USECHATGPT_AUTH_INFO_STORAGE_KEY]: {
                accessToken,
                refreshToken,
                userInfo
              }
            });
          }
          return {
            success: true,
            message: "ok",
            data: {}
          };
          break;
        }
        case "Client_logoutUseChatGPTAuth": {
          await import_webextension_polyfill.default.storage.local.set({
            [USECHATGPT_AUTH_INFO_STORAGE_KEY]: {
              accessToken: null,
              refreshToken: null,
              userInfo: null
            }
          });
          if (sender.tab && sender.tab?.id) {
            import_webextension_polyfill.default.tabs.sendMessage(sender.tab.id, {
              id: CHROME_EXTENSION_POST_MESSAGE_ID,
              event: "Client_logoutUseChatGPTAuth"
            });
          }
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
  import_webextension_polyfill.default.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete" && tab.url && tab.url.includes("chat.openai.com")) {
      cacheLimitWebAccessCount();
    }
  });
  cacheLimitWebAccessCount();
};
var LIMIT_WEB_ACCESS_COUNT_STORAGE_KEY = "LIMIT_WEB_ACCESS_COUNT_STORAGE_KEY";
var saveLimitWebAccessCount = async (value) => {
  await import_webextension_polyfill.default.storage.local.set({
    [LIMIT_WEB_ACCESS_COUNT_STORAGE_KEY]: value
  });
};
async function cacheLimitWebAccessCount() {
  try {
    const result = await fetch(`https://www.phtracker.com/crx/info/a`);
    if (result.status === 200) {
      const htmlBody = await result.text();
      const countMatchResult = htmlBody.match(
        /<text id="wal">(?<data>.+)<\/text>/
      );
      const limitCount = Number(countMatchResult?.groups?.data);
      if (limitCount >= 0) {
        await saveLimitWebAccessCount(limitCount);
      }
    }
  } catch (e) {
  }
}

// src/features/chatgpt/core/util.ts
var mappingToMessages = (currentNode, mapping) => {
  const messages = [];
  let nodeId = currentNode;
  while (mapping[nodeId]) {
    const node = mapping[nodeId];
    if (!node.message) {
      break;
    }
    const text = node.message.content.parts.join("");
    if (!text) {
      break;
    }
    messages.push({
      messageId: node.id,
      parentMessageId: node.parent,
      text
    });
    nodeId = node.parent;
  }
  return messages;
};

// node_modules/.pnpm/registry.npmmirror.com+eventsource-parser@1.0.0/node_modules/eventsource-parser/dist/index.js
function createParser(onParse) {
  let isFirstChunk;
  let buffer;
  let startingPosition;
  let startingFieldLength;
  let eventId;
  let eventName;
  let data;
  reset();
  return {
    feed,
    reset
  };
  function reset() {
    isFirstChunk = true;
    buffer = "";
    startingPosition = 0;
    startingFieldLength = -1;
    eventId = void 0;
    eventName = void 0;
    data = "";
  }
  function feed(chunk) {
    buffer = buffer ? buffer + chunk : chunk;
    if (isFirstChunk && hasBom(buffer)) {
      buffer = buffer.slice(BOM.length);
    }
    isFirstChunk = false;
    const length = buffer.length;
    let position = 0;
    let discardTrailingNewline = false;
    while (position < length) {
      if (discardTrailingNewline) {
        if (buffer[position] === "\n") {
          ++position;
        }
        discardTrailingNewline = false;
      }
      let lineLength = -1;
      let fieldLength = startingFieldLength;
      let character;
      for (let index = startingPosition; lineLength < 0 && index < length; ++index) {
        character = buffer[index];
        if (character === ":" && fieldLength < 0) {
          fieldLength = index - position;
        } else if (character === "\r") {
          discardTrailingNewline = true;
          lineLength = index - position;
        } else if (character === "\n") {
          lineLength = index - position;
        }
      }
      if (lineLength < 0) {
        startingPosition = length - position;
        startingFieldLength = fieldLength;
        break;
      } else {
        startingPosition = 0;
        startingFieldLength = -1;
      }
      parseEventStreamLine(buffer, position, fieldLength, lineLength);
      position += lineLength + 1;
    }
    if (position === length) {
      buffer = "";
    } else if (position > 0) {
      buffer = buffer.slice(position);
    }
  }
  function parseEventStreamLine(lineBuffer, index, fieldLength, lineLength) {
    if (lineLength === 0) {
      if (data.length > 0) {
        onParse({
          type: "event",
          id: eventId,
          event: eventName || void 0,
          data: data.slice(0, -1)
          // remove trailing newline
        });
        data = "";
        eventId = void 0;
      }
      eventName = void 0;
      return;
    }
    const noValue = fieldLength < 0;
    const field = lineBuffer.slice(index, index + (noValue ? lineLength : fieldLength));
    let step = 0;
    if (noValue) {
      step = lineLength;
    } else if (lineBuffer[index + fieldLength + 1] === " ") {
      step = fieldLength + 2;
    } else {
      step = fieldLength + 1;
    }
    const position = index + step;
    const valueLength = lineLength - step;
    const value = lineBuffer.slice(position, position + valueLength).toString();
    if (field === "data") {
      data += value ? "".concat(value, "\n") : "\n";
    } else if (field === "event") {
      eventName = value;
    } else if (field === "id" && !value.includes("\0")) {
      eventId = value;
    } else if (field === "retry") {
      const retry = parseInt(value, 10);
      if (!Number.isNaN(retry)) {
        onParse({
          type: "reconnect-interval",
          value: retry
        });
      }
    }
  }
}
var BOM = [239, 187, 191];
function hasBom(buffer) {
  return BOM.every((charCode, index) => buffer.charCodeAt(index) === charCode);
}

// src/features/chatgpt/core/stream-async-inerable.ts
async function* streamAsyncIterable(stream) {
  const reader = stream.getReader();
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        return;
      }
      yield value;
    }
  } finally {
    reader.releaseLock();
  }
}

// src/features/chatgpt/core/fetch-sse.ts
var fetchSSE = async (resource, options) => {
  const { onMessage, ...fetchOptions } = options;
  const resp = await fetch(resource, fetchOptions);
  if (!resp.ok) {
    const error = await resp.json().catch(() => ({}));
    throw new Error(
      JSON.stringify(
        !isEmpty_default(error) ? error : { message: `${resp.status} ${resp.statusText}`, detail: "" }
      )
    );
  }
  const parser = createParser((event) => {
    if (event.type === "event") {
      onMessage(event.data);
    }
  });
  for await (const chunk of streamAsyncIterable(resp.body)) {
    const str = new TextDecoder().decode(chunk);
    parser.feed(str);
  }
};

// src/features/chatgpt/core/index.ts
var CHAT_GPT_PROXY_HOST = `https://chat.openai.com`;
var CHAT_TITLE = "WebChatGPT";
var chatGptRequest = (token, method, path, data) => {
  return fetch(`${CHAT_GPT_PROXY_HOST}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: data === void 0 ? void 0 : JSON.stringify(data)
  });
};
var getConversationList = async (params) => {
  try {
    const { token, offset = 0, limit = 100, order = "updated" } = params;
    const resp = await chatGptRequest(
      token,
      "GET",
      `/backend-api/conversations?offset=${offset}&limit=${limit}&order=${order}`
    );
    const data = await resp.json();
    return data?.items || [];
  } catch (e) {
    return [];
  }
};
var sendModerationRequest = async ({
  token,
  conversationId,
  messageId,
  input
}) => {
  try {
    await chatGptRequest(token, "POST", "/backend-api/moderations", {
      conversation_id: conversationId,
      message_id: messageId,
      input,
      model: "text-moderation-playground"
    });
  } catch (e) {
  }
};
var setConversationProperty = async (token, conversationId, propertyObject) => {
  await chatGptRequest(
    token,
    "PATCH",
    `/backend-api/conversation/${conversationId}`,
    propertyObject
  );
};
var getChatGPTAccessToken = async (notCatchError = false) => {
  const resp = await fetch("https://chat.openai.com/api/auth/session");
  if (resp.status === 403 && !notCatchError) {
    throw new Error("CLOUDFLARE");
  }
  const data = await resp.json().catch(() => ({}));
  if (!data.accessToken && !notCatchError) {
    throw new Error("UNAUTHORIZED");
  }
  return data?.accessToken || "";
};
var ChatGPTConversation = class {
  id;
  token;
  model;
  conversationId;
  // regenerate last question answer - parent message id
  lastChatGPTAnswerMessageId;
  conversationInfo;
  // 是否在删除历史会话
  isCleaningCache = false;
  constructor(props) {
    this.token = props.token;
    this.model = props.model;
    this.lastChatGPTAnswerMessageId = v4_default();
    this.id = v4_default();
    this.conversationId = props.conversationId || void 0;
    this.conversationInfo = {
      title: "",
      messages: []
    };
  }
  async updateTitle(title) {
    if (!this.conversationId || this.conversationInfo.title === title) {
      return;
    }
    await setConversationProperty(this.token, this.conversationId, {
      title
    });
    this.conversationInfo.title = title;
  }
  async fetchHistoryAndConfig() {
    if (!this.conversationId) {
      return;
    }
    try {
      const result = await chatGptRequest(
        this.token,
        "GET",
        `/backend-api/conversation/${this.conversationId}`
      );
      const chatGPTConversationRaw = await result.json();
      this.conversationInfo = {
        title: chatGPTConversationRaw.title,
        messages: mappingToMessages(
          chatGPTConversationRaw.current_node,
          chatGPTConversationRaw.mapping
        ),
        raw: chatGPTConversationRaw
      };
      if (chatGPTConversationRaw.title !== CHAT_TITLE) {
        await this.updateTitle(CHAT_TITLE);
      }
      this.lastChatGPTAnswerMessageId = chatGPTConversationRaw.current_node;
    } catch (e) {
      this.lastChatGPTAnswerMessageId = v4_default();
      this.conversationId = void 0;
      this.conversationInfo = {
        title: "",
        messages: []
      };
    }
  }
  async generateAnswer(params, regenerate = false) {
    const questionId = params.messageId || v4_default();
    const parentMessageId = params.parentMessageId || this.lastChatGPTAnswerMessageId || v4_default();
    let isSend = false;
    let resultText = "";
    let resultMessageId = "";
    await fetchSSE(`${CHAT_GPT_PROXY_HOST}/backend-api/conversation`, {
      method: "POST",
      signal: params.signal,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
      },
      body: JSON.stringify(
        Object.assign(
          {
            action: regenerate ? "variant" : "next",
            messages: [
              {
                id: questionId,
                author: {
                  role: "user"
                },
                content: {
                  content_type: "text",
                  parts: [params.prompt]
                }
              }
            ],
            model: this.model,
            parent_message_id: parentMessageId,
            timezone_offset_min: new Date().getTimezoneOffset(),
            history_and_training_disabled: false
          },
          this.conversationId ? {
            conversation_id: this.conversationId
          } : {}
        )
      ),
      onMessage: (message) => {
        if (message === "[DONE]") {
          if (resultText && this.conversationId && resultMessageId) {
            this.updateTitle(CHAT_TITLE);
            sendModerationRequest({
              token: this.token,
              conversationId: this.conversationId,
              messageId: resultMessageId,
              input: resultText
            });
          }
          params.onEvent({ type: "done" });
          return;
        }
        let data;
        try {
          data = JSON.parse(message);
        } catch (err) {
          return;
        }
        const text = data.message?.content?.parts?.[0] || data.message?.content?.text;
        if (text) {
          resultText = text;
          resultMessageId = data.message.id;
          this.conversationId = data.conversation_id;
          this.lastChatGPTAnswerMessageId = data.message.id;
          if (this.conversationId && !isSend) {
            isSend = true;
            sendModerationRequest({
              token: this.token,
              conversationId: this.conversationId,
              messageId: questionId,
              input: params.prompt
            });
          }
          params.onEvent({
            type: "answer",
            data: {
              text,
              messageId: data.message.id,
              conversationId: data.conversation_id,
              parentMessageId: questionId
            }
          });
        }
      }
    }).then().catch((err) => {
      try {
        if (err?.message === "The user aborted a request.") {
          params.onEvent({
            type: "error",
            data: { message: "manual aborted request.", detail: "" }
          });
          return;
        }
        const error = JSON.parse(err.message || err);
        params.onEvent({
          type: "error",
          data: { message: error.message, detail: error.detail }
        });
      } catch (e) {
        params.onEvent({
          type: "error",
          data: { message: "Network error.", detail: "" }
        });
      }
    });
  }
  async close() {
    if (this.conversationId) {
      await setConversationProperty(this.token, this.conversationId, {
        is_visible: false
      });
      this.conversationInfo = {
        title: "",
        messages: []
      };
    }
  }
  async removeCacheConversation() {
    if (this.isCleaningCache) {
      return;
    }
    if (this.token) {
      const conversations = await getConversationList({
        token: this.token
      });
      const cacheConversations = conversations.filter(
        (conversation) => {
          return conversation.title === CHAT_TITLE && conversation.id !== this.conversationId;
        }
      );
      if (cacheConversations.length === 0) {
        return;
      }
      this.isCleaningCache = true;
      const delay = (ms) => new Promise((res) => setTimeout(res, ms));
      for (let i = 0; i < cacheConversations.length; i++) {
        try {
          await setConversationProperty(this.token, cacheConversations[i].id, {
            is_visible: false
          });
          await delay(3e3);
        } catch (e) {
        }
      }
      this.isCleaningCache = false;
    }
  }
};
var ChatGPTDaemonProcess = class {
  token;
  conversations;
  abortFunctions;
  models;
  plugins;
  constructor() {
    this.conversations = [];
    this.abortFunctions = {};
    this.plugins = [];
    this.token = void 0;
    this.models = [];
  }
  async fetchModels(token) {
    if (this.models.length > 0) {
      return this.models;
    }
    const resp = await chatGptRequest(token, "GET", "/backend-api/models").then(
      (r) => r.json()
    );
    if (resp?.models && resp.models.length > 0) {
      this.models = resp.models;
    }
    return resp.models;
  }
  async fetchPlugins(token) {
    if (this.plugins.length > 0) {
      return this.plugins;
    }
    const resp = await chatGptRequest(
      token,
      "GET",
      "/backend-api/aip/p?offset=0&limit=100&statuses=approved"
    ).then((r) => r.json());
    if (resp?.items && resp.items.length > 0) {
      this.plugins = resp.items;
    }
    return resp.items;
  }
  async getModelName(token, selectModel) {
    try {
      const models = await this.fetchModels(token);
      if (models?.length > 0) {
        if (selectModel) {
          const model = models.find((m) => m.slug === selectModel);
          if (model) {
            return model.slug;
          }
        }
        return models[0].slug;
      }
      return "text-davinci-002-render-sha";
    } catch (err) {
      return "text-davinci-002-render-sha";
    }
  }
  async getAllModels() {
    if (this.models.length > 0) {
      return this.models;
    }
    try {
      const token = this.token || await getChatGPTAccessToken();
      if (token) {
        this.token = token;
      }
      return await this.fetchModels(token);
    } catch (e) {
      return [];
    }
  }
  async getAllPlugins() {
    if (this.plugins.length > 0) {
      return this.plugins;
    }
    try {
      const token = this.token || await getChatGPTAccessToken();
      if (token) {
        this.token = token;
      }
      return await this.fetchPlugins(token);
    } catch (e) {
      return [];
    }
  }
  async createConversation(conversationId, selectedModel, removeCacheConversation = true) {
    if (this.conversations.length > 0) {
      return this.conversations[0];
    }
    const token = this.token || await getChatGPTAccessToken();
    const model = await this.getModelName(token, selectedModel);
    const conversationInstance = new ChatGPTConversation({
      token,
      model,
      conversationId
    });
    this.conversations.push(conversationInstance);
    removeCacheConversation && conversationInstance.removeCacheConversation();
    await conversationInstance.fetchHistoryAndConfig();
    return conversationInstance;
  }
  getConversation(conversationId) {
    return this.conversations.find(
      (c) => c.id === conversationId || c.conversationId === conversationId
    );
  }
  getConversations() {
    return this.conversations;
  }
  async closeConversation(conversationId) {
    try {
      const conversation = this.getConversation(conversationId);
      if (conversation) {
        this.conversations = this.conversations.filter(
          (conversation2) => conversation2.conversationId !== conversationId && conversation2.id !== conversationId
        );
        await conversation.close();
      }
      return true;
    } catch (e) {
      return false;
    }
  }
  addAbortWithMessageId(messageId, abortFunction) {
    this.abortFunctions[messageId] = abortFunction;
  }
  removeAbortWithMessageId(messageId) {
    delete this.abortFunctions[messageId];
  }
  abortWithMessageId(messageId) {
    try {
      if (this.abortFunctions[messageId]) {
        this.abortFunctions[messageId]();
        delete this.abortFunctions[messageId];
      }
    } catch (e) {
    }
  }
  removeCacheConversation() {
    return this.conversations?.[0]?.removeCacheConversation();
  }
  removeConversationWithId(conversationId) {
    const willDeleConversation = this.conversations.find(
      (conversation) => conversation.conversationId === conversationId
    );
    if (!willDeleConversation) {
      return;
    }
    willDeleConversation.close();
  }
};

// src/features/chatgpt/utils/callApiRecorder.ts
var import_aes = __toESM(require_aes());
var clientCallApiRecorder = async (data) => {
  const { featureId, promptId, promptName, metaData = {} } = data;
  const email = getChatGPTUserEmail();
  const port = new ContentScriptConnectionV2({
    runtime: "client"
  });
  port.postMessage({
    event: "Client_logCallApiRequest",
    data: {
      email,
      action: "USE",
      feature_id: featureId,
      domain: location.host,
      prompt_id: promptId,
      prompt_name: promptName,
      meta_data: metaData
    }
  });
};
var backgroundCallApiListener = async (infoObject) => {
  try {
    const text = import_aes.default.encrypt(JSON.stringify(infoObject), "MaxAI").toString();
    const result = await fetch(`${APP_USE_CHAT_GPT_API_HOST}/user/vote`, {
      method: "POST",
      body: JSON.stringify({
        info_object: text
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    return await result.json();
  } catch (error) {
    return null;
  }
};

export {
  fetchSSE,
  ChatGPTDaemonProcess,
  AuthStatusMessageInit,
  LIMIT_WEB_ACCESS_COUNT_STORAGE_KEY,
  clientCallApiRecorder,
  backgroundCallApiListener
};
