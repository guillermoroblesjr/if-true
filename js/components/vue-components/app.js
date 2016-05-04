/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */

define(function(require, exports, module){

  'use strict';

  var Vue = require('Vue');
  var viewModels = require('js/components/viewmodels/ViewModels')();

  // The router needs a root component to render.
  // For demo purposes, we will just use an empty one
  // because we are using the HTML as the app template.
  // !! Note that the App is not a Vue instance.
  var AppComponent = Vue.extend({
    data: function(){
      return viewModels;
    },
    methods: {
      isCurrentScreen: function(screenName){
        var path = this.$route.path;

        // console.log(
        //   '\n',
        //   'path is: ', path, '\n',
        //   'screenName is: ', screenName
        // );

        if (path === screenName) {
          return true;
        }
        else {
          return false;
        }
      },
    },
    computed: {
    }
  });

  Vue.component('app', AppComponent);

  exports.AppComponent = AppComponent;
});