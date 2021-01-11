import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { waitUntilAllAsyncImagesAreLoaded } from 'ember-async-image/test-support';

module('Integration | Component | async image', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(1);

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    await render(hbs`{{async-image}}`);

    assert.equal(findAll('*')[0].firstElementChild.tagName, 'IMG');
  });

  test('waitUntilAllAsyncImagesAreLoaded', async function(assert) {
    await render(hbs`{{async-image src="/small.png"}}`);
    let element = findAll('*')[0].firstElementChild;

    assert.ok(element.classList.contains('is-loading'), `classes: ${element.classList.toString()}`);
    await waitUntilAllAsyncImagesAreLoaded();
    assert.ok(element.classList.contains('is-loaded'), `classes: ${element.classList.toString()}`);
  });

  test('waitUntilAllAsyncImagesAreLoaded - empty', async function(assert) {
    await render(hbs`{{async-image src=""}}`);
    let element = findAll('*')[0].firstElementChild;

    await waitUntilAllAsyncImagesAreLoaded({ emptyAllowed: true });
    assert.ok(element.classList.contains('is-empty'), `classes: ${element.classList.toString()}`);
  });

  test('waitUntilAllAsyncImagesAreLoaded - failed', async function(assert) {
    await render(hbs`{{async-image src="/nonexistent.png"}}`);
    let element = findAll('*')[0].firstElementChild;

    await waitUntilAllAsyncImagesAreLoaded({ failureAllowed: true });
    assert.ok(element.classList.contains('is-failed'), `classes: ${element.classList.toString()}`);
  });
});
