define('finpal/models/transactions', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    isValid: function isValid() {
      console.log('transactions');
      return false;
    }
  });
});