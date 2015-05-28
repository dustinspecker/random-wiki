#!/usr/bin/env node
'use strict';
var meow = require('meow')
  , randomWiki = require('./');

meow({
  help: ['Example',
         '  $ random-wiki'
        ].join('\n')
});

randomWiki(function (err, page) {
  if (err) {
    throw new Error(err.message);
  }

  console.log(page);
});
