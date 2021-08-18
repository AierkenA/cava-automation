Feature: CAVA HomePage Validation


    Background:

        Given I am on the home page

    Scenario Outline: login as user
        When I click the order online button
        And  I click the sign in icon
        And I login with emailaddress and password <emailAddress> <password> into the text box
        And  I click the sign in button
        Then I should see oder delivery button

        Examples:
            | emailAddress            |  | password    |
            | "aldiyar8877@gmail.com" |  | "Mima8877!" |
