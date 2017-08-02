(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    // Find a room in the database from provided ID
    Message.getByRoomId = function(roomId) {
    	return $firebaseArray(ref.orderByChild("roomId")
                    .equalTo(roomId));
    };

    // Receive a message object then submit to firebase
    Message.send = function(newMessage) {
      messages.$add(newMessage);
    };

    // Convert firebase timestamp into date and time
    // Message.formatDateAndTime = function(timestamp) {
    //   sfd = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");
    //   sfd.format(new Date(timestamp));
    // };

    return Message;
  }






  angular
    .module('blocChat')
    .factory('Message', Message);
})();