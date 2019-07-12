import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Feed from './pages/Feed';
import NewPost from './pages/NewPost';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Feed} />
      <Route path="/newPost" component={NewPost} />
    </Switch>
  );
}

export default Routes;
