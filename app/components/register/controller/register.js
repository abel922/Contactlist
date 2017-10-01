(function () {
    'use strict';
    angular.module('myApp').controller('registerCtrl', registerCtrl);

  function registerCtrl($scope,$http){

    var vm = this;
    vm.register = {email: null, password: null};

    vm.signUp = signUp;
    vm.cleanMessage = cleanMessage;

    function signUp(){

        vm.userCreated = "";
        var email = vm.register.email;
        var password = vm.register.password;

        $http({
           url: 'http://localhost/Contactlist/app/server/register.php',
           method: 'POST',
           headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
           },
           data: 'email='+email+'&password='+password
        }).then(function(response){
            if(response.data.status == 'done'){
                console.log(response);
                vm.userCreated = vm.register.email + " registered correctly!";
                vm.cleanMessage();
            }else{
                vm.userCreated = vm.register.email + " exists in database!";
                vm.cleanMessage();
                console.log('invalid register');
            }
        },
        function(error){
          console.log("Error: " + error);
        });
    };

    function cleanMessage(){
       setTimeout(function(){
          $scope.$apply(function(){
             vm.userCreated = "";
          });
       },5000);
    }

  }
})();
