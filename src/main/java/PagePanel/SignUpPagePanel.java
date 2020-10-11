package PagePanel;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Random;
import java.util.Scanner;

import org.openqa.selenium.support.PageFactory;
import Pages.LoginPage;
import Pages.SignUpPage;
import Resource.BaseClass;
import Resource.UtilityClass;

public class SignUpPagePanel extends BaseClass {
	LoginPage loginHQUserPage = new LoginPage();
	UtilityClass utilityClass = new UtilityClass();
	SignUpPage signUpPage = new SignUpPage();

	public SignUpPagePanel() {
		signUpPage = PageFactory.initElements(driver, SignUpPage.class);
	}

	public static void clickOnSignUpWithGoogleBtn() throws Throwable {
		UtilityClass.waitForElement(SignUpPage.signUpGoogleBtn);
		SignUpPage.signUpGoogleBtn.click();
	}

	public static void clickOnSignUpWithFacebookBtn() throws Throwable {
		UtilityClass.waitForElement(SignUpPage.signUpFeacbookBtn);
		SignUpPage.signUpFeacbookBtn.click();
	}

	public static void enterFullName(String fullName) throws Throwable {
		UtilityClass.waitForElement(SignUpPage.fullNameTxtBox);
		SignUpPage.fullNameTxtBox.sendKeys(fullName);
	}

	public static void enterPassword(String pass) throws Throwable {
		UtilityClass.waitForElement(SignUpPage.passTxtBox);
		SignUpPage.passTxtBox.sendKeys(pass);
	}

	public static void enterSignUpEmail() throws Throwable {
		UtilityClass.waitForElement(SignUpPage.emailAddressTxtBox);
		UtilityClass.createFile();
		String emailid = UtilityClass.readEmailId();
		System.out.println("This is eID to be printed: "+emailid);
		SignUpPage.emailAddressTxtBox.sendKeys(emailid);	
	}
	
	public static void verifyRegistrationMsg(String expectedToastMSg) {
		UtilityClass.verifyToastMsg(LoginPage.toastMsgDesc, expectedToastMSg);
	}
	
	public static void verifyErrorMsg(String expectedToastMSg) {
		UtilityClass.verifyToastMsg(SignUpPage.errorMsg, expectedToastMSg);
	}

	public static void validateSignInLink() {
		UtilityClass.scrollToElement();
		UtilityClass.waitForElement(SignUpPage.signInLink);
		SignUpPage.signInLink.click();
	}

	public static void verifySignUpPage() {
		UtilityClass.waitForElement(SignUpPage.fullNameTxtBox);
		SignUpPage.fullNameTxtBox.isEnabled();
		System.out.println("User is on SignUp Page");
	}

	
}
