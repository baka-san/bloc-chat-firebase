(function() {
	function ModalCtrl($uibModalInstance, Room) {
		var modal = this;
		// $scope.newRoom = newRoom;

		// Accept the room entered in the input bar
		modal.acceptRoom = function(roomName) {
			Room.addRoom(roomName);
			// What about the return value here???
			$uibModalInstance.close();
		};
		
		// modal.accept = function() {
		// 	// What about the return value here???
		// 	// $uibModalInstance.close(newRoom);
		// };

		// Exit the modal window
		modal.cancel = function() {
			$uibModalInstance.dismiss('cancel');
		};

	}

	angular
		.module('blocChat')
		.controller('ModalCtrl', ModalCtrl);
})();