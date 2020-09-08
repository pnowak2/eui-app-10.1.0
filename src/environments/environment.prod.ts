// activated by running :
// npm run build -- --configuration=production
// OR
// npm run build-prod

import { UrlAppender } from '@eui/core';

export const environment = {
    production: true,
    enableDevToolRedux: false,
    configServiceURI: 'http://localhost:3000/configuration',
    configFilePath: '/assets/configuration.json',
    domain: '', // by letting is empty will point to localhost and port serving the app
    // You can override some modules variables in Environment. The idea is that you may have different environments
    // that communicate to different servers.
    modules: {
        errorHandling: {
            api: {
                error500: 'http://www.mocky.io/v2/5ea81b372f00002a60c4f2b2',
                custom400: 'http://www.mocky.io/v2/5ea81fb92d00007a003a3d02',
                apiNotExist: 'http://www.mocky.io/v2/5ea81ffc2d00005b003a3d05',
                admin: 'http://www.mocky.io/v2/5ea8202b2d000057003a3d0a'
            },
            notExist: '/this-doesnt-exist'
        }
    }
    // You can of course override the globals, but be careful when you have factory functions
};
