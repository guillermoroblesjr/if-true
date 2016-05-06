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
  var application1 = require('js/components/application1');
  var application2 = require('js/components/application2');
  var application3 = require('js/components/application3');
  var viewModels = require('js/components/viewmodels/ViewModels')();

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

  // Extend the HomeSection prototype 'fieldMethods' property
  HomeSection = application1({
    Fn: HomeSection,
    extend: HomeSection.prototype.fieldMethods
  });

  var submitButton1 = new HomeSection({
    section: $('#user-form'),
    data: {
      viewModels: viewModels,
    },
    events: [],
    subscriptions: [
      // on checkbox a change enable/disable submit button for application 1
      {
        topic: 'home::checkboxChange::a',
        fn: function( data ){
          var instance = this;
          instance.fieldMethods.application1.enableDisableSubmitButton({
            instance: instance,
            data: data
          });
        }
      },
      // on checkbox b change enable/disable submit button for application 1
      {
        topic: 'home::checkboxChange::b',
        fn: function( data ){
          var instance = this;
          instance.fieldMethods.application1.enableDisableSubmitButton({
            instance: instance,
            data: data
          });
        }
      },
      // on checkbox c change enable/disable submit button for application 1
      {
        topic: 'home::checkboxChange::c',
        fn: function( data ){
          var instance = this;
          instance.fieldMethods.application1.enableDisableSubmitButton({
            instance: instance,
            data: data
          });
        }
      },
      // on checkbox d change enable/disable submit button for application 1
      {
        topic: 'home::checkboxChange::d',
        fn: function( data ){
          var instance = this;
          instance.fieldMethods.application1.enableDisableSubmitButton({
            instance: instance,
            data: data
          });
        }
      },
      // on dropdown change enable/disable submit button for application 1
      {
        topic: 'home::awesomeStatusSelectChange',
        fn: function( data ){
          var instance = this;
          instance.fieldMethods.application1.enableDisableSubmitButton({
            instance: instance,
            data: data
          });
        }
      },
      // on number input change enable/disable submit button for application 1
      {
        topic: 'home::numberInputChange',
        fn: function( data ){
          var instance = this;
          instance.fieldMethods.application1.enableDisableSubmitButton({
            instance: instance,
            data: data
          });
        }
      }
    ],
    inits: []
  });

  exports.submitButton1 = submitButton1;

  ////////////////////////////////////////////////////////////////////////
  // 'Submit Button 2' Feature
  ////////////////////////////////////////////////////////////////////////

  // Extend the HomeSection prototype 'fieldMethods' property
  HomeSection = application2({
    Fn: HomeSection,
    extend: HomeSection.prototype.fieldMethods
  });

  var submitButton2 = new HomeSection({
    section: $('#user-form'),
    data: {
      viewModels: viewModels,
    },
    events: [],
    subscriptions: [
      // on checkbox a change enable/disable submit button for application 2
      {
        topic: 'home::checkboxChange::a',
        fn: function( data ){
          var instance = this;
          instance.fieldMethods.application2.enableDisableSubmitButton({
            instance: instance,
            data: data
          });
        }
      },
      // on number input change enable/disable submit button for application 2
      {
        topic: 'home::numberInputChange',
        fn: function( data ){
          var instance = this;
          instance.fieldMethods.application2.enableDisableSubmitButton({
            instance: instance,
            data: data
          });
        }
      }
    ],
    inits: []
  });

  exports.submitButton2 = submitButton2;

  ////////////////////////////////////////////////////////////////////////
  // 'Submit Button 3' Feature
  ////////////////////////////////////////////////////////////////////////

  // Extend the HomeSection prototype 'fieldMethods' property
  HomeSection = application3({
    Fn: HomeSection,
    extend: HomeSection.prototype.fieldMethods
  });

  var submitButton3 = new HomeSection({
    section: $('#user-form'),
    data: {
      viewModels: viewModels,
    },
    events: [],
    subscriptions: [
      // on checkbox b change enable/disable submit button for application 3
      {
        topic: 'home::checkboxChange::b',
        fn: function( data ){
          var instance = this;
          instance.fieldMethods.application3.enableDisableSubmitButton({
            instance: instance,
            data: data
          });
        }
      },
      // on number input change enable/disable submit button for application 3
      {
        topic: 'home::numberInputChange',
        fn: function( data ){
          var instance = this;
          instance.fieldMethods.application3.enableDisableSubmitButton({
            instance: instance,
            data: data
          });
        }
      }
    ],
    inits: []
  });

  exports.submitButton3 = submitButton3;
});