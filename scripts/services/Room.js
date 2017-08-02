(function() {

	function Room($firebaseArray) {
		var Room = {};
		var ref = firebase.database().ref().child("rooms");
		var rooms = $firebaseArray(ref);

		Room.all = rooms;

		// Add a new chat room
		Room.addRoom = function(roomName) {
			rooms.$add({
				name: roomName
			});
		};

		return Room;
	}

	angular
		.module('blocChat')
		.factory('Room', Room);
})();