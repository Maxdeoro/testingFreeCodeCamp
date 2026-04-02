import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from './BasePage';

export class MainPage extends BasePage {
    private readonly curriculumLocator: Locator;
    private readonly headingLocator: Locator;
    private readonly recommendedCurriculumLocator: Locator;
    private readonly startLearningButtonLocator: Locator;
    private readonly javaScriptCertificationLocator: Locator;

    constructor(page: Page) {
        super(page);
        this.curriculumLocator = this.page.getByRole('link', {name: 'freeCodeCamp Curriculum'});
        this.headingLocator = this.page.getByRole('heading', {name: 'Build Your Skills for Free'});
        this.recommendedCurriculumLocator =  this.page.locator('div').filter({hasText: 'Recommended curriculum'}).nth(4);
        this.startLearningButtonLocator = this.page.getByRole('link', {name: "Start Learning Now (it's free)"});
        this.javaScriptCertificationLocator = this.page.getByRole('link', {name: 'JavaScript Certification'});
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

    async recommendedCurriculumIsVisible() {
        await expect(this.recommendedCurriculumLocator).toBeVisible();
    };

    async startLearningNowButtonVisibility() {
        await expect(this.startLearningButtonLocator).toBeVisible();
    };

    async openAuthForm() {
        await this.startLearningButtonLocator.click();
    };

    async openJavaScriptPage() {
        await this.javaScriptCertificationLocator.click();
    };
};