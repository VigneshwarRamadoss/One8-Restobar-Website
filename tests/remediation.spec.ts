import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('P0 Remediation & Governance Test Suite', () => {

  test('Unavailable & unpublished menu routes return genuine HTTP 404 status', async ({ page }) => {
    const resDrinks = await page.goto('/menus/drinks');
    expect(resDrinks?.status()).toBe(404);
    await expect(page.locator('h1')).toHaveText('Page Not Found');

    const resWine = await page.goto('/menus/wine');
    expect(resWine?.status()).toBe(404);

    const resInvalid = await page.goto('/menus/invalid-slug-test');
    expect(resInvalid?.status()).toBe(404);
  });

  test('Published /menus/food route returns HTTP 200 and renders food menu', async ({ page }) => {
    const resFood = await page.goto('/menus/food');
    expect(resFood?.status()).toBe(200);
    await expect(page.locator('h1')).toHaveText('Food Menu');
  });

  test('Skip to main content link targets #main-content', async ({ page }) => {
    await page.goto('/');
    await page.keyboard.press('Tab');
    const skipLink = page.locator('a[href="#main-content"]');
    await expect(skipLink).toBeFocused();
    await page.keyboard.press('Enter');
    const mainContent = page.locator('#main-content');
    await expect(mainContent).toBeVisible();
  });

  test('Mobile navigation modal manages focus, Escape key, and scroll lock', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    const toggleBtn = page.getByRole('button', { name: 'Open navigation menu' });
    await expect(toggleBtn).toBeVisible();
    
    // Tap target size check (>= 44x44)
    const box = await toggleBtn.boundingBox();
    expect(box?.width).toBeGreaterThanOrEqual(44);
    expect(box?.height).toBeGreaterThanOrEqual(44);

    await toggleBtn.click();

    // Verify modal open
    const modal = page.locator('#mobile-nav-modal');
    await expect(modal).toBeVisible();

    // Verify background scroll lock
    const bodyOverflow = await page.evaluate(() => document.body.style.overflow);
    expect(bodyOverflow).toBe('hidden');

    // Escape key closes modal & restores focus
    await page.keyboard.press('Escape');
    await expect(modal).not.toBeVisible();
    await expect(toggleBtn).toBeFocused();
  });

  test('Zero horizontal scrollbar overflow across responsive viewports', async ({ page }) => {
    const viewports = [
      { width: 320, height: 568 },
      { width: 390, height: 844 },
      { width: 768, height: 1024 },
      { width: 1024, height: 768 },
      { width: 1440, height: 900 },
      { width: 1920, height: 1080 }
    ];

    await page.goto('/menus/food');
    for (const vp of viewports) {
      await page.setViewportSize(vp);
      const hasOverflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth > window.innerWidth;
      });
      expect(hasOverflow).toBe(false);
    }
  });

  test('Food menu renders semantic chapters & anchor links natively', async ({ page }) => {
    await page.goto('/menus/food');
    const chapterNav = page.locator('nav[aria-label="Menu chapters"]');
    await expect(chapterNav).toBeVisible();

    const chapterLink = chapterNav.locator('a[href="#chapter-1"]');
    await expect(chapterLink).toBeVisible();
    await chapterLink.click();

    const chapterSection = page.locator('#chapter-1');
    await expect(chapterSection).toBeVisible();
  });

  test('Full food menu renders server-first without client JavaScript', async ({ browser }) => {
    const context = await browser.newContext({ javaScriptEnabled: false });
    const page = await context.newPage();
    const res = await page.goto('/menus/food');

    expect(res?.status()).toBe(200);
    await expect(page.locator('h1')).toHaveText('Food Menu');
    await expect(page.locator('#chapter-1')).toBeVisible();

    await context.close();
  });

  test('Homepage & Menu pages pass automated WCAG 2.2 AA Axe audits', async ({ page }) => {
    await page.goto('/');
    const homeResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag22aa'])
      .analyze();
    expect(homeResults.violations).toEqual([]);

    await page.goto('/menus/food');
    const foodResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag22aa'])
      .analyze();
    expect(foodResults.violations).toEqual([]);
  });

});
