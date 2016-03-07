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