import { test, expect } from '@playwright/test';

test('Check visibility of the Get started button', async ({page}) => {
    await page.goto('https://www.freecodecamp.org/');
    const getStartedButton = page.getByRole('link', {name: "Get started (it's free)"}).first();
    await expect(getStartedButton).toBeVisible();
});

test('Check click on Get started button', async ({page}) => {
    await page.goto('https://www.freecodecamp.org/');
    const getStartedButton = page.getByRole('link', {name: "Get started (it's free)"}).first();
    await getStartedButton.click();
});