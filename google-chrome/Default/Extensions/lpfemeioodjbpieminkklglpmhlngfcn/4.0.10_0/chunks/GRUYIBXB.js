import {
  BasePromptTemplate
} from "./FSM3Q7MN.js";
import {
  BaseChain
} from "./T2MZYYUX.js";
import {
  BaseLanguageModel
} from "./V572PYUS.js";

// node_modules/.pnpm/registry.npmmirror.com+langchain@0.0.81_axios@1.3.3_cheerio@1.0.0-rc.12/node_modules/langchain/dist/chains/llm_chain.js
var LLMChain = class extends BaseChain {
  get inputKeys() {
    return this.prompt.inputVariables;
  }
  get outputKeys() {
    return [this.outputKey];
  }
  constructor(fields) {
    super(fields);
    Object.defineProperty(this, "prompt", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "llm", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "outputKey", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "text"
    });
    Object.defineProperty(this, "outputParser", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.prompt = fields.prompt;
    this.llm = fields.llm;
    this.outputKey = fields.outputKey ?? this.outputKey;
    this.outputParser = fields.outputParser ?? this.outputParser;
    if (this.prompt.outputParser) {
      if (this.outputParser) {
        throw new Error("Cannot set both outputParser and prompt.outputParser");
      }
      this.outputParser = this.prompt.outputParser;
    }
  }
  /** @ignore */
  async _getFinalOutput(generations, promptValue, runManager) {
    const completion = generations[0].text;
    let finalCompletion;
    if (this.outputParser) {
      finalCompletion = await this.outputParser.parseWithPrompt(completion, promptValue, runManager?.getChild());
    } else {
      finalCompletion = completion;
    }
    return finalCompletion;
  }
  /**
   * Run the core logic of this chain and add to output if desired.
   *
   * Wraps _call and handles memory.
   */
  call(values, callbacks) {
    return super.call(values, callbacks);
  }
  /** @ignore */
  async _call(values, runManager) {
    const valuesForPrompt = { ...values };
    const valuesForLLM = {};
    for (const key of this.llm.callKeys) {
      if (key in values) {
        valuesForLLM[key] = values[key];
        delete valuesForPrompt[key];
      }
    }
    const promptValue = await this.prompt.formatPromptValue(valuesForPrompt);
    const { generations } = await this.llm.generatePrompt([promptValue], valuesForLLM, runManager?.getChild());
    return {
      [this.outputKey]: await this._getFinalOutput(generations[0], promptValue, runManager)
    };
  }
  /**
   * Format prompt with values and pass to LLM
   *
   * @param values - keys to pass to prompt template
   * @param callbackManager - CallbackManager to use
   * @returns Completion from LLM.
   *
   * @example
   * ```ts
   * llm.predict({ adjective: "funny" })
   * ```
   */
  async predict(values, callbackManager) {
    const output = await this.call(values, callbackManager);
    return output[this.outputKey];
  }
  _chainType() {
    return "llm_chain";
  }
  static async deserialize(data) {
    const { llm, prompt } = data;
    if (!llm) {
      throw new Error("LLMChain must have llm");
    }
    if (!prompt) {
      throw new Error("LLMChain must have prompt");
    }
    return new LLMChain({
      llm: await BaseLanguageModel.deserialize(llm),
      prompt: await BasePromptTemplate.deserialize(prompt)
    });
  }
  serialize() {
    return {
      _type: this._chainType(),
      llm: this.llm.serialize(),
      prompt: this.prompt.serialize()
    };
  }
};

export {
  LLMChain
};
