import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from './BasePage';

export class MainPage extends BasePage {
    private readonly curriculumLocator: Locator;
    private readonly headingLocator: Locator;
    private readonly recommendedCurriculumLocator: Locator;
    private readonly startLearningButtonLocator: Locator;
    private readonly javaScriptCertificationLocator: Locator;
    private readonly signInModalFormLocator: Locator;
    private readonly signInModalHeaderLocator: Locator;
    private readonly signUpLinkModalLocator: Locator;
    private readonly signUpModalHeaderLocator: Locator;
    private readonly signUpEmailInputLocator: Locator;
    private readonly menuButtonLocator: Locator;
    private readonly menuListLocator: Locator;
    private readonly catalogLinkLocator: Locator;
    private readonly nightModeCheckboxLocator: Locator;

    constructor(page: Page) {
        super(page);
        this.curriculumLocator = this.page.getByRole('link', {name: 'freeCodeCamp Curriculum'});
        this.headingLocator = this.page.getByRole('heading', {name: 'Build Your Skills for Free'});
        this.recommendedCurriculumLocator =  this.page.locator('div').filter({hasText: 'Recommended curriculum'}).nth(4);
        this.startLearningButtonLocator = this.page.getByRole('link', {name: "Start Learning Now (it's free)"});
        this.javaScriptCertificationLocator = this.page.getByRole('link', {name: 'JavaScript Certification'});
        this.signInModalFormLocator = this.page.locator('div').nth(4);
        this.signInModalHeaderLocator = this.page.getByRole('heading', {name: 'Log in to freeCodeCamp Learn'});
        this.signUpLinkModalLocator = this.page.getByRole('link', {name: "Sign up"});
        this.signUpModalHeaderLocator = this.page.getByRole('heading', {name: 'Sign up for freeCodeCamp Learn'});
        this.signUpEmailInputLocator = this.page.getByRole('textbox', {name: "Email address"});
        this.menuButtonLocator = this.page.getByRole('button', {name:'Menu'});
        this.menuListLocator = this.page.locator('ul.nav-list.display-menu');
        this.catalogLinkLocator = this.page.getByRole('link', {name: 'Catalog'});
        this.nightModeCheckboxLocator = this.page.getByRole('button', {name: 'Night Mode'});
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

    async recommendedCurriculumHasCorrectAriaSnapshot() {
        await expect(this.recommendedCurriculumLocator).toMatchAriaSnapshot();   
    };

    async startLearningNowButtonVisibility() {
        await expect(this.startLearningButtonLocator).toBeVisible();
    };

    async openAuthForm() {
        await this.startLearningButtonLocator.click();
    };

    async signInModalHasCorrectHeader() {
        await this.openAuthForm();
        await expect(this.signInModalHeaderLocator).toHaveText('Log in to freeCodeCamp Learn');
    };

    async signUnModalHasCorrectHeader() {
        await this.openSignUpModalForm();
        await expect(this.signUpModalHeaderLocator).toHaveText('Sign up for freeCodeCamp Learn');
    };

    async signUpEmailInputIsVisible() {
        await this.openSignUpModalForm();
        await expect(this.signUpEmailInputLocator).toBeVisible();
    };

    async openJavaScriptPage() {
        await this.javaScriptCertificationLocator.click();
    };

    async signInModalFormIsVisible() {
        await this.startLearningButtonLocator.click();
        await expect(this.signInModalFormLocator).toBeVisible();
    };

    async signUpModalWindowLinkIsVisible() {
        await this.startLearningButtonLocator.click();
        await expect(this.signUpLinkModalLocator).toBeVisible();
    };

    async openSignUpModalForm() {
        await this.startLearningButtonLocator.click();
        await this.signUpLinkModalLocator.click();
    };

    async menuButtonVisibility() {
        await expect(this.menuButtonLocator).toBeVisible();
    };

    async menuButtonToMatchAriaSnapshot() {
        await expect(this.menuButtonLocator).toMatchAriaSnapshot();
    };

    async openMenuList() {
        await this.menuButtonLocator.click();
    };

    async menuListVisibility() {
        await this.openMenuList();
        await expect(this.menuListLocator).toBeVisible();
    };

    async catalogLinkVisibility() {
        await this.openMenuList();
        await expect(this.catalogLinkLocator).toBeVisible();
    };

    async catalogLinkCount(num: number) {
        await this.openMenuList();
        await expect(this.catalogLinkLocator).toHaveCount(num);
    };

    async catalogLinkHasHref(HREF: string) {
        await this.openMenuList();
        await expect(this.catalogLinkLocator).toHaveAttribute('href', HREF);
    };

    async nightModeButtonClick() {
        await this.openMenuList();
        await this.nightModeCheckboxLocator.click();
    };

    async nightModeSwitchAttribut(attrValue: 'dark-palette' | 'light-palette') {
        await expect(this.page.locator('body')).toHaveAttribute('class', attrValue);
    };
};