'use strict';
//app.controller('planCtrl',[ '$scope', '$http', '$state','$timeout',
//	function($scope, $http, $state, $timeout) {
//		$scope.plan=[
//			{title:"方案一 调整说明",reason:"根据XXX文件要求，领导班子应配X名女干部，XX单位未按要求配备；",
//			 planlist:[
//				{ id:1, name:'张三1' ,sex:"男",birthday:"196511",company:"福清市xxx",newcompany:"xxx"},
//				{ id:1, name:'张三2' ,sex:"男",birthday:"196511",company:"福清市xxx",newcompany:"xxx"},
//				{ id:1, name:'张三3' ,sex:"男",birthday:"196511",company:"福清市xxx",newcompany:"xxx"},
//				{ id:1, name:'张三4' ,sex:"男",birthday:"196511",company:"福清市xxx",newcompany:"xxx"}
//				]
//			},
//			{title:"方案二 调整说明",reason:"2根据XXX文件要求，领导班子应配X名女干部，XX单位未按要求配备；",
//			 planlist:[
//				{ id:1, name:'张三5' ,sex:"男",birthday:"196511",company:"福清市xxx",newcompany:"xxx"},
//				{ id:1, name:'张三6' ,sex:"男",birthday:"196511",company:"福清市xxx",newcompany:"xxx"},
//				{ id:1, name:'张三7' ,sex:"男",birthday:"196511",company:"福清市xxx",newcompany:"xxx"},
//				{ id:1, name:'张三8' ,sex:"男",birthday:"196511",company:"福清市xxx",newcompany:"xxx"}
//				]
//			}
//		];
//
//
//	}
//]);

app.controller('planController',[ '$scope', '$http', '$state','$timeout','planlistservice',
	function($scope, $http, $state, $timeout,planlistservice) {
		planlistservice.getData().then(
			function (res) {
				$scope.planlist = res.data.info
			},
			function (rej) {
				console.log(rej);
			}
		);
		//$scope.planlist=[
		//	{"id":"1",name:"方案一 市政委调整方案"},
		//	{"id":"2",name:"方案二 县政委调整方案"},
		//	{"id":"3",name:"方案3 市政委调整方案"},
		//	{"id":"4",name:"方案4 县政委调整方案"},
		//	{"id":"5",name:"方案5 市政委调整方案"},
		//	{"id":"6",name:"方案6 县政委调整方案"}
		//];


	}
]);
app.controller('plandetailcontroller',[ '$scope', '$http', '$state','$timeout','$stateParams','plandetailservice',
	function($scope, $http, $state, $timeout,$stateParams,plandetailservice) {
		$scope.id = $stateParams.id;
		plandetailservice.getData().then(
			function (res) {
				$scope.plandetail = res.data.info
			},
			function (rej) {
				console.log(rej);
			}
		);
	}
]);