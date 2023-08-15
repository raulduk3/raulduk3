import {
  createClientMessageListener
} from "./2TR75BHR.js";
import {
  getCacheUserConfig
} from "./X66UQCDQ.js";
import {
  ContentScriptConnectionV2
} from "./XK6NXF5B.js";

// src/background/src/chat/util.ts
var askChatGPTQuestion = async (question, options, {
  onMessage,
  onError
}) => {
  return new Promise((resolve) => {
    const taskId = question.messageId;
    const destroyListener = createClientMessageListener(async (event, data) => {
      if (event === "Client_askChatGPTQuestionResponse" && data.taskId === taskId) {
        if (data.error) {
          onError?.(data.error);
        } else if (data?.data?.text) {
          onMessage?.(data.data);
        }
        if (data.done) {
          resolve(true);
          destroyListener();
          return {
            success: true,
            message: "ok",
            data: {}
          };
        }
        return {
          success: true,
          message: "ok",
          data: {}
        };
      }
      return void 0;
    });
    const port = new ContentScriptConnectionV2({
      runtime: "client"
    });
    port.postMessage({
      event: "Client_askChatGPTQuestion",
      data: {
        taskId,
        question,
        options
      }
    });
  });
};
var getThirdProviderSettings = async (thirdProviderKey) => {
  try {
    const settings = await getCacheUserConfig();
    const thirdProviderSetting = settings.thirdProviderSettings;
    if (thirdProviderSetting && thirdProviderSetting[thirdProviderKey]) {
      return thirdProviderSetting[thirdProviderKey];
    }
    return void 0;
  } catch (e) {
    return void 0;
  }
};

export {
  askChatGPTQuestion,
  getThirdProviderSettings
};
