import React from 'react';
import axios from 'axios';

class API extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            stories: []
        };
        this.getStoryList();
    }

    getStoryList() {
        axios.get("https://hacker-news.firebaseio.com/v0/topstories.json")
        .then(res => {
            this.setState({stories:res.data});
          let datas = res.data;
          datas.map(item => {
            axios.get(`https://hacker-news.firebaseio.com/v0/item/${item}.json`)
            .then(story => console.log(story.data))
            .catch(err => console.log(err))
          })
        })
        .catch(err => console.log(err))
      
      }

    render() {
        return (
            <div>
                </div>
        )
    }
}

export default API;