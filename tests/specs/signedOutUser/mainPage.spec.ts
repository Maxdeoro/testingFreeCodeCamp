import { test, expect } from '../../fixtures/fixtures';

test('Check curriculum snapshot is correct', async ({mainPage}) => {
    await mainPage.curriculumLinkHasCorrectSnapshot();
});

test('Check heading snapshot is correct', async ({mainPage}) => {
    await mainPage.headingHasCorrectSnapshot();
});

test('Check visibility of the recommended curriculum block', async ({mainPage}) => {
    await mainPage.recommendedCurriculumIsVisible();
});

test('Check recommended curriculum bloc has correct snapshot', async ({mainPage}) => {
    await mainPage.recommendedCurriculumHasCorrectAriaSnapshot();
});

test('visibility of the StartLearningNowButton', async ({mainPage}) => {
    await mainPage.startLearningNowButtonVisibility();
});

test('Check authorization form opening', async ({mainPage}) => {
    await mainPage.openAuthForm();
});

test('Check visibility of the sign in form', async ({mainPage}) => {
    test.setTimeout(90000);
    await mainPage.signInModalFormIsVisible();
});

test('Check modal signIn form has correct header', async ({mainPage}) => {
    await mainPage.signInModalHasCorrectHeader();
});

test('Check signUp modal form has correct header', async ({mainPage}) => {
    test.setTimeout(120000);
    await mainPage.signUnModalHasCorrectHeader();
});

test('Check email input is visible in signUp form', async ({mainPage}) => {
    await mainPage.signUpEmailInputIsVisible();
});

test('Check JavaScript Certification page opening', async ({mainPage}) => {
    await mainPage.openJavaScriptPage();
});

test('Check signUp link in modal window visibility', async({mainPage}) => {
    await mainPage.signUpModalWindowLinkIsVisible();
});

test('Check sign up form opening', async ({mainPage}) => {
    // test.setTimeout(90000);
    await mainPage.openSignUpModalForm();
});

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