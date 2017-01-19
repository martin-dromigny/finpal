define('finpal/tests/helpers/start-app', ['exports', 'ember', 'finpal/app', 'finpal/config/environment'], function (exports, _ember, _finpalApp, _finpalConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    // use defaults, but you can override
    var attributes = _ember['default'].assign({}, _finpalConfigEnvironment['default'].APP, attrs);

    _ember['default'].run(function () {
      application = _finpalApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});