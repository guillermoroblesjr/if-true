define(function(require, exports, module){
  
  'use strict';

  ////////////////////////////////////////////////////////////////////////
  // DEPENDENCIES
  ////////////////////////////////////////////////////////////////////////

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

  var fn = function( options ){

    'use strict';

    var Fn = options.Fn;
    var extend = options.extend;

    ////////////////////////////////////////////////////////////////////////
    // application2 public API
    ////////////////////////////////////////////////////////////////////////

    extend.application2 = {};

    extend.application2.enableDisableSubmitButton = function( options ){
      'use strict';

      var instance = options.instance || {};
      var viewModels = instance.data.viewModels;
      var homeVm = viewModels.homeVm;
      var numberInputValue = parseInt(homeVm.numberInput);

      ifTrue
        .if( homeVm.a !== true )
        .and( numberInputValue === 10 )

        .run(function(){
          homeVm.submitButton2.isDisabled = false;
        })
        .else(function(){
          homeVm.submitButton2.isDisabled = true;
        });
    };

    return Fn;
  };

  exports = module.exports = fn;
});