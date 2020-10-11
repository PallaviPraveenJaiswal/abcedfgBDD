package StepDefinition;

import org.apache.log4j.Logger;

import PagePanel.LoginPagePanel;
import PagePanel.SignUpPagePanel;
import Resource.BaseClass;
import Resource.LoggerHelper;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class SignUpStep extends BaseClass {
	LoginPagePanel loginHQUserPagePanel = new LoginPagePanel();
	SignUpPagePanel signUpPagePanel = new SignUpPagePanel();
	Hooks hooks = new Hooks();
	public static Logger log = LoggerHelper.getLogger(LoginStep.class);

	
	@Given("^SignUp to Journey Binder with Google \"([^\"]*)\" and \"([^\"]*)\"$")
	public void signup_to_Journey_Binder_with_Google_and(String un, String pwd) throws Throwable {
		log.info("Sign Up using Google account");
		LoginPagePanel.validateSignUpLink();
		SignUpPagePanel.clickOnSignUpWithGoogleBtn();
		LoginPagePanel.switchWindowAndEnterGooglecredentials(un, pwd);
	}
	
	@Given("^SignUp to Journey Binder with Facebook \"([^\"]*)\" and \"([^\"]*)\"$")
	public void signup_to_Journey_Binder_with_Facebook_and(String un, String pwd) throws Throwable {
		log.info("Sign Up using Facebook account");
		LoginPagePanel.validateSignUpLink();
		SignUpPagePanel.clickOnSignUpWithFacebookBtn();
		LoginPagePanel.switchWindowAndEnterFacebookcredentials(un, pwd);
	}
	
	@Then("^User verify SignIn Link on SignUp Page$")
	public void user_verify_SignIn_Link_on_SignUp_Page() {
		log.info("User is now looking for Sign in link on Sign Up page");
		SignUpPagePanel.validateSignInLink();
	}
	
	@Given("^SignUp to Journey Binder with \"([^\"]*)\" and \"([^\"]*)\"$")
	public void signup_to_Journey_Binder_with_and(String un, String pwd) throws Throwable {
		log.info("Sign Up with email id and password");
		LoginPagePanel.validateSignUpLink();
		SignUpPagePanel.enterFullName(un);
		SignUpPagePanel.enterSignUpEmail();
		SignUpPagePanel.enterPassword(pwd);
		LoginPagePanel.clickGetStartedBtn();
	}
	
	@Given("^Verify SignUp to Journey Binder with \"([^\"]*)\" and \"([^\"]*)\"$")
	public void verify_signup_to_Journey_Binder_with_and(String un, String pwd) throws Throwable {
		log.info("Sign Up with email id and password");
		LoginPagePanel.validateSignUpLink();
		SignUpPagePanel.enterFullName(un);
		SignUpPagePanel.enterPassword(pwd);
		LoginPagePanel.clickGetStartedBtn();
	}
	
	@Then("^User verify message \"([^\"]*)\"$")
	public void user_verify_message(String expectedToastMSg) {
		log.info("User is now verifying success message for registration");
		SignUpPagePanel.verifyRegistrationMsg(expectedToastMSg);
	}
	
	@Then("^User verify error message \"([^\"]*)\"$")
	public void user_verify_error_message(String expectedToastMSg) {
		log.info("User is now verifying success message for registration");
		SignUpPagePanel.verifyErrorMsg(expectedToastMSg);
	}
}
