import { test as base } from '@playwright/test';
import { MainPage } from '../pages/MainPage';
import { CatalogPage } from '../pages/CatalogPage';
import { ForumPage } from '../pages/ForumPage';

type MyFixtures = {
    mainPage: MainPage;
    catalogPage: CatalogPage;
    forumPage: ForumPage;
};

export const test = base.extend<MyFixtures>({
    mainPage: async ({page}, use) => {
        const mainPage = new MainPage(page);
        await mainPage.open();
        await use(mainPage);
    },
    catalogPage: async ({page}, use) => {
        const catalogPage = new CatalogPage(page);
        await catalogPage.open();
        await use(catalogPage);
    },
    forumPage: async ({page}, use) => {
        const forumPage = new ForumPage(page);
        // await forumPage.open('https://forum.freecodecamp.org/');
        await use(forumPage);
    }
});

export { expect } from '@playwright/test';