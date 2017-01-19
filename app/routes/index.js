import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    const t = this.store.findAll('transaction');
    console.log('transactions model:', t);
    return t;
  }

});
