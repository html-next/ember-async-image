# Ember-async-image

[![npm version](https://badge.fury.io/js/ember-async-image.svg)](http://badge.fury.io/js/ember-async-image)
[![Build Status](https://travis-ci.org/runspired/ember-async-image.svg)](https://travis-ci.org/runspired/ember-async-image)
[![Ember Observer Score](http://emberobserver.com/badges/ember-async-image.svg)](http://emberobserver.com/addons/ember-async-image)

A lightweight performance minded image component.

`{{async-image}}` is a `1:1` drop in replacement for `<img >`, introducing no
additional markup and containing optimized teardown and image swapping.

Extracted from [smoke-and-mirrors](https://github.com/runspired/smoke-and-mirrors)

## Usage

```
{{async-image
  src=(if attrs.imageSrc attrs.imageSrc attrs.imagePlaceholder)
  alt=attrs.imageAlt
  title=attrs.imageTitle
}}
```
