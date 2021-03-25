class authForms {
  get createAccountForm() {
    return $("#create-account_form");
  }

  get createAccountEmailField() {
    return $("#email_create");
  }

  get createAccountBtn() {
    return $("#SubmitCreate");
  }

  get signInForm() {
    return $("#login_form");
  }

  get invalidErrorMsg() {
    return $("#create_account_error");
  }

  get accountCreationFrom() {
    return $("#account-creation_form");
  }

  accountCreationFormVisible() {
    this.accountCreationFrom.waitForExist();
  }

  accountFromIsVisbile() {
    this.createAccountForm.waitForExist();
  }

  emailFeildIsVisbile() {
    this.createAccountEmailField.waitForExist();
  }

  createAcctBtnIsVisible() {
    this.createAccountBtn.waitForExist();
  }

  signInFormIsVisible() {
    this.createAccountForm.waitForExist();
  }

  submitNewEmail() {
    this.createAccountBtn.waitForExist();
    this.createAccountBtn.click();
  }

  error() {
    this.invalidErrorMsg.waitForExist();
  }

  fillEmailField(email) {
    this.createAccountEmailField.setValue(email);
  }
}
module.exports = new authForms();
