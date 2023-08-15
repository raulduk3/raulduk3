import {
  Button_default,
  Modal_default,
  Modal_exports,
  Paper_default
} from "./E4WU3AZH.js";
import {
  useTranslation
} from "./3G6AO2FI.js";
import {
  Stack_default,
  Typography_default,
  require_jsx_runtime
} from "./ZCNVHGRQ.js";
import {
  getCacheUserConfig
} from "./X66UQCDQ.js";
import {
  require_browser_polyfill
} from "./QIGS6TBV.js";
import {
  __toESM
} from "./ERZ5UWI7.js";

// src/util/promptManager.ts
var import_webextension_polyfill = __toESM(require_browser_polyfill());
var SAVED_PROMPTS_KEY = "saved_prompts";
var SAVED_PROMPTS_MOVED_KEY = "saved_prompts_moved_to_local";
var DEFAULT_PROMPT = `I will give you a question or an instruction. Your objective is to answer my question or fulfill my instruction.

My question or instruction is: {query}

For your reference, today's date is {current_date}.

It's possible that the question or instruction, or just a portion of it, requires relevant information from the internet to give a satisfactory answer or complete the task. It's possible that the question or instruction, or just a portion of it, requires relevant information from the internet to give a satisfactory answer or complete the task. I'm providing you with the necessary information already obtained from the internet below. This sets the context for addressing the question or fulfilling the instruction, so you don't need to access the internet to answer my question or fulfill my instruction. Write a comprehensive reply to the given question or instruction using the information provided below in the best way you can. Ensure to cite results using [[NUMBER](URL)] notation after the reference. If the provided information from the internet refers to multiple subjects with the same name, write separate answers for each subject.

A strict requirement for you is that if the below information I provide does not contain the information you need to address the question or fulfill the instruction, just respond 'The search results do not contain the necessary content. Please try again with different query and/or search options (e.g., number of search results, search engine, etc.).'

Now, write a comprehensive reply to the given question or instruction with this information:
"""
{web_results}
"""`;
var promptContainsWebResults = async () => {
  const currentPrompt = await getCurrentPrompt();
  return currentPrompt.text.includes("{web_results}");
};
var getDefaultPrompt = () => {
  return {
    name: "Default prompt",
    text: DEFAULT_PROMPT,
    uuid: "default"
  };
};
var getCurrentPrompt = async () => {
  const userConfig = await getCacheUserConfig();
  const currentPromptUuid = userConfig.promptUUID;
  const savedPrompts = await getSavedPrompts();
  return savedPrompts.find((i) => i.uuid === currentPromptUuid) || getDefaultPrompt();
};
var getSavedPrompts = async (addDefaults = true) => {
  const {
    [SAVED_PROMPTS_KEY]: localPrompts,
    [SAVED_PROMPTS_MOVED_KEY]: promptsMoved
  } = await import_webextension_polyfill.default.storage.local.get({
    [SAVED_PROMPTS_KEY]: [],
    [SAVED_PROMPTS_MOVED_KEY]: false
  });
  let savedPrompts = localPrompts;
  if (!promptsMoved) {
    const syncStorage = await import_webextension_polyfill.default.storage.sync.get({
      [SAVED_PROMPTS_KEY]: []
    });
    const syncPrompts = syncStorage?.[SAVED_PROMPTS_KEY] ?? [];
    savedPrompts = localPrompts.reduce((prompts, prompt) => {
      if (!prompts.some(({ uuid }) => uuid === prompt.uuid))
        prompts.push(prompt);
      return prompts;
    }, syncPrompts);
    await import_webextension_polyfill.default.storage.local.set({
      [SAVED_PROMPTS_KEY]: savedPrompts,
      [SAVED_PROMPTS_MOVED_KEY]: true
    });
    await import_webextension_polyfill.default.storage.sync.set({ [SAVED_PROMPTS_KEY]: [] });
  }
  return addDefaults ? addDefaultPrompts(savedPrompts) : savedPrompts;
};
function addDefaultPrompts(prompts) {
  addPrompt(prompts, getDefaultPrompt());
  return prompts;
  function addPrompt(prompts2, prompt) {
    const index = prompts2.findIndex((i) => i.uuid === prompt.uuid);
    if (index >= 0) {
      prompts2[index] = prompt;
    } else {
      prompts2.unshift(prompt);
    }
  }
}
var savePrompt = async (prompt) => {
  const savedPrompts = await getSavedPrompts(false);
  const index = savedPrompts.findIndex((i) => i.uuid === prompt.uuid);
  if (index >= 0) {
    savedPrompts[index] = prompt;
  } else {
    savedPrompts.push(prompt);
  }
  await import_webextension_polyfill.default.storage.local.set({ [SAVED_PROMPTS_KEY]: savedPrompts });
};
var deletePrompt = async (prompt) => {
  let savedPrompts = await getSavedPrompts();
  savedPrompts = savedPrompts.filter((i) => i.uuid !== prompt.uuid);
  await import_webextension_polyfill.default.storage.local.set({ [SAVED_PROMPTS_KEY]: savedPrompts });
};

// src/components/CustomConfirm.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime());
var CustomConfirm = ({
  open,
  confirmText,
  confirmButtonText,
  cancelButtonText,
  onClose,
  onConfirm,
  children
}) => {
  const { t } = useTranslation(["settings", "common"]);
  const handleConfirm = () => {
    onConfirm && onConfirm();
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal_default, { open, onClose, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    Paper_default,
    {
      sx: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 360,
        bgcolor: "background.paper",
        boxShadow: " 0px 4px 16px rgba(0, 0, 0, 0.08);",
        p: 2
      },
      children: [
        children ? children : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Typography_default, { children: confirmText }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stack_default, { direction: "row-reverse", gap: 1, mt: 2, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button_default, { variant: "contained", onClick: onClose, children: cancelButtonText ?? t("common:cancel") }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            Button_default,
            {
              variant: "contained",
              sx: {
                bgcolor: (t2) => t2.palette.mode === "dark" ? "#4f4f4f" : "#f5f5f5",
                color: (t2) => t2.palette.mode === "dark" ? "#f5f5f5" : "#626262",
                ":hover": {
                  bgcolor: "#666",
                  color: "#fff"
                }
              },
              onClick: handleConfirm,
              children: confirmButtonText ?? t("common:confirm")
            }
          )
        ] })
      ]
    }
  ) });
};
var CustomConfirm_default = CustomConfirm;

export {
  promptContainsWebResults,
  getDefaultPrompt,
  getCurrentPrompt,
  getSavedPrompts,
  savePrompt,
  deletePrompt,
  CustomConfirm_default
};
