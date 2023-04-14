const { By, Key, Builder } = require("selenium-webdriver");
const assert = require("assert")
require("chromedriver");

describe('Login Page', function() {
    it('will navigate to hudl.com/home after a successful user login', async function() {
        //To wait for browser to build and launch properly
        let driver = await new Builder().forBrowser("chrome").build();

        try {
            // Navigates to hudl.com/login
            await driver.get("http://hudl.com/login");

            // Sets an implicit timeout for the driver of 5 seconds
            await driver.manage().setTimeouts({implicit: 5000});

            let txtEmail = await driver.findElement(By.id('email'));
            let txtPassword = await driver.findElement(By.id('password'))
            let btnLogIn = await driver.findElement(By.id('logIn'))

            await txtEmail.sendKeys('jbraden@protonmail.com')

            await btnLogIn.click()

            let labelUserName = await driver.findElement(By.className('hui-globaluseritem__display-name'));
            labelUserName.getText()

            assert.equal("Justin B", labelUserName())
        }catch (error){
            console.error(error)
            //It is always a safe practice to quit the browser after execution
            await driver.quit();
        };
    });
});