# Ember-async-image

[![npm version](https://badge.fury.io/js/ember-async-image.svg)](http://badge.fury.io/js/ember-async-image)
[![Build Status](https://travis-ci.org/runspired/ember-async-image.svg)](https://travis-ci.org/runspired/ember-async-image)
[![Ember Observer Score](http://emberobserver.com/badges/ember-async-image.svg)](http://emberobserver.com/addons/ember-async-image)

A lightweight performance minded image component.

`{{async-image}}` is a `1:1` drop in replacement for `<img >`, introducing no
additional markup and containing optimized teardown and image swapping.

Extracted from [smoke-and-mirrors](https://github.com/runspired/smoke-and-mirrors)

## Usage

```hbs
{{async-image
  src=(if attrs.imageSrc attrs.imageSrc attrs.imagePlaceholder)
  alt=attrs.imageAlt
  title=attrs.imageTitle
}}
```

### Test Helper

Sometimes you want to wait for all async images on a page to load during tests. `waitUntilAllAsyncImagesAreLoaded` can be use to wait for all image to finish loading during a test. For instance you use visual regression testing and need to ensure all async images are loaded before taking a snapshot.

```js
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';
import { takeVisualRegressionSnapshot } from 'my-great-visual-regression-testing-lib';
import { waitUntilAllAsyncImagesAreLoaded } from 'ember-async-image/test-support';

module('Acceptance | dashboard', function (hooks) {
  setupApplicationTest(hooks);

  test('no visual regressions', async function(assert) {
    visit('/page-with-async-images');
    await waitUntilAllAsyncImagesAreLoaded();
    await takeVisualRegressionSnapshot();
  });
});
```
