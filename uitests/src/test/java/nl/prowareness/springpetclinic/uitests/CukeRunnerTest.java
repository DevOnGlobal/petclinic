package nl.prowareness.springpetclinic.uitests;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 * Created by harm on 15-6-2017.
 */
@RunWith(Cucumber.class)
@CucumberOptions(//
    plugin = { "pretty", "html:out" } //
)
public class CukeRunnerTest {
}
