package Pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LoginPage {
	@FindBy(xpath = "//*[contains(text(),'Sign In with Google')]")
	public static WebElement signInGoogleBtn;

	@FindBy(xpath = "//*[contains(text(),'Sign In with Facebook')]")
	public static WebElement signInFeacbookBtn;

	@FindBy(xpath = "//input[@type='email']")
	public static WebElement emailTxtBox;

	@FindBy(className = "password")
	public static WebElement passwordTxtBoxLoginPage;
	
	
	@FindBy(xpath = "//input[@type='password']")
	public static WebElement passwordTxtBoxGoogle;
	
	@FindBy(xpath = "//input[@type='text']")
	public static WebElement passwordTxtBox;

	@FindBy(xpath = "//button[@type='submit']")
	public static WebElement getStartedBtn;

	@FindBy(xpath = "//a[contains(text(),'Terms of Service')]")
	public static WebElement termsOfServicesLink;
	
	@FindBy(xpath = "//a[contains(text(),'Privacy Policy')]")
	public static WebElement privacyPolicyLink;
	
	@FindBy(xpath = "//a[contains(text(),'Sign Up')]")
	public static WebElement signUpLink;
	
	@FindBy(xpath = "//*[@class='username']")
	public static WebElement userAvatar;
	
	@FindBy(xpath = "//*[contains(text(),'Sign Out')]")
	public static WebElement signOut;
	
	@FindBy(xpath = "//a[@href='/']")
	public static WebElement logo;
	
	@FindBy(xpath = "//*[@class = 'hide-icon']")
	public static WebElement hideIconBtn;
	
	@FindBy(xpath = "//*[@class = 'show-icon']")
	public static WebElement showIconBtn;
	
	@FindBy(xpath = "(//*[@class='VfPpkd-RLmnJb'])[1]")
	public static WebElement googleNextBtn;
	
	@FindBy(xpath = "//input[@type='text']")
	public static WebElement facebookEmailTxtBox;

	@FindBy(xpath = "//button[@type='submit']")
	public static WebElement facebookLoginBtn;
	
	@FindBy(className = "ant-notification ant-notification-topRight")
	public static WebElement toastMsgTopRight;
		
	@FindBy(className = "ant-notification-notice-message")
	public static WebElement toastMsgBox;
	
	@FindBy(className = "ant-notification-notice-description")
	public static WebElement toastMsgDesc;
	
	@FindBy(className = "ant-notification-notice-with-icon")
	public static WebElement toastMsgIcon;
	
	@FindBy(xpath = "//input[@placeholder='Full Name']")
	public static WebElement fullNameTxtBox;
	
}
