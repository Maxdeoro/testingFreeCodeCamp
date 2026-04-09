import { test, expect } from '@playwright/test';
import path from 'path';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

test('Check Sign in with email', async ({page}) => {
    test.setTimeout(180000);

    await page.goto('https://www.freecodecamp.org/');
    const signInButton = page.getByRole('link', {name: "Sign in"});

    await signInButton.click();

    const emailInput = page.getByRole('textbox', {name: 'Email address'});

    await emailInput.fill('...');

    const continueButton = page.getByRole('button', {name: 'Continue with Email'});
    await continueButton.click();

    //enter code from email
    // await continueButton.click();

    await page.context().storageState({path: authFile});
});

