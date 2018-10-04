# ue-scroll.js

Lightweight JavaScript library for scroll up.

Demo and documentation:
https://azrsix.github.io/ue-scroll-js/

## Getting Started

### Install by npm (recommended)

```
$ npm install ue-scroll-js --save
```

### or Yarn

```
$ yarn add ue-scroll-js
```

### Using CDN

```
<link rel="stylesheet" href="//unpkg.com/ue-scroll-js@latest/dist/ue-scroll.min.css">
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

### Use on ES6 modules

```
'use strict';
import ue from 'ue-scroll-js';
// Run this script
ue.init();
```

By the default, ue-scroll.js automatically detect element having '#ue-scroll'. It needs to be started after DOM is rendered.

## Options

| Key             | Data Type | Default Value | Description                                                                  |
| --------------- | --------- | ------------- | ---------------------------------------------------------------------------- |
| element         | String    | '#ue-scroll'  | Specify an element with a CSS selector.                                      |
| position        | Number    | 200           | Specify the scroll position where the button is displayed.                   |
| scrollSpeed     | Number    | 10            | Specify the speed of scrolling (Recommend 20 or less)                        |
| fadeSpeed       | Number    | 10            | Specify the speed of fade (Recommend 20 or less)                             |
| cancelByScroll  | Boolean   | true          | Cancel scrolling when scroll down (This setting is ignored on touch devices) |
| cancelByClick   | Boolean   | true          | Cancel scrolling when window clicking.                                       |
| cancelByKeydown | Boolean   | true          | Cancel scrolling when pressed any key.                                       |

In addition, You can freely change the color, design, position etc of buttons with CSS!

## Examples

Please refer to the [documentation](https://azrsix.github.io/ue-scroll-js/docs.html#examples "ue-scroll.js").
