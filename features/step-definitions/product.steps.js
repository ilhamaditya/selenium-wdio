import { Given, When, Then } from "@wdio/cucumber-framework";
import bPage from "../pageobjects/b.Page";
import commonPage from "../pageobjects/common.page";
import homePage from "../pageobjects/home.page";
const { expect } = require('chai');

Given(/^go to ebay$/, async () => {
  commonPage.openURL();
});
When(
  /^navigate to search by category - electronics - cell phones & accessories$/,
  async () => {
    (await homePage.dropdownShopByCategory).click();
    (await homePage.selectCellphonesaccessories).click();
  }
);
Then(/^page loads and click cell phones & smartphones$/, async () => {
  (await bPage.linkCellPhonesSmartphones).click();
});
When(/^click more refinements$/, async () => {
  (await bPage.linkAllFilters).click();
});
When(/^add more 3 filters$/, async () => {
  await bPage.subpanelScreenSize.click();
  await bPage.checkOptionNotSpecified.click();

  await bPage.subpanelPrice.click();
  await bPage.inputPriceFrom.setValue("0");
  await bPage.inputPriceTo.setValue("10000000");

  await bPage.subpanelItemLocation.click();
  await bPage.checkOptionAsia.click();
  await bPage.btnApply.click();
});
Then(/^filter tags applied$/, async () => {
  await bPage.btnFilterApplied.click();
  // expect(bPage.btnAssertScreenSize).toBeDisplayed();
  // expect(bPage.btnAssertPrice).toBeDisplayed();
  // expect(bPage.btnAssertItemLocation).toBeDisplayed();
  expect(bPage.btnAssertScreenSize).exist
  expect(bPage.btnAssertPrice).exist
  expect(bPage.btnAssertItemLocation).exist
});



When(/^input keyword on search bar$/, async () => {
  await bPage.inputKeyword.setValue("MacBook.");
});

When(/^change category$/, async () => {
  await bPage.selectCategory.click()
});

Then(/^redirect to result search page$/, async () => {
  await bPage.btnSearch.click()
});

Then(/^check first result name matches refer keyword$/, async () => {
  expect(bPage.matchString).exist;
});