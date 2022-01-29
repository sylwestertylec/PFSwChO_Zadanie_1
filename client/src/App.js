import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import OtherPage2 from './OtherPage2';
import Fib from './Fib';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <Link to="/">Home</Link>
          <Link to="/otherpage">FIb Calc</Link>
          <Link to="/otherpage2">Dokumentacja</Link>
        </header>
        <div>
          <Route exact path="/" component={OtherPage} />
          <Route path="/otherpage" component={Fib} />
          <Route path="/otherpage2" component={OtherPage2} />
        </div>
      </div>
    </Router>
  );
}

export default App;
