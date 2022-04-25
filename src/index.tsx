import { Ignitor } from '@ignitor/core';

const option: Ignitor.Option = {
  application: {
    component: () => import('./App'),
    rootElementId: 'app',
  },
  router: {
    isUseBrowserRouter: true,
    basename: process.env.PUBLIC_URL,
  },
  serviceWorker: {
    isUse: process.env.NODE_ENV === 'production',
    config: {
      url: './',
      file: 'service-worker.js',
    },
  },
};

Ignitor.initialize(option);
