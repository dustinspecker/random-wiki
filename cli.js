#!/usr/bin/env node
'use strict';
var meow = require('meow')
  , randomWiki = require('./');

meow({
  help: ['Example',
         '  $ random-wiki'
        ].join('\n')
});

randomWiki().then(function (page) {
  console.log(page);
});
