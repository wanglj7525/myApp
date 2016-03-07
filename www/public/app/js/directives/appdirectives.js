angular.module('app')
 .directive('autocomplete',function(Reasons){
        return {
            restrict: "A",
            require:"?ngModel",
            link:function(scope,element, attrs, ngModel){
                // Tasks.queryAllNames().success(function(data){
                $(element).autocomplete({
                    source:function(request, response) {
                        Reasons.queryReasonName(request.term).success(function(data) {
                            response($.each(data.info, function(index, meta) {
                                meta.value = meta.reason;
                                meta.label = meta.reason;
                            }));
                        })
                    },
                    select:function( event, ui ) {
                        scope.$apply(function() {
                            ngModel.$setViewValue(ui.item.label);
                        })
                    }
                });
                // });

            }
        }
    })
    .directive('authApplication', function() {
        return {
            restrict: 'C',
            link: function(scope, elem, attrs) {

                scope.$on('event:auth-loginRequired', function() {
                    //login.slideDown('slow', function() {
                    //    main.hide();
                    //});
                    //TODO login form
                    console.log("xu yao deng lu");
                });
                scope.$on('event:auth-loginConfirmed', function() {
                    //main.show();
                    //login.slideUp();
                    //TODO login hide
                    console.log("bu xu yao deng lu");
                });
            }
        }
    })
    .directive('selectbutton', ['$transition', function ($transition) {
        return {
            link: function (scope, element, attrs) {
               function noselected() {
                   scope.selectparam.splice(scope.selectparam.indexOf(attrs.selectparam),1);
                    element.removeClass('btn-danger');
                    element.addClass('btn-default');
                }
                function doseleted() {
                    scope.selectparam.push(attrs.selectparam);
                    element.removeClass('btn-default');
                    element.addClass('btn-danger');
                }
                scope.$watch(attrs.selectbutton, function (isselect) {
                    var i=0;
                    if (isselect) {
                        doseleted();
                    } else {
                        noselected();
                    }
                });
            }
        };
    }]).directive("scroll", function ($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
            if (this.pageYOffset >= 50) {
                scope.isfix = true;
                console.log('Scrolled below header.');
            } else {
                scope.isfix = false;
                console.log('Header is in view.');
            }
            scope.$apply();
        });
    };
});