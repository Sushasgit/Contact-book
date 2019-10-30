import React from 'react';

import store from '../store';
// import Cookies from 'universal-cookie';
import {
  Router,
  Route,
} from 'react-router-dom';

import { Provider } from 'react-redux';
// import PropTypes from 'prop-types';
// import AutorisationScreen from '../pages/AutorisationScreen';
import { history } from '../history';

// import Book from '../components/Book';
import Home from '../pages/Home';

import '../index.scss';

class App extends React.Component {
  render() {
    return (
    //   <Provider store={store}>
        <Router history={history}>
            <div>
            <Route exact path="/" component={Home} />
            {/* <Route path="/book" component={Book} /> */}
          </div>
        </Router>
    // </Provider>
    );
  }
}

App.propTypes = {

};

export default App;
