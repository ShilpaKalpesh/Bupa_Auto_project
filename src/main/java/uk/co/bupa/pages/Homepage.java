package uk.co.bupa.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import uk.co.bupa.utility.Utility;

public class Homepage extends Utility {
    public Homepage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(id = "onetrust-accept-btn-handler")
    WebElement acceptCookies;

    @CacheLookup
    @FindBy(xpath = "//header/div[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[1]/ul[1]/li[2]/a[1]")
    WebElement getAQuoteLink;

    @CacheLookup
    @FindBy(xpath = "/html/body/div[1]/div[1]/header/div/div[3]/div/div/nav/div/ul[1]/li[1]/a")
    WebElement healthInsurance;


    public void clickOnAcceptCookies() {
        clickOnElement(acceptCookies);
    }

    public String verifyGetAQuoteLinkText() throws InterruptedException {
        Thread.sleep(2000);
        return getAQuoteLink.getText();
    }

    public void clickOnGetAQuoteLink() {
        clickOnElement(getAQuoteLink);
    }

    public void mouseHoverOnHealthInsurance() {
        mouseHoverToElement(healthInsurance);
    }
}