import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../header';
import NewStories from '../newstories';
import TopStories from '../topstories';
import BestStories from '../beststories';
import CommentSection from '../comment-section';
import Login from '../login';
import PrivateRoute from '../private-route';

/**
 * State component for Routing.
 * 
 */
const Routes = () => {

  return (
    <Router>
      <div>
        <Header
        />
        <div>
          <Route path="/newstories" component={NewStories} />
          <Route path="/topstories" component={TopStories} />
          <Route path="/beststories" component={BestStories} />
          {/* <Route path="/story/:id/comments" component={CommentSection} /> */}
          <Route path="/login" component={Login} />
          <PrivateRoute path="/story/:id/comments" component={CommentSection} />
        </div>
      </div>
    </Router>
  );
};

export default Routes;
