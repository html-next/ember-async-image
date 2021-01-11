import { findAll, waitUntil } from '@ember/test-helpers';

export default function waitUntilAllAsyncImagesAreLoaded({ emptyAllowed = false, failureAllowed = false } = {}) {
  return waitUntil(function allAsyncImagesLoaded() {
    return findAll('.async-image').every(function isLoaded(element) {
      return (
        element.classList.contains('is-loaded') ||
        (failureAllowed && element.classList.contains('is-failed')) ||
        (emptyAllowed && element.classList.contains('is-empty'))
      );
    });
  });
}
