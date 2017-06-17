import test from 'ava';
import getRuleFinder from 'eslint-find-rules';

test('No unset rules in index.js', (t) => {
  t.deepEqual([], getRuleFinder('index.js').getUnusedRules());
});

test('No unset rules in async-config.js', (t) => {
  t.deepEqual([], getRuleFinder('async-config.js').getUnusedRules());
});

test('No unset rules in ava-config.js', (t) => {
  t.deepEqual([], getRuleFinder('ava-config.js').getUnusedRules());
});

test('No unset rules in es6-config.js', (t) => {
  t.deepEqual([], getRuleFinder('es6-config.js').getUnusedRules());
});

test('No unset rules in import-config.js', (t) => {
  t.deepEqual([], getRuleFinder('import-config.js').getUnusedRules());
});

test('No unset rules in jasmine-config.js', (t) => {
  t.deepEqual([], getRuleFinder('jasmine-config.js').getUnusedRules());
});

test('No unset rules in node-config.js', (t) => {
  t.deepEqual([], getRuleFinder('node-config.js').getUnusedRules());
});

test('No unset rules in promise-config.js', (t) => {
  t.deepEqual([], getRuleFinder('promise-config.js').getUnusedRules());
});
