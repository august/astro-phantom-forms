// vitest.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node', // 👈 This avoids jsdom, avoids weird globals
    include: ['tests/**/*.test.ts']
  }
});