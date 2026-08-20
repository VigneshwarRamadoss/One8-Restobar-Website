import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('One 8 Restobar — Full HTML Menus Suite', () => {

  test('/menus (Menu Index) renders cleanly and passes axe accessibility audit', async ({ page }) => {
    await page.goto('/menus');
    
    // Heading check
    const h1 = page.locator('h1');
    await expect(h1).toHaveText('Menus');

    // Check menu cards exist
    await expect(page.getByRole('link', { name: 'Food Menu', exact: true })).toBeVisible();
    
    // Check drinks and wine are unpublished (hidden)
    await expect(page.getByRole('link', { name: 'Drinks Menu', exact: true })).not.toBeVisible();
    await expect(page.getByRole('link', { name: 'Wine List', exact: true })).not.toBeVisible();

    // Run axe accessibility scan
    const accessibilityResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag22aa'])
      .analyze();
    expect(accessibilityResults.violations).toEqual([]);
  });

  test('/menus/food renders semantic Food Menu and passes axe audit', async ({ page }) => {
    await page.goto('/menus/food');
    
    await expect(page.locator('h1')).toHaveText('Food Menu');
    
    // Check Indian menu items
    await expect(page.locator('text=One 8 onion rings')).toBeVisible();
    await expect(page.locator('text=Nalli nihari')).toBeVisible();

    // Check dietary filter buttons DO NOT exist (unpublished state)
    const allButton = page.locator('button', { hasText: 'All Items' });
    const vegButton = page.locator('button', { hasText: 'Vegetarian (V)' });
    await expect(allButton).not.toBeVisible();
    await expect(vegButton).not.toBeVisible();

    // Axe audit
    const accessibilityResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag22aa'])
      .analyze();
    expect(accessibilityResults.violations).toEqual([]);
  });

  test('Invalid menu slug handles gracefully', async ({ page }) => {
    await page.goto('/menus/invalid-slug-test');
    await expect(page.locator('text=Menu Not Found')).toBeVisible();
  });
  
  test('Unpublished drinks/wine slug handles gracefully (returns Not Found)', async ({ page }) => {
    await page.goto('/menus/drinks');
    await expect(page.locator('text=Menu Not Found')).toBeVisible();
    
    await page.goto('/menus/wine');
    await expect(page.locator('text=Menu Not Found')).toBeVisible();
  });
});
