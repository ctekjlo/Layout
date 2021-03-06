// Template Path (if use CMS)
SiteTemplatePath = '/';

// Config
require.config({
  baseUrl: SiteTemplatePath+'assets',
  paths: {
      'jquery': [
        '//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min',
        'bower_components/jQuery/dist/jquery.min'
      ]
    // , 'jquery-ui': [
    //     '//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min',
    //     ''
    //   ]
    , 'jquery-migrate': 'bower_components/jquery-migrate/jquery-migrate.min'

    , 'underscore':     'bower_components/underscore-amd/underscore-min'
    , 'backbone':       'bower_components/backbone-amd/backbone-min'

    , 'plugins':        'js/plugins.min'

    , 'app':            'js/app.min'
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
      }

    , 'plugins': {
        deps: [
          'jquery-migrate'
        ]
      }
  }
})(['app'], function (App) {

  var SiteApp = new App();

});