Feature: Test Journey Binder Sign Up Functionality

#01.   Verify Sign Up with google account.
#02.   Verify Sign Up with Facebook account.
#03.   Verify Sign Up with  email id and password.
#04.   Verify Sign Up invalid email id and password cases.
#05.   Verify Sign Up with blank email id and password
#06.   Verify Sign Up with blank password
#07.   Verify Sign Up with blank email id and enter password
#08.   Verify Sign Up with email id and password which is to JB.
#09.   Verify SignIn Link on Sign Up page
  
  @SignUp
  Scenario Outline: Verify Sign Up with google account.
    Given SignUp to Journey Binder with Google "<username>" and "<password>"
    When User navigate to Dashboard
    Then Click on user avatar button
    Then Click on SignOut

    Examples: 
      | username                   | password |
      | praveenjaiswalqa@gmail.com | amazon   |

 
  @SignUp
  Scenario Outline: Verify Sign Up with Facebook account.
    Given SignUp to Journey Binder with Facebook "<username>" and "<password>"
    When User navigate to Dashboard
    Then Click on user avatar button
    Then Click on SignOut

    Examples: 
      | username                   | password |
      | praveenjaiswalqa@gmail.com | amazon   |
      
  @SignUp
  Scenario Outline: Verify Sign Up with email id and password.
    Given SignUp to Journey Binder with "<username>" and "<password>"
    When User verify message "<expMsg>"
    Then User navigate to Dashboard
    Then Click on user avatar button
    Then Click on SignOut

    Examples: 
      | username  | password | expMsg 												   |
      | journey   | amazon   | You have successfully signed up to my.journeybinder.com |
      |           | anasod   | You have successfully signed up to my.journeybinder.com |
      | acsws     | dfksfk   | You have successfully signed up to my.journeybinder.com |
      | @#$%^%    | WEE@#cvx | You have successfully signed up to my.journeybinder.com |
 
  @SignUp
  Scenario Outline: Verify Sign Up with invalid case.
    Given Verify SignUp to Journey Binder with "<username>" and "<password>"
    When User verify error message "<expMsg>"
   
    Examples: 
      | username  | password | expMsg 																														 | 												  
      |    		  | 	     | Password should be eight character long contains at least one uppercase, one lowercase, one number and one special character! |
       
 @SignUp
  Scenario: Verify SignIn Link on Sign Up page
  Given User is on SignIn Page
  When User clicks on SignUp Link
  Then User navigate to SignUp page
  Then User verify SignIn Link on SignUp Page
 