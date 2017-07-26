(function() {
	function ModalCtrl($scope, $uibModalInstance, newRoom) {

		$scope.newRoom = newRoom;
		
		$scope.accept = function() {
			// alert(newRoom);	
			$uibModalInstance.close($scope.newRoom);
		};

		$scope.cancel = function() {
			$uibModalInstance.dismiss('cancel');
		};

	}

	angular
		.module('blocChat')
		.controller('ModalCtrl', ModalCtrl);

})();