define('finpal/tests/models/transactions.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/transactions.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/transactions.js should pass jshint.\nmodels/transactions.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodels/transactions.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});