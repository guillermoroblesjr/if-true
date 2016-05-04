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
    subscriptions: [],
    inits: []
  });

  exports.submitButton1 = submitButton1;
});