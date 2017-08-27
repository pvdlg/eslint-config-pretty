# eslint-config-pretty

Modular ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) that works well with [prettier](https://github.com/prettier/prettier).

[![npm](https://img.shields.io/npm/v/eslint-config-pretty.svg)](https://www.npmjs.com/package/eslint-config-pretty)
[![npm](https://img.shields.io/npm/dt/eslint-config-pretty.svg)](https://www.npmjs.com/package/eslint-config-pretty)
[![Greenkeeper badge](https://badges.greenkeeper.io/vanduynslagerp/eslint-config-pretty.svg)](https://greenkeeper.io/)
[![license](https://img.shields.io/github/license/vanduynslagerp/eslint-config-pretty.svg)](https://github.com/vanduynslagerp/eslint-config-pretty/blob/master/LICENSE)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

[![Travis](https://img.shields.io/travis/vanduynslagerp/eslint-config-pretty.svg)](https://travis-ci.org/vanduynslagerp/eslint-config-pretty)
[![Code Climate](https://img.shields.io/codeclimate/github/vanduynslagerp/eslint-config-pretty.svg)](https://codeclimate.com/github/vanduynslagerp/eslint-config-pretty)
[![Codecov](https://img.shields.io/codecov/c/github/vanduynslagerp/eslint-config-pretty.svg)](https://codecov.io/gh/vanduynslagerp/eslint-config-pretty)

## Installation

All the dependencies have to be installed explicitly (see [`eslint/eslint#3458`](https://github.com/eslint/eslint/issues/3458)).
```bash
$ npm install eslint-config-pretty eslint-config-prettier eslint-plugin-ava eslint-plugin-babel eslint-plugin-eslint-comments eslint-plugin-import eslint-plugin-jasmine eslint-plugin-json eslint-plugin-node eslint-plugin-prettier eslint-plugin-promise eslint-plugin-sort-class-members eslint-plugin-unicorn prettier eslint --save-dev
```

Alternatively you can use [install-peerdeps](https://github.com/nathanhleung/install-peerdeps):
```bash
$ npm install install-peerdeps --global
$ npm install eslint-config-pretty --save-dev
$ install-peerdeps eslint-config-pretty --dev
```

## Usage

Once the `eslint-config-pretty` package is installed, you can use it by specifying the different configs in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  extends: [
    'pretty/es6',
    'pretty/node',
    'pretty/prettier',
  ],
  rules: {
    // Additional, project specific rules...
  }
}
```

## Config files

|Name|Description|Extends|
|:---|:-----|:----------|
|`pretty`|Base/generic configuration||
|`pretty/jasmine`|Rules specific to [Jasmine](https://jasmine.github.io/)|`pretty`|
|`pretty/import`|Rules related to ECMAScript 2015 and Node imports|`pretty`|
|`pretty/node`|Rules specific to Node JS|`pretty`, `import`|
|`pretty/es6`|Rules specific to ECMAScript 2015|`pretty`, `import`|
|`pretty/ava`|Rules specific to [AVA](https://github.com/avajs/ava)|`pretty`, `es6`|
|`pretty/promise`|Rules specific to Promises|`pretty`, `es6`|
|`pretty/async`|Rules specific to async/await|`pretty`, `promise`|
|`pretty/prettier`|To be added last in the `extends` array when using [prettier](https://github.com/prettier/prettier). Adds [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) and [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)||
