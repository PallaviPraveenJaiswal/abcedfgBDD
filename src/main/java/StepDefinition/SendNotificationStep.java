package StepDefinition;

import org.apache.log4j.Logger;

import PagePanel.LoginPagePanel;
import PagePanel.SendNotificationPagePanel;
import Resource.BaseClass;
import Resource.LoggerHelper;
import cucumber.api.java.en.Then;

public class SendNotificationStep extends BaseClass{
	SendNotificationPagePanel sendNotificationPagePanel = new SendNotificationPagePanel();
	Hooks hooks = new Hooks();
	
	public static Logger log = LoggerHelper.getLogger(LoginStep.class);

	@Then("^User select menu admin management$")
	public void user_select_menu_admin_management() throws Throwable {
		SendNotificationPagePanel.selectAdminMgmt();
	}

	@Then("^User hide the main menu$")
	public void user_hide_the_main_menu() throws Throwable {
		LoginPagePanel.clickOnHideIcon();
	}

	@Then("^User select Users Tab$")
	public void user_select_Users_Tab() throws Throwable {
		SendNotificationPagePanel.selectUserTab();
	}

	@Then("^User select guide notification button \"([^\"]*)\"$")
	public void user_select_guide_notification_button(String guideName) throws Throwable {
		Thread.sleep(3000);
		SendNotificationPagePanel.selectNotificationBtnForGuide(guideName);
	}

	@Then("^User select type of notification as Email$")
	public void user_select_type_of_notification_as_Email() throws Throwable {
		SendNotificationPagePanel.selectEmailChkBox();
	}
	
	@Then("^User select type of notification as Push$")
	public void user_select_type_of_notification_as_Push() throws Throwable {
		SendNotificationPagePanel.selectPushChkBox();
	}
	
	@Then("^User select type of notification as SMS$")
	public void user_select_type_of_notification_as_SMS() throws Throwable {
		SendNotificationPagePanel.selectSMSChkBox();
	}

	@Then("^User enter subject \"([^\"]*)\"$")
	public void user_enter_subject(String sub) throws Throwable {
		SendNotificationPagePanel.enterSubject(sub);
	}

	@Then("^User enter custom body \"([^\"]*)\"$")
	public void user_enter_custom_body(String customBody) throws Throwable {
		SendNotificationPagePanel.enterCustomBody(customBody);
	}

	@Then("^User enter Email template$")
	public void user_enter_Email_template() throws Throwable {
		SendNotificationPagePanel.enterEmailTemplate();
	}
	
	@Then("^User click on Send button$")
	public void user_click_on_Send_button() {
		SendNotificationPagePanel.clickSendNotificationBtn();
	}
	

}
