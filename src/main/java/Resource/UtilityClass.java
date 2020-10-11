package Resource;

import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.Random;
import java.util.Scanner;
import org.apache.commons.io.FileUtils;
import org.apache.log4j.Logger;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

public class UtilityClass extends BaseClass {

	public static Logger log = LoggerHelper.getLogger(UtilityClass.class);
	public static String dateToSelect;
	Actions act = new Actions(driver);
	public static WebDriverWait wait = new WebDriverWait(driver, 10);
	static JavascriptExecutor js = (JavascriptExecutor) driver;
	public static String screenshotName;

//***************************************************************************************
//							Upload file code
//***************************************************************************************

	public static void uploadFile() throws Throwable {
		// Runtime.getRuntime().exec(
		// "src/main/java/Resource/FileUpload1.exe
		// C:\\Users\\prave\\Videos\\UKBrowserStackFM\\Images\\smile.jpg");

		Robot robot = new Robot();
		RobotUtil.typeKeys("C:\\aaaa.jpg", robot);
		robot.keyPress(KeyEvent.VK_ENTER);
	}

	public static void uploadAnyFileType(String filePath) throws Throwable {

		Robot robot = new Robot();
		RobotUtil.typeKeys(filePath, robot);
		robot.keyPress(KeyEvent.VK_ENTER);
	}

//***************************************************************************************
//							Dropdown Code
//***************************************************************************************

	public void dropDownHandle(List<WebElement> ele, String str) throws Throwable {
		int ddSize = ele.size();

		for (int i = 0; i < ddSize; i++) {
			log.info("Values available on dropdown are: " + ele.get(i).getText());
			Thread.sleep(1000);
			if (ele.get(i).getText().equalsIgnoreCase(str)) {
				log.info("Clicking on dropdown value: " + ele.get(i).getText());
				ele.get(i).click();
				break;
			}
		}
	}

//***************************************************************************************
//						Search Code
//***************************************************************************************

	public void searchHandle(List<WebElement> ele, String str) throws Throwable {
		int ddSize = ele.size();

		for (int i = 0; i < ddSize; i++) {
			log.info("Values available on search results are: " + ele.get(i).getText());
			Thread.sleep(1000);
		}
	}

//***************************************************************************************
//							Button click Code
//***************************************************************************************
	public static void clickButton(WebElement ele) {
		try {
			wait.until(ExpectedConditions.visibilityOf(ele));
			log.info("Clicking on --->" + ele.getText() + " Button");
			ele.click();

		} catch (Exception e) {
			e.printStackTrace();
			log.info(e.getMessage());
		}
	}

//***************************************************************************************
//								Wait for Element Code
//***************************************************************************************

	public static void waitForElement(WebElement ele) {
		try {
			wait.until(ExpectedConditions.visibilityOf(ele));
			log.info("wait for element ele value" + ele);
		} catch (Exception e) {
			e.printStackTrace();
			log.info(e.getMessage());
			System.out.println("Element doesn't exist verify it...!!!");
		}
	}

//***************************************************************************************
//									Toast message Code
//***************************************************************************************

	public static void verifyToastMsg(WebElement ele, String expectedToastMSg) {

		System.out.println("Verifying toastmessage method of utility class");
		UtilityClass.waitForElement(ele);
		String toastMsgTxt = ele.getText();
		log.info("**********************************************");
		log.info("Toast message is----> " + toastMsgTxt);
		log.info("**********************************************");
		Assert.assertEquals(toastMsgTxt, expectedToastMSg);
	}

//***************************************************************************************
//	scroll Code
//***************************************************************************************

	public static void scrollToElement() {

		js.executeScript("javascript:window.scrollBy(250,350)");
	}

//***************************************************************************************
//	read Generic email id
//***************************************************************************************

	public static String readEmailId() throws Throwable {

		File myObj = new File("dummyEmail.txt");
		Scanner myReader = new Scanner(myObj);
		String data = myReader.nextLine();
		System.out.println(data);
		return data;
	}

//***************************************************************************************
//		read create email id
//***************************************************************************************

	public static void createFile() {
		try {
			File myObj = new File("dummyEmail.txt");
			if (myObj.createNewFile()) {
				System.out.println("File created: " + myObj.getName());
				writeFile();
			} else {
				System.out.println("File already exists.");
				writeFile();
			}
		} catch (IOException e) {
			System.out.println("An error occurred.");
			e.printStackTrace();
		}
	}

//***************************************************************************************
//		write Generic email id
//***************************************************************************************

	public static void writeFile() {
		try {
			FileWriter myWriter = new FileWriter("dummyEmail.txt");
			// String userName = "Hello";
			Random randomGenerator = new Random();
			int randomInt = randomGenerator.nextInt(1000);
			String emailValue = "jb" + randomInt + "@yopmail.com";
			myWriter.write(emailValue);
			myWriter.close();
			System.out.println("Successfully wrote to the file.");
		} catch (IOException e) {
			System.out.println("An error occurred.");
			e.printStackTrace();
		}
	}

	public static void captureScreenshot() throws Exception {
		File scr = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
		Date d = new Date();
		String screenshotName = d.toString().replace(":", "_").replace(" ", "_") + ".jpg";
		FileUtils.copyFile(scr, new File(System.getProperty("user.dir") + "\\target\\reports\\" + screenshotName));
		Thread.sleep(3000);
	}

	public static String getReportConfigPath() {
		String reportConfigPath = prop.getProperty("reportConfigPath");
		if (reportConfigPath != null)
			return reportConfigPath;
		else
			throw new RuntimeException(
					"Report Config Path not specified in the Configuration.properties file for the Key:reportConfigPath");
	}

	

}
