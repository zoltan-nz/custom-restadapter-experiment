import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({

  buildURL(modelName, id, snapshot, requestType, query) {
    return this.get('host') + 'design/search';
  },

  serialize() {
    debugger;
  },

  pathForType(modelName) {
    debugger;
  }

});
