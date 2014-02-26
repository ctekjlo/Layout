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
    , 'klass': 'bower_components/klass/klass.min'

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
  }
})(['app'], function (App) {

  var SiteApp = new App();

});