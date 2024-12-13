const cucumber = require('cypress-cucumber-preprocessor').default

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/features/*.feature",
    stepDefinitions: "cypress/e2e/keeggoProject",
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
  },
});