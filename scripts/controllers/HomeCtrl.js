(function() {
	function HomeCtrl(Room) {
		this.rooms = Room.all;
	}

	angular
		.controller('HomeCtrl', HomeCtrl);
})();