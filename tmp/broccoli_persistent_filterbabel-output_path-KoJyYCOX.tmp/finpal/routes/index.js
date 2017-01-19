define('finpal/routes/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    model: function model() {
      var t = this.store.findAll('transaction');
      console.log('transactions model:', t);
      return t;
    }

  });
});