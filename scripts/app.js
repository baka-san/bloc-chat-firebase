(function() {
	function config($locationProvider, $stateProvider) {
	    $locationProvider
	        .html5Mode({
	            enabled: true,
	            requireBase: false
	         });
	
	    $stateProvider
	        .state('home', {
	            url: '/',
	            controller: 'HomeCtrl as home',
	            templateUrl: '/templates/home.html',
	            resolve: {
	              // controller will not be loaded until $requireSignIn resolves
	              currentAuth: function(Auth) {
	                // $requireSignIn returns a promise so the resolve waits for it to complete
	                // If the promise is rejected, it will throw a $stateChangeError (see above)
	                return Auth.requireSignInFirebase();
	              }
	            }
	        })
	        .state('landing', {
	            url: '/landing',
	            controller: 'LandingCtrl as landing',
	            templateUrl: '/templates/landing.html',
	            resolve: {
	              // controller will not be loaded until $waitForSignIn resolves
	              currentAuth: function(Auth) {
	                // $waitForSignIn returns a promise so the resolve waits for it to complete
	                return Auth.waitForSignInFirebase();
	              }
	            }
	        });
	}

	angular
		.module('blocChat', ['ui.router', 'firebase', 
			'ui.bootstrap', 'ngCookies'])
		.config(config)
		.run(["$rootScope", "$state", function($rootScope, $state) {
		  	$rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
			    // We can catch the error thrown when the $requireSignIn promise is rejected
			    // and redirect the user back to the home page
			    alert("Must sign in");
			    if (error === "AUTH_REQUIRED") {
			      $state.go("landing");
			    }
		  	});
		}]);
})();