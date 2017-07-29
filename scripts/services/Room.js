(function() {

	function Room($firebaseArray) {
		var Room = {};
		var ref = firebase.database().ref().child("rooms");
		var rooms = $firebaseArray(ref);
		// var ref2 = ref.orderByChild("name").equalTo("room1");
		
		// Room.activeRoom = $firebaseArray(ref2);

		// ref.orderByChild("name").equalTo("room1")
		// .once("child_added").then(function(snapshot) {
		// 	return snapshot.child("name").val();
		// 	document.write(snapshot.child("name").val());
		// });

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