import React from 'react';
import { Route } from 'react-router-dom';
import About from './About';

const home = (props) => {
  return (
    <div>
      <Route path='/' exact render={() => <h1>This is the homepage</h1>} />
      <Route path='/about'exact component={About} />
    </div>
  )
};

export default home;