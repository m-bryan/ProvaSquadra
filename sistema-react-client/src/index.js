import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AddSistema from "./components/Sistema/AddSistema";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/addSistema" component={AddSistema} />
        </Router>
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();
