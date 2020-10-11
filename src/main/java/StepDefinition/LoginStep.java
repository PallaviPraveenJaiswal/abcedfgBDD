package StepDefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.apache.log4j.Logger;
import org.openqa.selenium.Alert;

import PagePanel.LoginPagePanel;
import PagePanel.SignUpPagePanel;
import Resource.*;

public class LoginStep extends BaseClass {
	LoginPagePanel loginHQUserPagePanel = new LoginPagePanel();
	SignUpPagePanel signUpPagePanel = new SignUpPagePanel();
	Hooks hooks = new Hooks();

	public static Logger log = LoggerHelper.getLogger(LoginStep.class);

	@Given("^SignIn to Journey Binder with Google \"([^\"]*)\" and \"([^\"]*)\"$")
	public void SignIn_to_Journey_Binder_with_Google_and(String username, String password) throws Throwable {
		log.info("Started SignIn to Journey Binder with Google");
		LoginPagePanel.clickOnSignInWithGoogleBtn();
		LoginPagePanel.switchWindowAndEnterGooglecredentials(username, password);
		log.info("Login successfully using Google");
	}
	
	@Given("^SignIn to Journey Binder with Facebook \"([^\"]*)\" and \"([^\"]*)\"$")
	public void SignIn_to_Journey_Binder_with_Facebook_and(String username, String password) throws Throwable {
		log.info("StartedSignIn to Journey Binder with Facebook");
		LoginPagePanel.clickOnSignInWithFacebookBtn();
		LoginPagePanel.switchWindowAndEnterFacebookcredentials(username, password);
		log.info("Login successfully using Facebook");
	}
		
	@Given("^SignIn to Journey Binder with \"([^\"]*)\" and \"([^\"]*)\"$")
	public void signIn_to_Journey_Binder_with_and(String username, String password) throws Throwable {
		log.info("Entering username and password and click on login button");
		LoginPagePanel.enterUserName(username);
		LoginPagePanel.enterPassword(password);
	}
	
	@When("^User select Get Started button$")
	public void user_select_Get_Started_button() throws Throwable {
		log.info("clicking on get started button");
		LoginPagePanel.clickGetStartedBtn();
	}

	@Then("^validate floating message \"([^\"]*)\"$")
	public void validate_floating_message(String expectedToastMSg) throws Throwable {
		log.info("Validating floating message");
		LoginPagePanel.validateLoginMsg(expectedToastMSg);
	}
	
	@Then("^Click on user avatar button$")
	public void click_on_user_avatar_button() throws Throwable {
		log.info("User clicks on Avatar icon");
		LoginPagePanel.clickOnHideIcon();
		Thread.sleep(3000);
		LoginPagePanel.clickOnUserAvatar();
	}

	@When("^User navigate to Dashboard$")
	public void user_navigate_to_Dashboard() throws Throwable {
		LoginPagePanel.validateLogo();
		log.info("Dashboard is verified");
	}
	
	@Then("^User navigated to Dashboard screen$")
	public void user_navigated_to_Dashboard_screen() throws Throwable {
		LoginPagePanel.validateLogo();
		log.info("Dashboard is verified");
	}

	
	@Then("^Click on SignOut$")
	public void click_on_SignOut() throws Throwable {
		LoginPagePanel.logout();
		log.info("Clicked on logout");
	}
	
	@Given("^User is on SignIn Page$")
	public void user_is_on_SignIn_Page() throws Throwable {
		log.info("User is on Sign in page");
		LoginPagePanel.verifySignInPage();
	  
	}

	@When("^User clicks on SignUp Link$")
	public void user_clicks_on_SignUp_Link() throws Throwable {
		log.info("User is on Sign in page");
		LoginPagePanel.validateSignUpLink();
		
	}

	@Then("^User navigate to SignUp page$")
	public void user_navigate_to_SignUp_page() throws Throwable {
		log.info("User is on Sign Up page");
		Thread.sleep(3000);
		LoginPagePanel.verifySignUpPage();
	}
	
	
}
