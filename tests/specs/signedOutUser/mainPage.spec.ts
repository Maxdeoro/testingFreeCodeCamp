import { test, expect } from '@playwright/test';
import { MainPage } from '../../pages/MainPage';

test('Open main page', async ({page}) => {
    const mainPage = new MainPage(page);
    await mainPage.open();
});

test('Check curriculum snapshot is correct', async ({page}) => {
    const mainPage = new MainPage(page);
    await mainPage.open();
    await mainPage.curriculumLinkHasCorrectSnapshot();
});

test('Check heading snapshot iscorrect', async ({page}) => {
    const mainPage = new MainPage(page);
    await mainPage.open();
    await mainPage.headingHasCorrectSnapshot();
});