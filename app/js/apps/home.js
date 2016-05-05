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
            .and( homeVm.b === true )

            // and does not select c
            .and( homeVm.c === false )

            // and user selects 'Awesome'
            .and( homeVm.dropdownSelection === 'Awesome' )

            // and time is an odd minute, i.e. 10:01 am
            .and(function(){
              return new Date().getMinutes() % 2;
            })

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
    inits: [
      {
        fn: function(){

          var instance = this;
          var viewModels = instance.data.viewModels;
          var homeVm = viewModels.homeVm;

          function startTime() {
              var today = new Date();
              var h = today.getHours();
              var m = today.getMinutes();
              var s = today.getSeconds();
              m = checkTime(m);
              s = checkTime(s);

              homeVm.time = (h + ":" + m + ":" + s);

              if ( (homeVm.a === true && homeVm.b === true) 
                    && (homeVm.c === false || homeVm.dropdownSelection !== 'Awesome')
                    && homeVm.dropdownSelection === 'Awesome'
                    && (new Date().getMinutes() % 2)
                    || false
                    && true
                    && true
                ) {
                // console.log(true)
              }

              ifTrue
                // if user selects a and b
                .if( homeVm.a === true && homeVm.b === true )

                // and user does not selects c
                // or does not select 'Awesome'
                .and( homeVm.c === false || homeVm.dropdownSelection !== 'Awesome' )



              ifTrue
                // if user selects a
                .if( homeVm.a === true )

                // and user selects b
                .and( homeVm.b === true )

                // and does not select c
                .and( homeVm.c === false )

                // and user selects 'Awesome'
                .and( homeVm.dropdownSelection === 'Awesome' )

                // and time is an odd minute, i.e. 10:01 am
                .and(function(){
                  return new Date().getMinutes() % 2;
                })

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

              var t = setTimeout(startTime, 500);
          }
          function checkTime(i) {
              if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
              return i;
          }

          startTime();
        },
        args: []
      }
    ]
  });

  exports.submitButton1 = submitButton1;
});