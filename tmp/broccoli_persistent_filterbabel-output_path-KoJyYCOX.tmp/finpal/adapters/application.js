define('finpal/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].RESTAdapter.extend({
    host: 'http://private-5d708-interviewfront.apiary-mock.com'
  });
});