import {
  isProduction
} from "./QIGS6TBV.js";

// src/util/Log.ts
var Log = class {
  module;
  constructor(modules) {
    this.module = modules.split("/").map((module) => `[${module}]`).join("");
  }
  info(...args) {
    if (isProduction)
      return;
    const stack = this.getCallStack();
  }
  error(...args) {
    if (isProduction)
      return;
    const stack = this.getCallStack();
  }
  warn(...args) {
    if (isProduction)
      return;
    const stack = this.getCallStack();
  }
  debug(...args) {
    if (isProduction)
      return;
    const stack = this.getCallStack();
  }
  getCallStack() {
    const stack = new Error().stack;
    if (stack) {
      const stackText = stack.split("\n").slice(2).join("\n");
      const prevStack = stackText?.split(/\n/)?.[1];
      return prevStack;
    }
    return "";
  }
};
var Log_default = Log;

export {
  Log_default
};
