/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */

define(function(require, exports, module){

  'use strict';

  // ============================================================================= 
  // Home Screen
  // ============================================================================= 

  ////////////////////////////////////////////////////////////////////////
  // DEPENDENCIES
  ////////////////////////////////////////////////////////////////////////

  var HomeSection = require('js/components/screen-sections/Home');
  var viewModels = require('js/components/viewmodels/ViewModels')();
  var ifTrue = require('ifTrue');

  ////////////////////////////////////////////////////////////////////////
  // Private API
  ////////////////////////////////////////////////////////////////////////

  var _Private = function(){
    'use strict';
    return this;
  };

  _Private.prototype = Object.create( Object.prototype );
  
  _Private.prototype.constructor = _Private;

  var _private = new _Private();

  ////////////////////////////////////////////////////////////////////////
  // 'Submit Button 1' Feature
  ////////////////////////////////////////////////////////////////////////

  var submitButton1 = new HomeSection({
    section: $('#user-form'),
    data: {
      viewModels: viewModels,
    },
    events: [],
    subscriptions: [
      // home::checkboxChange
      {
        topic: 'home::checkboxChange',
        fn: function( data ){
          var instance = this;
          var viewModels = instance.data.viewModels;
          var homeVm = viewModels.homeVm;
          var event = data.data.event;
          var $el = $(event.target);

          console.log('homeVm: ', JSON.parse(JSON.stringify(homeVm)));

          ifTrue
            // if user selects a
            .if( homeVm.a === true )
            // and user selects b
            .and(true)
            // and does not select c
            .and(true)
            // and user selects 'Awesome'
            .and(true)
            // and time is an odd minute, i.e. 10:01 am
            .and(true)
            // or user enters a number between 5 and 30
            .or(false)
            // and number is not 10
            .and(true)
            // and number is not 15
            .and(true)
            .run(function(){
              homeVm.submitButton1.isDisabled = false;
            })
            .else(function(){
              homeVm.submitButton1.isDisabled = true;
            });

        }
      },
    ],
    inits: []
  });

  exports.submitButton1 = submitButton1;
});