# Dead Sea Scrolls

Console polyfill and suppression script; There are many like it but this one is mine.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Support](#support)
- [Contributing](#contributing)

## Installation

Yarn Installation

```sh
    yarn add dead-sea-scrolls-js
```

NPM Installation
```sh
    npm install dead-sea-scrolls-js
```

## Usage

Using dead-sea-scrolls-js is simple.

ES6
```javascript
    import deadSeaScrolls from 'dead-sea-scrolls-js';

    deadSeaScrolls.initialize();
```

This module does use a umd wrapper and can be consumed via script tag if you have `js-cookie` and `lodash` loaded globally.

Global:
```html
    <script type="text/javascript" src="dead-sea-scrolls.js" />

    <script type="text/javascript">
        deadSeaScrolls.initialize();
    </script>
```
