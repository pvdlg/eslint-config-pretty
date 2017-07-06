import test from 'ava';
import getRuleFinder from 'eslint-find-rules';
import {difference} from 'lodash';

const indexRules = getRuleFinder('index.js');
const asyncRules = getRuleFinder('async-config.js');
const avaRules = getRuleFinder('ava-config.js');
const es6Rules = getRuleFinder('es6-config.js');
const importRules = getRuleFinder('import-config.js');
const jasmineRules = getRuleFinder('jasmine-config.js');
const nodeRules = getRuleFinder('node-config.js');
const promiseRules = getRuleFinder('promise-config.js');
const prettierRules = getRuleFinder('prettier-config.js');

test('No unset rules in index.js', t => {
  t.deepEqual([], indexRules.getUnusedRules());
});

test('No deprecated or inexistent rules in index.js', t => {
  t.deepEqual([], difference(indexRules.getCurrentRules(), indexRules.getAllAvailableRules()));
});

test('No unset rules in async-config.js', t => {
  t.deepEqual([], asyncRules.getUnusedRules());
});

test('No deprecated or inexistent rules in async-config.js', t => {
  t.deepEqual([], difference(asyncRules.getCurrentRules(), asyncRules.getAllAvailableRules()));
});

test('No unset rules in ava-config.js', t => {
  t.deepEqual([], avaRules.getUnusedRules());
});

test('No deprecated or inexistent rules in ava-config.js', t => {
  t.deepEqual([], difference(avaRules.getCurrentRules(), avaRules.getAllAvailableRules()));
});

test('No unset rules in es6-config.js', t => {
  t.deepEqual([], es6Rules.getUnusedRules());
});

test('No deprecated or inexistent rules in es6-config.js', t => {
  t.deepEqual([], difference(es6Rules.getCurrentRules(), es6Rules.getAllAvailableRules()));
});

test('No unset rules in import-config.js', t => {
  t.deepEqual([], importRules.getUnusedRules());
});

test('No deprecated or inexistent rules in import-config.js', t => {
  t.deepEqual([], difference(importRules.getCurrentRules(), importRules.getAllAvailableRules()));
});

test('No unset rules in jasmine-config.js', t => {
  t.deepEqual([], jasmineRules.getUnusedRules());
});

test('No deprecated or inexistent rules in jasmine-config.js', t => {
  t.deepEqual([], difference(jasmineRules.getCurrentRules(), jasmineRules.getAllAvailableRules()));
});

test('No unset rules in node-config.js', t => {
  t.deepEqual([], nodeRules.getUnusedRules());
});

test('No deprecated or inexistent in node-config.js', t => {
  t.deepEqual([], difference(nodeRules.getCurrentRules(), nodeRules.getAllAvailableRules()));
});

test('No unset rules in promise-config.js', t => {
  t.deepEqual([], promiseRules.getUnusedRules());
});

test('No deprecated or inexistent rules in promise-config.js', t => {
  t.deepEqual([], difference(promiseRules.getCurrentRules(), promiseRules.getAllAvailableRules()));
});

test('No unset plugin rules in prettier-config.js', t => {
  t.deepEqual([], difference(prettierRules.getPluginRules(), prettierRules.getCurrentRules()));
});
