import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Global } from '@emotion/react';
import { Reset } from 'styled-reset';
import { Common } from './styles/Global/Common';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import ScrollToTop from './api/Scroll/ScrollToTop';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <BrowserRouter basename='/compass_front'>
      <ScrollToTop />
        <Global styles={Common} />
        <Reset />
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </QueryClientProvider>
);

reportWebVitals();
