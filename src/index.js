import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import Iv_admin from './components/Iv_admin.js';
import * as serviceWorker from './serviceWorker';

import { HashRouter, Route, Routes } from 'react-router-dom';

ReactDOM.render(
        <HashRouter>
            <App />
        </HashRouter>, 
document.getElementById('root'));

serviceWorker.unregister();
