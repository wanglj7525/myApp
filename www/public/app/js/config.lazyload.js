// lazyload config

angular.module('app')
    /**
   * jQuery plugin config use ui-jq directive , config the js and css files that required
   * key: function name of the jQuery plugin
   * value: array of the css js file located
   */
  .constant('JQ_CONFIG', {
      easyPieChart:   [   '/public/libs/jquery/jquery.easy-pie-chart/dist/jquery.easypiechart.fill.js'],
      sparkline:      [   '/public/libs/jquery/jquery.sparkline/dist/jquery.sparkline.retina.js'],
      plot:           [   '/public/libs/jquery/flot/jquery.flot.js',
                          '/public/libs/jquery/flot/jquery.flot.pie.js', 
                          '/public/libs/jquery/flot/jquery.flot.resize.js',
                          '/public/libs/jquery/flot.tooltip/js/jquery.flot.tooltip.min.js',
                          '/public/libs/jquery/flot.orderbars/js/jquery.flot.orderBars.js',
                          '/public/libs/jquery/flot-spline/js/jquery.flot.spline.min.js'],
      moment:         [   '/public/libs/jquery/moment/moment.js'],
      screenfull:     [   '/public/libs/jquery/screenfull/dist/screenfull.min.js'],
      slimScroll:     [   '/public/libs/jquery/slimscroll/jquery.slimscroll.min.js'],
      sortable:       [   '/public/libs/jquery/html5sortable/jquery.sortable.js'],
      nestable:       [   '/public/libs/jquery/nestable/jquery.nestable.js',
                          '/public/libs/jquery/nestable/jquery.nestable.css'],
      filestyle:      [   '/public/libs/jquery/bootstrap-filestyle/src/bootstrap-filestyle.js'],
      slider:         [   '/public/libs/jquery/bootstrap-slider/bootstrap-slider.js',
                          '/public/libs/jquery/bootstrap-slider/bootstrap-slider.css'],
      chosen:         [   '/public/libs/jquery/chosen/chosen.jquery.min.js',
                          '/public/libs/jquery/chosen/bootstrap-chosen.css'],
      TouchSpin:      [   '/public/libs/jquery/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js',
                          '/public/libs/jquery/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.css'],
      wysiwyg:        [   '/public/libs/jquery/bootstrap-wysiwyg/bootstrap-wysiwyg.js',
                          '/public/libs/jquery/bootstrap-wysiwyg/external/jquery.hotkeys.js'],
      dataTable:      [   '/public/libs/jquery/datatables/media/js/jquery.dataTables.min.js',
                          '/public/libs/jquery/plugins/integration/bootstrap/3/dataTables.bootstrap.js',
                          '/public/libs/jquery/plugins/integration/bootstrap/3/dataTables.bootstrap.css'],
      vectorMap:      [   '/public/libs/jquery/bower-jvectormap/jquery-jvectormap-1.2.2.min.js', 
                          '/public/libs/jquery/bower-jvectormap/jquery-jvectormap-world-mill-en.js',
                          '/public/libs/jquery/bower-jvectormap/jquery-jvectormap-us-aea-en.js',
                          '/public/libs/jquery/bower-jvectormap/jquery-jvectormap.css'],
      footable:       [   '/public/libs/jquery/footable/v3/js/footable.min.js',
                          '/public/libs/jquery/footable/v3/css/footable.bootstrap.min.css'],
      fullcalendar:   [   '/public/libs/jquery/moment/moment.js',
                          '/public/libs/jquery/fullcalendar/dist/fullcalendar.min.js',
                          '/public/libs/jquery/fullcalendar/dist/fullcalendar.css',
                          '/public/libs/jquery/fullcalendar/dist/fullcalendar.theme.css'],
      daterangepicker:[   '/public/libs/jquery/moment/moment.js',
                          '/public/libs/jquery/bootstrap-daterangepicker/daterangepicker.js',
                          '/public/libs/jquery/bootstrap-daterangepicker/daterangepicker-bs3.css'],
      tagsinput:      [   '/public/libs/jquery/bootstrap-tagsinput/dist/bootstrap-tagsinput.js',
                          '/public/libs/jquery/bootstrap-tagsinput/dist/bootstrap-tagsinput.css']
                      
    }
  )
  .constant('MODULE_CONFIG', [
      {
          name: 'ngGrid',
          files: [
              '/public/libs/angular/ng-grid/build/ng-grid.min.js',
              '/public/libs/angular/ng-grid/ng-grid.min.css',
              '/public/libs/angular/ng-grid/ng-grid.bootstrap.css'
          ]
      },
      {
          name: 'ui.grid',
          files: [
              '/public/libs/angular/angular-ui-grid/ui-grid.min.js',
              '/public/libs/angular/angular-ui-grid/ui-grid.min.css',
              '/public/libs/angular/angular-ui-grid/ui-grid.bootstrap.css'
          ]
      },
      {
          name: 'ui.select',
          files: [
              '/public/libs/angular/angular-ui-select/dist/select.min.js',
              '/public/libs/angular/angular-ui-select/dist/select.min.css'
          ]
      },
      {
          name:'angularFileUpload',
          files: [
            '/public/libs/angular/angular-file-upload/angular-file-upload.js'
          ]
      },
      {
          name:'ui.calendar',
          files: ['/public/libs/angular/angular-ui-calendar/src/calendar.js']
      },
      {
          name: 'ngImgCrop',
          files: [
              '/public/libs/angular/ngImgCrop/compile/minified/ng-img-crop.js',
              '/public/libs/angular/ngImgCrop/compile/minified/ng-img-crop.css'
          ]
      },
      {
          name: 'angularBootstrapNavTree',
          files: [
              '/public/libs/angular/angular-bootstrap-nav-tree/dist/abn_tree_directive.js',
              '/public/libs/angular/angular-bootstrap-nav-tree/dist/abn_tree.css'
          ]
      },
      {
          name: 'toaster',
          files: [
              '/public/libs/angular/angularjs-toaster/toaster.js',
              '/public/libs/angular/angularjs-toaster/toaster.css'
          ]
      },
      {
          name: 'textAngular',
          files: [
              '/public/libs/angular/textAngular/dist/textAngular-sanitize.min.js',
              '/public/libs/angular/textAngular/dist/textAngular.min.js'
          ]
      },
      {
          name: 'vr.directives.slider',
          files: [
              '/public/libs/angular/venturocket-angular-slider/build/angular-slider.min.js',
              '/public/libs/angular/venturocket-angular-slider/build/angular-slider.css'
          ]
      },
      {
          name: 'com.2fdevs.videogular',
          files: [
              '/public/libs/angular/videogular/videogular.min.js'
          ]
      },
      {
          name: 'com.2fdevs.videogular.plugins.controls',
          files: [
              '/public/libs/angular/videogular-controls/controls.min.js'
          ]
      },
      {
          name: 'com.2fdevs.videogular.plugins.buffering',
          files: [
              '/public/libs/angular/videogular-buffering/buffering.min.js'
          ]
      },
      {
          name: 'com.2fdevs.videogular.plugins.overlayplay',
          files: [
              '/public/libs/angular/videogular-overlay-play/overlay-play.min.js'
          ]
      },
      {
          name: 'com.2fdevs.videogular.plugins.poster',
          files: [
              '/public/libs/angular/videogular-poster/poster.min.js'
          ]
      },
      {
          name: 'com.2fdevs.videogular.plugins.imaads',
          files: [
              '/public/libs/angular/videogular-ima-ads/ima-ads.min.js'
          ]
      },
      {
          name: 'xeditable',
          files: [
              '/public/libs/angular/angular-xeditable/dist/js/xeditable.min.js',
              '/public/libs/angular/angular-xeditable/dist/css/xeditable.css'
          ]
      },
      {
          name: 'smart-table',
          files: [
              '/public/libs/angular/angular-smart-table/dist/smart-table.min.js'
          ]
      },
      {
          name: 'angular-skycons',
          files: [
              '/public/libs/angular/angular-skycons/angular-skycons.js'
          ]
      },
      {
    	  name: 'echarts-show',
    	  files: [
    	          '/public/libs/echarts/echarts.js'
    	          ]
      }
    ]
  )
  // oclazyload config
  .config(['$ocLazyLoadProvider', 'MODULE_CONFIG', function($ocLazyLoadProvider, MODULE_CONFIG) {
      // We configure ocLazyLoad to use the lib script.js as the async loader
      $ocLazyLoadProvider.config({
          debug:  false,
          events: true,
          modules: MODULE_CONFIG
      });
  }])
;
