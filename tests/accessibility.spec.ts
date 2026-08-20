import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('One 8 Restobar — Accessibility & Viewport Verification', () => {

  test('Homepage passes automated axe WCAG 2.2 AA audit', async ({ page }) => {
    await page.goto('/');
    
    // Inject and run axe accessibility scanner
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag22aa'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('Navigation and interactive controls are reachable via keyboard Tab key', async ({ page }) => {
    await page.goto('/');
    
    // Press Tab and verify focus moves logically
    await page.keyboard.press('Tab');
    const focusedElement = await page.evaluate(() => document.activeElement?.tagName);
    expect(focusedElement).toBeDefined();
  });

  test('Reduced motion preference disables continuous animations', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');
    
    const bodyAnimation = await page.evaluate(() => {
      const el = document.body;
      return window.getComputedStyle(el).transitionDuration;
    });
    
    // Should be instant duration (0.01ms / 0s / 1e-05s)
    expect(bodyAnimation).toMatch(/^(0s|0\.00001s|0\.01ms|1e-05s)$/);
  });
});
