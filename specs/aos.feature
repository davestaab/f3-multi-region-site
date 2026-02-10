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

  Scenario: Navigaton menu is sorted alphabetically
    Given I am on the landing page
    When I click on the menu "Free Workout Locations"
    Then I see the options in the menu in the following order:
      | Home                            |
      | Free Workout Locations          |
      | AO without location description |
      | Beta                            |
      | Gamma                           |
      | Test AO                         |

  Scenario: Display details for an AO
    Given I am on the AO page with slug "test"
    Then I see the text "Test AO"
    And I see the text "Bootcamp:  Monday, Wednesday, Friday 5:30 - 6:15 AM"
    And I see the text "AOQ: Tester"
    And I see the text "Location: The Ao Location"
    And I see the text "In the obvious spot"
    And I see the element titled "Location Description"
    And I see the text "Map"
    And I see the element titled "AO Map"

  Scenario: AO location description is optional
    Given I am on the AO page with slug "no-description"
    Then I see the text "AO without location description"
    And I see the text "Location: The Ao Location"
    And I do not see the element titled "Location Description"

  Scenario: Display not found page for bad slug
    Given I am on the AO page with slug "nonexisting-ao"
    Then I see the text "404"
    And I see the text "AO not found"
