# Angular Scrollable

Minimal wrapper around the
[perfect-scrollbar](https://github.com/noraesae/perfect-scrollbar) jQuery
plugin. Requires jQuery (obv) and also includes
[jquery-mousewheel](https://github.com/brandonaaron/jquery-mousewheel) as a
bower dependency for convenience.

## Getting started

Include the perfect scrollbar-stylesheet in your page head:

```html
    <link rel="stylesheet" href="perfect-scrollbar/src/perfect-scrollbar.css">
```

Include the jquery-mousewheel, perfect-scrollbar, and angular-scrollable scripts
at the end of your page body (after the jQuery and angular scripts).

```html
    <script src="perfect-scrollbar/src/perfect-scrollbar.js" type="text/javascript" charset="utf-8"></script>
    <script src="scrollable.js" type="text/javascript" charset="utf-8"></script>
```

Add the `'scrollable'` module as a dependency to your app:

```javascript
angular.module('myApp', ['scrollable']);
```

Finally use the `'scrollable'` directive in your view!

```html
<div scrollable style="height:300px">
  <!-- Too much content for 300px to handle! -->
</div>
```

You can also make use of any of the [perfect scrollbar initialize
params](https://github.com/noraesae/perfect-scrollbar#optional-parameters) by
assigning a object to the `'scrollable'` attribute.


```html
<div scrollable="{useKeyboard: false}" style="height:300px">
  <!-- Also, no keyboard for you! -->
</div>
```

## Examples

Examples are run with the `'grunt server'` task and will live reload as you edit
files in the `examples` directory (or any of the source files).

You will need to have the `grunt-cli` module installed globally. Run `bower
install && npm install` to download needed dependencies.


## Changelog

- 2014-01-17 v0.2.3 Scroll to top when container height changes.
- 2013-12-30 v0.1.0 Initial commit.


## License

[MIT](https://raw.github.com/jtrussell/angular-scrollable/master/LICENSE-MIT)
