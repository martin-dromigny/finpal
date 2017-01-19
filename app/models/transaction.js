import DS from 'ember-data';

export default DS.Model.extend({
  created_at: DS.attr('string'),
  counterparty_name: DS.attr('string'),
  debit: DS.attr('string'),
  credit: DS.attr('string'),
  amount: DS.attr('string'),
  currency: DS.attr('string'),
  operation_type: DS.attr('string'),
  // attachements :

});
