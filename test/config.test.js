import test from 'ava';
import getRuleFinder from 'eslint-find-rules';
import {difference} from 'lodash';

const indexRules = getRuleFinder('index.js');
const asyncRules = getRuleFinder('async.js');
const avaRules = getRuleFinder('ava.js');
const es6Rules = getRuleFinder('es6.js');
const importRules = getRuleFinder('import.js');
const jasmineRules = getRuleFinder('jasmine.js');
const nodeRules = getRuleFinder('node.js');
const promiseRules = getRuleFinder('promise.js');
const prettierRules = getRuleFinder('prettier.js');

test('No unset rules in index.js', t => {
  t.deepEqual([], indexRules.getUnusedRules());
});

test('No deprecated or inexistent rules in index.js', t => {
  t.deepEqual([], difference(indexRules.getCurrentRules(), indexRules.getAllAvailableRules()));
});

test('No unset rules in async.js', t => {
  t.deepEqual([], asyncRules.getUnusedRules());
});

test('No deprecated or inexistent rules in async.js', t => {
  t.deepEqual([], difference(asyncRules.getCurrentRules(), asyncRules.getAllAvailableRules()));
});

test('No unset rules in ava.js', t => {
  t.deepEqual([], avaRules.getUnusedRules());
});

test('No deprecated or inexistent rules in ava.js', t => {
  t.deepEqual([], difference(avaRules.getCurrentRules(), avaRules.getAllAvailableRules()));
});

test('No unset rules in es6.js', t => {
  t.deepEqual([], es6Rules.getUnusedRules());
});

test('No deprecated or inexistent rules in es6.js', t => {
  t.deepEqual([], difference(es6Rules.getCurrentRules(), es6Rules.getAllAvailableRules()));
});

test('No unset rules in import.js', t => {
  t.deepEqual([], importRules.getUnusedRules());
});

test('No deprecated or inexistent rules in import.js', t => {
  t.deepEqual([], difference(importRules.getCurrentRules(), importRules.getAllAvailableRules()));
});

test('No unset rules in jasmine.js', t => {
  t.deepEqual([], jasmineRules.getUnusedRules());
});

test('No deprecated or inexistent rules in jasmine.js', t => {
  t.deepEqual([], difference(jasmineRules.getCurrentRules(), jasmineRules.getAllAvailableRules()));
});

test('No unset rules in node.js', t => {
  t.deepEqual([], nodeRules.getUnusedRules());
});

test('No deprecated or inexistent in node.js', t => {
  t.deepEqual([], difference(nodeRules.getCurrentRules(), nodeRules.getAllAvailableRules()));
});

test('No unset rules in promise.js', t => {
  t.deepEqual([], promiseRules.getUnusedRules());
});

test('No deprecated or inexistent rules in promise.js', t => {
  t.deepEqual([], difference(promiseRules.getCurrentRules(), promiseRules.getAllAvailableRules()));
});

test('No unset plugin rules in prettier.js', t => {
  t.deepEqual([], difference(prettierRules.getPluginRules(), prettierRules.getCurrentRules()));
});
