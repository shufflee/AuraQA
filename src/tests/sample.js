const { WebDriver } = require("selenium-webdriver");
const chromeDriver = require("../drivers/chrome");

const home = require("../pageObjects/homePage")

describe("Aura Code Challenge - Create User Account Tests", () => {
  let driver;
  beforeAll(() => {
    driver = chromeDriver();
  });

  afterAll(async () => {
    await driver.quit();
  });

  test("it loads authentication page", async () => {
    await driver.get(
      "http://automationpractice.com/index.php?controller=authentication&back=my-account"
    );
    const title = await driver.getTitle();
    expect(title).toBe("Login - My Store");
  });

  test("it loads the create account authentication page", async () => {
    await home.signInBtn().click()

    /*
    Assert.assertTrue(createAccount.getCreateAccountForm().isDisplayed());
		Assert.assertTrue(createAccount.getCreatAccountEmailField().isDisplayed());
		Assert.assertTrue(createAccount.getCreateAccountBtn().isDisplayed());
		Assert.assertTrue(signin.getSignInForm().isDisplayed());
    */
  });

  test("error message validation on email field", async () => {
    /*
    without email
    wrong email format
    registered email
    correct email
    */
  });

  test("validation for personal information", async () => {
    /*
    with values
    without values
    */
  });

  test("validation for required fields left emply", async () => {});

  test("validation for required fields format", async () => {});

  test("validation for required fields filled", async () => {
    //sucessfully acount creation
  });
});
