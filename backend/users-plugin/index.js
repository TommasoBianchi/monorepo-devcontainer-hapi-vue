'use strict';

const HauteCouture = require('@hapipal/haute-couture');
const Package = require('../package.json');
const UserModel = require('./models/user.js');

exports.Model = UserModel;

exports.plugin = {
  pkg: {...Package, name: `${Package.name}/users`},
  register: async (server, options) => {
    // Custom plugin code can go here

    await HauteCouture.compose(server, options);
  },
};
