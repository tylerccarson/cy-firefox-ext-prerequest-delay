import { defineConfig } from "cypress";
import path from "path";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:8000",
    setupNodeEvents(on, config) {
      // load extension
      on("before:browser:launch", (browser, launchOptions) => {
        // load extension from ext folder
        const extensionPath = path.resolve("ext");
        launchOptions.extensions.push(extensionPath);
        return launchOptions;
      });

      // Chrome and Firefox only
      config.browsers = config.browsers.filter(
        (b) =>
          (b.family === "chromium" && b.name !== "electron") ||
          b.family === "firefox"
      );

      return config;
    },
  },
});
