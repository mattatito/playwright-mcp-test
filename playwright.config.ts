import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  timeout: 5000, // maximum time a test can run
  use: {
    baseURL: 'https://erickwendel.github.io/vanilla-js-web-app-example/',    
    headless: true,    // run tests headless in CI/runners
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  reporter: [['html', { open: 'never' }]],
});
