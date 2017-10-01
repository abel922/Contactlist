exports.config = {

    allScriptsTimeout: 11000,

    seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: ['../spec/test-spec.js'],

    capabilities: {
        browserName: 'chrome'
    },

    directConnect: true,


    //make the browser maximized so that it suits for all kinds of devices;
    // some tests are failing when run in lower resolutions.
    //however this issue is only in firefox.
    onPrepare: function () {
        browser.driver.manage().window().maximize();
    },

    framework: 'jasmine',

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,             // Use colors in the command line report.
        isVerbose: true,              //display spec names as they are being executed
        includeStackTrace: true,      //print stack trace when things go wrong
        defaultTimeoutInterval: 360000 //set 15 second default timeout
    }

};
