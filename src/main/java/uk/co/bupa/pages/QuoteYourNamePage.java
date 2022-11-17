package uk.co.bupa.pages;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import uk.co.bupa.utility.Utility;


public class QuoteYourNamePage extends Utility {
    public QuoteYourNamePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//label[contains(text(),'Your title')]")
    WebElement yourTitle;

    @CacheLookup
    @FindBy(xpath = "//label[contains(text(),'Enter your first name')]")
    WebElement yourFirstName;

    @CacheLookup
    @FindBy(xpath = "//label[contains(text(),'Enter your last name')]")
    WebElement yourLastName;

    @CacheLookup
    @FindBy(xpath = "//button[contains(text(),'Next')]")
    WebElement nextButton;

    @CacheLookup
    @FindBy(xpath = "//span[contains(text(),'View our')]")
    WebElement textLink1;

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Privacy Information')]")
    WebElement Link;

    @CacheLookup
    @FindBy(xpath = "//span[contains(text(),'for details on how we use and protect your data.')]")
    WebElement textLink2;

    @CacheLookup
    @FindBy(xpath = "//select[contains(@id,'Prospect_ApplicantDetails_TitleCode')]")
    WebElement dropDownMenu;

    @CacheLookup
    @FindBy(id = "Prospect_ApplicantDetails_FirstName")
    WebElement yourFirstNameField;

    @CacheLookup
    @FindBy(name = "Prospect.ApplicantDetails.LastName")
    WebElement yourLastNameField;

    public String getYourTitle() {
        return yourTitle.getText();
    }

    public String getYourNameField() {
        return yourFirstName.getText();
    }

    public String getYourLastNameField() {
        return yourLastName.getText();
    }

    public String getNextButtonText() {
        return nextButton.getText();
    }

    public String getText1ofThePage() throws InterruptedException {
        Thread.sleep(2000);
        return textLink1.getText();
    }

    public String getText2ofThePage() throws InterruptedException {
        Thread.sleep(2000);
        return Link.getText();
    }

    public String getText3ofThePage() {
        return textLink2.getText();
    }

    public void selectYourTitle(String value){
       selectByVisibleTextFromDropDown(dropDownMenu,value);

    }

    public void enterYourFirstName(String firstName) {
        sendTextToElement(yourFirstNameField, firstName);
    }

    public void enterYourLastname(String lastName){
        sendTextToElement(yourLastNameField,lastName);
    }

    public void clickOnNextButton(){
        clickOnElement(nextButton);
    }
}