import { test, expect, Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

async function openReservationDialog(page: Page) {
  const isMobile = await page.evaluate(() => window.innerWidth < 1024);
  if (isMobile) {
    const menuToggle = page.locator('header').getByRole('button', { name: /Open navigation menu/i });
    if (await menuToggle.isVisible()) {
      await menuToggle.click();
      const mobileCta = page.locator('#mobile-nav-modal').getByRole('button', { name: /Reserve a table/i });
      await mobileCta.click();
      return;
    }
  }

  const trigger = page.locator('main, header').getByRole('button', { name: /Reserve a table/i }).first();
  await trigger.click();
}

test.describe('Reservation System', () => {
  test('renders reservation trigger and opens dialog in safe default mode', async ({ page }) => {
    await page.goto('/');

    await openReservationDialog(page);

    const dialog = page.getByRole('dialog', { name: /Table reservation system/i });
    await expect(dialog).toBeVisible();

    // Verify header content inside dialog (Default mode = Reservation Enquiries)
    await expect(
      dialog.getByText(/Reservation Enquiries|Reserve your table/i)
    ).toBeVisible();

    // Close via close button
    const closeBtn = dialog.getByRole('button', { name: /Close reservation window/i });
    await closeBtn.click();
    await expect(dialog).not.toBeVisible();
  });

  test('closes dialog on Escape key press', async ({ page }) => {
    await page.goto('/');

    await openReservationDialog(page);

    const dialog = page.getByRole('dialog', { name: /Table reservation system/i });
    await expect(dialog).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(dialog).not.toBeVisible();
  });

  test('server-rendered /reserve fallback page renders cleanly and passes axe audit', async ({ page }) => {
    const response = await page.goto('/reserve');
    expect(response?.status()).toBe(200);

    await expect(page.getByRole('heading', { level: 1, name: /Reserve your table/i })).toBeVisible();

    // Axe WCAG 2.2 AA audit
    const accessibilityResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag22aa'])
      .analyze();
    expect(accessibilityResults.violations).toEqual([]);
  });
});
