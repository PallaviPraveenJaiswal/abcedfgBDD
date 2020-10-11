package runner;

import org.junit.runner.RunWith;
import org.testng.annotations.BeforeClass;

import com.cucumber.listener.ExtentProperties;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;
 

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/java/features", 
	glue = { "StepDefinition" }, 
	plugin = {"com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html"},
	//plugin = {"com.cucumber.listener.ExtentCucumberFormatter:" }, 
	format = { "pretty","html:target/htmlreports" }, 
	monochrome = true
	// tags = {"@SignUp, @Login, @Notification"}
	//tags = {"@Login1"}
)

public class TestFeatureRunner extends AbstractTestNGCucumberTests {
	
	@BeforeClass
	public static void writeExtentReport() {
		ExtentProperties extentProperties = ExtentProperties.INSTANCE;
		extentProperties.setReportPath("ExtentReport/myreport.html");
	}
	
	
	
}