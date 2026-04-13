import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CatalogPage extends BasePage {
    private readonly menuButtonLocator: Locator;
    private readonly menuListLocator: Locator;
    private readonly catalogLinkLocator: Locator;
    private readonly catalogHeadingLocator: Locator;
    private readonly javaScriptFundamentalsReviewCard: Locator;

    constructor(page: Page) {
        super(page);
        this.menuButtonLocator = this.page.getByRole('button', {name:'Menu'});
        this.menuListLocator = this.page.locator('[data-playwright-test-label="header-menu"]');
        this.catalogLinkLocator = this.page.getByRole('link', {name: 'Catalog'});
        this.catalogHeadingLocator = this.page.getByRole('heading', {name: 'EExplore our Catalog'});
        this.javaScriptFundamentalsReviewCard = this.page.getByRole('link', {name: 'JavaScript JavaScript Fundamentals Review'});
    };

    //actions
    async open() {
        await this.page.goto('https://www.freecodecamp.org/');
    };

    async openMenuList() {
        await this.menuButtonLocator.click();
    };

    async openCatalogPage() {
        await this.catalogLinkLocator.click();
    };

    async hideCatalogPageHeading() {
        await this.hideHTMLElement('h1');
    };

    //assertions
    async menuListHasCorrectAriaSnapshot() {
        await this.checkAriaSnapshot(this.menuListLocator);
    };

    async catalogLinkIsVisible() {
        await this.checkVisibility(this.catalogLinkLocator);
    };

    async catalogPageHasCorrectHeading() {
        await this.openCatalogPage();
        await expect(this.catalogHeadingLocator).toHaveText('Explore our Catalog');
    };

    async javaScriptCardIsVisible() {
        await this.checkMenuCardVisibility(this.javaScriptFundamentalsReviewCard);
    };
};

