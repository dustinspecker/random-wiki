'use strict';
var cheerio = require('cheerio')
  , got = require('got');

module.exports = function (cb) {
  got('http://en.wikipedia.org/wiki/Special:Random', function (err, data) {
    var $, title, topic;

    if (err) {
      cb(err);
      return;
    }

    $ = cheerio.load(data);
    // use title to prevent dealing with formatting (<i></i>)
    title = $('title').text();
    topic = title.substr(0, title.indexOf(' - Wikipedia, the free encyclopedia'));

    cb(null, topic);
  });
};
