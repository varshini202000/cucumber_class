

Feature: To validate the login functionality

Scenario Outline: user validate the valid username and password
Given To user launch chrome and pass valid url
When user enter valid "<username>" and "<password>"
Then user click the login button
Then to user close browser

Examples
|username|password|
|standard_user|secret_sauce|
|performance_glitch_user|secret_sauce|
|error_user|secret_sauce|
|locked_out_user|secret_sauce|
|visual_user|secret_sauce|



Scenario: user validate the invalid username and password
Given To user launch chrome and pass valid url
When user enter invalid username and password
Then user click the login button
Then to user close browser




#@regression @sanity

#Feature: To validate login function

#Scenario: To user login with valid username and valid password
#Given To user launch browser
#When user enter valid username and password
#Then user click login button


#@sanity

#Scenario: To user login with invalid username and invalid password
#Given to user launch browser
#When user enter invalid username and password
#Then user click login button
