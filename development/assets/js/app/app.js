define([
    'backbone'
  , 'jquery-migrate'
], function () {

  //

  return Backbone.Model.extend({

      appName: 'My App'
    , appVersion: '0.0.1'

    , constructor: function() {

        var that = this;

        that.createEvents();

        console.log('App Init: '+that.appName+" "+that.appVersion);

      }
    , createEvents: function() {

        var that = this;

        // Click on Button
        $('body').on('click touchstart', 'button.button-1', function(event) {

          var $elem = $(this);

         console.log('Click: '+$elem.attr('class'));
         // console.log(event);

        });

    }
  });

});