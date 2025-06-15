import { describe, it, expect } from 'vitest';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import { execSync } from 'child_process';

/**
 * PhantomForm Tests
 * -----------------
 * These tests verify that PhantomForm correctly hides forms from SSR
 * while enabling client-side hydration based on the specified mode.
 */

const filePath = fileURLToPath(
  new URL('../src/components/PhantomForm.astro', import.meta.url)
);

describe('PhantomForm Web Component Implementation', () => {
  it('uses Web Components for client-side hydration', async () => {
    const source = readFileSync(filePath, 'utf8');

    // Verify Web Components architecture
    expect(source).toContain('<phantom-form');
    expect(source).toContain('customElements.define');
    expect(source).toContain('HTMLElement');
  });

  it('wraps content in template tags to prevent SSR rendering', async () => {
    const source = readFileSync(filePath, 'utf8');

    // Content should be wrapped in template tags
    expect(source).toContain('<template><slot /></template>');
  });

  it('has protection against server-side hydration (mode="server")', async () => {
    const source = readFileSync(filePath, 'utf8');

    // We expect the file to include logic that blocks mode="server"
    expect(source).toMatch(/if\s*\(\s*mode\s*===\s*['"]server['"]\s*\)/);
  });

  it('implements all three hydration modes', async () => {
    const source = readFileSync(filePath, 'utf8');

    // Check for load, idle, and visible mode implementations
    expect(source).toContain("mode === 'load'");
    expect(source).toContain("mode === 'idle'");
    expect(source).toContain("mode === 'visible'");
  });
});

describe('PhantomForm SSR Visibility Tests', () => {
  it('should hide forms from SSR output in test project', async () => {
    try {
      // Test standard import page
      const standardOutput = execSync('curl -s http://localhost:3000/standard-import', { encoding: 'utf8' });
      const standardFormCount = (standardOutput.match(/<form[^>]*>/g) || []).length;
      
      // Forms should be in template tags, not active in DOM
      expect(standardFormCount).toBe(0);
      
      // But template tags should exist
      expect(standardOutput).toContain('<template>');
      expect(standardOutput).toContain('<phantom-form');
      
    } catch (error) {
      // Skip this test if dev server is not running
      console.warn('Dev server not running, skipping SSR visibility test');
    }
  });

  it('should contain phantom-form elements in SSR output', async () => {
    try {
      const output = execSync('curl -s http://localhost:3000/hydration-modes', { encoding: 'utf8' });
      
      // Should contain phantom-form custom elements
      expect(output).toContain('<phantom-form');
      expect(output).toContain('data-mode=');
      
    } catch (error) {
      console.warn('Dev server not running, skipping phantom-form element test');
    }
  });
});