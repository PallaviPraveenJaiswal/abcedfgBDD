$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Test Journey Binder Login Functionality",
  "description": "",
  "id": "test-journey-binder-login-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#01.   Verify Sign in with google account."
    },
    {
      "line": 4,
      "value": "#02.   Verify Sign in with Facebook account."
    },
    {
      "line": 5,
      "value": "#03.   Verify Login with registered email id and password."
    },
    {
      "line": 6,
      "value": "#04.   Verify Login invalid email id and password cases."
    },
    {
      "line": 7,
      "value": "#05.   Verify Login with blank email id and password"
    },
    {
      "line": 8,
      "value": "#06.   Verify Login with blank password"
    },
    {
      "line": 9,
      "value": "#07.   Verify Login with blank email id and enter password"
    },
    {
      "line": 10,
      "value": "#08.   Verify Login with email id and password which is not registered to JB."
    },
    {
      "line": 11,
      "value": "#09.   Verify SignUp Link on Sign in page"
    }
  ],
  "line": 14,
  "name": "Verify Sign in with google account.",
  "description": "",
  "id": "test-journey-binder-login-functionality;verify-sign-in-with-google-account.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "SignIn to Journey Binder with Google \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User navigate to Dashboard",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Click on user avatar button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Click on SignOut",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "test-journey-binder-login-functionality;verify-sign-in-with-google-account.;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 21,
      "id": "test-journey-binder-login-functionality;verify-sign-in-with-google-account.;;1"
    },
    {
      "cells": [
        "praveenjaiswalqa@gmail.com",
        "amazon"
      ],
      "line": 22,
      "id": "test-journey-binder-login-functionality;verify-sign-in-with-google-account.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7617654500,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify Sign in with google account.",
  "description": "",
  "id": "test-journey-binder-login-functionality;verify-sign-in-with-google-account.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "SignIn to Journey Binder with Google \"praveenjaiswalqa@gmail.com\" and \"amazon\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User navigate to Dashboard",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Click on user avatar button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Click on SignOut",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "praveenjaiswalqa@gmail.com",
      "offset": 38
    },
    {
      "val": "amazon",
      "offset": 71
    }
  ],
  "location": "LoginStep.SignIn_to_Journey_Binder_with_Google_and(String,String)"
});
formatter.result({
  "duration": 93499428300,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@type\u003d\u0027password\u0027]\"}\n  (Session info: chrome\u003d85.0.4183.83)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-1QIO4VG\u0027, ip: \u0027192.168.1.111\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.83, chrome: {chromedriverVersion: 85.0.4183.83 (94abc2237ae0c..., userDataDir: C:\\Users\\prave\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:53357}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: none, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: cc24dcda038a71037a3efcb87aeac71f\n*** Element info: {Using\u003dxpath, value\u003d//input[@type\u003d\u0027password\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy22.sendKeys(Unknown Source)\r\n\tat PagePanel.LoginPagePanel.switchWindowAndEnterGooglecredentials(LoginPagePanel.java:50)\r\n\tat StepDefinition.LoginStep.SignIn_to_Journey_Binder_with_Google_and(LoginStep.java:24)\r\n\tat ✽.Given SignIn to Journey Binder with Google \"praveenjaiswalqa@gmail.com\" and \"amazon\"(Login.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStep.user_navigate_to_Dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStep.click_on_user_avatar_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStep.click_on_SignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4343985700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 25,
  "name": "Verify Sign in with Facebook account.",
  "description": "",
  "id": "test-journey-binder-login-functionality;verify-sign-in-with-facebook-account.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "SignIn to Journey Binder with Facebook \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "User navigate to Dashboard",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "Click on user avatar button",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Click on SignOut",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "test-journey-binder-login-functionality;verify-sign-in-with-facebook-account.;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 32,
      "id": "test-journey-binder-login-functionality;verify-sign-in-with-facebook-account.;;1"
    },
    {
      "cells": [
        "demo@journeybinder.com",
        "amazon"
      ],
      "line": 33,
      "id": "test-journey-binder-login-functionality;verify-sign-in-with-facebook-account.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5790280800,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Verify Sign in with Facebook account.",
  "description": "",
  "id": "test-journey-binder-login-functionality;verify-sign-in-with-facebook-account.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "SignIn to Journey Binder with Facebook \"demo@journeybinder.com\" and \"amazon\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "User navigate to Dashboard",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "Click on user avatar button",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Click on SignOut",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@journeybinder.com",
      "offset": 40
    },
    {
      "val": "amazon",
      "offset": 69
    }
  ],
  "location": "LoginStep.SignIn_to_Journey_Binder_with_Facebook_and(String,String)"
});
formatter.result({
  "duration": 60143880700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[contains(text(),\u0027Sign In with Facebook\u0027)]\"}\n  (Session info: chrome\u003d85.0.4183.83)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-1QIO4VG\u0027, ip: \u0027192.168.1.111\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.83, chrome: {chromedriverVersion: 85.0.4183.83 (94abc2237ae0c..., userDataDir: C:\\Users\\prave\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:53412}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: none, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 290c73e4f3d7a297dfd4a872585f8f92\n*** Element info: {Using\u003dxpath, value\u003d//*[contains(text(),\u0027Sign In with Facebook\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy22.click(Unknown Source)\r\n\tat PagePanel.LoginPagePanel.clickOnSignInWithFacebookBtn(LoginPagePanel.java:32)\r\n\tat StepDefinition.LoginStep.SignIn_to_Journey_Binder_with_Facebook_and(LoginStep.java:31)\r\n\tat ✽.Given SignIn to Journey Binder with Facebook \"demo@journeybinder.com\" and \"amazon\"(Login.feature:26)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStep.user_navigate_to_Dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStep.click_on_user_avatar_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStep.click_on_SignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4393160700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 36,
  "name": "Verify Login with registered email id and password.",
  "description": "",
  "id": "test-journey-binder-login-functionality;verify-login-with-registered-email-id-and-password.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 35,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "SignIn to Journey Binder with \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "User select Get Started button",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "validate floating message \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "User navigated to Dashboard screen",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Click on user avatar button",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "Click on SignOut",
  "keyword": "Then "
});
formatter.examples({
  "line": 44,
  "name": "",
  "description": "",
  "id": "test-journey-binder-login-functionality;verify-login-with-registered-email-id-and-password.;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "message"
      ],
      "line": 45,
      "id": "test-journey-binder-login-functionality;verify-login-with-registered-email-id-and-password.;;1"
    },
    {
      "cells": [
        "frhbrrihzzhrgonugo@ttirv.net",
        "Password!1",
        "You have successfully signed in to my.journeybinder.com!"
      ],
      "line": 46,
      "id": "test-journey-binder-login-functionality;verify-login-with-registered-email-id-and-password.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5727088600,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Verify Login with registered email id and password.",
  "description": "",
  "id": "test-journey-binder-login-functionality;verify-login-with-registered-email-id-and-password.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 35,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "SignIn to Journey Binder with \"frhbrrihzzhrgonugo@ttirv.net\" and \"Password!1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "User select Get Started button",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "validate floating message \"You have successfully signed in to my.journeybinder.com!\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "User navigated to Dashboard screen",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Click on user avatar button",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "Click on SignOut",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "frhbrrihzzhrgonugo@ttirv.net",
      "offset": 31
    },
    {
      "val": "Password!1",
      "offset": 66
    }
  ],
  "location": "LoginStep.signIn_to_Journey_Binder_with_and(String,String)"
});
formatter.result({
  "duration": 10599456700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_select_Get_Started_button()"
});
formatter.result({
  "duration": 192518900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You have successfully signed in to my.journeybinder.com!",
      "offset": 27
    }
  ],
  "location": "LoginStep.validate_floating_message(String)"
});
formatter.result({
  "duration": 1758201300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_navigated_to_Dashboard_screen()"
});
formatter.result({
  "duration": 154867200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.click_on_user_avatar_button()"
});
formatter.result({
  "duration": 4575515100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.click_on_SignOut()"
});
formatter.result({
  "duration": 221727500,
  "status": "passed"
});
formatter.after({
  "duration": 8366858400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 49,
  "name": "Verify Login invalid email id and password cases.",
  "description": "",
  "id": "test-journey-binder-login-functionality;verify-login-invalid-email-id-and-password-cases.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 48,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "SignIn to Journey Binder with \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "User select Get Started button",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "validate floating message \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 54,
  "name": "",
  "description": "",
  "id": "test-journey-binder-login-functionality;verify-login-invalid-email-id-and-password-cases.;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "message"
      ],
      "line": 55,
      "id": "test-journey-binder-login-functionality;verify-login-invalid-email-id-and-password-cases.;;1"
    },
    {
      "cells": [
        "",
        "",
        "The email address is badly formatted."
      ],
      "line": 56,
      "id": "test-journey-binder-login-functionality;verify-login-invalid-email-id-and-password-cases.;;2"
    },
    {
      "cells": [
        "abc@abc.com",
        "",
        "The password is invalid or the user does not have a password."
      ],
      "line": 57,
      "id": "test-journey-binder-login-functionality;verify-login-invalid-email-id-and-password-cases.;;3"
    },
    {
      "cells": [
        "",
        "test@123",
        "The email address is badly formatted."
      ],
      "line": 58,
      "id": "test-journey-binder-login-functionality;verify-login-invalid-email-id-and-password-cases.;;4"
    },
    {
      "cells": [
        "abc@ab.com",
        "test@123",
        "There is no user record corresponding to this identifier. The user may have been deleted."
      ],
      "line": 59,
      "id": "test-journey-binder-login-functionality;verify-login-invalid-email-id-and-password-cases.;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5683529100,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "Verify Login invalid email id and password cases.",
  "description": "",
  "id": "test-journey-binder-login-functionality;verify-login-invalid-email-id-and-password-cases.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 48,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "SignIn to Journey Binder with \"\" and \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "User select Get Started button",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "validate floating message \"The email address is badly formatted.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 31
    },
    {
      "val": "",
      "offset": 38
    }
  ],
  "location": "LoginStep.signIn_to_Journey_Binder_with_and(String,String)"
});
formatter.result({
  "duration": 9158164400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_select_Get_Started_button()"
});
formatter.result({
  "duration": 213323900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The email address is badly formatted.",
      "offset": 27
    }
  ],
  "location": "LoginStep.validate_floating_message(String)"
});
formatter.result({
  "duration": 248306800,
  "status": "passed"
});
formatter.after({
  "duration": 8575886700,
  "status": "passed"
});
formatter.before({
  "duration": 5734042000,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "Verify Login invalid email id and password cases.",
  "description": "",
  "id": "test-journey-binder-login-functionality;verify-login-invalid-email-id-and-password-cases.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 48,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "SignIn to Journey Binder with \"abc@abc.com\" and \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "User select Get Started button",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "validate floating message \"The password is invalid or the user does not have a password.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "abc@abc.com",
      "offset": 31
    },
    {
      "val": "",
      "offset": 49
    }
  ],
  "location": "LoginStep.signIn_to_Journey_Binder_with_and(String,String)"
});
formatter.result({
  "duration": 13493288100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_select_Get_Started_button()"
});
formatter.result({
  "duration": 216304600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The password is invalid or the user does not have a password.",
      "offset": 27
    }
  ],
  "location": "LoginStep.validate_floating_message(String)"
});
formatter.result({
  "duration": 240075000,
  "status": "passed"
});
formatter.after({
  "duration": 8294107000,
  "status": "passed"
});
formatter.before({
  "duration": 5731000900,
  "status": "passed"
});
formatter.scenario({
  "line": 58,
  "name": "Verify Login invalid email id and password cases.",
  "description": "",
  "id": "test-journey-binder-login-functionality;verify-login-invalid-email-id-and-password-cases.;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 48,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "SignIn to Journey Binder with \"\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "User select Get Started button",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "validate floating message \"The email address is badly formatted.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 31
    },
    {
      "val": "test@123",
      "offset": 38
    }
  ],
  "location": "LoginStep.signIn_to_Journey_Binder_with_and(String,String)"
});
formatter.result({
  "duration": 9129990300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_select_Get_Started_button()"
});
formatter.result({
  "duration": 223928800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The email address is badly formatted.",
      "offset": 27
    }
  ],
  "location": "LoginStep.validate_floating_message(String)"
});
formatter.result({
  "duration": 254738400,
  "status": "passed"
});
formatter.after({
  "duration": 8370092800,
  "status": "passed"
});
formatter.before({
  "duration": 5703238200,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "Verify Login invalid email id and password cases.",
  "description": "",
  "id": "test-journey-binder-login-functionality;verify-login-invalid-email-id-and-password-cases.;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 48,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "SignIn to Journey Binder with \"abc@ab.com\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "User select Get Started button",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "validate floating message \"There is no user record corresponding to this identifier. The user may have been deleted.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "abc@ab.com",
      "offset": 31
    },
    {
      "val": "test@123",
      "offset": 48
    }
  ],
  "location": "LoginStep.signIn_to_Journey_Binder_with_and(String,String)"
});
formatter.result({
  "duration": 11487386300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_select_Get_Started_button()"
});
formatter.result({
  "duration": 211273200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "There is no user record corresponding to this identifier. The user may have been deleted.",
      "offset": 27
    }
  ],
  "location": "LoginStep.validate_floating_message(String)"
});
formatter.result({
  "duration": 1277957000,
  "status": "passed"
});
formatter.after({
  "duration": 8272947900,
  "status": "passed"
});
formatter.before({
  "duration": 5691738400,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "Verify SignUp Link on Sign in page",
  "description": "",
  "id": "test-journey-binder-login-functionality;verify-signup-link-on-sign-in-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 62,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "User is on SignIn Page",
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "User clicks on SignUp Link",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "User navigate to SignUp page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.user_is_on_SignIn_Page()"
});
formatter.result({
  "duration": 6442431900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_clicks_on_SignUp_Link()"
});
formatter.result({
  "duration": 2066100,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-1QIO4VG\u0027, ip: \u0027192.168.1.111\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:125)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.executeScript(RemoteWebDriver.java:489)\r\n\tat Resource.UtilityClass.scrollToElement(UtilityClass.java:135)\r\n\tat PagePanel.LoginPagePanel.validateSignUpLink(LoginPagePanel.java:132)\r\n\tat StepDefinition.LoginStep.user_clicks_on_SignUp_Link(LoginStep.java:92)\r\n\tat ✽.When User clicks on SignUp Link(Login.feature:65)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStep.user_navigate_to_SignUp_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 8309317600,
  "status": "passed"
});
formatter.uri("SendNotification.feature");
formatter.feature({
  "line": 1,
  "name": "Test Journey Binder Notification to user functionality",
  "description": "",
  "id": "test-journey-binder-notification-to-user-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#01. Verify Email Notification."
    },
    {
      "line": 4,
      "value": "#02. Verify Push Notification."
    },
    {
      "line": 5,
      "value": "#03. Verify SMS Notification."
    }
  ],
  "line": 8,
  "name": "Verify Email Notification.",
  "description": "",
  "id": "test-journey-binder-notification-to-user-functionality;verify-email-notification.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Notification"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "SignIn to Journey Binder with \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User select Get Started button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "validate floating message \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User navigated to Dashboard screen",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User select menu admin management",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User hide the main menu",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User select Users Tab",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User select guide notification button \"\u003cguideName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User select type of notification as Email",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User enter subject \"\u003csubject\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User enter custom body \"\u003ccbody\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User click on Send button",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 21,
      "value": "#Then User enter Email template"
    },
    {
      "line": 22,
      "value": "#Then Click on user avatar button"
    },
    {
      "line": 23,
      "value": "#Then Click on SignOut"
    }
  ],
  "line": 25,
  "name": "",
  "description": "",
  "id": "test-journey-binder-notification-to-user-functionality;verify-email-notification.;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "guideName",
        "subject",
        "cbody",
        "message"
      ],
      "line": 26,
      "id": "test-journey-binder-notification-to-user-functionality;verify-email-notification.;;1"
    },
    {
      "cells": [
        "frhbrrihzzhrgonugo@ttirv.net",
        "Password!1",
        "Savalas Colbert",
        "TestSub",
        "TestBody",
        "You have successfully signed in to my.journeybinder.com!"
      ],
      "line": 27,
      "id": "test-journey-binder-notification-to-user-functionality;verify-email-notification.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5681318000,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Verify Email Notification.",
  "description": "",
  "id": "test-journey-binder-notification-to-user-functionality;verify-email-notification.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Notification"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "SignIn to Journey Binder with \"frhbrrihzzhrgonugo@ttirv.net\" and \"Password!1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User select Get Started button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "validate floating message \"You have successfully signed in to my.journeybinder.com!\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User navigated to Dashboard screen",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User select menu admin management",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User hide the main menu",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User select Users Tab",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User select guide notification button \"Savalas Colbert\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User select type of notification as Email",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User enter subject \"TestSub\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User enter custom body \"TestBody\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User click on Send button",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "frhbrrihzzhrgonugo@ttirv.net",
      "offset": 31
    },
    {
      "val": "Password!1",
      "offset": 66
    }
  ],
  "location": "LoginStep.signIn_to_Journey_Binder_with_and(String,String)"
});
formatter.result({
  "duration": 9779506100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_select_Get_Started_button()"
});
formatter.result({
  "duration": 202846100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You have successfully signed in to my.journeybinder.com!",
      "offset": 27
    }
  ],
  "location": "LoginStep.validate_floating_message(String)"
});
formatter.result({
  "duration": 1725255500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_navigated_to_Dashboard_screen()"
});
formatter.result({
  "duration": 169159900,
  "status": "passed"
});
formatter.match({
  "location": "SendNotificationStep.user_select_menu_admin_management()"
});
formatter.result({
  "duration": 1417923400,
  "status": "passed"
});
formatter.match({
  "location": "SendNotificationStep.user_hide_the_main_menu()"
});
formatter.result({
  "duration": 175553800,
  "status": "passed"
});
formatter.match({
  "location": "SendNotificationStep.user_select_Users_Tab()"
});
formatter.result({
  "duration": 853017400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Savalas Colbert",
      "offset": 39
    }
  ],
  "location": "SendNotificationStep.user_select_guide_notification_button(String)"
});
formatter.result({
  "duration": 6326496300,
  "status": "passed"
});
formatter.match({
  "location": "SendNotificationStep.user_select_type_of_notification_as_Email()"
});
formatter.result({
  "duration": 123359800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestSub",
      "offset": 20
    }
  ],
  "location": "SendNotificationStep.user_enter_subject(String)"
});
formatter.result({
  "duration": 336474600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestBody",
      "offset": 24
    }
  ],
  "location": "SendNotificationStep.user_enter_custom_body(String)"
});
formatter.result({
  "duration": 266130200,
  "status": "passed"
});
formatter.match({
  "location": "SendNotificationStep.user_click_on_Send_button()"
});
formatter.result({
  "duration": 196928200,
  "status": "passed"
});
formatter.after({
  "duration": 8593048400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 31,
  "name": "Verify Push Notification.",
  "description": "",
  "id": "test-journey-binder-notification-to-user-functionality;verify-push-notification.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 30,
      "name": "@Notification"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "SignIn to Journey Binder with \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "User select Get Started button",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "validate floating message \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "User navigated to Dashboard screen",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "User select menu admin management",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "User hide the main menu",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "User select Users Tab",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "User select guide notification button \"\u003cguideName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "User select type of notification as Push",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "User enter subject \"\u003csubject\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "User enter custom body \"\u003ccbody\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "User click on Send button",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 44,
      "value": "#Then User enter Email template"
    },
    {
      "line": 45,
      "value": "#Then Click on user avatar button"
    },
    {
      "line": 46,
      "value": "#Then Click on SignOut"
    }
  ],
  "line": 48,
  "name": "",
  "description": "",
  "id": "test-journey-binder-notification-to-user-functionality;verify-push-notification.;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "guideName",
        "subject",
        "cbody",
        "message"
      ],
      "line": 49,
      "id": "test-journey-binder-notification-to-user-functionality;verify-push-notification.;;1"
    },
    {
      "cells": [
        "frhbrrihzzhrgonugo@ttirv.net",
        "Password!1",
        "Savalas Colbert",
        "TestSub",
        "TestBody",
        "You have successfully signed in to my.journeybinder.com!"
      ],
      "line": 50,
      "id": "test-journey-binder-notification-to-user-functionality;verify-push-notification.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5747569500,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Verify Push Notification.",
  "description": "",
  "id": "test-journey-binder-notification-to-user-functionality;verify-push-notification.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 30,
      "name": "@Notification"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "SignIn to Journey Binder with \"frhbrrihzzhrgonugo@ttirv.net\" and \"Password!1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "User select Get Started button",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "validate floating message \"You have successfully signed in to my.journeybinder.com!\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "User navigated to Dashboard screen",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "User select menu admin management",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "User hide the main menu",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "User select Users Tab",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "User select guide notification button \"Savalas Colbert\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "User select type of notification as Push",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "User enter subject \"TestSub\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "User enter custom body \"TestBody\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "User click on Send button",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "frhbrrihzzhrgonugo@ttirv.net",
      "offset": 31
    },
    {
      "val": "Password!1",
      "offset": 66
    }
  ],
  "location": "LoginStep.signIn_to_Journey_Binder_with_and(String,String)"
});
formatter.result({
  "duration": 9224064400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_select_Get_Started_button()"
});
formatter.result({
  "duration": 212154200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You have successfully signed in to my.journeybinder.com!",
      "offset": 27
    }
  ],
  "location": "LoginStep.validate_floating_message(String)"
});
formatter.result({
  "duration": 2130147500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_navigated_to_Dashboard_screen()"
});
formatter.result({
  "duration": 186681700,
  "status": "passed"
});
formatter.match({
  "location": "SendNotificationStep.user_select_menu_admin_management()"
});
formatter.result({
  "duration": 1053754100,
  "status": "passed"
});
formatter.match({
  "location": "SendNotificationStep.user_hide_the_main_menu()"
});
formatter.result({
  "duration": 177270000,
  "status": "passed"
});
formatter.match({
  "location": "SendNotificationStep.user_select_Users_Tab()"
});
formatter.result({
  "duration": 846475600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Savalas Colbert",
      "offset": 39
    }
  ],
  "location": "SendNotificationStep.user_select_guide_notification_button(String)"
});
formatter.result({
  "duration": 6304181400,
  "status": "passed"
});
formatter.match({
  "location": "SendNotificationStep.user_select_type_of_notification_as_Push()"
});
formatter.result({
  "duration": 3237025500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestSub",
      "offset": 20
    }
  ],
  "location": "SendNotificationStep.user_enter_subject(String)"
});
formatter.result({
  "duration": 265105000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestBody",
      "offset": 24
    }
  ],
  "location": "SendNotificationStep.user_enter_custom_body(String)"
});
formatter.result({
  "duration": 265192100,
  "status": "passed"
});
formatter.match({
  "location": "SendNotificationStep.user_click_on_Send_button()"
});
formatter.result({
  "duration": 206737300,
  "status": "passed"
});
formatter.after({
  "duration": 4397118900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 55,
  "name": "Verify SMS Notification.",
  "description": "",
  "id": "test-journey-binder-notification-to-user-functionality;verify-sms-notification.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 54,
      "name": "@Notification"
    }
  ]
});
formatter.step({
  "line": 56,
  "name": "SignIn to Journey Binder with \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 57,
  "name": "User select Get Started button",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "validate floating message \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "User navigated to Dashboard screen",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "User select menu admin management",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "User hide the main menu",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "User select Users Tab",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "User select guide notification button \"\u003cguideName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "User select type of notification as SMS",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "User enter custom body \"\u003ccbody\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "User click on Send button",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 67,
      "value": "#Then User enter Email template"
    },
    {
      "line": 68,
      "value": "#Then Click on user avatar button"
    },
    {
      "line": 69,
      "value": "#Then Click on SignOut"
    }
  ],
  "line": 71,
  "name": "",
  "description": "",
  "id": "test-journey-binder-notification-to-user-functionality;verify-sms-notification.;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "guideName",
        "subject",
        "cbody",
        "message"
      ],
      "line": 72,
      "id": "test-journey-binder-notification-to-user-functionality;verify-sms-notification.;;1"
    },
    {
      "cells": [
        "frhbrrihzzhrgonugo@ttirv.net",
        "Password!1",
        "Savalas Colbert",
        "TestSub",
        "TestBody",
        "You have successfully signed in to my.journeybinder.com!"
      ],
      "line": 73,
      "id": "test-journey-binder-notification-to-user-functionality;verify-sms-notification.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5723625200,
  "status": "passed"
});
formatter.scenario({
  "line": 73,
  "name": "Verify SMS Notification.",
  "description": "",
  "id": "test-journey-binder-notification-to-user-functionality;verify-sms-notification.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 54,
      "name": "@Notification"
    }
  ]
});
formatter.step({
  "line": 56,
  "name": "SignIn to Journey Binder with \"frhbrrihzzhrgonugo@ttirv.net\" and \"Password!1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 57,
  "name": "User select Get Started button",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "validate floating message \"You have successfully signed in to my.journeybinder.com!\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "User navigated to Dashboard screen",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "User select menu admin management",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "User hide the main menu",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "User select Users Tab",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "User select guide notification button \"Savalas Colbert\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "User select type of notification as SMS",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "User enter custom body \"TestBody\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "User click on Send button",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "frhbrrihzzhrgonugo@ttirv.net",
      "offset": 31
    },
    {
      "val": "Password!1",
      "offset": 66
    }
  ],
  "location": "LoginStep.signIn_to_Journey_Binder_with_and(String,String)"
});
formatter.result({
  "duration": 15527105700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_select_Get_Started_button()"
});
formatter.result({
  "duration": 192173500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You have successfully signed in to my.journeybinder.com!",
      "offset": 27
    }
  ],
  "location": "LoginStep.validate_floating_message(String)"
});
formatter.result({
  "duration": 1632553300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_navigated_to_Dashboard_screen()"
});
formatter.result({
  "duration": 139428300,
  "status": "passed"
});
formatter.match({
  "location": "SendNotificationStep.user_select_menu_admin_management()"
});
formatter.result({
  "duration": 1059768600,
  "status": "passed"
});
formatter.match({
  "location": "SendNotificationStep.user_hide_the_main_menu()"
});
formatter.result({
  "duration": 203420000,
  "status": "passed"
});
formatter.match({
  "location": "SendNotificationStep.user_select_Users_Tab()"
});
formatter.result({
  "duration": 838919300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Savalas Colbert",
      "offset": 39
    }
  ],
  "location": "SendNotificationStep.user_select_guide_notification_button(String)"
});
formatter.result({
  "duration": 6321111500,
  "status": "passed"
});
formatter.match({
  "location": "SendNotificationStep.user_select_type_of_notification_as_SMS()"
});
formatter.result({
  "duration": 3219078100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestBody",
      "offset": 24
    }
  ],
  "location": "SendNotificationStep.user_enter_custom_body(String)"
});
formatter.result({
  "duration": 249415800,
  "status": "passed"
});
formatter.match({
  "location": "SendNotificationStep.user_click_on_Send_button()"
});
formatter.result({
  "duration": 189827500,
  "status": "passed"
});
formatter.after({
  "duration": 8557824100,
  "status": "passed"
});
formatter.uri("SignUp.feature");
formatter.feature({
  "line": 1,
  "name": "Test Journey Binder Sign Up Functionality",
  "description": "",
  "id": "test-journey-binder-sign-up-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#01.   Verify Sign Up with google account."
    },
    {
      "line": 4,
      "value": "#02.   Verify Sign Up with Facebook account."
    },
    {
      "line": 5,
      "value": "#03.   Verify Sign Up with  email id and password."
    },
    {
      "line": 6,
      "value": "#04.   Verify Sign Up invalid email id and password cases."
    },
    {
      "line": 7,
      "value": "#05.   Verify Sign Up with blank email id and password"
    },
    {
      "line": 8,
      "value": "#06.   Verify Sign Up with blank password"
    },
    {
      "line": 9,
      "value": "#07.   Verify Sign Up with blank email id and enter password"
    },
    {
      "line": 10,
      "value": "#08.   Verify Sign Up with email id and password which is to JB."
    },
    {
      "line": 11,
      "value": "#09.   Verify SignIn Link on Sign Up page"
    }
  ],
  "line": 14,
  "name": "Verify Sign Up with google account.",
  "description": "",
  "id": "test-journey-binder-sign-up-functionality;verify-sign-up-with-google-account.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@SignUp"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "SignUp to Journey Binder with Google \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User navigate to Dashboard",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Click on user avatar button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Click on SignOut",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "test-journey-binder-sign-up-functionality;verify-sign-up-with-google-account.;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 21,
      "id": "test-journey-binder-sign-up-functionality;verify-sign-up-with-google-account.;;1"
    },
    {
      "cells": [
        "praveenjaiswalqa@gmail.com",
        "amazon"
      ],
      "line": 22,
      "id": "test-journey-binder-sign-up-functionality;verify-sign-up-with-google-account.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5691251600,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify Sign Up with google account.",
  "description": "",
  "id": "test-journey-binder-sign-up-functionality;verify-sign-up-with-google-account.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@SignUp"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "SignUp to Journey Binder with Google \"praveenjaiswalqa@gmail.com\" and \"amazon\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User navigate to Dashboard",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Click on user avatar button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Click on SignOut",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "praveenjaiswalqa@gmail.com",
      "offset": 38
    },
    {
      "val": "amazon",
      "offset": 71
    }
  ],
  "location": "SignUpStep.signup_to_Journey_Binder_with_Google_and(String,String)"
});
formatter.result({
  "duration": 4701500,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-1QIO4VG\u0027, ip: \u0027192.168.1.111\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:125)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.executeScript(RemoteWebDriver.java:489)\r\n\tat Resource.UtilityClass.scrollToElement(UtilityClass.java:135)\r\n\tat PagePanel.LoginPagePanel.validateSignUpLink(LoginPagePanel.java:132)\r\n\tat StepDefinition.SignUpStep.signup_to_Journey_Binder_with_Google_and(SignUpStep.java:22)\r\n\tat ✽.Given SignUp to Journey Binder with Google \"praveenjaiswalqa@gmail.com\" and \"amazon\"(SignUp.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStep.user_navigate_to_Dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStep.click_on_user_avatar_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStep.click_on_SignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4200753400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 26,
  "name": "Verify Sign Up with Facebook account.",
  "description": "",
  "id": "test-journey-binder-sign-up-functionality;verify-sign-up-with-facebook-account.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@SignUp"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "SignUp to Journey Binder with Facebook \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "User navigate to Dashboard",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "Click on user avatar button",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Click on SignOut",
  "keyword": "Then "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "test-journey-binder-sign-up-functionality;verify-sign-up-with-facebook-account.;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 33,
      "id": "test-journey-binder-sign-up-functionality;verify-sign-up-with-facebook-account.;;1"
    },
    {
      "cells": [
        "praveenjaiswalqa@gmail.com",
        "amazon"
      ],
      "line": 34,
      "id": "test-journey-binder-sign-up-functionality;verify-sign-up-with-facebook-account.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5662865300,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Verify Sign Up with Facebook account.",
  "description": "",
  "id": "test-journey-binder-sign-up-functionality;verify-sign-up-with-facebook-account.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@SignUp"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "SignUp to Journey Binder with Facebook \"praveenjaiswalqa@gmail.com\" and \"amazon\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "User navigate to Dashboard",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "Click on user avatar button",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Click on SignOut",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "praveenjaiswalqa@gmail.com",
      "offset": 40
    },
    {
      "val": "amazon",
      "offset": 73
    }
  ],
  "location": "SignUpStep.signup_to_Journey_Binder_with_Facebook_and(String,String)"
});
formatter.result({
  "duration": 5341500,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-1QIO4VG\u0027, ip: \u0027192.168.1.111\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:125)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.executeScript(RemoteWebDriver.java:489)\r\n\tat Resource.UtilityClass.scrollToElement(UtilityClass.java:135)\r\n\tat PagePanel.LoginPagePanel.validateSignUpLink(LoginPagePanel.java:132)\r\n\tat StepDefinition.SignUpStep.signup_to_Journey_Binder_with_Facebook_and(SignUpStep.java:30)\r\n\tat ✽.Given SignUp to Journey Binder with Facebook \"praveenjaiswalqa@gmail.com\" and \"amazon\"(SignUp.feature:27)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStep.user_navigate_to_Dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStep.click_on_user_avatar_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStep.click_on_SignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4440499000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 37,
  "name": "Verify Sign Up with email id and password.",
  "description": "",
  "id": "test-journey-binder-sign-up-functionality;verify-sign-up-with-email-id-and-password.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@SignUp"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "SignUp to Journey Binder with \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "User verify message \"\u003cexpMsg\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "User navigate to Dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Click on user avatar button",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "Click on SignOut",
  "keyword": "Then "
});
formatter.examples({
  "line": 44,
  "name": "",
  "description": "",
  "id": "test-journey-binder-sign-up-functionality;verify-sign-up-with-email-id-and-password.;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "expMsg"
      ],
      "line": 45,
      "id": "test-journey-binder-sign-up-functionality;verify-sign-up-with-email-id-and-password.;;1"
    },
    {
      "cells": [
        "journey",
        "amazon",
        "You have successfully signed up to my.journeybinder.com"
      ],
      "line": 46,
      "id": "test-journey-binder-sign-up-functionality;verify-sign-up-with-email-id-and-password.;;2"
    },
    {
      "cells": [
        "",
        "anasod",
        "You have successfully signed up to my.journeybinder.com"
      ],
      "line": 47,
      "id": "test-journey-binder-sign-up-functionality;verify-sign-up-with-email-id-and-password.;;3"
    },
    {
      "cells": [
        "acsws",
        "dfksfk",
        "You have successfully signed up to my.journeybinder.com"
      ],
      "line": 48,
      "id": "test-journey-binder-sign-up-functionality;verify-sign-up-with-email-id-and-password.;;4"
    },
    {
      "cells": [
        "@#$%^%",
        "WEE@#cvx",
        "You have successfully signed up to my.journeybinder.com"
      ],
      "line": 49,
      "id": "test-journey-binder-sign-up-functionality;verify-sign-up-with-email-id-and-password.;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5690330900,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Verify Sign Up with email id and password.",
  "description": "",
  "id": "test-journey-binder-sign-up-functionality;verify-sign-up-with-email-id-and-password.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@SignUp"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "SignUp to Journey Binder with \"journey\" and \"amazon\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "User verify message \"You have successfully signed up to my.journeybinder.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "User navigate to Dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Click on user avatar button",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "Click on SignOut",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "journey",
      "offset": 31
    },
    {
      "val": "amazon",
      "offset": 45
    }
  ],
  "location": "SignUpStep.signup_to_Journey_Binder_with_and(String,String)"
});
formatter.result({
  "duration": 6975300,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-1QIO4VG\u0027, ip: \u0027192.168.1.111\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:125)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.executeScript(RemoteWebDriver.java:489)\r\n\tat Resource.UtilityClass.scrollToElement(UtilityClass.java:135)\r\n\tat PagePanel.LoginPagePanel.validateSignUpLink(LoginPagePanel.java:132)\r\n\tat StepDefinition.SignUpStep.signup_to_Journey_Binder_with_and(SignUpStep.java:44)\r\n\tat ✽.Given SignUp to Journey Binder with \"journey\" and \"amazon\"(SignUp.feature:38)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "You have successfully signed up to my.journeybinder.com",
      "offset": 21
    }
  ],
  "location": "SignUpStep.user_verify_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStep.user_navigate_to_Dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStep.click_on_user_avatar_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStep.click_on_SignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4210034600,
  "status": "passed"
});
formatter.before({
  "duration": 5637710600,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Verify Sign Up with email id and password.",
  "description": "",
  "id": "test-journey-binder-sign-up-functionality;verify-sign-up-with-email-id-and-password.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@SignUp"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "SignUp to Journey Binder with \"\" and \"anasod\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "User verify message \"You have successfully signed up to my.journeybinder.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "User navigate to Dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Click on user avatar button",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "Click on SignOut",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 31
    },
    {
      "val": "anasod",
      "offset": 38
    }
  ],
  "location": "SignUpStep.signup_to_Journey_Binder_with_and(String,String)"
});
formatter.result({
  "duration": 3521500,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-1QIO4VG\u0027, ip: \u0027192.168.1.111\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:125)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.executeScript(RemoteWebDriver.java:489)\r\n\tat Resource.UtilityClass.scrollToElement(UtilityClass.java:135)\r\n\tat PagePanel.LoginPagePanel.validateSignUpLink(LoginPagePanel.java:132)\r\n\tat StepDefinition.SignUpStep.signup_to_Journey_Binder_with_and(SignUpStep.java:44)\r\n\tat ✽.Given SignUp to Journey Binder with \"\" and \"anasod\"(SignUp.feature:38)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "You have successfully signed up to my.journeybinder.com",
      "offset": 21
    }
  ],
  "location": "SignUpStep.user_verify_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStep.user_navigate_to_Dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStep.click_on_user_avatar_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStep.click_on_SignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4107182000,
  "status": "passed"
});
formatter.before({
  "duration": 5685450100,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Verify Sign Up with email id and password.",
  "description": "",
  "id": "test-journey-binder-sign-up-functionality;verify-sign-up-with-email-id-and-password.;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@SignUp"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "SignUp to Journey Binder with \"acsws\" and \"dfksfk\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "User verify message \"You have successfully signed up to my.journeybinder.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "User navigate to Dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Click on user avatar button",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "Click on SignOut",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "acsws",
      "offset": 31
    },
    {
      "val": "dfksfk",
      "offset": 43
    }
  ],
  "location": "SignUpStep.signup_to_Journey_Binder_with_and(String,String)"
});
formatter.result({
  "duration": 5005300,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-1QIO4VG\u0027, ip: \u0027192.168.1.111\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:125)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.executeScript(RemoteWebDriver.java:489)\r\n\tat Resource.UtilityClass.scrollToElement(UtilityClass.java:135)\r\n\tat PagePanel.LoginPagePanel.validateSignUpLink(LoginPagePanel.java:132)\r\n\tat StepDefinition.SignUpStep.signup_to_Journey_Binder_with_and(SignUpStep.java:44)\r\n\tat ✽.Given SignUp to Journey Binder with \"acsws\" and \"dfksfk\"(SignUp.feature:38)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "You have successfully signed up to my.journeybinder.com",
      "offset": 21
    }
  ],
  "location": "SignUpStep.user_verify_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStep.user_navigate_to_Dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStep.click_on_user_avatar_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStep.click_on_SignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 8377611800,
  "status": "passed"
});
formatter.before({
  "duration": 5719823500,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Verify Sign Up with email id and password.",
  "description": "",
  "id": "test-journey-binder-sign-up-functionality;verify-sign-up-with-email-id-and-password.;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@SignUp"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "SignUp to Journey Binder with \"@#$%^%\" and \"WEE@#cvx\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "User verify message \"You have successfully signed up to my.journeybinder.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "User navigate to Dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Click on user avatar button",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "Click on SignOut",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "@#$%^%",
      "offset": 31
    },
    {
      "val": "WEE@#cvx",
      "offset": 44
    }
  ],
  "location": "SignUpStep.signup_to_Journey_Binder_with_and(String,String)"
});
formatter.result({
  "duration": 4477200,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-1QIO4VG\u0027, ip: \u0027192.168.1.111\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:125)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.executeScript(RemoteWebDriver.java:489)\r\n\tat Resource.UtilityClass.scrollToElement(UtilityClass.java:135)\r\n\tat PagePanel.LoginPagePanel.validateSignUpLink(LoginPagePanel.java:132)\r\n\tat StepDefinition.SignUpStep.signup_to_Journey_Binder_with_and(SignUpStep.java:44)\r\n\tat ✽.Given SignUp to Journey Binder with \"@#$%^%\" and \"WEE@#cvx\"(SignUp.feature:38)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "You have successfully signed up to my.journeybinder.com",
      "offset": 21
    }
  ],
  "location": "SignUpStep.user_verify_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStep.user_navigate_to_Dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStep.click_on_user_avatar_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStep.click_on_SignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4150647500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 52,
  "name": "Verify Sign Up with invalid case.",
  "description": "",
  "id": "test-journey-binder-sign-up-functionality;verify-sign-up-with-invalid-case.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 51,
      "name": "@SignUp"
    }
  ]
});
formatter.step({
  "line": 53,
  "name": "Verify SignUp to Journey Binder with \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 54,
  "name": "User verify error message \"\u003cexpMsg\u003e\"",
  "keyword": "When "
});
formatter.examples({
  "line": 56,
  "name": "",
  "description": "",
  "id": "test-journey-binder-sign-up-functionality;verify-sign-up-with-invalid-case.;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "expMsg"
      ],
      "line": 57,
      "id": "test-journey-binder-sign-up-functionality;verify-sign-up-with-invalid-case.;;1"
    },
    {
      "cells": [
        "",
        "",
        "Password should be eight character long contains at least one uppercase, one lowercase, one number and one special character!"
      ],
      "line": 58,
      "id": "test-journey-binder-sign-up-functionality;verify-sign-up-with-invalid-case.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5630334200,
  "status": "passed"
});
formatter.scenario({
  "line": 58,
  "name": "Verify Sign Up with invalid case.",
  "description": "",
  "id": "test-journey-binder-sign-up-functionality;verify-sign-up-with-invalid-case.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 51,
      "name": "@SignUp"
    }
  ]
});
formatter.step({
  "line": 53,
  "name": "Verify SignUp to Journey Binder with \"\" and \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 54,
  "name": "User verify error message \"Password should be eight character long contains at least one uppercase, one lowercase, one number and one special character!\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 38
    },
    {
      "val": "",
      "offset": 45
    }
  ],
  "location": "SignUpStep.verify_signup_to_Journey_Binder_with_and(String,String)"
});
formatter.result({
  "duration": 2710600,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-1QIO4VG\u0027, ip: \u0027192.168.1.111\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:125)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.executeScript(RemoteWebDriver.java:489)\r\n\tat Resource.UtilityClass.scrollToElement(UtilityClass.java:135)\r\n\tat PagePanel.LoginPagePanel.validateSignUpLink(LoginPagePanel.java:132)\r\n\tat StepDefinition.SignUpStep.verify_signup_to_Journey_Binder_with_and(SignUpStep.java:54)\r\n\tat ✽.Given Verify SignUp to Journey Binder with \"\" and \"\"(SignUp.feature:53)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password should be eight character long contains at least one uppercase, one lowercase, one number and one special character!",
      "offset": 27
    }
  ],
  "location": "SignUpStep.user_verify_error_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 5777201000,
  "status": "passed"
});
formatter.before({
  "duration": 5650315400,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "Verify SignIn Link on Sign Up page",
  "description": "",
  "id": "test-journey-binder-sign-up-functionality;verify-signin-link-on-sign-up-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 60,
      "name": "@SignUp"
    }
  ]
});
formatter.step({
  "line": 62,
  "name": "User is on SignIn Page",
  "keyword": "Given "
});
formatter.step({
  "line": 63,
  "name": "User clicks on SignUp Link",
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "User navigate to SignUp page",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "User verify SignIn Link on SignUp Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.user_is_on_SignIn_Page()"
});
formatter.result({
  "duration": 5465133500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_clicks_on_SignUp_Link()"
});
formatter.result({
  "duration": 896300,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-1QIO4VG\u0027, ip: \u0027192.168.1.111\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:125)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.executeScript(RemoteWebDriver.java:489)\r\n\tat Resource.UtilityClass.scrollToElement(UtilityClass.java:135)\r\n\tat PagePanel.LoginPagePanel.validateSignUpLink(LoginPagePanel.java:132)\r\n\tat StepDefinition.LoginStep.user_clicks_on_SignUp_Link(LoginStep.java:92)\r\n\tat ✽.When User clicks on SignUp Link(SignUp.feature:63)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStep.user_navigate_to_SignUp_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignUpStep.user_verify_SignIn_Link_on_SignUp_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 8544749100,
  "status": "passed"
});
});