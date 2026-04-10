import { test, expect } from '../../fixtures/fixtures';

test('Check menuButton visibility for auth user', async ({mainPage}) => {
    test.setTimeout(120000);
    await mainPage.menuButtonVisibility();
});

test('Check menuButton has correct aria snapshot for auth user', async ({mainPage}) => {
    await mainPage.menuButtonToMatchAriaSnapshot();
});

test('Check menu-list opening for auth user', async ({mainPage}) => {
    await mainPage.openMenuList();
});

test('Check menu-list visibility for auth user', async ({mainPage}) => {
    await mainPage.menuListVisibility();
});

test('Check catalog link is visible in menu-list for auth user', async ({mainPage}) => {
    await mainPage.catalogLinkVisibility();
});

test('Check catalog link count for auth user', async ({mainPage}) => {
    await mainPage.catalogLinkCount(1);
});

test('Check catalog link has correct href for auth user', async ({mainPage}) => {
    await mainPage.catalogLinkHasHref('/catalog');
});

test('Check completnessProfileMenu has correct aria snapshot', async ({mainPage}) => {
    await mainPage.openAuthUserMenu();
    await mainPage.completnessProfileMenuHasCorrectAriaSnapshot();
});

