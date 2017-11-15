import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home.jsx';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
// import $ from 'jquery';


const Header = () => (
  <nav>
    <div>
      <Link to="/">Home</Link>
    </div>
    <div>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign Up</Link>
    </div>
  </nav>

);

const Footer = () => (
  <div>
    <div>
      <Link to="/">Home</Link>
    </div>
    <div>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign Up</Link>
    </div>
  </div>

);
const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
);


const App = () => (
  <div>
    <Header />
    <Main />
    <Footer />
  </div>
);

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>
  , document.getElementById('root'),
);

// app will have header and main
