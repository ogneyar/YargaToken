import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Test } from './pages/Test';
import Header from './pages/includes/Header';
import Footer from './pages/includes/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header title="ЯргаТокен" />

      <div className="main">
        <Switch>
            <Route component={ Home } path="/" exact />
            <Route component={ About } path="/about" />
            <Route component={ Test } path="/test" />
        </Switch>
      </div>

      <Footer title="ЯргаТокен.рус" />
    </BrowserRouter> 

  );
}

export default App;
