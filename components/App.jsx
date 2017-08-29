import React from 'react';
import { HashRouter as Router, browserHistory, Link, Route, Switch, Redirect } from 'react-router-dom';
import Profile from './Profile.jsx';
import Gallery from './Gallery.jsx';
import Portfolio from './Portfolio.jsx';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div id="main">
          <div id="nav">
            <Link to="/"><button>Home</button></Link>
            <Link to={{pathname: '/gallery'}}><button>Gallery</button></Link>
            <Link to={{pathname: '/portfolio'}}><button>Portfolio</button></Link>
          </div>
          <Switch>
            <Route exact path="/" component={Profile} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Redirect from="*" to="/" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;