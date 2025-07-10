Feature: Landing Page

  Scenario: Should have the region title
    Given I am on the landing page
    Then I should see the text "Knoxville"

  Scenario: Should have landing page content
    Given I am on the landing page
    Then I should see the text "What is F3?"