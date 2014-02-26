define([
    "klass"
  , "jquery-migrate"
], function (klass) {

  return klass({
      appName: 'My App 0.0.1'
    , initialize: function() {

        var that = this;

        console.log("App Init: "+that.appName);

      }
  });

});

 // Code here
  // console.log('Default Template Layout Init');

  // Click on Button
  // $('body').on('click touchstart', 'button.button-1', function(event) {

  //   var that = this
  //     , $elm = $(that);

  //  console.log("Click");
  //  // console.log(event);

  // });