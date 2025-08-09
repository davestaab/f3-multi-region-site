Feature: Individual AO Page
  As a visitor
  I want to view details about a specific Area of Operations (AO)
  So that I can learn more about its location, schedule, and leadership

  Scenario: Display navigational menus

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
