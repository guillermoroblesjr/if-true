(function(){

  'use strict';

  var bc = 'bower_components/';

  require.config({
    waitSeconds: 0,
    baseUrl: '',
    paths: {

      // Bower Components
      Section:                      bc + 'Section/index',
      jquery:                       bc + 'jquery/dist/jquery.min',
      'Vue':                        bc + 'vue/dist/vue',
      'vue-router':                 bc + 'vue-router/dist/vue-router.min',
      'text':                       bc + 'text/text',

    },
    shim: {
      jquery: { exports: 'jquery' },
      Section: { deps: ['jquery'] },
    },
  });

})();