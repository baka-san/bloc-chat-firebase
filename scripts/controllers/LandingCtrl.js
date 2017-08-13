(function(){ 

	function LandingCtrl($uibModal) {
		var landing = this;

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
	}

	angular
		.module('blocChat')
		.controller('LandingCtrl', LandingCtrl);

})();