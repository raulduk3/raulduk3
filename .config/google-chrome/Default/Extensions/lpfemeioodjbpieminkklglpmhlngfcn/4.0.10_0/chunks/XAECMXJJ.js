import {
  Recoil_index_22,
  UserConfigState
} from "./WSBV3W2I.js";
import {
  setCacheUserConfig,
  syncUserConfigStore
} from "./X66UQCDQ.js";
import {
  require_react
} from "./AMCWABVH.js";
import {
  __toESM
} from "./ERZ5UWI7.js";

// src/hooks/useUserConfig.ts
var import_react = __toESM(require_react());
var useUserConfig = () => {
  const [userConfig, setUserConfigState] = Recoil_index_22(UserConfigState);
  const setUserConfig = (0, import_react.useCallback)(
    async (settingsOrUpdateFunction) => {
      if (settingsOrUpdateFunction instanceof Function) {
        setUserConfigState(settingsOrUpdateFunction);
        await setCacheUserConfig(settingsOrUpdateFunction);
      } else {
        setUserConfigState((preState) => ({
          ...preState,
          ...settingsOrUpdateFunction
        }));
        await setCacheUserConfig((oldConfig) => {
          return {
            ...oldConfig,
            ...settingsOrUpdateFunction
          };
        });
      }
      syncUserConfigStore();
    },
    []
  );
  return {
    userConfig,
    setUserConfig
  };
};

export {
  useUserConfig
};
