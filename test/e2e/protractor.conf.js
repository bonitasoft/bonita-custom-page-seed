'use strict';
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
    'scenario.js'
  ],
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  },
  onPrepare: function(){
    browser.driver.get('http://localhost:8080/bonita/login.jsp');
    browser.driver.findElement(by.id('username')).sendKeys('walter.bates');
    browser.driver.findElement(by.id('password')).sendKeys('bpm');
    browser.driver.findElement(by.css('[type=submit]')).click();

    browser.driver.wait(function() {
      return browser.driver.getCurrentUrl().then(function(url) {
        return /portal/.test(url);
      });
    });
  }
};
