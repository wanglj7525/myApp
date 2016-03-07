'use strict';
app.controller('ModalDeleteTreeInstanceCtrl', ['$scope', '$modalInstance', 'data',function($scope, $modalInstance,data) {
    $scope.data = data;
    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}]);
app.controller('ModalTreeInstanceCtrl', ['$scope', '$modalInstance', 'data',function($scope, $modalInstance,data) {
    $scope.data = data;
    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}]);

app.controller('ModalAddTreeInstanceCtrl', ['$scope', '$modalInstance', 'which',function($scope, $modalInstance,which) {
    $scope.which = which;
    $scope.treename={
        data:"222",
        label:$scope.treename
    };
    $scope.ok = function () {
        $modalInstance.close($scope.treename);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}]);
app.controller('ModalDeleteZWInstanceCtrl', ['$scope', '$modalInstance', 'data',function($scope, $modalInstance,data) {
    $scope.data = data;
    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}]);
app.controller('ModalUpdateZWInstanceCtrl', ['$scope', '$modalInstance', 'data',function($scope, $modalInstance,data) {
    $scope.data = data;
    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}]);
app.controller('ModalAddZWInstanceCtrl', ['$scope', '$modalInstance',function($scope, $modalInstance) {
    console.log($scope.zwname);
    $scope.zws={
        id:4,
        name:'',
        num:'',
        level:''
    };
    $scope.ok = function () {
        $modalInstance.close($scope.zws);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}]);
app.controller('SetTreeCtrl',['$rootScope','$state','$scope','$modal','$log','treeservice',function($rootScope,$state,$scope,$modal,$log,treeservice){
    treeservice.getData().then(
        function (res) {
            $scope.treelist = res.data.info;
            $scope.second= $scope.treelist[0];
            if( $scope.second&&$scope.second.children){
                $scope.third= $scope.second.children[0];
                if($scope.third&& $scope.third.children){
                    $scope.fouth= $scope.third.children[0];
                }
            }
        },
        function (rej) {
            console.log(rej);
        }
    );
    $scope.showsecond=function(data){
        $scope.second=data;
        $scope.third=[];
        $scope.fouth=[];
        if($scope.second&& $scope.second.children){
            $scope.third=data.children[0];
            if($scope.third&& $scope.third.children){
                $scope.fouth= $scope.third.children[0];
            }
        }
    }
    $scope.showthird=function(data){
        $scope.third=data;
        $scope.fouth=[];
        if($scope.third&& $scope.third.children){
            $scope.fouth= $scope.third.children[0];
        }
    }
    $scope.showfouth=function(data){
        $scope.fouth=data;
    }


    //修改职位
    $scope.updatezhiweilist=function(data){
        $scope.isEditZW=true;
        $scope.editzw=data;
    }
    $scope.updatezhiwei=function(data){
        var modalupdatezwInstance = $modal.open({
            templateUrl: 'updateZWModel.html',
            controller: 'ModalUpdateZWInstanceCtrl',
            size: 'md',
            resolve: {
                data: function () {
                    return data;
                }
            }
        });
        modalupdatezwInstance.result.then(function () {
            //TODO 调用后台保存
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    }
    $scope.deletezhiwei=function(idx,data){
        var modalzwdeleteInstance = $modal.open({
            templateUrl: 'deleteZWModel.html',
            controller: 'ModalDeleteZWInstanceCtrl',
            size: 'sm',
            resolve: {
                data: function () {
                    return data;
                }
            }
        });
        modalzwdeleteInstance.result.then(function () {
            $scope.editzw.zhiwei.splice(idx,1);
            //TODO 调用后台保存
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    }
    $scope.addzw=function(){
        var modalzwaddInstance = $modal.open({
            templateUrl: 'saveAddZWModel.html',
            controller: 'ModalAddZWInstanceCtrl',
            size: 'md'
        });
        modalzwaddInstance.result.then(function (zw) {
            console.log(zw);
            $scope.editzw.zhiwei.push(zw);
            //TODO 调用后台保存
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    }

    $scope.addtree=function(which){
        var modaltreeInstance = $modal.open({
            templateUrl: 'saveAddTreeModel.html',
            controller: 'ModalAddTreeInstanceCtrl',
            size: 'md',
            resolve: {
                which:function(){
                    return which;
                }
            }
        });
        modaltreeInstance.result.then(function (name) {
            //TODO 调用后台保存
            if(which==1){
                $scope.treelist.push(name);
            }else if(which==2){
                $scope.second.children.push(name);
            }else if(which==3){
                $scope.third.children.push(name);
            }else{
                $scope.fouth.children.push(name);
            }
            //$scope.daweilist[0].peoples.splice(Array.indexOf($scope.daweilist[0].peoples,people),1);
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    }
    $scope.updatetree=function(data){
        var modaltreeInstance = $modal.open({
            templateUrl: 'saveTreeModel.html',
            controller: 'ModalTreeInstanceCtrl',
            size: 'md',
            resolve: {
                data: function () {
                    return data;
                }
            }
        });
        modaltreeInstance.result.then(function () {
            //TODO 调用后台保存
            //$scope.daweilist[0].peoples.splice(Array.indexOf($scope.daweilist[0].peoples,people),1);
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    }
    $scope.deletetree=function(which,idx,data){
        var modaltreedeleteInstance = $modal.open({
            templateUrl: 'deleteTreeModel.html',
            controller: 'ModalDeleteTreeInstanceCtrl',
            size: 'sm',
            resolve: {
                data: function () {
                    return data;
                }
            }
        });
        modaltreedeleteInstance.result.then(function () {
            if(which==1){
                $scope.treelist.splice(idx,1);
            }else if(which==2){
                $scope.second.children.splice(idx,1);
            }else if(which==3){
                $scope.third.children.splice(idx,1);
            }else{
                $scope.fouth.children.splice(idx,1);
            }
            //TODO 调用后台保存
            //$scope.daweilist[0].peoples.splice(Array.indexOf($scope.daweilist[0].peoples,people),1);
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    }
}]);
app.controller('SetUserCtrl',['$rootScope','$state','$scope','userservice',function($rootScope,$state,$scope,userservice){

    $scope.itemsByPage=10;
    userservice.getData().then(
        function (res) {
            $scope.userlist = res.data.info
        },
        function (rej) {
            console.log(rej);
        }
    );
}]);
app.controller('SetDaimaCtrl',['$rootScope','$state','$scope','daimaservice',function($rootScope,$state,$scope,daimaservice){

//获取人员信息
    daimaservice.getData().then(
        function (res) {
            $scope.daimalist = res.data.info;
            $scope.daima= $scope.daimalist[0];
        },
        function (rej) {
            console.log(rej);
        }
    );

    $scope.selectdaima=function(daima){
        $scope.daima=daima;
    }
}]);
//app.controller('SetPeopleCtrl',['$rootScope','$state','$scope','messageservice',function($rootScope,$state,$scope,messageservice){
//    $scope.messagetabletab = [
//        { id:1,img:'/public/app/img/a0.jpg', name:'张三1' ,sex:"男",company:"福清市xxx、xxx信息1",nation:"汉",birthday:"196511",palce:"福清龙田",troops:"197712",party:"191212",education:"本科",school:"福建师范"},
//        { id:2,img:'/public/app/img/a1.jpg', name:'张三2' ,sex:"男",company:"福清市xxx、xxx信息2",nation:"汉",birthday:"195411",palce:"福清龙田",troops:"197212",party:"197712",education:"本科",school:"福建师范"},
//        { id:3,img:'/public/app/img/a2.jpg', name:'张三3' ,sex:"男",company:"福清市xxx、xxx信息3",nation:"汉",birthday:"195711",palce:"福清龙田",troops:"191212",party:"197712",education:"本科",school:"福建师范"},
//        { id:4,img:'/public/app/img/a3.jpg', name:'张三4' ,sex:"女",company:"福清市xxx、xxx信息4",nation:"汉",birthday:"195311",palce:"福清龙田",troops:"197212",party:"197212",education:"本科",school:"福建师范"},
//        { id:5,img:'/public/app/img/a4.jpg', name:'张三5' ,sex:"男",company:"福清市xxx、xxx信息5",nation:"汉",birthday:"195511",palce:"福清龙田",troops:"191212",party:"197712",education:"本科",school:"福建师范"},
//        { id:6,img:'/public/app/img/a5.jpg', name:'张三6' ,sex:"男",company:"福清市xxx、xxx信息6",nation:"汉",birthday:"195011",palce:"福清龙田",troops:"197212",party:"197712",education:"本科",school:"福建师范"},
//        { id:7,img:'/public/app/img/a6.jpg', name:'张三7' ,sex:"男",company:"福清市xxx、xxx信息7",nation:"汉",birthday:"197511",palce:"福清龙田",troops:"197712",party:"197212",education:"本科",school:"福建师范"},
//        { id:8,img:'/public/app/img/a7.jpg', name:'张三8' ,sex:"男",company:"福清市xxx、xxx信息8",nation:"汉",birthday:"198511",palce:"福清龙田",troops:"191212",party:"171212",education:"本科",school:"福建师范"},
//        { id:9,img:'/public/app/img/a8.jpg', name:'张三9' ,sex:"男",company:"福清市xxx、xxx信息",nation:"汉",birthday:"195411",palce:"福清龙田",troops:"197712",party:"197712",education:"本科",school:"福建师范"},
//        { id:10,img:'/public/app/img/a9.jpg', name:'张三10',sex:"男",company:"福清市xxx、xxx信息",nation:"汉",birthday:"195511",palce:"福清龙田",troops:"197212",party:"191212",education:"本科",school:"福建师范" },
//        { id:11,img:'/public/app/img/a0.jpg', name:'张三1' ,sex:"男",company:"福清市xxx、xxx信息",nation:"汉",birthday:"195511",palce:"福清龙田",troops:"197212",party:"197712",education:"本科",school:"福建师范"},
//        { id:12,img:'/public/app/img/a1.jpg', name:'张三2' ,sex:"女",company:"福清市xxx、xxx信息",nation:"汉",birthday:"195511",palce:"福清龙田",troops:"197712",party:"197212",education:"本科",school:"福建师范"},
//        {id:21,img:'/public/app/img/a10.jpg', name:'张三11' ,sex:"男",company:"福清市xxx、xxx信息",nation:"汉",birthday:"195111",palce:"福清龙田",troops:"191212",party:"197712",education:"本科",school:"福建师范"}];
//
//    messageservice.getData().then(
//        function (res) {
//            $scope.peoplelist = res.data.info;
//            $scope.itemsByPage=10;
//        },
//        function (rej) {
//            console.log(rej);
//        }
//    );
//}]);
//app.controller('testController',['Resource', function (service) {
//
//    var ctrl = this;
//
//    this.displayed = [];
//
//    this.callServer = function callServer(tableState) {
//
//        ctrl.isLoading = true;
//
//        var pagination = tableState.pagination;
//
//        var start = pagination.start || 0;     // This is NOT the page number, but the index of item in the list that you want to use to display the table.
//        var number = pagination.number || 10;  // Number of entries showed per page.
//
//        service.getPage(start, number, tableState).then(function (result) {
//            ctrl.displayed = result.data;
//            tableState.pagination.numberOfPages = result.numberOfPages;//set the number of pages so the pagination can update
//            ctrl.isLoading = false;
//        });
//    };
//}]);

app.controller('ModalAddPeopleInstanceCtrl', ['$scope', '$modalInstance','editableOptions','editableThemes', function($scope, $modalInstance, editableOptions, editableThemes){
    editableThemes.bs3.inputClass = 'input-sm';
    editableThemes.bs3.buttonsClass = 'btn-sm';
    editableOptions.theme = 'bs3';
    //$scope.which = which;
    //$scope.treename={
    //    data:"222",
    //    label:$scope.treename
    //};
    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}]);
app.controller('ModalUpdatePeopleInstanceCtrl', ['$scope', '$modalInstance','people','editableOptions','editableThemes', function($scope, $modalInstance,people, editableOptions, editableThemes){
    editableThemes.bs3.inputClass = 'input-sm';
    editableThemes.bs3.buttonsClass = 'btn-sm';
    editableOptions.theme = 'bs3';
    //$scope.which = which;
    //$scope.treename={
    //    data:"222",
    //    label:$scope.treename
    //};
    $scope.people=people;
    console.log(people);
    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}]);
app.controller('SetPeopleCtrl',['$scope','$http','$modal','$log','TableDatePage','peoplelistservice', function($scope,$http,$modal,$log,TableDatePage,peoplelistservice){
    var vm = this;
    //var path='/public/app/api/message';
    //$http.get(path).then(function(response){
    //    vm.projects = response.data.info;
    //    vm.dataTable =new TableDatePage(vm.projects);
    //    return vm;
    //},function(response){
    //    return response;
    //});
    
  
    peoplelistservice.getData().then(
        function (res) {
            vm.projects = res.data.info;
            vm.dataTable =new TableDatePage(vm.projects);
            return vm;
            //$scope.peoplelist = res.data.info;
            //$scope.itemsByPage=10;
        },
        function (rej) {
            console.log(rej);
        }
    );

    $scope.addpeople=function(){
        var modaltreeInstance = $modal.open({
            templateUrl: 'saveAddPeopleModel.html',
            controller: 'ModalAddPeopleInstanceCtrl',
            size: 'lg'
        });
        modaltreeInstance.result.then(function (name) {
            //vm.projects.push();
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    }
    
    $scope.updatepeople=function(people){
        var modaltreeInstance = $modal.open({
            templateUrl: 'saveUpdatePeopleModel.html',
            controller: 'ModalUpdatePeopleInstanceCtrl',
            size: 'lg',
            resolve:{
                people:function(){
                    return people;
                }
            }
        });
        modaltreeInstance.result.then(function () {
            //vm.projects.push();
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    }
}]);






