(function () {
    'use strict';
    angular.module('myApp').controller('ContactsCtrl', ContactsCtrl);

function ContactsCtrl($scope,$firebaseArray,authService){

  var vm = this;
  vm.userName= authService.getUserName();
  vm.message = "";
  vm.addFormShow = true;
  vm.editFormShow = false;

  vm.showEditContact = showEditContact;
  vm.showAddContact = showAddContact;
  vm.addContact = addContact;
  vm.editContact = editContact;
  vm.removeContact = removeContact;
  vm.setToEmptyProperties = setToEmptyProperties;
  vm.cleanMessage = cleanMessage;

  /*Connection with firebase contactlist*/
  var ref = firebase.database().ref("contactlist");
  vm.contacts = $firebaseArray(ref);

  function showEditContact(contact){
    vm.addFormShow = false;
    vm.editFormShow = true;

    vm.id = contact.$id;
    vm.name = contact.name;
    vm.email = contact.email;
    vm.phone = contact.phone;
  }

  function showAddContact(){
    vm.addFormShow = true;
    vm.editFormShow = false;
  }

	function addContact(){
    vm.contacts.$add(vm.contact)
    .then(function(ref){
      vm.message = vm.contact.name +" Added Succesfully!"
      vm.cleanMessage();
    },
    function(error){
      console.log("Error adding contact: " + error);
    });
     vm.setToEmptyProperties();
	}

  function editContact(){

    var id = vm.id;
    var record = vm.contacts.$getRecord(id);
    record.name =  vm.name;
    record.email = vm.email;
    record.phone = vm.phone;

    vm.contacts.$save(record)
    .then(function(ref){
      vm.message = record.name + " Updated Succesfully!";
      vm.cleanMessage();
      console.log("User key: " + ref.key);
    },
    function(error){
      console.log("Error updating contact: " + error);
    });
  }

  function removeContact(contact){
    vm.contacts.$remove(contact)
    .then(function(ref){
      vm.message = "Contact Deleted Succesfully!";
      vm.cleanMessage();
    },
    function(error){
      console.log("Error deleting contact: " + error);
    });
  }

  function setToEmptyProperties(){
    vm.contact.name= "";
    vm.contact.email= "";
    vm.contact.phone= "";
  }

  function cleanMessage(){
     setTimeout(function(){
        $scope.$apply(function(){
           vm.message = "";
        });
     },3000);
  }

 }
})();
