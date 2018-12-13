# Cucumber Selenium Demo

Amazon.co.uk interface tests with Cucumber and Selenium tools

### Prerequisites

- Java JDK
- Browser Chrome 

### Installing

You will use the Java compiler javac to compile your Java programs and the Java interpreter java to run them. You should skip the first step if Java is already installed on your machine.

Download and install the latest version of the Java Platform, Standard Edition Development Kit (Java SE 8, Update 191). Note the installation directory for later—probably something like C:\Program Files\Java\jdk1.8.0_191\bin.
To make sure that Windows can find the Java compiler and interpreter:
```
Select Start -> Computer -> System Properties -> Advanced system settings -> Environment Variables -> System variables -> PATH.

Add C:\Program Files\Java\jdk1.8.0_191\bin; to the PATH variable.
Click OK three times.
```

You will type commands in an application called the Command Prompt.

Launch the command prompt via All Programs -> Accessories -> Command Prompt. (If you already had a command prompt window open, close it and launch a new one.) You should see the command prompt; it will look something like:
```
Microsoft Windows [Version 10.0.14393]
Copyright (c) 2009 Microsoft Corporation. All rights reserved.
```

To check that you have the right version of Java installed, type the text in boldface below. You should see something similar to the information printed below. (It's important that you see the number 1.6 or 1.5 for the Java version number, but the rest is not critical.)

```
C:\Users\username>java -version
java version "1.8.0_191"
Java(TM) 2 Runtime Environment, Standard Edition (build 1.8.0_191-b12)
Java HotSpot(TM) 64-Bit Server VM (build 25.191-b12, mixed mode)
```

Then type:
```
C:\Users\username>javac -version
javac 1.8.0_191
```

## Running the tests

To run the test suite, download the project as a zip file.
Follow this steps:

1. Extract the zip file to a folder;
2. In Windows, open the command line terminal;
2. Go to the directory where the zip was extracted;
4. Execute with the following command:

```
java -jar CucumberSeleniumDemo.jar
```

### Tests Organization

This tests are developed with cucumber framework with the following structure:

Search.feature

This file has the test scenarios that were developed to test the following requirements. 

Background: this step is run before the test scenarios

Scenario: Create account with an existent user
Scenario: Login with wrong credentials
Scenario: Login with correct credentials
Scenario: Search from book author
Scenario: Search from user comment
Scenario: Search from date comment
Scenario: Perform a search
Scenario: Take a screenshot 

The previous scenarios are composed by a set of steps. For each step, we have the respective description in the file Test_Steps.class


This feature is called on the file TestRunner which runs all scenarios and reports the results.

```
Feature: Buy Action

  Background:                 
    Given I open the page url 

  Scenario: Create account with an existent user 
    Given I create a new account                 
    Then User already exists                    


  Background:         
    Given I open the page url 

  Scenario: Login with wrong credentials 
    Given I make login into the page    
    Then The login is wrong            


  Background:                
    Given I open the page url 

  Scenario: Login with correct credentials 
    Given I make login into the page      
    Then The login is correct           


  Background:                 
    Given I open the page url 

  Scenario: Search from book author  
    Given I make login into the page 
    And I make a search for a book  
    And I check the author          

  Background:                 
    Given I open the page url 

  Scenario: Search from user comment 
    Given I make login into the page 
    And I make a search for a book 
    And I search from user comment 

  Background:                
    Given I open the page url

  Scenario: Search from rating comment 
    Given I make login into the page   
    And I make a search for a book     
    And I search from rating comment  


  Background:              
    Given I open the page url 

  Scenario: Search from date comment 
    Given I make login into the page
    And I make a search for a book 
    And I search from date comment 
      java.lang.AssertionError
      	at org.junit.Assert.fail(Assert.java:86)
      	at org.junit.Assert.assertTrue(Assert.java:41)
      	at org.junit.Assert.assertTrue(Assert.java:52)
      	at stepDefinition.Test_Steps.searchFrom(Test_Steps.java:225)
      	at ?.And I search from date comment(Search.feature:72)

  Background:                
    Given I open the page url

  Scenario: Perform a search      
    Given I make login into the page 
    And I make a search              
    And I search from description   

  Background:                
    Given I open the page url 

  Scenario: Take a screenshot             
    Given I make login into the page       
    And I make a search                     
    Then I take a screenshot in the trailer 

Failed scenarios:
# Scenario: Search from date comment

9 Scenarios (1 failed, 8 passed)
33 Steps (1 failed, 32 passed)
3m40,617s

java.lang.AssertionError
	at org.junit.Assert.fail(Assert.java:86)
	at org.junit.Assert.assertTrue(Assert.java:41)
	at org.junit.Assert.assertTrue(Assert.java:52)
	at stepDefinition.Test_Steps.searchFrom(Test_Steps.java:225)
	at ?.And I search from date comment(Search.feature:72)
```

Now, in the folder you can find:
- Target folder: Reports in JSON/XML and HTML format. Open the folder “cucumber-html-reports” and open “report-feature_src-test-resource-Search-feature.html” to see the execution results.
- Screenshots folder: Screenshot of the scenario 'Take a screenshot'


## Built With

* [Cucucmber](https://cucumber.io/) - The framework used to Behaviour-Driven Development
* [Maven](https://maven.apache.org/) - Dependency Management
* [Selenium](https://www.seleniumhq.org/) - Tool to automate webbrowser


## Authors

* **Joana Silva** - *s.joana@outlook.pt*

