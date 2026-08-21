import { test, expect } from '@playwright/test';

test.describe('Global Header & Navigation', () => {
  test('header is mathematically centered on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');
    
    const container = page.locator('header > div').last(); // The .container div
    const nav = container.locator('nav').first();
    
    const containerBox = await container.boundingBox();
    const navBox = await nav.boundingBox();
    
    expect(containerBox).toBeTruthy();
    expect(navBox).toBeTruthy();
    
    if (containerBox && navBox) {
      const containerCenter = containerBox.x + containerBox.width / 2;
      const navCenter = navBox.x + navBox.width / 2;
      
      // Allow 1px rounding difference
      expect(Math.abs(containerCenter - navCenter)).toBeLessThanOrEqual(1);
    }
  });

  test('transparent variant on home page', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');
    
    const header = page.locator('header').first();
    await expect(header).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)');
    
    // Scroll down
    await page.mouse.wheel(0, 100);
    // Wait for the scroll handler
    await page.waitForTimeout(300);
    
    // Should become solid
    const bg = await header.evaluate((el) => window.getComputedStyle(el).backgroundColor);
    expect(bg).not.toBe('rgba(0, 0, 0, 0)');
  });

  test('solid variant on internal pages', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/about');
    
    const header = page.locator('header').first();
    const bg = await header.evaluate((el) => window.getComputedStyle(el).backgroundColor);
    expect(bg).not.toBe('rgba(0, 0, 0, 0)');
  });

  test('mobile menu focus trap and escape dismissal', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    
    const menuButton = page.getByRole('button', { name: 'Open navigation menu' });
    await expect(menuButton).toBeVisible();
    
    await menuButton.click();
    
    const modal = page.getByRole('dialog', { name: 'Mobile navigation' });
    await expect(modal).toBeVisible();
    
    // Scroll lock should be active
    const bodyOverflow = await page.locator('body').evaluate((el) => window.getComputedStyle(el).overflow);
    expect(bodyOverflow).toBe('hidden');
    
    // Press escape
    await page.keyboard.press('Escape');
    
    await expect(modal).toBeHidden();
    
    // Scroll lock should be removed
    const bodyOverflowAfter = await page.locator('body').evaluate((el) => window.getComputedStyle(el).overflow);
    expect(bodyOverflowAfter).not.toBe('hidden');
  });

  test('nested active route state', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/menus');
    
    const desktopNav = page.locator('nav[aria-label="Main navigation"]');
    const menusLink = desktopNav.getByRole('link', { name: 'Menus', exact: true });
    
    // Test the exact match
    await expect(menusLink).toHaveAttribute('aria-current', 'page');

    // Test a nested route
    await page.goto('/menus/food');
    await expect(menusLink).toHaveAttribute('aria-current', 'page');
  });
});
