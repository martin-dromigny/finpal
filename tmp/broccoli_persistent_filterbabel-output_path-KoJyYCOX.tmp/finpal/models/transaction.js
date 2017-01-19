define('finpal/models/transaction', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    created_at: _emberData['default'].attr('string'),
    counterparty_name: _emberData['default'].attr('string'),
    debit: _emberData['default'].attr('string'),
    credit: _emberData['default'].attr('string'),
    amount: _emberData['default'].attr('string'),
    currency: _emberData['default'].attr('string'),
    operation_type: _emberData['default'].attr('string')
  });
});
// attachements :