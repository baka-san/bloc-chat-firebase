(function() {

	function User($firebaseAuth) {

		var authObj = $firebaseAuth();
		var User = {};

		// Pass credentials to Firebase for login
		User.authLogin = function(email, password) {
			authObj
				.$signInWithEmailAndPassword(email, password)
				.then(function(firebaseUser) {
			  	console.log("Signed in as:", firebaseUser.uid);
				}		
				.catch(function(error) {
			  	console.error("Authentication failed:", error);
			  });
		};
	}

	angular
		.module('blocChat')
		.factory('User', User);

})();