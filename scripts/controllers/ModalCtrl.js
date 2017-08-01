(function() {
	function ModalCtrl($uibModalInstance, Room) {
		var modal = this;

		// Accept the room entered in the input bar
		modal.acceptRoom = function(roomName) {
			Room.addRoom(roomName);
			$uibModalInstance.close();
		};

		// Accept the entered username
		modal.setUsername = function(username) {
			if(username) {
				$uibModalInstance.close(username);
			}
		};

		// Exit the modal window
		modal.cancel = function() {
			$uibModalInstance.dismiss('cancel');
		};
	}

	angular
		.module('blocChat')
		.controller('ModalCtrl', ModalCtrl);
})();