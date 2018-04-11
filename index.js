"use strict";
var got = require("got");

module.exports = function() {
  return got(
    "https://en.wikipedia.org/w/api.php?action=query&list=random&rnlimit=1&format=json&origin=*&rnnamespace=0"
  )
    .then(function(response) {
      return JSON.parse(response.body).query.random[0].title;
    })
    .catch(function(error) {
      console.error(error);
    });
};
