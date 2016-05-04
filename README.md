# if-true.js

A way to legibly structure heavily nested conditional statements. 

<p>When the business can't
make up their minds on what they want or you just have a ton of logic to execute before
taking a specific path, if-true.js can help take off some of the mental load when staring
at complex if-else statements.</p>

<a href="http://guillermoroblesjr.github.io/if-true.js/">View a live example here</a>

Here is an example to the extreme:

```js
ifTrue
  // first test
  .if(
    ifTrue
      .if( 5 < 3 )
      .and( 4 === 2 )
      .or( 3 === 2 )
      .or( false )
  )
  // second test
  .or(
    ifTrue
      .if( 22 === false )
      .or( 1 > 4 )
      .and( 3 < 7 )
      .or( typeof 'apples' === 'string' )
      .and( false === true )
  )
  // third test
  .or(
    ifTrue
      .if( doesThisSuck('yes', 10) < 1 )
      .and( false > true )
      .or( (3*5 < (1-2)) )
      .and( 4 === true )
  )
  // fourth test
  .and(true === false)
  .run(function(){
    console.log('first condition passed')
  })

  .elseIf(
    ifTrue
      .if( 22 === false )
      .or( 1 > 4 )
      .and( 3 < 7 )
      .or( typeof 'apples' === 'string' )
      .and( true === true )
  )
  .run(function(){
    console.log('second condition passed!');
    ifTrue
      // first test
      .if(
        ifTrue
          .if( 5 < 3 )
          .and( 4 === 2 )
          .or( 3 === 2 )
          .or( false )
      )
      // second test
      .or(
        ifTrue
          .if( 22 === false )
          .or( 1 > 4 )
          .and( 3 < 7 )
          .or( typeof 'apples' === 'string' )
          .and( true !== true )
      )
      // third test
      .or(
        ifTrue
          .if( doesThisSuck('yes', 10) < 1 )
          .and( false > true )
          .or( (3*5 < (1-2)) )
          .and( 4 === true )
      )
      // fourth test
      .and(true === false)
      .run(function(){
        console.log('third condition passed!')
      })
  })

  // nothing else worked
  .else(function(){
    console.log('none of the conditions passed!')
  });

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
  console.log('first condition passed!')
}
else if (( 22 === false || 1 > 4 && 3 < 7 || typeof 'apples' === 'string' && true === true )){
  console.log('second condition passed!');
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
    console.log('third condition passed!');
  }

}
// nothing else worked
else {
  console.log('none of the conditions passed!')
}

```
