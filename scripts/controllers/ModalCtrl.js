(function() {
	function ModalCtrl($uibModalInstance, Room, User) {
		var modal = this;
		modal.room = Room;
		modal.user = User;

		// modal.authObj = $firebaseAuth();

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

		// Create a user
		modal.createUser = function(email, password) {
			modal.user.createUserFirebase(email, password);
			$uibModalInstance.close();
		};

		// Log in the user
		modal.loginUser = function(email, password) {
			modal.user.loginFirebase(email, password);
			$uibModalInstance.close();
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