const { By } = require("selenium-webdriver")
const softAssert = require("soft-assert")
const loginPage = require("../pageObjects/login.page");
require("chromedriver");

// let driver = new Builder().forBrowser("chrome").build();

describe('Login Page', function () {
    it('will navigate to hudl.com/home after a successful user login', async () => {
        // Declaring variables
        let loginURL = "https://hudl.com/login";
        let email = 'jbraden@protonmail.com';
        let password = ''; // Put password value here
        let userName = 'Justin C';

        try {
            // Navigates to hudl.com/login
            await loginPage.go_to(loginURL);

            // Calling loginPage methods to perform actions
            await loginPage.enterTextById('email', email);
            await loginPage.enterTextById('password', password);
            await loginPage.clickById('logIn');

            // Waiting for the page to load before continuing
            await loginPage.waitForPage(10000);

            // Declaring the user name element on the home page and getting its value
            let labelUserName = await driver.findElement(By.className('hui-globaluseritem__display-name')).getText();

            // Soft asserting that the user menu value and userName variable match to prove the correct user was logged in.
            softAssert.softAssert(labelUserName, userName);
        } catch {
        } finally {
            // Closing the browser at the end of the script
            await loginPage.closeBrowser();

            // Finalizing any and all assertions to show the pass/fail report in the terminal
            softAssert.softAssertAll();
        };
    });
});
