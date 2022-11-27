package uk.co.bupa.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import uk.co.bupa.utility.Utility;

import java.util.List;

public class QuoteCoverForCustomerPage extends Utility {

    public QuoteCoverForCustomerPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//ul[contains(@aria-labelledby,'Prospect_CoverDetail_CoverCode-button')]//li//div")
    List<WebElement> dropDownForCustomerQuote;

    @CacheLookup
    @FindBy(xpath = "//span[@id='Prospect_CoverDetail_CoverCode-button']")
    WebElement onDropDownMenu;


    public void selectDroDownMenuAndSelectQuoteCover(String value1) throws InterruptedException {
        Thread.sleep(2000);
        for (WebElement list : dropDownForCustomerQuote) {
            if (list.getText().equals(value1)) {
                list.click();
                break;
            }

        }
    }

    public void clickOnDropDownMenu() {
        clickOnElement(onDropDownMenu);
    }

}