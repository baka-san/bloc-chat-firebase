(function() {

	function Room($firebaseArray) {
		var Room = {};
		var ref = firebase.database().ref().child("rooms");
		var rooms = $firebaseArray(ref);

		Room.all = rooms;

		Room.add = function(room) {
			// This nests the room in a unique key???
			rooms.$add(room);
			// rooms.push(room)
		};

		return Room;
	}

	angular
		.module('blocChat')
		.factory('Room', Room);
})();