import { Given } from 'cucumber';
import cavaPage from '../pageobjects/cava-login.page';

Given(/^I am on the home page$/, function () {
  cavaPage.open();
  //browser.getTitle().should.equal('CAVA');
});
