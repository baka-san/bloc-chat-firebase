(function(){ 

	function LandingCtrl($uibModal, $state, Auth) {
		var landing = this;
		landing.currentUser = Auth.currentUser;
		// console.log("user = " + Auth.currentUser )

		landing.loginModal = function() {
			var modalInstance = $uibModal.open({
				templateUrl: '/templates/loginModal.html',
				controller: 'ModalCtrl as modal'
			});
		}

		landing.signupModal = function() {
			var modalInstance = $uibModal.open({
				templateUrl: '/templates/signupModal.html',
				controller: 'ModalCtrl as modal'
			});
		}
		
			// if(landing.currentUser) {
			// 	$state.go("home");
			// }
		// }
	}

	angular
		.module('blocChat')
		.controller('LandingCtrl', LandingCtrl);

})();