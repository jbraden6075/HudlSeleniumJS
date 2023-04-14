const { By, Builder, until } = require("selenium-webdriver");
require("chromedriver");

class loginPage {
    constructor() {
        global.driver = new Builder().forBrowser("chrome").build();
    };
    
    async go_to(url) {
        await driver.get(url);
    };

    async enterTextById(id, text) {
        await driver.findElement(By.id(id)).sendKeys(text);
    };

    async clickById(id) {
        await driver.findElement(By.id(id)).click();
    };

    async waitForPage(timeout) {
        await driver.wait(until.titleIs('Home - Hudl'), timeout);
    };

    async closeBrowser() {
        await driver.quit();
    };
}

module.exports = new loginPage();
