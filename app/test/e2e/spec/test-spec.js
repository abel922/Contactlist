var applicationUtils = require('../utils/applicationUtils.js');

describe("Application Functionality Check", function () {

    var user = "Protractor";
    var password = "12345678";

    var name = "Test";
    var email = "test@test.com";
    var phone = "654356724";

    it('Getting Web Page ', function () {
        browser.get('http://localhost:8080/app/#/');
    });

    it('Login Check Without Registration', function () {
        applicationUtils.login(user, password);
        element(by.css('.register-view')).click();
    });

    it('Registration Check', function () {
        applicationUtils.registration(user, password);
    });

    it('Login Check After Registration', function () {
        applicationUtils.login(user, password);
    });

    it('After login adding a contact in contact list', function () {
        applicationUtils.addContact(name, email, phone);
    });

    it('Edit  first contact in contact list', function () {
        applicationUtils.editLastContact();
    });

    it('Deleting  first contact in contact list', function () {
        applicationUtils.deleteFirstContact();
    });

    it('Logout After do changes in contact list', function () {
        element(by.css('.logout')).click();
    });

});
