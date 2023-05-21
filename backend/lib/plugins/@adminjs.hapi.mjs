
'use strict';

import AdminJSHapi from '@adminjs/hapi';

export const plugin = {
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