'use strict';
import randomWiki from './';
import test from 'ava';

test(async t => {
  let topic;

  topic = await randomWiki();

  t.is(typeof topic, 'string');
  t.ok(topic.length > 0);
});
