# eslint-config

Set of ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html).

[![Travis](https://img.shields.io/travis/vanduynslagerp/eslint-config.svg)](https://travis-ci.org/vanduynslagerp/eslint-config)
[![Code Climate](https://img.shields.io/codeclimate/github/vanduynslagerp/eslint-config.svg)](https://codeclimate.com/github/vanduynslagerp/eslint-config)
[![Code Climate](https://img.shields.io/codeclimate/issues/github/vanduynslagerp/eslint-config.svg)](https://codeclimate.com/github/vanduynslagerp/eslint-config/issues)
[![Codecov](https://img.shields.io/codecov/c/github/vanduynslagerp/eslint-config.svg)](https://codecov.io/gh/vanduynslagerp/eslint-config)

[![npm](https://img.shields.io/npm/v/@metahub/eslint-config.svg)](https://www.npmjs.com/package/@metahub/eslint-config)
[![npm](https://img.shields.io/npm/dt/@metahub/eslint-config.svg)](https://www.npmjs.com/package/@metahub/eslint-config)
[![Greenkeeper badge](https://badges.greenkeeper.io/vanduynslagerp/eslint-config.svg)](https://greenkeeper.io/)
[![license](https://img.shields.io/github/license/vanduynslagerp/eslint-config.svg)](https://github.com/vanduynslagerp/eslint-config/blob/master/LICENSE)

## Installation

```
$ npm install --save-dev eslint @metahub/eslint-config
```

## Usage

Once the `@metahub/eslint-config` package is installed, you can use it by specifying the different configs in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  extends: [
    '@metahub/eslint-config/es6-config',
    '@metahub/eslint-config/node-config',
    '@metahub/eslint-config/prettier-config',
  ],
  rules: {
    // Additional, project specific rules...
  }
}
```

## Config files

|Name|Description|Extends|
|:---|:-----|:----------|
|`@metahub`|Base/generic configuration||
|`@metahub/eslint-config/jasmine-config`|Rules specific to [Jasmine](https://jasmine.github.io/)|`@metahub`|
|`@metahub/eslint-config/import-config`|Rules related to ECMAScript 2015 and Node imports|`@metahub`|
|`@metahub/eslint-config/node-config`|Rules specific to Node JS|`@metahub`, `import-config`|
|`@metahub/eslint-config/es6-config`|Rules specific to ECMAScript 2015|`@metahub`, `import-config`|
|`@metahub/eslint-config/ava-config`|Rules specific to [AVA](https://github.com/avajs/ava)|`@metahub`, `es6-config`|
|`@metahub/eslint-config/promise-config`|Rules specific to Promises|`@metahub`, `es6-config`|
|`@metahub/eslint-config/async-config`|Rules specific to async/await|`@metahub`, `promise-config`|
|`@metahub/eslint-config/prettier-config`|To be added last in the `extends` array when using [prettier](https://github.com/prettier/prettier). Adds [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) and [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)||
