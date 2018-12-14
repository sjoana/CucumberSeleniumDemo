$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resource/Search.feature");
formatter.feature({
  "name": "Amazon Search",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I open the page url",
  "rows": [
    {
      "cells": [
        "url"
      ]
    },
    {
      "cells": [
        "http://www.amazon.co.uk"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "Test_Steps.openURL(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Create account with an existent user",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I create a new account",
  "rows": [
    {
      "cells": [
        "username",
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "joanasilva",
        "forrandomtestsandstuff@gmail.com",
        "Password!123"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "Test_Steps.createAccount(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User already exists",
  "rows": [
    {
      "cells": [
        "result"
      ]
    },
    {
      "cells": [
        "E-mail address already in use"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Test_Steps.verifySuccessful(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I open the page url",
  "rows": [
    {
      "cells": [
        "url"
      ]
    },
    {
      "cells": [
        "http://www.amazon.co.uk"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "Test_Steps.openURL(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with wrong credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I make login into the page",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "forrandomtestsandstuff@gmail.com",
        "Password123"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "Test_Steps.makeLogin(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The login is wrong",
  "rows": [
    {
      "cells": [
        "result"
      ]
    },
    {
      "cells": [
        "Your password is incorrect"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Test_Steps.checkLogin(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I open the page url",
  "rows": [
    {
      "cells": [
        "url"
      ]
    },
    {
      "cells": [
        "http://www.amazon.co.uk"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "Test_Steps.openURL(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with correct credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I make login into the page",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "forrandomtestsandstuff@gmail.com",
        "Password-12345"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "Test_Steps.makeLogin(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The login is correct",
  "rows": [
    {
      "cells": [
        "result"
      ]
    },
    {
      "cells": [
        "Hello, randomtestsandstuff"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Test_Steps.checkLogin(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I open the page url",
  "rows": [
    {
      "cells": [
        "url"
      ]
    },
    {
      "cells": [
        "http://www.amazon.co.uk"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "Test_Steps.openURL(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search from book author",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I make login into the page",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "forrandomtestsandstuff@gmail.com",
        "Password-12345"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "Test_Steps.makeLogin(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make a search for a book",
  "rows": [
    {
      "cells": [
        "search"
      ]
    },
    {
      "cells": [
        "Chasing Excellence"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Test_Steps.search(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I check the author",
  "rows": [
    {
      "cells": [
        "author"
      ]
    },
    {
      "cells": [
        "Bergeron"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Test_Steps.author(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I open the page url",
  "rows": [
    {
      "cells": [
        "url"
      ]
    },
    {
      "cells": [
        "http://www.amazon.co.uk"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "Test_Steps.openURL(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search from user comment",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I make login into the page",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "forrandomtestsandstuff@gmail.com",
        "Password-12345"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "Test_Steps.makeLogin(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make a search for a book",
  "rows": [
    {
      "cells": [
        "search"
      ]
    },
    {
      "cells": [
        "Chasing Excellence"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Test_Steps.search(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search from user comment",
  "rows": [
    {
      "cells": [
        "search"
      ]
    },
    {
      "cells": [
        "Cerith Leighton Watkins"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Test_Steps.searchFrom(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I open the page url",
  "rows": [
    {
      "cells": [
        "url"
      ]
    },
    {
      "cells": [
        "http://www.amazon.co.uk"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "Test_Steps.openURL(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search from rating comment",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I make login into the page",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "forrandomtestsandstuff@gmail.com",
        "Password-12345"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "Test_Steps.makeLogin(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make a search for a book",
  "rows": [
    {
      "cells": [
        "search"
      ]
    },
    {
      "cells": [
        "Chasing Excellence"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Test_Steps.search(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search from rating comment",
  "rows": [
    {
      "cells": [
        "search"
      ]
    },
    {
      "cells": [
        "1 star only"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Test_Steps.searchFrom(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I open the page url",
  "rows": [
    {
      "cells": [
        "url"
      ]
    },
    {
      "cells": [
        "http://www.amazon.co.uk"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "Test_Steps.openURL(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search from date comment",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I make login into the page",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "forrandomtestsandstuff@gmail.com",
        "Password-12345"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "Test_Steps.makeLogin(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make a search for a book",
  "rows": [
    {
      "cells": [
        "search"
      ]
    },
    {
      "cells": [
        "Chasing Excellence"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Test_Steps.search(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search from date comment",
  "rows": [
    {
      "cells": [
        "search"
      ]
    },
    {
      "cells": [
        "September 17, 2017"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Test_Steps.searchFrom(String,DataTable)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat stepDefinition.Test_Steps.searchFrom(Test_Steps.java:252)\r\n\tat ✽.I search from date comment(src/test/resource/Search.feature:72)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I open the page url",
  "rows": [
    {
      "cells": [
        "url"
      ]
    },
    {
      "cells": [
        "http://www.amazon.co.uk"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "Test_Steps.openURL(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Perform a search",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I make login into the page",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "forrandomtestsandstuff@gmail.com",
        "Password-12345"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "Test_Steps.makeLogin(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make a search",
  "rows": [
    {
      "cells": [
        "search",
        "found"
      ]
    },
    {
      "cells": [
        "avengers",
        "Avengers Assemble"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Test_Steps.movieSearch(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search from description",
  "rows": [
    {
      "cells": [
        "description"
      ]
    },
    {
      "cells": [
        "S.H.I.E.L.D"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Test_Steps.searchDescription(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I open the page url",
  "rows": [
    {
      "cells": [
        "url"
      ]
    },
    {
      "cells": [
        "http://www.amazon.co.uk"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "Test_Steps.openURL(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Take a screenshot",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I make login into the page",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "forrandomtestsandstuff@gmail.com",
        "Password-12345"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "Test_Steps.makeLogin(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make a search",
  "rows": [
    {
      "cells": [
        "search",
        "found"
      ]
    },
    {
      "cells": [
        "avengers",
        "Avengers Assemble"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Test_Steps.movieSearch(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I take a screenshot in the trailer",
  "keyword": "Then "
});
formatter.match({
  "location": "Test_Steps.takeScreenshot()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});