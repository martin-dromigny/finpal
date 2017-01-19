define('finpal/tests/helpers/resolver', ['exports', 'finpal/resolver', 'finpal/config/environment'], function (exports, _finpalResolver, _finpalConfigEnvironment) {

  var resolver = _finpalResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _finpalConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _finpalConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});