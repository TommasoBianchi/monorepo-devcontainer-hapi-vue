
'use strict';

const Manifest = require('../../server/manifest.js');
const {models: usersModels} = require('../../users-plugin/index.js');
const Knex = require('knex');

module.exports = async (server, options) => {
  // TODO: find a better way to load and setup knex options
  const knexOptions = Manifest.get('/register/plugins', process.env)
      .find(({plugin}) => plugin == '@hapipal/schwifty').options.knex;
  const knex = new Knex(knexOptions);

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
      resources: [...Object.values(usersModels).map((model) => model.bindKnex(knex))],
      rootPath: '/admin',
      auth: {
        isSecure: process.env.NODE_ENV === 'production',
      },
      registerInert: true,
    },
  };
};
