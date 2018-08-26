import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import resume_doc from 'Resume.pdf';

import 'css/loader.css';
import 'css/App.css';
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/resume" component={() => (window.location = resume_doc)} />
        </Switch>
      </Router>
    );
  }
}

export default App;
