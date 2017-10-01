(function() {
    "use strict";

// Declare app level module which depends on views, and components
angular
      .module('myApp', ['ngRoute',"ngResource",'firebase'])
      .config(configApp);

 function configApp($routeProvider,$locationProvider,$provide){

  $routeProvider
    .when('/login', {
        templateUrl: 'components/login/view/login.html',
        controller: 'loginCtrl as vm'
    })
    .when('/register', {
        templateUrl: 'components/register/view/register.html',
        controller: 'registerCtrl as vm'
    })
    .when('/contacts', {
		   resolve: {
			    check: function($location, authService) {
				    if(!authService.isUserLoggedIn()) {
					     $location.path('/login');
				    }else{
               $location.path('/contacts');
            }
			    }
		   },
       templateUrl: 'components/contacts/view/contacts.html',
       controller: 'ContactsCtrl as vm'
	  })
    .when('/logout', {
       resolve: {
          deadResolve: function($location, authService){
            authService.cleanUserData();
            $location.path('/login');
          }
        }
    })
    .otherwise({
      redirectTo: '/login'
    });

  /*Alert exceptions with $exceptionHandler*/
  $provide.decorator("$exceptionHandler",
    ["$delegate",
      function($delegate){
         return function (exception, cause){
           exception.message = "Exception-> \n Message: " + exception.message;
           $delegate(exception,cause);
           alert(exception.message);
         };
      }]);
  }

})();
