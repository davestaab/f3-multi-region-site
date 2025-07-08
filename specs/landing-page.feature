Feature: Landing Page

  Scenario: Should have the region title
    Given I am on the landing page
    When I look at the page
    Then I should see the text "Knoxville"