package uk.co.bupa.steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import uk.co.bupa.pages.QuoteYourNamePage;

public class QuoteYourNamePageSteps {

    @When("^I reach on 'quote-your-name' page$")
    public void iReachOnQuoteYourNamePage() {
    }

    @And("^I navigate to health-insurance page successfully$")
    public void iNavigateToHealthInsurancePageSuccessfully() {
    }

    @Then("^I verify the field 'your Title'$")
    public void iVerifyTheFieldYourTitle() {
        String expectedTitle = "Your title";
        String actualTitle = new QuoteYourNamePage().getYourTitle();
        Assert.assertEquals("Verify your title field", expectedTitle, actualTitle);
    }

    @And("^I verify the 'Enter your first name' field$")
    public void iVerifyTheEnterYourFirstNameField() {
        String expectedFirstName = "Enter your first name";
        String actualFirstName = new QuoteYourNamePage().getYourNameField();
        Assert.assertEquals("Verify Enter your first name field", expectedFirstName, actualFirstName);
    }

    @And("^I verify the 'Enter your last name'$")
    public void iVerifyTheEnterYourLastName() {
        String expectedLastName = "Enter your last name";
        String actualLastName = new QuoteYourNamePage().getYourLastNameField();
        Assert.assertEquals("Verify Enter your last name field", expectedLastName, actualLastName);
    }

    @And("^I verify the field \"([^\"]*)\" button$")
    public void iVerifyTheFieldButton(String button) {
        String actualButtonText = new QuoteYourNamePage().getNextButtonText();
        Assert.assertEquals("Verify the Next button text", button, actualButtonText);
    }

    @And("^I verify the text \"([^\"]*)\"$")
    public void iVerifyTheText(String linkText) throws InterruptedException {
        Assert.assertEquals("Verify the 'View our' text message", linkText, new QuoteYourNamePage().getText1ofThePage());
    }

    @And("^I verify the link \"([^\"]*)\"$")
    public void iVerifyTheLink(String link) throws InterruptedException {
        Assert.assertEquals("Verify the 'privacy information' link message", link, new QuoteYourNamePage().getText2ofThePage());
    }

    @And("^I verify the textLink \"([^\"]*)\"$")
    public void iVerifyTheTextLink(String text2) {
        Assert.assertEquals("Verify the 'for details on how we use and protect your data.' textLink message", text2, new QuoteYourNamePage().getText3ofThePage());
    }

    @And("^I select the Your title$")
    public void iSelectTheYourTitle() {
        new QuoteYourNamePage().selectYourTitle("Mrs");
    }

    @And("^I enter the firstname$")
    public void iEnterTheFirstname() {
        new QuoteYourNamePage().enterYourFirstName("Shilpa");
    }

    @And("^I enter the lastname$")
    public void iEnterTheLastname() {
        new QuoteYourNamePage().enterYourLastname("Patel");
    }

    @Then("^I click on Next button$")
    public void iClickOnNextButton() {
        new QuoteYourNamePage().clickOnNextButton();
    }
}