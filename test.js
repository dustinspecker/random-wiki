'use strict';
import randomWiki from './';
import test from 'ava';

test(async t => {
  let topic;

  topic = await randomWiki();

  t.assert(typeof topic === 'string');
  t.assert(topic.length > 0);
});
