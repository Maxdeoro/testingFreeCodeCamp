// import test from "@playwright/test";
import { test } from "../../fixtures/fixtures";
import { ForumPage } from "../../pages/ForumPage";

ForumPage.testParams.forEach(({url, name}) => {
    test(`Check layout - ${name}`, async ({forumPage}) => {
        await forumPage.open(url);
        await forumPage.pageHasCorrectScreenshot();
    });
});