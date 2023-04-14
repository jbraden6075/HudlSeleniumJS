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

    async clickByClassName(className) {
        await driver.findElement(By.ClassName(className));
    };

    async waitForPage(className, timeout) {
        await driver.wait(until.elementIsVisible(driver.findElement(By.className(className, timeout))));
    };

    async sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

module.exports = new loginPage();
