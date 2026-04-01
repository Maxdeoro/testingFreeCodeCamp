// import { MainPage } from '../../pages/MainPage';
import { test, expect } from '../../fixtures/fixtures';

// test('Open main page', async ({page}) => {
//     const mainPage = new MainPage(page);
//     await mainPage.open();
// });

test('Check curriculum snapshot is correct', async ({mainPage}) => {
    // const mainPage = new MainPage(page);
    // await mainPage.open();
    await mainPage.curriculumLinkHasCorrectSnapshot();
});

test('Check heading snapshot iscorrect', async ({mainPage}) => {
    // const mainPage = new MainPage(page);
    // await mainPage.open();
    await mainPage.headingHasCorrectSnapshot();
});