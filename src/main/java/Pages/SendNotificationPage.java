package Pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class SendNotificationPage {
	@FindBy(xpath = "//*[contains(text(),'Admin Management')]")
	public static WebElement adminMgmtMenu;
		
	@FindBy(xpath = "//div[contains(text(),'Users')]")
	public static WebElement userTab;
	
	@FindBy(xpath = "(//h3[contains(text(),'Savalas Colbert')]/following::button)[1]")
	public static WebElement notificationPersonBtn;

	@FindBy(id = "modal-notif-to-user-1___BV_modal_content_")
	public static WebElement alertBoxNotification;
	
	@FindBy(xpath = "//input[@value='email']")
	public static WebElement emailChkBox;
	
	@FindBy(xpath = "//*[contains(text(),'Push')]")
	public static WebElement pushChkBox;
	
	@FindBy(xpath = "//*[contains(text(),'SMS')]")
	public static WebElement smsChkBox;
	
	@FindBy(xpath = "//button[contains(text(),'SEND')]")
	public static WebElement sendNotificationBtn;
	
	@FindBy(xpath = "//input[@placeholder='Enter subject']")
	public static WebElement enterSubjectTxtBox;
	
	@FindBy(xpath = "//input[@placeholder='Custom body']")
	public static WebElement customBodyTxtBox;
	
	@FindBy(xpath = "//select[@id='__BVID__151']")
	public static WebElement emailTmplateDD;

}
