
'use strict';

import AdminJSHapi from ('@adminjs/hapi');

module.exports = {
    plugin: AdminJSHapi,
    options: {
        resources: [],
        rootPath: '/admin',
        auth: {
            isSecure: process.env.NODE_ENV === 'production',
        },
        registerInert: true,
    }
};