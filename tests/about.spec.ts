import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('About page', () => {
  test('renders editorial brand story without overflow or draft text', async ({ page }) => {
    const response = await page.goto('/about');
    expect(response?.status()).toBe(200);

    // One visible H1
    const h1 = page.locator('h1');
    await expect(h1).toHaveCount(1);
    await expect(h1).toBeVisible();
    await expect(h1).toContainText('One place.');

    // H1 not hidden beneath fixed header (header is 72px/64px)
    const box = await h1.boundingBox();
    expect(box?.y).toBeGreaterThanOrEqual(60);

    // Primary narrative renders
    await expect(page.getByRole('heading', { level: 2, name: /Restrained by design/i })).toBeVisible();

    // Principles render
    await expect(page.getByRole('heading', { level: 3, name: 'The plate' })).toBeVisible();
    await expect(page.getByRole('heading', { level: 3, name: 'The pour' })).toBeVisible();

    // Craft story renders
    await expect(page.getByRole('heading', { level: 2, name: /Precision in every execution/i })).toBeVisible();

    // No asset instructions or draft placeholders visible in page body
    const bodyText = await page.locator('body').innerText();
    expect(bodyText).not.toContain('Asset Required');

    // Menu and Visit actions work
    const menuLink = page.locator('main').getByRole('link', { name: /Explore the menu/i }).first();
    await expect(menuLink).toBeVisible();
    await expect(menuLink).toHaveAttribute('href', '/menus/food');

    const visitLink = page.locator('main').getByRole('link', { name: /Plan your visit/i }).first();
    await expect(visitLink).toBeVisible();
    await expect(visitLink).toHaveAttribute('href', '/visit');

    // Zero horizontal overflow
    const hasHorizontalOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth
    );
    expect(hasHorizontalOverflow).toBe(false);

    // Axe WCAG 2.2 AA audit
    const accessibilityResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag22aa'])
      .analyze();
    expect(accessibilityResults.violations).toEqual([]);
  });

  test('navigates cleanly to Menu page from About page action', async ({ page }) => {
    await page.goto('/about');
    const menuLink = page.locator('main').getByRole('link', { name: /Explore the menu/i }).first();
    await Promise.all([
      page.waitForURL(/\/menus\/food/),
      menuLink.click(),
    ]);
    await expect(page.locator('h1')).toBeVisible();
  });
});
