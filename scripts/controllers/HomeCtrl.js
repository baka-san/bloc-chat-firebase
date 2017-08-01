(function() {
	function HomeCtrl($uibModal, $cookies, Room, Message) {
		var home = this; 
		home.room = Room;
		home.activeRoom = null;
		home.currentUser = $cookies.get('blocChatCurrentUser');

		// Not a good approach
		// $scope.$watch('home.activeRoom', 
		// 	function(newActiveRoom, oldActiveRoom) {
		// 	home.messages = Message.getByRoomId(newActiveRoom['$id']);
		// });

		home.setActiveRoom = function(room) {
			home.activeRoom = room;
			home.messages = Message.getByRoomId(home.activeRoom.$id);
		};

		home.openModal = function() {
			var modalInstance = $uibModal.open({
				templateUrl: '/templates/newRoomModal.html',
				controller: 'ModalCtrl as modal'
			});
		}
	}

	angular
		.module('blocChat')
		.controller('HomeCtrl', HomeCtrl);
})(); 