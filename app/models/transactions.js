import DS from 'ember-data';

export default DS.Model.extend({
  createdAt: DS.attr('string'),
  counterpartyName: DS.attr('string'),
  debit: DS.attr('string'),
  credit: DS.attr('string'),
  amount: DS.attr('string'),
  currency: DS.attr('string'),
  operation_type: DS.attr('string'),
  // attachements : 

});
