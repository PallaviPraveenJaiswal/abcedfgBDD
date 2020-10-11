package Pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class SignUpPage 
{
	@FindBy(xpath = "//*[contains(text(),'Sign Up with Google')]")
	public static WebElement signUpGoogleBtn;

	@FindBy(xpath = "//*[contains(text(),'Sign Up with Facebook')]")
	public static WebElement signUpFeacbookBtn;
	
	@FindBy(xpath = "//input[@placeholder='Full Name']")
	public static WebElement fullNameTxtBox;
	
	@FindBy(xpath = "//input[@placeholder='Password']")
	public static WebElement passTxtBox;
	
	@FindBy(xpath = "//input[@placeholder='Email Address']")
	public static WebElement emailAddressTxtBox;
	
	@FindBy(xpath = "//a[contains(text(),'Sign In')]")
	public static WebElement signInLink;
	
	@FindBy(xpath = "//*[@class='error']")
	public static WebElement errorMsg;
}
