$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("HealthInsurance.feature");
formatter.feature({
  "line": 2,
  "name": "HealthInsurance Test",
  "description": "\r\nAs a,User I would like to visit BupaHealthInsurance website",
  "id": "healthinsurance-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 20481081800,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I Mouse over ‘Health Insurance’ under the mega menu",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I verify ‘Get a Quote’ is link to click",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I click on ‘Get a Quote’ link",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.iMouseOverHealthInsuranceUnderTheMegaMenu()"
});
formatter.result({
  "duration": 4381386400,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iVerifyGetAQuoteIsLinkToClick()"
});
formatter.result({
  "duration": 2193993600,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnGetAQuoteLink()"
});
formatter.result({
  "duration": 6500630700,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Fill all the details under the \u0027quote-your-name\u0027 page and give a quote to customer",
  "description": "",
  "id": "healthinsurance-test;fill-all-the-details-under-the-\u0027quote-your-name\u0027-page-and-give-a-quote-to-customer",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I reach on \u0027quote-your-name\u0027 page",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I select the Your title",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter the firstname",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter the lastname",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on Next button",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I reach on Quote cover for customer page successfully",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select the option \"Me, my partner and our children\" from dropdown menu",
  "keyword": "And "
});
formatter.match({
  "location": "QuoteYourNamePageSteps.iReachOnQuoteYourNamePage()"
});
formatter.result({
  "duration": 84900,
  "status": "passed"
});
formatter.match({
  "location": "QuoteYourNamePageSteps.iSelectTheYourTitle()"
});
formatter.result({
  "duration": 611660800,
  "status": "passed"
});
formatter.match({
  "location": "QuoteYourNamePageSteps.iEnterTheFirstname()"
});
formatter.result({
  "duration": 724941600,
  "status": "passed"
});
formatter.match({
  "location": "QuoteYourNamePageSteps.iEnterTheLastname()"
});
formatter.result({
  "duration": 577842400,
  "status": "passed"
});
formatter.match({
  "location": "QuoteYourNamePageSteps.iClickOnNextButton()"
});
formatter.result({
  "duration": 12059714400,
  "status": "passed"
});
formatter.match({
  "location": "QuoteCoverForCustomerPageSteps.iReachOnQuoteCoverForCustomerPageSuccessfully()"
});
formatter.result({
  "duration": 133100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Me, my partner and our children",
      "offset": 21
    }
  ],
  "location": "QuoteCoverForCustomerPageSteps.iSelectTheOptionFromDropdownMenu(String)"
});
formatter.result({
  "duration": 2921885000,
  "status": "passed"
});
formatter.after({
  "duration": 212000,
  "status": "passed"
});
});