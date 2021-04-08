import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.scss';

import WalletPage from 'components/walletPage';
import Header from  'components/common/header';

function App() {
  return (
    <div className="App">
      <Router basename="/app">
        <Header />
        <div className={'main-content'}>
          <Switch>
            <Route path="/" component={WalletPage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
