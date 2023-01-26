import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    downloadsFolder: 'tests/downloads',
    fixturesFolder: 'tests/fixtures',
    specPattern: 'tests/e2e/**/*.(spec|test).{js,jsx,ts,tsx}',
    screenshotsFolder: 'tests/screenshots',
    screenshotOnRunFailure: false,
    supportFile: 'tests/support/e2e.{js,jsx,ts,tsx}',
    video: false,
    videosFolder: 'tests/videos',
    viewportWidth: 1366,
    viewportHeight: 768,
  },
});
