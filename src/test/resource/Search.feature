Feature: Amazon Search

  Background:
    Given I open the page url
      | url |
      | http://www.amazon.co.uk |

  Scenario: Create account with an existent user
    Given I create a new account
      | username | email | password |
      | joanasilva | forrandomtestsandstuff@gmail.com | Password!123 |
    Then User already exists
      | result |
      | E-mail address already in use |

  Scenario: Login with wrong credentials
    Given I make login into the page
      | email | password |
      | forrandomtestsandstuff@gmail.com | Password123 |
    Then The login is wrong
      | result |
      | Your password is incorrect |

  Scenario: Login with correct credentials
    Given I make login into the page
      | email | password |
      | forrandomtestsandstuff@gmail.com | Password-12345 |
    Then The login is correct
      | result |
      | Hello, randomtestsandstuff |

  Scenario: Search from book author
    Given I make login into the page
      | email | password |
      | forrandomtestsandstuff@gmail.com | Password-12345 |
    And I make a search for a book
      | search |
      | Chasing Excellence |
    And I check the author
      | author |
      | Bergeron |

  Scenario: Search from user comment
    Given I make login into the page
      | email | password |
      | forrandomtestsandstuff@gmail.com | Password-12345 |
    And I make a search for a book
      | search |
      | Chasing Excellence |
    And I search from user comment
      | search |
      | Cerith Leighton Watkins |

  Scenario: Search from rating comment
    Given I make login into the page
      | email | password |
      | forrandomtestsandstuff@gmail.com | Password-12345 |
    And I make a search for a book
      | search |
      | Chasing Excellence |
    And I search from rating comment
      | search |
      | 1 star only |

  Scenario: Search from date comment
    Given I make login into the page
      | email | password |
      | forrandomtestsandstuff@gmail.com | Password-12345 |
    And I make a search for a book
      | search |
      | Chasing Excellence |
    And I search from date comment
      | search |
      | September 17, 2017 |

  Scenario: Perform a search
    Given I make login into the page
      | email | password |
      | forrandomtestsandstuff@gmail.com | Password-12345 |
    And I make a search
      | search | found |
      | avengers | Avengers Assemble |
    And I search from description
      | description |
      | S.H.I.E.L.D |

  Scenario: Take a screenshot
    Given I make login into the page
      | email | password |
      | forrandomtestsandstuff@gmail.com | Password-12345 |
    And I make a search
      | search | found |
      | avengers | Avengers Assemble |
    Then I take a screenshot in the trailer