package PagePanel;

import java.util.Set;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import Pages.SendNotificationPage;
import Resource.BaseClass;
import Resource.UtilityClass;

public class SendNotificationPagePanel extends BaseClass {
	SendNotificationPage sendNotificationPage = new Pages.SendNotificationPage();
	static JavascriptExecutor js = (JavascriptExecutor) driver;

	public SendNotificationPagePanel() {
		sendNotificationPage = PageFactory.initElements(driver, SendNotificationPage.class);
	}

	public static void selectAdminMgmt() {
		UtilityClass.waitForElement(SendNotificationPage.adminMgmtMenu);
		SendNotificationPage.adminMgmtMenu.click();
	}

	public static void selectUserTab() {
		SendNotificationPage.userTab.click();
	}

	public static void selectNotificationBtnForGuide(String guideName) throws Throwable {

		WebElement selectGuide = driver
				.findElement(By.xpath("(//h3[contains(text(),'"+guideName+"')]/following::button)[1]"));
		System.out.println("Clicking on user name: "+selectGuide);
		Thread.sleep(3000);
		selectGuide.isDisplayed();
		selectGuide.isEnabled();
		//js.executeScript("arguments[0].click();", selectGuide);
		selectGuide.click();
	}

	public static void selectEmailChkBox() {

		js.executeScript("arguments[0].click();", SendNotificationPage.emailChkBox);
	}

	public static void selectPushChkBox() throws Throwable {
		Thread.sleep(3000);
		UtilityClass.waitForElement(SendNotificationPage.pushChkBox);
		SendNotificationPage.pushChkBox.click();
	}

	public static void selectSMSChkBox() throws Throwable {
		Thread.sleep(3000);
		UtilityClass.waitForElement(SendNotificationPage.smsChkBox);
		SendNotificationPage.smsChkBox.click();
	}

	public static void enterSubject(String sub) {
		UtilityClass.waitForElement(SendNotificationPage.enterSubjectTxtBox);
		SendNotificationPage.enterSubjectTxtBox.sendKeys(sub);
	}

	public static void enterCustomBody(String customBody) {
		UtilityClass.waitForElement(SendNotificationPage.customBodyTxtBox);
		SendNotificationPage.customBodyTxtBox.sendKeys(customBody);
	}

	public static void enterEmailTemplate() {
		UtilityClass.waitForElement(SendNotificationPage.emailTmplateDD);
		SendNotificationPage.emailTmplateDD.click();
	}

	public static void clickSendNotificationBtn() {
		UtilityClass.waitForElement(SendNotificationPage.sendNotificationBtn);
		SendNotificationPage.sendNotificationBtn.click();
	}

}
