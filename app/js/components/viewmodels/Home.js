define(function(require){
  
  'use strict';

  ////////////////////////////////////////////////////////////////////////
  // Private API
  ////////////////////////////////////////////////////////////////////////

  var _Private = function(){
    'use strict';
  };

  _Private.prototype = Object.create(Object.prototype);
  _Private.prototype.constructor = _Private;

  var _private = new _Private();

  ////////////////////////////////////////////////////////////////////////
  // Public API
  ////////////////////////////////////////////////////////////////////////

  var Fn = function(options){
    'use strict';
    
    this.a = false;
    this.b = false;
    this.c = false;
    this.d = false;

    this.submitButton1 = {
      isDisabled: true
    };


    console.log('created a new ' + 'Home' + ' instance');
    
    return this;
  };

  Fn.prototype = Object.create(Object.prototype);
  Fn.prototype.constructor = Fn;

  return Fn;
});