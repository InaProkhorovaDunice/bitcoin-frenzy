import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import './App.scss';
import WalletPage from './components/walletPage';
import Header from './components/common/header';

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Header />
        <div className={'main-content'}>
          <Switch>
            <Redirect exact from="/" to="wallet" />
            <Route path="/wallet" component={WalletPage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
