package PagePanel;

import java.util.Iterator;
import java.util.Set;

import org.apache.log4j.Logger;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import Pages.LoginPage;
import Resource.BaseClass;
import Resource.LoggerHelper;
import Resource.UtilityClass;
import StepDefinition.LoginStep;

public class LoginPagePanel extends BaseClass {
	LoginPage loginHQUserPage = new LoginPage();
	UtilityClass utilityClass = new UtilityClass();
	public static Logger log = LoggerHelper.getLogger(LoginStep.class);
	
	public LoginPagePanel() {
		loginHQUserPage = PageFactory.initElements(driver, LoginPage.class);
	}

	public static void clickOnSignInWithGoogleBtn() throws Throwable {
		UtilityClass.waitForElement(LoginPage.signInGoogleBtn);
		LoginPage.signInGoogleBtn.click();
	}
	
	public static void clickOnSignInWithFacebookBtn() throws Throwable {
		UtilityClass.waitForElement(LoginPage.signInFeacbookBtn);
		LoginPage.signInFeacbookBtn.click();
	}
	
	public static void switchWindowAndEnterGooglecredentials(String un, String pwd) throws Throwable {
		String parent = driver.getWindowHandle();
		Set<String> s = driver.getWindowHandles();
		Iterator<String> I1 = s.iterator();
		while (I1.hasNext()) {
			String child_window = I1.next();
			if (!parent.equals(child_window)) {
				driver.switchTo().window(child_window);
				Thread.sleep(5000);
				System.out.println(driver.switchTo().window(child_window).getTitle());
				UtilityClass.waitForElement(LoginPage.emailTxtBox);
				LoginPage.emailTxtBox.sendKeys(un);
				UtilityClass.waitForElement(LoginPage.googleNextBtn);
				LoginPage.googleNextBtn.click();				
				UtilityClass.waitForElement(LoginPage.passwordTxtBoxGoogle);
				LoginPage.passwordTxtBoxGoogle.sendKeys(pwd);
				UtilityClass.waitForElement(LoginPage.googleNextBtn);
				LoginPage.googleNextBtn.click();
			}
		}
		
		Thread.sleep(5000);
		driver.switchTo().window(parent);
	}
	
	public static void switchWindowAndEnterFacebookcredentials(String un, String pwd) throws Throwable {
		String parent = driver.getWindowHandle();
		Set<String> s = driver.getWindowHandles();
		Iterator<String> I1 = s.iterator();
		while (I1.hasNext()) {
			String child_window = I1.next();
			if (!parent.equals(child_window)) {
				driver.switchTo().window(child_window);
				Thread.sleep(5000);
				System.out.println(driver.switchTo().window(child_window).getTitle());
				UtilityClass.waitForElement(LoginPage.facebookEmailTxtBox);
				LoginPage.facebookEmailTxtBox.sendKeys(un);				
				UtilityClass.waitForElement(LoginPage.passwordTxtBox);
				LoginPage.passwordTxtBox.sendKeys(pwd);
				UtilityClass.waitForElement(LoginPage.facebookLoginBtn);
				LoginPage.facebookLoginBtn.click();
			}
		}
		
		Thread.sleep(5000);
		driver.switchTo().window(parent);

	}
	
	
	public static void enterUserName(String un) throws Throwable {
		UtilityClass.waitForElement(LoginPage.emailTxtBox);
		Thread.sleep(3000);
		LoginPage.emailTxtBox.sendKeys(un);
	}

	public static void enterPassword(String pwd) {
		UtilityClass.waitForElement(LoginPage.passwordTxtBoxLoginPage);
		LoginPage.passwordTxtBoxLoginPage.sendKeys(pwd);
	}

	public static void clickGetStartedBtn() {
		UtilityClass.waitForElement(LoginPage.getStartedBtn);
		LoginPage.getStartedBtn.click();
	}
	
	public static void clickOnHideIcon() {
		UtilityClass.waitForElement(LoginPage.hideIconBtn);
		LoginPage.hideIconBtn.click();
	}
	
	public static void clickOnShowIcon() {
		UtilityClass.waitForElement(LoginPage.showIconBtn);
		LoginPage.showIconBtn.click();
	}

	public static void clickOnUserAvatar() {
		UtilityClass.waitForElement(LoginPage.userAvatar);
		LoginPage.userAvatar.click();
	}

	public static void logout() {
		UtilityClass.waitForElement(LoginPage.signOut);
		LoginPage.signOut.click();
	}

	public static void validateLogo() {
		UtilityClass.waitForElement(LoginPage.logo);
		Assert.assertTrue(LoginPage.logo.isDisplayed());
	}
	
	public static void validateLoginMsg(String expectedToastMSg) {
		UtilityClass.waitForElement(LoginPage.toastMsgIcon);
		UtilityClass.verifyToastMsg(LoginPage.toastMsgDesc, expectedToastMSg);
	}
	
	public static void validateSignUpLink() {
		UtilityClass.scrollToElement();
		UtilityClass.waitForElement(LoginPage.signUpLink);
		log.info("Verified signUp link");
		LoginPage.signUpLink.click();
		log.info("Clicking on sign Up link");
	}
	
	public static void verifySignInPage() {
		UtilityClass.waitForElement(LoginPage.signInGoogleBtn);
		LoginPage.signInGoogleBtn.isDisplayed();
		System.out.println("user is on SignIn Page");
	}
	
	public static void verifySignUpPage() {
		UtilityClass.waitForElement(LoginPage.fullNameTxtBox);
		LoginPage.fullNameTxtBox.isDisplayed();
		System.out.println("user is on SignIn Page");
	}
}
