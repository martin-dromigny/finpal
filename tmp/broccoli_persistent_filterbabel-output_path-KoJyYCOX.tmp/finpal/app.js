define('finpal/app', ['exports', 'ember', 'finpal/resolver', 'ember-load-initializers', 'finpal/config/environment'], function (exports, _ember, _finpalResolver, _emberLoadInitializers, _finpalConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _finpalConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _finpalConfigEnvironment['default'].podModulePrefix,
    Resolver: _finpalResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _finpalConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});