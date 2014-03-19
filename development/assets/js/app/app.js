define([
    'backbone'
  , 'plugins'
], function () {

  return Backbone.Model.extend({

      appName: 'Simple Template Layout App'
    , appVersion: '0.0.10'

    , debug: true

    // Init
    , constructor: function() {

        var that = this;

        that.createEvents();

        if ( that.debug ) {

          console.log('App Init: '+that.appName+" "+that.appVersion);

        }

      }

    // Init Events
    , createEvents: function() {

        var that = this;

        // Click on Button
        $('body').on('click touchstart', 'button.button-1', function(event) {

          var ths = this
            , $elem = $(ths);

          if ( that.debug ) {

            console.log('Click: Element class "'+$elem.attr('class')+'"');
            console.log(event);

          }

        });

    }
  });

});