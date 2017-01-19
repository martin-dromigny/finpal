define('finpal/models/transactions', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    createdAt: _emberData['default'].attr('string'),
    counterpartyName: _emberData['default'].attr('string'),
    debit: _emberData['default'].attr('string'),
    credit: _emberData['default'].attr('string'),
    amount: _emberData['default'].attr('string'),
    currency: _emberData['default'].attr('string'),
    operation_type: _emberData['default'].attr('string')
  });
});
// attachements :