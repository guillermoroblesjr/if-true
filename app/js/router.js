/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */

define(function(require, exports, module){

  'use strict';

  var Vue = require('Vue');
  var VueRouter = require('vue-router');

  // ============================================================================= 
  // Required inits
  // ============================================================================= 
  
  Vue.use(VueRouter);

  ////////////////////////////////////////////////////////////////////////
  // Private API
  ////////////////////////////////////////////////////////////////////////

  var _Private = function(){
    'use strict';

    // Create a router instance.
    // You can pass in additional options here, but let's
    // keep it simple for now.
    this.router = new VueRouter();
  };

  _Private.prototype = Object.create(Object.prototype);
  _Private.prototype.constructor = _Private;

  var _private = new _Private();

  ////////////////////////////////////////////////////////////////////////
  // Public API
  ////////////////////////////////////////////////////////////////////////

  return function(){
    'use strict';
    return _private.router;
  };

});