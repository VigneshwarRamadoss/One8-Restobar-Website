import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Visit page', () => {
  test('renders practical visit information, semantic hours, and zero overflow', async ({ page }) => {
    const response = await page.goto('/visit');
    expect(response?.status()).toBe(200);

    // Exactly one visible H1
    const h1 = page.locator('h1');
    await expect(h1).toHaveCount(1);
    await expect(h1).toBeVisible();
    await expect(h1).toHaveText('Visit One 8');

    // H1 not hidden beneath header
    const box = await h1.boundingBox();
    expect(box?.y).toBeGreaterThanOrEqual(60);

    // Semantic opening hours <section>, <dl>, <dt>, <dd>, <time>
    const hoursSection = page.locator('section[aria-labelledby="hours-title"]');
    await expect(hoursSection).toBeVisible();
    await expect(hoursSection.locator('dl')).toBeVisible();
    await expect(hoursSection.locator('time')).not.toHaveCount(0);

    // Arrival and Location section
    await expect(page.getByRole('heading', { level: 2, name: /Getting to One 8/i })).toBeVisible();

    // Contact section
    await expect(page.getByRole('heading', { level: 2, name: /Contact & Enquiries/i })).toBeVisible();

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

  test('maintains link integrity across primary navigation routes', async ({ page }) => {
    const routes = ['/about', '/visit', '/events', '/menus'];

    for (const route of routes) {
      const res = await page.goto(route);
      expect(res?.status()).toBe(200);
      await expect(page.locator('h1')).toBeVisible();

      // Check header nav links
      const mainNav = page.locator('header nav[aria-label="Main navigation"]');
      if (await mainNav.isVisible()) {
        await expect(mainNav.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
        await expect(mainNav.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about');
        await expect(mainNav.getByRole('link', { name: 'Visit' })).toHaveAttribute('href', '/visit');
        await expect(mainNav.getByRole('link', { name: 'Events' })).toHaveAttribute('href', '/events');
        await expect(mainNav.getByRole('link', { name: 'Menus' })).toHaveAttribute('href', '/menus');
      }
    }
  });
});
