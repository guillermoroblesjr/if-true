/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */

define(function(require, exports, module){

  'use strict';

  var Vue = require('Vue');
  var Section = require('Section');
  var viewModels = require('js/components/viewmodels/ViewModels')();
  var homeTemplate = require('text!vue-components/home.vue');

  // define
  var HomeComponent = Vue.extend({
    template: homeTemplate,
    data: function(){
      return viewModels;
    },
    methods: {
      publish: function(data){
        Section.publish(('home::' + data.fn), {
          data: {
            event: data.event
          }
        });
      },
    },
    route: {
      activate: function(){}
    },
  });

  // register
  Vue.component('home', HomeComponent);

  exports.HomeComponent = HomeComponent;
});