import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),

  products: DS.hasMany('product', {async: true})
});
