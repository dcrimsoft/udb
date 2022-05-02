import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import * as serviceWorker from './serviceWorker';
import Iv_admin from './components/Iv_admin.js';

import { BrowserRouter as Router, Routes, Switch, Route } from "react-router-dom";


ReactDOM.render(
    <Router>
        <Routes>
            <Route exact path="/" element={ <App /> } />
            <Route exact path="/abt/IV_Admin" element={ <Iv_admin /> } />
        </Routes>
    </Router>, 
document.getElementById('root'));

serviceWorker.unregister();
