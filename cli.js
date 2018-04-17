#!/usr/bin/env node
'use strict';
var meow = require('meow')
  , randomWiki = require('./');

meow(`
  Example
    $ random-wiki
`);

randomWiki().then(function (page) {
  console.log(page);
});
