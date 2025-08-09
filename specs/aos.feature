Feature: Individual AO Page
  As a visitor
  I want to view details about a specific Area of Operations (AO)
  So that I can learn more about its location, schedule, and leadership

  Scenario: Display navigational menus
    Given I am on the landing page
    Then I see the menu "Home"
    And I see the menu "Free Workout Locations"
    Then I do not see the menu "Test AO"
    When I click on the menu "Free Workout Locations"
    Then I see the menu "Test AO"
    
  Scenario: Navigation menus work
    Given I am on the landing page
    When I click on the menu "Free Workout Locations"
    And I click on the menu "Test AO"
    Then I see the text "Test AO"
    When I click on the menu "Home"
    Then I see the text "Our Mission"

  Scenario: Display details for an AO
    # name
    # locationName
    # locationDescription
    # meeting day/time
    # map
    # AOQ

  Scenario: Display not found page for bad slug
    Given I am on the AO page with slug "nonexisting-ao"
    Then I see the text "404"
    And I see the text "AO not found"
