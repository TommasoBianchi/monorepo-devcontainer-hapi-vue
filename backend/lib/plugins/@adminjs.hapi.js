
'use strict';

const {models: usersModels} = require('../../users-plugin');

module.exports = async (server, options) => {
  const AdminJS = await import('adminjs').then((module) => module.default);
  const AdminJSHapi = await import('@adminjs/hapi').then((module) => module.default);
  const AdminJSObjection = await import('@adminjs/objection');

  AdminJS.registerAdapter({
    Resource: AdminJSObjection.Resource,
    Database: AdminJSObjection.Database,
  });

  return {
    plugin: AdminJSHapi,
    options: {
      resources: [...Object.values(usersModels)],
      rootPath: '/admin',
      auth: {
        isSecure: process.env.NODE_ENV === 'production',
      },
      registerInert: true,
    },
  };
};
