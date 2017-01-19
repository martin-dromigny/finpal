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
  signe : Ember.computed('credit', function (){
    return this.get('credit')=='true'?'+':'';
  }),
  attachements : DS.attr(),
  size : Ember.computed('attachements', function (){
    return this.get('attachements').length;
  }),
  currencySymbol : Ember.computed('currency', function(){
    switch (this.get('currency')) {
      case 'EUR':
        return 'glyphicon glyphicon-eur';
      case 'USD':
        return 'glyphicon glyphicon-usd';
      case 'GBD':
          return 'glyphicon glyphicon-gbd ';
      default:
      return 'glyphicon glyphicon-eur';
    }
  }),
  url :Ember.computed('attachements', function (){
    if(this.get('attachements').length){
      return this.get('attachements')[0].url;
    }else{return "null";}
  })
});
