import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {SnackbarProvider} from 'notistack';
import {Provider} from 'react-redux';
import { store } from './store/store.js';
 
import './index.css';

import App from './App.jsx';


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <SnackbarProvider>
            <StrictMode>
                <Provider store={store}>
                    <App />
                </Provider>
            </StrictMode>
        </SnackbarProvider>
    </BrowserRouter>
);