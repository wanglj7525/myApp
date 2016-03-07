'use strict';

/* Controllers */
// signin controller
app.controller('SigninFormController', [ '$scope', '$http', '$state','$localStorage',
		function($scope, $http, $state,$localStorage) {
			$scope.user = {};
			$scope.authError = null;
			$scope.login = function() {
				$scope.authError = null;
				var params = {
					email : $scope.user.email,
					password : $scope.user.password
				};

        $scope.user.role_id=1;

        //存储access_token
        $localStorage.token="1234567890";
        $localStorage.user=$scope.user;
        console.log($localStorage.user);
        $state.go('app.worktip.list');
				// Try to login
				//$http.post('/rest/login', params).success(function(data) {
				//	if (data.result == "success") {
				//		//存储access_token
				//		$localStorage.token=data.access_token;
				//		$localStorage.user=data.info;
				//		console.log($localStorage.user);
				//		$state.go('app.worktip.list');
				//	} else {
				//		$scope.authError = 'Email or Password not right';
				//	}
				//}).error(function(data) {
				//	alert(data);
				//	$scope.authError = 'Server Error';
				//});
			};
		} ]);
