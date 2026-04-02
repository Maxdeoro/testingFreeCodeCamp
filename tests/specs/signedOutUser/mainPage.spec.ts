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

test('visibility of the StartLearningNowButton', async ({mainPage}) => {
    await mainPage.startLearningNowButtonVisibility();
});

test('Check authorization form opening', async ({mainPage}) => {
    await mainPage.openAuthForm();
});

test('Check JavaScript Certification page opening', async ({mainPage}) => {
    await mainPage.openJavaScriptPage();
});