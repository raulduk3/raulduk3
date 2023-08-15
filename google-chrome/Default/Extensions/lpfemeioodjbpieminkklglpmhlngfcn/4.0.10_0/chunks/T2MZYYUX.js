import {
  BaseLangChain,
  CallbackManager
} from "./V572PYUS.js";
import {
  RUN_KEY
} from "./5AOQSJ7B.js";

// node_modules/.pnpm/registry.npmmirror.com+langchain@0.0.81_axios@1.3.3_cheerio@1.0.0-rc.12/node_modules/langchain/dist/chains/base.js
var BaseChain = class extends BaseLangChain {
  constructor(fields, verbose, callbacks) {
    if (arguments.length === 1 && typeof fields === "object" && !("saveContext" in fields)) {
      const { memory, callbackManager, ...rest } = fields;
      super({ ...rest, callbacks: callbackManager ?? rest.callbacks });
      this.memory = memory;
    } else {
      super({ verbose, callbacks });
      this.memory = fields;
    }
  }
  /**
   * Return a json-like object representing this chain.
   */
  serialize() {
    throw new Error("Method not implemented.");
  }
  async run(input, callbacks) {
    const isKeylessInput = this.inputKeys.length <= 1;
    if (!isKeylessInput) {
      throw new Error(`Chain ${this._chainType()} expects multiple inputs, cannot use 'run' `);
    }
    const values = this.inputKeys.length ? { [this.inputKeys[0]]: input } : {};
    const returnValues = await this.call(values, callbacks);
    const keys = Object.keys(returnValues);
    if (keys.length === 1) {
      return returnValues[keys[0]];
    }
    throw new Error("return values have multiple keys, `run` only supported when one key currently");
  }
  /**
   * Run the core logic of this chain and add to output if desired.
   *
   * Wraps _call and handles memory.
   */
  async call(values, callbacks) {
    const fullValues = { ...values };
    if (!(this.memory == null)) {
      const newValues = await this.memory.loadMemoryVariables(values);
      for (const [key, value] of Object.entries(newValues)) {
        fullValues[key] = value;
      }
    }
    const callbackManager_ = await CallbackManager.configure(callbacks, this.callbacks, { verbose: this.verbose });
    const runManager = await callbackManager_?.handleChainStart({ name: this._chainType() }, fullValues);
    let outputValues;
    try {
      outputValues = await this._call(fullValues, runManager);
    } catch (e) {
      await runManager?.handleChainError(e);
      throw e;
    }
    if (!(this.memory == null)) {
      await this.memory.saveContext(values, outputValues);
    }
    await runManager?.handleChainEnd(outputValues);
    Object.defineProperty(outputValues, RUN_KEY, {
      value: runManager ? { runId: runManager?.runId } : void 0,
      configurable: true
    });
    return outputValues;
  }
  /**
   * Call the chain on all inputs in the list
   */
  async apply(inputs, callbacks) {
    return Promise.all(inputs.map(async (i, idx) => this.call(i, callbacks?.[idx])));
  }
  /**
   * Load a chain from a json-like object describing it.
   */
  static async deserialize(data, values = {}) {
    switch (data._type) {
      case "llm_chain": {
        const { LLMChain } = await import("./VFFICH2I.js");
        return LLMChain.deserialize(data);
      }
      case "sequential_chain": {
        const { SequentialChain } = await import("./JFTNA4FP.js");
        return SequentialChain.deserialize(data);
      }
      case "simple_sequential_chain": {
        const { SimpleSequentialChain } = await import("./JFTNA4FP.js");
        return SimpleSequentialChain.deserialize(data);
      }
      case "stuff_documents_chain": {
        const { StuffDocumentsChain } = await import("./VMCXUFKT.js");
        return StuffDocumentsChain.deserialize(data);
      }
      case "map_reduce_documents_chain": {
        const { MapReduceDocumentsChain } = await import("./VMCXUFKT.js");
        return MapReduceDocumentsChain.deserialize(data);
      }
      case "refine_documents_chain": {
        const { RefineDocumentsChain } = await import("./VMCXUFKT.js");
        return RefineDocumentsChain.deserialize(data);
      }
      case "vector_db_qa": {
        const { VectorDBQAChain } = await import("./GANHCUM5.js");
        return VectorDBQAChain.deserialize(data, values);
      }
      default:
        throw new Error(`Invalid prompt type in config: ${data._type}`);
    }
  }
};

export {
  BaseChain
};
