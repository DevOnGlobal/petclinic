Feature: Manage owners

  Scenario: Search for owner with unique last name
    Given there is an owner "Jeff Black"
    When I search for "Black"
    Then I should get the details of "Jeff Black" back

  Scenario: Search for owners with same last name
    Given there is an owner "Betty Davis"
    And there is an owner "Harold Davis"
    When I search for "Davis"
    Then I should get 3 results back

  Scenario: Search non existing owner
    When I search for "Nonexistingowner"
    Then I should get no results back
