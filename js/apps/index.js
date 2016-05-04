/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */

define(function(require, exports, module){

  'use strict';

  // ============================================================================= 
  // Index Screen (Nav, etc.)
  // ============================================================================= 

  ////////////////////////////////////////////////////////////////////////
  // DEPENDENCIES
  ////////////////////////////////////////////////////////////////////////

  var Section = require('Section');
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
  // Public API
  ////////////////////////////////////////////////////////////////////////

  var feature1 = new Section({
    section: $('body'),
    data: { 
      viewModels: viewModels,
    },
    events: [],
    subscriptions: [],
    inits: [],
  });

  exports.feature1 = feature1;

});