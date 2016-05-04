/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */

define(function(require, exports, module){

  'use strict';

  ////////////////////////////////////////////////////////////////////////
  // DEPENDENCIES
  ////////////////////////////////////////////////////////////////////////

  var viewModels = require('js/components/viewmodels/ViewModels')();
  var router = require('js/router')();
  var routerMap = require('js/router-map');

  // Screen Logic
  var indexScreen = require('js/apps/index');
  var homeScreen = require('js/apps/home');

  // Vue Components
  var AppComponent = require('js/components/vue-components/app').AppComponent;

  // jQuery Plugins

  // ============================================================================= 
  // Required inits
  // ============================================================================= 
  

  // ============================================================================= 
  // TEMPORARY (DEVELOPMENT ONLY)
  // ============================================================================= 


  // ============================================================================= 
  // POLYFILLS & SPLASH SCREEN
  // ============================================================================= 


  // ============================================================================= 
  // APP START
  // ============================================================================= 

  // ============================================================================= 
  // Define some routes.
  routerMap();

  // Now we can start the app!
  // The router will create an instance of AppComponent and mount to
  // the element matching the selector #app.
  router.start(AppComponent, '#app');

  // ============================================================================= 
  // Index Screen Features (Nav, etc.)
  // ============================================================================= 

  indexScreen.feature1.init();

  // ============================================================================= 
  // Home Screen Features
  // ============================================================================= 

  homeScreen.submitButton1.init();

});