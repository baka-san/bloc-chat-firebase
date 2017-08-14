(function() {

	function Auth($firebaseAuth) {

		authObj = $firebaseAuth();
		var Auth = {};

		// Pass credentials to Firebase to create a new user
		Auth.createUserFirebase = function(email, password) {
			authObj
				.$createUserWithEmailAndPassword(email, password)
			  .then(function(firebaseUser) {
			    console.log("User " + firebaseUser.uid + " created successfully!");
			  }).catch(function(error) {
			    console.error("Error: ", error);
			  });
		};

		// Pass credentials to Firebase for login
		Auth.loginFirebase = function(email, password) {
			authObj
				.$signInWithEmailAndPassword(email, password)
				.then(function(firebaseUser) {
			  	console.log("Signed in as:", firebaseUser.uid);
				})		
				.catch(function(error) {
			  	console.error("Authentication failed:", error);
			  });
		};

		// Wait for user to sign in
		Auth.waitForSignInFirebase = function() {
			return authObj.$waitForSignIn();
		};

		// Require a user to sign in
		Auth.requireSignInFirebase = function() {
			return authObj.$requireSignIn();
		};

		return Auth;
	}

	angular
		.module('blocChat')
		.factory('Auth', Auth);
})();