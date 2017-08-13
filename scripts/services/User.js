(function() {

	function User($firebaseAuth) {

		authObj = $firebaseAuth();
		var User = {};

		// Pass credentials to Firebase to create a new user
		User.createUserFirebase = function(email, password) {
			authObj.$createUserWithEmailAndPassword(email, password)
			  .then(function(firebaseUser) {
			    console.log("User " + firebaseUser.uid + " created successfully!");
			  }).catch(function(error) {
			    console.error("Error: ", error);
			  });
		};

		// Pass credentials to Firebase for login
		User.loginFirebase = function(email, password) {
			authObj
				.$signInWithEmailAndPassword(email, password)
				.then(function(firebaseUser) {
			  	console.log("Signed in as:", firebaseUser.uid);
				})		
				.catch(function(error) {
			  	console.error("Authentication failed:", error);
			  });
		};

		return User;
	}

	angular
		.module('blocChat')
		.factory('User', User);

})();