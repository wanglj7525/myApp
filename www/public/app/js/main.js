'use strict';

/* Controllers */

angular.module('app')
    .controller('AppCtrl', ['$rootScope','$scope', '$translate', '$localStorage', '$window','$state','Auth',
      function(             $rootScope, $scope,   $translate,   $localStorage,   $window ,$state,Auth) {

        $rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams){
          $rootScope.Auth=Auth;
          //避免未登录用户直接输入路由地址来跳转到登录界面地址
          console.log("切换路由--"+toState.name+"--"+$localStorage.token);
          if(toState.name=='app.adjustplan.detail'||toState.name=='app.setting.tree'){
            $scope.isshowtree=false;
            $scope.hassearch=false;
          }else if(toState.name=='app.message'){
            $scope.isshowtree=true;
            $scope.hassearch=true;
          }
          if($localStorage.token!='0'||toState.name=='access.signin'){
            return
          }
          if($localStorage.token=="0"){
            event.preventDefault();// 取消默认跳转行为
            $state.go("access.signin");
          }

          //if($localStorage.token!='0'||toState.name=='access.signin'){
          //  console.log("zhengchang");
          //  return
          //}else{
          //  $state.go("access.signin");
          //}
          //if(toState.name=='login')return;// 如果是进入登录界面则允许
          //// 如果用户不存在
          //if(!$rootScope.user || !$rootScope.user.token){
          //  event.preventDefault();// 取消默认跳转行为
          //  $state.go("login",{from:fromState.name,w:'notLogin'});//跳转到登录界面
          //}
        });
        // add 'ie' classes to html
        var isIE = !!navigator.userAgent.match(/MSIE/i);
        if(isIE){ angular.element($window.document.body).addClass('ie');}
        if(isSmartDevice( $window ) ){ angular.element($window.document.body).addClass('smart')};

        $scope.showheight=$window.innerHeight-51;
        console.log($scope.showheight);
        $scope.logout=function(){
          $localStorage.token='0';
          //delete  $localStorage.treeselect;
          $state.go("access.signin");
        }
        /*切换单位树*/
        $scope.treeToggle=function(){

        }

        //左侧菜单是否显示//左侧菜单显示查询条件
        $scope.changeMenu=function(showtree,showsearch){
          $scope.isshowtree=showtree;
          $scope.hassearch=showsearch;
        }

        $scope.treeselected=$localStorage.treeselect;
        console.log("菜单左树："+$scope.treeselected);
        $scope.$watch(function(){ return $localStorage.treeselect},function(newValue,oldValue){
          $scope.treeselected=$localStorage.treeselect;
          console.log("菜单左树变换："+$scope.treeselected);
        });

        // config
        $scope.app = {
          name: '领导班子分析调配系统',
          version: '0.0.1',
          // for chart colors
          //color: {
          //  primary: '#7266ba',
          //  info:    '#23b7e5',
          //  success: '#27c24c',
          //  warning: '#fad733',
          //  danger:  '#f05050',
          //  light:   '#e8eff0',
          //  dark:    '#3a3f51',
          //  black:   '#1c2b36'
          //},
          //settings: {
          //  themeID: 1,
          //  navbarHeaderColor: 'bg-black',
          //  navbarCollapseColor: 'bg-white-only',
          //  asideColor: 'bg-black',
          //  headerFixed: true,
          //  asideFixed: false,
          //  asideFolded: false,
          //  asideDock: false,
          //  container: false
          //}
        }

        // save settings to local storage
        //if ( angular.isDefined($localStorage.settings) ) {
        //  $scope.app.settings = $localStorage.settings;
        //} else {
        //  $localStorage.settings = $scope.app.settings;
        //}
        //$scope.$watch('app.settings', function(){
        //  if( $scope.app.settings.asideDock  &&  $scope.app.settings.asideFixed ){
        //    // aside dock and fixed must set the header fixed.
        //    $scope.app.settings.headerFixed = true;
        //  }
        //  // for box layout, add background image
        //  $scope.app.settings.container ? angular.element('html').addClass('bg') : angular.element('html').removeClass('bg');
        //  // save to local storage
        //  $localStorage.settings = $scope.app.settings;
        //}, true);

        // angular translate
        $scope.lang = { isopen: false };
        $scope.langs = {zh_CN:'简体中文'};
        $scope.selectLang = $scope.langs[$translate.proposedLanguage()] || "English";
        $scope.setLang = function(langKey, $event) {
          // set the current lang
          $scope.selectLang = $scope.langs[langKey];
          // You can change the language during runtime
          $translate.use(langKey);
          $scope.lang.isopen = !$scope.lang.isopen;
        };

        function isSmartDevice( $window )
        {
          // Adapted from http://www.detectmobilebrowsers.com
          var ua = $window['navigator']['userAgent'] || $window['navigator']['vendor'] || $window['opera'];
          console.log("移动设备");
          // Checks for iOs, Android, Blackberry, Opera Mini, and Windows
          // mobile devices
          return (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
        }


        //}]).controller('TimeController', ['$scope','$timeout', function(s,t){
        //  //页面显示当前日期时间
        //    var updateTime=function(){
        //      s.clock={
        //        time:new Date()
        //      };
        //      t(function(){
        //        s.clock.time=new Date();
        //        updateTime();
        //      },1000);
        //    }
        //    updateTime();
      }]);