import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomePage from './pages/homepage/homepage.component';

import './App.scss';
import './background.scss';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path='/' component={HomePage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
