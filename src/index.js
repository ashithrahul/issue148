import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from "react-router-dom"
import ReactDOM from "react-dom";
import App from "./components/App.js";
import Home from './pages/Home/Home.js';
import Profile from './pages/Profile/Profile.js';
import Work from './pages/Work/Work.js';
import { store } from './utils/store/configStore';

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <div>
      <Route exact path='/' component={App} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/Profile' component={Profile} />
      <Route exact path='/Work/:id' component={Work} />
    </div>
  </BrowserRouter>
  </Provider>,
  document.getElementById("app"));
