(function() {

	function Auth($firebaseAuth, $state) {

		authObj = $firebaseAuth();
		var Auth = {};

		// Set the current user
		Auth.currentUser = firebase.auth().onAuthStateChanged(function(user) {
  		// User is signed in.
  		// console.log("inside Auth.currentUser")
  		if (user) {
    		return user
  		}
  		// No user is signed in.
  		else {
    		return null;
  		}
  	});

		// Pass credentials to Firebase to create a new user
		Auth.createUserFirebase = function(email, password, username) {
			authObj
				.$createUserWithEmailAndPassword(email, password)
			  .then(function(firebaseUser) {
			    console.log("User " + firebaseUser.uid + " created successfully!");

			    // Save user to database
			    // what's available to firebaseUser??
			  	var ref = firebase.database().ref().child("users");

			  	ref.child(firebaseUser.uid).set({
        		username: username,
        		email: email
          	//some more user data
          });    

			  	// Go to chat dashboard page after sign up
          $state.go("home");
			  })
			  .catch(function(error) {
			    console.error("Error: ", error);
			  });
		};

		// Pass credentials to Firebase for login
		Auth.loginFirebase = function(email, password) {
			authObj
				.$signInWithEmailAndPassword(email, password)
				.then(function(firebaseUser) {
			  	console.log("Signed in as:", firebaseUser.uid);

		  	// Go to chat dashboard page after logging in
        $state.go("home");

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