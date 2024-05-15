import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:8000",
    setupNodeEvents(on, config) {
      // load extension
      on("before:browser:launch", (browser, launchOptions) => {
        // load extension from local dev folder
        const extensionPath = path.resolve(
          "build",
          extVersion,
          "dev",
          browserDir
        );
        launchOptions.extensions.push(extensionPath);
        return launchOptions;
      });

      // TODO: need a test extension

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
