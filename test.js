'use strict';
import randomWiki from './';
import test from 'ava';

test(async t => {
  let topic;

  topic = await randomWiki();

  t.is(typeof topic, 'string');
  t.truthy(topic.length > 0);
});
