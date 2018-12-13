import org.junit.AfterClass;
import org.junit.runner.JUnitCore;
import org.apache.commons.io.FileUtils;

import java.io.File;
import java.io.IOException;

public class Main {

    public static void main(String[] args) {

        System.out.println("Running tests!");
        JUnitCore.main(TestRunner.class.getCanonicalName());

    }

    @AfterClass
    public static void tearDown() {




    }
}
