package uk.co.bupa.steps;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import uk.co.bupa.pages.Homepage;

public class HomePageSteps {

    @When("^I Mouse over ‘Health Insurance’ under the mega menu$")
    public void iMouseOverHealthInsuranceUnderTheMegaMenu() {
        new Homepage().clickOnAcceptCookies();
        new Homepage().mouseHoverOnHealthInsurance();
    }

    @Then("^I verify ‘Get a Quote’ is link to click$")
    public void iVerifyGetAQuoteIsLinkToClick() throws InterruptedException {
        String expectedResult = "Get a quote";
        String actualResult = new Homepage().verifyGetAQuoteLinkText();
        Assert.assertEquals("verify 'Get a Quote' link", expectedResult, actualResult);
    }

    @And("^I click on ‘Get a Quote’ link$")
    public void iClickOnGetAQuoteLink() {
        new Homepage().clickOnGetAQuoteLink();
    }
}