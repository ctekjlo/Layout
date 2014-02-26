define([
    'klass'
  , 'jquery-migrate'
], function (klass) {

  return klass({
      appName: 'My App 0.0.1'
    , initialize: function() {

        var that = this;

        console.log('App Init: '+that.appName);

        that.createEvents();

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