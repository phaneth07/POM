const { defineConfig } = require('cypress');

module.exports = defineConfig({

  e2e: {
    baseUrl: 'https://deploy.taastests.com/auth/login',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    excludeSpecPattern: ['**/1-getting-started/*', '**/2-advanced-examples/*'],
  },
});
