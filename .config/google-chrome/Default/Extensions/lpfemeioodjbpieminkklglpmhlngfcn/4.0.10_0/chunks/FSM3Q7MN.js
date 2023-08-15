import {
  BasePromptValue,
  HumanChatMessage
} from "./5AOQSJ7B.js";

// node_modules/.pnpm/registry.npmmirror.com+langchain@0.0.81_axios@1.3.3_cheerio@1.0.0-rc.12/node_modules/langchain/dist/prompts/base.js
var StringPromptValue = class extends BasePromptValue {
  constructor(value) {
    super();
    Object.defineProperty(this, "value", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.value = value;
  }
  toString() {
    return this.value;
  }
  toChatMessages() {
    return [new HumanChatMessage(this.value)];
  }
};
var BasePromptTemplate = class {
  constructor(input) {
    Object.defineProperty(this, "inputVariables", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "outputParser", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "partialVariables", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    const { inputVariables } = input;
    if (inputVariables.includes("stop")) {
      throw new Error("Cannot have an input variable named 'stop', as it is used internally, please rename.");
    }
    Object.assign(this, input);
  }
  async mergePartialAndUserVariables(userVariables) {
    const partialVariables = this.partialVariables ?? {};
    const partialValues = {};
    for (const [key, value] of Object.entries(partialVariables)) {
      if (typeof value === "string") {
        partialValues[key] = value;
      } else {
        partialValues[key] = await value();
      }
    }
    const allKwargs = { ...partialValues, ...userVariables };
    return allKwargs;
  }
  /**
   * Load a prompt template from a json-like object describing it.
   *
   * @remarks
   * Deserializing needs to be async because templates (e.g. {@link FewShotPromptTemplate}) can
   * reference remote resources that we read asynchronously with a web
   * request.
   */
  static async deserialize(data) {
    switch (data._type) {
      case "prompt": {
        const { PromptTemplate } = await import("./36YJWYHH.js");
        return PromptTemplate.deserialize(data);
      }
      case void 0: {
        const { PromptTemplate } = await import("./36YJWYHH.js");
        return PromptTemplate.deserialize({ ...data, _type: "prompt" });
      }
      case "few_shot": {
        const { FewShotPromptTemplate } = await import("./FOSLIAXX.js");
        return FewShotPromptTemplate.deserialize(data);
      }
      default:
        throw new Error(`Invalid prompt type in config: ${data._type}`);
    }
  }
};
var BaseStringPromptTemplate = class extends BasePromptTemplate {
  async formatPromptValue(values) {
    const formattedPrompt = await this.format(values);
    return new StringPromptValue(formattedPrompt);
  }
};

export {
  BasePromptTemplate,
  BaseStringPromptTemplate
};
