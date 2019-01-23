import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import * as API from './services/api';

import { Route } from 'react-router-dom';
import NewStories from './components/newstories';
import TopStories from './components/topstories';
import BestStories from './components/beststories';
import CommentSection from './components/comment-section';



/**
 * App Class to render all components and include the app logic.
 * 
 */
class App extends Component {

  /**
   * 
   * @param {*} props 
   */
  constructor(props) {
    super(props);
    this.state = {
      stories: []
    };

  }


  /**
   * Calls getStories function.
   */
  componentDidMount() {
    // this.getStories('topstories');
  }

  /**
   * Function to call hackernews api to get stories id array and keep it in state.
   * 
   * @param {string} storyType 
   */
  getStories = (storyType) => {
    API.getStoryList(storyType)
      .then(res => this.setState({ stories: res.data }))
      .catch(err => err);
  }



  /**
   * 
   */
  render() {
    return (
      <div className="">
        <Header
        />
        <div>
          <Route path="/newstories" component={NewStories} />
          <Route path="/topstories" component={TopStories} />
          <Route path="/beststories" component={BestStories} />
          <Route path="/comments/:id" component={CommentSection}/>
        </div>
      </div>
        
    );
  }
}

export default App;
