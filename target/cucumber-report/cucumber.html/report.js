$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("HealthInsurance.feature");
formatter.feature({
  "line": 2,
  "name": "HealthInsurance Test",
  "description": "\r\nAs a,User I would like to visit BupaHealthInsurance website",
  "id": "healthinsurance-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "duration": 8606114900,
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
  "duration": 1298640400,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iVerifyGetAQuoteIsLinkToClick()"
});
formatter.result({
  "duration": 2070694000,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnGetAQuoteLink()"
});
formatter.result({
  "duration": 2066537400,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Verify the all fields available to enter the data under \u0027quote-your-name\u0027 page",
  "description": "",
  "id": "healthinsurance-test;verify-the-all-fields-available-to-enter-the-data-under-\u0027quote-your-name\u0027-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I reach on \u0027quote-your-name\u0027 page",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I verify the field \u0027your Title\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I verify the \u0027Enter your first name\u0027 field",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I verify the \u0027Enter your last name\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the field \"Next\" button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify the text \"View our \"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I verify the link \"Privacy Information\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I verify the textLink \"for details on how we use and protect your data.\"",
  "keyword": "And "
});
formatter.match({
  "location": "QuoteYourNamePageSteps.iReachOnQuoteYourNamePage()"
});
formatter.result({
  "duration": 104000,
  "status": "passed"
});
formatter.match({
  "location": "QuoteYourNamePageSteps.iVerifyTheFieldYourTitle()"
});
formatter.result({
  "duration": 142880600,
  "status": "passed"
});
formatter.match({
  "location": "QuoteYourNamePageSteps.iVerifyTheEnterYourFirstNameField()"
});
formatter.result({
  "duration": 63923100,
  "status": "passed"
});
formatter.match({
  "location": "QuoteYourNamePageSteps.iVerifyTheEnterYourLastName()"
});
formatter.result({
  "duration": 53098300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Next",
      "offset": 20
    }
  ],
  "location": "QuoteYourNamePageSteps.iVerifyTheFieldButton(String)"
});
formatter.result({
  "duration": 55879000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "View our ",
      "offset": 19
    }
  ],
  "location": "QuoteYourNamePageSteps.iVerifyTheText(String)"
});
formatter.result({
  "duration": 2056288600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Privacy Information",
      "offset": 19
    }
  ],
  "location": "QuoteYourNamePageSteps.iVerifyTheLink(String)"
});
formatter.result({
  "duration": 2050058800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "for details on how we use and protect your data.",
      "offset": 23
    }
  ],
  "location": "QuoteYourNamePageSteps.iVerifyTheTextLink(String)"
});
formatter.result({
  "duration": 50930900,
  "status": "passed"
});
formatter.after({
  "duration": 147900,
  "status": "passed"
});
formatter.before({
  "duration": 4290182300,
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
  "duration": 2002834800,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iVerifyGetAQuoteIsLinkToClick()"
});
formatter.result({
  "duration": 2102951800,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnGetAQuoteLink()"
});
formatter.result({
  "duration": 2054475100,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Fill all the details under the \u0027quote-your-name\u0027 page and click on Next button",
  "description": "",
  "id": "healthinsurance-test;fill-all-the-details-under-the-\u0027quote-your-name\u0027-page-and-click-on-next-button",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "I reach on \u0027quote-your-name\u0027 page",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I select the Your title",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter the firstname",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter the lastname",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on Next button",
  "keyword": "Then "
});
formatter.match({
  "location": "QuoteYourNamePageSteps.iReachOnQuoteYourNamePage()"
});
formatter.result({
  "duration": 47000,
  "status": "passed"
});
formatter.match({
  "location": "QuoteYourNamePageSteps.iSelectTheYourTitle()"
});
formatter.result({
  "duration": 270376800,
  "status": "passed"
});
formatter.match({
  "location": "QuoteYourNamePageSteps.iEnterTheFirstname()"
});
formatter.result({
  "duration": 181501400,
  "status": "passed"
});
formatter.match({
  "location": "QuoteYourNamePageSteps.iEnterTheLastname()"
});
formatter.result({
  "duration": 153357800,
  "status": "passed"
});
formatter.match({
  "location": "QuoteYourNamePageSteps.iClickOnNextButton()"
});
formatter.result({
  "duration": 1708380900,
  "status": "passed"
});
formatter.after({
  "duration": 54300,
  "status": "passed"
});
});