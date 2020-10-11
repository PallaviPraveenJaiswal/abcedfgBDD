Feature: Test Journey Binder Login Functionality

#01.   Verify Sign in with google account.
#02.   Verify Sign in with Facebook account.
#03.   Verify Login with registered email id and password.
#04.   Verify Login invalid email id and password cases.
#05.   Verify Login with blank email id and password
#06.   Verify Login with blank password
#07.   Verify Login with blank email id and enter password
#08.   Verify Login with email id and password which is not registered to JB.
#09.   Verify SignUp Link on Sign in page
  
  @Login
  Scenario Outline: Verify Sign in with google account.
    Given SignIn to Journey Binder with Google "<username>" and "<password>"
    When User navigate to Dashboard
    Then Click on user avatar button
    Then Click on SignOut

    Examples: 
      | username                   | password |
      | praveenjaiswalqa@gmail.com | amazon   |

  @Login
  Scenario Outline: Verify Sign in with Facebook account.
    Given SignIn to Journey Binder with Facebook "<username>" and "<password>"
    When User navigate to Dashboard
    Then Click on user avatar button
    Then Click on SignOut

    Examples: 
      | username               | password |
      | demo@journeybinder.com | amazon   |

  @Login
  Scenario Outline: Verify Login with registered email id and password.
    Given SignIn to Journey Binder with "<username>" and "<password>"
    When User select Get Started button
    Then validate floating message "<message>"
    Then User navigated to Dashboard screen
    Then Click on user avatar button
    Then Click on SignOut

    Examples: 
      | username                     | password     | message												   | 
      | frhbrrihzzhrgonugo@ttirv.net | Password!1   | You have successfully signed in to my.journeybinder.com! | 

  @Login
  Scenario Outline: Verify Login invalid email id and password cases.
    Given SignIn to Journey Binder with "<username>" and "<password>"
    When User select Get Started button
    Then validate floating message "<message>"

    Examples: 
      | username    | password | message                                                                                   |
      |             |          | The email address is badly formatted.                                                     |
      | abc@abc.com |          | The password is invalid or the user does not have a password.                             |
      |             | test@123 | The email address is badly formatted.                                                     |
      | abc@ab.com  | test@123 | There is no user record corresponding to this identifier. The user may have been deleted. |
      

  @Login
  Scenario: Verify SignUp Link on Sign in page
  Given User is on SignIn Page
  When User clicks on SignUp Link
  Then User navigate to SignUp page
  
