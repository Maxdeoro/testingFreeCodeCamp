import { test, expect } from '../../fixtures/fixtures';

test('Check menuButton visibility', async ({mainPage}) => {
    test.setTimeout(120000);
    await mainPage.menuButtonVisibility();
});

test('Check menuButton has correct aria snapshot', async ({mainPage}) => {
    await mainPage.menuButtonToMatchAriaSnapshot();
});

test('Check menu-list opening', async ({mainPage}) => {
    await mainPage.openMenuList();
});

test('Check menu-list visibility', async ({mainPage}) => {
    await mainPage.menuListVisibility();
});

test('Check catalog link is visible in menu-list', async ({mainPage}) => {
    await mainPage.catalogLinkVisibility();
});

test('Check catalog link count', async ({mainPage}) => {
    await mainPage.catalogLinkCount(1);
});

test('Check catalog link has correct href', async ({mainPage}) => {
    await mainPage.catalogLinkHasHref('/catalog');
});

