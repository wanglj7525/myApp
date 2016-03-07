'use strict';
app.controller('AbnTestController',[ '$rootScope','$scope', '$http', '$state','$timeout', '$localStorage','treeservice',function($rootScope,$scope,$http, $state, $timeout,$localStorage,treeservice) {
   console.log("haha");
    var  tree, treedata_avm;
    $scope.my_tree_handler = function(branch) {
        var _ref;
        $scope.output = branch.label;
        if ((_ref = branch.data) != null ? _ref.description : void 0) {
            return $scope.output += '(' + branch.data.description + ')';
        }
        $localStorage.treeselect=$scope.output;
        //TODO
    };
    $scope.my_data = [];
    $scope.doing_async = true;
    treeservice.getData().then(
        function (res) {
            $scope.my_data = res.data.info
            $scope.doing_async = false;
            //tree.expand_all();
        },
        function (rej) {
            console.log(rej);
        }
    );
    //$scope.my_data=treedata_avm;
    $rootScope.my_tree = tree = {};

    //var apple_selected, tree, treedata_avm, treedata_geography;
    //$scope.my_tree_handler = function(branch) {
    //  var _ref;
    //  $scope.output = "You selected: " + branch.label;
    //  if ((_ref = branch.data) != null ? _ref.description : void 0) {
    //    return $scope.output += '(' + branch.data.description + ')';
    //  }
    //};
    //apple_selected = function(branch) {
    //  return $scope.output = "APPLE! : " + branch.label;
    //};
    //treedata_avm = [
    //                {
    //                  label: '市委班子',
    //                  data:1,
    //                  children: [
    //                    {
    //                      label: '市委',
    //                      data: 11,
    //                      children:[]
    //                    }, {
    //                      label: '市人大',
    //                      data: 12
    //                    }, {
    //                      label: '市政协',
    //                      data: 13
    //                    }, {
    //                      label: '市政府',
    //                      data: 14,
    //                      children: ['市政府市委', '市政府党委', '市政府政协']
    //                    }
    //                  ]
    //                }, {
    //                  label: '党务口',
    //                  data: 2,
    //                  children: [
    //                    {
    //                      label: '党务办公室',
    //                      data: 21
    //                    }, {
    //                      label: '党务委员会',
    //                      data: 22
    //                    }
    //                  ]
    //                }, {
    //                  label: '政务口',
    //                  data:3,
    //                  children: [
    //                    {
    //                      label: '政务办公室',
    //                      data:31,
    //                      children: ['政务委员会']
    //                    }, {
    //                      label: '政务室',
    //                      data:32
    //                    }, {
    //                      label: '政务',
    //                      data:33
    //                    }
    //                    ]
    //                }, {
    //                    label: '企事业口',
    //                    data:4
    //                  }, {
    //                      label: '县市区',
    //                      data:5,
    //                      children: [
    //                        {
    //                          label: '福清',
    //                          data:51,
    //                          children: ['福清区委', '福清党委']
    //                        }, {
    //                          label: '长乐',
    //                          data:52,
    //                          children: ['长乐党委']
    //                        }, {
    //                          label: '闽侯',
    //                          data:53
    //                        }
    //                      ]
    //                    }
    //              ];
    //$http.get('/rest/gettree').success(function(data) {
		//console.log(data.info);
		//if (data.result == "success") {
		//	for ( var int = 0; int < data.info.length; int++) {
		//		console.log(data.info[int].t_name);
		//	}
		//} else {
		//}
    //}).error(function(data) {
		//alert(data);
    //});
    //
    //$scope.my_data = treedata_avm;
    //$scope.my_tree = tree = {};
}]);
//app.controller('SearchController', [ '$scope', '$http', '$state','$timeout','$modal','$log','searchservice',
//    function($scope, $http, $state, $timeout,$modal,$log,searchservice) {
//        $scope.itemsByPage=10;
//        searchservice.getData().then(
//            function (res) {
//                $scope.searchlist = res.data.info;
//            },
//            function (rej) {
//                console.log(rej);
//            }
//        );
//    }
//]);
app.controller('SearchController', [ '$scope', '$http', '$state','$timeout','$modal','$log','searchservice',
    function($scope, $http, $state, $timeout,$modal,$log,searchservice) {
        $scope.itemsByPage=10;
        $scope.selectparam=[];
        searchservice.getData().then(
            function (res) {
                $scope.searchlist = res.data.info;
            },
            function (rej) {
                console.log(rej);
            }
        );
    }
]);
app.controller('SearchGuController',['$scope','searchguservice',function($scope, searchguservice) {
    $scope.selectparam=[];
    searchguservice.getData().then(
        function (res) {
            $scope.searchguinfo = res.data.info
        },
        function (rej) {
            console.log(rej);
        }
    );

} ]);