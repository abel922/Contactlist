(function () {
  'use strict';
    angular.module('myApp').controller('loginCtrl', loginCtrl);

  function loginCtrl($scope,$location,$http,authService){

    var vm = this;
    vm.login = {email: null, password: null};

    vm.signIn = signIn;
    vm.cleanMessage = cleanMessage;

    function signIn(){

        vm.wrongUser = "";
        var email = vm.login.email;
        var password = vm.login.password;

        $http({
           url: 'http://localhost/Contactlist/app/server/signin.php',
           method: 'POST',
           headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
           },
           data: 'email='+email+'&password='+password
        }).then(function(response){
            if(response.data.status == 'loggedin'){
              authService.saveData(response.data);
              $location.path('/contacts');
            }else{
              vm.wrongUser = "Something is wrong, check the username/email or password!";
              vm.cleanMessage();
              console.log('invalid login');
            }
        },
        function(error){
          console.log("Error: " + error);
        });
    }

    function cleanMessage(){
       setTimeout(function(){
          $scope.$apply(function(){
             vm.wrongUser = "";
          });
       },5000);
    }
  }

})();
