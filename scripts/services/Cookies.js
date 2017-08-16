(function() {

	function BlocChatCookies($cookies, $uibModal) {

		var currentUser = $cookies.get('blocChatCurrentUser');

		// If there isn't a current username, make the user set one
		if (!currentUser || currentUser === '') {
			
			modalInstance = $uibModal.open({
				templateUrl: '/templates/usernameModal.html',
				controller: 'ModalCtrl as modal',
				backdrop  : 'static',
				keyboard  : false
			});

			modalInstance.result.then(function(username) {
				$cookies.put('blocChatCurrentUser', username);
				currentUser = username;
			});
		}
	}

	angular
		.module('blocChat')
		//.run(BlocChatCookies);
})();