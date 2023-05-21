'use strict';

module.exports = {
  method: 'GET',
  path: '/',
  options: {
    handler: async (request, h) => {
      return 'Hi!';
    },
  },
};
