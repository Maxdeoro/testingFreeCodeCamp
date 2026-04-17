import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class DonatePage extends BasePage {
    private readonly pageContentLocator: Locator;
    private readonly donateCardLocator: Locator;

    constructor(page: Page) {
        super(page);
        this.pageContentLocator = this.page.locator('#___gatsby');
        this.donateCardLocator = this.page.locator('[data-playwright-test-label="donation-tier-selector"]');
    };

    async open() {
        await this.page.goto('/donate');
    };

    async pageContentHasCorrectAriaSnapshot() {
        await this.open();
        await this.checkAriaSnapshot(this.pageContentLocator);
    };

    async donateCardIsVisible() {
        await this.checkVisibility(this.donateCardLocator);
    }
};