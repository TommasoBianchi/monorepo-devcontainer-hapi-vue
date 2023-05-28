'use strict';

module.exports = {
  method: 'GET',
  path: '/',
  options: {
    handler: async (requestIgnored, h) => {
      return 'Hi!';
    },
  },
};
