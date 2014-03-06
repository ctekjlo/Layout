// Template Path (if use CMS)
SiteTemplatePath = '/';

// Config
require.config({
  baseUrl: SiteTemplatePath+'assets',
  paths: {
      // https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js
      // https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js
      // https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.2/underscore-min.js
      'jquery': 'bower_components/jQuery/dist/jquery.min'
    , 'jquery-migrate': 'bower_components/jquery-migrate/jquery-migrate.min'

    , "underscore": "bower_components/underscore-amd/underscore-min"
    , 'backbone': "bower_components/backbone-amd/backbone-min"

    , 'app': 'js/app.min'
  },
  shim: {
      'jquery': {
          exports: '$'
      }
    , 'jquery-migrate': {
          deps: [
            'jquery'
          ]
      }
    , 'backbone': {
          deps: [
            'underscore'
          ]
        , exports: 'Backbone'
      },
  }
})(['app'], function (App) {

  var SiteApp = new App();

});

// Console Log
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());