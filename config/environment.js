'use strict';

module.exports = function (environment) {
  const ENV = {
    modulePrefix: 'ember-learning',
    environment,
    rootURL: '/',
    locationType: 'history',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    firebase: {
      apiKey: 'AIzaSyDCYLOvCJOPt9zcSqvSmCpB8iSrm9LwGBI',
      authDomain: 'ember-learning-b5357.firebaseapp.com',
      databaseURL: 'https://ember-learning-b5357-default-rtdb.firebaseio.com/',
      projectId: 'ember-learning-b5357',
      storageBucket: 'ember-learning-b5357.appspot.com',
      messagingSenderId: '970111249406',
      appId: '1:970111249406:web:f20fc3c30a5c5ebc8ceeaf',
      measurementId: 'G-YD4F1NKWKM',
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
