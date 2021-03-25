const { WebDriver } = require("selenium-webdriver");
const chromeDriver = require("../drivers/chrome");
const authPageForms = require("../pageObjects/authPage");
const { elementIsEnabled } = require("selenium-webdriver/lib/until");
// const errorMsg = authPageForms.error()

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

  test("it loads the create account form", async () => {
    expect(authPageForms.accountFromIsVisbile).toBeDefined();
  });

  test("it loads the email address field in the create account form ", async () => {
    expect(authPageForms.emailFeildIsVisbile).toBeDefined();
  });

  test("it loads the sign in form", async () => {
    expect(authPageForms.signInFormIsVisible).toBeDefined();
  });

  test("it loads the create account button", async () => {
    expect(authPageForms.createAcctBtnIsVisible).toBeDefined();
  });

  test("it does not allow the user to continue without entering a valid email address", async () => {
    authPageForms.submitNewEmail();
    expect(errorMsg).toBe("Invalid email address.");
  });

  // test("it does not allow user to continue with invalid email address", async () => {
  //   authPageForms.fillEmailField("invalid");
  //   authPageForms.submitNewEmail();
  //   expect(errorMsg).toBe("Invalid email address.");
  // });

  // test("it does not allow an already registered user to continue", async () => {
  //   authPageForms.fillEmailField("auratest@testing.com");
  //   authPageForms.submitNewEmail();
  //   expect(errorMsg).toBe(
  //     "An account using this email address has already been registered. Please enter a valid password or request a new one."
  //   );
  // });

  // test("it does allows user with a valid and unused email to naviagte to the personal informatio form ", async () => {
  //   authPageForms.fillEmailField("auratest1@testing.com");
  //   authPageForms.submitNewEmail();
  //   expect(authPageForms.accountCreationFormVisible).toBeDefined();
  // });

  // test("validation for personal information", async () => {
  //   /*
  //   with values
  //   without values
  //   */
  // });

  // test("validation for required fields left emply", async () => {});

  // test("validation for required fields format", async () => {});

  // test("validation for required fields filled", async () => {
  //   //sucessful account creation
  // });
});
