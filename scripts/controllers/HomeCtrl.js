(function() {
	function HomeCtrl(Room, $uibModal, $log, $document) {
		var home = this;
		home.room = Room;
		home.rooms = Room.all;
		// home.newRoom = 'default';

		home.openModal = function() {

			//home.newRoom = 'default';

			var modalInstance = $uibModal.open({
				templateUrl: '/templates/modalContent.html',
				controller: 'ModalCtrl as modal',
				resolve: {
					newRoom: function() {
						return home.newRoom;
					}
				}
				
			});

			modalInstance.result.then(function (enteredRoomName) {
			  home.newRoom = enteredRoomName;
			}, function () {
			  $log.info('Modal dismissed at: ' + new Date());
			});
		}
	}

	angular
		.module('blocChat')
		.controller('HomeCtrl', HomeCtrl);
})(); 