package uk.co.bupa.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import uk.co.bupa.pages.QuoteCoverForCustomerPage;

public class QuoteCoverForCustomerPageSteps {


    @And("^I reach on Quote cover for customer page successfully$")
    public void iReachOnQuoteCoverForCustomerPageSuccessfully() {
    }

    @And("^I select the option \"([^\"]*)\" from dropdown menu$")
    public void iSelectTheOptionFromDropdownMenu(String quote) throws InterruptedException {
        new QuoteCoverForCustomerPage().clickOnDropDownMenu();
        new QuoteCoverForCustomerPage().selectDroDownMenuAndSelectQuoteCover(quote);
    }
}