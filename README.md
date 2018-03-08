# ue-scroll.js

Lightweight JavaScript library for scroll up.

Demo and documentation:
https://azrsix.github.io/ue-scroll-js/

## Getting Started

### Install by npm (recommended)
```
$ npm install ue-scroll-js --save
```

### or Yarn</h3>
```
$ yarn add ue-scroll-js
```

### Using CDN
```
<script src="https://unpkg.com/ue-scroll-js"></script>
```

### Basic Usage
```
<html>
  <head>
    <!-- Read CSS and JS -->
    <link rel="stylesheet" href="/path/to/ue-scroll-js/dist/ue-scroll.min.css">
    <script src="/path/to/ue-scroll-js/dist/ue-scroll.min.js"></script>
  </head>
  <body>
    <main>
      Your main contents
    </main>
    <!-- Run this script -->
    <div id="ue-scroll" class="ue-scroll btn-white arrow-black circle shadow"></div>
    <script>
      UeScroll.init();
    </script>
  </body>
</html>
```

### or Set initial options
```
<!-- Run this script -->
<div id="my-custom-id" class="ue-scroll btn-white arrow-black circle shadow"></div>
<script>
  UeScroll.init({
    element: '#my-custom-id',
    scrollSpeed: 10
  });
</script>
```

### Use on es6 modules
```
'use strict';
import ue from 'ue-scroll-js';
// Run this script
ue.init();
```
By the default, ue-scroll.js automatically detect element having '#ue-scroll'. It needs to be started after DOM is rendered.

## Options

| Key         | Default Value | Description                                                |
| ----------- | ------------- | ---------------------------------------------------------- |
| element     | '#ue-scroll'  | Specify an element with a CSS selector.                    |
| position    | 200           | Specify the scroll position where the button is displayed. |
| scrollSpeed | 10            | Specify the speed of scrolling (Recommend 20 or less)      |
| fadeSpeed   | 10            | Specify the speed of fade (Recommend 20 or less)           |
In addition, You can freely change the color, design, position etc of buttons with CSS!

## examples

Please refer to the [documentation](https://azrsix.github.io/ue-scroll-js/docs.html#examples "ue-scroll.js").
