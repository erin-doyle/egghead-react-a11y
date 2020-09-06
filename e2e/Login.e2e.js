const AxeBuilder = require('axe-webdriverjs');
const WebDriver = require('selenium-webdriver');

const driver = new WebDriver.Builder()
  .forBrowser('chrome')
  .build();

driver
  .get('localhost:3000/login')
  .then(function() {
    AxeBuilder(driver).analyze(function(err, results) {
      if (err) {
        // Handle error somehow
      }
      console.log(results);
    });
  });
