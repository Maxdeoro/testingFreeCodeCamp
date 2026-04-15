import { test } from "../../fixtures/fixtures";

test('Check donate page correct layout', async ({donatePage}) => {
    await donatePage.pageContentHasCorrectAriaSnapshot();
});

test('Check donation card viget visibility', async ({donatePage}) => {
    await donatePage.donateCardIsVisible();
});