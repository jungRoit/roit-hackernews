import axios from 'axios';

/**
 * .Function to get top stories data from hackernews api.
 * 
 * @param {*} storyType
 */
const getStoryList = (storyType) => {
 return axios.get(`https://hacker-news.firebaseio.com/v0/${storyType}.json`);
};

/**
 * .Function to get individual item data from hackernews api.
 * 
 * @param {*} id
 */
const getItem = (id) => {
  return axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
};


export { getStoryList, getItem };
