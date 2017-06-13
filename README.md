# eslint-config

> Set of ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html).

## Installation

```
$ npm install --save-dev eslint @metahub/eslint-config
```

## Usage

Once the `@metahub/eslint-config` package is installed, you can use it by specifying the different configs in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  'extends': ['@metahub/eslint-config/es6-config', '@metahub/eslint-config/node-config'],
  'rules': {
    // Additional, per-project rules...
  }
}
```
## Config files

|Name|Description|Extends|
|:---|:-----|:----------|
|`@metahub`|Base/generic configuration||
|`@metahub/eslint-config/jasmine-config`|Rules for [Jasmine](https://jasmine.github.io/)|`@metahub`|
|`@metahub/eslint-config/import-config`|Rules related to ECMAScript 2015 and Node imports|`@metahub`|
|`@metahub/eslint-config/es6-config`|Rules specific to ECMAScript 2015|`@metahub`, `import-config`|
|`@metahub/eslint-config/node-config`|Rules specific to Node JS|`@metahub`, `import-config`|
