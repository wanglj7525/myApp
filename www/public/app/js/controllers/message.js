'use strict';
  app.controller('ModalInstanceCtrl', ['$scope', '$modalInstance', 'items', function($scope, $modalInstance, items) {
    $scope.items = items;
    $scope.selected = {
      item: $scope.items[0]
    };

    $scope.ok = function () {
      $modalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  }]);
  app.controller('MessageController', [ '$scope', '$http', '$state','$timeout','$modal','$log','$localStorage','messageservice',
		function($scope, $http, $state, $timeout,$modal,$log,$localStorage,messageservice) {
			$scope.treeselected=$localStorage.treeselect;
			console.log("信息浏览左树："+$scope.treeselected);
			$scope.$watch(function(){ return $localStorage.treeselect},function(newValue,oldValue){
				$scope.treeselected=$localStorage.treeselect;
				console.log("信息浏览左树变换："+$scope.treeselected);
			});
            $scope.itemsByPage=10;
			//获取人员信息
			messageservice.getData().then(
				function (res) {
					console.log(11);
					$scope.imgs = res.data.info;
                    //$scope.messagetabletab = res.data.info;
				},
				function (rej) {
					console.log(rej);
				}
			);
            $scope.messagetabletab = [
                           { id:1,img:'/public/app/img/a0.jpg', name:'张三1' ,sex:"男",company:"福清市xxx、xxx信息1",nation:"汉",birthday:"196511",palce:"福清龙田",troops:"197712",party:"191212",education:"本科",school:"福建师范"},
                           { id:2,img:'/public/app/img/a1.jpg', name:'张三2' ,sex:"男",company:"福清市xxx、xxx信息2",nation:"汉",birthday:"195411",palce:"福清龙田",troops:"197212",party:"197712",education:"本科",school:"福建师范"},
                           { id:3,img:'/public/app/img/a2.jpg', name:'张三3' ,sex:"男",company:"福清市xxx、xxx信息3",nation:"汉",birthday:"195711",palce:"福清龙田",troops:"191212",party:"197712",education:"本科",school:"福建师范"},
                           { id:4,img:'/public/app/img/a3.jpg', name:'张三4' ,sex:"女",company:"福清市xxx、xxx信息4",nation:"汉",birthday:"195311",palce:"福清龙田",troops:"197212",party:"197212",education:"本科",school:"福建师范"},
                           { id:5,img:'/public/app/img/a4.jpg', name:'张三5' ,sex:"男",company:"福清市xxx、xxx信息5",nation:"汉",birthday:"195511",palce:"福清龙田",troops:"191212",party:"197712",education:"本科",school:"福建师范"},
                           { id:6,img:'/public/app/img/a5.jpg', name:'张三6' ,sex:"男",company:"福清市xxx、xxx信息6",nation:"汉",birthday:"195011",palce:"福清龙田",troops:"197212",party:"197712",education:"本科",school:"福建师范"},
                           { id:7,img:'/public/app/img/a6.jpg', name:'张三7' ,sex:"男",company:"福清市xxx、xxx信息7",nation:"汉",birthday:"197511",palce:"福清龙田",troops:"197712",party:"197212",education:"本科",school:"福建师范"},
                           { id:8,img:'/public/app/img/a7.jpg', name:'张三8' ,sex:"男",company:"福清市xxx、xxx信息8",nation:"汉",birthday:"198511",palce:"福清龙田",troops:"191212",party:"171212",education:"本科",school:"福建师范"},
                           { id:9,img:'/public/app/img/a8.jpg', name:'张三9' ,sex:"男",company:"福清市xxx、xxx信息",nation:"汉",birthday:"195411",palce:"福清龙田",troops:"197712",party:"197712",education:"本科",school:"福建师范"},
                           { id:10,img:'/public/app/img/a9.jpg', name:'张三10',sex:"男",company:"福清市xxx、xxx信息",nation:"汉",birthday:"195511",palce:"福清龙田",troops:"197212",party:"191212",education:"本科",school:"福建师范" },
                           { id:11,img:'/public/app/img/a0.jpg', name:'张三1' ,sex:"男",company:"福清市xxx、xxx信息",nation:"汉",birthday:"195511",palce:"福清龙田",troops:"197212",party:"197712",education:"本科",school:"福建师范"},
                           { id:12,img:'/public/app/img/a1.jpg', name:'张三2' ,sex:"女",company:"福清市xxx、xxx信息",nation:"汉",birthday:"195511",palce:"福清龙田",troops:"197712",party:"197212",education:"本科",school:"福建师范"},
                           {id:21,img:'/public/app/img/a10.jpg', name:'张三11' ,sex:"男",company:"福清市xxx、xxx信息",nation:"汉",birthday:"195111",palce:"福清龙田",troops:"191212",party:"197712",education:"本科",school:"福建师范"}];

            //默认显示的tab
			//$scope.selectTab=true;
			//点击头像查看个人信息
			$scope.items = ['item1', 'item2', 'item3'];
			$scope.showOneDetail=function(oneid){
				var modalInstance = $modal.open({
			        templateUrl: 'myModalContent.html',
			        controller: 'ModalInstanceCtrl',
			        size: 'lg',
			        resolve: {
			          items: function () {
			            return $scope.items;
			          }
			        }
			     });

		      modalInstance.result.then(function (selectedItem) {
		        $scope.selected = selectedItem;
		      }, function () {
		        $log.info('Modal dismissed at: ' + new Date());
		      });
			};


		} ]);

app.controller('oneMessageController', ['$scope', '$http', '$state', function($scope, $http, $state){

		}]);
app.controller('oneMessageXinxiController',['$scope', '$http', '$state', function($scope, $http, $state){
	$scope.onemessage= {
		"id": 1,
		"img": "/public/app/img/a0.jpg",
		"name": "张三1",
		"sex": "男",
		"company": "福清市xxx、xxx信息",
		"nation": "汉",
		"birthday": "19551111",
		"palce": "福清龙田",
		"troops": "19771212",
		"party": "19771212",
		"education": "本科",
		"school": "福建师范",
		"health":"健康或良好",
		"zhengzhi":"中国共产党党员",
		"shenfenzheng":"11111111111111111111111x",
		"zhuanchang":"唱歌",
		"beiwang":"备忘1",
		"beiyong1":"备用1",
		"beiyong2":"备用2",
		"zhiji":"处长",
		"gerenshenfen":"xx处长",
		"zhuangtai":"退休",
		"zhicheng":"中级职称"
	};
	$scope.selectedIndex = 0;
}]);