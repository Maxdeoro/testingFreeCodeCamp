import { test, expect } from '../../fixtures/fixtures';

test('Check menu opening', async ({mainPage}) => {
    await mainPage.openMenuList();
});

test('Check menuList has correct aria-snapshot', async ({catalogPage}) => {
    await catalogPage.menuListHasCorrectAriaSnapshot();
});

test('Check catalog link visibility', async ({catalogPage}) => {
    await catalogPage.catalogLinkIsVisible();
});

test('Check catalogPage heading is correct', async ({catalogPage}) => {
    await catalogPage.catalogPageHasCorrectHeading();
});

test('Check JavaScript Fundamentals Card is visible', async ({catalogPage}) => {
    await catalogPage.javaScriptCardIsVisible();
});