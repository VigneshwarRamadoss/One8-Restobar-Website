import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Events page', () => {
  test('renders the editorial enquiry experience without overflow', async ({ page }) => {
    await page.goto('/events');

    const heading = page.getByRole('heading', { level: 1, name: /Events, thoughtfully hosted/i });
    await expect(heading).toBeVisible();

    const eventType = page.getByLabel('Event type *');
    await expect(eventType).toBeVisible();
    expect((await eventType.boundingBox())?.height).toBeGreaterThanOrEqual(52);

    await expect(page.getByLabel('Approximate time *')).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Company', exact: true })).toBeVisible();
    await expect(page.getByLabel(/I agree that One 8 may use these details/i)).toBeVisible();
    await expect(page.locator('#space option', { hasText: '[DRAFT]' })).toHaveCount(0);

    const hasHorizontalOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth
    );
    expect(hasHorizontalOverflow).toBe(false);

    const accessibilityResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag22aa'])
      .analyze();
    expect(accessibilityResults.violations).toEqual([]);
  });

  test('shows an accessible error summary for an incomplete enquiry', async ({ page }) => {
    await page.goto('/events');
    await page.getByRole('button', { name: 'Send enquiry' }).click();

    const summary = page.locator('form [role="alert"]');
    await expect(summary).toBeVisible();
    await expect(summary).toBeFocused();
    await expect(page.getByLabel('Event type *')).toHaveAttribute('aria-invalid', 'true');
  });
});
