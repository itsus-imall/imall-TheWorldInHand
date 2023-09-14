import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './style/Global';
import App from './App';

import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={client}>
    <GlobalStyle />
    <App />
  </QueryClientProvider>,
);
