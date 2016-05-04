define(function(require, exports, module){
  
  'use strict';

  // ViewModels
  var MainVm = require('js/components/viewmodels/Main');
  var HomeVm = require('js/components/viewmodels/Home');

  ////////////////////////////////////////////////////////////////////////
  // Private API
  ////////////////////////////////////////////////////////////////////////

  var _Private = function(){
    'use strict';

    this.viewModels = {
      mainVm: new MainVm(),
      homeVm: new HomeVm(),
    };
  };

  _Private.prototype = Object.create(Object.prototype);
  _Private.prototype.constructor = _Private;

  var _private = new _Private();

  ////////////////////////////////////////////////////////////////////////
  // Public API
  ////////////////////////////////////////////////////////////////////////

  return function(){
    'use strict';
    return _private.viewModels;
  };

});