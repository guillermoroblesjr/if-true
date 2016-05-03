/* global describe, it */
// jshint ignore: start

(function () {

  'use strict';
  
  describe("if-true.js", function() {

    it('should be a global object in a non-AMD environment', function(){
      expect(ifTrue).to.be.a('object');
    });

    it('should return the version', function(){
      expect(ifTrue.version()).to.be.a('string');
    });

    describe('"if" usage', function(){
      it('run will execute after truthy "if" condition', function(){
        var result = 'fail';
        ifTrue
          .if(true)
          .run(function(){
            result = 'pass';
          })
        expect(result).to.equal('pass');
      });

      it('run will not execute after failed "if" condition', function(){
        var result = 'fail';
        ifTrue
          .if(false)
          .run(function(){
            result = 'pass';
          })
        expect(result).to.equal('fail');
      });
    });

    describe('"or" usage', function(){
      it('run will execute after truthy "or" condition', function(){
        var result = 'fail';
        ifTrue
          .if(false)
          .or(true)
          .run(function(){
            result = 'pass';
          })
        expect(result).to.equal('pass');
      });

      it('run will not execute after failed "or" condition', function(){
        var result = 'fail';
        ifTrue
          .if(false)
          .or(false)
          .run(function(){
            result = 'pass';
          })
        expect(result).to.equal('fail');
      });

      it('run will execute after truthy "if" condition when containing "or"', function(){
        var result = 'fail';
        ifTrue
          .if(true)
          .or(false)
          .run(function(){
            result = 'pass';
          })
        expect(result).to.equal('pass');
      });
    });

    describe('"and" usage', function(){
      it('run will execute with truthy "and" conditions', function(){
        var result = 'fail';
        ifTrue
          .if(true)
          .and(true)
          .run(function(){
            result = 'pass';
          })
        expect(result).to.equal('pass');
      });

      it('run will not execute after failed "and" condition', function(){
        var result = 'fail';
        ifTrue
          .if(true)
          .and(false)
          .run(function(){
            result = 'pass';
          })
        expect(result).to.equal('fail');
      });
    });

    describe('"run" usage', function(){
      it('run will execute with truthy conditions', function(){
        var result = 'fail';
        ifTrue
          .if(true)
          .run(function(){
            result = 'pass';
          })
        expect(result).to.equal('pass');
      });

      it('run will not execute after failed condition', function(){
        var result = 'fail';
        ifTrue
          .if(false)
          .run(function(){
            result = 'pass';
          })
        expect(result).to.equal('fail');
      });

      it('chained "run" will execute with truthy conditions', function(){
        var result1 = 'fail';
        var result2 = 'fail';
        ifTrue
          .if(true)
          .run(function(){
            result1 = 'pass';
          })
          .run(function(){
            result2 = 'pass';
          })
        expect(result1).to.equal('pass');
        expect(result2).to.equal('pass');
      });
    });

    describe('"else if" usage', function(){
      it('elseIf will execute when other conditions fail', function(){
        var run1 = 'fail';
        var run2 = 'fail';
        var _else1 = 'fail';
        var modified = 'not modified';
        ifTrue
          .if(true)
          .and(false)
          .or(false)
          .and(false)
          .run(function(){
            run1 = 'fail run';
          })
          .elseIf(function(){
            modified = 'modified';
            return true;
          })
          .run(function(){
            run2 = 'pass elseIf';
          })
          .else(function(){
            _else1 = 'else';
          })
        expect(run1).to.equal('fail');
        expect(run2).to.equal('pass elseIf');
        expect(modified).to.equal('modified');
        expect(_else1).to.equal('fail');
      });

      it('elseIf will not execute when other conditions pass', function(){
        var run1 = 'fail';
        var run2 = 'pass';
        var modified = 'not modified';
        ifTrue
          .if(true)
          .and(true)
          .or(false)
          .and(false)
          .run(function(){
            run1 = 'pass';
          })
          .elseIf(function(){
            modified = 'modified';
            return true;
          })
        expect(run1).to.equal('pass');
        expect(modified).to.equal('not modified');
      });

      it('run will execute after a passing elseIf', function(){
        var run1 = 'fail';
        var run2 = 'fail';
        var _else1 = 'fail';
        var modified = 'not modified';
        ifTrue
          .if(true)
          .and(false)
          .or(false)
          .and(false)
          // .or(false)
          // .or(true)
          // .and(true)
          // .and(false)
          .run(function(){
            run1 = 'fail run';
          })
          .elseIf(function(){
            modified = 'modified';
            return true;
          })
          .run(function(){
            run2 = 'pass elseIf';
          })
          .else(function(){
            _else1 = 'else';
          })
        expect(run1).to.equal('fail');
        expect(run2).to.equal('pass elseIf');
        expect(modified).to.equal('modified');
        expect(_else1).to.equal('fail');
      });

      it('run will not execute after a non-executed elseIf', function(){
        var run1 = 'fail';
        var run2 = 'pass';
        var _else1 = 'fail';
        var modified = 'not modified';
        ifTrue
          .if(true)
          .and(true)
          .or(false)
          .and(false)
          .run(function(){
            run1 = 'pass';
          })
          .elseIf(function(){
            modified = 'modified';
            return true;
          })
          .run(function(){
            run2 = 'fail';
          })
          .else(function(){
            _else1 = 'else';
          })
        expect(run1).to.equal('pass');
        expect(run2).to.equal('pass');
        expect(modified).to.equal('not modified');
        expect(_else1).to.equal('fail');
      });

      it('run will not execute after a failing elseIf', function(){
        var run1 = 'pass';
        var run2 = 'pass';
        var _else1 = 'fail';
        var modified = 'modified';
        ifTrue
          .if(true)
          .and(false)
          .or(false)
          .and(false)
          .run(function(){
            run1 = 'fail';
          })
          .elseIf(function(){
            modified = 'modified';
            return false;
          })
          .run(function(){
            run2 = 'fail';
          })
          .else(function(){
            _else1 = 'else';
          })
        expect(run1).to.equal('pass');
        expect(run2).to.equal('pass');
        expect(modified).to.equal('modified');
        expect(_else1).to.equal('else');
      });

      it('else will execute after a failing elseIf', function(){
        var run1 = 'pass';
        var run2 = 'pass';
        var _else1 = 'fail';
        var modified = 'modified';
        ifTrue
          .if(true)
          .and(false)
          .or(false)
          .and(false)
          .run(function(){
            run1 = 'fail';
          })
          .elseIf(function(){
            modified = 'modified';
            return false;
          })
          .run(function(){
            run2 = 'fail';
          })
          .else(function(){
            _else1 = 'else';
          })
        expect(run1).to.equal('pass');
        expect(run2).to.equal('pass');
        expect(modified).to.equal('modified');
        expect(_else1).to.equal('else');
      });
    });

    describe('"else" usage', function(){
      it('else will execute when other conditions fail', function(){
        var result = 'fail';
        ifTrue
          .if(true)
          .and(false)
          .run(function(){
            result = 'pass';
          })
          .else(function(){
            result = 'else';
          })
        expect(result).to.equal('else');
      });

      it('else will execute when other conditions fail', function(){
        var result = 'fail';
        ifTrue
          .if(false)
          .and(true)
          .run(function(){
            result = 'pass';
          })
          .or(true)
          .and(false)
          .else(function(){
            result = 'else';
          })
        expect(result).to.equal('else');
      });

      it('else will not execute when one other conditions pass and is successfully executed', function(){
        // regular if statement
        var result = 'fail';
        if (true && true || false && false) {
          result = 'pass';
        }
        expect(result).to.equal('pass');

        // using library
        var result = 'fail';
        ifTrue
          .if(true)
          .and(true)
          .or(false)
          .and(false)
          .run(function(){
            result = 'pass';
          })
          .else(function(){
            result = 'else';
          })
        expect(result).to.equal('pass');
      });

      it('else will not execute when one other conditions pass and is successfully executed', function(){
        var result = 'fail';
        ifTrue
        .if(true)
        .and(true)
        .or(false)
        .and(false)
        .or(false)
        .or(true)
        .and(true)
        .and(false)
        .run(function(){
          result = 'pass';
        })
        .else(function(){
          result = 'else';
        })
        expect(result).to.equal('pass');
      });
    });
  });

})();
