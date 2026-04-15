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
    private readonly userAvatarLocator: Locator;
    private readonly completnessProfilrLocator: Locator;

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
        this.userAvatarLocator = this.page.locator('div.avatar-container default-border');
        this.completnessProfilrLocator = this.page.locator('div').filter({hasText: 'Add your location'});
    }

    //actions

    async open() {
        await this.page.goto('https://www.freecodecamp.org/');
    };

    async openAuthForm() {
        await this.startLearningButtonLocator.click();
    };

    async openJavaScriptPage() {
        await this.javaScriptCertificationLocator.click();
    };

    async openSignUpModalForm() {
        await this.startLearningButtonLocator.click();
        await this.signUpLinkModalLocator.click();
    };

    async openMenuList() {
        await this.menuButtonLocator.click();
    };

    async nightModeButtonClick() {
        await this.openMenuList();
        await this.nightModeCheckboxLocator.click();
    };

    async openAuthUserMenu() {
        await this.userAvatarLocator.click();
    };

    //assertions

    async curriculumLinkHasCorrectSnapshot() {
        await this.checkAriaSnapshot(this.curriculumLocator);
    };

    async headingHasCorrectSnapshot() {
        await this.checkAriaSnapshot(this.headingLocator);
    };

    async recommendedCurriculumIsVisible() {
        await this.checkVisibility(this.recommendedCurriculumLocator);
    };

    async recommendedCurriculumHasCorrectAriaSnapshot() {
        await this.checkAriaSnapshot(this.recommendedCurriculumLocator);  
    };

    async startLearningNowButtonVisibility() {
        await this.checkVisibility(this.startLearningButtonLocator);
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
        await this.checkVisibility(this.signUpEmailInputLocator);
    };

    async signInModalFormIsVisible() {
        await this.startLearningButtonLocator.click();
        await this.checkVisibility(this.signInModalFormLocator);
    };

    async signUpModalWindowLinkIsVisible() {
        await this.startLearningButtonLocator.click();
        await this.checkVisibility(this.signUpLinkModalLocator);
    };

    async menuButtonVisibility() {
        await this.checkVisibility(this.menuButtonLocator);
    };

    async menuButtonToMatchAriaSnapshot() {
        await this.checkAriaSnapshot(this.menuButtonLocator);
    };

    async menuListVisibility() {
        await this.openMenuList();
        await this.checkVisibility(this.menuListLocator);
    };

    async catalogLinkVisibility() {
        await this.openMenuList();
        await this.checkVisibility(this.catalogLinkLocator);
    };

    async catalogLinkCount(num: number) {
        await this.openMenuList();
        await expect(this.catalogLinkLocator).toHaveCount(num);
    };

    async catalogLinkHasHref(HREF: string) {
        await this.openMenuList();
        await expect(this.catalogLinkLocator).toHaveAttribute('href', HREF);
    };

    async nightModeSwitchAttribut(attrValue: 'dark-palette' | 'light-palette') {
        await expect(this.page.locator('body')).toHaveAttribute('class', attrValue);
    };

    async completnessProfileMenuHasCorrectAriaSnapshot() {
        await this.checkAriaSnapshot(this.completnessProfilrLocator); 
    };
};