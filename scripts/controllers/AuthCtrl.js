(function(){ 

	function AuthCtrl($firebaseAuth, User) {
		var auth = this;

		auth.login = function(email, password) {
			User.authenticateLogin(email, password);
		};

	}

	angular
		.module('blocChat')
		.controller('AuthCtrl', AuthCtrl);

})();