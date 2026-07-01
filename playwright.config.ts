import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './tests',
  timeout: 60000,
  use: {
    baseURL: 'https://demo.playwright.dev/todomvc',
    headless: true,
    viewport: { width: 1280, height: 720 },
  },
  reporter: [['html', { open: 'never' }], ['list']]
};

export default config;
