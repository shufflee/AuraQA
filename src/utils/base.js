const { Browser } = require("selenium-webdriver");

class base{
    pasueShort(){
        Browser.pause(3000)
    }

    pasueMedium(){
        Browser.pause(5000)
    }

    pasueLong(){
        Browser.pause(8000)
    }

}

module.exports = new base();