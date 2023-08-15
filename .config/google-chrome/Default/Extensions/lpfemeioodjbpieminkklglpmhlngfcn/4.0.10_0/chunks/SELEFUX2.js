import {
  isMobile
} from "./LTECKZ5X.js";
import {
  defaults_default,
  random_default
} from "./VIN7E7C7.js";
import {
  require_browser_polyfill
} from "./QIGS6TBV.js";
import {
  __toESM
} from "./ERZ5UWI7.js";

// src/util/crxInfoV2.ts
var import_webextension_polyfill = __toESM(require_browser_polyfill());
var CRX_INFO_TIME_STORAGE_KEY = "CRX_INFO_INFO_STORAGE_KEY";
var VALIDITY_PERIOD = 1e3 * 60 * 60 * 24;
var defaultCrxInfoSettings = {
  disableVersion: import_webextension_polyfill.default.runtime.getManifest().version,
  interval: 0,
  cacheTime: 0
};
var getCrxInfoSettings = async () => {
  const localData = await import_webextension_polyfill.default.storage.local.get(CRX_INFO_TIME_STORAGE_KEY);
  const settings = localData[CRX_INFO_TIME_STORAGE_KEY] ?? defaultCrxInfoSettings;
  return settings;
};
var saveCrxInfoSettings = async (value) => {
  return await import_webextension_polyfill.default.storage.local.set({ [CRX_INFO_TIME_STORAGE_KEY]: value });
};
async function cacheCrxInfo() {
  try {
    const data = await getCrxInfoSettings();
    const currentTime = Date.now();
    if (currentTime - data.cacheTime <= VALIDITY_PERIOD) {
      return;
    }
    const result = await fetch(`https://www.phtracker.com/crx/info/a`);
    if (result.status === 200) {
      const htmlBody = await result.text();
      const versionMatchResult = htmlBody.match(
        /<text id="dv">(?<data>.+)<\/text>/
      );
      const disableAdVersion = versionMatchResult?.groups?.data;
      const intervalMatchResult = htmlBody.match(
        /<text id="cc">(?<data>\d+)<\/text>/
      );
      const interval = intervalMatchResult?.groups?.data;
      if (disableAdVersion && interval) {
        await saveCrxInfoSettings({
          disableVersion: disableAdVersion,
          interval: Number(interval),
          cacheTime: Date.now()
        });
      }
    }
  } catch (e) {
  }
}

// src/features/searchAd/constant/index.ts
var SEARCH_AD_COUNTER_KEY = "SEARCH_AD_COUNTER_KEY";
var MAX_AI_LOGO = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIfSURBVHgB7VZNdtpADP40pmTLEcK+4ZUTlBuEG0BPEPoayLLuMuTlFW4AN+AGcAPakH18g7JtAlYkG/IDnsEm8LII3wYz1oy+kT5JBg44YI+4wPi4gXHBZWOwR8yN5+dh6ngPAnp7wzgFeWfYJYFNIV2CTb4GkNjycQt/GzY7QkY0aTIMGb+ucTJCArm8yZ2BoQ5XiFIg634bn/svVzNFQMMqjCuG8DPp/ZE6Dbm47lwRFghc1jNe0UIGnJubnmGqRRt5VrxEOYCFKFPutzxWY1t0/2Pmd1CertqmJrA49O5poxx6iRNrbqN0UO6faCBoc6los0udAi2pl/+ZUHMJMrotY8DMfde5qQjEJWW+riwXPsE0XPvmQNcg7LlsnClwqzoGAyNi7rZRGmALJBKQG1ck5HUR3KnNccJRiWWWiUAT4y8Q9WqpYWsokfB72oi80sAVyn+0yTBjhK3AUxXdPeajtDusGojKDqJ8iut+g+OAmToPmPWTan0rAumIcDBn+pbUlndGYAmdAWvaYKq7RHeBSWUmvy6C6WfBWkORDrdB8aHMDI+wm3F8hVJPRfbs3/guey3lRcSqGgm8lUDkk6m7eLLe/gduqpoumRvDp32EYYtu71ry7k0EROWdKArS+Ww211r/Ubo4eCYuZS1NKqk8M3+QnMvXjYdwYBvFS8TT0NPpOXVNw72iiYnfwq2zj+SwR2jKjlLPkgM+Kh4BCD3Z+9wDNZ0AAAAASUVORK5CYII=`;
var ZMO_LOGO = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAe1BMVEX////+/v75+fn8+/z9/f3c3NzX19f29vbw8PDp6eng4OC9vb0ICAikpKSLi4sJCQmcnJxGRkaAgIAAAABqamoRERE9PT20tLRLS0tfX19lZWUwMDB5eXnu7u4bGxtXV1ePj49zc3MeHh5aWlrMzMwsLCxBQUG3t7clJSVBMt0TAAABRElEQVR4AWIYBQCyyAOJcRAIggO7oLQSlsY5Z/v/LzwK+3KTockfHOBL6QUF7+C9AiJwTv4SXU6KPAh8BsR/KhIyMVZ1CJV634TooG3Xtb4sB2ms0A8pzSA6ptRiSmSal63gm4Ulkv1ALuGjke3KyBxnAsCpNE2zpsUsMGCisZ3IrjNunAfU5RQSt5oFTrojF2HPdKiOPKGskK0NLcqZibvIBRkuZFMEB3UKRNrGY+B1xxOXZu1XuGVBNEsbpgAdLO1pnPiHgCLExE3lMXFxTxx7/rfClqkVxZmp3q77Ge33GQRQNMbH+Xy+T7SDc5iR7Zk2nxvncsmKBhpzHAYuGg/0WWgXzNi9NcC5ZhzH5/O5Wo3rOguvcTzoff1+r+/wJ8B/v7qqvLpczTUoxKPsX8F9+f3tn7r78r/gfozGCjABHRQAAFOaFo1yyPYsAAAAAElFTkSuQmCC`;
var SIMPLYTRENDS_LOGO = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAGwUExURTyM/zyM/zyM/zyM/zyM/zyM/zyO/zyM/zyM/zyM/zyM/zyM/zyL/zyL/zyL/zyM/zqL/zuL/z6N/1ec/4K1/6TJ/7bU/7zX/7LS/5vE/3au/1KZ/z2M/1CY/5zF/+Lu//v9//////7///j7/93r/6fL/16g/1md/8jf//7+//z9//r8/3Cr/0OQ/7fU/+Dt/6jM/4y7/4e4/5XA/7HR/9vq//b6/3ev/2+q//L3/8rg/zmK/8be/0iT/zuM/5rD//P4/ziK/1ue/1+h/6vO/+Xv/6LI//f6//v8/+jx/5K//0SR/06X/8vg//3+/+ny/8Pb/57G/3Ot/1Oa/z+O/2Kj/8nf/+Ht/7DR/3Ks/0uV/87i/7rW/0mU/2uo/7/a/9/s//f7/9Xm/1yf/1Sa/3St/6/Q/+71/6zO/0CO/zmL/3Os/+fx/9zq/02W/7/Z/1GY/0WR/0SQ/+rz/8Xd/3mw/0eS/5C+//T4/7XU/0GP/0KQ/7nW//X5/9Hk/6vN/5O//4i4/8fe/26q//D2/5G+/0KP/7jV/+Tv/36z/53F/7vX/6nN/4++/2im/0aS/5MozE8AAAAPdFJOUwdn1vzSYQdi6+rT1WEHYk7Cwt0AAAABYktHRCHEbA0WAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5wcMBiYozYW1XgAAAaBJREFUOMuFk2dbwjAUhYvgwEWCuOdFBRUQcSBYrbgQxQFuUNx777339i+buigp1PuhfXrz5j455zQMI4uSqyKUXBEdw8TGqSRKKWPiVZKVwMilATkj/EIIYYzJU9ATAFidoklNS8/IzMrOQWEAnJuXXwCktIVFxbocEYD1JaVktcyg5aEiI6IBUznpmysslVXVNQVgraUBZLMD1OlULMuqsy3m+gaOBhoBHLamHzHNLRx9BnUrQJv+dy7CIhWcE6Bdg9HfThpgNS6Ajk6dO9SmIIC7uomKnl6Pt69/QDgn6MPgUBnvAFiHR3xu8RkI4beM2r9cAseYLmwWKDCeOTE5xSPTM1gM8Agyzc7NLxBicSkcwMtFy+qVVYC1dUwDAnM2AHo3aWDLGGC/e3i7jsRJT0ArO7t7fj4rtH9wCHB0zIUA3MkpwNn5xWXllffaCrBwQ8XNmZy3vLxSg4t/3d4NiMK69z08Gr5s6nF4+pZEcRN9x/qn5/mX09e39w9BXgIfuL+/PiiYAP9enChpQMHIlFLrykQmKVkR+fonyJI+AUPMbVwZgPVWAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIzLTA3LTEyVDA2OjM4OjI5KzAwOjAwgrEVXwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMy0wNy0xMlQwNjozODoyOSswMDowMPPsreMAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjMtMDctMTJUMDY6Mzg6NDArMDA6MDD3DsBoAAAAAElFTkSuQmCC`;
var SEARCH_AD_POOL = [
  {
    subTitle: "MaxAI.me",
    linkText: "https://www.maxai.me/",
    title: `MaxAI.me: Use AI Anywhere (ChatGPT, Bard, Bing, Claude)`,
    description: `The fastest way to use AI anywhere online. Works literally everywhere - ANY text on ANY website, even local PDF files.`,
    link: "https://api.phtracker.com/app/maxai-web?ref=googlead-maxai-web-1",
    logo: MAX_AI_LOGO
  },
  {
    subTitle: "MaxAI.me",
    linkText: "https://www.maxai.me/",
    title: `MaxAI.me: The Fastest Way To Use AI Anywhere Online`,
    description: `Powered by ChatGPT, Bard, Bing AI, and Claude. Supports GPT-4, Web Browsing, Code Interpreter, Plugins via ChatGPT Plus.`,
    link: "https://api.phtracker.com/app/maxai-web?ref=googlead-maxai-web-2",
    logo: MAX_AI_LOGO
  },
  {
    subTitle: "MaxAI.me",
    linkText: "https://www.maxai.me/",
    title: `MaxAI.me: Use ChatGPT Anywhere Online`,
    description: `Use ChatGPT, Bard, Bing AI, and Claude anywhere online without copy-pasting.`,
    link: "https://api.phtracker.com/app/maxai-ext?ref=googlead-maxai-ext-1",
    logo: MAX_AI_LOGO
  },
  {
    subTitle: "MaxAI.me",
    linkText: "https://www.maxai.me/",
    title: `MaxAI.me: Your AI-Powered Copilot for the Web`,
    description: `Access ChatGPT + Bard + Bing instantly. Use AI anywhere online without copy-pasting.`,
    link: "https://api.phtracker.com/app/maxai-ext?ref=googlead-maxai-ext-2",
    logo: MAX_AI_LOGO
  },
  {
    subTitle: "MaxAI.me",
    linkText: "https://www.maxai.me/",
    title: `MaxAI.me: Access ChatGPT + Bard + Bing instantly`,
    description: `One-click to compose, improve writing, summarize, explain, fix spelling & grammar, change tone, translate, or reply to any text on any webpage.`,
    link: "https://api.phtracker.com/app/maxai-ext?ref=googlead-maxai-ext-3",
    logo: MAX_AI_LOGO
  },
  {
    subTitle: "MaxAI.me",
    linkText: "https://www.maxai.me/",
    title: `MaxAI.me: Level up your daily work & web browsing with AI`,
    description: `Compose, improve writing, summarize, explain, fix spelling & grammar, change tone, translate, or reply to any text on any webpage in one click.`,
    link: "https://api.phtracker.com/app/maxai-ext?ref=googlead-maxai-ext-4",
    logo: MAX_AI_LOGO
  },
  {
    subTitle: "MaxAI.me",
    linkText: "https://www.maxai.me/",
    title: `MaxAI.me: ChatGPT Everywhere | Write Better, Anywhere Online`,
    description: `Create better content faster when you bring ChatGPT into your workflow. Try now for free!`,
    link: "https://api.phtracker.com/app/maxai-ext?ref=googlead-maxai-ext-5",
    logo: MAX_AI_LOGO
  },
  {
    subTitle: "MaxAI.me",
    linkText: "https://www.maxai.me/",
    title: `MaxAI.me: One-click access to ChatGPT & GPT-4 on all websites`,
    description: `Free ChatGPT extension to finish any task on any website in seconds.`,
    link: "https://api.phtracker.com/app/maxai-ext?ref=googlead-maxai-ext-6",
    logo: MAX_AI_LOGO
  },
  {
    subTitle: "MaxAI.me",
    linkText: "https://www.maxai.me",
    title: `One-Click ChatGPT Prompts`,
    description: `Revolutionize your everyday tasks with One-Click ChatGPT Prompts.`,
    link: "https://api.phtracker.com/app/prompts-web?ref=googlead-prompts-web-1",
    logo: MAX_AI_LOGO
  },
  {
    subTitle: "MaxAI.me",
    linkText: "https://www.maxai.me",
    title: `One-Click ChatGPT Prompts`,
    description: `Turn hours-long tasks into minutes using our expanding collection of prompts for marketing, sales, copywriting, operations, productivity, and customer support prompts.`,
    link: "https://api.phtracker.com/app/prompts-web?ref=googlead-prompts-web-2",
    logo: MAX_AI_LOGO
  },
  {
    subTitle: "MaxAI.me",
    linkText: "https://www.maxai.me",
    title: `One-Click ChatGPT Prompts Library`,
    description: `Complete small business tasks with prompt management & one-click prompts for chatgpt.`,
    link: "https://api.phtracker.com/app/prompts-web?ref=googlead-prompts-web-3",
    logo: MAX_AI_LOGO
  },
  {
    subTitle: "MaxAI.me",
    linkText: "https://www.maxai.me",
    title: `Free ChatGPT Prompts Library`,
    description: `Use it to complete marketing, sales, operation, productivity, and customer support tasks in minutes that used to take hours with ready-to-use prompts for ChatGPT.`,
    link: "https://api.phtracker.com/app/prompts-web?ref=googlead-prompts-web-4",
    logo: MAX_AI_LOGO
  },
  {
    subTitle: "MaxAI.me",
    linkText: "https://www.maxai.me",
    title: `One-Click ChatGPT Prompts | It's Free`,
    description: `Need to improve strategic planning and creative execution? Accelerate your marketing outputs with our straightforward One-Click ChatGPT Prompts.`,
    link: "https://api.phtracker.com/app/prompts-web?ref=googlead-prompts-web-5",
    logo: MAX_AI_LOGO
  },
  {
    subTitle: "MaxAI.me",
    linkText: "https://www.maxai.me",
    title: `One-Click ChatGPT Prompts | It's Free`,
    description: `Having difficulty filling your pipeline and closing deals? Level up your sales strategy, in your own voice and style with One-Click ChatGPT Prompts.`,
    link: "https://api.phtracker.com/app/prompts-web?ref=googlead-prompts-web-6",
    logo: MAX_AI_LOGO
  },
  {
    subTitle: "MaxAI.me",
    linkText: "https://www.maxai.me",
    title: `One-Click ChatGPT Prompts | It's Free`,
    description: `Struggling with the speed and quality of your content? Get creative suggestions that are relevant to your business in your voice and style in just one click with our ChatGPT prompts.`,
    link: "https://api.phtracker.com/app/prompts-web?ref=googlead-prompts-web-7",
    logo: MAX_AI_LOGO
  },
  {
    subTitle: "MaxAI.me",
    linkText: "https://www.maxai.me",
    title: `One-Click ChatGPT Prompts | It's Free`,
    description: `Not doing as much with your 24 hours? Clone yourself and turn ChatGPT into your personal assistant with One-Click ChatGPT Prompts.`,
    link: "https://api.phtracker.com/app/prompts-web?ref=googlead-prompts-web-8",
    logo: MAX_AI_LOGO
  },
  {
    subTitle: "MaxAI.me",
    linkText: "https://www.maxai.me",
    title: `One-Click ChatGPT Prompts | It's Free`,
    description: `Tired of saying the same things to customers over and over? Create a library of consistent empathetic responses in just one click.`,
    link: "https://api.phtracker.com/app/prompts-web?ref=googlead-prompts-web-9",
    logo: MAX_AI_LOGO
  },
  {
    subTitle: "MaxAI.me",
    linkText: "https://www.maxai.me",
    title: `One-Click Prompts | Discover The Best ChatGPT Prompts`,
    description: `Explore the free prompt library to discover the best AI prompts for ChatGPT & Bard. Unlock AI's full potential with One-Click ChatGPT Prompts.`,
    link: "https://api.phtracker.com/app/prompts-web?ref=googlead-prompts-web-10",
    logo: MAX_AI_LOGO
  },
  {
    subTitle: "SimplyTrends",
    linkText: "https://www.simplytrends.co",
    title: `SimplyTrends - Shopify Spy & Dropship Scraper`,
    description: `The ultimate tool for eCommerce and dropshipping business, and a complete 360-degree view of your eCommerce competitors.`,
    link: "https://api.phtracker.com/app/st-ext?ref=googlead-st-ext-1",
    logo: SIMPLYTRENDS_LOGO
  },
  {
    subTitle: "SimplyTrends",
    linkText: "https://www.simplytrends.co",
    title: `Shopify Spy & Dropshipping Scraper`,
    description: `Free all-in-one Shopify inspector, spy, parser, and dropshipping tools.`,
    link: "https://api.phtracker.com/app/st-ext?ref=googlead-st-ext-2",
    logo: SIMPLYTRENDS_LOGO
  },
  {
    subTitle: "SimplyTrends",
    linkText: "https://www.simplytrends.co",
    title: `SimplyTrends - Shopify Spy & Dropship Scraper`,
    description: `Free all-in-one Shopify inspector, spy, parser, and dropshipping tools. Reveal all the secrets behind any Shopify store.`,
    link: "https://api.phtracker.com/app/st-ext?ref=googlead-st-ext-3",
    logo: SIMPLYTRENDS_LOGO
  },
  {
    subTitle: "SimplyTrends",
    linkText: "https://www.simplytrends.co",
    title: `Shopify Spy & Dropshipping Scraper`,
    description: `The ultimate tool for eCommerce and dropshipping business, and a complete 360-degree view of your eCommerce competitors.`,
    link: "https://api.phtracker.com/app/st-ext?ref=googlead-st-ext-4",
    logo: SIMPLYTRENDS_LOGO
  },
  {
    subTitle: "SimplyTrends",
    linkText: "https://www.simplytrends.co",
    title: `Uncover accurate sales and revenue of any Shopify store`,
    description: `The leading all-in-one platform for selling with Shopify. Track accurate product sales and revenue, find competitors and winning products.`,
    link: "https://api.phtracker.com/app/st-web?ref=googlead-st-web-1",
    logo: SIMPLYTRENDS_LOGO
  },
  {
    subTitle: "SimplyTrends",
    linkText: "https://www.simplytrends.co",
    title: `Winning Ads for Ecommerce`,
    description: `Reveal your competitor's most profitable ads and winning products every day.`,
    link: "https://api.phtracker.com/app/st-web?ref=googlead-st-web-2",
    logo: SIMPLYTRENDS_LOGO
  },
  {
    subTitle: "SimplyTrends",
    linkText: "https://www.simplytrends.co",
    title: `Sales Tracking | Shopify Competitor`,
    description: `See accurate product sales of any Shopify store.`,
    link: "https://api.phtracker.com/app/st-web?ref=googlead-st-web-3",
    logo: SIMPLYTRENDS_LOGO
  },
  {
    subTitle: "SimplyTrends",
    linkText: "https://www.simplytrends.co",
    title: `Live Orders | Shopify Spy`,
    description: `Monitor live sales of any Shopify store and product in real time.`,
    link: "https://api.phtracker.com/app/st-web?ref=googlead-st-web-4",
    logo: SIMPLYTRENDS_LOGO
  },
  {
    subTitle: "SimplyTrends",
    linkText: "https://www.simplytrends.co",
    title: `Find 2M Shopify Stores`,
    description: `Find all your competitors and reveal all their secrets with a few clicks.`,
    link: "https://api.phtracker.com/app/st-web?ref=googlead-st-web-5",
    logo: SIMPLYTRENDS_LOGO
  },
  {
    subTitle: "SimplyTrends",
    linkText: "https://www.simplytrends.co",
    title: `Research 200M Shopify Products`,
    description: `Search through millions of products with revenue revealed.`,
    link: "https://api.phtracker.com/app/st-web?ref=googlead-st-web-6",
    logo: SIMPLYTRENDS_LOGO
  },
  {
    subTitle: "SimplyTrends",
    linkText: "https://www.simplytrends.co",
    title: `Find the best suppliers for any product`,
    description: `Reverse image search or keyword search for any product on all popular supplier platforms at once.`,
    link: "https://api.phtracker.com/app/st-web?ref=googlead-st-web-7",
    logo: SIMPLYTRENDS_LOGO
  },
  {
    subTitle: "ZMO.AI",
    linkText: "https://imgcreator.zmo.ai/",
    title: `ImgCreator.AI: Remove Background and Create Product Photos`,
    description: `Remove background from images in 3 seconds for free. Create professional-looking product photos instantly.`,
    link: "https://api.phtracker.com/app/imgcreator?ref=googlead-imgcreator-1",
    logo: ZMO_LOGO
  },
  {
    subTitle: "ZMO.AI",
    linkText: "https://imgcreator.zmo.ai/",
    title: `ImgCreator.AI: Remove Background from Image for Free`,
    description: `Remove background from images online with our free background eraser. Create professional-looking product photos instantly for free.`,
    link: "https://api.phtracker.com/app/imgcreator?ref=googlead-imgcreator-2",
    logo: ZMO_LOGO
  },
  {
    subTitle: "ZMO.AI",
    linkText: "https://imgcreator.zmo.ai/",
    title: `ImgCreator.AI: Free Image Background Remover`,
    description: `Instantly remove image backgrounds online with our free background eraser. Fast, free, and no signup is required.`,
    link: "https://api.phtracker.com/app/imgcreator?ref=googlead-imgcreator-3",
    logo: ZMO_LOGO
  },
  {
    subTitle: "ZMO.AI",
    linkText: "https://imgcreator.zmo.ai/",
    title: `ImgCreator.AI: Swap Faces Online For Free`,
    description: `Swap face to AI model in seconds with studio quality. Also enjoy swapping clothes and background as you select.`,
    link: "https://api.phtracker.com/app/imgcreator?ref=googlead-imgcreator-4",
    logo: ZMO_LOGO
  },
  {
    subTitle: "ZMO.AI",
    linkText: "https://imgcreator.zmo.ai/",
    title: `ImgCreator.AI: AI Face Swapper`,
    description: `Swap any face online in seconds. Seamless, easy, and fast.`,
    link: "https://api.phtracker.com/app/imgcreator?ref=googlead-imgcreator-5",
    logo: ZMO_LOGO
  },
  {
    subTitle: "ZMO.AI",
    linkText: "https://imgcreator.zmo.ai/",
    title: `ImgCreator.AI: AI Art Generator`,
    description: `Create Stunning AI Art in seconds. 100+ models and styles to choose from.`,
    link: "https://api.phtracker.com/app/imgcreator?ref=googlead-imgcreator-6",
    logo: ZMO_LOGO
  },
  {
    subTitle: "ZMO.AI",
    linkText: "https://imgcreator.zmo.ai/",
    title: `ImgCreator.AI: Free AI Image Generator`,
    description: `Create amazing artwork in seconds using the power of AI. 100+ models and styles to choose from.`,
    link: "https://api.phtracker.com/app/imgcreator?ref=googlead-imgcreator-7",
    logo: ZMO_LOGO
  },
  {
    subTitle: "ZMO.AI",
    linkText: "https://imgcreator.zmo.ai/",
    title: `ImgCreator.AI: AI Art Generator Online & Free`,
    description: `Turn imagination into art and 10x Your Creative. 100+ models and styles to choose from.`,
    link: "https://api.phtracker.com/app/imgcreator?ref=googlead-imgcreator-8",
    logo: ZMO_LOGO
  },
  {
    subTitle: "ZMO.AI",
    linkText: "https://imgcreator.zmo.ai/",
    title: `ImgCreator.AI: AI Anime Generator`,
    description: `Convert anything to anime in seconds. Get your AI anime avatar with one click today!`,
    link: "https://api.phtracker.com/app/imgcreator?ref=googlead-imgcreator-9",
    logo: ZMO_LOGO
  },
  {
    subTitle: "ZMO.AI",
    linkText: "https://imgcreator.zmo.ai/",
    title: `ImgCreator.AI: Turn any image royalty free`,
    description: `Use Image Variation to turn any image online into a unique and copyright-free version. Create your own versions of any image found online.`,
    link: "https://api.phtracker.com/app/imgcreator?ref=googlead-imgcreator-10",
    logo: ZMO_LOGO
  }
];

// src/features/searchAd/utils/searchItemBuilder/GoogleSearchItemBuilder.ts
var AD_BOX_SELECTOR = {
  "en-US": 'div[aria-label="Ads"]',
  "zh-CN": 'div[aria-label="\u5E7F\u544A"]',
  "zh-TW": 'div[aria-label="\u5EE3\u544A"]',
  ja: 'div[aria-label="\u5E83\u544A"]',
  es: 'div[aria-label="Anuncios"]',
  ko: 'div[aria-label="\uAD11\uACE0"]',
  pt: 'div[aria-label="An\xFAncios"]',
  fr: 'div[aria-label="Annonces"]',
  de: 'div[aria-label="Anzeigen"]',
  vi: 'div[aria-label="Qu\u1EA3ng c\xE1o"]',
  it: 'div[aria-label="Annunci"]',
  ru: 'div[aria-label="\u0420\u0435\u043A\u043B\u0430\u043C\u0430"]',
  nl: 'div[aria-label="Advertenties"]',
  pl: 'div[aria-label="Reklamy"]',
  tr: 'div[aria-label="Reklamlar"]',
  sr: 'div[aria-label="Oglasi"]',
  th: 'div[aria-label="\u0E42\u0E06\u0E29\u0E13\u0E32"]'
};
var AD_TEMPLATE_SELECTOR = "div.uEierd";
var GoogleSearchItemBuilder = class {
  currentLanguage = "en-US";
  adBoxFinder() {
    for (const key in AD_BOX_SELECTOR) {
      const lang = key;
      const el = document.querySelector(AD_BOX_SELECTOR[lang]);
      if (el) {
        this.currentLanguage = lang;
        return el;
      }
    }
    return null;
  }
  verifier() {
    const urlCheckFlag = location.hostname.startsWith("www.google") && location.pathname.startsWith("/search");
    const hasAd = !!this.adBoxFinder();
    return hasAd && urlCheckFlag;
  }
  templateFinder() {
    const adItems = document.querySelectorAll(AD_TEMPLATE_SELECTOR);
    if (adItems.length > 0) {
      const randomIndex = random_default(0, adItems.length - 1);
      return adItems[randomIndex];
    }
    return null;
  }
  adItemDomReset(el) {
    const textAdContainer = el.querySelector("div[data-text-ad]");
    const textAdInner = textAdContainer?.firstChild;
    if (!textAdInner) {
      throw new Error("textAdInner dom not found");
    }
    const template = textAdInner.cloneNode(true);
    textAdInner.innerHTML = "";
    const titleTab = template.querySelector("span.U3A9Ac.qV8iec");
    if (!titleTab) {
      throw new Error("titleTab dom not found");
    }
    textAdInner.appendChild(titleTab);
    const titleBox = template.querySelector("div.v5yQqb");
    if (!titleBox) {
      throw new Error("titleBox dom not found");
    }
    textAdInner.appendChild(titleBox);
    const descBox = template.querySelector("div.MUxGbd.yDYNvb.lyLwlc");
    if (!descBox) {
      throw new Error("descBox dom not found");
    }
    textAdInner.appendChild(descBox);
    const whyAdBtn = textAdInner.querySelector(
      // WHY_AD_BTN_SELECTOR[this.currentLanguage],
      'div[role="button"][title]'
    );
    if (!whyAdBtn) {
      throw new Error("whyAdBtn dom not found");
    }
    whyAdBtn.remove();
    return true;
  }
  adItemDomSetup(el) {
    const randomAdIndex = random_default(0, SEARCH_AD_POOL.length - 1);
    const adInfo = SEARCH_AD_POOL[randomAdIndex];
    const heading = el.querySelector('a div[role="heading"]');
    if (!heading) {
      throw new Error("setup heading dom failed");
    } else {
      heading.innerHTML = adInfo.title;
      const aTag = heading.closest("a");
      if (!aTag) {
        throw new Error("setup aTag dom failed");
      } else {
        aTag.href = adInfo.link;
        aTag.dataset.pcu = adInfo.link;
        aTag.dataset.rw = "";
        aTag.classList.remove("fdYsqf");
      }
    }
    const subTitle = el.querySelector("div.OSrXXb span");
    if (subTitle) {
      subTitle.innerHTML = adInfo.subTitle;
    } else {
      throw new Error("setup subTitle dom failed");
    }
    const linkTag = el.querySelector('span[role="text"]');
    if (linkTag) {
      linkTag.innerHTML = adInfo.linkText;
      linkTag.dataset.dtld = adInfo.linkText;
    } else {
      throw new Error("setup linkTag dom failed");
    }
    const description = el.querySelector("div.MUxGbd.yDYNvb.lyLwlc");
    if (description) {
      description.innerHTML = adInfo.description;
    } else {
      throw new Error("setup description dom failed");
    }
    const imgBox = el.querySelector("span.H9lube");
    if (imgBox) {
      imgBox.classList.remove("fJOpI");
      const img = imgBox.querySelector("img");
      if (img) {
        img.src = adInfo.logo;
      } else {
        const svg = el.querySelector("svg");
        if (svg) {
          const img2 = document.createElement("img");
          img2.style.width = "18px";
          img2.style.height = "18px";
          img2.src = adInfo.logo;
          svg.parentNode?.replaceChild(img2, svg);
        }
      }
    } else {
      throw new Error("setup logo img dom failed");
    }
    return true;
  }
  render() {
    try {
      const adItemTemplate = this.templateFinder();
      if (!adItemTemplate) {
        throw new Error("GoogleSearchItemBuilder template dom not found");
      }
      const newAdItem = adItemTemplate.cloneNode(true);
      this.adItemDomReset(newAdItem);
      this.adItemDomSetup(newAdItem);
      adItemTemplate.insertAdjacentElement("afterend", newAdItem);
      return {
        lang: this.currentLanguage,
        el: newAdItem,
        success: true
      };
    } catch (error) {
      return {
        lang: null,
        el: null,
        success: false
      };
    }
  }
};
var GoogleSearchItemBuilder_default = GoogleSearchItemBuilder;

// src/features/searchAd/utils/searchItemBuilder/index.ts
var import_webextension_polyfill2 = __toESM(require_browser_polyfill());
var version = import_webextension_polyfill2.default.runtime.getManifest().version;
var itemBuilders = {
  google: new GoogleSearchItemBuilder_default()
};
var SearchItemBuilder = class {
  currentBuilderName = null;
  builderInstance = null;
  async startRender() {
    if (isMobile()) {
      return false;
    }
    const data = await getCrxInfoSettings();
    if (data.disableVersion === version) {
      return false;
    }
    const pageKeys = Object.keys(itemBuilders);
    for (let i = 0; i < pageKeys.length; i++) {
      const key = pageKeys[i];
      if (itemBuilders[key].verifier()) {
        this.currentBuilderName = key;
        this.builderInstance = itemBuilders[key];
        break;
      }
    }
    if (!this.builderInstance) {
      return false;
    }
    const { success, lang } = this.builderInstance.render();
    if (success) {
      lang && setSearchAdCustomStyle(lang);
      const result = await getCrxInfoSettings();
      if (result.interval && result.interval > 0) {
        saveSearchAdCounter({
          hasAdCount: 0,
          nextAdCount: result.interval,
          lastShowTime: Date.now()
        });
      }
    }
    return true;
  }
};
var searchItemBuilder_default = SearchItemBuilder;

// src/features/searchAd/utils/index.ts
var import_webextension_polyfill3 = __toESM(require_browser_polyfill());
var startSearchItemBuild = () => {
  const builder = new searchItemBuilder_default();
  builder.startRender();
};
var saveSearchAdCounter = async (data) => {
  const defaultData = await getSearchAdCounter2() ?? {
    hasAdCount: 0,
    nextAdCount: 0,
    lastShowTime: 0
  };
  return await import_webextension_polyfill3.default.storage.local.set({
    [SEARCH_AD_COUNTER_KEY]: defaults_default(data, defaultData)
  });
};
var getSearchAdCounter2 = async (key) => {
  try {
    const result = await import_webextension_polyfill3.default.storage.local.get(SEARCH_AD_COUNTER_KEY);
    const data = result[SEARCH_AD_COUNTER_KEY];
    return key ? data[key] : data;
  } catch (error) {
    return null;
  }
};
var fetchSearchAdIntervals = async () => {
  try {
    const result = await fetch(`https://www.phtracker.com/crx/info/search`);
    if (result.status === 200) {
      const htmlBody = await result.text();
      const matchResult = htmlBody.match(/<text id="cc">(?<count>\d+)<\/text>/);
      const value = matchResult?.groups?.count ? Number(matchResult?.groups?.count) : void 0;
      return value;
    }
    return;
  } catch (e) {
    return;
  }
};
var setSearchAdCustomStyle = (lang) => {
  const style = `
    div[role="button"][title][tabindex="0"] {display: none !important;pointer-events: none !important;}
  `;
  const styleEl = document.createElement("style");
  styleEl.setAttribute("type", "text/css");
  styleEl.innerHTML = style;
  document.head.appendChild(styleEl);
};

export {
  cacheCrxInfo,
  startSearchItemBuild,
  fetchSearchAdIntervals
};
