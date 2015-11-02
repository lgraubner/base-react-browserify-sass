# Base frontend template

[![David Dev](https://img.shields.io/david/dev/lgraubner/base-frontend-template.svg)](https://david-dm.org/lgraubner/base-frontend-template#info=devDependencies)

This template is a starting point for the frontend part of your project. You can modify and extend this to your needs.

## Features

The following features will help you to have a great workflow and develop easy and fast.

### Automated building with Gulp

For an easy workflow [Gulp](http://gulpjs.com/) builds automatically right away while your are coding. This includes the following tasks:

- Converting SASS, combining CSS files, minifying styles
- Linting Javscript, combining Javscript files, converting ES2015 features to ES5 and minifying it
- Optimizing images for the web
- Watching for file changes and refreshing your browser

The `gulpfile.babel.js` is using ES2015 syntax.

#### Styles

For this package [SASS](http://sass-lang.com/) is used as CSS preprocessor. Gulp will process your sass files and combine them with other regular CSS files. Autoprefixer takes care of browser specific vendor prefixes, so you don't have to worry about it. All your CSS gets minified to reduce the file size.

#### Javascript

This setup is ES2015 ready! You can write ES2015 code and [Babel](http://babeljs.io/) will compile it to ES5. You can benefit from new features and don't have to worry about browser support. Every change you make on your code will be linted to reveal possible problems. As last step all your Javascript files will be combined and minified to reduce file size and HTTP requests.

#### Images

To reduce the file size of your images `GIF`, `JPEG`, `PNG` and `SVG` files will be compressed by lossless optimizers.

#### Tests

Your Javascript code should be tested to make sure it works as expected. Write tests and [Mocha](https://mochajs.org/) will run them in a headless [PhantomJS](http://phantomjs.org/) browser. This way you can get instant feedback and discover errors early.

### Folder structure

You should only work in the `src` folder. All processed files will be placed into `dist`. Use this for production and upload it to your live environment, or directly link to it. The third folder `test` should contain any tests you are running to evaluate your Javascript code.

```
/src
|-- css
|   |-- scss
|   |   |-- components
|   |   |-- modules
|   |   `-- partials
|   `-- vendor
|-- img
`-- js
    `--vendor
```

The `src` folder contains an `css`, `img` and `js` folder. If you are using SASS place it in the `scss` folder. Gulp will search for a `main.scss` file to process it, so make sure you include all your SASS components inside it. Put CSS files in the `css` folder or organize it in subfolders. Third party files should be placed inside the vendor folder.

Place all of your images inside the `img` folder. Gulp will process this files and optimize them.

All of your Javscript files should be in the `js` folder or subfolders. Third party libraries belong inside the `vendor` folder.

Any other folders and files inside the `src` folder will be copied to the `dist` folder without any changes.

## Get started

To get started install the dependencies.

```BASH
$ npm install
```

Start gulp and it will watch for changes and builds right away. Your browser will be refreshed automatically by Browsersync.

```BASH
$ gulp serve
```

## Advanced usage of Gulp tasks

You can also use Gulp tasks directly if you don't want to let Gulp watch your changes or avoid automatically refreshing your browser.

**default**

The default task cleans the  `dist` folder and builds all files from scratch.

**test**

Your Javascript code should be tested. By calling `$ gulp test` a headless phantom.js Browser will start and mocha will execute all tests inside the `test` folder.

*The test task will not run automatically as it can slow down your working machine and disturb your workflow.*

**watch**

This task will watch all files for changes and execute the corresponding task to handle the files.

**serve**

For a nice workflow use this task. It will build all files from scratch, watch for changes and start a webserver, syncing with your browser.

## Included CSS features

### Helpers

You can either use an helper by adding it's class or include it by using the SASS placeholder.

#### clearfix

Adds a clearfix to the element.

```SASS
.clearfix {
    &:before, &:after {
        content: "";
        display: table;
    }
    &:after {
        clear: both;
    }
}
```

```HTML
// usage as class
<div class="clearfix">...</div>
```

```SASS
// usage as placeholder
.element {
    @extend %clearfix;
}
```

#### hidden

Hides an element.

```CSS
.hidden {
    display: none !important;
}
```

```HTML
// usage as class
<div class="hidden">...</div>
```

```SASS
// usage as placeholder
.element {
    @extend %hidden;
}
```

#### visible

Shows an element.

```CSS
.visible {
    display: block !important;
}
```

```HTML
// usage as class
<div class="visible">...</div>
```

```SASS
// usage as placeholder
.element {
    @extend %visible;
}
```

#### invisible

Hides an element without taking it out of the document flow.

```CSS
.invisible {
    border: 0;
    clip:rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}
```

```HTML
// usage as class
<div class="invisible">...</div>
```

```SASS
// usage as placeholder
.element {
    @extend %invisible;
}
```

#### float_left

Floats an element to the left.

```CSS
.float_left {
    float: left;
}
```

```HTML
// usage as class
<div class="float_left">...</div>
```

```SASS
// usage as placeholder
.element {
    @extend %float_left;
}
```

#### float_right

Floats an element to the right.

```CSS
.float_right {
    float: right;
}
```

```HTML
// usage as class
<div class="float_right">...</div>
```

```SASS
// usage as placeholder
.element {
    @extend %float_left;
}
```

#### img-responsive

Makes an image behave responsive.

```CSS
.img-responsive {
    height: auto;
    max-width: 100%;
    display: block;
}
```

```HTML
// usage as class
<img src="..." class="img-responsive">
```

```SASS
// usage as placeholder
.element {
    @extend %img-responsive;
}
```

#### text-left

Aligns text to the left.

```CSS
.text-left {
    text-align: left;
}
```

```HTML
// usage as class
<div class="text-left">...</div>
```

```SASS
// usage as placeholder
.element {
    @extend %text-left;
}
```

#### text-right

Aligns text to the right.

```CSS
.text-right {
    text-align: right;
}
```

```HTML
// usage as class
<div class="text-right">...</div>
```

```SASS
// usage as placeholder
.element {
    @extend %text-right;
}
```

#### text-center

Aligns text to the center.

```CSS
.text-center {
    text-align: center;
}
```

```HTML
// usage as class
<div class="text-center">...</div>
```

```SASS
// usage as placeholder
.element {
    @extend %text-center;
}
```

#### text-justify

Justifies text.

```CSS
.text-justify {
    text-align: justify;
}
```

```HTML
// usage as class
<div class="text-justify">...</div>
```

```SASS
// usage as placeholder
.element {
    @extend %text-justify;
}
```

#### text-uppercase

Transforms text to uppercase.

```CSS
.text-uppercase {
    text-transform: uppercase;
}
```

```HTML
// usage as class
<div class="text-uppercase">...</div>
```

```SASS
// usage as placeholder
.element {
    @extend %text-uppercase;
}
```

#### text-hide

Hides text for the visitor. Useful for elements with background images as alternate text.

```CSS
.text-hide {
    text-indent: -9999px;
    overflow: hidden;
    display: block;
}
```

```HTML
// usage as class
<div class="text-hide">...</div>
```

```SASS
// usage as placeholder
.element {
    @extend %text-hide;
}
```

#### block-center

Centers an element.

```CSS
.block-center {
    display: block;
    margin-left: auto;
    margin-right: auto;
}
```

```HTML
// usage as class
<div class="block-center">...</div>
```

```SASS
// usage as placeholder
.element {
    @extend %block-center;
}
```


### SASS mixins

#### prefix

Prefixes css properties with vendor prefixes.

**Usage**:

```SASS
.element {
    @include prefix((
        border-radius: 5px,
        appearance: button
    ), webkit moz);
}
```

**Output**:

```CSS
.element {
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
}
```

You can omit the vendor prefixes. By default `-webkit`, `-moz`, `-ms` and `-o` will be added to each property.

#### font-size

Converts `font-size` values to rem and adds a callback. The calculated font size is based on an estimated base font size of 16px.

**Usage**:

```SASS
.element {
    @include font-size(20px);
}
```

**Output**:

```CSS
.element {
    font-size: 20px;
    font-size: 1.25rem;
}
```
