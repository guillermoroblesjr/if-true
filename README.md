# if-true.js

A way to legibly structure heavily nested conditional statements.

<a href="http://guillermoroblesjr.github.io/if-true.js/">View a live example here</a>

In your file, do something like this:

```js
ifTrue
  // first test
  .if(
    ifTrue()
      .or( 5 < 3 )
      .and( 4 === 2 )
      .or( 3 === 2 )
      .or( false )
      .val()
  )
  // second test
  .or(
    ifTrue()
      .or( 22 === false )
      .or( 1 > 4 )
      .and( 3 < 7 )
      .or( typeof 'apples' === 'string' )
      .and( false === true )
      .val()
  )
  // third test
  .or(
    ifTrue()
      .or( doesThisSuck('yes', 10) < 1 )
      .and( false > true )
      .or( (3*5 < (1-2)) )
      .and( 4 === true )
      .val()
  )
  // fourth test
  .and(true === false)
  .run(function(){
    // console.log('wahoo!')
  })

  .elseIf(
    ifTrue()
      .or( 22 === false )
      .or( 1 > 4 )
      .and( 3 < 7 )
      .or( typeof 'apples' === 'string' )
      .and( true === true )
      .val()
  )
  .run(function(){
    ifTrue()
      // first test
      .or(ifTrue()
        .or( 5 < 3 )
        .and( 4 === 2 )
        .or( 3 === 2 )
        .or( false )
        .val()
      )
      // second test
      .or(ifTrue()
        .or( 22 === false )
        .or( 1 > 4 )
        .and( 3 < 7 )
        .or( typeof 'apples' === 'string' )
        .and( true === true )
        .val()
      )
      // third test
      .or(ifTrue()
        .or( doesThisSuck('yes', 10) < 1 )
        .and( false > true )
        .or( (3*5 < (1-2)) )
        .and( 4 === true )
        .val()
      )
      // fourth test
      .and(true === false)
      // fifth test
      .or(true)
      .run(function(){
        // console.log('wahoo!!!!!')
      })
  })

  // nothing else worked
  .else(function(){
    // console.log('wahoo3!')
  })

// instead of:

if ( 
    // first test
    ( 5 < 3 && 4 === 2 || 3 === 2 )
    // second test
    || ( 22 === false || 1 > 4 && 3 < 7 || typeof 'apples' === 'string' && false === true )
    // third test
    || ( doesThisSuck('yes', 10) < 1 && false > true || (3*5 < (1-2)) && 4 === true )
    // fourth test
    && ( true === false )
  ) {
  // console.log('wahoo!')
}
else if (( 22 === false || 1 > 4 && 3 < 7 || typeof 'apples' === 'string' && true === true )){
  
  if ( 
      // first test
      ( 5 < 3 && 4 === 2 || 3 === 2 )
      // second test
      || ( 22 === false || 1 > 4 && 3 < 7 || typeof 'apples' === 'string' && false === true )
      // third test
      || ( doesThisSuck('yes', 10) < 1 && false > true || (3*5 < (1-2)) && 4 === true )
      // fourth test
      && ( true === false )
      // fifth test
      || true
    ) {
    // console.log('wahoo!!!!!')
  }

}
// nothing else worked
else {
  // console.log('wahoo3!')
}

```
