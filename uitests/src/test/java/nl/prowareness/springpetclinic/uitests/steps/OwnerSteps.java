package nl.prowareness.springpetclinic.uitests.steps;

import com.sun.jna.platform.FileUtils;
import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.*;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import java.io.File;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

/**
 * Created by harm on 15-6-2017.
 */
public class OwnerSteps {

    private WebDriver webDriver;

    @Before
    public void loadWebDriver() throws MalformedURLException {
        String remoteUrl = System.getProperty("remoteUrl");
        webDriver = remoteUrl != null ?
            new RemoteWebDriver(new URL(remoteUrl), DesiredCapabilities.firefox()) :
            new FirefoxDriver();

        webDriver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        webDriver.manage().window().maximize();
    }

    @After
    public void quit() {
        webDriver.quit();

    }

    @Given("^there is an owner \"([^\"]*)\"$")
    public void there_is_an_owner(String ownerName) throws Throwable {
        // Normally, this would be the step where we make sure the owner is there
    }

    @When("^I search for \"([^\"]*)\"$")
    public void i_search_for(String lastName) {
        webDriver.get(System.getProperty("appUrl") + "owners/find.html");
        WebElement element = webDriver.findElement(By.name("lastName"));
        element.sendKeys(lastName);
        element.submit();
    }

    @Then("^I should get \"([^\"]*)\" back$")
    public void i_should_get_one_result_back(String name) throws Throwable {
        WebElement element = webDriver.findElement(By.cssSelector("body > div > div > table:nth-child(2) > tbody > tr:nth-child(1) > td > b"));
        Assert.assertEquals(name, element.getText());
    }

    @Then("^I should get (\\d+) results back$")
    public void i_should_get_n_results_back(int nr) throws Throwable {
        int number = webDriver.findElements(By.cssSelector("#owners > tbody > tr")).size();
        Assert.assertEquals(nr, number);
    }

    @Then("^I should get no results back$")
    public void i_should_get_no_results_back() throws Throwable {
        WebElement element = webDriver.findElement(By.id("owner.errors"));
        Assert.assertEquals("has not been found", element.getText());
    }
}
