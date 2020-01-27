# @meanie/angular-debounce

[![npm version](https://img.shields.io/npm/v/@meanie/angular-debounce.svg)](https://www.npmjs.com/package/@meanie/angular-debounce)
[![node dependencies](https://david-dm.org/meanie/angular-debounce.svg)](https://david-dm.org/meanie/angular-debounce)
[![github issues](https://img.shields.io/github/issues/meanie/angular-debounce.svg)](https://github.com/meanie/angular-debounce/issues)
[![codacy](https://img.shields.io/codacy/73649c548d484d06a6cfa5a5cca5a982.svg)](https://www.codacy.com/app/meanie/angular-debounce)


A simple Angular service for debouncing function calls

![Meanie](https://raw.githubusercontent.com/meanie/meanie/master/meanie-logo-full.png)

## Installation

You can install this package using `yarn` or `npm`:

```shell
#yarn
yarn add @meanie/angular-debounce

#npm
npm install @meanie/angular-debounce --save
```

Include the script `node_modules/@meanie/angular-debounce/release/angular-debounce.js` in your build process, or add it via a `<script>` tag to your `index.html`:

```html
<script src="node_modules/@meanie/angular-debounce/release/angular-debounce.js"></script>
```

Add `Debounce.Service` as a dependency for your app.

## Usage

Include the `$debounce` service in your controller or component:

```js
angular.module('App.MyModule').controller('MyController', function($debounce) => {

  function someFunction() {
    console.log('I am debounced');
  }

  //Debounce
  $debounce(someFunction, 1000);
});
```

The `$debounce` service returns a promise which will be resolved with the return value of the debounced function once the underlying timeout resolves.

## Issues & feature requests

Please report any bugs, issues, suggestions and feature requests in the [@meanie/angular-debounce issue tracker](https://github.com/meanie/angular-debounce/issues).

## Contributing

Pull requests are welcome! If you would like to contribute to Meanie, please check out the [Meanie contributing guidelines](https://github.com/meanie/meanie/blob/master/CONTRIBUTING.md).

## Sponsor

This package has been kindly sponsored by [Hello Club](https://helloclub.com?source=meanie), an [all in one club and membership management solution](https://helloclub.com?source=meanie) complete with booking system, automated membership renewals, online payments and integrated access and light control. Check us out if you happen to belong to any kind of club or if you know someone who helps run a club!

## License

(MIT License)

Copyright 2015-2020, Adam Reis
