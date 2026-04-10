import { expect, Locator, Page } from '@playwright/test';

export class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    };

    protected async checkAriaSnapshot(locator: Locator) {
        await expect(locator).toMatchAriaSnapshot();
    };

    protected async checkVisibility(locator: Locator) {
        await expect(locator).toBeVisible();
    };
};