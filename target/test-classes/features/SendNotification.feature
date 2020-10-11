 Feature: Test Journey Binder Notification to user functionality

#01. Verify Email Notification.
#02. Verify Push Notification.
#03. Verify SMS Notification.

 @Notification
  Scenario Outline: Verify Email Notification.
    Given SignIn to Journey Binder with "<username>" and "<password>"
    When User select Get Started button
    Then validate floating message "<message>"
    Then User navigated to Dashboard screen
    Then User select menu admin management
    Then User hide the main menu
    Then User select Users Tab
    Then User select guide notification button "<guideName>"
    Then User select type of notification as Email
    Then User enter subject "<subject>"
    Then User enter custom body "<cbody>"
    Then User click on Send button
    #Then User enter Email template
    #Then Click on user avatar button
    #Then Click on SignOut

    Examples: 
      | username                     | password     | guideName       | subject | cbody    | message												   | 
      | frhbrrihzzhrgonugo@ttirv.net | Password!1   | Savalas Colbert |  TestSub | TestBody | You have successfully signed in to my.journeybinder.com! | 

       
 @Notification
  Scenario Outline: Verify Push Notification.
    Given SignIn to Journey Binder with "<username>" and "<password>"
    When User select Get Started button
    Then validate floating message "<message>"
    Then User navigated to Dashboard screen
    Then User select menu admin management
    Then User hide the main menu
    Then User select Users Tab
    Then User select guide notification button "<guideName>"
    Then User select type of notification as Push
    Then User enter subject "<subject>"
    Then User enter custom body "<cbody>"
    Then User click on Send button
    #Then User enter Email template
    #Then Click on user avatar button
    #Then Click on SignOut

    Examples: 
      | username                     | password     | guideName       | subject | cbody    | message												   | 
      | frhbrrihzzhrgonugo@ttirv.net | Password!1   | Savalas Colbert | TestSub | TestBody | You have successfully signed in to my.journeybinder.com! | 
      
 
  
 @Notification
  Scenario Outline: Verify SMS Notification.
    Given SignIn to Journey Binder with "<username>" and "<password>"
    When User select Get Started button
    Then validate floating message "<message>"
    Then User navigated to Dashboard screen
    Then User select menu admin management
    Then User hide the main menu
    Then User select Users Tab
    Then User select guide notification button "<guideName>"
    Then User select type of notification as SMS
    Then User enter custom body "<cbody>"
    Then User click on Send button
    #Then User enter Email template
    #Then Click on user avatar button
    #Then Click on SignOut

    Examples: 
      | username                     | password     | guideName       | subject | cbody    | message												   | 
      | frhbrrihzzhrgonugo@ttirv.net | Password!1   | Savalas Colbert | TestSub | TestBody | You have successfully signed in to my.journeybinder.com! | 
 