(function() {
	function HomeCtrl($uibModal, $cookies, Room, Message) {
		var home = this; 
		home.room = Room;
		home.activeRoom = null;
		home.currentUser = $cookies.get('blocChatCurrentUser');

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

		home.sendMessage = function (newMessageText) {

			// Create a message object for database
			var newMessage = {
				content: newMessageText,
				roomId: home.activeRoom.$id,
				sentAt: firebase.database.ServerValue.TIMESTAMP,
				username: home.currentUser
			};

			// Upload to firebase
			Message.send(newMessage);
		};

		// home.dateAndTime = function(timestamp) {
		// 	return Message.formatDateAndTime(timestamp);
		// };
	}

	angular
		.module('blocChat')
		.controller('HomeCtrl', HomeCtrl);
})(); 