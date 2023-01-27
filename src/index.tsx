
import 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ConfigProvider } from 'antd';

import '@babel/polyfill';

import 'antd/dist/antd.css';
import 'i18n/config';
import 'web-cookie-policy/dist/index.css';

import FrontendConfigurationProvider from './context/FrontendConfiguration';
import App from 'containers/App';

import './i18n/config';
import './styles/index.scss';
import { DSN, ENV_NAME, APP_BUILD } from './constants';



const queryClient = new QueryClient();

ReactDOM.render(
  <ConfigProvider
    form={{
      validateMessages: {
        required: '${label} is required.',
        types: {
          email: '${label} is not valid.',
          number: '${label} is not valid.',
        },
        number: {
          range: '${label} must be between ${min} and ${max}',
        },
      },
    }}
  >
    <QueryClientProvider client={queryClient}>
      <FrontendConfigurationProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FrontendConfigurationProvider>
    </QueryClientProvider>
  </ConfigProvider>,
  document.getElementById('root'),
);
