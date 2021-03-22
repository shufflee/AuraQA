const { By } = require("selenium-webdriver");

module.exports = function (driver){

    const elements = {
        signInBtn: By.xpath("//a[contains(text(), \"Sign in\")]")
    }
    return {
        signIn: function(){
            return driver.findElement(elements.signInBtn)
        }
    }
};
