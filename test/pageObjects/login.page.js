const { By, Builder, until } = require("selenium-webdriver");
require("chromedriver");

class loginPage {
    async go_to(url) {
        await driver.get(url);
    };

    async enterTextById(id, text) {
        await driver.findElement(By.id(id)).sendKeys(text);
    };

    async clickById(id) {
        await driver.findElement(By.id(id)).click();
    };

    async clickByDataQaId(dataQaId) {
        await driver.findElement(By.cssSelector(dataQaId));
    };

    async waitForPage(timeout) {
        await driver.wait(until.titleIs('Home - Hudl'), timeout);
    };
}

module.exports = new loginPage();
