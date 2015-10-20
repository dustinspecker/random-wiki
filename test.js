'use strict';
var randomWiki = require('./')
  , test = require('ava');

test(function (t) {
  t.plan(2);

  randomWiki().then(function (topic) {
    t.assert(typeof topic === 'string');
    t.assert(topic.length > 0);
  });
});
