import DS from 'ember-data';

export default DS.RESTAdapter.extend({

  defaultSerializer: '-rest',
  host: 'https://api.spoonflower.com/'

});
