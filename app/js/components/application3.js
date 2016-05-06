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
    // application3 public API
    ////////////////////////////////////////////////////////////////////////

    extend.application3 = {};

    extend.application3.enableDisableSubmitButton = function( options ){
      'use strict';

      var instance = options.instance || {};
      var viewModels = instance.data.viewModels;
      var homeVm = viewModels.homeVm;
      var numberInputValue = parseInt(homeVm.numberInput);

      ifTrue
        .if( homeVm.b !== true )
        .and(
          ifTrue
            .if( numberInputValue >= 12 )
            .and( numberInputValue <= 18 )
        )
        .and( numberInputValue !== 15 )

        .run(function(){
          homeVm.submitButton3.isDisabled = false;
        })
        .else(function(){
          homeVm.submitButton3.isDisabled = true;
        });
    };

    return Fn;
  };

  exports = module.exports = fn;
});