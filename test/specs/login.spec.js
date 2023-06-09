const { By, Builder } = require("selenium-webdriver")
const softAssert = require("soft-assert")
const loginPage = require("../pageObjects/login.page");
require("chromedriver");


describe('Login Page', function () {
    it('will navigate to hudl.com/home after a successful user login', async () => {
        // Initiating the driver
        driver = new Builder().forBrowser("chrome").build();

        // Declaring variables
        let loginURL = "https://hudl.com/login";
        let email = 'jbraden@protonmail.com';
        let password = ''; // Put password value here
        let userName = 'Justin B';

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
            // Quiting the driver instance
            driver.quit();

            // Finalizing any and all assertions to show the pass/fail report in the terminal
            softAssert.softAssertAll();
        };
    });

    it('will navigate to hudl.com after clicking the hudl logo', async () => {
        driver = new Builder().forBrowser("chrome").build();

        let loginURL = "https://hudl.com/login";
        let btnLogInValue = 'Log in';

        try {
            await loginPage.go_to(loginURL)
            await loginPage.clickByDataQaId("[data-qa-id='hudl-logo']")

            await loginPage.waitForPage(10000);

            let btnLogIn = await driver.findElement(By.cssSelector("[data-qa-id='login-select']")).getText();

            softAssert.softAssert(btnLogIn, btnLogInValue)
        } catch {
        } finally {
            driver.quit()
            softAssert.softAssertAll();
        };
    });
});
