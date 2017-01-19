define('finpal/router', ['exports', 'ember', 'finpal/config/environment'], function (exports, _ember, _finpalConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _finpalConfigEnvironment['default'].locationType,
    rootURL: _finpalConfigEnvironment['default'].rootURL
  });

  Router.map(function () {});

  exports['default'] = Router;
});