'use strict';

var applicationUtils = {

    login: function(user, password) {
      element(by.model('vm.login.email')).sendKeys(user);
      element(by.model('vm.login.password')).sendKeys(password);
      element(by.css('[ng-click="vm.signIn();"]')).click();
    },

    addContact : function(name, email, phone){
      element(by.model('vm.contact.name')).sendKeys(name);
      element(by.model('vm.contact.email')).sendKeys(email);
      element(by.model('vm.contact.phone')).sendKeys(phone);
      element(by.css('.addcontact-btn')).click();
    },

    registration: function(user, password) {
      element(by.model('vm.register.email')).sendKeys(user);
      element(by.model('vm.register.password')).sendKeys(password);
      element(by.css('[ng-click="vm.signUp();"]')).click();
      element(by.css('.signinlink')).click();
    },

    editLastContact : function(){
      var lastContact = element.all(by.repeater('contact in vm.contacts')).last();
      lastContact.element(by.css('[ng-click="vm.showEditContact(contact);"]')).click();
      element(by.model('vm.name')).clear().then(function(){
          element(by.model('vm.name')).sendKeys("Protractor");
      });
      element(by.model('vm.email')).clear().then(function(){
          element(by.model('vm.email')).sendKeys("testing@gmail.com");
      });
      element(by.model('vm.phone')).clear().then(function(){
          element(by.model('vm.phone')).sendKeys("123456789");
      });
      element(by.css('.editcontact-btn')).click();
    },

    deleteFirstContact : function(){
      var firstContact = element.all(by.repeater('contact in vm.contacts')).first();
      firstContact.element(by.css('[ng-click="vm.removeContact(contact);"]')).click();
    }

};

module.exports = applicationUtils;
