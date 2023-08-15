import {
  require_dayjs_min
} from "./JUS65PLZ.js";
import {
  defaults_default
} from "./VIN7E7C7.js";
import {
  AI_PROVIDER_MAP,
  SYNC_USER_CONFIG_STORE_EVENT,
  require_browser_polyfill
} from "./QIGS6TBV.js";
import {
  __toESM
} from "./ERZ5UWI7.js";

// src/i18n/utils/index.ts
var import_webextension_polyfill = __toESM(require_browser_polyfill());

// src/i18n/types/index.ts
var LANGUAGE_CODE_MAP = {
  am: { label: "\u12A0\u121B\u122D\u129B", en_label: "Amharic" },
  ar: { label: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629", en_label: "Arabic" },
  bg: { label: "\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438", en_label: "Bulgarian" },
  bn: { label: "\u09AC\u09BE\u0982\u09B2\u09BE", en_label: "Bengali" },
  ca: { label: "Catal\xE0", en_label: "Catalan" },
  cs: { label: "\u010Ce\u0161tina", en_label: "Czech" },
  da: { label: "Dansk", en_label: "Danish" },
  de: { label: "Deutsch", en_label: "German" },
  el: { label: "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC", en_label: "Greek" },
  en: { label: "English", en_label: "English" },
  en_GB: { label: "English (UK)", en_label: "English (UK)" },
  en_US: { label: "English (US)", en_label: "English (US)" },
  es: { label: "Espa\xF1ol", en_label: "Spanish" },
  es_419: {
    label: "Espa\xF1ol (Latinoam\xE9rica)",
    en_label: "Spanish (Latin America)"
  },
  et: { label: "Eesti", en_label: "Estonian" },
  fa: { label: "\u0641\u0627\u0631\u0633\u06CC", en_label: "Persian" },
  fi: { label: "Suomi", en_label: "Finnish" },
  fil: { label: "Filipino", en_label: "Filipino" },
  fr: { label: "Fran\xE7ais", en_label: "French" },
  gu: { label: "\u0A97\u0AC1\u0A9C\u0AB0\u0ABE\u0AA4\u0AC0", en_label: "Gujarati" },
  he: { label: "\u05E2\u05D1\u05E8\u05D9\u05EA", en_label: "Hebrew" },
  he_IL: { label: "\u05E2\u05D1\u05E8\u05D9\u05EA (\u05D9\u05E9\u05E8\u05D0\u05DC)", en_label: "Hebrew (Israel)" },
  hi: { label: "\u0939\u093F\u0928\u094D\u0926\u0940", en_label: "Hindi" },
  hr: { label: "Hrvatski", en_label: "Croatian" },
  hu: { label: "Magyar", en_label: "Hungarian" },
  in: { label: "Bahasa Indonesia", en_label: "Indonesian" },
  id: { label: "Indonesia", en_label: "Indonesian" },
  it: { label: "Italiano", en_label: "Italian" },
  ja: { label: "\u65E5\u672C\u8A9E", en_label: "Japanese" },
  kn: { label: "\u0C95\u0CA8\u0CCD\u0CA8\u0CA1", en_label: "Kannada" },
  ko: { label: "\uD55C\uAD6D\uC5B4", en_label: "Korean" },
  lt: { label: "Lietuvi\u0173", en_label: "Lithuanian" },
  lv: { label: "Latvie\u0161u", en_label: "Latvian" },
  ml: { label: "\u0D2E\u0D32\u0D2F\u0D3E\u0D33\u0D02", en_label: "Malayalam" },
  mr: { label: "\u092E\u0930\u093E\u0920\u0940", en_label: "Marathi" },
  ms: { label: "Melayu", en_label: "Malay" },
  nl: { label: "Nederlands", en_label: "Dutch" },
  no: { label: "Norsk", en_label: "Norwegian" },
  pl: { label: "Polski", en_label: "Polish" },
  pt_BR: { label: "Portugu\xEAs (Brasil)", en_label: "Portuguese (Brazil)" },
  pt_PT: { label: "Portugu\xEAs (Portugal)", en_label: "Portuguese (Portugal)" },
  ro: { label: "Rom\xE2n\u0103", en_label: "Romanian" },
  ru: { label: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439", en_label: "Russian" },
  sk: { label: "Sloven\u010Dina", en_label: "Slovak" },
  sl: { label: "Sloven\u0161\u010Dina", en_label: "Slovenian" },
  sr: { label: "\u0421\u0440\u043F\u0441\u043A\u0438", en_label: "Serbian" },
  sv: { label: "Svenska", en_label: "Swedish" },
  sw: { label: "Kiswahili", en_label: "Swahili" },
  ta: { label: "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD", en_label: "Tamil" },
  te: { label: "\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41", en_label: "Telugu" },
  th: { label: "\u0E44\u0E17\u0E22", en_label: "Thai" },
  tr: { label: "T\xFCrk\xE7e", en_label: "Turkish" },
  ua: { label: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430", en_label: "Ukrainian" },
  uk: { label: "\u0627\u0631\u062F\u0648", en_label: "Urdu" },
  vi: { label: "Ti\u1EBFng Vi\u1EC7t", en_label: "Vietnamese" },
  zh_CN: { label: "\u7B80\u4F53\u4E2D\u6587", en_label: "SimplifiedChinese" },
  zh_TW: { label: "\u7E41\u4F53\u4E2D\u6587", en_label: "TraditionalChinese" }
};

// src/i18n/utils/index.ts
var getLanguagesEngWord = (lang) => {
  return LANGUAGE_CODE_MAP[lang]?.en_label;
};
var getSystemLanguage = () => {
  return import_webextension_polyfill.default.i18n.getUILanguage().replace("-", "_");
};
var languageJsonMap = {};
var defaultEnLanguageJson = {};
var initLanguageJson = async (lang) => {
  try {
    const response = await fetch(
      import_webextension_polyfill.default.runtime.getURL(
        `i18n/locales/${lang === "auto" ? getSystemLanguage() : lang}/index.json`
      )
    );
    languageJsonMap = await response.json();
    const enResponse = await fetch(
      import_webextension_polyfill.default.runtime.getURL(`i18n/locales/en/index.json`)
    );
    defaultEnLanguageJson = await enResponse.json();
  } catch (error) {
    languageJsonMap = {};
  }
};
var getTranslate = (namespace, key) => {
  return languageJsonMap?.[namespace]?.[key] || defaultEnLanguageJson[namespace][key];
};

// src/background/src/chat/BardChat/types.ts
var BARD_MODELS = [
  {
    title: "PaLM 2",
    titleTag: "",
    value: "PaLM 2",
    // 因为Google并没有官方说明
    maxTokens: -1,
    tags: [],
    descriptions: [
      {
        label: "Description",
        value: "The most advanced model by Google. Powers Bard, PaLM API, MakerSuite, and various Workspace features at Google."
      },
      {
        label: "What it can do",
        value: "Reasoning, multilingual translation, coding, and more."
      }
    ],
    uploadFileConfig: {
      maxFileSize: 25 * 1024 * 1024,
      // 25MB
      accept: ".jpg,.jpeg,.png,.webp",
      acceptTooltip: "Upload file JEPEG, PNG, WEBP",
      maxCount: 1
    }
  }
];

// src/util/dataHelper/numberHelper.ts
var numberWithCommas = (number, digits = 2) => {
  return Number(number).toFixed(digits).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// src/background/src/chat/BingChat/bing/types.ts
var import_dayjs = __toESM(require_dayjs_min());
var BING_MODELS = [
  {
    title: "gpt-4",
    titleTag: "",
    value: "gpt-4",
    maxTokens: 8192,
    tags: [],
    descriptions: [
      {
        label: "Max tokens",
        value: `${numberWithCommas(8192, 0)} tokens`
      },
      {
        label: "Description",
        value: `More capable than any GPT-3.5 model, able to do more complex tasks, and optimized for chat. Will be updated with OpenAI's latest model iteration 2 weeks after it is released.`
      },
      {
        label: "Training date",
        value: `Up to ${(0, import_dayjs.default)("2021-09-01").format("MMM YYYY")}`
      }
    ]
    // TODO - bing的文件上传需要校验origin和referrer，需要新的chrome extension permission, 目前搁置
    // uploadFileConfig: {
    //   accept: 'image/gif, image/jpeg, image/png, image/webp',
    //   acceptTooltip: 'Add an image',
    //   maxFileSize: 5 * 1024 * 1024,
    //   maxCount: 1,
    // },
  }
];

// src/background/src/chat/ClaudeChat/claude/types.ts
var CLAUDE_MODELS = [
  {
    title: "claude-2-100k",
    titleTag: "",
    value: "claude-2-100k",
    maxTokens: 100 * 1e3,
    tags: [],
    descriptions: [
      {
        label: "Max tokens",
        value: `${numberWithCommas(100 * 1e3, 0)} tokens`
      },
      {
        label: "Description",
        value: "Superior performance on tasks that require complex reasoning. Claude 2 is Anthropic's best-in-class offering."
      }
    ],
    uploadFileConfig: {
      accept: ".pdf,.doc,.docx,.rtf,.epub,.odt,.odp,.pptx,.txt,.py,.ipynb,.js,.jsx,.html,.css,.java,.cs,.php,.c,.cpp,.cxx,.h,.hpp,.rs,.R,.Rmd,.swift,.go,.rb,.kt,.kts,.ts,.tsx,.m,.scala,.rs,.dart,.lua,.pl,.pm,.t,.sh,.bash,.zsh,.csv,.log,.ini,.config,.json,.yaml,.yml,.toml,.lua,.sql,.bat,.md,.coffee",
      acceptTooltip: "Add files (5 max, 10MB each). Accepts pdf, txt, csv, etc.",
      maxFileSize: 10 * 1024 * 1024,
      maxCount: 5
    }
  }
];

// src/util/userConfig.ts
var import_webextension_polyfill2 = __toESM(require_browser_polyfill());
var defaultUserConfig = {
  loaded: false,
  // 系统配置语言
  language: getSystemLanguage(),
  // chatgpt web access 功能相关
  numWebResults: 3,
  webAccess: true,
  region: "wt-wt",
  timePeriod: "any",
  aiResponseLanguage: "auto",
  promptUUID: "default",
  searchEngine: "yahoo",
  trimLongText: false,
  summarizeType: "NO_SUMMARIZE",
  // one-click prompt 开关
  promptLibrary: false,
  // theme
  colorSchema: "auto",
  // ai provider
  conversationId: "",
  currentProvider: AI_PROVIDER_MAP.OPENAI,
  currentModel: "",
  thirdProviderSettings: {
    [AI_PROVIDER_MAP.BING]: {
      conversationStyle: "balanced" /* Balanced */,
      model: BING_MODELS[0].value
    },
    [AI_PROVIDER_MAP.CLAUDE]: {
      model: CLAUDE_MODELS[0].value
    },
    [AI_PROVIDER_MAP.BARD]: {
      model: BARD_MODELS[0].value
    },
    [AI_PROVIDER_MAP.OPENAI]: {
      model: "text-davinci-002-render-sha"
    }
  },
  // ai for search
  searchWithAIEnabled: true,
  triggerMode: "always"
};
async function getCacheUserConfig() {
  const config = await import_webextension_polyfill2.default.storage.sync.get(defaultUserConfig);
  return defaults_default(config, defaultUserConfig);
}
async function updateCacheUserConfig(config) {
  await import_webextension_polyfill2.default.storage.sync.set(config);
}
async function setCacheUserConfig(settingsOrUpdateFunction) {
  try {
    if (settingsOrUpdateFunction instanceof Function) {
      const oldSettings = await getCacheUserConfig();
      await import_webextension_polyfill2.default.storage.sync.set(settingsOrUpdateFunction(oldSettings));
    } else {
      await updateCacheUserConfig(settingsOrUpdateFunction);
    }
    return true;
  } catch (e) {
    return false;
  }
}
function syncUserConfigStore() {
  window.dispatchEvent(new CustomEvent(SYNC_USER_CONFIG_STORE_EVENT, {}));
}

export {
  LANGUAGE_CODE_MAP,
  getLanguagesEngWord,
  initLanguageJson,
  getTranslate,
  defaultUserConfig,
  getCacheUserConfig,
  updateCacheUserConfig,
  setCacheUserConfig,
  syncUserConfigStore
};
