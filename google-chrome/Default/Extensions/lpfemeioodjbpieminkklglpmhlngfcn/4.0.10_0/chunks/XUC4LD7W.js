import {
  BaseStringPromptTemplate
} from "./FSM3Q7MN.js";

// node_modules/.pnpm/registry.npmmirror.com+langchain@0.0.81_axios@1.3.3_cheerio@1.0.0-rc.12/node_modules/langchain/dist/prompts/template.js
var parseFString = (template) => {
  const chars = template.split("");
  const nodes = [];
  const nextBracket = (bracket, start) => {
    for (let i2 = start; i2 < chars.length; i2 += 1) {
      if (bracket.includes(chars[i2])) {
        return i2;
      }
    }
    return -1;
  };
  let i = 0;
  while (i < chars.length) {
    if (chars[i] === "{" && i + 1 < chars.length && chars[i + 1] === "{") {
      nodes.push({ type: "literal", text: "{" });
      i += 2;
    } else if (chars[i] === "}" && i + 1 < chars.length && chars[i + 1] === "}") {
      nodes.push({ type: "literal", text: "}" });
      i += 2;
    } else if (chars[i] === "{") {
      const j = nextBracket("}", i);
      if (j < 0) {
        throw new Error("Unclosed '{' in template.");
      }
      nodes.push({
        type: "variable",
        name: chars.slice(i + 1, j).join("")
      });
      i = j + 1;
    } else if (chars[i] === "}") {
      throw new Error("Single '}' in template.");
    } else {
      const next = nextBracket("{}", i);
      const text = (next < 0 ? chars.slice(i) : chars.slice(i, next)).join("");
      nodes.push({ type: "literal", text });
      i = next < 0 ? chars.length : next;
    }
  }
  return nodes;
};
var interpolateFString = (template, values) => parseFString(template).reduce((res, node) => {
  if (node.type === "variable") {
    if (node.name in values) {
      return res + values[node.name];
    }
    throw new Error(`Missing value for input ${node.name}`);
  }
  return res + node.text;
}, "");
var DEFAULT_FORMATTER_MAPPING = {
  "f-string": interpolateFString,
  jinja2: (_, __) => ""
};
var DEFAULT_PARSER_MAPPING = {
  "f-string": parseFString,
  jinja2: (_) => []
};
var renderTemplate = (template, templateFormat, inputValues) => DEFAULT_FORMATTER_MAPPING[templateFormat](template, inputValues);
var parseTemplate = (template, templateFormat) => DEFAULT_PARSER_MAPPING[templateFormat](template);
var checkValidTemplate = (template, templateFormat, inputVariables) => {
  if (!(templateFormat in DEFAULT_FORMATTER_MAPPING)) {
    const validFormats = Object.keys(DEFAULT_FORMATTER_MAPPING);
    throw new Error(`Invalid template format. Got \`${templateFormat}\`;
                         should be one of ${validFormats}`);
  }
  try {
    const dummyInputs = inputVariables.reduce((acc, v) => {
      acc[v] = "foo";
      return acc;
    }, {});
    renderTemplate(template, templateFormat, dummyInputs);
  } catch {
    throw new Error("Invalid prompt schema.");
  }
};

// node_modules/.pnpm/registry.npmmirror.com+langchain@0.0.81_axios@1.3.3_cheerio@1.0.0-rc.12/node_modules/langchain/dist/prompts/prompt.js
var PromptTemplate = class extends BaseStringPromptTemplate {
  constructor(input) {
    super(input);
    Object.defineProperty(this, "template", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "templateFormat", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "f-string"
    });
    Object.defineProperty(this, "validateTemplate", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: true
    });
    Object.assign(this, input);
    if (this.validateTemplate) {
      let totalInputVariables = this.inputVariables;
      if (this.partialVariables) {
        totalInputVariables = totalInputVariables.concat(Object.keys(this.partialVariables));
      }
      checkValidTemplate(this.template, this.templateFormat, totalInputVariables);
    }
  }
  _getPromptType() {
    return "prompt";
  }
  async format(values) {
    const allValues = await this.mergePartialAndUserVariables(values);
    return renderTemplate(this.template, this.templateFormat, allValues);
  }
  /**
   * Take examples in list format with prefix and suffix to create a prompt.
   *
   * Intendend to be used a a way to dynamically create a prompt from examples.
   *
   * @param examples - List of examples to use in the prompt.
   * @param suffix - String to go after the list of examples. Should generally set up the user's input.
   * @param inputVariables - A list of variable names the final prompt template will expect
   * @param exampleSeparator - The separator to use in between examples
   * @param prefix - String that should go before any examples. Generally includes examples.
   *
   * @returns The final prompt template generated.
   */
  static fromExamples(examples, suffix, inputVariables, exampleSeparator = "\n\n", prefix = "") {
    const template = [prefix, ...examples, suffix].join(exampleSeparator);
    return new PromptTemplate({
      inputVariables,
      template
    });
  }
  /**
   * Load prompt template from a template f-string
   */
  static fromTemplate(template, { templateFormat = "f-string", ...rest } = {}) {
    const names = /* @__PURE__ */ new Set();
    parseTemplate(template, templateFormat).forEach((node) => {
      if (node.type === "variable") {
        names.add(node.name);
      }
    });
    return new PromptTemplate({
      inputVariables: [...names],
      templateFormat,
      template,
      ...rest
    });
  }
  async partial(values) {
    const promptDict = { ...this };
    promptDict.inputVariables = this.inputVariables.filter((iv) => !(iv in values));
    promptDict.partialVariables = {
      ...this.partialVariables ?? {},
      ...values
    };
    return new PromptTemplate(promptDict);
  }
  serialize() {
    if (this.outputParser !== void 0) {
      throw new Error("Cannot serialize a prompt template with an output parser");
    }
    return {
      _type: this._getPromptType(),
      input_variables: this.inputVariables,
      template: this.template,
      template_format: this.templateFormat
    };
  }
  static async deserialize(data) {
    if (!data.template) {
      throw new Error("Prompt template must have a template");
    }
    const res = new PromptTemplate({
      inputVariables: data.input_variables,
      template: data.template,
      templateFormat: data.template_format
    });
    return res;
  }
};

export {
  renderTemplate,
  checkValidTemplate,
  PromptTemplate
};
