'use strict';

const Path = require('path');
const Hoek = require('@hapi/hoek');
const Manifest = require('./server/manifest');
const fs = require('fs');

const loadSchwiftyPluginsOptions = () => {
  const plugins = [
    'lib',
    ...fs.readdirSync('./').filter((dir) => dir.endsWith('-plugin')),
  ];
  const pluginsWithMigrations = plugins.filter((plugin) =>
    fs.existsSync(`${plugin}/plugins/@hapipal.schwifty.js`) && fs.existsSync(`${plugin}/migrations`));
  return pluginsWithMigrations.map((plugin) => require(`./${plugin}/plugins/@hapipal.schwifty.js`).options || {});
};

module.exports = Hoek.applyToDefaults(
    {
      migrations: {
        directory: loadSchwiftyPluginsOptions()
            .map(({migrationsDir = 'migrations '}) => Path.relative(process.cwd(), migrationsDir)),
      },
    },
    Manifest
        .get('/register/plugins', process.env)
        .find(({plugin}) => plugin === '@hapipal/schwifty')
        .options.knex,
);
