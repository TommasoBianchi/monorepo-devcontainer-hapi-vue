'use strict';

const Dotenv = require('dotenv');
const Confidence = require('@hapipal/confidence');
const Toys = require('@hapipal/toys');
const Schwifty = require('@hapipal/schwifty');

// Pull .env into process.env
Dotenv.config({path: `${__dirname}/.env`});

// Glue manifest as a confidence store
module.exports = new Confidence.Store({
  server: {
    host: 'localhost',
    port: {
      $param: 'PORT',
      $coerce: 'number',
      $default: 3000,
    },
    debug: {
      $filter: 'NODE_ENV',
      $default: {
        log: ['error', 'start'],
        request: ['error'],
      },
      production: {
        request: ['implementation'],
      },
    },
  },
  register: {
    plugins: [
      {
        plugin: '../lib', // Main plugin
        options: {},
      },
      {
        plugin: {
          $filter: 'NODE_ENV',
          $default: '@hapipal/hpal-debug',
          production: Toys.noop,
        },
      },
      {
        plugin: '@hapipal/schwifty',
        options: {
          $filter: 'NODE_ENV',
          $default: {},
          $base: {
            migrateOnStart: true,
            knex: {
              client: 'postgresql',
              connection: {
                database: 'postgres',
                user: 'postgres',
                password: 'postgres',
              },
              migrations: {
                stub: Schwifty.migrationsStubPath,
              },
            },
          },
          production: {
            migrateOnStart: false,
          },
        },
      },
    ],
  },
});
