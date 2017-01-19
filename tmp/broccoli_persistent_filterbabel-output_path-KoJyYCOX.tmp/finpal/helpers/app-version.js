define('finpal/helpers/app-version', ['exports', 'ember', 'finpal/config/environment'], function (exports, _ember, _finpalConfigEnvironment) {
  exports.appVersion = appVersion;
  var version = _finpalConfigEnvironment['default'].APP.version;

  function appVersion() {
    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});