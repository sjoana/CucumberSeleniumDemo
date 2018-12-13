package stepDefinition;

import java.awt.*;
import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.junit.Assert;

import org.openqa.selenium.Point;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import org.apache.commons.io.FileUtils;

public class Test_Steps {

    WebDriver driver;

    @Given("^I open the page url$")
    public void openURL(DataTable table){

        ChromeOptions options = new ChromeOptions();

        options.addArguments("test-type");
        options.addArguments("start-maximized");
        options.addArguments("--disable-popup-blocking");
        options.addArguments("--disable-default-apps");
        options.addArguments("disable-infobars");
        //options.addArguments("--log-level=3");
        options.addArguments("--silent");

        driver = new ChromeDriver(options);
        driver.manage().window().fullscreen();

        String url = "";
        for (Map<String, String> map : table.asMaps(String.class, String.class)) {
            url = map.get("url");
        }

        driver.get(url);
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
    }

    @Given("^I create a new account$")
    public void createAccount(DataTable table){

        driver.findElement(By.id("nav-link-yourAccount")).click();
        driver.findElement(By.id("createAccountSubmit")).click();

        for (Map<String, String> map : table.asMaps(String.class, String.class)) {
            String username = map.get("username");
            String email = map.get("email");
            String password = map.get("password");

            driver.findElement(By.id("ap_customer_name")).sendKeys(username);
            driver.findElement(By.id("ap_email")).sendKeys(email);
            driver.findElement(By.id("ap_password")).sendKeys(password);
            driver.findElement(By.id("ap_password_check")).sendKeys(password);
            driver.findElement(By.id("continue")).click();

            driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        }
    }

    @Then("^User already exists$")
    public void verifySuccessful(DataTable table){

        for (Map<String, String> map : table.asMaps(String.class, String.class)) {
            String expectedText = map.get("result");

            WebElement errorMessage = driver.findElement(By.xpath("//*[@id=\"authportal-main-section\"]/div[2]/div/div[1]/div/div/h4"));
            Assert.assertEquals(errorMessage.getText(),expectedText);

        }
    }

    @Given ("^I make login into the page$")
    public void makeLogin(DataTable table) {

        driver.findElement(By.id("nav-link-yourAccount")).click();

        for (Map<String, String> map : table.asMaps(String.class, String.class)) {
            String email = map.get("email");
            String password = map.get("password");

            driver.findElement(By.id("ap_email")).sendKeys(email);
            driver.findElement(By.id("ap_password")).sendKeys(password);
            driver.findElement(By.id("signInSubmit")).click();

            driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        }
    }

    @Then("^The login is (.*?)$")
    public void checkLogin(String option, DataTable table){

        for (Map<String, String> map : table.asMaps(String.class, String.class)) {
            String expectedText = map.get("result");

            if(option.equals("wrong"))
            {
                WebElement errorMessage = driver.findElement(By.xpath("//*[@id=\"auth-error-message-box\"]/div/div/ul/li/span"));
                Assert.assertEquals(errorMessage.getText(),expectedText);
            }
            else
            {
                WebElement sucessMessage = driver.findElement(By.xpath("//*[@id=\"nav-link-yourAccount\"]/span[1]"));
                Assert.assertEquals(sucessMessage.getText(),expectedText);
            }

        }
    }

    @And ("^I make a search for a book$")
    public void search(DataTable table) {

        Select typeSearch = new Select(driver.findElement(By.id("searchDropdownBox")));
        typeSearch.selectByVisibleText("Books");

        for (Map<String, String> map : table.asMaps(String.class, String.class)) {
            String elementToSearch = map.get("search");

            driver.findElement(By.id("twotabsearchtextbox")).sendKeys(elementToSearch);
            driver.findElement(By.className("nav-input")).click();

            driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);

            WebElement listOfResults = driver.findElement(By.id("atfResults"));
            WebElement sublistOfResults = listOfResults.findElement(By.tagName("ul"));
            List<WebElement> resultList = sublistOfResults.findElements(By.tagName("li"));
            for (WebElement r: resultList) {
                WebElement bookName = r.findElement(By.tagName("h2"));
                Assert.assertTrue(bookName.getText().contains(elementToSearch));
                break;
            }

            sublistOfResults.findElement(By.partialLinkText(elementToSearch)).click();

        }
    }

    @And ("^I check the author$")
    public void author(DataTable table) {

        for (Map<String, String> map : table.asMaps(String.class, String.class)) {
            String author = map.get("author");

            WebElement authorLabel = driver.findElement(By.xpath("//*[@id=\"bylineInfo\"]/span[1]/span[1]/a[1]"));
            Assert.assertTrue(authorLabel.getText().contains(author));

        }
    }

    @And("^I search from (.*?) comment$")
    public void searchFrom(String option, DataTable table) throws InterruptedException{

        driver.findElement(By.xpath("//*[@id=\"reviews-medley-footer\"]/div[2]/a")).click();

        for (Map<String, String> map : table.asMaps(String.class, String.class)) {
            String search = map.get("search");
            boolean found = false;

            List<WebElement> paginationElements = driver.findElements(By.className("page-button"));
            WebElement lastPaginationButton = paginationElements.get((paginationElements.size())-1);
            int nrPages = Integer.parseInt(lastPaginationButton.getText());

            if ("rating".equals(option)) {
                Select rating = new Select(driver.findElement(By.id("star-count-dropdown")));
                rating.selectByVisibleText(search);
                int nrRatingResults = driver.findElements(By.xpath("//div[@data-hook='review']")).size();
                Assert.assertTrue(nrRatingResults > 0);
            } else if ("user".equals(option)) {
                for (int i = 0; i < nrPages; i++) {

                    List<WebElement> profiles = driver.findElements(By.id("cm_cr-review_list"));
                    for (WebElement p : profiles) {
                        Thread.sleep(1000);
                        List<WebElement> reviews = p.findElements(By.cssSelector("div[data-hook='review']"));
                        for (WebElement t : reviews) {

                            if (t.findElement(By.className("a-profile-name")).getText().contains(search)) {
                                found = true;
                                break;
                            }
                        }

                    }

                    driver.findElement(By.className("a-last")).click();

                }

                Assert.assertTrue(found);


                for (int i = 0; i < nrPages; i++) {

                    List<WebElement> profiles = driver.findElements(By.id("cm_cr-review_list"));
                    for (WebElement p : profiles) {
                        Thread.sleep(1000);
                        List<WebElement> reviews = p.findElements(By.cssSelector("div[data-hook='review']"));
                        for (WebElement t : reviews) {

                            if (t.findElement(By.cssSelector("span[data-hook='review-date']")).getText().equals(search)) {
                                found = true;
                                break;
                            }
                        }

                    }

                    driver.findElement(By.className("a-last")).click();

                }

                Assert.assertTrue(found);
            } else if ("date".equals(option)) {
                for (int i = 0; i < nrPages; i++) {

                    List<WebElement> profiles = driver.findElements(By.id("cm_cr-review_list"));
                    for (WebElement p : profiles) {
                        Thread.sleep(1000);
                        List<WebElement> reviews = p.findElements(By.cssSelector("div[data-hook='review']"));
                        for (WebElement t : reviews) {

                            if (t.findElement(By.cssSelector("span[data-hook='review-date']")).getText().equals(search)) {
                                found = true;
                                break;
                            }
                        }

                    }

                    driver.findElement(By.className("a-last")).click();

                }

                Assert.assertTrue(found);
            }

        }

    }

    @And ("^I make a search$")
    public void movieSearch(DataTable table) throws InterruptedException {



        Select typeSearch = new Select(driver.findElement(By.id("searchDropdownBox")));
        typeSearch.selectByVisibleText("All Departments");

        for (Map<String, String> map : table.asMaps(String.class, String.class)) {
            String search = map.get("search");
            String find = map.get("found");
            boolean found = false;

            driver.findElement(By.id("twotabsearchtextbox")).sendKeys(search);
            driver.findElement(By.className("nav-input")).click();

            driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);

            WebElement listOfResults = driver.findElement(By.id("atfResults"));
            WebElement sublistOfResults = listOfResults.findElement(By.tagName("ul"));
            List<WebElement> resultList = sublistOfResults.findElements(By.tagName("li"));
            for ( WebElement r: resultList) {
                WebElement bookName = r.findElement(By.tagName("h2"));

                if(bookName.getText().contains(find))
                {
                    found = true;
                    sublistOfResults.findElement(By.partialLinkText(find)).click();
                    break;
                }

            }

            Assert.assertTrue(found);

        }
    }

    @And ("^I search from description$")
    public void searchDescription(DataTable table) throws InterruptedException {

        for (Map<String, String> map : table.asMaps(String.class, String.class)) {
            String description = map.get("description");

            WebElement context = driver.findElement(By.id("atf"));
            WebElement divSynopsis = context.findElement(By.cssSelector("div[data-automation-id='synopsis']"));
            WebElement desc = divSynopsis.findElement(By.xpath("//*[contains(text(), '"+description+"')]"));

            Assert.assertTrue(desc.getText().contains(description));

        }
    }

    @Then ("^I take a screenshot in the trailer$")
    public void takeScreenshot() throws InterruptedException, IOException, AWTException {

        WebDriverWait wait = new WebDriverWait(driver, 30);
        WebElement context = driver.findElement(By.cssSelector("a[data-video-type='Trailer']"));
        context.click();

        wait.until(ExpectedConditions.visibilityOfElementLocated(By.className("pausedOverlay")));
        WebElement pause = driver.findElement(By.className("pausedOverlay"));
        pause.click();

        Point coordinates = driver.findElement(By.className("webPlayerElement")).getLocation();
        Robot robot = new Robot();
        robot.mouseMove(coordinates.getX()+600,coordinates.getY()+400);


        wait.until(ExpectedConditions.visibilityOfElementLocated(By.className("fastSeekForward")));
        WebElement tenSeconds = driver.findElement(By.className("fastSeekForward"));
        tenSeconds.click();

        wait.until(ExpectedConditions.visibilityOfElementLocated(By.className("playIcon")));
        WebElement play = driver.findElement(By.className("playIcon"));
        play.click();

        File scrFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
        FileUtils.copyFile(scrFile, new File("screenshots/screenshot.png"));
    }

    @After
    public void afterScenario(){
        driver.close();
    }
}