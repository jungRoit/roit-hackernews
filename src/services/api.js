import axios from 'axios';

/**
 * .API class to get data from Hackernews api.
 */
class API {

  /**
   * .Function to get top stories data from hackernews api.
   * 
   * @param {*} storyType
   */
  getStoryList = (storyType) => {
    axios.get(`https://hacker-news.firebaseio.com/v0/${storyType}.json`)
      .then(res => res.data)
      .catch(err => err);
  }

  /**
   * .Function to get individual item data from hackernews api.
   * 
   * @param {*} id
   */
  getItem = (id) => {
    axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
      .then(res => res.data)
      .catch(err => err);
  }
}

export default API;
