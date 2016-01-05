import DS from 'ember-data';

export default DS.RESTSerializer.extend({

  normalize(typeClass, hash) {
    debugger;
    return {
      data: {
        type:       'user',
        id:         hash.id,
        attributes: {
          firstName: hash.first_name
        }
      }
    };
  },

  normalizePayload(store, primaryModelClass, payload, id, requestType) {
    debugger;
  }
});
