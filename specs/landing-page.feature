Feature: Landing Page

  Scenario: Displays the region title
    Given I am on the landing page
    Then I see a heading with the text "Test Tenant"


  Scenario: Displays key landing page content
    Given I am on the landing page
    Then I see the text "Our Mission"
    And I see the text "Our Workouts"
    And I see the text "What to Expect"
    And I see the text "Workouts near you"
    And I see the text "Leave no man behind, and leave no man where you find him."
