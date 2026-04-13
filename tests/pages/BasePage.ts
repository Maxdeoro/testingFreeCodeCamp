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

    protected async hideHTMLElement(selector: string) {
        await this.page.evaluate((selector) => {
            const el = document.querySelector(selector);
            if(el) {
                (el as HTMLElement).style.display = 'none';
            }
        }, selector);
    };

    protected async checkMenuCardVisibility(cardLocator: Locator) {
        await expect(cardLocator).toBeVisible();
    };
};