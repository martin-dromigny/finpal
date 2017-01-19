import DS from 'ember-data';

export default DS.Model.extend({
  isValid:()=>{
    console.log ('transactions');
    return false;}
});
