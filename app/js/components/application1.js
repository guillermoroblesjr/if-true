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
    // application1 public API
    ////////////////////////////////////////////////////////////////////////

    extend.application1 = {};

    extend.application1.enableDisableSubmitButton = function( options ){
      'use strict';

      var instance = options.instance || {};
      var viewModels = instance.data.viewModels;
      var homeVm = viewModels.homeVm;
      var numberInputValue = parseInt(homeVm.numberInput);

      console.log('homeVm: ', JSON.parse(JSON.stringify(homeVm)));

      ifTrue
        // test 1
        .if(
          ifTrue
            .if( homeVm.a === true )
            .and( homeVm.b === true )

            .or( homeVm.dropdownSelection !== 'Not Awesome' )
            .and( numberInputValue > 20 )
        )
        // test 2
        .and(
          ifTrue
            .if( homeVm.c === false  )

            .or( homeVm.d === true  )

            .or( homeVm.dropdownSelection === 'Awesome' )
        )
        // test 3
        .and(
          ifTrue
            .if( homeVm.dropdownSelection === 'Awesome' )

            .or( homeVm.dropdownSelection === 'Almost Awesome' )
        )
        // 
        .and( numberInputValue !== 10 )
        .and( numberInputValue !== 29 )

        .or(
          ifTrue
            .if( function(){
              return numberInputValue >= 5;
            } )
            .and( numberInputValue <= 30 )
            .and( numberInputValue !== 12 )
            .and( numberInputValue !== 29 )
        )

        .run(function(){
          homeVm.submitButton1.isDisabled = false;
        })
        .else(function(){
          homeVm.submitButton1.isDisabled = true;
        });
    };

    return Fn;
  };

  exports = module.exports = fn;
});