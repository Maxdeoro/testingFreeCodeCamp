import { test as base } from '@playwright/test';
import { MainPage } from '../pages/MainPage';
import { CatalogPage } from '../pages/CatalogPage';

type MyFixtures = {
    mainPage: MainPage;
    catalogPage: CatalogPage;
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
});

export { expect } from '@playwright/test';