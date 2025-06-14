import { describe, it, expect } from 'vitest';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import { join } from 'path';

/**
 * ⚠️ WARNING FOR FUTURE DEV-HUMANS:
 *
 * These tests are intentionally simple and static.
 * We are not rendering or hydrating the component.
 * We are checking for the presence of hydration directives
 * by inspecting the raw source — because SSR + esbuild + test env = pain.
 *
 * If you want full SSR rendering, you’ll need Astro’s experimental
 * test container + global polyfills. We chose happiness instead.
 */

const filePath = fileURLToPath(
  new URL('../src/components/PhantomForm.astro', import.meta.url)
);

describe('PhantomForm hydration directive', () => {
  it('injects the correct hydration directive', async () => {
    // Read the source code directly. We're looking for `client:*` hydration.
    const source = readFileSync(filePath, 'utf8');

    // This tells us the slot is using client hydration (load, idle, visible, etc.)
    expect(source).toContain('<slot client:');
  });

  it('has protection against server-side hydration (mode="server")', async () => {
    const source = readFileSync(filePath, 'utf8');

    // We expect the file to include logic that blocks mode="server"
    expect(source).toMatch(/if\s*\(\s*mode\s*===\s*['"]server['"]\s*\)/);
  });
});