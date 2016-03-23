'use strict';
var cheerio = require('cheerio')
  , got = require('got');

module.exports = function () {
  return got('http://en.wikipedia.org/wiki/Special:Random').then(function (response) {
    var $ = cheerio.load(response.body)
      , title;

    // use title to prevent dealing with formatting (<i></i>)
    title = $('title').text();
    return title.substr(0, title.indexOf(' - Wikipedia, the free encyclopedia'));
  });
};
