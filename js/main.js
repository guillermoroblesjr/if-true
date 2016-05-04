/*
 * Every screen (complete *.html files) will use this file. This file pulls in the
 * required apps for a screen.
*/

require(["require-config"], function () {
  require(['js/app'], function () {
    console.log("app started");
  });
});