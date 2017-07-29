(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.getByRoomId = function(roomId) {
    	return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
    	// .on("child_added", function(snapshot) {
    	// 	var snap = snapshot.child("content").val();

    	// 	// console.log(snap);
    	// 	return snap
    	// });
    };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', Message);
})();