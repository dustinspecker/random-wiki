random-wiki
===========

[![NPM version](https://badge.fury.io/js/random-wiki.svg)](http://badge.fury.io/js/random-wiki) [![Build Status](https://travis-ci.org/dustinspecker/random-wiki.svg?branch=master)](https://travis-ci.org/dustinspecker/random-wiki)

[![Code Climate](https://codeclimate.com/github/dustinspecker/random-wiki/badges/gpa.svg)](https://codeclimate.com/github/dustinspecker/random-wiki) [![Dependencies](https://david-dm.org/dustinspecker/random-wiki.svg)](https://david-dm.org/dustinspecker/random-wiki/#info=dependencies&view=table) [![DevDependencies](https://david-dm.org/dustinspecker/random-wiki/dev-status.svg)](https://david-dm.org/dustinspecker/random-wiki/#info=devDependencies&view=table)

> Get a random topic from [Wikipedia.org](http://www.wikipedia.org/)

*Inspired by [Sindre Sorhus](https://github.com/sindresorhus)' [review-times](https://github.com/sindresorhus/review-times).*

## CLI

```
$ npm install --global random-wiki
```

```
$ random-wiki --help

  Example
    $ random-wiki
      Monsters, Inc.
```

## API

```
$ npm install --save random-wiki
```

```js
var randomWiki = require('random-wiki');

randomWiki(function (err, topic) {
  console.log(topic);
  //=> Monsters, Inc.
});
```

## License
MIT © Dustin Specker