(function (root, factory) {
  if(typeof define === "function" && define.amd) {
    // Now we're wrapping the factory and assigning the return
    // value to the AMD loader.
    // You can assign it to root (window) as well but it will
    // pollute the global scope.
    define(["ifTrue"], function(ifTrue){
      // return (root.ifTrue = factory(ifTrue));
      return factory(ifTrue);
    });
  } else if(typeof module === "object" && module.exports) {
    // I've not encountered a need for this yet, since I haven't
    // run into a scenario where plain modules depend on CommonJS
    // *and* I happen to be loading in a CJS browser environment
    // but I'm including it for the sake of being thorough
    module.exports = (root.ifTrue = factory(require("ifTrue")));
  } else {
    root.ifTrue = factory(root.ifTrue);
  }
}(this, function(ifTrue) {
 
  'use strict';
 
  ////////////////////////////////////////////////////////////////////////
  // Private API
  ////////////////////////////////////////////////////////////////////////
 
  var _Private = function(){
    'use strict';
 
    this.VERSION = '0.0.1-alpha';
 
    return this;
  };
 
  _Private.prototype = Object.create( Object.prototype );
   
  _Private.prototype.constructor = _Private;

  _Private.prototype.setIsTrue = function( options, instance ){
    'use strict';

    if ( typeof options === 'boolean') {
      instance.isTrue = options;
    }

    if ( typeof options === 'function') {
      instance.isTrue = !!options();
    }

    if ( typeof options === 'object' && options.isTrue !== undefined ) {
      instance.isTrue = options.val();
    }

    return instance;
  };
 
  var _private = new _Private();
 
  ////////////////////////////////////////////////////////////////////////
  // Public API
  ////////////////////////////////////////////////////////////////////////
 
  var ifTrue = {};

  ifTrue.Condition = function(){
    this.isTrue = true;
    this.executedOnTrue = false;
    this.continue = true;
    this.elseIfContinue = true;
    return this;
  };
  ifTrue.Condition.prototype = Object.create(Object.prototype);
  ifTrue.Condition.prototype.constructor = ifTrue.Condition;

  //======================================
  ifTrue.val = ifTrue.Condition.prototype.val = function(){
    'use strict';
    return this.isTrue;
  };
  //======================================
  ifTrue.if = ifTrue.Condition.prototype.if = function( options ){
    'use strict';
    var instance = new ifTrue.Condition();

    return _private.setIsTrue( options, instance );
  };
  ifTrue.or = ifTrue.Condition.prototype.or = function( options ){
    'use strict';
    var instance = this;

    if ( !instance.continue ) {
      return instance;
    }
    if ( instance.isTrue ) {
      instance.continue = false;
      return instance;
    }

    return _private.setIsTrue( options, instance );
  };
  ifTrue.and = ifTrue.Condition.prototype.and = function( options ){
    'use strict';
    var instance = this;

    if ( !instance.continue ) {
      return instance;
    }
    if ( !instance.isTrue ) {
      return instance;
    }
    return _private.setIsTrue( options, instance );
  };
  ifTrue.run = ifTrue.Condition.prototype.run = function( options ){
    'use strict';
    var instance = this;

    if (typeof options !== 'function') {
      return instance;
    }
    if (!instance.isTrue) {
      return instance;
    }
    if (!instance.elseIfContinue) {
      return instance;
    }
    if ( typeof options === 'function' ) {
      instance.executedOnTrue = true;
      options();
    }
    return instance;
  };
  //======================================
  ifTrue.else = ifTrue.Condition.prototype.else = function( options ){
    'use strict';
    var instance = this;

    if ( instance.isTrue ) {
      return instance;
    }

    if ( typeof options === 'function' && instance.executedOnTrue === false ) {
      instance.executedOnTrue = true;
      options();
    }

    return instance;
  };
  ifTrue.elseIf = ifTrue.Condition.prototype.elseIf = function( options ){
    'use strict';
    var instance = this;

    if ( instance.isTrue ) {
      instance.elseIfContinue = false;
      return instance;
    }

    return _private.setIsTrue( options, instance );
  };
  ifTrue.version = function(){
    return _private.VERSION;
  };
 
  return ifTrue;
}));