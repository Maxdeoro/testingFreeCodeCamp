import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from './BasePage';

export class ForumPage extends BasePage {

    static readonly testParams = [
        {
            url: 'https://forum.freecodecamp.org/',
            // screenshotName: 'maintab.png',
            name: 'mainForum page'
        },
        {
            url: 'https://forum.freecodecamp.org/categories',
            // screenshotName: 'subforumtab.png',
            name: 'subforum page'
        },
        {
            url: 'https://forum.freecodecamp.org/latest',
            // screenshotName: 'latesttab.png',
            name: 'latest page'
        },
        {
            url: 'https://forum.freecodecamp.org/u?order=likes_received',
            // screenshotName: 'leaderboardtab.png',
            name: 'leaderboard page'
        },
    ];
    private readonly pageContentLocator: Locator;

    constructor(page: Page) {
        super(page);
        this.pageContentLocator = this.page.locator('body');
    };

    async open(url: string) {
        await this.page.goto(url);
    };

    async pageHasCorrectScreenshot() {
        await this.checkAriaSnapshot(this.pageContentLocator);
    };
};