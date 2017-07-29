(function() {
	function HomeCtrl(Room, $uibModal, $log, $document) {
		var home = this;
		home.room = Room;
		home.activeRoom = 'room1';


		home.openModal = function() {
			var modalInstance = $uibModal.open({
				templateUrl: '/templates/modalContent.html',
				controller: 'ModalCtrl as modal'
			});
		}
	}

	angular
		.module('blocChat')
		.controller('HomeCtrl', HomeCtrl);
})(); 