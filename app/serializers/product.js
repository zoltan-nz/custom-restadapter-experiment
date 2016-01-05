import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({

  normalize(typeClass, hash) {
    debugger;
    return {
      data: {
        type:          'product',
        id:            hash.id,
        attributes:    {
          name:            hash.name,
          contentType:     hash.content_type,
          filename:        hash.filename,
          showDesign:      hash.show_design,
          fabOfWeekWinner: hash.fab_of_week_winner,
          thumbnailUrl:    hash.thumbnail_url
        },
        relationships: {
          user: {
            data: {
              type: 'user',
              id:   hash.user.id
            }
          }
        }
      }
    };
  },

  normalizeResponse(store, primaryModelClass, payload, id, requestType) {

    let results = payload.results[0].results;
    let users = results.mapBy('user');

    var newPayload = {
      products: results,
      users: users
    };

    debugger;

    return this._super(store, primaryModelClass, newPayload, id, requestType);
  }

});
