Feature: Landing Page
  As a visitor
  I want to understand the purpose of the site when I land on the homepage
  So that I can quickly learn about the region and its activities

  Scenario: Display the region title
    Given I am on the landing page
    Then I see a heading containing "Test Tenant"

  Scenario: Display key landing page content
    Given I am on the landing page
    Then I see the text "Our Mission"
    And I see the text "Our Workouts"
    And I see the text "What to Expect"
    And I see the text "Workouts near you"
    And I see the text "Leave no man behind, and leave no man where you find him."

  Scenario: Display the group image