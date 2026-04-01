import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from './BasePage';

export class MainPage extends BasePage {
    private readonly curriculumLocator: Locator;
    private readonly headingLocator: Locator;

    constructor(page: Page) {
        super(page);
        this.curriculumLocator = this.page.getByRole('link', {name: 'freeCodeCamp Curriculum'});
        this.headingLocator = this.page.getByRole('heading', {name: 'Build Your Skills for Free'});
    }

    async open() {
        await this.page.goto('https://www.freecodecamp.org/');
    };

    async curriculumLinkHasCorrectSnapshot() {
        await expect(this.curriculumLocator).toMatchAriaSnapshot();
    };

    async headingHasCorrectSnapshot() {
        await expect(this.headingLocator).toMatchAriaSnapshot();
    };
};