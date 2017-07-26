(function() {
	function HomeCtrl(Room, $uibModal, $log, $document) {
		var home = this;
		home.room = Room;
		home.rooms = Room.all;

		home.openModal = function() {

			var modalInstance = $uibModal.open({
				templateUrl: '/templates/modalContent.html',
				controller: 'ModalCtrl as modal'
				// How does resolve work???
				// resolve: {
				// 	newRoom: function() {
				// 		return home.newRoom;
				// 	}
				// }	
			});

			// Don't understand this
			// modalInstance.result.then(function (enteredRoomName) {
			//   home.newRoom = enteredRoomName;
			// }, function () {
			//   $log.info('Modal dismissed at: ' + new Date());
			// });
		}
	}

	angular
		.module('blocChat')
		.controller('HomeCtrl', HomeCtrl);
})(); 