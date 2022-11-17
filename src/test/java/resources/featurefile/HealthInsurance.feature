@smoke
Feature:HealthInsurance Test

  As a,User I would like to visit BupaHealthInsurance website

  Background:I am on homepage
    When I Mouse over ‘Health Insurance’ under the mega menu
    Then I verify ‘Get a Quote’ is link to click
    And I click on ‘Get a Quote’ link


  Scenario: Verify the all fields available to enter the data under 'quote-your-name' page
    When I reach on 'quote-your-name' page
    Then I verify the field 'your Title'
    And I verify the 'Enter your first name' field
    And I verify the 'Enter your last name'
    And I verify the field "Next" button
    And I verify the text "View our "
    And I verify the link "Privacy Information"
    And I verify the textLink "for details on how we use and protect your data."


  Scenario:Fill all the details under the 'quote-your-name' page and click on Next button
    When I reach on 'quote-your-name' page
    And I select the Your title
    And I enter the firstname
    And I enter the lastname
    Then I click on Next button