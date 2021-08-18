import {Given, When, Then} from 'cucumber';
import cavaPage from '../pageobjects/cava-login.page';

When(/^I click the order online button$/, function () {
    cavaPage.click();
  });
  
  When(/^I click the sign in icon$/, function () {
    cavaPage.click();
  });
  
  When(/^I click the sign in button$/, function () {
    cavaPage.click();
  });
  
  When(/^I login with emailaddress and password "([^"]*)" "([^"]*)" into the text box$/, function (arg1, arg2) {
    cavaPage.login(arg1, arg2);    // entering email address, password and and submiting the page
  });
