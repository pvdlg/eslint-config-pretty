module.exports = {
  'extends': ['./index.js'],
  'plugins': ['jasmine'],
  'env': {'jasmine': true},
  'rules': {
    // Jasmine
    'jasmine/named-spy': 2,
    'jasmine/no-focused-tests': 1,
    'jasmine/no-disabled-tests': 2,
    'jasmine/no-suite-dupes': [2, 'branch'],
    'jasmine/no-spec-dupes': [2, 'branch'],
    'jasmine/missing-expect': 2,
    'jasmine/no-suite-callback-args': 2,
    'jasmine/valid-expect': 2,
    'jasmine/no-assign-spyon': 2,
    'jasmine/no-unsafe-spy': 2,
    'jasmine/no-global-setup': 2,
    'jasmine/no-expect-in-setup-teardown': 2
  }
};
