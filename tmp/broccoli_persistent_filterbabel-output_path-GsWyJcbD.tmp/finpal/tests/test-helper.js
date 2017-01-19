define('finpal/tests/test-helper', ['exports', 'finpal/tests/helpers/resolver', 'ember-qunit'], function (exports, _finpalTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_finpalTestsHelpersResolver['default']);
});