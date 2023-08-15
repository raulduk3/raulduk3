// node_modules/.pnpm/registry.npmmirror.com+langchain@0.0.81_axios@1.3.3_cheerio@1.0.0-rc.12/node_modules/langchain/dist/schema/index.js
var RUN_KEY = "__run";
var BaseChatMessage = class {
  constructor(text) {
    Object.defineProperty(this, "text", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.text = text;
  }
  toJSON() {
    return {
      type: this._getType(),
      data: {
        content: this.text,
        role: "role" in this ? this.role : void 0
      }
    };
  }
};
var HumanChatMessage = class extends BaseChatMessage {
  _getType() {
    return "human";
  }
};
var AIChatMessage = class extends BaseChatMessage {
  _getType() {
    return "ai";
  }
};
var SystemChatMessage = class extends BaseChatMessage {
  _getType() {
    return "system";
  }
};
var ChatMessage = class extends BaseChatMessage {
  constructor(text, role) {
    super(text);
    Object.defineProperty(this, "role", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.role = role;
  }
  _getType() {
    return "generic";
  }
};
var BasePromptValue = class {
};
var BaseCache = class {
};

export {
  RUN_KEY,
  HumanChatMessage,
  AIChatMessage,
  SystemChatMessage,
  ChatMessage,
  BasePromptValue,
  BaseCache
};
