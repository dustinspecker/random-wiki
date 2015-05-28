'use strict';
var randomWiki = require('./')
  , test = require('ava');

test(function (t) {
  t.plan(3);

  randomWiki(function (err, topic) {
    t.assert(!err, err);
    t.assert(typeof topic === 'string');
    t.assert(topic.length > 0);
  });
});
