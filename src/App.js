import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Index from '@/pages/Index';
import Detail from '@/pages/Detail';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Index} />
        <Route path="/detail/:id" component={Detail} />
      </React.Fragment>
    );
  }
}


export default App;
