(function() {
    "use strict";
    angular.module('myApp').service('authService', authService);

    function authService(){

      var email = "";
      var loggedin = false;
      var id = "";

      this.setUserName = function(name){
          email = name;
      }
      this.getUserName = function(){
          return email;
      }
      this.setUserId = function(userID){
         id = userID;
      }
      this.getUserId = function(){
         return id;
      }

      this.isUserLoggedIn = function(){
        if(!!localStorage.getItem('login')){
          loggedin = true;
          var data = JSON.parse(localStorage.getItem('login'));
          email = data.email;
          id = data.id;
        }
        return loggedin;
      }

      this.saveData = function(data){
          email = data.user;
          id = data.id;
          loggedin = true;
          localStorage.setItem('login',JSON.stringify({
              email: email,
              id: id
          }));
      }

      this.cleanUserData = function(){
        localStorage.removeItem('login');
        email = "";
        id = "";
        loggedin = false;
      }

    }
})();
