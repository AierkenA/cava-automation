import { Then }     from 'cucumber';
import cavaPage    from '../pageobjects/cava-login.page';


Then(/^I should see oder delivery button$/, function () {
  cavaPage.isSearched().should.be.true;
});
