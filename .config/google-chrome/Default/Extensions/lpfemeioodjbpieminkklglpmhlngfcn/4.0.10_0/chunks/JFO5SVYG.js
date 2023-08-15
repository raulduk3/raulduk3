import {
  StuffDocumentsChain
} from "./N6FWVAY7.js";
import {
  PromptTemplate
} from "./XUC4LD7W.js";
import {
  LLMChain
} from "./GRUYIBXB.js";
import {
  BasePromptTemplate
} from "./FSM3Q7MN.js";
import {
  BaseChain
} from "./T2MZYYUX.js";
import {
  BasePromptValue,
  HumanChatMessage,
  SystemChatMessage
} from "./5AOQSJ7B.js";

// node_modules/.pnpm/registry.npmmirror.com+langchain@0.0.81_axios@1.3.3_cheerio@1.0.0-rc.12/node_modules/langchain/dist/prompts/chat.js
var BaseMessagePromptTemplate = class {
  serialize() {
    return {
      _type: this.constructor.name,
      ...JSON.parse(JSON.stringify(this))
    };
  }
};
var ChatPromptValue = class extends BasePromptValue {
  constructor(messages2) {
    super();
    Object.defineProperty(this, "messages", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.messages = messages2;
  }
  toString() {
    return JSON.stringify(this.messages);
  }
  toChatMessages() {
    return this.messages;
  }
};
var BaseMessageStringPromptTemplate = class extends BaseMessagePromptTemplate {
  constructor(prompt) {
    super();
    Object.defineProperty(this, "prompt", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.prompt = prompt;
  }
  get inputVariables() {
    return this.prompt.inputVariables;
  }
  async formatMessages(values) {
    return [await this.format(values)];
  }
};
var BaseChatPromptTemplate = class extends BasePromptTemplate {
  constructor(input) {
    super(input);
  }
  async format(values) {
    return (await this.formatPromptValue(values)).toString();
  }
  async formatPromptValue(values) {
    const resultMessages = await this.formatMessages(values);
    return new ChatPromptValue(resultMessages);
  }
};
var HumanMessagePromptTemplate = class extends BaseMessageStringPromptTemplate {
  async format(values) {
    return new HumanChatMessage(await this.prompt.format(values));
  }
  constructor(prompt) {
    super(prompt);
  }
  static fromTemplate(template) {
    return new this(PromptTemplate.fromTemplate(template));
  }
};
var SystemMessagePromptTemplate = class extends BaseMessageStringPromptTemplate {
  async format(values) {
    return new SystemChatMessage(await this.prompt.format(values));
  }
  constructor(prompt) {
    super(prompt);
  }
  static fromTemplate(template) {
    return new this(PromptTemplate.fromTemplate(template));
  }
};
var ChatPromptTemplate = class extends BaseChatPromptTemplate {
  constructor(input) {
    super(input);
    Object.defineProperty(this, "promptMessages", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "validateTemplate", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: true
    });
    Object.assign(this, input);
    if (this.validateTemplate) {
      const inputVariablesMessages = /* @__PURE__ */ new Set();
      for (const promptMessage of this.promptMessages) {
        for (const inputVariable of promptMessage.inputVariables) {
          inputVariablesMessages.add(inputVariable);
        }
      }
      const inputVariablesInstance = new Set(this.partialVariables ? this.inputVariables.concat(Object.keys(this.partialVariables)) : this.inputVariables);
      const difference = new Set([...inputVariablesInstance].filter((x) => !inputVariablesMessages.has(x)));
      if (difference.size > 0) {
        throw new Error(`Input variables \`${[
          ...difference
        ]}\` are not used in any of the prompt messages.`);
      }
      const otherDifference = new Set([...inputVariablesMessages].filter((x) => !inputVariablesInstance.has(x)));
      if (otherDifference.size > 0) {
        throw new Error(`Input variables \`${[
          ...otherDifference
        ]}\` are used in prompt messages but not in the prompt template.`);
      }
    }
  }
  _getPromptType() {
    return "chat";
  }
  async formatMessages(values) {
    const allValues = await this.mergePartialAndUserVariables(values);
    let resultMessages = [];
    for (const promptMessage of this.promptMessages) {
      const inputValues = promptMessage.inputVariables.reduce((acc, inputVariable) => {
        if (!(inputVariable in allValues)) {
          throw new Error(`Missing value for input variable \`${inputVariable}\``);
        }
        acc[inputVariable] = allValues[inputVariable];
        return acc;
      }, {});
      const message = await promptMessage.formatMessages(inputValues);
      resultMessages = resultMessages.concat(message);
    }
    return resultMessages;
  }
  serialize() {
    if (this.outputParser !== void 0) {
      throw new Error("ChatPromptTemplate cannot be serialized if outputParser is set");
    }
    return {
      input_variables: this.inputVariables,
      prompt_messages: this.promptMessages.map((m) => m.serialize())
    };
  }
  async partial(values) {
    const promptDict = { ...this };
    promptDict.inputVariables = this.inputVariables.filter((iv) => !(iv in values));
    promptDict.partialVariables = {
      ...this.partialVariables ?? {},
      ...values
    };
    return new ChatPromptTemplate(promptDict);
  }
  static fromPromptMessages(promptMessages) {
    const flattenedMessages = promptMessages.reduce((acc, promptMessage) => acc.concat(
      // eslint-disable-next-line no-instanceof/no-instanceof
      promptMessage instanceof ChatPromptTemplate ? promptMessage.promptMessages : [promptMessage]
    ), []);
    const flattenedPartialVariables = promptMessages.reduce((acc, promptMessage) => (
      // eslint-disable-next-line no-instanceof/no-instanceof
      promptMessage instanceof ChatPromptTemplate ? Object.assign(acc, promptMessage.partialVariables) : acc
    ), /* @__PURE__ */ Object.create(null));
    const inputVariables = /* @__PURE__ */ new Set();
    for (const promptMessage of flattenedMessages) {
      for (const inputVariable of promptMessage.inputVariables) {
        if (inputVariable in flattenedPartialVariables) {
          continue;
        }
        inputVariables.add(inputVariable);
      }
    }
    return new ChatPromptTemplate({
      inputVariables: [...inputVariables],
      promptMessages: flattenedMessages,
      partialVariables: flattenedPartialVariables
    });
  }
};

// node_modules/.pnpm/registry.npmmirror.com+langchain@0.0.81_axios@1.3.3_cheerio@1.0.0-rc.12/node_modules/langchain/dist/prompts/selectors/conditional.js
var BasePromptSelector = class {
  async getPromptAsync(llm, options) {
    const prompt = this.getPrompt(llm);
    return prompt.partial(options?.partialVariables ?? {});
  }
};
var ConditionalPromptSelector = class extends BasePromptSelector {
  constructor(default_prompt, conditionals = []) {
    super();
    Object.defineProperty(this, "defaultPrompt", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "conditionals", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.defaultPrompt = default_prompt;
    this.conditionals = conditionals;
  }
  getPrompt(llm) {
    for (const [condition, prompt] of this.conditionals) {
      if (condition(llm)) {
        return prompt;
      }
    }
    return this.defaultPrompt;
  }
};
function isChatModel(llm) {
  return llm._modelType() === "base_chat_model";
}

// node_modules/.pnpm/registry.npmmirror.com+langchain@0.0.81_axios@1.3.3_cheerio@1.0.0-rc.12/node_modules/langchain/dist/chains/question_answering/stuff_prompts.js
var DEFAULT_QA_PROMPT = /* @__PURE__ */ new PromptTemplate({
  template: "Use the following pieces of context to answer the question at the end. If you don't know the answer, just say that you don't know, don't try to make up an answer.\n\n{context}\n\nQuestion: {question}\nHelpful Answer:",
  inputVariables: ["context", "question"]
});
var system_template = `Use the following pieces of context to answer the users question. 
If you don't know the answer, just say that you don't know, don't try to make up an answer.
----------------
{context}`;
var messages = [
  /* @__PURE__ */ SystemMessagePromptTemplate.fromTemplate(system_template),
  /* @__PURE__ */ HumanMessagePromptTemplate.fromTemplate("{question}")
];
var CHAT_PROMPT = /* @__PURE__ */ ChatPromptTemplate.fromPromptMessages(messages);
var QA_PROMPT_SELECTOR = /* @__PURE__ */ new ConditionalPromptSelector(DEFAULT_QA_PROMPT, [[isChatModel, CHAT_PROMPT]]);

// node_modules/.pnpm/registry.npmmirror.com+langchain@0.0.81_axios@1.3.3_cheerio@1.0.0-rc.12/node_modules/langchain/dist/document.js
var Document = class {
  constructor(fields) {
    Object.defineProperty(this, "pageContent", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "metadata", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.pageContent = fields.pageContent ? fields.pageContent.toString() : this.pageContent;
    this.metadata = fields.metadata ?? {};
  }
};

// node_modules/.pnpm/registry.npmmirror.com+langchain@0.0.81_axios@1.3.3_cheerio@1.0.0-rc.12/node_modules/langchain/dist/chains/question_answering/load.js
function loadQAStuffChain(llm, params = {}) {
  const { prompt = QA_PROMPT_SELECTOR.getPrompt(llm), verbose } = params;
  const llmChain = new LLMChain({ prompt, llm, verbose });
  const chain = new StuffDocumentsChain({ llmChain, verbose });
  return chain;
}

// node_modules/.pnpm/registry.npmmirror.com+langchain@0.0.81_axios@1.3.3_cheerio@1.0.0-rc.12/node_modules/langchain/dist/chains/vector_db_qa.js
var VectorDBQAChain = class extends BaseChain {
  get inputKeys() {
    return [this.inputKey];
  }
  get outputKeys() {
    return this.combineDocumentsChain.outputKeys.concat(this.returnSourceDocuments ? ["sourceDocuments"] : []);
  }
  constructor(fields) {
    super(fields);
    Object.defineProperty(this, "k", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 4
    });
    Object.defineProperty(this, "inputKey", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "query"
    });
    Object.defineProperty(this, "vectorstore", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "combineDocumentsChain", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "returnSourceDocuments", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    this.vectorstore = fields.vectorstore;
    this.combineDocumentsChain = fields.combineDocumentsChain;
    this.inputKey = fields.inputKey ?? this.inputKey;
    this.k = fields.k ?? this.k;
    this.returnSourceDocuments = fields.returnSourceDocuments ?? this.returnSourceDocuments;
  }
  /** @ignore */
  async _call(values, runManager) {
    if (!(this.inputKey in values)) {
      throw new Error(`Question key ${this.inputKey} not found.`);
    }
    const question = values[this.inputKey];
    const docs = await this.vectorstore.similaritySearch(question, this.k, values.filter);
    const inputs = { question, input_documents: docs };
    const result = await this.combineDocumentsChain.call(inputs, runManager?.getChild());
    if (this.returnSourceDocuments) {
      return {
        ...result,
        sourceDocuments: docs
      };
    }
    return result;
  }
  _chainType() {
    return "vector_db_qa";
  }
  static async deserialize(data, values) {
    if (!("vectorstore" in values)) {
      throw new Error(`Need to pass in a vectorstore to deserialize VectorDBQAChain`);
    }
    const { vectorstore } = values;
    if (!data.combine_documents_chain) {
      throw new Error(`VectorDBQAChain must have combine_documents_chain in serialized data`);
    }
    return new VectorDBQAChain({
      combineDocumentsChain: await BaseChain.deserialize(data.combine_documents_chain),
      k: data.k,
      vectorstore
    });
  }
  serialize() {
    return {
      _type: this._chainType(),
      combine_documents_chain: this.combineDocumentsChain.serialize(),
      k: this.k
    };
  }
  static fromLLM(llm, vectorstore, options) {
    const qaChain = loadQAStuffChain(llm);
    return new this({
      vectorstore,
      combineDocumentsChain: qaChain,
      ...options
    });
  }
};

export {
  Document,
  VectorDBQAChain
};
