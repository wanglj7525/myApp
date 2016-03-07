'use strict';

/**
 * Config for the router
 */
angular.module('app')
  .run(
    [          '$rootScope', '$state','$stateParams','$localStorage','Auth',
      function ($rootScope,   $state,  $stateParams,$localStorage,Auth) {
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams;
          $rootScope.Auth=Auth;
          //$rootScope.$on('$stateChangeStart',function(event,state,params){
          //      //console.log("切换路由"+state.name+"--"+$localStorage.token+"--"+params);
          //      if(state.name=='signin')return;// 如果是进入登录界面则允许
          //      // 如果用户不存在
          //      //if(!$rootScope.user || !$rootScope.user.token){
          //      if(!$localStorage.token){
          //        event.preventDefault();// 取消默认跳转行为
          //        $state.go("access.signin");//跳转到登录界面
          //      }
          //    var allowed=function(state,params){
          //        //TODO 根据state和params判断是否可以授权,返回true或者false
          //
          //    };
          //    if(!allowed(state,params)){
          //        event.preventDefault();
          //    }
          //});
      }
    ]
  )
  .config(
    [          '$stateProvider', '$urlRouterProvider', 'JQ_CONFIG', 'MODULE_CONFIG', '$locationProvider', 'STATIC_PATH',
      function ($stateProvider,   $urlRouterProvider, JQ_CONFIG, MODULE_CONFIG,$locationProvider,STATIC_PATH) {

          $locationProvider.html5Mode(true);
          console.log(STATIC_PATH);
//          var layout =  STATIC_PATH + 'tpl/app.html';
          var layout =  STATIC_PATH + 'tpl/blocks/material.layout.html';
          var notreelayout =  STATIC_PATH + 'tpl/blocks/notree.layout.html';
          var useMaterial = true;
          if(useMaterial){
            $urlRouterProvider
              .otherwise('/access/signin');
          }else{
            $urlRouterProvider
              .otherwise('/app/worktip');
          }
          
          $stateProvider
              .state('app', {
                  abstract: true,
                  url: '/app',
                  templateUrl: layout,
                  resolve:load(['angularBootstrapNavTree',STATIC_PATH + 'js/controllers/tree.js'])
              })
              .state('app.message',{
                  url:'/message',
                  templateUrl: STATIC_PATH + 'tpl/ui_message.html',
                  resolve: load([STATIC_PATH + 'js/controllers/message.js'])
              })
              .state('app.worktip', {
                  abstract: true,
                  url: '/worktip',
                  templateUrl: STATIC_PATH + 'tpl/ui_worktip.html',
                  // use resolve to load other dependences
                  resolve: load(['smart-table',STATIC_PATH + 'js/controllers/worktip.js'])
              })
              //.state('notree.worktip.edit', {
              //    url: '/edit',
              //    templateUrl: STATIC_PATH + 'tpl/worktip.edit.html'
              //})
              .state('app.worktip.list', {
                  url: '/list/{pid}',
                  templateUrl: STATIC_PATH + 'tpl/worktip.list.html',
                  resolve: load(['smart-table',STATIC_PATH + 'js/controllers/worktip.js'])
              })
              //.state('app.adjust',{
              //    abstract: true,
              //    url:'/adjust',
              //    templateUrl: STATIC_PATH + 'tpl/ui_adjust.html',
              //    resolve: load(['smart-table',STATIC_PATH + 'js/controllers/adjust.js'])
              //})
              .state('app.adjust', {
                  url: '/adjust/{id}',
                  templateUrl: STATIC_PATH + 'tpl/ui_adjust.html',
                  resolve: load(['smart-table',STATIC_PATH + 'js/controllers/adjust.js'])
              })
              .state('app.analysis',{
                  url:'/analysis',
                  templateUrl: STATIC_PATH + 'tpl/ui_analysis.html',
                  resolve: load(['smart-table',STATIC_PATH + 'js/controllers/analysis.js'])
              })
              .state('app.deploy',{
                  url:'/deploy',
                  templateUrl: STATIC_PATH + 'tpl/ui_deploy.html',
                  resolve: load(['smart-table',STATIC_PATH + 'js/controllers/deploy.js'])
              })
              .state('app.setting',{
                  abstract: true,
                  url:'/setting',
                  templateUrl:STATIC_PATH+'tpl/ui_setting.html',
                  resolve: load(['xeditable','smart-table',STATIC_PATH + 'js/controllers/setting.js'])
              })
              .state('app.setting.tree',{
                  url:'/tree',
                  templateUrl:STATIC_PATH+'tpl/ui_setting_tree.html',
                  controller:function($scope,$state){
                      $scope.state = $state;
                  }
                  //resolve: load(['angularBootstrapNavTree','smart-table',STATIC_PATH + 'js/controllers/settingtree.js'])
              })
              .state('app.setting.daima',{
                  url:'/daima',
                  templateUrl:STATIC_PATH+'tpl/ui_setting_daima.html',
                  controller:function($scope,$state){
                      $scope.state = $state;
                  }
                  //resolve: load(['angularBootstrapNavTree','smart-table',STATIC_PATH + 'js/controllers/settingtree.js'])
              })
              .state('app.setting.user',{
                  url:'/user',
                  templateUrl:STATIC_PATH+'tpl/ui_setting_user.html',
                  controller:function($scope,$state){
                      $scope.state = $state;
                  }
                  //resolve: load(['angularBootstrapNavTree','smart-table',STATIC_PATH + 'js/controllers/settingtree.js'])
              })
              .state('app.setting.people',{
                  url:'/people',
                  templateUrl:STATIC_PATH+'tpl/ui_setting_people.html',
                  reslove:load(['xeditable']),
                  controller:function($scope,$state){
                      $scope.state = $state;
                  }

                  //resolve: load(['angularBootstrapNavTree','smart-table',STATIC_PATH + 'js/controllers/settingtree.js'])
              })
              // 调整方案
              .state('app.adjustplan', {
                  abstract: true,
                  url: '/adjustplan',
                  templateUrl: STATIC_PATH + 'tpl/ui_adjustplan.html',
                  // use resolve to load other dependences
                  resolve: load(['smart-table',STATIC_PATH + 'js/controllers/adjustplan.js'])
              })
              .state('app.adjustplan.detail', {
                  url: '/detail/{id}',
                  templateUrl: STATIC_PATH + 'tpl/ui_plandetail.html',
                  resolve: load(['smart-table',STATIC_PATH + 'js/controllers/adjustplan.js']),
                  controller:function($scope,$state){
                      $scope.state = $state;
                  }
              })
              .state('access', {
                  url: '/access',
                  template: '<div ui-view style="height: 100%" flex  class="blue-900"></div>'
              })
              .state('access.signin', {
                  url: '/signin',
                  templateUrl: STATIC_PATH + 'tpl/page_signin.html',
                  resolve: load( [STATIC_PATH + 'js/controllers/signin.js'] )
              })
              .state('access.404', {
                  url: '/404',
                  templateUrl: STATIC_PATH + 'tpl/page_404.html'
              })
              .state('notree',{
                  abstract: true,
                  url: '/notree',
                  templateUrl: notreelayout
              })


              ;

          function load(srcs, callback) {
            return {
                deps: ['$ocLazyLoad', '$q',
                  function( $ocLazyLoad, $q ){
                    var deferred = $q.defer();
                    var promise  = false;
                    srcs = angular.isArray(srcs) ? srcs : srcs.split(/\s+/);
                    if(!promise){
                      promise = deferred.promise;
                    }
                    angular.forEach(srcs, function(src) {
                      promise = promise.then( function(){
                        if(JQ_CONFIG[src]){
                          return $ocLazyLoad.load(JQ_CONFIG[src]);
                        }
                        angular.forEach(MODULE_CONFIG, function(module) {
                          if( module.name == src){
                            name = module.name;
                          }else{
                            name = src;
                          }
                        });
                        return $ocLazyLoad.load(name);
                      } );
                    });
                    deferred.resolve();
                    return callback ? promise.then(function(){ return callback(); }) : promise;
                }]
            }
          }


      }
    ]
  );
