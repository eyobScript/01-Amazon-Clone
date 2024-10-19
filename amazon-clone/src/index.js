import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initialState, reducer } from './Utility/reducer';
import { DataProvider } from './DataProvider/DataProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataProvider render={reducer} initialState={initialState}>
       <App />
    </DataProvider>
  </React.StrictMode>
);

