/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */

define(function(require, exports, module){

  'use strict';

  var router = require('js/router')();

  // Vue Components
  var HomeComponent = require('js/components/vue-components/home').HomeComponent;

  // ============================================================================= 
  // Define some routes.
  // Each route should map to a component. The "component" can
  // either be an actual component constructor created via
  // Vue.extend(), or just a component options object.
  // We'll talk about nested routes later.
  var routerMap = function(){
    router.map({
        '/': {
            component: HomeComponent
        },
    });
  };

  return routerMap;
});