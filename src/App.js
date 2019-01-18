import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import * as API from './services/api';

/**
 * App Class to render all components and include the app logic.
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

  getStoryListByType = (type) => {
    this.getStories(type);
  }

  /**
   * 
   */
  render() {
    return (
      <div className="App">
        <Header
          getStories={this.getStoryListByType}
        />
        {this.state.stories.map(story => 
          <h5 key={story}>
            {story}
          </h5>
        )}
      </div>
    );
  }
}

export default App;
