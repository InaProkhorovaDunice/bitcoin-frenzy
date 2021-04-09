import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import './App.scss';
import './styles/pages.scss';
import WalletPage from './components/walletPage';
import BuyBitcoinPage from './components/buyBitcoinPage';
import SellBitcoinPage from './components/sellBitcoinPage';
import BitcoinPricePage from './components/bitcoinPricePage';
import Header from './components/common/header';
import LeftSideBar from './components/common/leftSideBar';
import RightSideBar from './components/common/rightSideBar';

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Header />
        <div className={'main-content'}>
          <LeftSideBar />
          <Switch>
            <Redirect exact from="/" to="wallet" />
            <Route path="/wallet" component={WalletPage} />
            <Route path="/buy" component={BuyBitcoinPage} />
            <Route path="/sell" component={SellBitcoinPage} />
            <Route path="/bitcoin" component={BitcoinPricePage} />
          </Switch>
          <RightSideBar />
        </div>
      </Router>
    </div>
  );
}

export default App;
