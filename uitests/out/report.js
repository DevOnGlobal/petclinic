$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("nl/prowareness/springpetclinic/uitests/OwnerFeature.feature");
formatter.feature({
  "line": 1,
  "name": "Manage owners",
  "description": "",
  "id": "manage-owners",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3626586969,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Search for owner with unique last name",
  "description": "",
  "id": "manage-owners;search-for-owner-with-unique-last-name",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "there is an owner \"Jeff Black\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I search for \"Black\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should get the details of \"Jeff Black\" back",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Jeff Black",
      "offset": 19
    }
  ],
  "location": "OwnerSteps.there_is_an_owner(String)"
});
formatter.result({
  "duration": 105329377,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Black",
      "offset": 14
    }
  ],
  "location": "OwnerSteps.i_search_for(String)"
});
formatter.result({
  "duration": 2836274949,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeff Black",
      "offset": 29
    }
  ],
  "location": "OwnerSteps.i_should_get_one_result_back(String)"
});
formatter.result({
  "duration": 192462947,
  "status": "passed"
});
formatter.after({
  "duration": 1645026966,
  "status": "passed"
});
formatter.before({
  "duration": 2743593856,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Search for owners with same last name",
  "description": "",
  "id": "manage-owners;search-for-owners-with-same-last-name",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "there is an owner \"Betty Davis\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "there is an owner \"Harold Davis\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I search for \"Davis\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I should get 2 results back",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Betty Davis",
      "offset": 19
    }
  ],
  "location": "OwnerSteps.there_is_an_owner(String)"
});
formatter.result({
  "duration": 60299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harold Davis",
      "offset": 19
    }
  ],
  "location": "OwnerSteps.there_is_an_owner(String)"
});
formatter.result({
  "duration": 56878,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Davis",
      "offset": 14
    }
  ],
  "location": "OwnerSteps.i_search_for(String)"
});
formatter.result({
  "duration": 992797030,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 13
    }
  ],
  "location": "OwnerSteps.i_should_get_n_results_back(int)"
});
formatter.result({
  "duration": 226257420,
  "status": "passed"
});
formatter.after({
  "duration": 1514547707,
  "status": "passed"
});
formatter.before({
  "duration": 2733357966,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Search non existing owner",
  "description": "",
  "id": "manage-owners;search-non-existing-owner",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I search for \"Nonexistingowner\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I should get no results back",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Nonexistingowner",
      "offset": 14
    }
  ],
  "location": "OwnerSteps.i_search_for(String)"
});
formatter.result({
  "duration": 1865961808,
  "status": "passed"
});
formatter.match({
  "location": "OwnerSteps.i_should_get_no_results_back()"
});
formatter.result({
  "duration": 273346359,
  "status": "passed"
});
formatter.after({
  "duration": 1535869234,
  "status": "passed"
});
});