
import Page from './page';

class CavaPage extends Page {

  get orderOnlineButton() { return $$('//a[@class="current"]'); }
  get signinicon() { return $('//*[@class="header__menu-item header__menu-item--left"]'); }
  get oderDeliveryButton() { return $('//button[contains(., "ORDER DELIVERY")]'); }
  get usernameInput() { return $('//*[@name="email"]'); }
  get passwordInput() { return $('//*[@name="password"]'); }
  get signinButton() { return $('//button[contains(., "Sign In")]'); }

  clickbtn() {
    this.orderOnlineButton.click();
  }
  open() {
    super.open('https://cava.com')       //provide your additional URL if any. this will append to the baseUrl to form complete URL
    browser.pause(1000);
  }

  enterText(item) {
    this.searchInput.clearValue();
    this.searchInput.setValue(item);
    browser.pause(1000);
  }

  clicksignin() {
    this.signinicon.click();
  }

  clicksigninbutton() {
    this.signinButton.click();
  }

  isSearched() {
    this.resultsList.waitForDisplayed(1000);
    return this.resultsList.isDisplayed();
  }


  // waitForloginPageToLoad() {
  //   if (!this.headerImage.isDisplayed()) {
  //     this.headerImage.waitForDisplayed(10000);
  //   }
  // }

  login(emailaddress, password) {
    //this.waitForloginPageToLoad();
    this.emailaddressInput.setValue(emailaddress);
    this.passwordInput.setValue(password);
    this.loginButton.click();
  }
}

export default new CavaPage();
